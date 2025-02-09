"use client";

import { motion } from "framer-motion";
import { DetailedExperienceCard } from "./DetailedExperienceCard";

export default function ExperiencePage() {
  return (
    <div className="min-h-screen w-full py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-6 bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] bg-clip-text text-transparent">
            Professional Experience
          </h1>
          <p className="text-lg text-center text-muted-foreground max-w-3xl mx-auto">
            A detailed look at my professional journey, skills, and achievements
            in software development and team leadership.
          </p>
        </motion.div>

        <div className="space-y-16">
          <DetailedExperienceCard />
        </div>
      </div>
    </div>
  );
}
