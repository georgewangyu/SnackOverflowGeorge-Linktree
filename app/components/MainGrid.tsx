"use client";

import { site } from "../content";
import { AboutCard } from "./AboutCard";
import { AppIcon } from "./AppIcon";
import { FeatureTile } from "./FeatureTile";

export function MainGrid() {
  return (
    <div className="w-full mb-16">
      <div className="container mx-auto px-4">
        {/* Mobile: single column stacked, Desktop: 2-column grid */}
        <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-12">
          {/* MOBILE: Stacked layout */}
          <div className="flex flex-col gap-6 md:hidden">
            {/* About Card */}
            <AboutCard />
            
            {/* Personal Items - 2x2 Grid */}
            <div className="grid grid-cols-2 gap-3">
              {site.personalItems.map((item, index) => (
                <AppIcon
                  key={index}
                  title={item.title}
                  icon={item.icon}
                  href={item.href}
                  alt={item.alt}
                />
              ))}
            </div>

            {/* Socials - 2x2 Grid */}
            <div className="grid grid-cols-2 gap-3">
              {site.socials.map((social, index) => (
                <AppIcon
                  key={index}
                  title={social.title}
                  icon={social.icon}
                  href={social.href}
                  alt={social.title}
                />
              ))}
            </div>

            {/* Feature Tile */}
            <FeatureTile />
          </div>

          {/* DESKTOP: Two column layout */}
          <div className="hidden md:flex md:flex-col gap-8">
            {/* About Card */}
            <AboutCard />
            
            {/* Personal Items - 2x2 Grid */}
            <div>
              <div className="grid grid-cols-2 gap-4">
                {site.personalItems.map((item, index) => (
                  <AppIcon
                    key={index}
                    title={item.title}
                    icon={item.icon}
                    href={item.href}
                    alt={item.alt}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="hidden md:flex md:flex-col gap-8">
            {/* Socials - 2x2 Grid */}
            <div>
              <div className="grid grid-cols-2 gap-4">
                {site.socials.map((social, index) => (
                  <AppIcon
                    key={index}
                    title={social.title}
                    icon={social.icon}
                    href={social.href}
                    alt={social.title}
                  />
                ))}
              </div>
            </div>

            {/* Feature Tile */}
            <div className="flex-1">
              <FeatureTile />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

