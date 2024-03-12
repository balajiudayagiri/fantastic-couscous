// components/Header.js
import React from "react";
import { ModeToggle } from "@components/modeToggle";
import Link from "next/link";
import { Menu, PanelRightClose } from "lucide-react"; // Import Menu icon from lucide-react
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@components/drawer";
import { Avatar, AvatarFallback, AvatarImage } from "@components/avatar";

function Header() {
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    // Add more links as needed
  ];

  return (
    <header className="mx-3 my-6 py-3 w-fit ml-auto  border border-solid border-accent-foreground sticky top-6 z-50 rounded-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-md">
      <div className={"container mx-auto flex items-center gap-6 pr-6 pl-4"}>
        {/* Logo or app name can go here */}
        <Link href="/">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
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
            <Drawer direction="right">
              <DrawerTrigger>
                <Menu />
              </DrawerTrigger>
              <DrawerContent className="h-[100dvh] p-8">
                <DrawerClose>
                  <PanelRightClose />
                </DrawerClose>
                <DrawerHeader>
                  <DrawerTitle>Balaji Udayagiri</DrawerTitle>
                </DrawerHeader>
                <div className="flex flex-col p-5 gap-3">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="hover:bg-accent hover:text-accent-foreground rounded-sm focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 py-2 px-4">
                      {link.label}
                    </Link>
                  ))}
                </div>
                <DrawerFooter></DrawerFooter>
              </DrawerContent>
            </Drawer>
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
  );
}

export default Header;
