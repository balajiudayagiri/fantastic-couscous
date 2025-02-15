import ResearchBlogsPage from "@b/_customComponents/_app/_research-blogs/ResearchBlogsPage";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Research & Insights",
  description:
    "Explore my latest research and insights on software development, design, and technology. From AI-powered projects to front-end performance optimization, discover my skills in React.js, Next.js, TypeScript, and more.",
};

function page() {
  return <ResearchBlogsPage />;
}

export default page;
