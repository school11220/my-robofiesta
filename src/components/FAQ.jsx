"use client";
import { useState } from "react"; // Removed useEffect and useRef
import SectionHeading from "@/components/SectionHeading";
import TypewriterEffect from "@/components/TypewriterEffect";
import { faqData } from "@/data/faq";
export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [inputValue, setInputValue] = useState("");

  const [formStep, setFormStep] = useState("askName");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submittedMessage, setSubmittedMessage] = useState("");
  const [formStatus, setFormStatus] = useState("idle");
  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const Prompt = () => (
    <span className="faq-prompt mr-2">user@robofiesta:~$</span>
  );
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    if (formStep === "askName") {
      setName(inputValue);
      setFormStep("askEmail");
      setInputValue("");
      return;
    }
    if (formStep === "askEmail") {
      setEmail(inputValue);
      setFormStep("askMessage");
      setInputValue("");
      return;
    }
    if (formStep === "askMessage") {
      setFormStatus("submitting");
      setSubmittedMessage(inputValue);
      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("message", inputValue);
      try {
        const response = await fetch("https://formspree.io/f/xrbyqwvj", {
          method: "POST",
          body: formData,
          headers: { 'Accept': 'application/json' }
        });
        if (response.ok) {
          setFormStatus("success");
          setInputValue("");
        } else {
          setFormStatus("error");
        }
      } catch (error) {
        console.error("Form submission error:", error);
        setFormStatus("error");
      }
    }
  };
  let placeholderText = "";
  let inputType = "text";
  if (formStep === 'askName') {
    placeholderText = "Enter your name...";
    inputType = "text";
  } else if (formStep === 'askEmail') {
    placeholderText = "Enter your email...";
    inputType = "email";
  } else {
    placeholderText = "Enter your message...";
    inputType = "text";
  }
  return (
    <section id="faq" className="section py-16 md:py-20">
      <SectionHeading>Frequently Asked Questions</SectionHeading>
      <div className="mx-auto max-w-4xl px-4 md:px-6">
        <div className="terminal-container mt-12">
          <div className="terminal-body p-4 md:p-6">
            {/* Renders the predefined FAQ list */}
            {faqData.map((item, index) => (
              <div key={index} className="faq-item mb-2">
                <button
                  onClick={() => handleToggle(index)}
                  className={`faq-question ${activeIndex === index ? 'active' : ''}`}
                  role="button"
                  aria-expanded={activeIndex === index}
                >
                  <Prompt />
                  <span className="faq-question-text">{item.question}</span>
                </button>
                {activeIndex === index && (
                  <div className="faq-answer">
                    <TypewriterEffect texts={[item.answer]} speed={20} cursor={false} />
                  </div>
                )}
              </div>
            ))}
            {formStatus === 'idle' && !name && (
              <div className="faq-answer text-gray-400 mt-4">
                <p>To send us a message, please enter your name, email, and then your message as prompted below.</p>
              </div>
            )}
            <div className="mt-4">
              {name && <div><Prompt /><span>{name}</span></div>}
              {email && <div className="mt-2"><Prompt /><span>{email}</span></div>}
              {submittedMessage && <div className="mt-2"><Prompt /><span>{submittedMessage}</span></div>}
            </div>
            <div className="mt-2">
              {formStatus === "submitting" && <div className="faq-answer text-yellow-400"><p>Submitting...</p></div>}
              {formStatus === "success" && <div className="faq-answer text-green-400"><p>Thanks for your message! We've received it and will get back to you shortly.</p></div>}
              {formStatus === "error" && <div className="faq-answer text-red-400"><p>Sorry, an error occurred. Please try again.</p></div>}
            </div>
            {formStatus !== "success" && (
               <form onSubmit={handleFormSubmit} className="prompt-line flex items-center mt-2">
                <Prompt />
                <input
                  type={inputType}
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  className="terminal-input flex-grow bg-transparent border-none outline-none text-white p-0"
                  placeholder={placeholderText}
                  disabled={formStatus === "submitting"}
                />
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}