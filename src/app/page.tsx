import { AboutSection } from "@b/_customComponents/_app/AboutSection";
import { ExperienceSection } from "@b/_customComponents/_app/ExperienceSection";
import PerformanceScore from "@b/_customComponents/_app/PerformanceScore";
import { ProjectsSection } from "@b/_customComponents/_app/ProjectsSection";
import { HeroContent } from "@commonComponents";

export default function Page() {
  return (
    <main className="relative">
      <HeroContent />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <PerformanceScore />
    </main>
  );
}
