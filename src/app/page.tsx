"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { BottomNavigation } from "@/components/BottomNavigation";
import AnimatedPage from "@/components/AnimatedPage";


export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [fadeClass, setFadeClass] = useState("opacity-100");

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
        setFadeClass("opacity-0");
        setTimeout(() => {
          setCurrentImageIndex((prev) => (prev + 1) % images.length);
          setFadeClass("opacity-100");
        }, 500);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isPaused, images.length]);

  useEffect(() => {
    document.body.classList.add("no-scroll");
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, []);

  const currentImage = images[currentImageIndex];

  return (
    <AnimatedPage>
      <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300">
        {/* Giant Name Banner */}
        <div className="pt-12 pb-8">
          <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black leading-none tracking-tight uppercase text-center px-4">
            AKASH VISWANATHAN
          </h1>
        </div>

        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Carousel */}
          <div 
            className="relative aspect-[3/2] bg-[var(--border-color)] overflow-hidden cursor-pointer"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <img
              src={currentImage.src}
              alt={currentImage.alt}
              className="w-full h-full object-cover transition-opacity duration-500"
              style={{ opacity: fadeClass }}
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
              <span className="text-white text-lg font-medium tracking-wide uppercase">
                {currentImage.label}
              </span>
            </div>
          </div>

          {/* Copy Column */}
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-[var(--text-primary)] max-w-md">
              I'm a CS & Economics student at Northeastern focusing on backend engineering, cloud automation, and DevOps. I love crafting scalable, reliable systems with clean code and thoughtful infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-center">
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
        </div>

        {/* Fixed Bottom Navigation */}
        <BottomNavigation />

        {/* This div is only for gradient background, remove if not needed */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-[var(--accent-primary)] opacity-10 rounded-full filter blur-3xl animate-blob -translate-x-1/2 translate-y-1/2"></div>
          <div className="absolute top-0 right-0 w-1/4 h-1/4 bg-[var(--accent-secondary)] opacity-10 rounded-full filter blur-3xl animate-blob animation-delay-2000 translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-1/4 right-1/4 w-1/5 h-1/5 bg-[var(--accent-tertiary)] opacity-10 rounded-full filter blur-3xl animate-blob animation-delay-4000 translate-x-1/4 translate-y-1/4"></div>
        </div>
      </div>
    </AnimatedPage>
  );
}