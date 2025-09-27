"use client";

import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import TypewriterEffect from "@/components/TypewriterEffect"; // Reuse your existing component
import { faqData } from "@/data/faq"; // Import the data

export default function FAQ() {
  // This state will track which question is currently open
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    // If the clicked question is already open, close it. Otherwise, open it.
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section py-16 md:py-20">
      <div className="mx-auto max-w-4xl px-4 md:px-6">
        <SectionHeading>Frequently Asked Queries</SectionHeading>
        
        {/* Terminal container */}
        <div className="terminal-container mt-12 font-mono">
          <div className="terminal-header">
            <span>ROBOFIESTA_TERMINAL</span>
          </div>
          <div className="terminal-body p-4 md:p-6">
            {faqData.map((item, index) => (
              <div key={index} className="faq-item mb-4">
                <button
                  onClick={() => handleToggle(index)}
                  className={`faq-question w-full text-left flex items-center gap-2 ${activeIndex === index ? 'active' : ''}`}
                >
                  <span className="text-[var(--neon)]">&gt;</span>
                  <span>{item.question}</span>
                </button>
                
                {/* Conditionally render the answer with the typewriter effect */}
                {activeIndex === index && (
                  <div className="faq-answer text-white/80 pl-4 pt-2">
                    <TypewriterEffect
                      texts={[item.answer]} // Pass the answer as an array with one item
                      speed={20} // Faster typing speed for answers
                      cursor={false} // No cursor needed for the answer
                    />
                  </div>
                )}
              </div>
            ))}
            <div className="prompt-line">
              <span className="text-[var(--neon)]">&gt;</span>
              <span className="blinking-cursor">_</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}