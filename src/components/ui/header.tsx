import React from "react";
import { ModeToggle } from "@components/modeToggle";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@components/avatar";
import { Sheet, SheetContent, SheetTrigger } from "./sheet";
import { Sacramento } from "next/font/google";
import Clock from "@b/app/Clock";
const sacramento = Sacramento({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dancingScript",
  weight: ["400"],
});
function Header() {
  const navLinks = [
    { href: "/articles", label: "Articles" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact Me" },
  ];

  return (
    <div className="xl:px-36 lg:px-16 md:px-8 sm:px-5 px-4 h-20 py-3 fixed w-full justify-between top-0 z-50 flex items-center backdrop-blur-sm dark:bg-black/80 bg-white/60">
      <Link href="/">
        <h1
          className={`${sacramento.className} font-thin md:text-3xl text-nowrap flex items-center gap-3 text-2xl`}>
          Balaji <span className="sm:block hidden">Udayagiri</span>
        </h1>
      </Link>
      <span className="md:block hidden text-yellow-500 font-semibold text-sm">
        <Clock />
      </span>
      <header className="mx-3 py-2 w-fit ml-auto mr-1">
        <div
          className={
            "container mx-auto flex items-center gap-6 sm:pr-6 pr-3 pl-4"
          }>
          {/* Logo or app name can go here */}
          <Link
            href="/"
            className="hover:scale-125 transition cursor-pointer border-solid border-2 rounded-full outline outline-2 ">
            <Avatar>
              <AvatarImage src={"/images/balaji.jpg"} alt="BU" />
              <AvatarFallback>BU</AvatarFallback>
            </Avatar>
            {/* <img src={pic} alt="BU" height={45} width={45} /> */}
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

            <div className="hidden sm:block h-[20px]">
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
