import Image from "next/image";
import GlassCard from "@/components/GlassCard";
import StarBorder from "@/components/StarBorder";
import Link from "next/link";

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
    <Link href="/events/abc" className="block">
      <GlassCard className="overflow-hidden flex flex-col group hover:scale-105 transition-transform duration-300 relative cursor-pointer">
      {/* Event Image */}
      <div className="relative w-full aspect-video bg-white/5" >
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
        <h3 className="font-orbitron text-xl font-bold text-[var(--neon)]">
            {event.eventName}
          </h3>
        <div>
          <div className="text-xs text-white/60 mt-1">
            {event.date}
          </div>
          {event.time && (
            <div className="text-xs text-[var(--neon)] mt-1">
              {event.time}
            </div>
          )}
          {/* {event.venue && (
            <div className="text-xs text-white/60 mt-1">
             {event.venue}
            </div>
          )} */}
        </div>
        
        <div className="mt-4">
          <StarBorder
            as="a"
            href={event.checkoutLink}
            target="_blank"
            rel="noreferrer"
            className="text-xs"
            color="cyan"
            speed="2.5s"
          >
            Register
          </StarBorder>
        </div>
      </div>
    </GlassCard>
    </Link>
  );
}