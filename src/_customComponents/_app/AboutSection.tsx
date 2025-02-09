"use client";
import { GrainyGradient } from "@b/components/GrainyGradient";
import { TextGenerateEffect } from "@components/text-generate-effect";
import { motion } from "framer-motion";

export function AboutSection() {
  const skills = [
    { name: "React.js", level: "Expert", years: 4 },
    { name: "Next.js", level: "Expert", years: 3 },
    { name: "TypeScript", level: "Advanced", years: 4 },
    { name: "Tailwind CSS", level: "Expert", years: 3 },
    { name: "Redux", level: "Advanced", years: 3 },
    { name: "Design Systems", level: "Expert", years: 2 },
    { name: "AI Integration", level: "Advanced", years: 2 },
    { name: "Team Leadership", level: "Expert", years: 2 },
  ];

  function calculateExperience(startDate: Date): string {
    const start = new Date(startDate);
    const now = new Date();

    const diffInYears =
      (now.getTime() - start.getTime()) / (1000 * 60 * 60 * 24 * 365.25);
    const years = Math.floor(diffInYears);
    const months = Math.floor((diffInYears - years) * 12);

    // Add .5 to years if months are 6 or more
    return months >= 6 ? `${years}.5+` : `${years}+`;
  }

  // Set your start date
  const startDate = new Date("2020-11-01");

  const stats = [
    { label: "Years Experience", value: calculateExperience(startDate) },
    { label: "Products Enhanced", value: "10+" },
    { label: "Team Members Led", value: "8" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center p-6 md:p-12 overflow-hidden">
      <GrainyGradient />

      <motion.div
        className="relative z-10 max-w-4xl bg-black/40 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-primary/10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}>
        <div className="space-y-12">
          <div>
            <TextGenerateEffect
              words="Crafting Digital Excellence"
              className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent"
            />
            <p className="text-xl md:text-2xl text-muted-foreground/80 font-light">
              Front-End Lead Engineer transforming visions into exceptional
              experiences
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                className="text-center p-4 rounded-xl bg-primary/5 border border-primary/10"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}>
                <div className="text-2xl md:text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6">Technical Expertise</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}>
                  <span
                    className="px-4 py-2 text-sm font-medium border-primary/20 hover:border-primary/40
                    bg-gradient-to-r from-primary/10 to-transparent backdrop-blur-sm">
                    <span className="mr-2">{skill.name}</span>
                    <span className="text-xs text-primary/60">
                      {skill.level}
                    </span>
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-muted-foreground/80 leading-relaxed">
              Passionate Front-End Lead Engineer specializing in crafting
              exceptional web experiences. My expertise lies in architecting
              scalable frontend systems, implementing AI-powered solutions, and
              building robust design systems that elevate user interactions.
            </p>
            <p className="text-muted-foreground/60 leading-relaxed">
              Focused on modern frontend architecture, performance optimization,
              and leading teams to deliver high-impact solutions using
              cutting-edge technologies.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
