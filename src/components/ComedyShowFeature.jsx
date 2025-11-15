"use client";

import Image from "next/image";
import StarBorder from "@/components/StarBorder";

export default function ComedyShowFeature() {
  return (
    <section className="relative z-[1] overflow-hidden py-12 md:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        {/* Special Featured Comedy Show */}
        <div className="relative">
          {/* Glowing background effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 via-cyan-400/20 to-cyan-600/20 blur-3xl"></div>
          
          <div className="relative glass border-1 border-[var(--neon)]/50 shadow-[0_0_20px_rgba(0,255,240,0.4)] overflow-hidden">
            <div className="flex flex-col lg:flex-row items-center gap-8 p-6 md:p-10">
              {/* Image Section */}
              <div className="w-full lg:w-1/2">
                <div className="relative aspect-video w-full overflow-hidden rounded-lg border-1 border-[var(--neon)]/50">
                  <Image
                    src="/img/comedy.png"
                    alt="Stand-up Show"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 150vw, 10vw"
                  />
                  {/* Spotlight effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </div>
              </div>

              {/* Content Section */}
              <div className="w-full lg:w-1/2">
                {/* Title */}
                <h3 className="neon-subtitle font-orbitron text-2xl font-extrabold mb-4 md:text-4xl lg:text-5xl text-center">
  Stand-up Show
</h3>


                {/* Description */}
                <p className="text-sm md:text-base text-white/100 mb-4 text-center">
                  Get ready for an unforgettable night of laughter! Join us for an evening of 
                  side-splitting comedy that will leave you in stitches.
                </p>

                {/* Event Details Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-4">
                  <div className="glass p-2 border border-[var(--neon)]/40 text-center rounded-md">
                    <div className="text-[10px] text-white/60 font-orbitron uppercase tracking-wider mb-0.5">
                      Date
                    </div>
                    <div className="font-semibold text-sm text-[var(--neon)]">25 Nov</div>
                  </div>

                  <div className="glass p-2 border border-[var(--neon)]/40 text-center rounded-md">
                    <div className="text-[10px] text-white/60 font-orbitron uppercase tracking-wider mb-0.5">
                      Time
                    </div>
                    <div className="font-semibold text-sm text-[var(--neon)]">5:30 – 7:00 PM</div>
                  </div>

                  <div className="glass p-2 border border-[var(--neon)]/40 text-center rounded-md">
                    <div className="text-[10px] text-white/60 font-orbitron uppercase tracking-wider mb-0.5">
                      Venue
                    </div>
                    <div className="font-semibold text-sm text-[var(--neon)]">RVITM</div>
                  </div>

                  <div className="relative glass p-2 border-2 border-yellow-400/60 text-center rounded-md bg-gradient-to-br from-yellow-500/10 to-orange-500/10 shadow-[0_0_20px_rgba(250,204,21,0.3)] animate-pulse">
                    <div className="absolute -top-2 -right-2 bg-gradient-to-r from-red-600 to-red-500 px-1.5 py-0.5 rounded-full text-[7px] font-black text-white uppercase tracking-wider shadow-lg z-10">
                      🔥 Limited
                    </div>
                    <div className="text-[10px] text-yellow-300 font-orbitron uppercase tracking-wider mb-0.5 font-bold">
                      Early Bird
                    </div>
                    <div className="flex items-baseline justify-center gap-1">
                      <div className="font-black text-lg text-yellow-400" style={{filter:'drop-shadow(0 0 8px rgba(250, 204, 21, 0.7))'}}>₹200</div>
                    </div>
                  </div>
                </div>

                {/* Urgency Banner */}
                <div className="mb-4 p-2 bg-gradient-to-r from-red-600/20 via-orange-500/20 to-red-600/20 border border-red-500/40 rounded-lg text-center">
                  <p className="text-xs md:text-sm font-bold text-red-300 animate-pulse">
                    ⚡ Limited seats available at Early Bird price! Don't miss out!
                  </p>
                </div>

                {/* CTA Button */}
                <div className="flex justify-center">
                  <StarBorder
                    as="a"
                    href="https://standup.robofiesta.in/event-details/stand-up-show"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block text-base md:text-lg font-bold"
                    color="var(--neon)"
                    speed="1.5s"
                  >
                    <span className="flex flex-col items-center">
                      <span className="flex items-center gap-2">
                        BUY TICKETS!!!
                      </span>
                      <span className="text-xs text-yellow-300 font-normal mt-1">₹200</span>
                    </span>
                  </StarBorder>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
