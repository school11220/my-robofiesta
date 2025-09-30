"use client";

import { useState, useEffect, useMemo } from "react";
import Image from "next/image";

export default function LoadingScreen({ onLoaded }) {
  const [isAnimating, setIsAnimating] = useState(false);
  const [isFinishing, setIsFinishing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 }); 

  useEffect(() => {
    const LOADING_DURATION = 3000;
    const FADE_OUT_DURATION = 500;

    const progressInterval = setInterval(() => {
      setProgress(prev => Math.min(prev + 5, 100));
    }, 120);

    const finishTimer = setTimeout(() => {
      clearInterval(progressInterval);
      setProgress(100);
      setIsFinishing(true);
    }, LOADING_DURATION - 800);

    const mainTimer = setTimeout(() => {
      setIsAnimating(true);
      setTimeout(onLoaded, FADE_OUT_DURATION);
    }, LOADING_DURATION - FADE_OUT_DURATION);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(finishTimer);
      clearTimeout(mainTimer);
    };
  }, [onLoaded]);
  
  const handleMouseMove = (e) => {
    const moveX = (e.clientX / window.innerWidth) * 2 - 1;
    const moveY = (e.clientY / window.innerHeight) * 2 - 1;
    setMousePosition({ x: moveX, y: moveY });
  };
  
  const orbitalStyle = useMemo(() => ({
    transform: isFinishing ? '' : `rotateY(${mousePosition.x * 15}deg) rotateX(${-mousePosition.y * 15}deg)`,
  }), [mousePosition, isFinishing]);

  return (
    <div 
      className={`fixed inset-0 z-50 bg-black flex items-center justify-center transition-opacity duration-500 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}
      onMouseMove={handleMouseMove}
    >
      {/* ✅ Background updated to match the Team Page */}
      <div className="absolute inset-0">
        <div className="stars"></div>
        <div className="twinkling"></div>
        <div className="clouds"></div>
      </div>
      <div className="scanning-lines"></div>

      <div className="relative z-10 text-center" style={{ perspective: '1000px' }}>
        <div className={`mb-8 transition-opacity duration-300 ${isFinishing ? 'opacity-0' : 'opacity-100'}`}>
          <div className="mb-4 flex justify-center relative">
            <Image
              src="/img/logo.png"
              alt="RoboFiesta 2025 Logo"
              width={300}
              height={120}
              className="h-16 md:h-24 w-auto object-contain relative z-10"
              priority
            />
          </div>
          <p className="text-lg md:text-xl text-[var(--neon)] mt-2 font-orbitron typewriter">
            Technoverse: Beyond Boundaries
          </p>
        </div>

        <div 
          className={`loading-orbit-enhanced ${isFinishing ? (isAnimating ? 'warp-out' : 'zoom-in') : ''}`} 
          style={orbitalStyle}
        >
          <div className="loading-particle-field"></div>
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

        <div className={`mt-8 transition-opacity duration-300 ${isFinishing ? 'opacity-0' : 'opacity-100'}`}>
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
              <span className="status-item">◉ ASTRAL GATEWAYS</span>
              <span className="status-item">◉ STELLAR PROTOCOLS</span>
              <span className="status-item">◉ WARP DRIVE SYSTEMS</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}