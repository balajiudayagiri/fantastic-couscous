"use client";

import { motion } from "framer-motion";
import { Card } from "@b/components/ui/card";
import {
  Briefcase,
  Building,
  CalendarDays,
  CheckCircle2,
  Code2,
  Gift,
  GraduationCap,
  Trophy,
} from "lucide-react";
import { createSlug } from "@b/utilities/createSlug";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

const experiences = [
  {
    title: "Front End Lead Engineer",
    company: "PureCode AI",
    period: "October 2024 - Present",
    location: "Hyderabad, India",
    responsibilities: [
      "Lead development of AI-powered platform A simple Prompt  to production code",
      "Guide team in React.js, Next.js, TypeScript, and Tailwind CSS implementation",
      "Drive technical architecture and best practices",
      "Mentor team members and foster collaborative environment",
    ],
    achievements: [
      "Reduced development time by 40% through AI integration",
      "Improved team productivity by implementing modern development workflows",
      "Successfully delivered 5 major product releases",
    ],
    technologies: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "AI/ML Integration",
      "Git",
      "CI/CD",
    ],
    projects: [
      {
        name: "AI Design Converter",
        description:
          "Led the development of core platform features for A simple Prompt  to production-ready code",
      },
      {
        name: "Component Library",
        description:
          "Architected and implemented a comprehensive component library used across multiple projects",
      },
    ],
    gradient: "from-[#FF6B6B] to-[#4ECDC4]",
  },
  {
    title: "Software Engineer",
    company: "PureCode AI",
    period: "April 2023 - October 2024",
    location: "Hyderabad, India",
    responsibilities: [
      "Developed core features of web application platform",
      "Implemented modern front-end technologies",
      "Collaborated on AI integration features",
    ],
    achievements: [
      "Implemented key features that increased user engagement by 35%",
      "Reduced application load time by 50%",
      "Built reusable component library used across multiple projects",
    ],
    technologies: [
      "React.js",
      "JavaScript",
      "CSS3",
      "HTML5",
      "Git",
      "REST APIs",
      "Redux",
      "Jest",
    ],
    projects: [
      {
        name: "Web Application Platform",
        description:
          "Developed and maintained core features of the main web application",
      },
      {
        name: "Frontend Architecture",
        description:
          "Contributed to the development of frontend architecture and coding standards",
      },
    ],
    gradient: "from-[#A8E6CF] to-[#3D84A8]",
  },
  {
    title: "Associate Application Developer",
    company: "Armorize Technology Solutions",
    period: "November 2020 - April 2023",
    location: "Hyderabad, India",
    responsibilities: [
      "Built responsive web applications",
      "Worked with Java and modern CSS technologies",
      "Contributed to application architecture and development",
    ],
    achievements: [
      "Developed 3 major client projects from scratch",
      "Improved application performance by 30%",
      "Received recognition for best coding practices",
    ],
    technologies: [
      "Java",
      "Spring Boot",
      "HTML5",
      "CSS3",
      "JavaScript",
      "MySQL",
      "Git",
      "Jenkins",
    ],
    projects: [
      {
        name: "Enterprise Web Portal",
        description:
          "Developed a responsive web portal for enterprise clients using Java and modern web technologies",
      },
      {
        name: "Performance Optimization",
        description:
          "Led initiative to improve application performance and user experience",
      },
    ],
    gradient: "from-[#FFD93D] to-[#FF6B6B]",
  },
];

export function DetailedExperienceCard() {
  const searchParams = useSearchParams();
  const sectionId = searchParams.get("section");

  useEffect(() => {
    if (sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [sectionId]);
  return (
    <>
      {experiences.map((exp, index) => (
        <motion.div
          id={createSlug(exp.title)}
          key={exp.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.2 }}>
          <Card className="p-8 space-y-8 relative overflow-hidden border border-primary/10 bg-background/60 backdrop-blur-sm">
            <div
              className={`absolute inset-0 bg-gradient-to-r ${exp.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
            />

            {/* Header Section */}
            <div className="space-y-6 relative z-10">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                    {exp.title}
                  </h2>
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Building className="w-5 h-5" />
                      <span className="text-lg">{exp.company}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <CalendarDays className="w-5 h-5" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Technologies */}
              <div className="space-y-3">
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  <Code2 className="w-5 h-5 text-primary" />
                  Technologies & Skills
                </h3>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-primary/10 px-3 py-1 text-primary text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Responsibilities */}
              <div className="space-y-3">
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-primary" />
                  Key Responsibilities
                </h3>
                <ul className="grid gap-3">
                  {exp.responsibilities.map((resp, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + idx * 0.1 }}
                      className="flex items-start gap-3 text-muted-foreground">
                      <CheckCircle2 className="w-5 h-5 text-primary/60 shrink-0 mt-1" />
                      <span>{resp}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Achievements */}
              <div className="space-y-3">
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-primary" />
                  Key Achievements
                </h3>
                <ul className="grid gap-3">
                  {exp.achievements.map((achievement, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + idx * 0.1 }}
                      className="flex items-start gap-3 text-muted-foreground">
                      <Gift className="w-5 h-5 text-primary/60 shrink-0 mt-1" />
                      <span>{achievement}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Projects */}
              <div className="space-y-3">
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-primary" />
                  Notable Projects
                </h3>
                <div className="grid gap-4">
                  {exp.projects.map((project, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + idx * 0.1 }}
                      className="space-y-1">
                      <h4 className="font-medium text-primary">
                        {project.name}
                      </h4>
                      <p className="text-muted-foreground">
                        {project.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      ))}
    </>
  );
}
