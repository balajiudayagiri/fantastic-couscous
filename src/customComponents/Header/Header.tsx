import clsx from "clsx";
import React from "react";
import { Roboto_Condensed } from "next/font/google";

const roboto_condensed = Roboto_Condensed({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

function Header() {
  return (
    <header
      className={clsx(
        roboto_condensed.className,
        "fixed top-0 z-50 w-full border px-10 py-2"
      )}>
      <div className="flex justify-between">
        <h2 className="font-bold text-2xl text-gray-300">Balaji</h2>
        <section>
          <ul className="flex gap-2">
            <li>Work</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </section>
      </div>
    </header>
  );
}

export default Header;
