import AnimatedPage from "@/components/AnimatedPage";
import ProjectsGrid from "@/components/ProjectsGrid";
import { fetchPortfolioProjects } from "@/lib/github";

export const revalidate = 3600;

export default async function Projects() {
  const projects = await fetchPortfolioProjects();

  return (
    <AnimatedPage>
      <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-16 tracking-tight uppercase">
            PROJECTS
          </h1>

          <ProjectsGrid projects={projects} />
        </div>
      </div>
    </AnimatedPage>
  );
}
