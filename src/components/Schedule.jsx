import SectionHeading from "@/components/SectionHeading";
import GlassCard from "@/components/GlassCard";
import { schedule } from "@/data/schedule";

export default function Schedule() {
  return (
    <section id="schedule" className="section py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <SectionHeading className="mb-8">Schedule</SectionHeading>
        <div className="space-y-4">
          {schedule.map((d) => (
            <GlassCard key={d.day} className="p-5">
              <div className="font-orbitron text-lg font-semibold text-[var(--neon)]">{d.day}</div>
              <ul className="mt-2 list-disc list-inside text-white/80">
                {d.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
