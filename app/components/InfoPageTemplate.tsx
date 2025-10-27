"use client";

import Image from "next/image";

/**
 * Reusable template for info pages with image + bio layout
 * Used by /about and /playground pages
 */
interface InfoPageTemplateProps {
  image: string;
  title: string;
  subtitle: string;
  sections: Array<{
    heading: string;
    content: string;
  }>;
}

export function InfoPageTemplate({ image, title, subtitle, sections }: InfoPageTemplateProps) {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      <div className="container mx-auto px-4 py-16">
        {/* Top Section: Image + Greeting */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Left: Image */}
          <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-md">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>

          {/* Right: Greeting */}
          <div className="flex flex-col justify-center">
            <h1 className="text-5xl md:text-6xl font-mono font-bold text-foreground-light dark:text-foreground-dark mb-4">
              {title}
            </h1>
            <p className="text-2xl md:text-3xl font-mono text-foreground-light dark:text-foreground-dark opacity-80">
              {subtitle}
            </p>
          </div>
        </div>

        {/* Bottom Section: Content */}
        <div className="space-y-8 max-w-4xl">
          {sections.map((section, index) => (
            <div key={index}>
              <h2 className="text-2xl font-mono font-bold text-foreground-light dark:text-foreground-dark mb-3">
                {section.heading}
              </h2>
              <p className="text-lg font-mono text-foreground-light dark:text-foreground-dark opacity-90 leading-relaxed">
                {section.content}
              </p>
            </div>
          ))}
        </div>

        {/* Back Link */}
        <div className="mt-16">
          <a
            href="/"
            className="inline-block font-mono text-foreground-light dark:text-foreground-dark hover:opacity-70 transition-opacity"
          >
            ← back
          </a>
        </div>
      </div>
    </div>
  );
}

