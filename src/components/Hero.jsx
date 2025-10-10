"use client";

import Countdown from "@/components/Countdown";
import StarBorder from "@/components/StarBorder";
import { EVENT_DATE_ISO } from "@/lib/constants";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative z-[1] overflow-hidden pt-24 pb-16 md:pt-28 md:pb-20 lg:pt-32"
    >

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
              Our Pre Events Start in
            </p>
            <Countdown targetDate={EVENT_DATE_ISO} />
          </div>

          {/* Right Card */}
          <div className="w-full flex-1">
            <div className="glass p-6 text-center md:p-10">
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