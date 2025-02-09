import type { Metadata } from "next";
import { ThemeProvider } from "@b/components/theme-provider";
import { Poppins } from "next/font/google";
import "./globals.css";
import { FooterSection } from "@b/_customComponents/_app/FooterSection";
import { ScrollArea } from "@b/components/ui/scroll-area";
import Header from "@b/customComponents/Header/Header";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://balajiudayagiri.vercel.app"),
  title: {
    template: "%s | Balaji Udayagiri",
    default:
      "Balaji Udayagiri - Front-End Lead Engineer & AI Integration Expert",
  },
  description:
    "Front-End Lead Engineer at PureCode Software, pioneering AI-powered web solutions with expertise in React, Next.js, and TypeScript.",
  keywords: [
    "Front-End Engineer",
    "Lead Developer",
    "AI Integration",
    "React Expert",
    "Next.js Developer",
    "TypeScript Specialist",
    "Web Development",
    "UI/UX Engineer",
    "Full Stack Developer",
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
    title: "Balaji Udayagiri - Front-End Lead Engineer & AI Integration Expert",
    description:
      "Front-End Lead Engineer at PureCode Software, pioneering AI-powered web solutions with expertise in React, Next.js, and TypeScript.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Balaji Udayagiri",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@yourtwitterhandle",
    creator: "@yourtwitterhandle",
    title: "Balaji Udayagiri - Front-End Lead Engineer & AI Integration Expert",
    description:
      "Front-End Lead Engineer at PureCode Software, pioneering AI-powered web solutions with expertise in React, Next.js, and TypeScript.",
    images: ["/twitter-image.png"],
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
      <body className={`${poppins.className} relative `}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange>
          <Header />
          {/* <ScrollArea className="h-screen"> */}
          {children}
          <FooterSection />
          {/* </ScrollArea> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
