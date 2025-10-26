"use client";

import Link from "next/link";
import Image from "next/image";

interface AppIconProps {
  title: string;
  icon: string;
  href: string;
  alt: string;
}

export function AppIcon({ title, icon, href, alt }: AppIconProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group flex flex-col items-center gap-3 p-4 bg-white dark:bg-gray-800 rounded-2xl hover:scale-[1.04] transition-transform duration-180 focus:outline-none focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark focus:ring-offset-2 focus:ring-offset-background-light dark:focus:ring-offset-background-dark"
    >
      <div className="relative w-16 h-16 md:w-20 md:h-20 flex-shrink-0">
        <Image
          src={icon}
          alt={alt}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 64px, 80px"
        />
      </div>
      <span className="text-sm font-medium text-center text-foreground-light dark:text-foreground-dark group-hover:text-primary-light dark:group-hover:text-primary-dark transition-colors">
        {title}
      </span>
    </Link>
  );
}

