
"use client";

import { useState, useEffect } from "react";
import dynamic from 'next/dynamic';


const WelcomeScreen = dynamic(() => import('./WelcomeScreen'), { ssr: false });
const LoadingScreen = dynamic(() => import('./LoadingScreen'), { ssr: false });

export default function ClientLayout({ children }) {
  const [screen, setScreen] = useState("main");
  const [isFirstVisit, setIsFirstVisit] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    try {
      if (!sessionStorage.getItem("robofiesta_visited")) {
        setIsFirstVisit(true);
        setScreen("welcome");
        sessionStorage.setItem("robofiesta_visited", "true");
      }
    } catch (error) {
      console.error("Failed to access sessionStorage:", error);
    }
  }, []);

  const handleEnter = () => setScreen("loading");
  const handleLoadingComplete = () => setScreen("main");

  if (!isMounted) {
    return null;
  }

  if (isFirstVisit && screen === "welcome") {
    return <WelcomeScreen onEnter={handleEnter} />;
  }

  if (isFirstVisit && screen === "loading") {
    return <LoadingScreen onLoaded={handleLoadingComplete} />;
  }

  // ✅ This is the final layout structure
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* The 'relative z-10' ensures this content is on top of the Galaxy background. */}
      {/* The 'flex-grow' pushes the footer down to the bottom of the screen. */}
      <main className="relative z-10 flex-grow">
        {children}
      </main>
      
    </div>
  );
}