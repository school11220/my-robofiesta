"use client";

import { useState } from "react";
import Image from "next/image";

export default function FloatingComedyWidget() {
  const [isVisible, setIsVisible] = useState(true);
  const [isMinimized, setIsMinimized] = useState(false);

  const handleClose = () => {
    setIsVisible(false);
    setIsMinimized(true);
  };

  const handleReopen = () => {
    setIsVisible(true);
    setIsMinimized(false);
  };

  return (
    <>
      {isMinimized && (
        <button
          onClick={handleReopen}
          className="fixed bottom-10 right-10 z-50 w-16 h-16 rounded-full bg-gradient-to-br from-cyan-600 to-cyan-400 hover:from-cyan-700 hover:to-cyan-500 flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-[0_0_30px_rgba(0,255,240,0.6)] border-2 border-[var(--neon)]/30 group"
        >
          <span className="text-3xl group-hover:scale-110 transition-transform">🎭</span>
        </button>
      )}
      {isVisible && (
        <div className="fixed bottom-4 right-4 z-50 w-[260px] sm:w-[280px]">
          <button onClick={handleClose} className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-gradient-to-br from-black-500 to-black-600 hover:from-black-600 hover:to-black-700 flex items-center justify-center z-10 transition-all duration-300 border-2 border-white shadow-lg group">
            <svg className="w-4 h-4 text-white group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-br from-cyan-500/20 via-cyan-400/20 to-cyan-500/20 blur-xl opacity-100"></div>
            <div className="relative bg-gradient-to-br from-gray-900/95 via-cyan-900/20 to-gray-900/95 rounded-2xl border border-[var(--neon)]/40 shadow-[0_0_30px_rgba(0,255,240,0.3)] overflow-hidden backdrop-blur-sm">
              <div className="relative w-full h-39 overflow-hidden">
                <Image src="/img/comedy.png" alt="Stand-up Show" fill className="object-cover object-center" sizes="300px" priority />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-transparent"></div>
                <div className="absolute top-2 left-2 flex items-center gap-1.5">
                </div>
              </div>
              <div className="p-4 space-y-3">
                <div className="text-center space-y-1">
                  {/* <h3 className="font-orbitron text-sm font-bold tracking-wide">
                    <span className="neon-subtitle">Stand-up Comedy Night</span>
                  </h3> */}
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2.5 bg-white/5 hover:bg-white/10 transition-colors p-2 rounded-lg border border-white/10">
                    <div className="flex-shrink-0 w-7 h-7 rounded-md bg-gradient-to-br from-cyan-500/20 to-cyan-400/20 flex items-center justify-center border border-[var(--neon)]/30">
                      <svg className="w-4 h-4 text-[var(--neon)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-[8px] text-white/100 font-orbitron uppercase tracking-wider">Date</div>
                      <div className="text-xs font-semibold text-white truncate">25 Nov 2025</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2.5 bg-white/5 hover:bg-white/10 transition-colors p-2 rounded-lg border border-white/10">
                    <div className="flex-shrink-0 w-7 h-7 rounded-md bg-gradient-to-br from-cyan-500/20 to-cyan-400/20 flex items-center justify-center border border-[var(--neon)]/30">
                      <svg className="w-4 h-4 text-[var(--neon)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-[8px] text-white/100 font-orbitron uppercase tracking-wider">Time</div>
                      <div className="text-xs font-semibold text-white truncate">5:30 - 7:00 PM</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2.5 bg-white/5 hover:bg-white/10 transition-colors p-2 rounded-lg border border-white/10">
                    <div className="flex-shrink-0 w-7 h-7 rounded-md bg-gradient-to-br from-cyan-500/20 to-cyan-400/20 flex items-center justify-center border border-[var(--neon)]/30">
                      <svg className="w-4 h-4 text-[var(--neon)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-[8px] text-white/100 font-orbitron uppercase tracking-wider">Venue</div>
                      <div className="text-xs font-semibold text-white truncate">RVITM Auditorium</div>
                    </div>
                  </div>
                  <div className="relative bg-gradient-to-r from-yellow-500/20 via-orange-500/20 to-red-500/20 p-2.5 rounded-lg border-2 border-yellow-400/50 shadow-[0_0_20px_rgba(250,204,21,0.4)] animate-pulse">
                    <div className="absolute -top-2 -right-2 bg-gradient-to-r from-red-600 to-red-500 px-2 py-0.5 rounded-full text-[8px] font-black text-white uppercase tracking-wider shadow-lg animate-bounce">
                      Limited
                    </div>
                    <div className="flex items-center gap-2.5">
                      <div className="flex-shrink-0 w-7 h-7 rounded-md bg-yellow-500/30 flex items-center justify-center border border-yellow-500/60">
                        <svg className="w-4 h-4 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                        </svg>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-[8px] text-yellow-300 font-orbitron uppercase tracking-wider font-bold">🔥 Early Bird</div>
                        <div className="flex items-baseline gap-1">
                          <div className="text-lg font-black text-yellow-400" style={{filter:'drop-shadow(0 0 8px rgba(250, 204, 21, 0.7))'}}>₹200</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <a href="https://standup.robofiesta.in/event-details/stand-up-show" target="_blank" rel="noreferrer" className="block w-full mt-3 group">
                  <div className="relative overflow-hidden rounded-lg">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-cyan-400 to-cyan-600 animate-gradient-x"></div>
                    <div className="relative py-2.5 text-center font-orbitron font-extrabold text-xs tracking-wide border border-[var(--neon)]/30 shadow-[0_0_15px_rgba(0,255,240,0.4)] group-hover:shadow-[0_0_25px_rgba(0,255,240,0.7)] transition-all duration-300">
                      <span className="flex flex-col items-center justify-center">
                        <span className="flex items-center gap-2">
                          <span>GRAB EARLY BIRD</span>
                          <svg className="w-4 h-4 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </span>
                        <span className="text-[8px] text-yellow-300 font-normal mt-0.5">Limited Time Offer!</span>
                      </span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
      <style jsx>{`@keyframes gradient-x{0%,100%{background-position:0% 50%}50%{background-position:100% 50%}}.animate-gradient-x{background-size:200% 200%;animation:gradient-x 3s ease infinite}`}</style>
    </>
  );
}
