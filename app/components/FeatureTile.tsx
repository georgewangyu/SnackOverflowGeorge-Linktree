"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
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
    <Link 
      href="/playground"
      className="flex flex-col items-center gap-2 relative hover:scale-[1.02] transition-transform duration-180 focus:outline-none focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark rounded-2xl"
    >
      {/* Large image tile */}
      <div
        className="relative w-48 h-48 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-md hover:scale-[1.04] transition-transform duration-180 cursor-pointer focus-within:ring-2 focus-within:ring-primary-light dark:focus-within:ring-primary-dark"
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
        <Image
          src={feature.image}
          alt={feature.caption || "Feature"}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 256px, 320px"
          priority={false}
        />
        
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
      
      {/* Caption */}
      {feature.caption && (
        <span className="text-base md:text-lg font-medium text-center text-foreground-light dark:text-foreground-dark">
          {feature.caption}
        </span>
      )}
      
      <style jsx>{`
        @keyframes confetti {
          to {
            transform: translate(-50%, -50%) rotate(var(--rot)) translateY(-200px) scale(0);
            opacity: 0;
          }
        }
      `}</style>
    </Link>
  );
}

