"use client";
import clsx from "clsx";
import React from "react";
import { usePathname, useRouter } from "next/navigation";
import { Roboto_Condensed } from "next/font/google";
import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

const roboto_condensed = Roboto_Condensed({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["300", "400", "700"],
});

function Header() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <header
      className={clsx(
        roboto_condensed.className,
        "fixed top-0 z-50 w-full transition-all duration-200 ease-in-out transform translate-y-0",
        "p-0"
      )}>
      <div
        className={clsx(
          "flex items-center justify-between sm:px-8 px-4 py-4",
          "bg-background/40 backdrop-blur-sm border-b"
        )}>
        <nav className="w-full flex items-center justify-between">
          <span className="flex items-center gap-4">
            {pathname === "/" ? null : (
              <ArrowLeft onClick={() => router.back()} />
            )}
            <Link
              aria-label="Home"
              href="/"
              className="font-bold text-xl sm:text-2xl text-gray-300 hover:text-white transition-colors">
              <Home className="size-5" />
            </Link>
          </span>
          <ul className="flex gap-6 text-sm font-medium items-center justify-between">
            <li>
              <Link
                aria-label="Work"
                href="/work"
                className="text-gray-300 hover:text-white transition-colors duration-200 px-2 py-1 relative group">
                Work
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </Link>
            </li>
            <li>
              <Link
                aria-label="Projects"
                href="/projects"
                className="text-gray-300 hover:text-white transition-colors duration-200 px-2 py-1 relative group">
                Projects
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </Link>
            </li>
            <li>
              <Link
                aria-label="Research"
                href="/research-blogs"
                className="text-gray-300 hover:text-white transition-colors duration-200 px-2 py-1 relative group">
                Research
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </Link>
            </li>
            <li>
              <Link
                aria-label="Blogs"
                href="/blogs"
                className="text-gray-300 hover:text-white transition-colors duration-200 px-2 py-1 relative group">
                Blogs
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
