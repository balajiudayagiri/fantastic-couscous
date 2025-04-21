"use client";

import { useState } from "react";
import { projects } from "./constant";
import { ProjectCard } from "./ProjectCard";

export default function ProjectsPage() {
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>(
    {}
  );

  const toggleSection = (projectTitle: string, section: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [`${projectTitle}-${section}`]: !prev[`${projectTitle}-${section}`],
    }));
  };

  return (
    <div className="min-h-screen w-full py-0 px-4 sm:px-6 lg:px-8">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-48 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute top-3/4 -left-48 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto space-y-16">
        <div className="grid grid-cols-1 gap-12">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              openSections={openSections}
              toggleSection={toggleSection}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
