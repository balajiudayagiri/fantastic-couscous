import { TextGenerateEffect } from "@components/text-generate-effect";

export function AboutSection() {
  const skills = [
    "React.js",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Redux",
    "Mantine UI",
    "MUI",
    "AI Integration",
    "Team Leadership",
  ];

  return (
    <section className="min-h-screen flex items-center justify-center p-6 md:p-12">
      <div className="max-w-4xl">
        <TextGenerateEffect
          words="Passionate Front-End Lead Engineer with 4+ years of excellence in software engineering"
          className="text-2xl md:text-4xl font-bold mb-6"
        />
        <p className="text-muted-foreground mb-8">
          At PureCode, leading the transformation of web application development
          through AI-powered solutions. Focused on delivering seamless
          performance, scalability, and intuitive user experiences.
        </p>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 bg-blue-500/10 text-blue-500 rounded-full text-sm">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
