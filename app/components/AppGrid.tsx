"use client";

import { site } from "../content";
import { AppIcon } from "./AppIcon";

export function AppGrid() {
  return (
    <section className="w-full mb-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
          {site.apps.map((app, index) => (
            <AppIcon
              key={index}
              title={app.title}
              icon={app.icon}
              href={app.href}
              alt={app.alt}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

