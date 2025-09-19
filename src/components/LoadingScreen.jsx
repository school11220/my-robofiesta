"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Start fade out animation after 1 second
    const fadeTimer = setTimeout(() => {
      setIsAnimating(true);
    }, 1000);

    // Hide loading screen completely after fade animation
    const hideTimer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div className={`fixed inset-0 z-50 bg-black flex items-center justify-center transition-opacity duration-500 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
      {/* Animated starfield background */}
      <div className="absolute inset-0">
        <div className="loading-stars"></div>
        <div className="loading-twinkling"></div>
      </div>

      {/* Loading content */}
      <div className="relative z-10 text-center">
        {/* Logo */}
        <div className="mb-8">
          <div className="mb-4 flex justify-center">
            <Image
              src="/img/logo.png"
              alt="RoboFiesta 2025 Logo"
              width={300}
              height={120}
              className="h-16 md:h-24 w-auto object-contain"
              priority
            />
          </div>
          <p className="text-lg md:text-xl text-[var(--neon)] mt-2 font-orbitron">
            Technoverse: Beyond Boundaries
          </p>
        </div>

        {/* Orbital loading animation */}
        <div className="loading-orbit">
          <div className="loading-center-dot"></div>
          <div className="loading-orbit-ring">
            <div className="loading-orbit-dot loading-orbit-dot-1"></div>
            <div className="loading-orbit-dot loading-orbit-dot-2"></div>
            <div className="loading-orbit-dot loading-orbit-dot-3"></div>
          </div>
        </div>

        {/* Loading text */}
        <div className="mt-8">
          <p className="text-white/70 text-sm tracking-wider font-orbitron">
            INITIALIZING SYSTEMS...
          </p>
          <div className="loading-dots mt-2">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
}