"use client";

import { useState } from "react";
import WelcomeScreen from "./WelcomeScreen";
import LoadingScreen from "./LoadingScreen";

export default function ClientLayout({ children }) {
  const [currentScreen, setCurrentScreen] = useState("welcome"); // welcome, loading, main

  const handleEnterPressed = () => {
    setCurrentScreen("loading");
    // After loading completes, show main content
    setTimeout(() => {
      setCurrentScreen("main");
    }, 1500); // Reduced from 3000ms to 1500ms
  };

  if (currentScreen === "welcome") {
    return <WelcomeScreen onEnter={handleEnterPressed} />;
  }

  if (currentScreen === "loading") {
    return <LoadingScreen />;
  }

  return (
    <div className="main-content bg-transparent">
      {children}
    </div>
  );
}