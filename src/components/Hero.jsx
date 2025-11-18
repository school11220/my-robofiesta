"use client";

import Countdown from "@/components/Countdown";
import StarBorder from "@/components/StarBorder";
import { EVENT_DATE_ISO } from "@/lib/constants";
import Image from "next/image";
export default function Hero() {
  return (
    <section
      id="home"
      className="relative z-[1] overflow-hidden pt-16 pb-16 md:pt-20 md:pb-20 lg:pt-24">
      <div className="mx-auto max-w-7xl px-2 md:px-6">
        <div className="flex flex-col items-center gap-5 md:flex-row md:items-start">
          
          {/* Left Content */}
          <div className="flex-1">
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
              Our Main Event Starts in
            </p>
            <Countdown targetDate={EVENT_DATE_ISO} />
          </div>

          {/* Right Card */}
          <div className="w-full flex-1">
            <div className="glass p-6 text-center md:p-10 relative">
              {/* SOLD OUT Badge */}
              <div className="absolute top-4 right-4 glass px-3 py-1.5 border-2 border-red-500/60 z-10">
                <span className="font-orbitron text-xs font-bold text-red-500">SOLD OUT</span>
              </div>
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
                  <div className="font-semibold">22-23 November</div>
                </div>
                <div className="glass py-3">
                  <div className="text-xs text-white/60">Prize Pool</div>
                  <div className="font-semibold">₹30,000</div>
                </div>
              </div>
              <div className="mt-8">
                <div className="glass px-6 py-3 border border-red-500/30 inline-block">
                  <span className="font-orbitron text-lg font-bold text-red-500">SOLD OUT</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}