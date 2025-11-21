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
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          
          {/* Title Sponsors Card */}
          <div className="mt-8 glass p-6 md:p-10 border border-[var(--neon)]/30 rounded-xl">
            
            {/* Sponsors Logos Header */}
            <div className="flex flex-col items-center justify-center gap-6 mb-8">
              <h3 className="neon-subtitle font-orbitron text-xl md:text-2xl font-bold text-center">
                Title Sponsors
              </h3>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-8">
                <Image 
                  src="/img/RAJA SKODA.pdf (200 x 40 px).png" 
                  alt="Raja Skoda Logo" 
                  width={200} 
                  height={40} 
                  className="h-10 md:h-12 w-auto object-contain"
                />
                <span className="hidden sm:block text-white/100 text-2xl">|</span>
                <Image 
                  src="/img/sec.png" 
                  alt="Raja Skoda Logo" 
                  width={200} 
                  height={40} 
                  className="h-20 md:h-18 w-auto object-contain"
                />
                <span className="hidden sm:block text-white/100 text-2xl">|</span>

                <Image 
                  src="/img/new.png" 
                  alt="Networkers Home Logo" 
                  width={220} 
                  height={44} 
                  className="h-12 md:h-14 w-auto object-contain"
                />
                
              </div>
            </div>

            {/* Raja Skoda Description */}
            <div>
              <h4 className="font-orbitron text-lg md:text-xl font-bold text-[var(--neon)] mb-4 flex items-center gap-3">
                <Image 
                  src="/img/RAJA SKODA.pdf (200 x 40 px).png" 
                  alt="Raja Skoda" 
                  width={140} 
                  height={28} 
                  className="h-6 md:h-10 w-auto object-contain"
                />
              </h4>
              <div className="space-y-3 text-white/80 leading-relaxed text-justify">
                <p className="text-sm md:text-md font-medium">
                  At Raja Skoda, innovation drives everything we do.
                  We're thrilled to power RoboFiesta 2025 as the Title Sponsor, celebrating the brilliance of young minds who shape the future of technology and engineering.
                </p>

                <p className="text-sm md:text-md font-medium">
                  As part of the Raja Group, we're showcasing our latest 2-wheelers and 4-wheelers — a reflection of our commitment to performance, design, and progress.
                  Join us on 25th & 26th November at the event grounds to explore how Raja Skoda brings technology and imagination together, redefining the way you move.
                </p>
                <p className="text-large md:text-md font-medium">
                  <a href="https://www.rajaskoda.in/" target="blank">Visit Raja Skoda</a>
                </p>
              </div>
            </div>
             {/* Divider */}
            <div className="border-t border-white/20 my-8"></div>
            {/* Networkers Home Description */}
            <div className="mb-8">
              <h4 className="font-orbitron text-lg md:text-xl font-bold text-[var(--neon)] mb-4 flex items-center gap-3">
                <Image 
                  src="/img/new.png" 
                  alt="NH" 
                  width={120} 
                  height={24} 
                  className="h-6 md:h-14 w-auto object-contain"
                />
              </h4>
              <div className="space-y-3 text-white/80 leading-relaxed text-justify">
                <p className="text-sm md:text-md font-medium">
                  Networkers Home is transforming by delivering world-class, practical training that bridges the gap between academic learning and real industry demands.
                </p>
                <p className="text-sm md:text-md font-medium">
                  With over a decade of excellence, we have become India's leading institute for Networking, Cybersecurity, Cloud Computing, DevOps, Ethical Hacking, and advanced AI/ML. Our students work on real NVIDIA GPU infrastructure to train LLM models, develop real-world use-case solutions, and gain the practical expertise the industry urgently seeks.
                </p>
                <p className="text-sm md:text-md font-medium">
                  At RoboFiesta 2025, we will showcase how our expert mentors, enterprise-grade labs, and career-focused programs enable students to move beyond theory and build the capabilities that define successful technology professionals.
                </p>
                <p className="text-sm md:text-md font-medium">
                  Join us on the 25th and 26th of November to explore how Networkers Home is reshaping education, driving innovation, and empowering young talent to turn their passion for technology into powerful career opportunities.
                </p>
                <p className="text-sm md:text-md font-medium text-[var(--neon)] italic">
                  Together, we inspire the next generation of tech leaders.
                </p>
              </div>
            </div>

           

            

          </div>
        </div>
      </section>
    </>
  );
}
