"use client";

import Image from "next/image";
import Link from "next/link";
import { site } from "../content";

export function SocialRow() {
  return (
    <section className="w-full mb-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
          {site.socials.map((social, index) => (
            <Link
              key={index}
              href={social.href || "#"}
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col items-center gap-2 p-3 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark focus:ring-offset-2 focus:ring-offset-background-light dark:focus:ring-offset-background-dark"
              aria-label={`Visit ${social.title}`}
            >
              <div className="relative w-12 h-12 flex-shrink-0">
                <Image
                  src={social.icon}
                  alt={`${social.title} icon`}
                  fill
                  className="object-contain"
                  sizes="48px"
                />
              </div>
              <span className="text-xs font-medium text-foreground-light dark:text-foreground-dark group-hover:text-primary-light dark:group-hover:text-primary-dark transition-colors">
                {social.title}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

