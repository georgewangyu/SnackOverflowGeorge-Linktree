"use client";

import { FormEvent, useEffect, useId, useRef, useState } from "react";

type FreeGuideModalProps = {
  eyebrow: string;
  title: string;
  detail: string;
  meta: string;
  cta: string;
};

type SignupResponse = {
  ok?: boolean;
  downloadUrl?: string;
  error?: string;
};

export function FreeGuideModal({
  eyebrow,
  title,
  detail,
  meta,
  cta,
}: FreeGuideModalProps) {
  const titleId = useId();
  const emailRef = useRef<HTMLInputElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [marketingOptIn, setMarketingOptIn] = useState(false);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle",
  );
  const [error, setError] = useState("");
  const [downloadUrl, setDownloadUrl] = useState("");

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.setTimeout(() => emailRef.current?.focus(), 0);

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setError("");

    try {
      const result = await fetch("/api/free-guide", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, company, marketingOptIn }),
      });
      const payload = (await result.json()) as SignupResponse;

      if (!result.ok || !payload.downloadUrl) {
        throw new Error(payload.error || "The guide is temporarily unavailable.");
      }

      setDownloadUrl(payload.downloadUrl);
      setStatus("success");
    } catch (submissionError) {
      setError(
        submissionError instanceof Error
          ? submissionError.message
          : "The guide is temporarily unavailable.",
      );
      setStatus("error");
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="group flex min-h-44 w-full flex-col rounded-2xl bg-white p-4 text-left text-[#141414] transition duration-200 hover:-translate-y-1 hover:shadow-xl"
      >
        <span className="text-[0.68rem] font-bold uppercase tracking-[0.14em] text-[#008b93]">
          {eyebrow}
        </span>
        <span className="mt-3 block text-xl font-black leading-tight">{title}</span>
        <span className="mt-2 block text-sm leading-5 text-black/58">{detail}</span>
        <span className="mt-auto flex w-full items-center justify-between border-t border-black/10 pt-4 text-sm font-bold">
          <span>{meta}</span>
          <span className="text-right text-black/45 transition group-hover:text-black">{cta}</span>
        </span>
      </button>

      {isOpen ? (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-black/55 p-3 backdrop-blur-sm sm:items-center sm:p-6"
          onMouseDown={(event) => {
            if (event.currentTarget === event.target) {
              setIsOpen(false);
            }
          }}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className="max-h-[92vh] w-full max-w-lg overflow-y-auto rounded-[1.75rem] bg-[#f8f7f2] p-5 text-[#141414] shadow-2xl sm:p-7"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#008b93]">
                  Free PDF guide
                </p>
                <h2 id={titleId} className="mt-2 text-2xl font-black leading-tight sm:text-3xl">
                  {status === "success" ? "Your guide is ready." : "How AI Actually Works"}
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Close free guide signup"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-black/10 bg-white text-xl font-medium text-black/55 transition hover:text-black"
              >
                ×
              </button>
            </div>

            {status === "success" ? (
              <div className="mt-6">
                <p className="leading-7 text-black/65">
                  Download the PDF now. This private link lasts five minutes, so save a local
                  copy.
                </p>
                <a
                  href={downloadUrl}
                  referrerPolicy="no-referrer"
                  rel="nofollow"
                  className="mt-6 flex w-full items-center justify-between rounded-2xl bg-[#202126] px-5 py-4 font-bold text-white transition hover:-translate-y-0.5 hover:shadow-lg"
                >
                  <span>Download the free guide</span>
                  <span aria-hidden="true">↓</span>
                </a>
                <p className="mt-4 text-sm leading-6 text-black/48">
                  You can close this window after saving the PDF.
                </p>
              </div>
            ) : (
              <form className="mt-6" onSubmit={handleSubmit}>
                <p className="leading-7 text-black/65">
                  Enter your email to get the practical guide to prompts, context, tools, memory,
                  review, and useful business workflows.
                </p>

                <label className="mt-5 block text-sm font-bold" htmlFor={`${titleId}-email`}>
                  Email address
                </label>
                <input
                  ref={emailRef}
                  id={`${titleId}-email`}
                  name="email"
                  type="email"
                  autoComplete="email"
                  inputMode="email"
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Your email"
                  className="mt-2 w-full rounded-xl border border-black/15 bg-white px-4 py-3.5 text-base shadow-inner outline-none transition focus:border-[#315fd6] focus:ring-2 focus:ring-[#315fd6]/15"
                />

                <div className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
                  <label htmlFor={`${titleId}-company`}>Company</label>
                  <input
                    id={`${titleId}-company`}
                    name="company"
                    value={company}
                    onChange={(event) => setCompany(event.target.value)}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                <label className="mt-4 flex cursor-pointer items-start gap-3 rounded-xl border border-black/10 bg-white p-3.5 text-sm leading-5 text-black/62">
                  <input
                    type="checkbox"
                    checked={marketingOptIn}
                    onChange={(event) => setMarketingOptIn(event.target.checked)}
                    className="mt-0.5 h-4 w-4 shrink-0 accent-[#315fd6]"
                  />
                  <span>
                    Send me occasional practical emails about AI workflows, coding agents, and
                    business automation. Unsubscribe anytime.
                  </span>
                </label>

                {error ? (
                  <p role="alert" className="mt-4 text-sm font-semibold text-[#b42318]">
                    {error}
                  </p>
                ) : null}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="mt-5 flex w-full items-center justify-center rounded-2xl bg-[#202126] px-5 py-4 font-bold text-white transition hover:-translate-y-0.5 hover:shadow-lg disabled:cursor-wait disabled:opacity-60"
                >
                  {status === "submitting" ? "Preparing your guide…" : "Get the free guide"}
                </button>
              </form>
            )}
          </section>
        </div>
      ) : null}
    </>
  );
}
