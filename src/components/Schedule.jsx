import SectionHeading from "@/components/SectionHeading";
import GlassCard from "@/components/GlassCard";
import { events } from "@/data/events";

export default function Schedule() {
  // Helper function to parse date strings
  const parseEventDate = (dateString) => {
    // Handle dates like "22-23 November 2025" or "13 October 2025"
    const parts = dateString.trim().split(' ');
    const month = parts[parts.length - 2];
    const year = parts[parts.length - 1];
    // Take the first day if it's a range (e.g., "22-23" -> "22")
    const day = parts[0].split('-')[0];
    return new Date(`${day} ${month} ${year}`);
  };

  // Group events by date
  const eventsByDate = events.reduce((acc, event) => {
    const date = event.date;
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(event);
    return acc;
  }, {});

  // Sort dates chronologically using parseEventDate
  const sortedDates = Object.keys(eventsByDate).sort((a, b) => {
    return parseEventDate(a) - parseEventDate(b);
  });

  // Sort events within each date by start time
  Object.keys(eventsByDate).forEach(date => {
    eventsByDate[date].sort((a, b) => {
      if (!a.time || !b.time) return 0;
      const timeA = a.time.split(' ')[0];
      const timeB = b.time.split(' ')[0];
      return timeA.localeCompare(timeB);
    });
  });

  return (
    <section id="schedule" className="section py-12 md:py-16">
      <SectionHeading className="mb-12 text-center">Schedule</SectionHeading>
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="space-y-8">
          {sortedDates.map((date) => (
            <div key={date} className="space-y-4">
              <h3 className="font-orbitron text-2xl font-bold text-[var(--neon)] text-center mb-6">
                {date}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {eventsByDate[date].map((event, index) => {
                  const isSoldOut = event.soldOut || !event.checkoutLink;
                  
                  const cardContent = (
                    <GlassCard key={`${event.eventName}-${index}`} className={`p-4 md:p-4 relative ${!isSoldOut && 'cursor-pointer'}`}>
                      {/* Sold Out Badge */}
                      {isSoldOut && (
                        <div className="absolute top-2 right-2 glass px-2 py-0.5 border border-red-500/60">
                          <span className="font-orbitron text-[10px] font-bold text-red-500">SOLD OUT</span>
                        </div>
                      )}
                      
                      <div className="flex flex-col space-y-2">
                        <h4 className="font-orbitron text-base md:text-lg font-semibold text-white text-center pr-8">
                          {event.eventName}
                        </h4>
                        
                        {event.time && (
                          <div className={`flex items-center justify-center gap-2 text-xs md:text-sm font-medium ${isSoldOut ? 'text-white/40' : 'text-[var(--neon)]'}`}>
                            <svg 
                              className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" 
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
                            <span className="text-center">{event.time}</span>
                          </div>
                        )}
                      </div>
                    </GlassCard>
                  );

                  // Wrap with link only if checkoutLink exists and not sold out
                  return event.checkoutLink && !isSoldOut ? (
                    <a
                      key={`${event.eventName}-${index}`}
                      href={event.checkoutLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {cardContent}
                    </a>
                  ) : (
                    cardContent
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
