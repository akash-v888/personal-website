"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import AnimatedPage from "@/components/AnimatedPage";
import { motion } from "framer-motion";

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [fade, setFade] = useState(true);

  const images = [
    {
      src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/da2add90-c7f3-4367-9e47-c5d3bb31b60e/generated_images/abstract-geometric-composition-with-clea-e89c4615-20250606202245.jpg",
      alt: "Abstract composition",
      label: "Composition"
    },
    {
      src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/da2add90-c7f3-4367-9e47-c5d3bb31b60e/generated_images/artistic-photograph-of-modern-cloud-data-7b5d0aab-20250606200954.jpg",
      alt: "Infrastructure theme",
      label: "Infrastructure"
    }
  ];

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setFade(false);
        setTimeout(() => {
          setCurrentImageIndex((prev) => (prev + 1) % images.length);
          setFade(true);
        }, 500);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isPaused, images.length]);

  const currentImage = images[currentImageIndex];

  return (
    <AnimatedPage>
      <div className="min-h-[100svh] w-full bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300 relative overflow-hidden">
        {/* Name Banner */}
        <header className="pt-12 pb-8 text-center px-4 z-10 relative">
          <motion.h1
            className="text-[10vw] sm:text-[8vw] md:text-[6vw] lg:text-[5vw] font-black leading-none tracking-tight uppercase text-center"
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.3 } },
            }}
          >
            <motion.span
              className="block"
              variants={{
                hidden: { opacity: 0, y: -40 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
              }}
            >
              AKASH
            </motion.span>

            <motion.span
              className="block"
              variants={{
                hidden: { opacity: 0, y: -40 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
              }}
            >
              VISWANATHAN
            </motion.span>
          </motion.h1>
        </header>

        {/* Hero Section */}
        <section className="z-10 relative max-w-7xl w-full mx-auto px-4 sm:px-6 md:px-8 py-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Carousel */}
          <div
            className="relative aspect-[3/2] bg-[var(--border-color)] overflow-hidden rounded-md"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <img
              src={currentImage.src}
              alt={currentImage.alt}
              className={`w-full h-full object-cover transition-opacity duration-500 ${fade ? "opacity-100" : "opacity-0"}`}
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
              <span className="text-white text-lg font-medium tracking-wide uppercase">
                {currentImage.label}
              </span>
            </div>
          </div>

          {/* Text + Links */}
          <div className="space-y-6 text-center lg:text-left">
            <p className="text-lg leading-relaxed text-[var(--text-primary)] max-w-md mx-auto lg:mx-0">
              I’m a CS & Econ student at Northeastern building scalable backend systems, automating infrastructure, and exploring the potential of AI in software engineering.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
              <Link
                href="/projects"
                className="inline-block bg-transparent border border-[var(--text-primary)] text-[var(--text-primary)] px-6 py-2 text-sm font-medium uppercase tracking-wide rounded-md hover:bg-[var(--text-primary)] hover:text-[var(--bg-primary)] transition-all duration-200"
              >
                View my projects
              </Link>
              <Link
                href="/about"
                className="text-[var(--text-primary)] text-sm font-medium uppercase tracking-wide hover:underline transition-all duration-200"
              >
                Quick bio
              </Link>
            </div>
          </div>
        </section>

        {/* Animated Background Blobs */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-[var(--accent-primary)] opacity-10 rounded-full blur-3xl animate-blob -translate-x-1/2 translate-y-1/2" />
          <div className="absolute top-0 right-0 w-1/4 h-1/4 bg-[var(--accent-secondary)] opacity-10 rounded-full blur-3xl animate-blob animation-delay-2000 translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-1/4 right-1/4 w-1/5 h-1/5 bg-[var(--accent-tertiary)] opacity-10 rounded-full blur-3xl animate-blob animation-delay-4000 translate-x-1/4 translate-y-1/4" />
        </div>
      </div>
    </AnimatedPage>
  );
}
