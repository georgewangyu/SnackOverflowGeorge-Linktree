import "server-only";

import { issueSignedToken, presignUrl } from "@vercel/blob";

const RESEND_API_URL = "https://api.resend.com";
const FREE_GUIDE_BLOB_PREFIX = "products/free-ai-business-guide/";
const DOWNLOAD_URL_LIFETIME_MS = 5 * 60 * 1000;

export type FreeGuideLead = {
  email: string;
  marketingOptIn: boolean;
};

type ResendConfiguration = {
  apiKey: string;
  segmentId: string;
  topicId: string;
};

function getResendConfiguration(): ResendConfiguration {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  const segmentId = process.env.RESEND_FREE_GUIDE_SEGMENT_ID?.trim();
  const topicId = process.env.RESEND_AI_WORKFLOWS_TOPIC_ID?.trim();

  if (!apiKey || !segmentId || !topicId) {
    throw new Error("Missing Resend free-guide configuration.");
  }

  return { apiKey, segmentId, topicId };
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

function getFreeGuideBlobPathname() {
  const pathname = process.env.FREE_GUIDE_BLOB_PATHNAME;

  if (
    !pathname ||
    !pathname.startsWith(FREE_GUIDE_BLOB_PREFIX) ||
    !pathname.endsWith(".pdf") ||
    pathname.includes("..") ||
    pathname.includes("://")
  ) {
    throw new Error("Missing or invalid free-guide Blob configuration.");
  }

  return pathname;
}

async function resendRequest(
  path: string,
  options: RequestInit,
  apiKey: string,
  acceptedStatuses: number[] = [],
) {
  const response = await fetch(`${RESEND_API_URL}${path}`, {
    ...options,
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
      ...options.headers,
    },
  });

  if (response.ok || acceptedStatuses.includes(response.status)) {
    return response;
  }

  throw new Error(`Resend request failed with status ${response.status}.`);
}

export async function saveFreeGuideLead(lead: FreeGuideLead) {
  const { apiKey, segmentId, topicId } = getResendConfiguration();
  const requestedAt = new Date().toISOString();
  const guideVersion = process.env.FREE_GUIDE_VERSION?.trim() || "v1";
  const properties: Record<string, string> = {
    lead_source: "linktree-free-ai-guide",
    guide_version: guideVersion,
    guide_requested_at: requestedAt,
  };

  if (lead.marketingOptIn) {
    properties.marketing_consent_at = requestedAt;
  }

  const createResponse = await resendRequest(
    "/contacts",
    {
      method: "POST",
      body: JSON.stringify({
        email: lead.email,
        unsubscribed: !lead.marketingOptIn,
        properties: {
          ...properties,
          marketing_consent_at: lead.marketingOptIn
            ? requestedAt
            : "not_opted_in",
        },
        segments: [{ id: segmentId }],
        topics: [
          {
            id: topicId,
            subscription: lead.marketingOptIn ? "opt_in" : "opt_out",
          },
        ],
      }),
    },
    apiKey,
    [409],
  );

  if (createResponse.status !== 409) {
    return;
  }

  const encodedEmail = encodeURIComponent(lead.email);
  await resendRequest(
    `/contacts/${encodedEmail}`,
    {
      method: "PATCH",
      body: JSON.stringify({
        ...(lead.marketingOptIn ? { unsubscribed: false } : {}),
        properties,
      }),
    },
    apiKey,
  );

  await resendRequest(
    `/contacts/${encodedEmail}/segments/${segmentId}`,
    { method: "POST" },
    apiKey,
    [409],
  );

  if (lead.marketingOptIn) {
    await resendRequest(
      `/contacts/${encodedEmail}/topics`,
      {
        method: "PATCH",
        body: JSON.stringify({
          topics: [{ id: topicId, subscription: "opt_in" }],
        }),
      },
      apiKey,
    );
  }
}

export async function createFreeGuideDownloadUrl() {
  const pathname = getFreeGuideBlobPathname();
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

  downloadUrl.searchParams.set("download", "1");
  return downloadUrl.toString();
}

export async function sendFreeGuideEmail(
  lead: FreeGuideLead,
  attachmentUrl: string,
) {
  const { apiKey } = getResendConfiguration();
  const from = process.env.RESEND_FROM_EMAIL?.trim();
  const replyTo = process.env.RESEND_REPLY_TO_EMAIL?.trim();

  if (!from || !replyTo) {
    throw new Error("Missing Resend sender configuration.");
  }

  const text = [
    "Here is your copy of How AI Actually Works.",
    "",
    "I made this guide to explain the pieces that turn an AI model into a useful workflow: prompts, context, tools, memory, evaluation, and human review.",
    "",
    "The PDF is attached to this email.",
    "",
    "George",
  ].join("\n");

  const html = `
    <div style="margin:0 auto;max-width:560px;padding:24px 16px;font-family:Arial,sans-serif;color:#202126;line-height:1.65">
      <p style="font-size:12px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:#008b93">Free AI workflow guide</p>
      <h1 style="margin:8px 0 20px;font-size:28px;line-height:1.2">Here is your copy of How AI Actually Works.</h1>
      <p>I made this guide to explain the pieces that turn an AI model into a useful workflow: prompts, context, tools, memory, evaluation, and human review.</p>
      <p>The PDF is attached to this email.</p>
      <p style="margin-top:28px">George</p>
    </div>
  `;

  await resendRequest(
    "/emails",
    {
      method: "POST",
      body: JSON.stringify({
        from,
        to: [lead.email],
        reply_to: replyTo,
        subject: "Your copy of How AI Actually Works",
        text,
        html,
        attachments: [
          {
            path: attachmentUrl,
            filename: "how-ai-actually-works-george-wang.pdf",
          },
        ],
        tags: [
          { name: "category", value: "free-guide" },
          { name: "source", value: "linktree" },
        ],
      }),
    },
    apiKey,
  );
}
