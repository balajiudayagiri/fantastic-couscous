import { AboutSection } from "@b/_customComponents/_app/AboutSection";
import { ExperienceSection } from "@b/_customComponents/_app/ExperienceSection";
import { ProjectsSection } from "@b/_customComponents/_app/ProjectsSection";
import { HeroContent } from "@commonComponents";
import { ScrollArea } from "@components/scroll-area";

export default function Page() {
  return (
    <ScrollArea className="h-screen">
      <main className="relative">
        <HeroContent />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
      </main>
    </ScrollArea>
  );
}
