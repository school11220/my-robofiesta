import Image from "next/image";
import GlassCard from "@/components/GlassCard";
import StarBorder from "@/components/StarBorder";
// import Link from "next/link"; // No longer needed as we use a standard <a> tag
// import events from "../data/events" // ✅ FIX: Removed unused import

function getImagePath(eventName, imagePath) {
  // If an image path is provided and not empty, use it
  if (imagePath && imagePath.trim() !== "") {
    const fileName = imagePath.split('/').pop();
    return `/img/${fileName}`;
  }
  
  // Otherwise, fall back to the predefined map
  const eventToImage = {
    "HACK-A-DAY": "/img/logo.png",
    "BGMI": "/img/bgmi.png",
    "FIFA": "/img/bgmi.png",
    "Free Fire": "/img/freefire.png",
    "Save The Egg": "/img/save-the-egg.png",
    "Valorant": "/img/bgmi.png",
    "Capture the Flag": "/img/ctf.png",
    "IPL Auction": "/img/ipl.png",
    "Treasure Hunt": "/img/treasurehunt.png",
    "Sell Me This Pen": "/img/sellmethispen.png",
    "Robo Race": "/img/roborace.png",
    "Circuitrix": "/img/circuitrix.png",
    "Squid Game": "/img/squidgames.png",
  };
  
  return eventToImage[eventName] || "/img/logo.png";
}

export default function EventCard({ event }) {
  const imagePath = getImagePath(event.eventName, event.image);
  const isSoldOut = event.soldOut || !event.checkoutLink;
  
  const CardWrapper = isSoldOut ? 'div' : 'a';
  const linkProps = isSoldOut ? {} : {
    href: event.checkoutLink,
    target: "_blank",
    rel: "noopener noreferrer"
  };
  
  return (
    <CardWrapper 
      className="block" 
      {...linkProps}
    >
      {/* Added h-full to ensure consistent card height in a grid layout */}
      <GlassCard className={`overflow-hidden flex flex-col group ${!isSoldOut && 'hover:scale-105'} transition-transform duration-300 relative ${!isSoldOut && 'cursor-pointer'} h-full`}>
        {/* Event Image */}
        <div className="relative w-full aspect-video bg-white/5">
          {/* Sold Out Badge */}
          {isSoldOut && (
            <div className="absolute top-3 right-3 z-10 glass px-3 py-1 border-2 border-red-500/60">
              <span className="font-orbitron text-xs font-bold text-red-500">SOLD OUT</span>
            </div>
          )}
          <Image
            src={imagePath}
            alt={event.eventName}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          
          {/* Description overlay on hover */}
          {event.description && (
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <p className="text-white text-sm text-center leading-relaxed">
                {event.description}
              </p>
            </div>
          )}
        </div>
      
        {/* Event Details */}
        <div className="p-5 flex flex-col justify-between flex-grow">
          <div>
            <h3 className="font-orbitron text-xl font-bold text-[var(--neon)]">
                {event.eventName}
            </h3>
            <div className="text-xs text-white/60 mt-1">
              {event.date}
            </div>
            {event.time && (
              <div className="text-xs text-[var(--neon)] mt-1">
                {event.time}
              </div>
            )}
          </div>
          
          <div className="mt-4">
            {isSoldOut ? (
              <div className="glass px-4 py-2 text-center border border-red-500/30">
                <span className="font-orbitron text-xs font-semibold text-red-500">SOLD OUT</span>
              </div>
            ) : (
              <StarBorder
                className="text-xs"
                color="cyan"
                speed="2.5s"
              >
                Register
              </StarBorder>
            )}
          </div>
        </div>
      </GlassCard>
    </CardWrapper>
  );
}