"use client";

import { motion } from "framer-motion";
import { Card } from "@b/components/ui/card";
import {
  Briefcase,
  Building,
  Calendar,
  Code2,
  Workflow,
  ExternalLink,
} from "lucide-react";
import { createSlug } from "@b/utilities/createSlug";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { experiences } from "./constant";
import { cn } from "@b/lib/utils";

const TechBadge = ({ tech }: { tech: string }) => (
  <span
    className={cn(
      "px-3 py-1 text-xs font-medium rounded-md",
      "bg-zinc-100 text-zinc-700",
      "dark:bg-zinc-800 dark:text-zinc-300",
      "transition-all duration-300 hover:scale-105"
    )}>
    {tech}
  </span>
);

export function DetailedExperienceCard() {
  const searchParams = useSearchParams();
  const sectionId = searchParams.get("section");

  useEffect(() => {
    if (sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        const yOffset = -100;
        const y =
          element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  }, [sectionId]);

  return (
    <div className="space-y-8">
      {experiences.map((exp, index) => (
        <motion.div
          id={createSlug(exp.title)}
          key={exp.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.2 }}
          className="group">
          <Card
            className={cn(
              "relative grid md:grid-cols-[300px,1fr] gap-6 p-6",
              "bg-white dark:bg-zinc-900",
              "border border-zinc-200 dark:border-zinc-800",
              "rounded-xl overflow-hidden",
              "transition-all duration-300",
              "hover:shadow-lg hover:shadow-zinc-200/20 dark:hover:shadow-zinc-800/20"
            )}>
            {/* Left Section - Main Info */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2 text-sm text-zinc-500 mb-2">
                  <Calendar className="w-4 h-4" />
                  <span>{exp.period}</span>
                </div>
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                  {exp.title}
                </h3>
                <div className="flex items-center gap-2 mt-2 text-zinc-600 dark:text-zinc-400">
                  <Building className="w-4 h-4" />
                  <span>{exp.company}</span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-start gap-2 text-zinc-600 dark:text-zinc-400">
                  <Workflow className="w-4 h-4 mt-1 shrink-0" />
                  <p className="text-sm">{exp.description}</p>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400">
                  <Code2 className="w-4 h-4" />
                  <span className="text-sm font-medium">Technologies</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <TechBadge key={tech} tech={tech} />
                  ))}
                </div>
              </div>
            </div>

            {/* Right Section - Details */}
            <div className="space-y-6">
              {/* Responsibilities */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400">
                  <Briefcase className="w-4 h-4" />
                  <span className="text-sm font-medium">
                    Key Responsibilities
                  </span>
                </div>
                <ul className="grid gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                  {exp.responsibilities.map((resp, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + idx * 0.1 }}
                      className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-zinc-300 dark:bg-zinc-700 mt-2" />
                      <span>{resp}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Projects Section */}
              {exp.projects.length > 0 && (
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400">
                    <ExternalLink className="w-4 h-4" />
                    <span className="text-sm font-medium">
                      Notable Projects
                    </span>
                  </div>
                  <div className="grid gap-3">
                    {exp.projects.map((project, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + idx * 0.1 }}
                        className={cn(
                          "p-3 rounded-lg",
                          "bg-zinc-50 dark:bg-zinc-800/50",
                          "border border-zinc-200 dark:border-zinc-700"
                        )}>
                        <h4 className="font-medium text-zinc-900 dark:text-zinc-100 mb-1">
                          {project.name}
                        </h4>
                        <p className="text-sm text-zinc-600 dark:text-zinc-400">
                          {project.description}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
