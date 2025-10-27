"use client";

import Image from "next/image";
import Link from "next/link";
import { site } from "../content";

export function AboutCard() {
  const { about } = site;

  return (
    <Link 
      href="/about"
      className="flex flex-col items-center gap-2 hover:scale-[1.02] transition-transform duration-180 focus:outline-none focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark rounded-2xl"
    >
      {/* Large image tile */}
      <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-md hover:scale-[1.04] transition-transform duration-180">
        {about.photo ? (
          <Image
            src={about.photo}
            alt="About Me"
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 256px, 320px"
            priority
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-200 dark:bg-gray-700">
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
      {/* Caption */}
      <span className="text-lg font-medium text-center text-foreground-light dark:text-foreground-dark">
        About Me
      </span>
    </Link>
  );
}

