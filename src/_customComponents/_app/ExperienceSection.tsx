import { Card, CardHeader, CardContent } from "@components/card";
import { TracingBeam } from "@components/tracing-beam";

export function ExperienceSection() {
  const experiences = [
    {
      title: "Front End Lead Engineer",
      company: "PureCode AI",
      period: "October 2024 - Present",
      responsibilities: [
        "Lead development of AI-powered platform converting Figma designs to production code",
        "Guide team in React.js, Next.js, TypeScript, and Tailwind CSS implementation",
        "Drive technical architecture and best practices",
        "Mentor team members and foster collaborative environment",
      ],
    },
    {
      title: "Software Engineer",
      company: "PureCode AI",
      period: "April 2023 - October 2024",
      responsibilities: [
        "Developed core features of web application platform",
        "Implemented modern front-end technologies",
        "Collaborated on AI integration features",
      ],
    },
    {
      title: "Associate Application Developer",
      company: "Armorize Technology Solutions",
      period: "November 2020 - April 2023",
      responsibilities: [
        "Built responsive web applications",
        "Worked with Java and modern CSS technologies",
        "Contributed to application architecture and development",
      ],
    },
  ];

  return (
    <TracingBeam className="min-h-screen p-6 md:p-12">
      <h2 className="text-3xl font-bold mb-12">Professional Journey</h2>
      <div className="space-y-8">
        {experiences.map((exp) => (
          <Card key={exp.title} className="hover:shadow-lg transition-all">
            <CardHeader>
              <h3 className="text-xl font-semibold">{exp.title}</h3>
              <p className="text-blue-500">{exp.company}</p>
              <p className="text-muted-foreground">{exp.period}</p>
            </CardHeader>
            <CardContent>
              <ul className="list-disc ml-4 space-y-2">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx} className="text-muted-foreground">
                    {resp}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </TracingBeam>
  );
}
