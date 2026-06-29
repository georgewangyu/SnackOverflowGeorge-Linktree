import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

export function SmartLink({
  href,
  className,
  children,
  ariaLabel,
}: {
  href: string;
  className?: string;
  children: ReactNode;
  ariaLabel?: string;
}) {
  const isExternal = href.startsWith("http") || href.startsWith("mailto:");

  return (
    <Link
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
      aria-label={ariaLabel}
      className={className}
    >
      {children}
    </Link>
  );
}

export function IconTile({
  title,
  detail,
  href,
  icon,
  className = "",
}: {
  title: string;
  detail?: string;
  href: string;
  icon?: string;
  className?: string;
}) {
  return (
    <SmartLink
      href={href}
      className={`group flex min-h-24 items-center gap-4 rounded-2xl border border-black/10 bg-white p-4 text-left shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg ${className}`}
    >
      {icon ? (
        <span className="relative h-12 w-12 shrink-0 overflow-hidden rounded-xl bg-black/5">
          <Image src={icon} alt="" fill className="object-cover" sizes="48px" />
        </span>
      ) : (
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-black text-sm font-bold text-white">
          SO
        </span>
      )}
      <span className="min-w-0">
        <span className="block text-base font-semibold leading-tight text-black">{title}</span>
        {detail ? (
          <span className="mt-1 block text-sm leading-snug text-black/58">{detail}</span>
        ) : null}
      </span>
    </SmartLink>
  );
}
