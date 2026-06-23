"use client";

import type { Project } from '@/lib/github';

export default function ProjectsGrid({ projects }: { projects: Project[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {projects.map((project, index) => (
        <div key={index} className="group cursor-pointer">
          <div className="aspect-[4/3] bg-[var(--border-color)] mb-6 overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover group-hover:opacity-90 transition-opacity duration-200"
              onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
            />
          </div>

          <h3 className="text-xl font-bold mb-3 text-[var(--text-primary)]">
            {project.title}
          </h3>

          <p className="text-sm leading-relaxed mb-4 text-[var(--text-primary)] opacity-80">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((tech, techIndex) => (
              <span
                key={techIndex}
                className="text-xs px-2 py-1 bg-[var(--border-color)] text-[var(--text-primary)] tracking-wide"
              >
                {tech}
              </span>
            ))}
          </div>

          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-sm font-medium uppercase tracking-wide text-[var(--text-primary)] hover:underline transition-all duration-200"
            >
              View on GitHub →
            </a>
          ) : project.private ? (
            <span className="inline-block text-sm font-medium uppercase tracking-wide text-[var(--text-primary)] opacity-60 italic">
              Private Repository
            </span>
          ) : null}
        </div>
      ))}
    </div>
  );
}
