"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@b/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@b/components/ui/avatar";
import { CalendarDays, Clock, Eye, Heart, Share2 } from "lucide-react";
import Link from "next/link";
import { researchBlogs } from "./researchBlogs";

export default function ResearchBlogsPage() {
  return (
    <div className="min-h-screen bg-background py-20 px-6">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent">
            Research & Insights
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Exploring the cutting edge of web development through in-depth
            research and technical analysis.
          </p>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {researchBlogs.map((blog, index) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}>
              <Link
                aria-label={`Research Blogs ${blog.id}`}
                href={`/research-blogs/${blog.id}`}>
                <Card className="hover:shadow-lg transition-all duration-300 hover:border-primary/50">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>{blog.category}</div>
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
                    <CardTitle className="mt-4">{blog.title}</CardTitle>
                    <CardDescription>{blog.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {/* Author */}
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarImage src={blog.author.avatar} />
                          <AvatarFallback>
                            {blog.author.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-sm font-medium">
                            {blog.author.name}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {blog.author.role}
                          </p>
                        </div>
                      </div>

                      {/* Tech Stacks */}
                      <div className="flex flex-wrap gap-2">
                        {blog.techStacks.map((tech) => (
                          <div key={tech.name}>
                            {tech.name} {tech.version}
                          </div>
                        ))}
                      </div>

                      {/* Metrics */}
                      <div className="flex items-center justify-between text-sm text-muted-foreground pt-4">
                        {/* <div className="flex items-center gap-4">
                          <span className="flex items-center gap-1">
                            <Eye className="w-4 h-4" />
                            {blog.metrics?.views}
                          </span>
                          <span className="flex items-center gap-1">
                            <Heart className="w-4 h-4" />
                            {blog.metrics?.likes}
                          </span>
                          <span className="flex items-center gap-1">
                            <Share2 className="w-4 h-4" />
                            {blog.metrics?.shares}
                          </span>
                        </div> */}
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {blog.readTime}
                        </span>
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
