import type { Metadata } from "next";
import { ThemeProvider } from "@b/components/theme-provider";
import { Poppins } from "next/font/google";
import { FooterSection } from "@b/_customComponents/_app/FooterSection";
import Header from "@b/_customComponents/_app/Header";
import "./globals.css";
import Script from "next/script";
import CustomCursor from "@b/components/CustomCursor";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://balajiudayagiri.vercel.app"),
  title: "Balaji Udayagiri",
  referrer: "origin",
  description:
    "Front-End Lead Engineer & AI Integration Expert, pioneering AI-powered web solutions with expertise in React, Next.js, and TypeScript.",
  keywords: [
    "portfolio",
    "Balaji Udayagiri",
    "Balaji Udayagiri portfolio",
    "front-end engineer",
    "web developer portfolio",
    "React expert",
    "Next.js developer",
    "TypeScript specialist",
    "UI/UX design",
    "software engineer",
    "AI integration",
    "modern web development",
    "front end development",
    "JavaScript programmer",
    "responsive design",
    "innovative web solutions",
    "digital transformation",
    "accessible web design",
    "SEO friendly design",
    "machine learning",
    "deep learning",
    "Node.js developer",
    "performance optimization",
    "user interface design",
    "cutting edge technology",
    "creative portfolio",
    "tech leader",
    "AI web developer",
    "full-stack development",
    "web accessibility expert",
    "React.js consultant",
    "TypeScript development services",
    "AI integration specialist",
    "web performance optimization",
    "Progressive Web Apps",
    "serverless architecture",
    "microservices development",
  ],
  authors: [{ name: "Balaji Udayagiri" }],
  creator: "Balaji Udayagiri",
  publisher: "Balaji Udayagiri",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://balajiudayagiri.vercel.app",
    siteName: "Balaji Udayagiri",
    title: "Balaji Udayagiri",
    description:
      "Front-End Lead Engineer & AI Integration Expert, pioneering AI-powered web solutions with expertise in React, Next.js, and TypeScript.",
    // images: [
    //   {
    //     url: "/og-image.png",
    //     width: 1200,
    //     height: 630,
    //     alt: "Balaji Udayagiri",
    //   },
    // ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@yourtwitterhandle",
    creator: "@yourtwitterhandle",
    title: "Balaji Udayagiri - Front-End Lead Engineer & AI Integration Expert",
    description:
      "Front-End Lead Engineer at PureCode Software, pioneering AI-powered web solutions with expertise in React, Next.js, and TypeScript.",
    // images: ["/twitter-image.png"],
  },
  verification: {
    google: "E7ho_vNUknF8hItDFVg17XuZlAHgVZBnI3R8LsGy35Y",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  alternates: {
    canonical: "https://balajiudayagiri.vercel.app",
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
    other: [
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        url: "/favicon-32x32.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        url: "/favicon-16x16.png",
      },
    ],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" type="image/x-icon" />
        <link
          rel="icon"
          href="/favicon-16x16.png"
          sizes="16x16"
          type="image/png"
        />
        <link
          rel="icon"
          href="/favicon-32x32.png"
          sizes="32x32"
          type="image/png"
        />
        <link
          rel="apple-touch-icon"
          href="/apple-touch-icon.png"
          sizes="180x180"
          type="image/png"
        />
        <link
          rel="icon"
          href="/android-chrome-192x192.png"
          sizes="192x192"
          type="image/png"
        />
        <link
          rel="icon"
          href="/android-chrome-512x512.png"
          sizes="512x512"
          type="image/png"
        />
        <meta name="portfolio" content="Balaji Udayagiri Portfolio" />
        {/* <meta name="google-site-verification" content="82b34b73d8e2d162" /> */}
        <meta
          name="google-site-verification"
          content="IufNjx1CiqN11ZuMQiWU7aitWu_JW5SZ7UN5AY5z9eg"
        />
        {/* Add Structured Data (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "http://schema.org",
              "@type": "WebSite",
              "@id": "https://balajiudayagiri.vercel.app/#website",
              name: "Balaji Udayagiri",
              description: "Front-End Lead Engineer & AI Integration Expert",
              url: "https://balajiudayagiri.vercel.app",
              author: {
                "@type": "Person",
                name: "Balaji Udayagiri",
                image: "https://balajiudayagiri.vercel.app/images/myphoto.jpg",
                sameAs: [
                  "https://www.linkedin.com/in/balajiudayagiri/",
                  "https://www.twitter.com/balaji_udy",
                ],
              },
              knowsAbout: [
                "React.js",
                "Next.js",
                "TypeScript",
                "AI Integration",
                "Web Development",
                "Frontend Architecture",
              ],
              inLanguage: "en-US",
              potentialAction: {
                "@type": "SearchAction",
                target:
                  "https://balajiudayagiri.vercel.app/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
              mainEntity: {
                "@type": "ItemList",
                itemListElement: [
                  {
                    "@type": "SiteNavigationElement",
                    position: 1,
                    name: "Work",
                    description: "Professional work experience and portfolio",
                    url: "https://balajiudayagiri.vercel.app/work",
                  },
                  // {
                  //   "@type": "SiteNavigationElement",
                  //   position: 2,
                  //   name: "Projects",
                  //   description:
                  //     "Showcase of personal and professional projects",
                  //   url: "https://balajiudayagiri.vercel.app/projects",
                  // },
                  {
                    "@type": "SiteNavigationElement",
                    position: 2,
                    name: "Research",
                    description: "Research articles and technical insights",
                    url: "https://balajiudayagiri.vercel.app/research-blogs",
                  },
                  {
                    "@type": "SiteNavigationElement",
                    position: 3,
                    name: "Blogs",
                    description: "Articles and insights on web development",
                    url: "https://balajiudayagiri.vercel.app/blogs",
                  },
                  {
                    "@type": "SiteNavigationElement",
                    position: 4,
                    name: "Contact",
                    description: "Get in touch",
                    url: "https://balajiudayagiri.vercel.app/contact-me",
                  },
                ],
              },
            }),
          }}
        />
        {/* <!-- Google Tag Manager --> */}
        <Script
          id="gtm-script"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-T242VQ9F');`,
          }}
        />
        {/* <!-- End Google Tag Manager --> */}
      </head>
      <body className={`${poppins.className} relative `}>
        {/* <CustomCursor /> */}
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-T242VQ9F"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange>
          <Header />
          {children}
          <FooterSection />
        </ThemeProvider>
      </body>
    </html>
  );
}
