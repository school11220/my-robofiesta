"use client";

import { useState } from "react";
import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import GlassCard from "@/components/GlassCard";
import { teamMembers, eventCoordinators } from "@/data/team";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TeamPage() {
  const [selectedDepartment, setSelectedDepartment] = useState("All");

  // No need to filter by department anymore since we removed that data
  const sortedMembers = [...teamMembers].sort((a, b) => a.order - b.order);

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <div className="stars"></div>
        <div className="twinkling"></div>
        <div className="clouds"></div>

      <section className="py-20 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="text-center mb-16">
            <h1 className="font-orbitron text-4xl md:text-6xl font-bold text-white mb-6">
              Meet Our Core Team
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              The passionate minds behind Robofiesta2025, working together to
              bring you an unforgettable experience.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sortedMembers.map((member, index) => (
              <GlassCard
                key={member.name}
                className="p-8"
              >
                <div className="text-center">
                  {/* Avatar placeholder with neon border */}
                  <div className="relative mx-auto w-28 h-28 rounded-full bg-gradient-to-br from-[var(--neon)]/20 to-[var(--neon-purple)]/20 border-2 border-[var(--neon)]/40 flex items-center justify-center overflow-hidden mb-6">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={112}
                      height={112}
                      className="rounded-full object-cover w-full h-full"
                    />
                  </div>

                  {/* Member Info */}
                  <div className="space-y-2">
                    <h3 className="font-orbitron text-2xl font-bold text-white">
                      {member.name}
                    </h3>
                    <p className="text-[var(--neon)] font-medium text-lg">
                      {member.role}
                    </p>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Event Coordinators Section */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionHeading>Our Team</SectionHeading>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {eventCoordinators.map((coordinator, index) => (
              <div
                key={index}
                className="group relative text-center p-3 glass border border-[var(--neon)]/20 hover:border-[var(--neon)]/60 transition-all duration-300 hover:scale-105 cursor-default"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-[var(--neon)]/0 group-hover:bg-[var(--neon)]/5 blur-sm transition-all duration-300"></div>
                
                <h3 className="relative font-orbitron text-sm font-semibold text-white/80 group-hover:text-[var(--neon)] transition-colors duration-300">
                  {coordinator.name}
                </h3>
                
                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[var(--neon)]/0 group-hover:border-[var(--neon)] transition-all duration-300"></div>
                <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[var(--neon)]/0 group-hover:border-[var(--neon)] transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer/>
    </main>
    </>
  );
}