"use client";

import { useState, useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import EventCard from '@/components/EventCard';
import CategoryFilter from '@/components/CategoryFilter';
import FloatingComedyWidget from '@/components/FloatingComedyWidget';
import { events } from '@/data/events';

function EventsPageContent() {
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get('search') || '';
  const [selectedCategory, setSelectedCategory] = useState(null);

  const filteredEvents = useMemo(() => {
    let filtered = events;
    if (selectedCategory) {
      filtered = filtered.filter(event => event.category === selectedCategory);
    }
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      filtered = filtered.filter(event => 
        event.eventName.toLowerCase().includes(query) ||
        (event.venue && event.venue.toLowerCase().includes(query))
      );
    }
    return filtered;
  }, [selectedCategory, searchQuery]);

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

  // Group events by date only when a category is selected
  const eventsByDate = useMemo(() => {
    if (!selectedCategory) {
      // Don't group when no category is selected (show all events)
      return null;
    }
    
    const grouped = {};
    filteredEvents.forEach(event => {
      const date = event.date;
      if (!grouped[date]) {
        grouped[date] = [];
      }
      grouped[date].push(event);
    });
    // Sort dates chronologically
    return Object.keys(grouped)
      .sort((a, b) => parseEventDate(a) - parseEventDate(b))
      .reduce((acc, date) => {
        acc[date] = grouped[date];
        return acc;
      }, {});
  }, [filteredEvents, selectedCategory]);

  return (
    <div className="min-h-screen text-white relative">
      {/* Floating Corner Widget */}
      <FloatingComedyWidget />
      
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
          
          <CategoryFilter onCategoryChange={setSelectedCategory} />

          {filteredEvents.length > 0 ? (
            eventsByDate ? (
              // Show date-wise segregation when a category is selected
              <div className="space-y-16">
                {Object.entries(eventsByDate).map(([date, dateEvents]) => (
                  <div key={date} className="relative">
                    {/* Date Header */}
                    <div className="relative mb-8">
                      <div className="flex items-center gap-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-[var(--neon)] font-orbitron tracking-wide whitespace-nowrap">
                          {date}
                        </h2>
                        <div className="flex-grow h-[2px] bg-gradient-to-r from-[var(--neon)]/50 to-transparent"></div>
                      </div>
                    </div>
                    
                    {/* Events Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {dateEvents.map((event, index) => (
                        <EventCard key={`${event.eventName}-${index}`} event={event} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              // Show all events without date segregation when no category is selected
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredEvents.map((event, index) => (
                  <EventCard key={`${event.eventName}-${index}`} event={event} />
                ))}
              </div>
            )
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