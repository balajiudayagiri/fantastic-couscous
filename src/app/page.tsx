import { AboutSection } from "@b/_customComponents/_app/AboutSection";
import { ExperianceTimeline } from "@b/_customComponents/_app/ExperianceTimeline";
import PerformanceScore from "@b/_customComponents/_app/PerformanceScore";
import { ProjectsSection } from "@b/_customComponents/_app/ProjectsSection";
import { HeroContent } from "@commonComponents";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Balaji Udayagiri | AI-Driven Frontend Engineer",
  description:
    "Specializing in AI-driven UI systems, web performance optimization, and scalable design systems using Next.js, React, and Tailwind CSS.",
  alternates: {
    canonical: "https://balajiudayagiri.vercel.app",
  },
  openGraph: {
    title: "AI-Driven Frontend Engineer | Balaji Udayagiri",
    description:
      "Expert in building AI-driven UI systems and optimizing web performance",
    // images: [
    //   {
    //     url: "/images/home-og.png",
    //     width: 1200,
    //     height: 630,
    //     alt: "Balaji Udayagiri - Frontend Engineer",
    //   },
    // ],
    type: "website",
    locale: "en_US",
    url: "https://balajiudayagiri.vercel.app",
    siteName: "Balaji Udayagiri Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI-Driven Frontend Engineer | Balaji Udayagiri",
    description:
      "Expert in building AI-driven UI systems and optimizing web performance",
    creator: "@YourTwitterHandle",
  },
  keywords:
    "Frontend Engineer, AI Development, Next.js, React, Web Performance, UI Systems",
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

export default function Page() {
  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Balaji Udayagiri - Frontend Engineering Services",
              description:
                "Specializing in AI-driven UI systems and web performance optimization",
              provider: {
                "@type": "Person",
                name: "Balaji Udayagiri",
                jobTitle: "Frontend Lead Engineer",
              },
              serviceType: [
                "Web Development",
                "AI Integration",
                "UI/UX Design",
              ],
              areaServed: "Worldwide",
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Frontend Engineering Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "AI-Driven UI Development",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Web Performance Optimization",
                    },
                  },
                ],
              },
            },
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "@id": "https://balajiudayagiri.vercel.app/#person",
              name: "Balaji Udayagiri",
              jobTitle: "Frontend Lead Engineer",
              description:
                "AI-Driven Frontend Engineer specializing in web performance optimization",
              url: "https://balajiudayagiri.vercel.app",
              knowsAbout: [
                "Frontend Development",
                "React",
                "Next.js",
                "AI Integration",
                "Web Performance",
                "UI/UX Design",
              ],
            },
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Balaji Udayagiri Portfolio",
              url: "https://balajiudayagiri.vercel.app",
              description:
                "Portfolio website of Balaji Udayagiri, Frontend Lead Engineer",
            },
          ]),
        }}
      />
      <main className="relative">
        <HeroContent />
        <h3
          lang="en"
          aria-label="Specialization in AI-driven UI systems and web performance optimization"
          role="heading"
          aria-level={3}
          className="text-xl md:text-2xl lg:text-3xl font-medium text-gray-400 my-4 mx-auto max-w-3xl text-center px-4 md:px-6 lg:px-8">
          {/* <Quote className="inline" /> */}
          &ldquo;I specialize in building AI-driven UI systems, optimizing web
          performance, and crafting scalable design systems. With deep expertise
          in Next.js, React, and Tailwind, I create high-performance, accessible
          web experiences.&rdquo;
        </h3>
        <AboutSection />
        <ExperianceTimeline />
        <ProjectsSection />
        <PerformanceScore />
      </main>
    </>
  );
}
