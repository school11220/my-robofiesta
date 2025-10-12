"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { events } from "@/data/events";

const openInNewTab = (url) => {
  if (url) window.open(url, '_blank', 'noopener,noreferrer');
};

function NavLink({ href, children }) {
  return (
    <Link href={href} className="neon-box px-3 py-1.5 text-xs sm:text-sm text-white/80 hover:text-[var(--accent)]">
      {children}
    </Link>
  );
}

export default function Navbar() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const searchContainerRef = useRef(null);

  const flatEvents = useMemo(() => Array.isArray(events[0]) ? events.flat() : events, []);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    if (value.trim()) {
      const searchTerm = value.toLowerCase();
      const matchedEvents = flatEvents.filter(event => event?.eventName?.toLowerCase().includes(searchTerm));
      setSuggestions(matchedEvents);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (selectedEvent) => {
    if (!selectedEvent) return;
    setSearchQuery(selectedEvent.eventName);
    setSuggestions([]);
    if (selectedEvent.checkoutLink) {
      openInNewTab(selectedEvent.checkoutLink);
    } else {
      router.push(`/events?search=${encodeURIComponent(selectedEvent.eventName)}`);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    const matchingEvent = flatEvents.find(event => event.eventName.toLowerCase() === searchQuery.trim().toLowerCase());
    if (matchingEvent?.checkoutLink) {
      openInNewTab(matchingEvent.checkoutLink);
    } else {
      router.push(`/events?search=${encodeURIComponent(searchQuery.trim())}`);
    }
    setSuggestions([]);
  };
  
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target)) {
        setSuggestions([]);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="relative z-[999]">
      <div className="mx-auto max-w-full px-4 md:px-8">
        {/* --- Desktop View --- */}
        <div className="hidden md:flex sticky top-4 mt-4 glass items-center justify-between px-6 py-2" ref={searchContainerRef}>
          <Link href="/" className="flex items-center gap-2">
            <Image src="/img/logo.avif" alt="RoboFiesta Logo" width={240} height={56} className="h-auto" priority />
          </Link>
          
          {/* ✅ Search bar has been removed from the desktop view */}
          <nav className="flex items-center gap-3">
            <NavLink href="/#home">Home</NavLink>
            <NavLink href="/#about">About</NavLink>
            <NavLink href="/events">Events</NavLink>
            <NavLink href="/#schedule">Schedule</NavLink>
            <NavLink href="/team">Team</NavLink>
            <NavLink href="/#contact">Contact</NavLink>
          </nav>
        </div>

        {/* --- MOBILE VIEW --- */}
        <div className="md:hidden mt-4 space-y-2" ref={searchContainerRef}>
          <div className="glass flex justify-center px-6 py-2">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/img/logo.avif" alt="RoboFiesta Logo" width={200} height={46} className="h-auto" priority />
            </Link>
          </div>
          <div className="glass sticky top-4 flex flex-col items-center gap-2 px-4 py-2">
            {/* <div className="relative w-full max-w-xs mb-1">
              <form onSubmit={handleSearch}>
                <input type="text" value={searchQuery} onChange={handleInputChange} placeholder="Search events..." className="w-full px-4 py-1.5 bg-black/20 border border-[var(--neon)]/30 rounded-lg text-white text-sm" />
                <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--neon)]/70 hover:text-[var(--neon)]"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg></button>
              </form>
              {suggestions.length > 0 && <ul className="absolute w-full mt-2 bg-black/80 backdrop-blur-md border-2 border-[var(--neon)]/50 rounded-lg overflow-hidden z-20">{suggestions.map(event => event && <li key={event.eventName} onClick={() => handleSuggestionClick(event)} className="px-4 py-2 cursor-pointer text-sm"><div className="flex flex-col"><span className="font-medium">{event.eventName}</span>{(event.date || event.venue) && <span className="text-xs text-[var(--neon)]/70">{[event.date, event.venue].filter(Boolean).join(' • ')}</span>}</div></li>)}</ul>}
            </div> */}
            <nav className="flex items-center justify-center gap-2 flex-wrap">
              <NavLink href="/#home">Home</NavLink>
              <NavLink href="/#schedule">Schedule</NavLink>
              <NavLink href="/events">Events</NavLink>
              <NavLink href="/#contact">Contact</NavLink>
              <NavLink href="/team">Team</NavLink>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}