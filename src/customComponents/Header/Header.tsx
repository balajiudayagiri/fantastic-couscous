"use client";
import clsx from "clsx";
import React, { useCallback, useEffect, useState, useRef } from "react";
import { Roboto_Condensed } from "next/font/google";
import Link from "next/link";
import { Home } from "lucide-react";

const roboto_condensed = Roboto_Condensed({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["300", "400", "700"],
});

function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isAtTop, setIsAtTop] = useState(true);
  const scrollingTimer = useRef<NodeJS.Timeout>();
  const lastScrollTime = useRef(Date.now());

  const handleScroll = useCallback(
    (e: Event) => {
      const viewport = e.target as HTMLElement;
      const currentScrollY = viewport.scrollTop;
      const now = Date.now();

      // Update last scroll time
      lastScrollTime.current = now;

      // Check if at top
      setIsAtTop(currentScrollY < 20);

      // Determine scroll direction and visibility
      if (currentScrollY > lastScrollY) {
        setIsVisible(false); // Hide when scrolling down
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true); // Show when scrolling up
      }

      setLastScrollY(currentScrollY);

      // Clear existing timer
      if (scrollingTimer.current) {
        clearTimeout(scrollingTimer.current);
      }

      // Set new timer to show header when scrolling stops
      scrollingTimer.current = setTimeout(() => {
        const timeSinceLastScroll = Date.now() - lastScrollTime.current;
        if (timeSinceLastScroll >= 100) {
          // Adjust this value if needed
          setIsVisible(true);
        }
      }, 100);
    },
    [lastScrollY]
  );

  useEffect(() => {
    const viewport = document.querySelector(
      "[data-radix-scroll-area-viewport]"
    ) as HTMLElement;

    if (!viewport) return;

    viewport.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      viewport.removeEventListener("scroll", handleScroll);
      if (scrollingTimer.current) {
        clearTimeout(scrollingTimer.current);
      }
    };
  }, [handleScroll]);

  return (
    <header
      className={clsx(
        roboto_condensed.className,
        "fixed top-0 z-50 w-full transition-all duration-200 ease-in-out transform",
        isVisible ? "translate-y-0" : "-translate-y-full",
        // isAtTop ? "bg-transparent" : "bg-black/80 backdrop-blur-sm border-b",
        "px-4 sm:px-6 md:px-10 py-4"
      )}>
      <div
        className={clsx(
          "w-fit mx-auto flex items-center justify-between  px-8 py-4 ",
          isAtTop
            ? "bg-transparent"
            : "bg-slate-700/40 backdrop-blur-sm border-b shadow-lg shadow-muted",
          "rounded-full"
        )}>
        <nav>
          <ul className="flex gap-6 text-sm font-medium">
            <li>
              <Link
                href="/"
                className="font-bold text-xl sm:text-2xl text-gray-300 hover:text-white transition-colors">
                <Home className="size-4" />
              </Link>
            </li>
            <li>
              <Link
                href={"/work"}
                className="text-gray-300 hover:text-white transition-colors duration-200 px-2 py-1 relative group">
                Work
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </Link>
            </li>
            <li>
              <Link
                href={"/projects"}
                className="text-gray-300 hover:text-white transition-colors duration-200 px-2 py-1 relative group">
                Projects
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </Link>
            </li>
            <li>
              <Link
                href={"/research-blogs"}
                className="text-gray-300 hover:text-white transition-colors duration-200 px-2 py-1 relative group">
                Research
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
