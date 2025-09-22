"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Galaxy from "./Galaxy";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + Math.random() * 10 + 3; // Slower progress increments for 5 seconds
      });
    }, 150);

    // Start fade out animation after 4.5 seconds
    const fadeTimer = setTimeout(() => {
      setIsAnimating(true);
    }, 4500);

    // Hide loading screen completely after fade animation
    const hideTimer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
      clearInterval(progressInterval);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div className={`fixed inset-0 z-50 bg-black flex items-center justify-center transition-opacity duration-500 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
      {/* Galaxy WebGL Background */}
      <div className="absolute inset-0">
        <Galaxy 
          mouseRepulsion={false}
          mouseInteraction={false}
          density={4.0}
          glowIntensity={0.5}
          saturation={1.0}
          hueShift={200}
          twinkleIntensity={0.6}
          rotationSpeed={0.02}
          speed={0.8}
          transparent={false}
        />
      </div>

      {/* Scanning lines effect */}
      <div className="scanning-lines"></div>

      {/* Rocket Animation */}
      <div className="fixed bottom-0 left-0 w-full h-full pointer-events-none z-20">
        <div className="relative w-full h-full">
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 rocket-launch">
            <div className="text-6xl animate-pulse">🚀</div>
          </div>
        </div>
      </div>

      {/* Loading content */}
      <div className="relative z-10 text-center">
        {/* Logo with enhanced glow */}
        <div className="mb-8">
          <div className="mb-4 flex justify-center relative">
            <div className="logo-hologram">
              <Image
                src="/img/logo.png"
                alt="RoboFiesta 2025 Logo"
                width={300}
                height={120}
                className="h-16 md:h-24 w-auto object-contain relative z-10"
                priority
              />
            </div>
          </div>
          <p className="text-lg md:text-xl text-[var(--neon)] mt-2 font-orbitron typewriter">
            Technoverse: Beyond Boundaries
          </p>
        </div>

        {/* Enhanced orbital loading animation */}
        <div className="loading-orbit-enhanced">
          <div className="loading-center-core"></div>
          <div className="loading-inner-ring">
            <div className="loading-inner-dot loading-inner-dot-1"></div>
            <div className="loading-inner-dot loading-inner-dot-2"></div>
          </div>
          <div className="loading-orbit-ring">
            <div className="loading-orbit-dot loading-orbit-dot-1"></div>
            <div className="loading-orbit-dot loading-orbit-dot-2"></div>
            <div className="loading-orbit-dot loading-orbit-dot-3"></div>
          </div>
          <div className="loading-outer-ring">
            <div className="loading-outer-dot loading-outer-dot-1"></div>
            <div className="loading-outer-dot loading-outer-dot-2"></div>
            <div className="loading-outer-dot loading-outer-dot-3"></div>
            <div className="loading-outer-dot loading-outer-dot-4"></div>
          </div>
        </div>

        {/* Progress bar and loading text */}
        <div className="mt-8">
          <div className="progress-container mb-4">
            <div className="progress-bar">
              <div 
                className="progress-fill" 
                style={{ width: `${Math.min(progress, 100)}%` }}
              ></div>
            </div>
            <p className="text-[var(--neon)] text-xs font-mono mt-2">
              {Math.floor(Math.min(progress, 100))}% COMPLETE
            </p>
          </div>
          
          <p className="text-white/70 text-sm tracking-wider font-orbitron glitch-text">
            INITIALIZING SYSTEMS...
          </p>
          
          <div className="loading-status mt-2">
            <div className="status-grid">
              <span className="status-item">◉ CORE SYSTEMS</span>
              <span className="status-item">◉ NEURAL NETWORKS</span>
              <span className="status-item">◉ COSMIC INTERFACE</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}