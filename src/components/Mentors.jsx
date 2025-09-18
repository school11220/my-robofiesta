import SectionHeading from "@/components/SectionHeading";
import GlassCard from "@/components/GlassCard";
import Image from "next/image";
import { mentors } from "@/data/mentors";

export default function Mentors() {
  return (
    <section id="mentors" className="section py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading className="mb-8">Mentors & Judges</SectionHeading>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {mentors.map((m) => (
            <GlassCard key={m.name} className="p-5 text-center">
              <div className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-3 border border-white/20 bg-white/5 flex items-center justify-center">
                {m.img ? (
                  <Image src={m.img} width={96} height={96} alt={m.name} className="object-cover" />
                ) : (
                  <Image src="/next.svg" width={96} height={96} alt={m.name} className="object-contain dark:invert" />
                )}
              </div>
              <div className="font-orbitron font-semibold text-[var(--neon)]">{m.name}</div>
              <div className="text-white/70 text-sm">{m.role}</div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
