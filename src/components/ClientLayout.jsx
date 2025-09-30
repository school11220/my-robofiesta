// src/components/ClientLayout.jsx
"use client";

import { useState, useEffect } from "react";
import WelcomeScreen from "./WelcomeScreen";
import LoadingScreen from "./LoadingScreen";

export default function ClientLayout({ children }) {
  const [screen, setScreen] = useState("main"); // "welcome" | "loading" | "main"
  const [isFirstVisit, setIsFirstVisit] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Handle initial mounting and hydration
  useEffect(() => {
    setIsMounted(true);

    let isFirst = false;
    try {
      const hasVisited = window.sessionStorage.getItem("robofiesta_visited");
      if (!hasVisited) {
        isFirst = true;
        window.sessionStorage.setItem("robofiesta_visited", "true");
      }
    } catch (error) {
      console.error("Failed to access sessionStorage:", error);
    }

    if (isFirst) {
      setIsFirstVisit(true);
      setScreen("welcome");
    }

    return () => setIsMounted(false);
  }, []);

  const handleEnter = () => setScreen("loading");
  const handleLoadingComplete = () => setScreen("main");

  if (isFirstVisit && screen === "welcome") {
    return <WelcomeScreen onEnter={handleEnter} />;
  }

  if (isFirstVisit && screen === "loading") {
    // ✅ FIX: Changed `onFinish` to `onLoaded` to match the LoadingScreen component
    return <LoadingScreen onLoaded={handleLoadingComplete} />;
  }

  // When the loading sequence is done, this renders your page
  return (
    <div className={`main-content ${isFirstVisit ? "first-visit-fade" : ""}`}>
      {children}
    </div>
  );
}