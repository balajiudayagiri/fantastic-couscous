"use client";

import { useState } from "react";
import { createSlug } from "@b/utilities/createSlug";
import { Card, CardHeader, CardContent } from "@components/card";
import { motion } from "framer-motion";
import {
  Briefcase,
  Building,
  ExternalLink,
  Workflow,
  ChevronDown,
} from "lucide-react";
import Link from "next/link";
import { experiences } from "./HomePageConstants";

export function ExperienceSection() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center p-6 md:p-12">
      <div className="max-w-7xl w-full space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] bg-clip-text text-transparent">
            Professional Journey
          </h2>
          <p className="text-lg text-muted-foreground">
            Building innovative solutions and leading development teams
          </p>
        </motion.div>

        <div className="space-y-6">
          {experiences.map((exp, index) => {
            const isExpanded = expandedCard === index;

            return (
              <motion.div
                key={exp.title}
                id={index.toString()}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}>
                <Card
                  className="group cursor-pointer relative overflow-hidden border border-primary/10 bg-background/60 backdrop-blur-sm"
                  onClick={() => toggleExpand(index)}>
                  {/* Background Gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${exp.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  />

                  {/* Card Header */}
                  <CardHeader className="relative z-10 flex flex-col gap-2 p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div className="space-y-1">
                        <Link
                          aria-label={exp.title}
                          href={`/work?section=${createSlug(exp.title)}`}
                          className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent inline-flex items-center gap-2">
                          {exp.title}
                          <ExternalLink className="w-5 h-5 text-white hover:text-blue-400 opacity-0 -translate-y-1 group-hover/link:opacity-100 group-hover/link:translate-y-0 transition-all duration-200 ease-out" />
                        </Link>
                        <div className="flex items-start flex-col gap-2 text-muted-foreground">
                          <span className="flex items-center gap-2 text-muted-foreground">
                            <Building className="w-4 h-4" />
                            <span className="flex flex-col gap-1">
                              <span className="text-md">{exp.company}</span>
                              <span className="text-xs">{exp.period}</span>
                            </span>
                          </span>
                        </div>
                      </div>

                      {/* Expand Icon */}
                      <motion.div
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.3 }}>
                        <ChevronDown className="w-5 h-5 text-muted-foreground" />
                      </motion.div>
                    </div>
                  </CardHeader>

                  {/* Expandable Content */}
                  <motion.div
                    initial={false}
                    animate={{
                      height: isExpanded ? "auto" : 0,
                      opacity: isExpanded ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden">
                    <CardContent className="relative z-10 p-6">
                      <div className="flex items-start gap-2 text-muted-foreground text-xs mb-4">
                        <Workflow className="w-3 h-3" />
                        <span>{exp.description}</span>
                      </div>

                      <hr className="mb-4" />

                      <ul className="space-y-3">
                        {exp.responsibilities.map((resp, idx) => (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{
                              opacity: isExpanded ? 1 : 0,
                              x: isExpanded ? 0 : -20,
                            }}
                            transition={{
                              delay: isExpanded ? 0.2 + idx * 0.1 : 0,
                            }}
                            className="flex items-start gap-3 text-muted-foreground">
                            <Briefcase className="w-4 h-4 text-primary/60 mt-1.5" />
                            <span>{resp}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </CardContent>
                  </motion.div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
