import React from "react";
import balaji from "../../public/images/hero.webp";
import Image from "next/image";
import clsx from "clsx";
import { Roboto_Condensed } from "next/font/google";

const roboto_condensed = Roboto_Condensed({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
function HeroContent() {
  return (
    <section
      className={clsx(
        "flex items-center justify-between md:min-h-screen p-8 flex-col md:flex-row max-md:pt-24 gap-6"
      )}>
      <div className="flex-1 text-center md:text-left space-y-4 md:space-y-6 md:w-1/2">
        <header>
          <h2 className="text-gray-400 text-lg md:text-xl">Hi, I am</h2>
          <h1
            className={clsx(
              "font-bold uppercase text-4xl md:text-4xl lg:text-6xl text-primary/80",
              roboto_condensed.className
            )}>
            Balaji Udayagiri
          </h1>
        </header>
        <p className="text-gray-400 text-sm md:text-base lg:text-lg max-w-md mx-auto md:mx-0">
          A passionate front-end developer focused on building accessible and
          user-friendly websites.
        </p>
        <nav className="flex justify-center md:justify-start space-x-4 mt-6">
          <div
            // href="#contact"
            className="bg-primary text-black px-6 py-2 rounded-full shadow-lg transition-transform hover:scale-105">
            Contact Me
          </div>
        </nav>
      </div>
      <figure className="rounded-xl overflow-hidden max-md:w-2/5 max-sm:w-full md:w-1/2 aspect-square">
        <Image
          src={balaji.src}
          width={balaji.width}
          height={balaji.height}
          alt="Balaji Udayagiri"
          className="object-cover w-full h-full "
        />
      </figure>
    </section>
  );
}

export default HeroContent;
