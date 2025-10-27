"use client";

import Link from "next/link";
import Image from "next/image";

interface AppIconProps {
  title: string;
  icon: string;
  href: string;
  alt: string;
  size?: "sm" | "lg";
}

export function AppIcon({ title, icon, href, alt, size = "sm" }: AppIconProps) {
  const sizeClasses = {
    sm: "w-16 h-16 md:w-24 md:h-24",
    lg: "w-48 h-48 md:w-80 md:h-80",
  };

  const captionSizeClasses = {
    sm: "text-xs md:text-sm",
    lg: "text-base md:text-lg",
  };

  return (
    <Link
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group flex flex-col items-center gap-2 hover:scale-[1.04] transition-transform duration-180 focus:outline-none focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark rounded-2xl"
    >
      {/* Image as the tile with rounded corners */}
      <div className={`relative ${sizeClasses[size]} rounded-2xl overflow-hidden shadow-md`}>
        <Image
          src={icon}
          alt={alt}
          fill
          className="object-cover"
          sizes={size === "sm" ? "96px" : "320px"}
        />
      </div>
      {/* Caption underneath */}
      <span className={`${captionSizeClasses[size]} font-medium text-center text-foreground-light dark:text-foreground-dark`}>
        {title}
      </span>
    </Link>
  );
}

