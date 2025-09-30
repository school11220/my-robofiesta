// src/hooks/useScramble.js

import { useState, useRef, useCallback } from 'react';

const useScramble = (originalText, speed = 30) => {
  const [text, setText] = useState(originalText);
  const intervalRef = useRef(null);
  const charset = "▒▓█><*#%&?01";

  const scramble = useCallback(() => {
    let iteration = 0;
    if (intervalRef.current) clearInterval(intervalRef.current);
    
    intervalRef.current = setInterval(() => {
      setText(prev => 
        prev.split("")
          .map((char, index) => {
            if (index < iteration) return originalText[index];
            return charset[Math.floor(Math.random() * charset.length)];
          })
          .join("")
      );
      
      if (iteration >= originalText.length) {
        clearInterval(intervalRef.current);
      }
      
      iteration += 1 / 3;
    }, speed);
  }, [originalText, speed]);

  const reset = useCallback(() => {
    clearInterval(intervalRef.current);
    setText(originalText);
  }, [originalText]);

  return { text, scramble, reset };
};

export default useScramble;