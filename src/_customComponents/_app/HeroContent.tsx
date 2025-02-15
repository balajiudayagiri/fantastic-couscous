"use client";
import React from "react";
import { motion } from "framer-motion";
import TechStacksSpinner from "@b/_icons/TechStacksSpinner";
import { _socialLinks } from "./HomePageConstants";

// FadeIn animation variants
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export function HeroContent() {
  return (
    <div
      className="relative lg:min-h-[120dvh] min-h-screen bg-black flex lg:items-center items-end justify-center overflow-hidden py-20 sm:py-20 lg:pb-32 xl:pb-36"
      role="banner"
      aria-labelledby="hero-heading">
      {/* Background container */}
      <div className="absolute inset-0 flex max-lg:flex-col">
        <div className="h-full max-lg:hidden lg:w-1/2 overflow-visible">
          <TechStacksSpinner />
        </div>
        <div
          className="relative h-full lg:w-1/2 bg-[url('/images/myphoto.jpg')] bg-cover bg-center bg-no-repeat bg-transparent brightness-75"
          role="img"
          aria-label="Photo of Balaji Udayagiri">
          <div
            className="sm:hidden absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-20"
            aria-hidden="true"
          />
        </div>
      </div>

      {/* Main Content */}
      <motion.div
        className="relative z-20 mx-auto lg:w-4/5 w-full max-lg:h-full px-6 lg:px-8"
        initial="initial"
        animate="animate"
        variants={{
          animate: { transition: { staggerChildren: 0.1 } },
        }}>
        <div className="md:text-center lg:text-left lg:mx-0">
          <motion.div variants={fadeIn} className="relative group">
            <h1
              id="hero-heading"
              className="font-extrabold text-2xl sm:text-3xl md:text-4xl xl:text-6xl transition-all duration-500">
              <span>Hi </span>
              <span>I&apos;m</span>
              <br className="" />
              Balaji Udayagiri
            </h1>

            <span className="text-white/80">
              <p
                className="mt-2 sm:mt-6 text-sm sm:text-md md:text-xl font-medium"
                aria-label="Job Title and Expertise">
                Frontend Lead Engineer | AI-Powered UI Architect | Next.js
                Expert
              </p>

              <p
                className="mt-2 text-sm md:text-md max-w-xl md:mx-auto lg:mx-0"
                aria-label="Short Description">
                Production-ready code with AI-powered solutions
              </p>
            </span>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={fadeIn}
            className="mt-8 flex gap-6 justify-start md:justify-center lg:justify-start text-white">
            {_socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                title={social.label}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label={`Visit my ${social.label} profile`}>
                <social.icon className="h-7 w-7" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </motion.div>

      <div
        className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-20"
        aria-hidden="true"
      />
    </div>
  );
}
