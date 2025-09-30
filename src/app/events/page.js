"use client";

import { useState, useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import EventCard from '@/components/EventCard';
import DateFilter from '@/components/DateFilter';
import { events } from '@/data/events';

function EventsPageContent() {
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get('search') || '';
  const [selectedDate, setSelectedDate] = useState('all');

  const filteredEvents = useMemo(() => {
    let filtered = events;
    if (selectedDate !== 'all') {
      filtered = filtered.filter(event => event.date === selectedDate);
    }
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      filtered = filtered.filter(event => 
        event.eventName.toLowerCase().includes(query) ||
        (event.venue && event.venue.toLowerCase().includes(query))
      );
    }
    return filtered;
  }, [selectedDate, searchQuery]);

  return (
    <div className="min-h-screen text-white relative">
      {/* ✅ Background updated to match the Team Page */}
      <div className="absolute inset-0 -z-10">
        <div className="stars"></div>
        <div className="twinkling"></div>
        <div className="clouds"></div>
      </div>
      
      <div className="relative z-10">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-center mb-12 font-orbitron neon-title animate-glow">
            Events
          </h1>
          
          <DateFilter events={events} onDateChange={setSelectedDate} />

          {filteredEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredEvents.map((event, index) => (
                <EventCard key={`${event.eventName}-${index}`} event={event} />
              ))}
            </div>
          ) : (
            <div className="text-center text-white/70 mt-8">
              <p className="text-lg mb-4">No events found for the selected criteria.</p>
            </div>
          )}
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default function EventsPage() {
  return (
    <Suspense fallback={<div className="text-center p-20">Loading...</div>}>
      <EventsPageContent />
    </Suspense>
  );
}