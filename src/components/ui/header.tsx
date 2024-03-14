// components/Header.js
import React from "react";
import { ModeToggle } from "@components/modeToggle";
import Link from "next/link";
import { Menu } from "lucide-react"; // Import Menu icon from lucide-react
import { Avatar, AvatarFallback, AvatarImage } from "@components/avatar";
import { Sheet, SheetContent, SheetTrigger } from "./sheet";

function Header() {
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
  ];

  return (
    <div className="xl:mx-36 lg:mx-16 md:mx-8 sm:mx-5 ">
      <header className="mx-3 my-6 py-3 w-fit ml-auto mr-0  sticky top-6 z-50  bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-md">
        <div
          className={
            "container mx-auto flex items-center gap-6 sm:pr-6 pr-3 pl-4"
          }>
          {/* Logo or app name can go here */}
          <Link href="/">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="CN" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </Link>
          <div className="flex align-middle items-center gap-3">
            <div className="sm:hidden">
              {/* Mode toggle */}
              <ModeToggle />
            </div>
            {/* Hamburger menu icon for mobile */}
            <div className="sm:hidden p-2 focus:outline-none">
              <Sheet>
                <SheetTrigger className="h-10 w-10  hover:bg-accent rounded-md flex items-center justify-center">
                  <Menu />
                </SheetTrigger>
                <SheetContent>
                  <div className="flex flex-col py-5 gap-3">
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="hover:bg-accent hover:text-accent-foreground rounded-sm focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 py-2 px-4">
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </SheetContent>
              </Sheet>
            </div>

            {/* Navigation links */}
            <nav className="hidden sm:flex space-x-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-md py-2 px-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground">
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="hidden sm:block">
              {/* Mode toggle */}
              <ModeToggle />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
