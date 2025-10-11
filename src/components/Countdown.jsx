"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Countdown({ targetDate, onComplete }) {
  // Convert date to timestamp safely
  const target = useMemo(() => {
    const t = new Date(targetDate).getTime();
    return isNaN(t) ? Date.now() : t;
  }, [targetDate]);

  const calcTimeLeft = () => Math.max(0, target - Date.now());

  const [timeLeft, setTimeLeft] = useState(calcTimeLeft);

  // Stop when countdown ends
  useEffect(() => {
    if (timeLeft <= 0) return;

    const id = setInterval(() => {
      setTimeLeft((prev) => {
        const next = calcTimeLeft();
        if (next <= 0) {
          clearInterval(id);
          onComplete?.();
        }
        return next;
      });
    }, 1000);

    return () => clearInterval(id);
  }, [target]);

  // Convert ms → time parts
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
  const seconds = Math.floor((timeLeft / 1000) % 60);

  const items = [
    { label: "DAYS", value: days },
    { label: "HRS", value: hours },
    { label: "MINS", value: minutes },
    { label: "SECS", value: seconds },
  ].filter((item) => !(item.label === "DAYS" && item.value === 0)); // hide 0 days

  return (
    <div className="mt-6 grid grid-cols-4 gap-3 md:gap-4 w-full max-w-lg">
      {items.map((item) => (
        <div
          key={item.label}
          className="glass text-center py-3 md:py-4 rounded-2xl relative"
        >
          <AnimatePresence mode="popLayout">
            <motion.div
              key={item.value}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="text-2xl md:text-3xl font-bold text-[var(--neon)] font-orbitron"
            >
              {item.value.toString().padStart(2, "0")}
            </motion.div>
          </AnimatePresence>
          <div className="text-xs md:text-sm text-white/70 tracking-widest mt-1">
            {item.label}
          </div>
        </div>
      ))}
    </div>
  );
}