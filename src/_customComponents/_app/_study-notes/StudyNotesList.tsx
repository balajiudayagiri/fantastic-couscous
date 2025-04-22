"use client";
import React, { useState } from "react";
import { StudyNotesList as notes } from "./constant";
import { motion } from "framer-motion";
import { Book, Search, Filter, ArrowRight, Bookmark } from "lucide-react";
import Link from "next/link";
import { createSlug } from "@b/utilities/createSlug";

function StudyNotesList() {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedCategory, setSelectedCategory] = useState("all");

  const formatTitle = (title: string) => {
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

  return (
    <div className="min-h-screen bg-gray-50/50 dark:bg-gray-900/50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 to-indigo-500/10 backdrop-blur-3xl" />
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/30 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-500/30 rounded-full blur-3xl" />
        </div>

        <div className="relative container mx-auto px-4 py-20 pt-24">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex justify-center">
              <span
                className="inline-flex items-center px-4 py-2 rounded-full text-sm 
                bg-white/10 backdrop-blur-sm border border-white/20 text-indigo-500 dark:text-indigo-300">
                <Book className="w-4 h-4 mr-2" />
                Knowledge Base
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent 
                bg-gradient-to-r from-indigo-500 to-violet-500">
              Interactive Study Notes
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600 dark:text-gray-300">
              Explore comprehensive guides on programming, design patterns, and
              best practices
            </motion.p>
          </div>
        </div>
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
                  className="group relative bg-white dark:bg-gray-800 rounded-2xl p-6 
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

                  <div className="space-y-4">
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
