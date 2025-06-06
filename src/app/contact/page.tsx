"use client";

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-6 py-24">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-16 tracking-tight uppercase">
          CONTACT
        </h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <h2 className="text-xl font-bold mb-8 text-[var(--text-primary)]">Send me a message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-0 py-3 text-base bg-transparent border-0 border-b border-[var(--border-color)] text-[var(--text-primary)] placeholder:text-[var(--text-primary)] placeholder:opacity-60 focus:outline-none focus:border-[var(--text-primary)] transition-colors duration-200"
                />
              </div>
              
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-0 py-3 text-base bg-transparent border-0 border-b border-[var(--border-color)] text-[var(--text-primary)] placeholder:text-[var(--text-primary)] placeholder:opacity-60 focus:outline-none focus:border-[var(--text-primary)] transition-colors duration-200"
                />
              </div>
              
              <div>
                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full px-0 py-3 text-base bg-transparent border-0 border-b border-[var(--border-color)] text-[var(--text-primary)] placeholder:text-[var(--text-primary)] placeholder:opacity-60 focus:outline-none focus:border-[var(--text-primary)] transition-colors duration-200 resize-none"
                />
              </div>
              
              <button
                type="submit"
                className="mt-8 bg-transparent border border-[var(--text-primary)] text-[var(--text-primary)] px-8 py-3 text-sm font-medium uppercase tracking-wide hover:bg-[var(--text-primary)] hover:text-[var(--bg-primary)] transition-all duration-200"
              >
                Send Message
              </button>
            </form>
          </div>
          
          {/* Contact Links */}
          <div>
            <h2 className="text-xl font-bold mb-8 text-[var(--text-primary)]">Get in touch</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-medium uppercase tracking-wide text-[var(--text-primary)] opacity-60 mb-2">Email</h3>
                <a 
                  href="mailto:aviswa259@gmail.com"
                  className="text-base text-[var(--text-primary)] hover:underline transition-all duration-200"
                >
                  aviswa259@gmail.com
                </a>
              </div>
              
              <div>
                <h3 className="text-sm font-medium uppercase tracking-wide text-[var(--text-primary)] opacity-60 mb-2">GitHub</h3>
                <a 
                  href="https://github.com/akash-v888"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base text-[var(--text-primary)] hover:underline transition-all duration-200"
                >
                  github.com/akash-v888
                </a>
              </div>
              
              <div>
                <h3 className="text-sm font-medium uppercase tracking-wide text-[var(--text-primary)] opacity-60 mb-2">LinkedIn</h3>
                <a 
                  href="https://www.linkedin.com/in/akash-viswanathan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base text-[var(--text-primary)] hover:underline transition-all duration-200"
                >
                  linkedin.com/in/akash-viswanathan
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}