import { unstable_noStore as noStore } from "next/cache";
import { NextRequest, NextResponse } from "next/server";
import {
  createFreeGuideDownloadUrl,
  saveFreeGuideLead,
  sendFreeGuideEmail,
} from "../../../lib/free-guide";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

const PRIVATE_RESPONSE_HEADERS = {
  "Cache-Control": "private, no-store, max-age=0",
  Pragma: "no-cache",
  "Referrer-Policy": "no-referrer",
  "X-Content-Type-Options": "nosniff",
  "X-Robots-Tag": "noindex, nofollow, noarchive",
};

function readString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && email.length <= 254;
}

function response(body: unknown, status = 200) {
  return NextResponse.json(body, {
    status,
    headers: PRIVATE_RESPONSE_HEADERS,
  });
}

export async function POST(request: NextRequest) {
  noStore();

  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return response({ error: "Enter a valid email address." }, 400);
  }

  const payload = typeof body === "object" && body !== null ? body : {};
  const email = readString(Reflect.get(payload, "email")).toLowerCase();
  const company = readString(Reflect.get(payload, "company"));
  const marketingOptIn = Reflect.get(payload, "marketingOptIn") === true;

  if (company) {
    return response({ ok: true });
  }

  if (!isValidEmail(email)) {
    return response({ error: "Enter a valid email address." }, 400);
  }

  try {
    await saveFreeGuideLead({ email, marketingOptIn });
    const downloadUrl = await createFreeGuideDownloadUrl();
    let emailSent = true;

    try {
      await sendFreeGuideEmail({ email, marketingOptIn }, downloadUrl);
    } catch (error) {
      emailSent = false;
      console.error("Free-guide email delivery failed", error);
    }

    return response({ ok: true, downloadUrl, emailSent });
  } catch (error) {
    console.error("Free-guide signup failed", error);
    return response(
      { error: "The guide is temporarily unavailable. Please try again shortly." },
      503,
    );
  }
}
