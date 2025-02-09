"use client";

import { motion } from "framer-motion";
import { TextGenerateEffect } from "@components/text-generate-effect";
import Link from "next/link";
import { CalendarDays, Clock, ExternalLink } from "lucide-react";
// import Image from "next/image";

type Blog = {
  title: string;
  description: string;
  date: string;
  readTime: string;
  platform: "Medium" | "LinkedIn";
  link: string;
  topics: string[];
};

const blogs: Blog[] = [
  {
    title: "Enhancing Performance with Web Workers in Next.js and React",
    description:
      "Learn how to leverage Web Workers for improved performance in React applications. Discover techniques for managing resource-intensive tasks without compromising user experience.",
    date: "Jan 15, 2025",
    readTime: "7 min read",
    platform: "Medium",
    link: "https://medium.com/@balu.udy/enhancing-performance-with-web-workers-in-next-js-and-react-bc62f50a9d53",
    topics: ["Next.js", "React", "Performance", "Web Workers"],
  },
  {
    title: "Think and Grow Rich: Lessons on Success, Wealth, and Mindset",
    description:
      "Explore timeless principles from Napoleon Hill's classic that have helped millions worldwide unlock their potential and achieve their dreams.",
    date: "November 27, 2024",
    readTime: "5 min read",
    platform: "LinkedIn",
    link: "https://www.linkedin.com/posts/balaji-udayagiri-228747243_think-and-grow-rich-by-napoleon-hill-activity-7267255936786804736-inow",
    topics: ["Mindset", "Success", "Personal Development"],
  },
  {
    title: "Mastering Aspect Ratio in CSS & Tailwind CSS",
    description:
      "Learn how to maintain perfect proportions for images, videos, and other elements across different screen sizes using modern CSS techniques.",
    date: "November 27, 2024",
    readTime: "4 min read",
    platform: "LinkedIn",
    link: "https://www.linkedin.com/posts/balaji-udayagiri-228747243_aspect-ratio-demystified-creating-flexible-activity-7267249908854743040-9Ao4",
    topics: ["CSS", "Tailwind CSS", "Responsive Design"],
  },
  {
    title: "Key Things Every Next.js Developer Should Know in 2024",
    description:
      "Essential concepts and best practices for Next.js developers working with App Router and TypeScript to build efficient and scalable applications.",
    date: "November 27, 2024",
    readTime: "6 min read",
    platform: "LinkedIn",
    link: "https://www.linkedin.com/posts/balaji-udayagiri-228747243_key-things-every-nextjs-developer-should-activity-7267248445210419200-A1M8",
    topics: ["Next.js", "TypeScript", "App Router"],
  },
  {
    title:
      "Mastering Jira: A Comprehensive Guide for Educators and Scrum Masters",
    description:
      "A detailed guide on effectively using Jira for project management, perfect for educators and Scrum Masters leading Agile teams.",
    date: "Jan 15, 2025",
    readTime: "6 min read",
    platform: "Medium",
    link: "https://medium.com/@balu.udy/mastering-jira-a-comprehensive-guide-for-educators-and-scrum-masters-99c05ebcdeca",
    topics: ["Jira", "Agile", "Project Management"],
  },
];

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
        <div className="space-y-8">
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
                className="block">
                <div
                  className="p-6 rounded-2xl border border-primary/10 bg-primary/5 backdrop-blur-sm
                  hover:border-primary/20 transition-all duration-300 hover:bg-primary/10">
                  <div className="flex flex-col space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-primary/60">
                        {blog.platform}
                      </span>
                      <ExternalLink className="w-4 h-4 text-primary/60" />
                    </div>

                    <h2 className="text-xl md:text-2xl font-semibold text-primary group-hover:text-primary/80 transition-colors">
                      {blog.title}
                    </h2>

                    <p className="text-muted-foreground">{blog.description}</p>

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
