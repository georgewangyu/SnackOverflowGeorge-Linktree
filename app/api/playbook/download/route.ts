import { unstable_noStore as noStore } from "next/cache";
import { NextRequest, NextResponse } from "next/server";
import {
  createPlaybookDownloadUrl,
  normalizeCheckoutSessionId,
  verifyPlaybookPurchase,
} from "../../../../lib/playbook-access";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

const PRIVATE_RESPONSE_HEADERS = {
  "Cache-Control": "private, no-store, max-age=0",
  Pragma: "no-cache",
  "Referrer-Policy": "no-referrer",
  "X-Content-Type-Options": "nosniff",
  "X-Robots-Tag": "noindex, nofollow, noarchive",
};

function errorResponse(message: string, status: number) {
  return NextResponse.json(
    { error: message },
    {
      status,
      headers: PRIVATE_RESPONSE_HEADERS,
    },
  );
}

export async function GET(request: NextRequest) {
  noStore();

  const sessionId = normalizeCheckoutSessionId(
    request.nextUrl.searchParams.get("session_id") ?? undefined,
  );

  if (!sessionId) {
    return errorResponse("A valid purchase session is required.", 400);
  }

  const access = await verifyPlaybookPurchase(sessionId);

  if (!access.ok) {
    return errorResponse(
      access.reason === "unavailable"
        ? "The download service is temporarily unavailable."
        : "This purchase session cannot access the playbook.",
      access.reason === "unavailable" ? 503 : 403,
    );
  }

  try {
    const downloadUrl = await createPlaybookDownloadUrl();
    const response = NextResponse.redirect(downloadUrl, 303);

    Object.entries(PRIVATE_RESPONSE_HEADERS).forEach(([name, value]) => {
      response.headers.set(name, value);
    });

    return response;
  } catch {
    return errorResponse("The download service is temporarily unavailable.", 503);
  }
}
