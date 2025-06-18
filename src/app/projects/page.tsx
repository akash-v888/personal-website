"use client";

import { useState } from 'react';
import AnimatedPage from "@/components/AnimatedPage";

const projects = [
  {
    title: "Sentiment Analysis Dashboard",
    description: "A comprehensive dashboard that analyzes sentiment from multiple data sources using machine learning and natural language processing.",
    tech: ["Python", "Playwright", "GPT API", "React", "PostgreSQL"],
    github: "https://github.com/akash-v888/sentiment-dashboard",
    image: "/api/placeholder/400/300"
  },
  {
    title: "Reversi Game Engine", 
    description: "A complete implementation of the Reversi board game with an intelligent AI opponent using minimax algorithm with alpha-beta pruning.",
    tech: ["Java", "Swing", "JUnit", "Maven"],
    github: "https://github.com/akash-v888/reversi",
    image: "/api/placeholder/400/300"
  },
  {
    title: "Course Planning Tool",
    description: "An automated course planning system that helps students optimize their academic schedule based on prerequisites and preferences.",
    tech: ["SQL", "Docker", "Appsmith", "Node.js", "REST API"],
    private: true,
    image: "/api/placeholder/400/300"
  },
  {
    title: "InfraPulse",
    description: "A cloud-based monitoring system that tracks the uptime and response time of web services, logs the data to SQLite, and visualizes it in Grafana with real-time dashboards and email alerts.",
    tech: ["Python", "AWS", "Docker", "SQLite", "Grafana", "Terraform"],
    github: "https://github.com/akash-v888/infrapulse",
    image: "/api/placeholder/400/300"
  },
  {
    title: "Instagram Non-Mutual Follower/Following",
    description: "A browser script that helps users identify Instagram accounts they follow who don’t follow them back. Requires manual execution via browser DevTools. **Not officially supported by Instagram — use responsibly.**",
    tech: ["JavaScript", "DevTools", "DOM Parsing"],
    github: "https://github.com/akash-v888/InstagramFollowersFollowing",
    image: "/api/placeholder/400/300"
  },
  {
    title: "Sorting Algorithm Visualizer",
    description: "An interactive desktop app that visually demonstrates popular sorting algorithms including Bubble Sort, Insertion Sort, Selection Sort, Merge Sort, and Quick Sort. Users can customize the number of elements, choose the initial array order (random, sorted, or reversed), and control the animation speed. Built with Python and Tkinter, it’s an educational tool for understanding sorting behavior through real-time visualization.",
    tech: ["Python", "Tkinter"],
    github: "https://github.com/akash-v888/algo_visualizer",
    image: "/api/placeholder/400/300"
  },
];

export default function Projects() {
  return (
    <AnimatedPage>
      <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-16 tracking-tight uppercase">
            PROJECTS
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="aspect-[4/3] bg-[var(--border-color)] mb-6 overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:opacity-90 transition-opacity duration-200"
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
        </div>
      </div>
    </AnimatedPage>
  );
}
