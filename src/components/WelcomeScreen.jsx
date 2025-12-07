"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function WelcomeScreen() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, 0.05, 0.01, 0.9]
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: [0.6, 0.05, 0.01, 0.9]
      }
    }
  };

  return (
    <>
      <style jsx global>{`
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .float-slow {
          animation: floatSlow 6s ease-in-out infinite;
        }
      `}</style>

      <div
        className={`fixed inset-0 z-50 bg-black flex items-center justify-center overflow-hidden transition-opacity duration-1000 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Animated starfield background */}
        <div className="absolute inset-0">
          <div className="stars"></div>
          <div className="twinkling"></div>
          <div className="clouds"></div>
        </div>
        
        <motion.div
          className="relative z-10 text-center max-w-4xl px-6 py-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Thank You Title with Framer Motion */}
          <motion.h1
            className="font-orbitron text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-12 float-slow"
            variants={titleVariants}
            style={{
              textShadow: "0 0 30px rgba(0, 255, 240, 0.5), 0 0 60px rgba(179, 136, 255, 0.3)"
            }}
          >
            Thank You!
          </motion.h1>

          {/* Message Content */}
          <motion.div className="space-y-8" variants={itemVariants}>
            <motion.p 
              className="text-xl md:text-2xl text-white/90 font-oxanium leading-relaxed"
              variants={itemVariants}
            >
              What an incredible journey it has been! RoboFiesta 2025 has come to an end,
              <br />
              but the memories and innovations you created will last forever.
            </motion.p>

            <motion.div 
              className="text-6xl my-10"
              variants={itemVariants}
              animate={{
                scale: [1, 1.2, 1],
                transition: {
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
            >
              ❤️
            </motion.div>

            <motion.p 
              className="text-xl md:text-2xl text-white/90 font-oxanium leading-relaxed"
              variants={itemVariants}
            >
              To our amazing <span className="text-[var(--neon)] font-bold">participants</span> - 
              your creativity, passion, and dedication made this event truly special.
            </motion.p>

            <motion.p 
              className="text-xl md:text-2xl text-white/90 font-oxanium leading-relaxed"
              variants={itemVariants}
            >
              To our wonderful <span className="text-[var(--neon-purple)] font-bold">coordinators</span> - 
              your tireless efforts, planning, and support made this event possible.
              <br />
              Thank you for bringing this vision to life.
            </motion.p>

            <motion.div 
              className="text-2xl md:text-3xl text-[var(--neon)] font-orbitron mt-12 tracking-wider"
              variants={itemVariants}
            >
              Until we meet again... 🚀
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}