import Link from "next/link";
import { betaNav } from "./data";

export function BetaNav({ current }: { current: string }) {
  return (
    <nav className="mx-auto flex w-full max-w-6xl flex-wrap items-center gap-2 px-4 pt-4 text-sm">
      {betaNav.map((item) => {
        const active = item.href === current;

        return (
          <Link
            key={item.href}
            href={item.href}
            className={`rounded-full border px-3 py-2 font-medium transition ${
              active
                ? "border-black bg-black text-white"
                : "border-black/10 bg-white/70 text-black hover:border-black/30"
            }`}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
