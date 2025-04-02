"use client";

import clsx from "clsx";
import React from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Home, Menu } from "lucide-react";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerClose,
  DrawerTitle,
  DrawerHeader,
  DrawerDescription,
  DrawerFooter,
} from "../../components/ui/drawer";

function Header() {
  const pathname = usePathname();
  const router = useRouter();

  const navLinks = <></>;

  return (
    <header
      className={clsx(
        // roboto_condensed.className,
        "fixed top-0 z-50 w-full transition-all duration-200 ease-in-out transform translate-y-0",
        "p-0"
      )}>
      <div
        className={clsx(
          "flex items-center justify-between sm:px-8 px-4 py-4",
          "bg-background/40 backdrop-blur-sm border-b"
        )}>
        <div
          aria-label="Breadcrumb"
          className="w-full flex items-center justify-between">
          <span className="flex items-center gap-4">
            {pathname === "/" ? null : (
              <ArrowLeft
                aria-label="Go back"
                role="button"
                tabIndex={0}
                className="text-gray-300 hover:text-white transition-colors"
                onClick={() => router.back()}
              />
            )}
            <Link
              title="Home"
              aria-label="Home"
              href="/"
              className="font-bold text-xl sm:text-2xl text-gray-300 hover:text-white transition-colors">
              <Home className="size-5" />
            </Link>
          </span>

          {/* Desktop Navigation */}
          <nav aria-label="breadcrumb">
            <ul className="hidden sm:flex gap-6 text-sm font-medium items-center">
              <li title="Work">
                <Link
                  aria-label="Navigate to Work section"
                  href="/work"
                  className="text-gray-300 hover:text-white transition-colors duration-200 px-2 py-1 relative group">
                  Work
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </Link>
              </li>
              <li title="Projects">
                <Link
                  aria-label="Navigate to Projects section"
                  href="/projects"
                  className="text-gray-300 hover:text-white transition-colors duration-200 px-2 py-1 relative group">
                  Projects
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </Link>
              </li>
              <li title="Research">
                <Link
                  aria-label="Navigate to Research Blogs section"
                  href="/research-blogs"
                  className="text-gray-300 hover:text-white transition-colors duration-200 px-2 py-1 relative group">
                  Research
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </Link>
              </li>
              <li title="Blogs">
                <Link
                  aria-label="Navigate to Blogs section"
                  href="/blogs"
                  className="text-gray-300 hover:text-white transition-colors duration-200 px-2 py-1 relative group">
                  Blogs
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </Link>
              </li>
              <li title="Contact Me">
                <Link
                  aria-label="Navigate to Blogs section"
                  href="/contact-me"
                  className="text-gray-300 hover:text-white transition-colors duration-200 px-2 py-1 relative group">
                  Contact Me
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </Link>
              </li>
            </ul>
          </nav>
          {/* Mobile Navigation using Drawer */}
          <div className="sm:hidden">
            <Drawer>
              <DrawerTrigger asChild>
                <button
                  title="Open menu"
                  aria-label="Open menu"
                  className="text-gray-300 hover:text-white transition-colors">
                  <Menu />
                </button>
              </DrawerTrigger>
              <DrawerContent className="min-h-[65%]">
                <DrawerHeader>
                  <DrawerTitle>Menu</DrawerTitle>
                  <DrawerDescription>
                    There is Lot more to explore
                  </DrawerDescription>
                </DrawerHeader>
                <div className="p-4">
                  <ul
                    aria-label="Main Navigation"
                    className={clsx(
                      "flex flex-col gap-4 text-base font-medium",
                      "[&>li]:px-3 [&>li]:py-2 [&>li]:w-full" //stules added to its children
                    )}>
                    <Link
                      aria-label="Navigate to Work section"
                      href="/work"
                      className="text-gray-300 hover:text-white transition-colors duration-200 px-2 py-1 relative group">
                      <DrawerClose className="block w-full">
                        <li title="Work" className="w-full">
                          Work
                          <span className="absolute inset-x-0 bottom-0 h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                        </li>
                      </DrawerClose>
                    </Link>
                    <Link
                      aria-label="Navigate to Projects section"
                      href="/projects"
                      className="text-gray-300 hover:text-white transition-colors duration-200 px-2 py-1 relative group">
                      <DrawerClose className="block w-full">
                        <li title="Projects" className="w-full">
                          Projects
                          <span className="absolute inset-x-0 bottom-0 h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                        </li>
                      </DrawerClose>
                    </Link>
                    <Link
                      aria-label="Navigate to Research Blogs section"
                      href="/research-blogs"
                      className="text-gray-300 hover:text-white transition-colors duration-200 px-2 py-1 relative group">
                      <DrawerClose className="block w-full">
                        <li title="Research" className="w-full">
                          Research
                          <span className="absolute inset-x-0 bottom-0 h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                        </li>
                      </DrawerClose>
                    </Link>
                    <Link
                      aria-label="Navigate to Blogs section"
                      href="/blogs"
                      className="text-gray-300 hover:text-white transition-colors duration-200 px-2 py-1 relative group">
                      <DrawerClose className="block w-full">
                        <li title="Blogs" className="w-full">
                          Blogs
                          <span className="absolute inset-x-0 bottom-0 h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                        </li>
                      </DrawerClose>
                    </Link>
                    <Link
                      aria-label="Navigate to Contact Me section"
                      href="/contact-me"
                      className="text-gray-300 hover:text-white transition-colors duration-200 px-2 py-1 relative group">
                      <DrawerClose className="block w-full">
                        <li title="Contact Me" className="w-full">
                          Contact Me
                          <span className="absolute inset-x-0 bottom-0 h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                        </li>
                      </DrawerClose>
                    </Link>
                  </ul>
                </div>
                <DrawerFooter>
                  <DrawerClose className="block w-full">
                    <button className="w-full bg-primary/20 py-2 rounded-md">
                      close
                    </button>
                  </DrawerClose>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
