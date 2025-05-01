"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@b/components/ui/card";
import { CalendarDays, Clock, Filter } from "lucide-react";
import Link from "next/link";
import { researchBlogs } from "./researchBlogs";
import { useState } from "react";

export default function ResearchBlogsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Get unique categories
  const categories = Array.from(
    new Set(researchBlogs.map((blog) => blog.category))
  );

  // Filter blogs based on selected category
  const filteredBlogs = selectedCategory
    ? researchBlogs.filter((blog) => blog.category === selectedCategory)
    : researchBlogs;

  return (
    <div className="min-h-screen bg-background py-20 px-6">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Research Blogs</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore in-depth technical articles about web development, AI
            integration, and modern software architecture.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center gap-4 flex-wrap justify-center">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-4 py-2 rounded-full transition-all ${
              !selectedCategory
                ? "bg-primary text-primary-foreground"
                : "bg-muted"
            }`}>
            All
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full transition-all ${
                selectedCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted"
              }`}>
              {category}
            </button>
          ))}
        </motion.div>

        {/* Blog Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredBlogs.map((blog, index) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}>
              <Link
                aria-label={`Read research blog about ${blog.title}`}
                href={`/research-blogs/${blog.id}`}>
                <Card className="group hover:shadow-lg transition-all duration-300 hover:border-primary/50 h-full flex flex-col justify-between overflow-hidden">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                        {blog.category}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CalendarDays className="w-4 h-4" />
                        {new Date(blog.publishedAt).toLocaleDateString(
                          "en-US",
                          {
                            month: "long",
                            day: "numeric",
                            year: "numeric",
                          }
                        )}
                      </div>
                    </div>
                    <CardTitle className="mt-4 group-hover:text-primary transition-colors">
                      {blog.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-2">
                      {blog.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {/* Tech Stacks */}
                      <div className="flex flex-wrap gap-2">
                        {blog.techStacks.map((tech) => (
                          <div
                            key={tech.name}
                            className="border rounded-full px-3 py-1 text-xs text-muted-foreground bg-muted/50 backdrop-blur-sm">
                            {tech.name} {tech.version}
                          </div>
                        ))}
                      </div>

                      {/* Metrics */}
                      <div className="flex items-center justify-between text-sm text-muted-foreground border-t pt-4">
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {blog.readTime}
                        </span>
                        <span className="text-primary">Read More →</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
