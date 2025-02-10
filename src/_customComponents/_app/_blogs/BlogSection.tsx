"use client";

import { motion } from "framer-motion";
import { CalendarDays, Clock, ExternalLink } from "lucide-react";
import { blogs } from "./constants";

export function BlogSection() {
  return (
    <div className="min-h-screen bg-background py-20 px-6">
      <div className="max-w-5xl mx-auto space-y-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#6C5CE7] to-[#a363f5] bg-clip-text text-transparent">
            Latest Articles
          </h1>
          <p className="text-lg text-muted-foreground">
            Thoughts on development, design, and technology
          </p>
        </motion.div>

        {/* Blog Posts */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <motion.article
              key={blog.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group">
              <a
                href={blog.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full">
                <div
                  className="p-6 h-full rounded-2xl border border-primary/10 bg-primary/5 backdrop-blur-sm
                  hover:border-primary/20 transition-all duration-300 hover:bg-primary/10">
                  <div className="flex flex-col space-y-4 justify-between h-full">
                    <span>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-primary/60">
                          {blog.platform}
                        </span>
                        <ExternalLink className="w-4 h-4 text-primary/60" />
                      </div>

                      <h2 className="text-xl md:text-2xl font-semibold text-primary group-hover:text-primary/80 transition-colors">
                        {blog.title}
                      </h2>

                      <p className="text-muted-foreground">
                        {blog.description}
                      </p>
                    </span>
                    <span>
                      <div className="flex flex-wrap gap-2">
                        {blog.topics.map((topic) => (
                          <span
                            key={topic}
                            className="px-3 py-1 text-xs rounded-full
                            bg-primary/5 border border-primary/10 text-primary/80">
                            {topic}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-4 text-sm text-muted-foreground pt-2">
                        <span className="flex items-center gap-2">
                          <CalendarDays className="w-4 h-4" />
                          {blog.date}
                        </span>
                        <span className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          {blog.readTime}
                        </span>
                      </div>
                    </span>
                  </div>
                </div>
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
