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
              Oct 25 & 26, 2025 | Bengaluru, India
            </p>
            
            {/* Our Sponsors Section */}
            <div className="mt-6 md:mt-6">
              <h3 className="font-orbitron text-center text-lg md:text-xl font-bold text-white mb-8">
                Our Sponsors
              </h3>

              <div className="glass p-4 md:p-6 rounded-xl border border-[var(--neon)]/30">
                <div className="flex flex-col md:flex-row items-center justify-center gap-1 md:gap-1">

                  {/* Sponsor 1 */}
                  <div className="flex items-center justify-center w-full md:w-auto">
                    <Image 
                      src="/img/RAJA SKODA.pdf (200 x 40 px).png" 
                      alt="Raja Skoda - Title Sponsor" 
                      width={160} 
                      height={32} 
                      className="h-13 md:h-10 w-auto object-contain"
                    />
                  </div>

                  {/* Mobile small dash */}
                  <span className="block md:hidden text-white/100 text-lg">-</span>

                  {/* Desktop divider */}
                  <span className="hidden md:block text-white/100 text-xl">|</span>

                  {/* Sponsor 2 */}
                  <div className="flex items-center justify-center w-full md:w-auto">
                    <Image 
                      src="/img/sec.png" 
                      alt="Sponsor" 
                      width={160} 
                      height={32} 
                      className="h-19 md:h-17 w-auto object-contain"
                    />
                  </div>

                  {/* Mobile small dash */}
                  <span className="block md:hidden text-white/100 text-lg">-</span>

                  {/* Desktop divider */}
                  <span className="hidden md:block text-white/100 text-xl">|</span>

                  {/* Sponsor 3 */}
                  <div className="flex items-center justify-center w-full md:w-auto">
                    <Image 
                      src="/img/new.png" 
                      alt="Sponsor" 
                      width={200} 
                      height={25} 
                      className="h-15 md:h-16 w-65 object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>

          </div>
          

          {/* Right Card */}
          <div className="w-full flex-1">
            <div className="glass p-6 text-center md:p-10 relative">
              {/* Early Bird Badge */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 flex flex-col gap-1 z-10">
                <div className="font-bold bg-gradient-to-r from-black-1000 to-black-500 px-3 py-1 rounded-md shadow-lg animate-pulse text-center">
                  <span className="font-bold font-orbitron text-[20px] font-black text-red uppercase tracking-wider">
                    <span className="shake">📢</span> Limited 
                  </span>
                </div>

                <style jsx>{`
                  @keyframes shake {
                    0% { transform: rotate(0deg); }
                    20% { transform: rotate(-10deg); }
                    40% { transform: rotate(10deg); }
                    60% { transform: rotate(-10deg); }
                    80% { transform: rotate(10deg); }
                    100% { transform: rotate(0deg); }
                  }

                  .shake {
                    display: inline-block;
                    animation: shake 1.5s infinite;
                  }
                `}</style>
              </div>


            <br />
              <div className="neon-subtitle mt-2 font-orbitron text-3xl font-extrabold md:text-5xl flex items-center justify-center gap-2">
                Stand-up Show
              </div>
              
              <div className="mt-6 grid grid-cols-3 gap-3">
                <div className="glass py-3">
                  <div className="text-xs text-white/60">Date</div>
                  <div className="font-semibold">25 Nov</div>
                </div>
                <div className="glass py-3">
                  <div className="text-xs text-white/60">Time</div>
                  <div className="font-semibold">5:30-7 PM</div>
                </div>
                <div className="relative glass p-3 border-2 border-yellow-400/60 text-center rounded-md bg-gradient-to-br from-yellow-500/10 to-orange-500/10 shadow-[0_0_20px_rgba(250,204,21,0.3)] animate-pulse">
                  <div className="text-xs text-yellow-300 font-bold tracking-wider mb-0.5 animate-pulse">
                    <span className="shakeY">⏳</span> Early Bird
                  </div>

                  <div className="font-black text-lg text-yellow-400" style={{ filter: 'drop-shadow(0 0 8px rgba(250, 204, 21, 0.7))' }}>
                    <span className="text-lg">₹200</span>
                  </div>

                  <style jsx>{`
                    @keyframes shakeY {
                      0% { transform: translateY(0); }
                      25% { transform: translateY(-2px); }
                      50% { transform: translateY(2px); }
                      75% { transform: translateY(-2px); }
                      100% { transform: translateY(0); }
                    }

                    .shakeY {
                      display: inline-block;
                      animation: shakeY 1s infinite ease-in-out;
                    }
                  `}</style>
                </div>

              </div>
              <br />
              <div className="mb-4 p-2 bg-gradient-to-r from-red-600/20 via-orange-500/20 to-red-600/20 border border-red-500/40 rounded-lg text-center">
                  <p className="text-xs md:text-sm font-bold text-red-300 animate-pulse">
                    ⚡ Limited seats available at Early Bird price! Don't miss out!
                  </p>
                </div>
              <div className="mt-8">
                <StarBorder
                  as="a"
                  href="https://standup.robofiesta.in/event-details/stand-up-show"
                  target="_blank"
                  rel="noreferrer"
                  className="text-base md:text-lg font-bold"
                  color="var(--neon)"
                  speed="1.5s"
                >
                  <span className="flex flex-col items-center">
                    <span>BUY TICKETS!!!</span>
                  </span>
                </StarBorder>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}