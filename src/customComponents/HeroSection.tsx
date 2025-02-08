"use client";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import balaji from "../../public/images/hero.webp";
import Image from "next/image";
import HeroContent from "./HeroContent";
const HeroHighlight = dynamic(
  () =>
    import("@b/components/ui/hero-highlight").then((mod) => mod.HeroHighlight),
  {
    ssr: false,
  }
);
export function HeroSection() {
  return (
    <HeroHighlight className="h-dvh">
      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="max-w-4xl leading-relaxed lg:leading-snug text-center  mx-auto">
        <div className="z-[-1] h-svh absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <HeroContent />
      </motion.div>
    </HeroHighlight>
  );
}
