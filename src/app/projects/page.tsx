import React from "react";
import ProjectsPage from "@b/_customComponents/_app/_projects/ProjectsPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore my latest work and contributions to the development community. From open-source projects to personal experiments, discover my skills in React.js, Next.js, TypeScript, and more.",
};

function page() {
  return <ProjectsPage />;
}

export default page;
