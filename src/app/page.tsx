import { AboutSection } from "@b/_customComponents/_app/AboutSection";
import { ExperianceTimeline } from "@b/_customComponents/_app/ExperianceTimeline";
import PerformanceScore from "@b/_customComponents/_app/PerformanceScore";
import { ProjectsSection } from "@b/_customComponents/_app/ProjectsSection";
import { HeroContent } from "@commonComponents";
import { Quote } from "lucide-react";

export default function Page() {
  return (
    <main className="relative">
      <HeroContent />
      <h3
        lang="en"
        aria-label="Specialization in AI-driven UI systems and web performance optimization"
        role="heading"
        aria-level={3}
        className="text-xl md:text-2xl lg:text-3xl font-medium text-gray-400 my-4 mx-auto max-w-3xl text-center px-4 md:px-6 lg:px-8">
        {/* <Quote className="inline" /> */}
        &ldquo;I specialize in building AI-driven UI systems, optimizing web
        performance, and crafting scalable design systems. With deep expertise
        in Next.js, React, and Tailwind, I create high-performance, accessible
        web experiences.&rdquo;
      </h3>
      <AboutSection />
      <ExperianceTimeline />
      <ProjectsSection />
      <PerformanceScore />
    </main>
  );
}
