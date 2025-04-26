import { Metadata } from "next";
import Script from "next/script";
import { TermsOfService } from "@b/_customComponents/_app/_terms/TermsOfService";

export const metadata: Metadata = {
  title: "Terms of Service | Balaji Udayagiri",
  description:
    "Terms of Service and legal information for Balaji Udayagiri's professional services, website usage, and content policies.",
  alternates: {
    canonical: "https://balajiudayagiri.vercel.app/terms",
  },
  openGraph: {
    title: "Terms of Service | Balaji Udayagiri",
    description:
      "Legal terms and conditions for using Balaji Udayagiri's services and website",
    url: "https://balajiudayagiri.vercel.app/terms",
    type: "website",
    // images: [
    //   {
    //     url: "/images/terms-og.png",
    //     width: 1200,
    //     height: 630,
    //     alt: "Terms of Service - Balaji Udayagiri",
    //   },
    // ],
  },
};

export default function TermsPage() {
  return (
    <>
      <Script
        id="terms-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Terms of Service",
            description:
              "Terms of Service and legal information for Balaji Udayagiri's professional services",
            publisher: {
              "@type": "Person",
              name: "Balaji Udayagiri",
            },
            mainContentOfPage: {
              "@type": "WebPageElement",
              cssSelector: ".terms-content",
            },
          }),
        }}
      />
      <article
        itemScope
        itemType="https://schema.org/WebPage"
        className="terms-content">
        <TermsOfService />
      </article>
    </>
  );
}
