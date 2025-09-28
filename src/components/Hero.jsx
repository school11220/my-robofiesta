"use client";

import { useState } from "react";
import Countdown from "@/components/Countdown";
import StarBorder from "@/components/StarBorder";
import { EVENT_DATE_ISO } from "@/lib/constants";
import Image from "next/image";

export default function Hero() {
  // State for the 3D tilt and parallax effects (relative to center)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  // State for the cursor light effect (relative to top-left)
  const [lightPosition, setLightPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    
    // Position for the light (from top-left of the section)
    const lightX = e.clientX - rect.left;
    const lightY = e.clientY - rect.top;
    setLightPosition({ x: lightX, y: lightY });

    // Position for 3D tilt/parallax (from center of the section)
    const centerX = e.clientX - rect.left - rect.width / 2;
    const centerY = e.clientY - rect.top - rect.height / 2;
    setMousePosition({ x: centerX, y: centerY });
  };

  // Calculations for the 3D card tilt
  const rotateX = -mousePosition.y / 40;
  const rotateY = mousePosition.x / 40;

  // Calculations for the parallax movement
  const parallaxX = mousePosition.x / 100;
  const parallaxY = mousePosition.y / 100;

  return (
    <section
      id="home"
      className="relative z-[1] overflow-hidden pt-24 pb-16 md:pt-28 md:pb-20 lg:pt-32"
      onMouseMove={handleMouseMove}
      style={{ perspective: '2000px' }}
    >
      {/* Interactive Cursor Light - now follows cursor precisely */}
      <div
        className="pointer-events-none absolute inset-0 z-20 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px at ${lightPosition.x}px ${lightPosition.y}px, rgba(0, 255, 240, 0.1), transparent 80%)`,
        }}
      />

      <div className="mx-auto max-w-7xl px-2 md:px-6">
        <div className="flex flex-col items-center gap-5 md:flex-row md:items-start">
          
          {/* Left Content with Parallax Effect */}
          <div
            className="flex-1 transition-transform duration-300 ease-out"
            style={{ transform: `translate(${parallaxX}px, ${parallaxY}px)` }}
          >
            <div className="flex justify-start">
              <Image
                src="/img/logo.png"
                alt="RoboFiesta 2025 Logo"
                width={500}
                height={56}
                className="h-auto w-full max-w-md md:max-w-none"
                priority
              />
            </div>
            <p className="mt-4 text-lg text-white/80 md:text-xl">
              RoboFiesta 2025 — A Tech event celebrating AI, Robotics, and Tech.
            </p>
            <p className="mt-2 text-white/70">
              Oct 13, 2025 | Bengaluru, India
            </p>
            <p className="mt-4 text-lg text-white/80 md:text-xl">
              Our Pre Events Start in
            </p>
            <Countdown targetDate={EVENT_DATE_ISO} />
          </div>

          {/* Right Card with 3D Tilt Effect */}
          <div className="w-full flex-1">
            <div
              className="glass p-6 text-center transition-transform duration-300 ease-out md:p-10"
              style={{ transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)` }}
            >
              <p className="mt-4 text-lg text-white/80 md:text-xl">Featured Hackathon</p>
              <div className="neon-subtitle mt-2 font-orbitron text-3xl font-extrabold md:text-5xl">
                Hack-A-Day
              </div>
              <div className="mt-6 grid grid-cols-3 gap-3">
                <div className="glass py-3">
                  <div className="text-xs text-white/60">Location</div>
                  <div className="font-semibold">RVITM</div>
                </div>
                <div className="glass py-3">
                  <div className="text-xs text-white/60">Dates</div>
                  <div className="font-semibold">1 November</div>
                </div>
                <div className="glass py-3">
                  <div className="text-xs text-white/60">Prize Pool</div>
                  <div className="font-semibold">₹30,000</div>
                </div>
              </div>
              <div className="mt-8">
                <StarBorder
                  as="a"
                  href="https://register.robofiesta.in/event-details/hack-a-day"
                  target="_blank"
                  rel="noreferrer"
                  className="text-lg font-bold"
                  color="var(--neon)"
                  speed="1.5s"
                >
                  REGISTER NOW
                </StarBorder>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}