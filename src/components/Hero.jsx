"use client";

import { useState } from "react";
import Countdown from "@/components/Countdown";
import StarBorder from "@/components/StarBorder";
import { EVENT_DATE_ISO } from "@/lib/constants";
import Image from "next/image";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    // Get the position and dimensions of the hero section
    const rect = e.currentTarget.getBoundingClientRect();
    // Calculate mouse position relative to the section's center
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setMousePosition({ x, y });
  };

  // Calculate rotation angles for the 3D card
  const rotateX = (-mousePosition.y / 40).toFixed(2); // Divide by a larger number for less rotation
  const rotateY = (mousePosition.x / 40).toFixed(2);

  // Calculate subtle parallax movement for the left content
  const parallaxX = (mousePosition.x / 100).toFixed(2);
  const parallaxY = (mousePosition.y / 100).toFixed(2);

  return (
    // Add onMouseMove to the root section to track the cursor
    <section
      id="home"
      className="section pt-24 md:pt-32 pb-16 md:pb-20 relative overflow-hidden"
      onMouseMove={handleMouseMove}
      style={{ perspective: '2000px' }} // Set perspective for 3D effect
    >
      {/* Interactive Cursor Light */}
      <div
        className="pointer-events-none absolute -inset-40 z-20 rounded-full transition-all duration-300"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x + 400}px ${mousePosition.y + 300}px, rgba(0, 255, 240, 0.1), transparent 80%)`,
        }}
      ></div>

      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-5">
          
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
            <p className="mt-4 text-white/80 text-lg md:text-xl">
              RoboFiesta 2025 — A Tech event celebrating AI, Robotics, and Tech.
            </p>
            <p className="mt-2 text-white/70">
              Oct 13, 2025 | Bengaluru, India
            </p>
            <p className="mt-4 text-white/80 text-lg md:text-xl">
              Our Pre Events Start in
            </p>
            <Countdown targetDate={EVENT_DATE_ISO} />
          </div>

          {/* Right Card with 3D Tilt Effect */}
          <div className="flex-1 w-full">
            <div
              className="glass p-6 md:p-10 text-center transition-transform duration-300 ease-out"
              style={{ transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)` }}
            >
              <p className="mt-4 text-white/80 text-lg md:text-xl">Featured Hackathon</p>
              <div className="font-orbitron text-3xl md:text-5xl font-extrabold mt-2 neon-subtitle">
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