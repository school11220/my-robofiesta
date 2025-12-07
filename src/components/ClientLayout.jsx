
"use client";

import { useState, useEffect } from "react";
import dynamic from 'next/dynamic';

const WelcomeScreen = dynamic(() => import('./WelcomeScreen'), { ssr: false });

export default function ClientLayout({ children }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  // Show only the thank you screen
  return <WelcomeScreen />;
}