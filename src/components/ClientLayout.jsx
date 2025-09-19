"use client";

import { useState, useEffect } from "react";
import WelcomeScreen from "./WelcomeScreen";
import LoadingScreen from "./LoadingScreen";

export default function ClientLayout({ children }) {
  const [currentScreen, setCurrentScreen] = useState("main"); // Default to main for returning visits
  const [isFirstVisit, setIsFirstVisit] = useState(false);

  useEffect(() => {
    // Check if this is the first visit in this session
    const hasVisited = sessionStorage.getItem("robofiesta_visited");
    
    if (!hasVisited) {
      // First visit - show welcome screen
      setIsFirstVisit(true);
      setCurrentScreen("welcome");
      sessionStorage.setItem("robofiesta_visited", "true");
    } else {
      // Returning visit - go straight to main content
      setCurrentScreen("main");
    }
  }, []);

  const handleEnterPressed = () => {
    setCurrentScreen("loading");
    // After loading completes, show main content
    setTimeout(() => {
      setCurrentScreen("main");
    }, 1500);
  };

  // For first visit, show welcome screen
  if (isFirstVisit && currentScreen === "welcome") {
    return <WelcomeScreen onEnter={handleEnterPressed} />;
  }

  // For first visit, show loading screen after welcome
  if (isFirstVisit && currentScreen === "loading") {
    return <LoadingScreen />;
  }

  // For all cases (first visit after loading, or returning visits), show main content
  return (
    <div className={`main-content bg-transparent ${isFirstVisit && currentScreen === "main" ? "first-visit-fade" : ""}`}>
      {children}
    </div>
  );
}