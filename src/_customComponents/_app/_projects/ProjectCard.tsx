import { motion } from "framer-motion";
import { Card } from "@b/components/ui/card";
import { ExternalLink, Github, ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";
import { Project } from "./constant";

const TechBadge = ({ tech }: { tech: string }) => (
  <span
    className="px-3 py-1.5 text-xs font-medium rounded-full 
    bg-neutral-100 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300 
    transition-all duration-300 hover:scale-105 border border-neutral-200 dark:border-neutral-700">
    {tech}
  </span>
);

const SectionTitle = ({ title }: { title: string }) => (
  <h3 className="text-lg font-medium text-neutral-900 dark:text-neutral-100 mb-4">
    {title}
  </h3>
);

export function ProjectCard({
  project,
  index,
  openSections,
  toggleSection,
}: {
  project: Project;
  index: number;
  openSections: { [key: string]: boolean };
  toggleSection: (title: string, section: string) => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group">
      <Card
        className="grid md:grid-cols-[1fr,1.5fr] relative overflow-hidden 
        bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm rounded-2xl 
        border border-neutral-200/50 dark:border-neutral-800/50
        transition-all duration-300 hover:shadow-lg">
        {/* Left Section - Project Overview */}
        <div className="p-8 border-r border-neutral-200/50 dark:border-neutral-800/50">
          <div className="space-y-6">
            {/* Project Icon & Title */}
            <div className="space-y-4">
              <div
                className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${project.gradient}`}>
                <project.icon className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100">
                {project.title}
              </h2>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                {project.summary}
              </p>
            </div>

            {/* Quick Links */}
            <div className="flex flex-wrap gap-3">
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full 
                  bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 
                  hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-all duration-300">
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </Link>
              {/* <Link
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full 
                  bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 
                  hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-all duration-300">
                <Github className="w-4 h-4" />
                Source Code
              </Link> */}
            </div>

            {/* Core Technologies */}
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-neutral-600 dark:text-neutral-400">
                Core Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.slice(0, 5).map((tech) => (
                  <TechBadge key={tech} tech={tech} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Detailed Information */}
        <div className="p-8 space-y-8 bg-neutral-50/50 dark:bg-neutral-900/50">
          {/* Description */}
          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <p className="text-neutral-600 dark:text-neutral-400">
              {project.description}
            </p>
          </div>

          {/* Features Section */}
          {/* Features Section */}
          <div className="space-y-4">
            <SectionTitle title="Key Features" />
            <div className="grid gap-4">
              {project.detailedFeatures.map((feature) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="p-4 rounded-lg bg-white dark:bg-neutral-800 
                    border border-neutral-200 dark:border-neutral-700">
                  <h4 className="font-medium text-neutral-900 dark:text-neutral-100 mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Full Tech Stack */}
          {openSections[`${project.title}-tech`] && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6 pt-4">
              {Object.entries(project.techStack).map(([category, techs]) => (
                <div key={category} className="space-y-3">
                  <h4
                    className="text-sm font-medium capitalize text-neutral-600 
                    dark:text-neutral-400">
                    {category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {Array.isArray(techs) &&
                      techs.map((tech) => <TechBadge key={tech} tech={tech} />)}
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </div>
      </Card>
    </motion.div>
  );
}
