import React from "react";
import ExperiencePage from "@b/_customComponents/_app/_work/ExperiencePage";
import { Metadata } from "next";
import Script from "next/script";
import { calculateExperience } from "@b/utilities/calculateExperience";

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
    locale: "en_US",
    siteName: "Balaji Udayagiri Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Work Experience | Frontend Lead Engineer - Balaji Udayagiri",
    description:
      "Frontend Lead Engineer specializing in AI integration and modern web technologies",
    creator: "@YourTwitterHandle",
  },
  keywords:
    "Frontend Lead Engineer, Work Experience, React.js, Next.js, TypeScript, AI Integration, Team Leadership",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-24 pb-20">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-background" />
          <div className="absolute inset-0">
            <div className="absolute -top-48 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
            <div className="absolute top-1/2 -left-48 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
          </div>

          {/* Content */}
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
                </span>
                <span className="text-sm font-medium text-purple-500">
                  Currently Frontend Lead Engineer
                </span>
              </div>

              {/* Title */}
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                <span className="block bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
                  Professional Journey
                </span>
                <span className="block text-2xl md:text-3xl lg:text-4xl mt-4 text-gray-600 dark:text-gray-300">
                  Building the future of web experiences
                </span>
              </h1>

              {/* Description */}
              <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-600 dark:text-gray-300">
                With expertise in React, Next.js, and AI integration, I&apos;ve
                led teams to deliver innovative solutions and optimize
                performance across multiple projects.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto pt-8">
                <div className="p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-purple-500/10">
                  <div className="text-3xl font-bold text-purple-500">
                    {calculateExperience("2020-06-15")}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    Years Experience
                  </div>
                </div>
                <div className="p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-purple-500/10">
                  <div className="text-3xl font-bold text-purple-500">5+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    Products Enhanced & Projects Delivered
                  </div>
                </div>
                <div className="p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-purple-500/10">
                  <div className="text-3xl font-bold text-purple-500">8</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    Team Members Led
                  </div>
                </div>
                {/* <div className="p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-purple-500/10">
                  <div className="text-3xl font-bold text-purple-500">98%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    Client Satisfaction
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </section>
        <ExperiencePage />
      </main>
    </>
  );
}

export default page;
