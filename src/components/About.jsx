import SectionHeading from "@/components/SectionHeading";

export default function About() {
  return (
    <section id="about" className="section py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <SectionHeading>About Us</SectionHeading>
        <p className="mt-4 text-white/80 leading-relaxed font-medium">
          RV Educational Institutions Committed to academic excellence since
          1940! In 1940, Sri. M. C. Sivananda Sarma, a renowned freedom fighter,
          educator, and administrator laid the foundation of RV Educational
          Institutions to make high-quality education accessible to all. Since
          then, we have been at the forefront of discovery, innovation, and
          learning. Today, RV is one of India’s largest educational consortium
          with 20 institutions and 20,000+ students.
        </p>
      </div>
    </section>
  );
}
