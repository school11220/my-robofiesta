import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import EventCard from "@/components/EventCard";
import Galaxy from "@/components/Galaxy";
import { events } from "@/data/events";

export default function EventsPage() {
  // Flatten the nested array structure
  const allEvents = events.flat();

  return (
    <div className="min-h-screen text-white relative">
      {/* Galaxy WebGL Background */}
      <div className="fixed inset-0 w-full h-full">
        <Galaxy 
          mouseRepulsion={true}
          mouseInteraction={true}
          density={3.5}
          glowIntensity={0.6}
          saturation={1.0}
          hueShift={180}
          twinkleIntensity={0.4}
          rotationSpeed={0.01}
          speed={0.5}
          transparent={false}
          repulsionStrength={1.5}
        />
      </div>
      
      {/* Main content */}
      <div className="relative z-10">
        <Navbar />
        <main className="pt-6 md:pt-8">
        <section id="all-events" className="section py-4 md:py-6">
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
    </div>
  );
}