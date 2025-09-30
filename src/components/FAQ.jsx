"use client";

import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import TypewriterEffect from "@/components/TypewriterEffect";
import { faqData } from "@/data/faq";

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // A reusable component for the terminal prompt
  const Prompt = () => (
    <span className="faq-prompt">user@robofiesta:~$</span>
  );

  return (
    <section id="faq" className="section py-16 md:py-20">
      <div className="mx-auto max-w-4xl px-4 md:px-6">
        <SectionHeading>Frequently Asked Questions</SectionHeading>
        
        <div className="terminal-container mt-12">
          <div className="terminal-body p-4 md:p-6">
            {faqData.map((item, index) => (
              <div key={index} className="faq-item mb-2">
                <button
                  onClick={() => handleToggle(index)}
                  className={`faq-question ${activeIndex === index ? 'active' : ''}`}
                >
                  <Prompt />
                  <span className="faq-question-text">{item.question}</span>
                </button>
                
                {activeIndex === index && (
                  <div className="faq-answer">
                    <TypewriterEffect
                      texts={[item.answer]}
                      speed={20}
                      cursor={false}
                    />
                  </div>
                )}
              </div>
            ))}
            <div className="prompt-line flex items-center">
              <Prompt />
              <span className="animate-blink font-bold">_</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}