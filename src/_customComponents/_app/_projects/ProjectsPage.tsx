"use client";

import { motion } from "framer-motion";
import { Card } from "@b/components/ui/card";
import {
  ExternalLink,
  Github,
  Book,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { projects } from "./constant";
import Link from "next/link";
import { useState } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@b/components/ui/collapsible";

export default function ProjectsPage() {
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>(
    {}
  );

  const toggleSection = (projectTitle: string, section: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [`${projectTitle}-${section}`]: !prev[`${projectTitle}-${section}`],
    }));
  };

  return (
    <div className="min-h-screen w-full py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] bg-clip-text text-transparent">
            Featured Projects
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore my latest work and contributions to the development
            community.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}>
              <Card className="group p-6 space-y-6 relative overflow-hidden border border-primary/10 bg-background/60 backdrop-blur-sm hover:border-primary/30 transition-colors">
                {/* Background Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                />

                <div className="relative z-10 space-y-6">
                  {/* Header Section - Always Visible */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                    <div className="flex items-start gap-4">
                      <div
                        className={`p-3 rounded-xl bg-gradient-to-r ${project.gradient}`}>
                        <project.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="space-y-2">
                        <h2 className="text-2xl font-bold">{project.title}</h2>
                        <p className="text-muted-foreground">
                          {project.summary}
                        </p>
                      </div>
                    </div>

                    {/* External Links */}
                    <div className="flex items-center gap-4">
                      <Link
                        aria-label={`Live Demo of ${project.title}`}
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors">
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </Link>
                      {/* <Link
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors">
                        <Github className="w-4 h-4" />
                        Source
                      </Link>
                      <Link
                        href={project.documentation}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors">
                        <Book className="w-4 h-4" />
                        Docs
                      </Link> */}
                    </div>
                  </div>

                  {/* Description - Always Visible */}
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  {/* Features - Collapsible */}
                  <Collapsible
                    open={openSections[`${project.title}-features`]}
                    onOpenChange={() =>
                      toggleSection(project.title, "features")
                    }>
                    <CollapsibleTrigger className="flex items-center justify-between w-full px-4 py-2 hover:bg-primary/5 rounded-lg transition-colors">
                      <h3 className="text-lg font-semibold">Key Features</h3>
                      {openSections[`${project.title}-features`] ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </CollapsibleTrigger>
                    <CollapsibleContent className="space-y-4 animate-in slide-in-from-top-4 duration-200">
                      <div className="grid sm:grid-cols-2 gap-4 pt-4">
                        {project.detailedFeatures.map((feature) => (
                          <div
                            key={feature.title}
                            className="space-y-2 p-4 rounded-lg bg-primary/5">
                            <h4 className="font-medium">{feature.title}</h4>
                            <p className="text-sm text-muted-foreground">
                              {feature.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </CollapsibleContent>
                  </Collapsible>

                  {/* Tech Stack - Collapsible */}
                  <Collapsible
                    open={openSections[`${project.title}-tech`]}
                    onOpenChange={() => toggleSection(project.title, "tech")}>
                    <CollapsibleTrigger className="flex items-center justify-between w-full px-4 py-2 hover:bg-primary/5 rounded-lg transition-colors">
                      <h3 className="text-lg font-semibold">Tech Stack</h3>
                      {openSections[`${project.title}-tech`] ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </CollapsibleTrigger>
                    <CollapsibleContent className="space-y-4 animate-in slide-in-from-top-4 duration-200">
                      <div className="space-y-4 pt-4">
                        {Object.entries(project.techStack).map(
                          ([category, techs]) => (
                            <div key={category} className="space-y-2">
                              <h4 className="text-sm font-medium capitalize text-muted-foreground">
                                {category}
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                {Array.isArray(techs) &&
                                  techs.map((tech) => (
                                    <div
                                      key={tech}
                                      className="bg-primary/10 hover:bg-primary/20 rounded-full px-3 py-1 text-primary text-sm">
                                      {tech}
                                    </div>
                                  ))}
                              </div>
                            </div>
                          )
                        )}
                      </div>
                    </CollapsibleContent>
                  </Collapsible>

                  {/* Metrics - Collapsible */}
                  {/* <Collapsible
                    open={openSections[`${project.title}-metrics`]}
                    onOpenChange={() =>
                      toggleSection(project.title, "metrics")
                    }>
                    <CollapsibleTrigger className="flex items-center justify-between w-full px-4 py-2 hover:bg-primary/5 rounded-lg transition-colors">
                      <h3 className="text-lg font-semibold">
                        Performance Metrics
                      </h3>
                      {openSections[`${project.title}-metrics`] ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </CollapsibleTrigger>
                    <CollapsibleContent className="space-y-4 animate-in slide-in-from-top-4 duration-200">
                      <div className="flex flex-wrap gap-3 pt-4">
                        {Object.entries(project.metrics).map(
                          ([metric, value]) => (
                            <div
                              key={metric}
                              className="flex items-center gap-2 bg-primary/5 rounded-lg px-4 py-2">
                              <span className="text-sm font-medium capitalize">
                                {metric}:
                              </span>
                              <span className="text-sm text-primary">
                                {value}
                              </span>
                            </div>
                          )
                        )}
                      </div>
                    </CollapsibleContent>
                  </Collapsible> */}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
