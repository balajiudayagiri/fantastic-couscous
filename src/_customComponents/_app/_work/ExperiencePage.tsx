"use client";

import { motion } from "framer-motion";
import { DetailedExperienceCard } from "./DetailedExperienceCard";

export default function ExperiencePage() {
  return (
    <div className="relative min-h-screen w-full py-20 px-4 sm:px-6 lg:px-8">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-48 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute top-3/4 -left-48 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative space-y-6">
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center space-y-4">
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
              Career Timeline
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              A detailed look at my professional journey, skills, and
              achievements in software development and team leadership.
            </p>
          </motion.div>

          {/* Timeline Filter - Optional */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex justify-center gap-4 flex-wrap">
            <button className="px-6 py-2 rounded-full bg-purple-500/10 text-purple-500 hover:bg-purple-500/20 transition-all">
              All Experiences
            </button>
            {/* <button className="px-6 py-2 rounded-full bg-white/50 text-gray-600 hover:bg-white/75 transition-all">
              Leadership
            </button>
            <button className="px-6 py-2 rounded-full bg-white/50 text-gray-600 hover:bg-white/75 transition-all">
              Development
            </button> */}
          </motion.div>
        </motion.div>

        {/* Experience Cards Container */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="space-y-16 relative">
          {/* Decorative line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/20 via-pink-500/20 to-transparent" />

          {/* Cards */}
          <DetailedExperienceCard />
        </motion.div>
      </div>
    </div>
  );
}
