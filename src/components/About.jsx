import SectionHeading from "@/components/SectionHeading";
import Image from "next/image";

export default function About() {
  return (
    <>
      <section id="about" className="section py-12 md:py-6">
        <SectionHeading>About Us</SectionHeading>
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <div className="mt-4 space-y-4">
            <p className="text-white/80 leading-relaxed font-medium text-justify text-md">
              Robofiesta 2025 returns with more energy, innovation, and excitement
              than ever before! Building on the legacy of its past success, this
              national-level fest brings together the brightest minds and most
              passionate creators from across the country. With its unique mix of
              technical challenges, creative competitions, and hands-on
              experiences, the fest is designed to inspire innovation, test
              skills, and spark collaboration. It's not just a competition—it's a
              platform where ideas meet opportunity and imagination turns into
              reality.
            </p>

            <p className="text-white/80 leading-relaxed font-medium text-justify text-md">
              But Robofiesta is more than just technology—it's an unforgettable
              celebration of creativity, community, and culture. From high-energy
              tournaments and interactive sessions to thought-provoking talks and
              engaging activities, the fest offers something for everyone. With
              endless opportunities to learn, connect, and showcase talent,
              Robofiesta 2025 promises an electrifying atmosphere where
              participants grow, compete, and create memories that
              last a lifetime.
            </p>

            
          </div>
        </div>
      </section>

      {/* About Our Sponsors Section */}
      <section className="section py-12 md:py-16">
        <SectionHeading>About Our Sponsors</SectionHeading>
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <div className="mt-8 glass p-6 md:p-10 border border-[var(--neon)]/30 rounded-xl">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 mb-6">
              <Image 
                src="/img/RAJA SKODA.pdf (200 x 40 px).png" 
                alt="Raja Skoda Logo" 
                width={200} 
                height={40} 
                className="h-12 md:h-16 w-auto object-contain"
              />
              <h3 className="neon-subtitle font-orbitron text-2xl md:text-3xl font-bold text-center">
                Raja Skoda – Title Sponsor
              </h3>
            </div>
            
            <div className="space-y-4 text-white/80 leading-relaxed text-justify">
              <p className="text-md font-medium">
                At Raja Skoda, innovation drives everything we do.
                We're thrilled to power RoboFiesta 2025 as the Title Sponsor, celebrating the brilliance of young minds who shape the future of technology and engineering.
              </p>

              <p className="text-md font-medium">
                As part of the Raja Group, we're showcasing our latest 2-wheelers and 4-wheelers — a reflection of our commitment to performance, design, and progress.
                Join us on 25th & 26th November at the event grounds to explore how Raja Skoda brings technology and imagination together, redefining the way you move.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
