"use client";

import { useEffect, useMemo, useState } from "react";

export default function Countdown({ targetDate }) {
  const target = useMemo(() => new Date(targetDate).getTime(), [targetDate]);
  const [timeLeft, setTimeLeft] = useState(target - Date.now());

  useEffect(() => {
    const id = setInterval(() => setTimeLeft(target - Date.now()), 1000);
    return () => clearInterval(id);
  }, [target]);

  const clamp = (v) => Math.max(0, v);
  const total = clamp(timeLeft);

  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((total / (1000 * 60)) % 60);
  const seconds = Math.floor((total / 1000) % 60);

  const items = [
    { label: "DAYS", value: days },
    { label: "HRS", value: hours },
    { label: "MINS", value: minutes },
    { label: "SECS", value: seconds },
  ];

  return (
    <div className="mt-6 grid grid-cols-4 gap-3 md:gap-4 w-full max-w-lg">
      {items.map((item) => (
        <div key={item.label} className="glass text-center py-3 md:py-4">
          <div className="text-2xl md:text-3xl font-bold text-[var(--neon)] font-orbitron">
            {item.value.toString().padStart(2, "0")}
          </div>
          <div className="text-xs md:text-sm text-white/70 tracking-widest">{item.label}</div>
        </div>
      ))}
    </div>
  );
}
