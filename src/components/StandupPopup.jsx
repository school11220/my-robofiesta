"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import StarBorder from "@/components/StarBorder";

export default function StandupPopup() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already seen the popup in this session
    const hasSeenPopup = sessionStorage.getItem('hasSeenStandupPopup');
    
    if (!hasSeenPopup) {
      // Show popup after a short delay for better UX
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    sessionStorage.setItem('hasSeenStandupPopup', 'true');
  };

  const handleGetTickets = () => {
    sessionStorage.setItem('hasSeenStandupPopup', 'true');
    window.open('https://standup.robofiesta.in/event-details/stand-up-show', '_blank');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[9998] animate-fade-in"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 pointer-events-none">
        <div 
          className="relative max-w-2xl w-full pointer-events-auto animate-popup"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute -top-2 -right-2 z-10 w-10 h-10 rounded-full glass border-2 border-purple-500/50 hover:border-purple-500 transition-colors flex items-center justify-center group"
            aria-label="Close popup"
          >
            <span className="text-2xl text-purple-400 group-hover:text-purple-300 transition-colors">×</span>
          </button>

          {/* Glowing effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 via-pink-600/30 to-purple-600/30 blur-2xl animate-pulse-slow"></div>

          {/* Content Container */}
          <div className="relative glass border-2 border-purple-500/50 shadow-[0_0_60px_rgba(168,85,247,0.6)] overflow-hidden rounded-xl">
            {/* Animated gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-pink-900/20"></div>
            
            {/* Content */}
            <div className="relative p-6 md:p-8">
              {/* Badge */}
              <div className="flex justify-center mb-4">
                <div className="glass px-4 py-2 border border-purple-500/50 animate-bounce-slow">
                  <span className="font-orbitron text-sm font-bold text-purple-400">
                    🎤 SPECIAL EVENT ALERT 🎤
                  </span>
                </div>
              </div>

              {/* Title */}
              <h2 className="font-orbitron text-3xl md:text-5xl font-extrabold text-center mb-4">
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
                  Stand-up Comedy Night!
                </span>
              </h2>

              {/* Subtitle */}
              <p className="text-center text-lg md:text-xl text-white/90 mb-6">
                Get ready for an evening of non-stop laughter! 🎭
              </p>

              {/* Image */}
              <div className="relative aspect-video w-full mb-6 overflow-hidden rounded-lg border-2 border-purple-500/30">
                <Image
                  src="/img/comedy.png"
                  alt="Stand-up Show"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 672px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>

              {/* Event Details */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                <div className="glass p-3 border border-purple-500/30 text-center">
                  <div className="text-xs text-white/60 mb-1">📅 Date</div>
                  <div className="font-semibold text-sm">25 Nov</div>
                </div>
                <div className="glass p-3 border border-purple-500/30 text-center">
                  <div className="text-xs text-white/60 mb-1">⏰ Time</div>
                  <div className="font-semibold text-sm">5:30 PM</div>
                </div>
                <div className="glass p-3 border border-purple-500/30 text-center">
                  <div className="text-xs text-white/60 mb-1">📍 Venue</div>
                  <div className="font-semibold text-sm">RVITM</div>
                </div>
                <div className="glass p-3 border border-purple-500/30 text-center">
                  <div className="text-xs text-white/60 mb-1">🎟️ Price</div>
                  <div className="font-semibold text-sm text-yellow-400">₹200</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <StarBorder
                  as="button"
                  onClick={handleGetTickets}
                  className="text-lg font-bold px-8"
                  color="rgb(168, 85, 247)"
                  speed="1.5s"
                >
                  <span className="flex items-center gap-2">
                    GET TICKETS NOW
                    <span className="text-xl">🎟️</span>
                  </span>
                </StarBorder>
                
                <button
                  onClick={handleClose}
                  className="glass px-6 py-3 border border-white/30 hover:border-purple-500/50 transition-all duration-300 font-orbitron text-sm"
                >
                  Maybe Later
                </button>
              </div>

              {/* Urgency Text */}
              <p className="text-center text-sm text-purple-300 mt-4 animate-pulse">
                ⚡ Limited seats available! Book now ⚡
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes popup {
          0% {
            opacity: 0;
            transform: scale(0.8) translateY(20px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.5;
          }
          50% {
            opacity: 0.8;
          }
        }

        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }

        .animate-popup {
          animation: popup 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </>
  );
}
