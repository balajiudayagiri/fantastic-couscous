"use client";
import { motion, Variants } from "framer-motion";
import { researchBlogs } from "@b/_customComponents/_app/_research-blogs/researchBlogs";
import {
  CalendarDays,
  Clock,
  Link2,
  ArrowLeft,
  Share2,
  Quote,
} from "lucide-react";
import { CodeBlock } from "@b/components/ui/code-block";
import Link from "next/link";
import { useCallback, useMemo } from "react";

const fadeInUp: Variants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
};

const fadeInSide: Variants = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
};

interface BlogPostProps {
  slug: string;
}

export default function BlogPost({ slug }: BlogPostProps) {
  const blog = useMemo(() => researchBlogs.find((b) => b.id === slug), [slug]);

  const formatDate = useCallback((date: string) => {
    return new Date(date).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  }, []);

  const handleShare = useCallback(async () => {
    if (!navigator.share || !blog) return;

    try {
      await navigator.share({
        title: blog.title,
        text: blog.description,
        url: window.location.href,
      });
    } catch (error) {
      console.error("Error sharing:", error);
    }
  }, [blog]);

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-semibold">Blog post not found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-20 px-6 max-md:pt-36">
      <motion.div
        variants={fadeInSide}
        initial="initial"
        animate="animate"
        className="max-w-4xl mx-auto mb-8">
        <Link
          href="/research-blogs"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back to Research Blogs
        </Link>
      </motion.div>

      <motion.article
        variants={fadeInUp}
        initial="initial"
        animate="animate"
        className="max-w-4xl mx-auto space-y-8">
        <div className="space-y-6">
          <div className="flex justify-between items-start">
            <div className="space-y-4">
              <div className="flex md:items-center max-md:flex-col gap-2 text-muted-foreground">
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                  {blog.category}
                </span>
                <span className="hidden md:inline" aria-hidden="true">
                  •
                </span>
                <time className="flex items-center gap-1">
                  <CalendarDays className="w-4 h-4" />
                  {formatDate(blog.publishedAt)}
                </time>
                <span className="hidden md:inline" aria-hidden="true">
                  •
                </span>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {blog.readTime}
                </div>
              </div>
            </div>
            <button
              onClick={handleShare}
              className="p-2 hover:bg-secondary rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label="Share article">
              <Share2 className="w-5 h-5" />
            </button>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            {blog.title}
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            {blog.description}
          </p>
        </div>
        <hr />

        <motion.section
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.2 }}
          className="space-y-2">
          <h2 className="text-lg font-semibold">Technologies Used</h2>
          <div className="flex flex-wrap gap-2">
            {blog.techStacks.map((tech) => (
              <span
                key={tech.name}
                className="px-3 py-1 bg-secondary rounded-full text-sm hover:bg-secondary/80 transition-colors">
                {tech.name} {tech.version}
              </span>
            ))}
          </div>
        </motion.section>

        <div className="prose prose-lg dark:prose-invert max-w-none space-y-12">
          <motion.section
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.3 }}
            className="bg-secondary/30 p-8 rounded-lg border border-secondary">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <Quote /> Summary
            </h2>
            <p className="leading-relaxed">{blog.content.summary}</p>
          </motion.section>

          <motion.section
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.4 }}>
            <h2 className="text-2xl font-semibold mb-6">Key Points</h2>
            <ul className="list-disc pl-6 space-y-4">
              {blog.content.keyPoints.map((point, index) => (
                <li key={index} className="leading-relaxed">
                  {point}
                </li>
              ))}
            </ul>
          </motion.section>

          {blog.content.codeExamples && (
            <motion.section
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.5 }}>
              <h2 className="text-2xl font-semibold mb-6">Code Examples</h2>
              <div className="space-y-8">
                {blog.content.codeExamples.map((example, index) => (
                  <div key={index} className="space-y-4">
                    <h3 className="text-xl font-medium">{example.title}</h3>
                    <p className="italic text-muted-foreground">
                      {example.description}
                    </p>
                    <div>
                      <CodeBlock
                        code={example.code}
                        language={example.language}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>
          )}

          <div className="grid md:grid-cols-2 gap-8 pt-8 border-t">
            <motion.section
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.6 }}>
              <h2 className="text-2xl font-semibold mb-4">References</h2>
              <ul className="space-y-3">
                {blog.references.map((ref, index) => (
                  <li key={index}>
                    <a
                      href={ref.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                      <span className="group-hover:underline">{ref.title}</span>
                      <Link2 className="w-4 h-4" />
                    </a>
                  </li>
                ))}
              </ul>
            </motion.section>

            <motion.section
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.7 }}>
              <h2 className="text-2xl font-semibold mb-4">Related Topics</h2>
              <div className="flex flex-wrap gap-2">
                {blog.relatedTopics.map((topic, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm hover:bg-primary/20 transition-colors">
                    {topic}
                  </span>
                ))}
              </div>
            </motion.section>
          </div>
        </div>
      </motion.article>
    </div>
  );
}
