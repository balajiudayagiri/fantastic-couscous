"use client";

import { Card, CardHeader, CardContent, CardFooter } from "@components/card";
import { motion } from "framer-motion";
import { TextGenerateEffect } from "@components/text-generate-effect";

import Link from "next/link";
import { BookOpen, Brain, Code, ExternalLink, Newspaper } from "lucide-react";
import { projects } from "./HomePageConstants";

export function ProjectsSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center p-6 md:p-12">
      <div className="max-w-7xl w-full space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#FFD93D] to-[#FF6B6B]  bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground">
            Showcasing innovative solutions and technical expertise
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}>
              <Card className="group relative overflow-hidden border border-primary/10 bg-background/60 backdrop-blur-sm h-full">
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                />

                <CardHeader className="relative z-10">
                  <div className="flex items-center gap-3 mb-3">
                    <project.icon className="w-6 h-6 text-primary/80" />
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground">{project.description}</p>
                </CardHeader>

                <CardContent className="relative z-10">
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs rounded-full
                        bg-primary/5 border border-primary/10
                        text-primary/80">
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="relative z-10">
                  <a
                    href={project.link}
                    target="_blank"
                    className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors">
                    <ExternalLink className="w-4 h-4" />
                    <span>View Project</span>
                  </a>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
