import React from "react";
import ExperiencePage from "@b/_customComponents/_app/_work/ExperiencePage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Explore my professional experience in software development and team leadership. From leading AI-powered projects to optimizing front-end performance, discover my skills in React.js, Next.js, TypeScript, and more.",
};

function page() {
  return <ExperiencePage />;
}

export default page;
