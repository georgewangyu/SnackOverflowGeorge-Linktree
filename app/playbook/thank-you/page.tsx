import type { Metadata } from "next";
import { unstable_noStore as noStore } from "next/cache";
import Link from "next/link";
import {
  normalizeCheckoutSessionId,
  verifyPlaybookPurchase,
} from "../../../lib/playbook-access";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export const metadata: Metadata = {
  title: "Your AI Workflow Pilot Playbook",
  description: "Download the Seven-Day AI Workflow Pilot Playbook.",
  robots: {
    index: false,
    follow: false,
  },
};

type PlaybookThankYouPageProps = {
  searchParams?: {
    session_id?: string | string[];
  };
};

export default async function PlaybookThankYouPage({
  searchParams,
}: PlaybookThankYouPageProps) {
  noStore();

  const sessionId = normalizeCheckoutSessionId(searchParams?.session_id);
  const access = await verifyPlaybookPurchase(sessionId);

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f8f7f2] px-4 py-12 text-[#141414]">
      <section className="w-full max-w-xl rounded-[1.75rem] border border-black/10 bg-white p-7 shadow-sm sm:p-10">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#008b93]">
          {access.ok ? "Payment verified" : "Secure download"}
        </p>
        <h1 className="mt-4 text-3xl font-black leading-tight sm:text-4xl">
          {access.ok ? "Your playbook is ready." : "We could not verify this download."}
        </h1>
        <p className="mt-4 leading-7 text-black/65">
          {access.ok
            ? "Download the Seven-Day AI Workflow Pilot Playbook and start with one repeated workflow, one owner, and one measurable baseline."
            : "Open the link Stripe sent you after checkout. If that link has expired or you still cannot access the file, email me and I will help."}
        </p>

        {access.ok && sessionId ? (
          <a
            href={`/api/playbook/download?session_id=${encodeURIComponent(sessionId)}`}
            referrerPolicy="no-referrer"
            rel="nofollow"
            className="mt-7 flex w-full items-center justify-between rounded-2xl bg-[#202126] px-5 py-4 font-bold text-white transition hover:-translate-y-0.5 hover:shadow-lg"
          >
            <span>Download the PDF</span>
            <span aria-hidden="true">↓</span>
          </a>
        ) : null}

        <p className="mt-5 text-sm leading-6 text-black/50">
          {access.ok
            ? "The download link is short-lived, so save a local copy."
            : "Return to the main page and use the email link if you still need help."}
        </p>

        <Link className="mt-7 inline-block text-sm font-bold text-[#315fd6]" href="/">
          ← Back to George&apos;s links
        </Link>
      </section>
    </main>
  );
}
