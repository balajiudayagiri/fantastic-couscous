import React from "react";
import { BlogSection } from "@b/_customComponents/_app/_blogs/BlogSection";
import type { Metadata } from "next";
import Script from "next/script";
import BlogHeroSection from "@b/_customComponents/_app/_blogs/BlogHeroSection";

export const metadata: Metadata = {
  title: "Technical Blog | Web Development Insights - Balaji Udayagiri",
  description:
    "Thoughts on development, design, and technology from a software engineer and team leader. Explore my latest articles on React.js, Next.js, TypeScript, and more.",
  keywords: [
    "web development blog",
    "frontend development",
    "React.js tutorials",
    "Next.js guides",
    "TypeScript tips",
    "software engineering insights",
    "AI integration tutorials",
    "web performance optimization",
  ],
  alternates: {
    canonical: "https://balajiudayagiri.vercel.app/blogs",
  },
  openGraph: {
    title: "Technical Blog | Web Development Insights",
    description: "Expert insights on modern web development and AI integration",
    url: "https://balajiudayagiri.vercel.app/blogs",
    type: "article",
    // images: [
    //   {
    //     url: "/images/blog-og.png",
    //     width: 1200,
    //     height: 630,
    //     alt: "Balaji Udayagiri's Technical Blog",
    //   },
    // ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

export default function BlogsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Technical Blog",
    description: "Web development and software engineering insights",
    author: {
      "@type": "Person",
      name: "Balaji Udayagiri",
      jobTitle: "Frontend Lead Engineer",
    },
    publisher: {
      "@type": "Person",
      name: "Balaji Udayagiri",
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
          name: "Blog",
          item: "https://balajiudayagiri.vercel.app/blogs",
        },
      ],
    },
  };

  return (
    <>
      <Script
        id="blog-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="blog-page" itemScope itemType="https://schema.org/Blog">
        <BlogHeroSection />
        {/* Main Content */}
        <div className="container mx-auto px-4">
          <BlogSection />
        </div>
      </main>
    </>
  );
}
