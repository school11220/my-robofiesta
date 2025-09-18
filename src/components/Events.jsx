import SectionHeading from "@/components/SectionHeading";
import { REG_LINK } from "@/lib/constants";

export default function Events() {
  return (
    <section id="events" className="section py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6 text-center">
        <SectionHeading className="mb-8">Events</SectionHeading>
        <div className="mt-8">
          <a
            href="/events"
            className="glow-btn text-lg"
          >
            View All Events
          </a>
        </div>
      </div>
    </section>
  );
}
