"use client";

import Image from "next/image";
import { site } from "../content";

export function AboutCard() {
  const { about } = site;

  return (
    <section className="w-full mb-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          {/* Profile Photo */}
          <div className="relative w-48 h-48 md:w-56 md:h-56 flex-shrink-0">
            <div className="relative w-full h-full rounded-2xl overflow-hidden bg-gray-200 dark:bg-gray-700">
              {about.photo ? (
                <Image
                  src={about.photo}
                  alt="Profile photo"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 192px, 224px"
                  priority
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="80"
                    height="80"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-gray-400"
                  >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
              )}
            </div>
          </div>

          {/* Text Content */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl font-bold mb-4 text-foreground-light dark:text-foreground-dark">
              About Me
            </h2>
            <p className="text-lg mb-4 text-foreground-light dark:text-foreground-dark opacity-90">
              {about.blurb}
            </p>
            {about.linkText && about.linkHref && (
              <a
                href={about.linkHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center text-primary-light dark:text-primary-dark hover:underline focus:outline-none focus:ring-2 focus:ring-current focus:ring-offset-2 rounded"
              >
                {about.linkText} →
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

