import SectionHeading from "@/components/SectionHeading";
import GlassCard from "@/components/GlassCard";
import { events } from "@/data/events";

export default function Schedule() {
  // Group events by date
  const eventsByDate = events.reduce((acc, event) => {
    const date = event.date;
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(event);
    return acc;
  }, {});

  // Sort dates chronologically and events within each date by time
  const sortedDates = Object.keys(eventsByDate).sort((a, b) => {
    return new Date(a) - new Date(b);
  });

  // Sort events within each date by start time
  Object.keys(eventsByDate).forEach(date => {
    eventsByDate[date].sort((a, b) => {
      if (!a.time || !b.time) return 0;
      const timeA = a.time.split(' ')[0]; // Get start time
      const timeB = b.time.split(' ')[0]; // Get start time
      return timeA.localeCompare(timeB);
    });
  });

  return (
    <section id="schedule" className="section py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading className="mb-12 text-center">Schedule</SectionHeading>
        
        <div className="space-y-8">
          {sortedDates.map((date) => (
            <div key={date} className="space-y-4">
              <h3 className="font-orbitron text-2xl font-bold text-[var(--neon)] text-center mb-6">
                {date}
              </h3>
              
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {eventsByDate[date].map((event, index) => (
                  <GlassCard key={`${event.eventName}-${index}`} className="p-4">
                    <div className="flex flex-col space-y-2">
                      <h4 className="font-orbitron text-lg font-semibold text-white text-center">
                        {event.eventName}
                      </h4>
                      
                      {event.time && (
                        <div className="flex items-center justify-center gap-2 text-[var(--neon)] text-sm font-medium">
                          <svg 
                            className="w-4 h-4" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path 
                              strokeLinecap="round" 
                              strokeLinejoin="round" 
                              strokeWidth={2} 
                              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" 
                            />
                          </svg>
                          <span>{event.time}</span>
                        </div>
                      )}
                      
                      {/* {event.venue && (
                        <div className="flex items-center gap-2 text-white/70 text-sm">
                          <svg 
                            className="w-4 h-4 text-[var(--neon)]" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path 
                              strokeLinecap="round" 
                              strokeLinejoin="round" 
                              strokeWidth={2} 
                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" 
                            />
                            <path 
                              strokeLinecap="round" 
                              strokeLinejoin="round" 
                              strokeWidth={2} 
                              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" 
                            />
                          </svg>
                          <span>{event.venue}</span>
                        </div>
                      )} */}
                    </div>
                  </GlassCard>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
