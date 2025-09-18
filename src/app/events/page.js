import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import EventCard from "@/components/EventCard";
import { events } from "@/data/events";

export default function EventsPage() {
  // Flatten the nested array structure
  const allEvents = events.flat();

  return (
    <div className="min-h-screen text-white">
      <Navbar />
      <main className="pt-28 md:pt-32">
        <section id="all-events" className="section py-10 md:py-16">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <SectionHeading className="mb-8 text-center">
              All Events
            </SectionHeading>
            
            {allEvents.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {allEvents.map((event, index) => (
                  <EventCard key={`${event.eventName}-${index}`} event={event} />
                ))}
              </div>
            ) : (
              <div className="text-center text-white/70">
                <p>No events available at this time.</p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
