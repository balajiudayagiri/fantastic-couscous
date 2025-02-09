"use client";

import { Card, CardHeader, CardContent } from "@components/card";
import { motion } from "framer-motion";
import { TextGenerateEffect } from "@components/text-generate-effect";
import { Briefcase, Building, CalendarDays } from "lucide-react";

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
      gradient: "from-[#FF6B6B] to-[#4ECDC4]",
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
      gradient: "from-[#A8E6CF] to-[#3D84A8]",
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
      gradient: "from-[#FFD93D] to-[#FF6B6B]",
    },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center p-6 md:p-12">
      <div className="max-w-7xl w-full space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] bg-clip-text text-transparent">
            Professional Journey
          </h1>
          <p className="text-lg text-muted-foreground">
            Building innovative solutions and leading development teams
          </p>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}>
              <Card className="group relative overflow-hidden border border-primary/10 bg-background/60 backdrop-blur-sm">
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${exp.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                />

                <CardHeader className="relative z-10">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="space-y-1">
                      <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                        {exp.title}
                      </h3>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Building className="w-4 h-4" />
                        <span>{exp.company}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CalendarDays className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="relative z-10">
                  <ul className="space-y-3">
                    {exp.responsibilities.map((resp, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + idx * 0.1 }}
                        className="flex items-start gap-3 text-muted-foreground">
                        <span className="mt-1.5">
                          <Briefcase className="w-4 h-4 text-primary/60" />
                        </span>
                        <span>{resp}</span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
