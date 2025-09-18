import Image from "next/image";
import GlassCard from "@/components/GlassCard";

function getImagePath(eventName, imagePath) {
  // If image path is provided and not empty, use it
  if (imagePath && imagePath.trim() !== "") {
    // Convert the relative path to public path
    const fileName = imagePath.split('/').pop();
    return `/img/${fileName}`;
  }
  
  // Otherwise, try to match event name to available images
  const eventToImage = {
    "HACK-A-DAY": "/img/logo.png", // Using logo as fallback
    "BGMI": "/img/bgmi.png",
    "FIFA": "/img/bgmi.png", // Using BGMI image as specified
    "Free Fire": "/img/freefire.png",
    "Save The Egg": "/img/save-the-egg.png",
    "Valorant": "/img/bgmi.png", // Using BGMI image as specified
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
  
  return (
    <GlassCard className="overflow-hidden flex flex-col">
      {/* Event Image */}
      <div className="relative w-full aspect-video bg-white/5">
        <Image
          src={imagePath}
          alt={event.eventName}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      
      {/* Event Details */}
      <div className="p-5 flex flex-col justify-between flex-grow">
        <h3 className="font-orbitron text-xl font-bold text-[var(--neon)]">
            {event.eventName}
          </h3>
        <div>
          <div className="text-xs text-white/60 mt-1">
            {event.date} {event.venue && `• ${event.venue}`}
          </div>
          
        </div>
        
        <div className="mt-4">
          
            <a
              href={event.checkoutLink}
              target="_blank"
              rel="noreferrer"
              className="glow-btn text-xs px-3 py-2 mt-1"
            >
              Register
            </a>
          
        </div>
      </div>
    </GlassCard>
  );
}