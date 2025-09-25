import SectionHeading from "@/components/SectionHeading";

export default function About() {
  return (
    <section id="about" className="section py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <SectionHeading>About Us</SectionHeading>
        <div className="mt-4 space-y-4">
          <p className="text-white/80 leading-relaxed font-medium text-justify text-md">
            Robofiesta 2025 returns with more energy, innovation, and excitement
            than ever before! Building on the legacy of its past success, this
            national-level fest brings together the brightest minds and most
            passionate creators from across the country. With its unique mix of
            technical challenges, creative competitions, and hands-on
            experiences, the fest is designed to inspire innovation, test
            skills, and spark collaboration. It’s not just a competition—it’s a
            platform where ideas meet opportunity and imagination turns into
            reality.
          </p>

          <p className="text-white/80 leading-relaxed font-medium text-justify text-md">
            But Robofiesta is more than just technology—it’s an unforgettable
            celebration of creativity, community, and culture. From high-energy
            tournaments and interactive sessions to thought-provoking talks and
            engaging activities, the fest offers something for everyone. With
            endless opportunities to learn, connect, and showcase talent,
            Robofiesta 2025 promises an electrifying atmosphere where
            participants grow, compete, and create memories that
            last a lifetime.
          </p>

          
        </div>
      </div>
    </section>
  );
}
