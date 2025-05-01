"use client";
import { motion } from "framer-motion";
import { researchBlogs } from "@b/_customComponents/_app/_research-blogs/researchBlogs";
import { Avatar, AvatarFallback, AvatarImage } from "@b/components/ui/avatar";
import { CalendarDays, Clock, Link2 } from "lucide-react";
import { CodeBlock } from "@b/components/ui/code-block";

export default function BlogPost({ slug }: { slug: string }) {
  const blog = researchBlogs.find((b) => b.id === slug);

  if (!blog) {
    return <div>Blog post not found</div>;
  }

  return (
    <div className="min-h-screen bg-background py-20 px-6 max-md:pt-36">
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="space-y-4">
          <div className="flex md:items-center max-md:flex-col gap-2 text-muted-foreground">
            <span className="text-primary">{blog.category}</span>
            <span className="hidden md:inline">•</span>
            <div className="flex items-center gap-1">
              <CalendarDays className="w-4 h-4" />
              {new Date(blog.publishedAt).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </div>
            <span className="hidden md:inline">•</span>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {blog.readTime}
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold">{blog.title}</h1>
          <p className="text-xl text-muted-foreground">{blog.description}</p>
        </div>

        {/* Author */}
        {/* <div className="flex items-center gap-4 border-y py-4">
          <Avatar className="h-12 w-12">
            <AvatarImage src={blog.author.avatar} />
            <AvatarFallback>
              {blog.author.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold">{blog.author.name}</p>
            <p className="text-sm text-muted-foreground">{blog.author.role}</p>
          </div>
        </div> */}

        {/* Tech Stacks */}
        <div className="space-y-2">
          <h2 className="text-lg font-semibold">Technologies Used</h2>
          <div className="flex flex-wrap gap-2">
            {blog.techStacks.map((tech) => (
              <span
                key={tech.name}
                className="px-3 py-1 bg-secondary rounded-full text-sm">
                {tech.name} {tech.version}
              </span>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
          {/* Summary */}
          <div className="bg-secondary/30 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Summary</h2>
            <p>{blog.content.summary}</p>
          </div>

          {/* Key Points */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Key Points</h2>
            <ul className="list-disc pl-6 space-y-2">
              {blog.content.keyPoints.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>

          {/* Code Examples */}
          {blog.content.codeExamples && (
            <div>
              <h2 className="text-xl font-semibold mb-4">Code Examples</h2>
              <div className="space-y-6">
                {blog.content.codeExamples.map((example, index) => (
                  <div key={index} className="space-y-2">
                    <h3 className="text-lg font-medium">{example.title}</h3>
                    <p className="italic text-sm text-muted-foreground">
                      {example.description}
                    </p>
                    <CodeBlock
                      code={example.code}
                      language={example.language}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* References */}
          <div>
            <h2 className="text-xl font-semibold mb-4">References</h2>
            <ul className="space-y-2">
              {blog.references.map((ref, index) => (
                <li
                  key={index}
                  className="flex w-fit items-center gap-2 hover:text-blue-500 hover:underline">
                  <a
                    href={ref.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="">
                    {ref.title}
                  </a>
                  <Link2 />
                </li>
              ))}
            </ul>
          </div>

          {/* Related Topics */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Related Topics</h2>
            <div className="flex flex-wrap gap-2">
              {blog.relatedTopics.map((topic, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                  {topic}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.article>
    </div>
  );
}
