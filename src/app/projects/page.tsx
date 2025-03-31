import React from "react";
import ProjectsPage from "@b/_customComponents/_app/_projects/ProjectsPage";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Featured Projects | Balaji Udayagiri",
  description:
    "Explore my latest work and contributions to the development community. From open-source projects to personal experiments, discover my skills in React.js, Next.js, TypeScript, and more.",
  keywords: [
    "web development projects",
    "React.js applications",
    "Next.js projects",
    "TypeScript examples",
    "frontend portfolio",
    "AI integration projects",
    "open source contributions",
    "web development showcase",
  ],
  alternates: {
    canonical: "https://balajiudayagiri.vercel.app/projects",
  },
  openGraph: {
    title: "Featured Projects | Balaji Udayagiri",
    description:
      "Showcase of innovative web development projects and open-source contributions",
    url: "https://balajiudayagiri.vercel.app/projects",
    type: "website",
    images: [
      {
        url: "/images/projects-og.png",
        width: 1200,
        height: 630,
        alt: "Featured Projects - Balaji Udayagiri",
      },
    ],
  },
};

export default function ProjectsListPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Featured Projects",
    description: "Showcase of web development projects and contributions",
    author: {
      "@type": "Person",
      name: "Balaji Udayagiri",
      jobTitle: "Frontend Lead Engineer",
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://balajiudayagiri.vercel.app",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Projects",
          item: "https://balajiudayagiri.vercel.app/projects",
        },
      ],
    },
  };

  return (
    <>
      <Script
        id="projects-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main
        className="projects-page container mx-auto px-4 py-8"
        itemScope
        itemType="https://schema.org/CollectionPage">
        <ProjectsPage />
      </main>
    </>
  );
}
