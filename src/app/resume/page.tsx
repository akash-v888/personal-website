'use client';

import AnimatedPage from "@/components/AnimatedPage";

export default function Resume() {
  return (
    <AnimatedPage>
      <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-24">
          <div className="flex items-center justify-between mb-12">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight uppercase">
              RESUME
            </h1>
            <a
              href="/resume.pdf"
              download
              className="inline-block bg-transparent border border-[var(--text-primary)] text-[var(--text-primary)] px-6 py-2 text-sm font-medium uppercase tracking-wide rounded-md hover:bg-[var(--text-primary)] hover:text-[var(--bg-primary)] transition-all duration-200 whitespace-nowrap"
            >
              Download PDF
            </a>
          </div>

          {/* Desktop: inline embed */}
          <div
            className="hidden md:block w-full rounded-lg overflow-hidden border border-[var(--border-color)]"
            style={{ height: "85vh" }}
          >
            <iframe
              src="/resume.pdf"
              className="w-full h-full"
              title="Akash Viswanathan Resume"
            />
          </div>

          {/* Mobile: direct link fallback */}
          <div className="md:hidden flex flex-col items-center justify-center py-16 space-y-4 border border-[var(--border-color)] rounded-lg">
            <p className="text-sm text-[var(--text-primary)] opacity-60 uppercase tracking-wide">
              PDF preview not available on mobile
            </p>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border border-[var(--text-primary)] text-[var(--text-primary)] px-6 py-2 text-sm font-medium uppercase tracking-wide rounded-md hover:bg-[var(--text-primary)] hover:text-[var(--bg-primary)] transition-all duration-200"
            >
              Open PDF
            </a>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
}
