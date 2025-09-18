import SectionHeading from "@/components/SectionHeading";
import GlassCard from "@/components/GlassCard";
import Image from "next/image";
import { sponsors } from "@/data/sponsors";

export default function Sponsors() {
  return (
    <section id="sponsors" className="section py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading className="mb-8">Sponsors & Partners</SectionHeading>
        <GlassCard className="p-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
            {sponsors.map((s) => (
              <div key={s.name} className="flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity">
                <Image src={s.logo} alt={s.name} width={120} height={40} className="dark:invert" />
              </div>
            ))}
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
