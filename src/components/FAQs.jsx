import SectionHeading from "@/components/SectionHeading";
import GlassCard from "@/components/GlassCard";
import { faqs } from "@/data/faqs";

export default function FAQs() {
  return (
    <section id="faqs" className="section py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <SectionHeading className="mb-6">FAQs</SectionHeading>
        <div className="space-y-4">
          {faqs.map((f) => (
            <GlassCard key={f.q} className="p-5">
              <div className="font-orbitron text-lg font-semibold text-[var(--neon)]">{f.q}</div>
              <p className="mt-2 text-white/80">{f.a}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
