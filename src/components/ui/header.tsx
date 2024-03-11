// components/Header.js
import React from "react";
import { ModeToggle } from "@components/modeToggle";
import Link from "next/link";
import { Menu } from "lucide-react"; // Import Menu icon from lucide-react
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@components/drawer";
import { Button } from "@components/button";

function Header() {
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    // Add more links as needed
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div
        className={
          "container mx-auto flex justify-between items-center shadow-md py-4 px-6"
        }>
        {/* Logo or app name can go here */}
        <Link href="/">BU</Link>

        {/* Hamburger menu icon for mobile */}
        <div className="lg:hidden p-2 focus:outline-none">
          <Drawer>
            <DrawerTrigger>Open</DrawerTrigger>
            <DrawerContent className="h-[50dvh]">
              <DrawerHeader>
                <DrawerTitle>Balaji Udayagiri</DrawerTitle>
              </DrawerHeader>
              <div className="flex flex-col p-5">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 py-2 px-4">
                    {link.label}
                  </Link>
                ))}
              </div>
              <DrawerFooter>
                <Button>Submit</Button>
                <DrawerClose>
                  <Button variant="outline">Cancel</Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>

        {/* Navigation links */}
        <nav className="hidden lg:flex space-x-4">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mode toggle */}
        <ModeToggle />
      </div>
    </header>
  );
}

export default Header;
