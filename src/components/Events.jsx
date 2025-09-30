import Link from "next/link";

export default function Events() {
  return (
    <section id="events" className="section py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6 text-center">
        <h2 className="font-orbitron text-4xl md:text-5xl font-bold neon-title animate-glow mb-8">
          Events
        </h2>
        <div className="mt-8">
          <Link href="/events" className="glow-btn text-lg">
            View All Events
          </Link>
        </div>
      </div>
    </section>
  );
}