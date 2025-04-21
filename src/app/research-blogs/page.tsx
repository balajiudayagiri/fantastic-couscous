import ResearchBlogsListPageHeroSection from "@b/_customComponents/_app/_research-blogs/ResearchBlogsListPageHeroSection";
import ResearchBlogsPage from "@b/_customComponents/_app/_research-blogs/ResearchBlogsPage";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Research & Technical Insights | Balaji Udayagiri",
  description:
    "Explore my latest research and insights on software development, design, and technology. From AI-powered projects to front-end performance optimization, discover my expertise in React.js, Next.js, TypeScript, and more.",
  keywords: [
    "software development research",
    "technical insights",
    "React.js tutorials",
    "Next.js guides",
    "TypeScript best practices",
    "AI integration",
    "frontend optimization",
    "web development insights",
  ],
  alternates: {
    canonical: "https://balajiudayagiri.vercel.app/research-blogs",
  },
  openGraph: {
    title: "Technical Research & Insights | Balaji Udayagiri",
    description:
      "Deep dives into software development, AI integration, and modern web technologies",
    url: "https://balajiudayagiri.vercel.app/research-blogs",
    type: "article",
    images: [
      {
        url: "/images/research-blogs-og.png",
        width: 1200,
        height: 630,
        alt: "Research & Technical Insights - Balaji Udayagiri",
      },
    ],
  },
};

export default function ResearchBlogsListPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Research & Technical Insights",
    description:
      "Technical research and insights on software development and AI integration",
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
          name: "Research & Insights",
          item: "https://balajiudayagiri.vercel.app/research-blogs",
        },
      ],
    },
  };

  return (
    <>
      <Script
        id="research-blogs-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main
        className="research-blogs-page"
        itemScope
        itemType="https://schema.org/Blog">
        <ResearchBlogsListPageHeroSection />
        <div className="container mx-auto px-4">
          <ResearchBlogsPage />
        </div>
      </main>
    </>
  );
}
