"use client";
import React from "react";
import { Brain, Book, Search, BookOpen, Sparkles, Users } from "lucide-react";
import { motion } from "framer-motion";

function ResearchBlogsListPageHeroSection() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-20">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-background" />
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-300" />
        </div>

        {/* Content */}
        <div className="container relative mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center space-y-8">
            {/* Stats Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-4 px-4 py-2 rounded-full bg-white/10 border border-purple-500/20 backdrop-blur-sm">
              <span className="flex items-center gap-1 text-sm font-medium text-purple-500">
                <Brain className="w-4 h-4" />
                35+ Research Articles
              </span>
              <span className="w-px h-4 bg-purple-500/20" />
              <span className="flex items-center gap-1 text-sm font-medium text-purple-500">
                <Users className="w-4 h-4" />
                1K+ Monthly Readers
              </span>
            </motion.div>

            {/* Main Title */}
            <div className="space-y-6">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                <span className="block bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
                  Technical Research &
                </span>
                <span className="block bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
                  In-Depth Insights
                </span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Exploring cutting-edge web development concepts, best practices,
                and innovative solutions through comprehensive technical
                analysis and research.
              </motion.p>
            </div>

            {/* Category Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {/* Technical Deep Dives */}
              <div className="group p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300">
                <Book className="w-8 h-8 text-purple-500 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-2">
                  Technical Deep Dives
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  In-depth analysis of modern web technologies and frameworks
                </p>
              </div>

              {/* Development Insights */}
              <div className="group p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300">
                <Search className="w-8 h-8 text-purple-500 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-2">Research Studies</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Comprehensive studies on development patterns and practices
                </p>
              </div>

              {/* Future Trends */}
              <div className="group p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300">
                <Sparkles className="w-8 h-8 text-purple-500 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-2">Future Trends</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Exploring emerging technologies and industry directions
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ResearchBlogsListPageHeroSection;
