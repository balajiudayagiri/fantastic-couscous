"use client";
import React, { useState } from "react";
import { StudyNotesList as notes } from "./constant";
import { motion } from "framer-motion";
import { Book, Search, Filter, ArrowRight, Bookmark } from "lucide-react";
import Link from "next/link";
import { createSlug } from "@b/utilities/createSlug";

export const formatTitle = (title: string) => {
  const parts = title.split(/(`[^`]+`)/);

  return parts.map((part, index) => {
    if (part.startsWith("`") && part.endsWith("`")) {
      return (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-mono 
            bg-gradient-to-r from-violet-500/10 to-indigo-500/10 text-indigo-700 
            dark:text-indigo-300 border border-indigo-500/20">
          {part.slice(1, -1)}
        </motion.span>
      );
    }
    return part;
  });
};
function StudyNotesList() {
  //   const [searchTerm, setSearchTerm] = useState("");
  //   const [selectedCategory, setSelectedCategory] = useState("all");

  return (
    <div className="min-h-screen bg-gray-50/50 dark:bg-gray-900/50">
      {/* Hero Section */}
      <section className="relative py-20 flex items-center justify-center overflow-hidden">
        {/* Enhanced animated background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-tr from-violet-500/20 via-transparent to-indigo-500/20 animate-gradient" />
          <div className="absolute top-0 -left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-full mix-blend-multiply blur-3xl animate-blob" />
          <div className="absolute bottom-0 -right-1/4 w-[600px] h-[600px] bg-gradient-to-tr from-violet-500/20 to-fuchsia-500/20 rounded-full mix-blend-multiply blur-3xl animate-blob animation-delay-2000" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-bl from-purple-500/20 to-pink-500/20 rounded-full mix-blend-multiply blur-3xl animate-blob animation-delay-4000" />
        </div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-indigo-500/5 to-transparent rounded-full animate-pulse" />
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-gradient-to-bl from-violet-500/5 to-transparent rounded-full animate-pulse animation-delay-2000" />
          <div className="absolute -top-10 left-1/2 w-96 h-96 bg-gradient-to-b from-indigo-500/10 to-transparent rounded-full blur-3xl animate-float" />
        </div>

        {/* Content */}
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            {/* Enhanced Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex justify-center">
              <span
                className="inline-flex items-center px-6 py-2.5 rounded-full text-sm font-medium
                bg-white/10 backdrop-blur-md border border-white/20 text-indigo-600 dark:text-indigo-300
                shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/30 transition-all duration-300
                hover:scale-105 cursor-pointer group">
                <Book className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
                Interactive Knowledge Base
              </span>
            </motion.div>

            {/* Enhanced Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight">
              <span
                className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-600
                animate-text-gradient bg-300% dark:from-indigo-300 dark:via-purple-300 dark:to-violet-300">
                Level Up Your
              </span>
              <br />
              <span
                className="bg-clip-text text-transparent bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600
                animate-text-gradient bg-300% dark:from-violet-300 dark:via-purple-300 dark:to-indigo-300 animation-delay-1000">
                Development Journey
              </span>
            </motion.h1>

            {/* Enhanced Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Unlock the power of modern web development with our curated
              collection of
              <span className="text-indigo-600 dark:text-indigo-400 font-semibold mx-1">
                interactive guides
              </span>
              and
              <span className="text-purple-600 dark:text-purple-400 font-semibold mx-1">
                practical examples
              </span>
              . From fundamentals to advanced patterns, elevate your skills to
              the next level.
            </motion.p>

            {/* Features Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto pt-8">
              {[
                { count: `${notes.length}+`, label: "Study Notes" },
                { count: "100+", label: "Code Snippets" },
                { count: "100%", label: "Free Content" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all">
                  <div className="font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-violet-500">
                    {stat.count}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Bottom Fade */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-gray-50/90 to-transparent dark:from-gray-900/90 pointer-events-none" />
      </section>
      {/* Search and Filters */}
      {/* <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="p-4 md:p-8 md:pb-0">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <input
                type="search"
                placeholder="Search study notes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-200 
                    dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:ring-2 
                    focus:ring-indigo-500 outline-none"
              />
            </div>
            <div className="flex gap-2">
              <button
                className="px-4 py-2.5 rounded-lg border border-gray-200 
                  dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900 
                  transition-colors flex items-center gap-2">
                <Filter className="w-5 h-5" />
                Filters
              </button>
              <button
                className="px-4 py-2.5 rounded-lg bg-indigo-500 text-white 
                  hover:bg-indigo-600 transition-colors">
                Search
              </button>
            </div>
          </div>
        </motion.div>
      </div> */}
      {/* Notes Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {notes.map((note, index) => {
            // Create the slug outside of the JSX for better type inference
            const slug = createSlug(note.title);
            return (
              <Link
                href={{
                  pathname: `/study-notes/${slug}-${note.id}`,
                }}
                key={index}>
                <motion.article
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group h-full relative bg-white dark:bg-gray-800 rounded-2xl p-6 
                shadow-lg hover:shadow-xl transition-all duration-300 border-2 
                border-gray-200 dark:border-gray-700 hover:dark:border-indigo-500 hover:border-indigo-500">
                  {/* <div className="absolute top-4 right-4">
                    <button
                      className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 
                  transition-colors">
                      <Bookmark
                        className="w-5 h-5 text-gray-400 group-hover:text-indigo-500 
                    transition-colors"
                      />
                    </button>
                  </div> */}

                  <div className="space-y-4 flex flex-col h-full justify-between">
                    <h2
                      className="text-lg font-semibold text-gray-900 dark:text-gray-100 
                  leading-relaxed pr-8">
                      {formatTitle(note.title)}
                    </h2>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        5 min read
                      </span>
                      <button
                        className="text-indigo-500 hover:text-indigo-600 font-medium 
                    flex items-center gap-2 group-hover:gap-3 transition-all">
                        Read more
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </motion.article>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default StudyNotesList;
