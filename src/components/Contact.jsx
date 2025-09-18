import SectionHeading from "@/components/SectionHeading";
import GlassCard from "@/components/GlassCard";

export default function Contact() {
  return (
    <section id="contact" className="section py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <SectionHeading className="mb-6">Contact</SectionHeading>
        <div className="grid md:grid-cols-2 gap-6">
          <GlassCard className="p-5">
            <div className="text-white/80">
              <p>
                Email: <a className="text-[var(--neon)]" href="mailto:info@robofiesta.space">info@robofiesta.space</a>
              </p>
              <p className="mt-2">
                Twitter/X: <a className="text-[var(--neon)]" href="https://x.com/robofiesta" target="_blank" rel="noreferrer">@robofiesta</a>
              </p>
              <p className="mt-2">
                Instagram: <a className="text-[var(--neon)]" href="https://instagram.com/robofiesta" target="_blank" rel="noreferrer">@robofiesta</a>
              </p>
            </div>
          </GlassCard>
          <GlassCard className="p-0 overflow-hidden min-h-[250px]">
            <div className="p-5 text-white/70">Venue map will appear here.</div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
