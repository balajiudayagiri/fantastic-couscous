import type { Metadata } from "next";
import { ThemeProvider } from "@b/components/theme-provider";
import Header from "@components/header";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Balaji Udayagiri",
  description: "My portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} dark:bg-dot-white/[0.3] bg-dot-black/[0.3] m-0  relative `}>
        <div className="z-[-1] h-svh absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="relative overflow-y-auto h-svh scroll-styles">
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange>
            <Header />
            {children}
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
}
