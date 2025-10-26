"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { site } from "../content";

export function FeatureTile() {
  const { feature } = site;
  const [showConfetti, setShowConfetti] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mediaQuery.matches);
    
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  const handleClick = () => {
    if (feature.confetti && !reducedMotion) {
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 2000);
    }
  };

  if (!feature.image) {
    return null;
  }

  return (
    <section className="w-full mb-16 relative">
      <div className="container mx-auto px-4">
        <div
          className="relative w-full rounded-2xl overflow-hidden cursor-pointer focus-within:ring-2 focus-within:ring-primary-light dark:focus-within:ring-primary-dark"
          onClick={handleClick}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              handleClick();
            }
          }}
          role="button"
          tabIndex={0}
          aria-label={feature.caption || "Feature image"}
        >
          <div className="relative w-full aspect-video bg-gray-200 dark:bg-gray-700">
            <Image
              src={feature.image}
              alt={feature.caption || "Feature"}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 1024px"
              priority={false}
            />
          </div>
        </div>
        
        {feature.caption && (
          <p className="text-center mt-4 text-lg font-medium text-foreground-light dark:text-foreground-dark">
            {feature.caption}
          </p>
        )}

        {/* Simple confetti effect */}
        {showConfetti && (
          <div className="absolute inset-0 pointer-events-none">
            {Array.from({ length: 20 }).map((_, i) => (
              <div
                key={i}
                className="absolute top-1/2 left-1/2 w-2 h-2 bg-primary-light dark:bg-primary-dark rounded-full"
                style={{
                  transform: `translate(-50%, -50%) rotate(${i * 18}deg) translateY(-100px)`,
                  animation: "confetti 1s ease-out forwards",
                }}
              />
            ))}
          </div>
        )}
      </div>
      
      <style jsx>{`
        @keyframes confetti {
          to {
            transform: translate(-50%, -50%) rotate(var(--rot)) translateY(-200px) scale(0);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
}

