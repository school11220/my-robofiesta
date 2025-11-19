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
        <div className="hidden md:flex sticky top-4 mt-4 glass items-center justify-between px-6 py-3" ref={searchContainerRef}>
          <div className="flex items-center gap-4">
            <Link href="/" >
              <Image src="/img/logo.avif" alt="RoboFiesta Logo" width={280} height={65} className="h-15 w-auto" priority />
            </Link>

            {/* Small badge logo + text (from /img) placed next to header text
            <div className="hidden lg:flex items-center gap-2 ml-2">
              <Image src="/img/logo.png" alt="RF Badge" width={44} height={44} className="h-10 w-10 rounded-md object-contain" />
              <span className="text-white font-medium tracking-wide">RoboFiesta</span>
            </div> */}

            <span className="text-white text-2xl font-light mx-1">×</span>
            <Image src="/img/RAJA SKODA.pdf (200 x 40 px).png" alt="Sponsor" width={160} height={32} className="h-8 w-auto" />
            <span className="text-white/70 text-2xl font-thin mx-1">|</span>
            <Image src="/img/sec.png" alt="Sponsor" width={160} height={32} className="h-16 w-auto" />
          </div>
          
          {/* ✅ Search bar has been removed from the desktop view */}
          <nav className="flex items-center gap-3">
            <NavLink href="/#home">Home</NavLink>
            <NavLink href="/#about">About</NavLink>
            <NavLink href="/events">Events</NavLink>
            <NavLink href="/#schedule">Schedule</NavLink>
            <NavLink href="/team">Team</NavLink>
            <NavLink href="/#contact">Contact</NavLink>
            <Link 
              href="https://standup.robofiesta.in/event-details/stand-up-show" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gradient-to-r from-cyan-600 via-cyan-400 to-cyan-600 bg-[length:200%_100%] hover:animate-[gradient-x_3s_ease_infinite] text-white font-semibold rounded-lg shadow-[0_0_15px_rgba(0,255,240,0.5)] hover:shadow-[0_0_25px_rgba(0,255,240,0.8)] transition-all duration-300 text-sm whitespace-nowrap"
            >
              Stand-up Show
            </Link>
          </nav>
        </div>

        {/* --- MOBILE VIEW --- */}
        <div className="md:hidden mt-4 space-y-2" ref={searchContainerRef}>
          <div className="glass flex justify-center items-center gap-3 px-3 py-5">
            <Image src="/img/logo.avif" alt="RoboFiesta Logo" width={110} height={22} className="h-10 w-auto" priority />

            {/* Small badge logo for mobile (visible on md and below) */}
            <div className="flex items-center gap-2">
              <Image src="/img/logo.png" alt="RF Badge" width={36} height={36} className="h-8 w-8 rounded-md object-contain" />
              <span className="text-white text-sm font-medium">RoboFiesta</span>
            </div>

            <span className="text-white text-lg font-light"> × </span>
            <Image src="/img/RAJA SKODA.pdf (200 x 40 px).png" alt="Sponsor" width={110} height={22} className="h-6 w-auto" />
            <span className="text-white/70 text-lg font-thin"> | </span>
            <Image src="/img/sec.png" alt="Sponsor" width={110} height={22} className="h-12 w-auto" />
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
              <Link 
                href="https://standup.robofiesta.in/event-details/stand-up-show" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-3 py-1.5 bg-gradient-to-r from-cyan-600 via-cyan-400 to-cyan-600 bg-[length:200%_100%] hover:animate-[gradient-x_3s_ease_infinite] text-white font-semibold rounded-lg shadow-[0_0_15px_rgba(0,255,240,0.5)] hover:shadow-[0_0_25px_rgba(0,255,240,0.8)] transition-all duration-300 text-xs whitespace-nowrap"
              >
                Stand-up Show
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}