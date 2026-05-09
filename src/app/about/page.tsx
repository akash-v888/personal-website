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
                  I recently graduated Cum Laude from Northeastern University with a B.S. in Computer Science and Economics. I’m actively seeking Software Engineering and DevOps roles where I can build reliable, scalable systems and help teams ship faster.
                </p>

                <p>
                  Most recently, I worked at Stellar Science as a Software Engineering Co-op, contributing to surrogate modeling initiatives and helping design an internal LLM. I also collaborated across teams to optimize and enhance physics modeling simulation applications, primarily using C++ and Python.
                </p>

                <p>
                  Prior to that, I completed a DevOps Engineering Co-op at State Street, where I automated cloud infrastructure and helped scale internal systems using Azure, Docker, and Python. That experience gave me a deep appreciation for building infrastructure that is not just functional, but maintainable and easy to operate at scale.
                </p>

                <p>
                  I’m genuinely excited about the role AI is playing in modern software engineering — from intelligent developer tooling to AI-assisted infrastructure and operations. I’m interested in working at the intersection of these capabilities and real-world systems, building things that are not just functional today but positioned to evolve with the technology.
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

          {/* Skills Section */}
          <div className="mt-20 border-t border-[var(--border-color)] pt-16">
            <h2 className="text-xs font-medium uppercase tracking-widest text-[var(--text-primary)] opacity-50 mb-10">
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
              {[
                {
                  category: "Languages",
                  skills: ["Python", "C++", "Java", "TypeScript", "JavaScript", "SQL"],
                },
                {
                  category: "Cloud & DevOps",
                  skills: ["AWS", "Azure", "Docker", "Terraform", "CI/CD", "Linux"],
                },
                {
                  category: "Frameworks & Tools",
                  skills: ["React", "Next.js", "Node.js", "Git", "OpenCV", "MediaPipe"],
                },
              ].map(({ category, skills }) => (
                <div key={category}>
                  <p className="text-xs font-medium uppercase tracking-widest text-[var(--text-primary)] opacity-50 mb-4">
                    {category}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs px-3 py-1 border border-[var(--border-color)] text-[var(--text-primary)] tracking-wide rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
}
