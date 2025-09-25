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

  const filteredMembers =
    selectedDepartment === "All"
      ? teamMembers
      : teamMembers.filter(
          (member) => member.department === selectedDepartment
        );

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Background stars */}
        <div className="stars"></div>
        <div className="twinkling"></div>
        <div className="clouds"></div>

      {/* Hero Section */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="text-center mb-16">
            <h1 className="font-orbitron text-4xl md:text-6xl font-bold text-white mb-6">
              Meet Our <span className="neon-title">Team</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              The passionate minds behind RoboFiesta 2025, working together to
              bring you an unforgettable robotics experience.
            </p>
          </div>

          {/* Department Filter */}

          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMembers.map((member, index) => (
              <GlassCard
                key={member.name}
                className="p-6 hover:scale-105 transition-all duration-300"
              >
                <div className="text-center space-y-4">
                  {/* Avatar placeholder with neon border */}
                  <div className="relative mx-auto w-24 h-24 rounded-full bg-gradient-to-br from-[var(--neon)]/20 to-[var(--neon-purple)]/20 border-2 border-[var(--neon)]/40 flex items-center justify-center overflow-hidden">
                    {/* Placeholder until actual images are added */}
                    <div className="text-2xl font-orbitron font-bold text-[var(--neon)]">
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    {/* When images are available, use this instead:
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={96}
                      height={96}
                      className="rounded-full object-cover"
                    />
                    */}
                  </div>

                  {/* Member Info */}
                  <div>
                    <h3 className="font-orbitron text-xl font-bold text-white mb-1">
                      {member.name}
                    </h3>
                    <p className="text-[var(--neon)] font-semibold mb-2">
                      {member.role}
                    </p>
                  </div>

                  {/* Contact Info */}
                  <div className="space-y-2 pt-4 border-t border-white/10">
                    <a
                      href={`tel:${member.phone}`}
                      className="flex items-center justify-center gap-2 text-sm text-white/80 hover:text-[var(--neon)] transition-colors"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                      {member.phone}
                    </a>
                    <a
                      href={`mailto:${member.email}`}
                      className="flex items-center justify-center gap-2 text-sm text-white/80 hover:text-[var(--neon)] transition-colors"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      {member.email}
                    </a>
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
