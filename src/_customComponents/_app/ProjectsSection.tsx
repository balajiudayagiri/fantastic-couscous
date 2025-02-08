import { Card, CardHeader, CardContent } from "@components/card";
import { TracingBeam } from "@components/tracing-beam";

export function ProjectsSection() {
  const projects = [
    {
      title: "Project 1",
      description: "Description here",
      tech: ["Next.js", "TypeScript", "Tailwind"],
      link: "#",
    },
    // Add more projects
  ];

  return (
    <TracingBeam className="min-h-screen p-6 md:p-12">
      <h2 className="text-3xl font-bold mb-12">Featured Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <Card key={project.title}>
            <CardHeader>
              <h3 className="text-xl font-semibold">{project.title}</h3>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{project.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </TracingBeam>
  );
}
