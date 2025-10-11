"use client";

import { useState } from "react";
import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import GlassCard from "@/components/GlassCard";
import { teamMembers, departments } from "@/data/team";

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
              bring you an unforgettable robotics experience.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedMembers.map((member, index) => (
              <GlassCard
                key={member.name}
                className="p-8 hover:scale-105 transition-all duration-300"
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

          {/* Join Us Section */}
        </div>
      </section>
      <Footer/>
    </main>
    </>
  );
}