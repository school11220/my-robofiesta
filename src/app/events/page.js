"use client";

import { useState, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import Navbar from '@/components/Navbar';
import EventCard from '@/components/EventCard';
import { events } from '@/data/events';

export default function EventsPage() {
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get('search') || '';
  const [selectedDate, setSelectedDate] = useState('all');

  // Get unique dates from events
  const uniqueDates = useMemo(() => {
    const dates = [...new Set(events.map(event => event.date))];
    return dates.sort((a, b) => new Date(a) - new Date(b));
  }, []);

  // Filter events based on date and search query
  const filteredEvents = useMemo(() => {
    let filtered = events;

    // Filter by date
    if (selectedDate !== 'all') {
      filtered = filtered.filter(event => event.date === selectedDate);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      filtered = filtered.filter(event => 
        event.eventName.toLowerCase().includes(query) ||
        event.venue.toLowerCase().includes(query)
      );
    }

    return filtered;
  }, [selectedDate, searchQuery]);

  return (
    <div className="min-h-screen text-white relative">
      {/* Galaxy WebGL Background */}
      <div className="fixed inset-0 w-full h-full">
        <div className="absolute inset-0 w-full h-full">
          <div className="stars"></div>
          <div className="twinkling"></div>
          <div className="clouds"></div>
        </div>
      </div>
      
      {/* Main content */}
      <div className="relative z-10">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-center mb-12 font-orbitron neon-title animate-glow">
            Events
          </h1>

          {/* Date filter buttons */}
          <div className="flex flex-wrap gap-3 mb-8 justify-center">
            <button
              onClick={() => setSelectedDate('all')}
              className={`neon-box px-6 py-2 transition-all duration-300 ${
                selectedDate === 'all'
                  ? "text-white border-2 border-[var(--neon)] bg-[var(--neon)]/10 shadow-[0_0_20px_var(--neon),inset_0_0_20px_rgba(0,255,240,0.3)] after:opacity-100 [box-shadow:0_0_20px_var(--neon),0_0_40px_var(--neon),inset_0_0_20px_rgba(0,255,240,0.3)]"
                  : "text-white/80"
              }`}
            >
              All Days
            </button>
            {uniqueDates.map((date) => (
              <button
                key={date}
                onClick={() => setSelectedDate(date)}
                className={`neon-box px-6 py-2 transition-all duration-300 ${
                  selectedDate === date
                    ? "text-white border-2 border-[var(--neon)] bg-[var(--neon)]/10 shadow-[0_0_20px_var(--neon),inset_0_0_20px_rgba(0,255,240,0.3)] after:opacity-100 [box-shadow:0_0_20px_var(--neon),0_0_40px_var(--neon),inset_0_0_20px_rgba(0,255,240,0.3)]"
                    : "text-white/80"
                }`}
              >
                {new Date(date).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric"
                })}
              </button>
            ))}
          </div>

          {/* Events grid */}
          {filteredEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredEvents.map((event, index) => (
                <EventCard key={`${event.eventName}-${index}`} event={event} />
              ))}
            </div>
          ) : (
            <div className="text-center text-white/70 mt-8">
              <p className="text-lg mb-4">No events found.</p>
              {searchQuery && (
                <button
                  onClick={() => window.location.href = '/events'}
                  className="neon-box px-4 py-2 text-sm"
                >
                  View All Events
                </button>
              )}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}