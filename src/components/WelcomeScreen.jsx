"use client";

import { useState } from "react";

export default function WelcomeScreen({ onEnter }) {
  const [isPressed, setIsPressed] = useState(false);

  const handleEnter = () => {
    setIsPressed(true);
    // Add a small delay for button animation before triggering loading
    setTimeout(() => {
      onEnter();
    }, 300);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
      {/* Animated starfield background */}
      <div className="absolute inset-0">
        <div className="welcome-stars"></div>
        <div className="welcome-twinkling"></div>
      </div>

      {/* Welcome content */}
      <div className="relative z-10 text-center max-w-4xl px-6">
        {/* Main title with cosmic glow */}
        <div className="mb-8">
          <h1 className="font-orbitron text-5xl md:text-7xl lg:text-8xl font-bold text-white neon-title welcome-pulse mb-4">
            RoboFiesta 2025
          </h1>
          <div className="cosmic-line mb-6"></div>
          <p className="text-xl md:text-3xl text-[var(--neon)] font-orbitron tracking-wider">
            Technoverse: Beyond Boundaries
          </p>
        </div>

        {/* Subtitle */}
        <div className="mb-12">
          <p className="text-lg md:text-xl text-white/80 mb-2 font-light">
            Welcome to the Ultimate Tech Event
          </p>
         
        </div>

        {/* Enter button with cosmic styling */}
        <button
          onClick={handleEnter}
          className={`enter-button group relative px-12 py-4 font-orbitron text-lg font-bold tracking-wider transition-all duration-300 ${
            isPressed ? 'scale-95 opacity-70' : 'hover:scale-105'
          }`}
          disabled={isPressed}
        >
          <span className="relative z-10 text-white group-hover:text-[var(--neon)] transition-colors duration-300">
            {isPressed ? 'INITIALIZING...' : 'ENTER'}
          </span>
          <div className="enter-button-glow"></div>
        </button>

        {/* Floating particles around button */}
        <div className="floating-particles">
          <div className="particle particle-1"></div>
          <div className="particle particle-2"></div>
          <div className="particle particle-3"></div>
          <div className="particle particle-4"></div>
        </div>
      </div>

      {/* Corner decorations */}
      <div className="corner-decoration corner-top-left"></div>
      <div className="corner-decoration corner-top-right"></div>
      <div className="corner-decoration corner-bottom-left"></div>
      <div className="corner-decoration corner-bottom-right"></div>
    </div>
  );
}