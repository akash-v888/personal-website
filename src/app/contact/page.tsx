"use client";

import { useState } from "react";
import AnimatedPage from "@/components/AnimatedPage";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("https://formspree.io/f/xpwrqgge", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        console.error("Form submission failed.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <AnimatedPage>
      <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-6 py-24">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-16 tracking-tight uppercase">
            CONTACT
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left Column: Contact Form */}
            <div>
              <h2 className="text-xl font-bold mb-8 text-[var(--text-primary)]">
                {isSubmitted ? "Message sent!" : "Send me a message"}
              </h2>

              {isSubmitted ? (
                <div className="space-y-6">
                  <p className="text-base text-[var(--text-primary)] opacity-80">
                    Thanks for reaching out! I’ll get back to you soon.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-4 bg-transparent border border-[var(--text-primary)] text-[var(--text-primary)] px-6 py-2 text-sm font-medium uppercase tracking-wide rounded hover:bg-[var(--text-primary)] hover:text-[var(--bg-primary)] transition-all duration-200"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-0 py-3 text-base bg-transparent border-0 border-b border-[var(--border-color)] text-[var(--text-primary)] placeholder:text-[var(--text-primary)] placeholder:opacity-60 focus:outline-none focus:border-[var(--text-primary)] transition-colors duration-200"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-0 py-3 text-base bg-transparent border-0 border-b border-[var(--border-color)] text-[var(--text-primary)] placeholder:text-[var(--text-primary)] placeholder:opacity-60 focus:outline-none focus:border-[var(--text-primary)] transition-colors duration-200"
                  />
                  <textarea
                    name="message"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-0 py-3 text-base bg-transparent border-0 border-b border-[var(--border-color)] text-[var(--text-primary)] placeholder:text-[var(--text-primary)] placeholder:opacity-60 focus:outline-none focus:border-[var(--text-primary)] transition-colors duration-200 resize-none"
                  />
                  <button
                    type="submit"
                    className="mt-8 bg-transparent border border-[var(--text-primary)] text-[var(--text-primary)] px-8 py-3 text-sm font-medium uppercase tracking-wide hover:bg-[var(--text-primary)] hover:text-[var(--bg-primary)] transition-all duration-200"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Right Column: Contact Links */}
            <div>
              <h2 className="text-xl font-bold mb-8 text-[var(--text-primary)]">
                Get in touch
              </h2>
              <div className="space-y-6">
                <ContactDetail label="Email" value="aviswa259@gmail.com" link="mailto:aviswa259@gmail.com" />
                <ContactDetail label="GitHub" value="github.com/akash-v888" link="https://github.com/akash-v888" />
                <ContactDetail label="LinkedIn" value="linkedin.com/in/akash-viswanathan" link="https://www.linkedin.com/in/akash-viswanathan/" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
}

function ContactDetail({ label, value, link }: { label: string; value: string; link: string }) {
  return (
    <div>
      <h3 className="text-sm font-medium uppercase tracking-wide text-[var(--text-primary)] opacity-60 mb-2">
        {label}
      </h3>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-base text-[var(--text-primary)] hover:underline transition-all duration-200"
      >
        {value}
      </a>
    </div>
  );
}
