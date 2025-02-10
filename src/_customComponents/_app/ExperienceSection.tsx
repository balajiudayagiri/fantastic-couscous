"use client";

import { createSlug } from "@b/utilities/createSlug";
import { Card, CardHeader, CardContent } from "@components/card";
import { motion } from "framer-motion";
import { Briefcase, Building, CalendarDays, ExternalLink } from "lucide-react";
import Link from "next/link";
import { experiences } from "./HomePageConstants";

export function ExperienceSection() {
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

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              id={index.toString()}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}>
              <Card className="group  group/link cursor-pointer relative overflow-hidden border border-primary/10 bg-background/60 backdrop-blur-sm">
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${exp.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                />

                <CardHeader className="relative z-10">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="space-y-1">
                      <Link
                        aria-label={exp.title}
                        href={`/work?section=${createSlug(exp.title)}`}
                        className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent inline-flex items-center gap-2">
                        {exp.title}
                        <ExternalLink className="w-5 h-5 text-white hover:text-blue-400 opacity-0 -translate-y-1 group-hover/link:opacity-100 group-hover/link:translate-y-0 transition-all duration-200 ease-out" />
                      </Link>
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
