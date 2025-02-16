"use client";

import { useState } from "react";
import { Card, CardHeader, CardContent, CardFooter } from "@components/card";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { projects } from "./HomePageConstants";

export function ProjectsSection() {
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  const toggleExpand = (title: string) => {
    setExpandedProject(expandedProject === title ? null : title);
  };

  return (
    <section className="relative flex min-h-screen items-center justify-center p-6 md:p-12">
      <div className="w-full max-w-7xl space-y-16">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center">
          <h2 className="bg-gradient-to-r from-[#FFD93D] to-[#FF6B6B] bg-clip-text text-4xl font-bold text-transparent md:text-5xl mb-6">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground">
            Showcasing innovative solutions and technical expertise
          </p>
        </motion.div>

        {/* Project Cards */}
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => {
            const isExpanded = expandedProject === project.title;

            return (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 120,
                }}
                className="cursor-pointer"
                onClick={() => toggleExpand(project.title)}>
                <Card
                  // layout
                  className={`group relative overflow-hidden border border-primary/10 bg-background/60 backdrop-blur-sm transition-all duration-500 ${
                    isExpanded ? "shadow-2xl scale-[1.02]" : "shadow-md"
                  }`}>
                  {/* Gradient Overlay */}
                  <motion.div
                    layout
                    className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-5`}
                  />

                  {/* Card Header */}
                  <CardHeader className="relative z-10">
                    <div className="mb-3 flex items-center gap-3">
                      <project.icon className="h-6 w-6 text-primary/80" />
                      <h3 className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-2xl font-bold text-transparent">
                        {project.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground">
                      {project.description}
                    </p>
                  </CardHeader>

                  {/* Expandable Content */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        layout
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{
                          type: "spring",
                          stiffness: 100,
                          damping: 15,
                        }}>
                        <CardContent className="relative z-10">
                          <div className="mt-4 flex flex-wrap gap-2">
                            {project.tech.map((tech) => (
                              <span
                                key={tech}
                                className="rounded-full border border-primary/10 bg-primary/5 px-3 py-1 text-xs text-primary/80">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </CardContent>

                        {/* Card Footer */}
                        <CardFooter className="relative z-10">
                          <a
                            href={project.link}
                            target="_blank"
                            className="flex items-center gap-2 text-sm text-primary transition-colors hover:text-primary/80">
                            <ExternalLink className="h-4 w-4" />
                            <span>View Project</span>
                          </a>
                        </CardFooter>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
