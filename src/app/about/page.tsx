import Image from "next/image";
import Link from "next/link";
import { BottomNavigation } from "@/components/BottomNavigation";

export default function About() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Text */}
          <div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-12 tracking-tight uppercase">
              ABOUT
            </h1>
            
            <div className="space-y-6 text-base leading-relaxed max-w-lg">
              <p>
                I'm a Computer Science and Economics student at Northeastern University with a passion for backend engineering, cloud automation, and infrastructure as code.
              </p>
              
              <p>
                Currently working as a DevOps Engineer Co-op at State Street/Charles River Development, where I focus on building scalable, reliable systems and automating cloud infrastructure. I enjoy working with technologies like Azure, Docker, Python, and Terraform to create efficient, maintainable solutions.
              </p>
              
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing to open source projects, or diving deep into the intersection of computer science and economics. I'm particularly interested in how technology can solve complex business problems and drive innovation.
              </p>
              
              <p>
                I believe in writing clean, thoughtful code and building systems that not only work today but can scale and evolve with changing requirements. My goal is to contribute to meaningful projects that make a positive impact.
              </p>
            </div>
          </div>
          
          {/* Right Column - Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-80 h-80 lg:w-96 lg:h-96">
              <img 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/da2add90-c7f3-4367-9e47-c5d3bb31b60e/generated_images/abstract-geometric-composition-with-soft-d3748506-20250606202921.jpg"
                alt="Temporary profile placeholder"
                className="w-full h-full object-cover bg-[var(--border-color)]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}