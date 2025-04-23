"use client";
import React from "react";
import { motion } from "framer-motion";
import { blogs } from "@b/_customComponents/_app/_blogs/constants";
import {
  BookOpen,
  PenTool,
  Users,
  Boxes,
  BookMarked,
  TrendingUp,
} from "lucide-react";

function BlogHeroSection() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-20">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#6C5CE7]/20 to-background" />
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#6C5CE7]/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#a363f5]/10 rounded-full blur-3xl animate-pulse delay-300" />
        </div>

        {/* Content */}
        <div className="container relative mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center space-y-8">
            {/* Stats Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-4 px-4 py-2 rounded-full 
                  bg-white/10 border border-[#6C5CE7]/20 backdrop-blur-sm">
              <span className="flex items-center gap-1 text-sm font-medium text-[#6C5CE7]">
                <BookOpen className="w-4 h-4" />
                {blogs.length}+ Articles
              </span>
              <span className="w-px h-4 bg-[#6C5CE7]/20" />
              <span className="flex items-center gap-1 text-sm font-medium text-[#6C5CE7]">
                <Users className="w-4 h-4" />
                50K+ Monthly Readers
              </span>
            </motion.div>

            {/* Main Title */}
            <div className="space-y-6">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                <span className="block bg-gradient-to-r from-[#6C5CE7] to-[#a363f5] bg-clip-text text-transparent">
                  Insights & Tutorials
                </span>
                <span className="block text-2xl md:text-3xl mt-4 text-muted-foreground">
                  Exploring Modern Web Development
                </span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Deep dives into web development, design patterns, and emerging
                technologies. Practical insights from real-world projects and
                experiences.
              </motion.p>
            </div>

            {/* Topic Categories */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {[
                {
                  icon: PenTool,
                  title: "Development",
                  description: "Best practices & patterns",
                },
                {
                  icon: Boxes,
                  title: "Architecture",
                  description: "System design & scaling",
                },
                {
                  icon: TrendingUp,
                  title: "Performance",
                  description: "Optimization techniques",
                },
              ].map((category, index) => (
                <div
                  key={category.title}
                  className="p-4 rounded-xl bg-white/5 backdrop-blur-sm 
                      border border-[#6C5CE7]/10 hover:border-[#6C5CE7]/30 
                      transition-all duration-300">
                  <category.icon className="w-6 h-6 text-[#6C5CE7] mb-3 mx-auto" />
                  <h3 className="font-medium text-primary">{category.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {category.description}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BlogHeroSection;
