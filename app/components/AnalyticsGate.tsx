"use client";

import { Analytics } from "@vercel/analytics/react";
import { usePathname } from "next/navigation";

export function AnalyticsGate() {
  const pathname = usePathname();

  if (pathname === "/playbook/thank-you") {
    return null;
  }

  return <Analytics />;
}
