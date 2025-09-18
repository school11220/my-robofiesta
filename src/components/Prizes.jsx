import SectionHeading from "@/components/SectionHeading";
import GlassCard from "@/components/GlassCard";
import { prizes } from "@/data/prizes";

export default function Prizes() {
  return (
    <section id="prizes" className="section py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading className="mb-8">Prizes & Perks</SectionHeading>
        <div className="grid md:grid-cols-4 gap-6">
          {prizes.map((p) => (
            <GlassCard key={p.title} className="p-5">
              <div className="font-orbitron text-lg font-semibold text-[var(--neon)]">{p.title}</div>
              <p className="mt-2 text-white/80 text-sm">{p.desc}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
