import React from "react";
import { BlogSection } from "@b/_customComponents/_app/_blogs/BlogSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs",
  description: "Thoughts on development, design, and technology from a software engineer and team leader. Explore my latest articles on React.js, Next.js, TypeScript, and more.",
};

function page() {
  return <BlogSection />;
}

export default page;
