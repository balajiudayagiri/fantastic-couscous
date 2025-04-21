"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Code2,
  Github,
  Layout,
  Star,
  Terminal,
  Trophy,
  Users,
} from "lucide-react";
import { projects } from "@b/_customComponents/_app/_projects/constant";

function ProjectsHeroSection() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-20">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-background" />
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-300" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-700" />
        </div>

        {/* Content */}
        <div className="container relative mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Project Stats Badge */}
            <div className="flex justify-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 backdrop-blur-sm">
                <span className="flex gap-1 text-sm font-medium text-purple-500">
                  <Trophy className="w-4 h-4" />
                  {projects.length}+ Projects
                </span>
                {/* <span className="w-px h-4 bg-purple-500/20" />
                <span className="flex gap-1 text-sm font-medium text-purple-500">
                  <Star className="w-4 h-4" />
                  500+ Stars
                </span>
                <span className="w-px h-4 bg-purple-500/20" />
                <span className="flex gap-1 text-sm font-medium text-purple-500">
                  <Users className="w-4 h-4" />
                  1000+ Users
                </span> */}
              </motion.div>
            </div>

            {/* Main Title */}
            <div className="text-center mt-12 space-y-6">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold">
                <span className="block bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
                  Innovative Project
                </span>
                {/* <span className="block mt-2 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
                  Modern Web Development
                </span> */}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Showcasing a collection of cutting-edge projects that
                demonstrate expertise in React.js, Next.js, TypeScript, and AI
                integration. Each project reflects a commitment to innovation,
                performance, and user experience.
              </motion.p>
            </div>

            {/* Project Categories */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {/* Web Applications */}
              <div className="group p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300">
                <Code2 className="w-8 h-8 text-purple-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Web Applications</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  Modern, responsive web apps built with Next.js and React
                </p>
                {/* <span className="text-purple-500 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                  View Projects <ArrowRight className="w-4 h-4" />
                </span> */}
              </div>

              {/* Developer Tools */}
              <div className="group p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300">
                <Terminal className="w-8 h-8 text-purple-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Developer Tools</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  Tools and utilities that enhance developer productivity
                </p>
                {/* <span className="text-purple-500 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                  Explore Tools <ArrowRight className="w-4 h-4" />
                </span> */}
              </div>

              {/* Open Source */}
              <div className="group p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300">
                <Github className="w-8 h-8 text-purple-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Open Source</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  Contributions and packages available to the community
                </p>
                {/* <span className="text-purple-500 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                  View Repos <ArrowRight className="w-4 h-4" />
                </span> */}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProjectsHeroSection;
