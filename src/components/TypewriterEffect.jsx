// src/components/TypewriterEffect.jsx
"use client";

import { useState, useEffect } from "react";

const TypewriterEffect = ({ texts, speed = 150, delayBetweenTexts = 1000, cursor = true }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentDisplayedText, setCurrentDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(speed);
  const [showCursor, setShowCursor] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      const fullText = texts[currentTextIndex];
      
      if (isDeleting) {
        // --- Deleting ---
        setShowCursor(false);
        setCurrentDisplayedText(fullText.substring(0, currentDisplayedText.length - 1));
        setTypingSpeed(speed / 2);

        if (currentDisplayedText === "") {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => prev + 1); // Go to the next word without looping
          setTypingSpeed(speed);
        }
      } else {
        // --- Typing ---
        setShowCursor(false);
        setCurrentDisplayedText(fullText.substring(0, currentDisplayedText.length + 1));
        setTypingSpeed(speed);

        if (currentDisplayedText === fullText) {
          setShowCursor(true);
          
          // ✅ Check if it's NOT the last word before setting the delete timer
          if (currentTextIndex < texts.length - 1) {
            setTimeout(() => setIsDeleting(true), delayBetweenTexts);
          }
          // If it IS the last word, the effect will simply stop here.
        }
      }
    };

    const typingTimer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(typingTimer);
  }, [currentDisplayedText, isDeleting, typingSpeed, texts, currentTextIndex, speed, delayBetweenTexts]);

  return (
    <span className="typewriter-container">
      {currentDisplayedText}
      {cursor && showCursor && <span className="typewriter-cursor">|</span>}
    </span>
  );
};

export default TypewriterEffect;