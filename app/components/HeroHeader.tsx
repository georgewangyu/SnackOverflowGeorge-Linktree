"use client";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { site } from "../content";

export function HeroHeader() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header className="w-full">
      <div className="container mx-auto px-4 pt-8 pb-6 md:pt-12 md:pb-8">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row">
          <div className="w-full flex-1 sm:w-auto">
            <h1 className="font-mono text-2xl md:text-4xl font-bold text-foreground-light dark:text-foreground-dark mb-1 md:mb-2">
              {site.title}
            </h1>
            <p className="text-sm md:text-lg text-foreground-light dark:text-foreground-dark opacity-80">
              {site.tagline}
            </p>
          </div>
          
          <div className="flex w-full items-center justify-between gap-2 sm:w-auto sm:justify-end md:gap-3">
            <div className="flex min-w-0 flex-wrap items-center gap-2 md:gap-3">
              {site.temporaryBioLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex min-h-11 items-center gap-2 rounded-full bg-[#121212] px-3 py-2 text-white shadow-md transition-transform duration-180 hover:scale-[1.03] focus:outline-none focus:ring-2 focus:ring-current focus:ring-offset-2 focus:ring-offset-background-light dark:bg-white dark:text-[#121212] dark:focus:ring-offset-background-dark md:px-4"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 shrink-0 md:h-5 md:w-5"
                    aria-hidden="true"
                  >
                    <rect x="3" y="4" width="18" height="18" rx="2" />
                    <path d="M16 2v4" />
                    <path d="M8 2v4" />
                    <path d="M3 10h18" />
                    <path d="M8 14h.01" />
                    <path d="M12 14h.01" />
                    <path d="M16 14h.01" />
                  </svg>
                  <span className="flex flex-col text-left leading-none">
                    <span className="text-xs font-semibold md:text-sm">{link.label}</span>
                    <span className="mt-1 text-[10px] font-medium opacity-70 md:text-xs">{link.detail}</span>
                  </span>
                </a>
              ))}
            </div>

            {mounted && (
              <button
                onClick={toggleTheme}
                aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
                className="p-3 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-current focus:ring-offset-2 focus:ring-offset-background-light dark:focus:ring-offset-background-dark"
              >
                {theme === "dark" ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-6 h-6"
                  >
                    <circle cx="12" cy="12" r="5" />
                    <line x1="12" y1="1" x2="12" y2="3" />
                    <line x1="12" y1="21" x2="12" y2="23" />
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                    <line x1="1" y1="12" x2="3" y2="12" />
                    <line x1="21" y1="12" x2="23" y2="12" />
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-6 h-6"
                  >
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                  </svg>
                )}
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
