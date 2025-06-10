'use client';

import AnimatedPage from "@/components/AnimatedPage";

export default function About() {
  return (
    <AnimatedPage>
      <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Text */}
            <div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-12 tracking-tight uppercase text-center lg:text-left">
                ABOUT
              </h1>

              <div className="space-y-6 text-base leading-relaxed max-w-lg mx-auto lg:mx-0 text-center lg:text-left">
                <p>
                  I'm a Computer Science and Economics senior at Northeastern University with a focus on backend engineering, cloud automation, and infrastructure as code.
                </p>

                <p>
                  Most recently, I worked as a DevOps Engineer Co-op at State Street, where I automated cloud infrastructure and helped scale internal systems using tools like Azure, Docker, and Python. I enjoy building reliable, maintainable solutions that reduce friction and make teams more efficient.
                </p>

                <p>
                  I care about writing clean code, building thoughtfully, and creating systems that grow with the people and problems they serve. I'm always looking to contribute to meaningful projects that make a measurable impact.
                </p>

                <p>
                  I believe in writing clean, thoughtful code and building systems that not only work today but can scale and evolve with changing requirements. My goal is to contribute to meaningful projects that make a positive impact.
                </p>

                <p>
                  When I’m not deep in code, you’ll find me lifting, reading about exercise science, or getting way too strategic about games that probably weren’t meant to be taken that seriously.
                </p>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="flex justify-center">
              <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg aspect-square overflow-hidden rounded-lg">
                <img 
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/da2add90-c7f3-4367-9e47-c5d3bb31b60e/generated_images/abstract-geometric-composition-with-soft-d3748506-20250606202921.jpg"
                  alt="Profile placeholder"
                  className="w-full h-full object-cover bg-[var(--border-color)]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
}
