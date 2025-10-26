"use client";

import { site } from "../content";

export function NewsletterCTA() {
  const { newsletter } = site;
  const isDisabled = newsletter.href === "#";

  return (
    <section className="w-full mb-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          {isDisabled ? (
            <button
              disabled
              className="px-8 py-4 bg-gray-300 dark:bg-gray-700 text-gray-500 dark:text-gray-400 rounded-2xl font-medium cursor-not-allowed"
              title="Coming soon"
              aria-label="Newsletter signup coming soon"
            >
              {newsletter.ctaText}
            </button>
          ) : (
            <a
              href={newsletter.href}
              target="_blank"
              rel="noreferrer"
              className="px-8 py-4 bg-primary-light dark:bg-primary-dark text-white rounded-2xl font-medium hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark focus:ring-offset-2 focus:ring-offset-background-light dark:focus:ring-offset-background-dark"
              aria-label="Subscribe to newsletter"
            >
              {newsletter.ctaText}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}

