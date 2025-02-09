import type { Metadata } from "next";
import { ThemeProvider } from "@b/components/theme-provider";
import { Poppins } from "next/font/google";
import "./globals.css";
import { FooterSection } from "@b/_customComponents/_app/FooterSection";
import { ScrollArea } from "@b/components/ui/scroll-area";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Balaji Udayagiri - Front-End Lead Engineer & AI Integration Expert",
  description:
    "Front-End Lead Engineer at PureCode Software, pioneering AI-powered web solutions with expertise in React, Next.js, and TypeScript. Transforming digital experiences through innovative development.",
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
    "JavaScript Expert",
    "Balaji Udayagiri",
  ],
  authors: [{ name: "Balaji Udayagiri" }],
  creator: "Balaji Udayagiri",
  publisher: "Balaji Udayagiri",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://balajiudayagiri.dev"),
  openGraph: {
    title: "Balaji Udayagiri - Front-End Lead Engineer & AI Integration Expert",
    description:
      "Revolutionizing web development with AI-powered solutions and cutting-edge technologies",
    url: "https://balajiudayagiri.dev",
    siteName: "Balaji Udayagiri Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png", // Add your OG image
        width: 1200,
        height: 630,
        alt: "Balaji Udayagiri - Front-End Lead Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Balaji Udayagiri - Front-End Lead Engineer",
    description:
      "Transforming web development with AI integration and modern technologies",
    creator: "@yourtwitterhandle", // Add your Twitter handle
    images: ["/twitter-image.png"], // Add your Twitter card image
  },
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
  verification: {
    google: "E7ho_vNUknF8hItDFVg17XuZlAHgVZBnI3R8LsGy35Y", // Add Google verification code
    yandex: "your-yandex-verification-code", // Add Yandex verification code
    yahoo: "your-yahoo-verification-code", // Add Yahoo verification code
  },
  alternates: {
    canonical: "https://balajiudayagiri.dev",
  },
  manifest: "/site.webmanifest", // Add your web manifest file
  icons: {
    icon: [{ url: "/favicon.ico" }, { url: "/icon.png", type: "image/png" }],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} relative `}>
        <ScrollArea className="h-screen">
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange>
            {/* <Header /> */}
            {children}
            <FooterSection />
          </ThemeProvider>
        </ScrollArea>
      </body>
    </html>
  );
}
