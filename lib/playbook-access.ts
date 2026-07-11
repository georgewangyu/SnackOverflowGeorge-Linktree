import "server-only";

import { issueSignedToken, presignUrl } from "@vercel/blob";
import Stripe from "stripe";

const PLAYBOOK_PRICE_ID = "price_1Ts61EDZb8mW4FuAVKS1phfP";
const PLAYBOOK_PAYMENT_LINK_ID = "plink_1Ts62TDZb8mW4FuAI0FMeBLi";
const PLAYBOOK_BLOB_PREFIX = "products/seven-day-ai-workflow-pilot/";
const DOWNLOAD_URL_LIFETIME_MS = 5 * 60 * 1000;

const CHECKOUT_SESSION_ID_PATTERN = /^cs_(?:live|test)_[A-Za-z0-9]+$/;

export type PlaybookAccessResult =
  | { ok: true }
  | { ok: false; reason: "missing" | "invalid" | "unavailable" };

let stripeClient: Stripe | undefined;

function getStripeClient() {
  const secretKey = process.env.STRIPE_SECRET_KEY;

  if (!secretKey) {
    throw new Error("Missing Stripe server configuration.");
  }

  stripeClient ??= new Stripe(secretKey, {
    maxNetworkRetries: 2,
  });

  return stripeClient;
}

function expandableId(value: { id: string } | string | null) {
  if (!value) {
    return null;
  }

  return typeof value === "string" ? value : value.id;
}

export function normalizeCheckoutSessionId(value: string | string[] | undefined) {
  if (typeof value !== "string" || !CHECKOUT_SESSION_ID_PATTERN.test(value)) {
    return null;
  }

  return value;
}

export async function verifyPlaybookPurchase(
  sessionId: string | null,
): Promise<PlaybookAccessResult> {
  if (!sessionId) {
    return { ok: false, reason: "missing" };
  }

  try {
    const session = await getStripeClient().checkout.sessions.retrieve(sessionId, {
      expand: ["line_items.data.price"],
    });

    const purchasedPlaybook = session.line_items?.data.some(
      (lineItem) =>
        expandableId(lineItem.price) === PLAYBOOK_PRICE_ID &&
        (lineItem.quantity ?? 0) >= 1,
    );

    const validPurchase =
      session.livemode &&
      session.mode === "payment" &&
      session.status === "complete" &&
      session.payment_status === "paid" &&
      expandableId(session.payment_link) === PLAYBOOK_PAYMENT_LINK_ID &&
      purchasedPlaybook === true;

    return validPurchase
      ? { ok: true }
      : { ok: false, reason: "invalid" };
  } catch (error) {
    if (error instanceof Stripe.errors.StripeInvalidRequestError) {
      return { ok: false, reason: "invalid" };
    }

    return { ok: false, reason: "unavailable" };
  }
}

function getPlaybookBlobPathname() {
  const pathname = process.env.PLAYBOOK_BLOB_PATHNAME;

  if (
    !pathname ||
    !pathname.startsWith(PLAYBOOK_BLOB_PREFIX) ||
    !pathname.endsWith(".pdf") ||
    pathname.includes("..") ||
    pathname.includes("://")
  ) {
    throw new Error("Missing or invalid playbook Blob configuration.");
  }

  return pathname;
}

function getBlobAuth() {
  const oidcToken = process.env.VERCEL_OIDC_TOKEN;
  const storeId = process.env.BLOB_STORE_ID;

  if (oidcToken && storeId) {
    return { oidcToken, storeId };
  }

  const token = process.env.BLOB_READ_WRITE_TOKEN;

  if (token) {
    return { token };
  }

  throw new Error("Missing private Blob server configuration.");
}

export async function createPlaybookDownloadUrl() {
  const pathname = getPlaybookBlobPathname();
  const validUntil = Date.now() + DOWNLOAD_URL_LIFETIME_MS;
  const signedToken = await issueSignedToken({
    ...getBlobAuth(),
    pathname,
    operations: ["get"],
    validUntil,
  });
  const { presignedUrl } = await presignUrl(signedToken, {
    access: "private",
    operation: "get",
    pathname,
    validUntil,
  });
  const downloadUrl = new URL(presignedUrl);

  // Vercel Blob honors this delivery hint without broadening the signed GET scope.
  downloadUrl.searchParams.set("download", "1");

  return downloadUrl.toString();
}
