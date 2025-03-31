import React from "react";
import ExperiencePage from "@b/_customComponents/_app/_work/ExperiencePage";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Professional Experience | Frontend Lead Engineer - Balaji Udayagiri",
  description:
    "Explore my professional journey as a Frontend Lead Engineer. Specializing in AI-powered projects, React.js, Next.js, and TypeScript development with proven experience in team leadership and performance optimization.",
  alternates: {
    canonical: "https://balajiudayagiri.vercel.app/work",
  },
  openGraph: {
    title: "Work Experience | Balaji Udayagiri",
    description:
      "Frontend Lead Engineer with expertise in AI integration and modern web technologies",
    url: "https://balajiudayagiri.vercel.app/work",
    type: "profile",
    images: [
      {
        url: "/images/work-experience-og.png",
        width: 1200,
        height: 630,
        alt: "Balaji Udayagiri's Professional Experience",
      },
    ],
  },
};

function page() {
  return (
    <>
      <Script
        id="work-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfilePage",
            mainEntity: {
              "@type": "Person",
              name: "Balaji Udayagiri",
              jobTitle: "Frontend Lead Engineer",
              worksFor: {
                "@type": "Organization",
                name: "PureCode Software",
              },
              knowsAbout: [
                "React.js",
                "Next.js",
                "TypeScript",
                "AI Integration",
                "Frontend Architecture",
                "Team Leadership",
              ],
              workLocation: {
                "@type": "Place",
                address: {
                  "@type": "PostalAddress",
                  addressCountry: "India",
                },
              },
            },
          }),
        }}
      />
      <main
        className="work-experience-page"
        itemScope
        itemType="https://schema.org/ProfilePage">
        <ExperiencePage />
      </main>
    </>
  );
}

export default page;
