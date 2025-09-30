"use client";

import { useState, useEffect, useMemo } from "react";
import TypewriterEffect from "@/components/TypewriterEffect";

// InteractiveTitle component (no changes needed)
const InteractiveTitle = ({ text, style, className = "" }) => {
  const handleMouseOver = (e) => {
    e.target.classList.add("glitch-hover");
    setTimeout(() => {
      e.target.classList.remove("glitch-hover");
    }, 400);
  };

  return (
    <h1
      className={`font-orbitron text-5xl md:text-7xl lg:text-8xl font-bold text-white transition-all duration-200 ease-out ${className}`}
      style={style}
    >
      {text.split("").map((char, index) => (
        <span
          key={index}
          className="interactive-char"
          onMouseOver={handleMouseOver}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </h1>
  );
};

export default function WelcomeScreen({ onEnter }) {
  const [isPressed, setIsPressed] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const moveX = (clientX - centerX) / centerX;
    const moveY = (clientY - centerY) / centerY;
    setMousePosition({ x: moveX, y: moveY });
  };

  const handleEnter = () => {
    setIsPressed(true);
    setTimeout(() => {
      onEnter();
    }, 300);
  };

  const holographicStyle = useMemo(() => ({
    transform: `rotateY(${mousePosition.x * 10}deg) rotateX(${-mousePosition.y * 10}deg)`,
    textShadow: `
      ${-mousePosition.x * 6}px ${-mousePosition.y * 6}px 12px rgba(0, 255, 240, 0.7),
      ${mousePosition.x * 6}px ${mousePosition.y * 6}px 12px rgba(179, 136, 255, 0.7)
    `
  }), [mousePosition]);

  const yearTexts = useMemo(() => ["20XXII", "20XXIV", "20XXV", "2025"], []);

  return (
    <>
      {/* Local styles can be moved to globals.css for better organization */}
      <style jsx global>{`
        .interactive-char { display: inline-block; transition: transform 0.2s ease, color 0.2s ease; }
        .glitch-hover { animation: glitchEffect 0.4s ease-in-out; }
        @keyframes glitchEffect {
          0% { transform: translate(0, 0); color: white; text-shadow: none; }
          25% { transform: translate(-3px, 3px); color: var(--neon); text-shadow: 0 0 5px var(--neon); }
          50% { transform: translate(3px, -3px); color: var(--neon-purple); text-shadow: 0 0 5px var(--neon-purple); }
          75% { transform: translate(-2px, -2px); color: var(--neon); }
          100% { transform: translate(0, 0); color: white; text-shadow: none; }
        }
      `}</style>

      <div
        className={`fixed inset-0 z-50 bg-black flex items-center justify-center transition-opacity duration-1000 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        onMouseMove={handleMouseMove}
      >
        {/* ✅ Background from Team Page added here */}
        <div className="absolute inset-0 -z-10">
          <div className="stars"></div>
          <div className="twinkling"></div>
          <div className="clouds"></div>
        </div>
        
        <div
          className={`relative z-10 text-center max-w-4xl px-6 transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="mb-8" style={{ perspective: "1000px" }}>
            <InteractiveTitle text="RoboFiesta" style={holographicStyle} />
            <br />
            <h1 className="font-orbitron text-5xl md:text-7xl lg:text-8xl font-bold text-white transition-all duration-200 ease-out" style={holographicStyle}>
              <TypewriterEffect texts={yearTexts} speed={100} delayBetweenTexts={500} cursor={false} />
            </h1>
            <div className="cosmic-line mb-6 animate-expand"></div><br />
            <p className="text-xl md:text-3xl text-[var(--neon)] font-orbitron tracking-wider animate-glow">
              Technoverse: Beyond Boundaries
            </p>
          </div>

          <div className="mb-12">
            <p className="text-lg md:text-xl text-white/80 mb-2 font-light animate-fadeIn">
              Welcome to the Ultimate Tech Event
            </p>
          </div>

          <button
            onClick={handleEnter}
            className={`enter-button group px-12 py-4 font-orbitron text-lg font-bold tracking-wider transition-all duration-300
              border-2 border-[var(--neon)] rounded-full shadow-[0_0_15px_var(--neon)]
              hover:border-[var(--neon-purple)] hover:shadow-[0_0_20px_var(--neon-purple)]
              ${isPressed ? "scale-95 opacity-70" : "hover:scale-105"}`}
            disabled={isPressed}
          >
            <span className={`relative z-10 text-white ${isPressed ? "" : "glitch-text-button"}`}>
              {isPressed ? "INITIALIZING..." : "ENTER"}
            </span>
          </button>
        </div>
        
        <div
          className="corner-decoration corner-top-left animate-rotate-slow"
          style={{ transform: `translate(${mousePosition.x * 15}px, ${mousePosition.y * 15}px)` }}
        ></div>
        <div
          className="corner-decoration corner-top-right animate-rotate-slow-reverse"
          style={{ transform: `translate(${mousePosition.x * -15}px, ${mousePosition.y * 15}px)` }}
        ></div>
        <div
          className="corner-decoration corner-bottom-left animate-rotate-slow"
          style={{ transform: `translate(${mousePosition.x * 15}px, ${mousePosition.y * -15}px)` }}
        ></div>
        <div
          className="corner-decoration corner-bottom-right animate-rotate-slow-reverse"
          style={{ transform: `translate(${mousePosition.x * -15}px, ${mousePosition.y * -15}px)` }}
        ></div>
      </div>
    </>
  );
}