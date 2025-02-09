"use client";
import React from "react";
import { motion } from "framer-motion";
import { Instagram, Linkedin, Mail, Twitter } from "lucide-react";
import { Button } from "@b/components/ui/button";
import { TwitterXIcon } from "@b/_icons";
import TechStacksSpinner from "@b/_icons/TechStacksSpinner";

// FadeIn animation variants
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const socialLinks = [
  {
    icon: Linkedin,
    href: process.env.LINKEDIN_URL,
    label: "LinkedIn Profile",
  },
  {
    icon: Instagram,
    href: process.env.INSTAGRAM_URL,
    label: "Instagram Profile",
  },
  {
    icon: Twitter,
    href: process.env.TWITTER_URL,
    label: "Twitter Profile",
  },
  {
    icon: Mail,
    href: `mailto:${process.env.EMAIL}`,
    label: "Send Email",
    isEmail: true,
  },
];

export function HeroContent() {
  return (
    <div className="relative lg:min-h-[120dvh] min-h-screen bg-black flex lg:items-center items-end justify-center overflow-hidden py-20 sm:py-20 lg:pb-32 xl:pb-36">
      <div className="absolute inset-0 flex max-lg:flex-col">
        <div className="h-full max-lg:hidden lg:w-1/2 overflow-visible">
          <TechStacksSpinner />
        </div>
        <div className="relative h-full lg:w-1/2 bg-[url('/images/myphoto.jpg')] bg-cover bg-center bg-no-repeat bg-transparent brightness-75">
          <div className="sm:hidden absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-20" />
        </div>
      </div>
      <motion.div
        className="relative z-20 mx-auto lg:w-4/5 w-full max-lg:h-full px-6 lg:px-8"
        initial="initial"
        animate="animate"
        variants={{
          animate: { transition: { staggerChildren: 0.1 } },
        }}>
        <div className="md:text-center lg:text-left lg:mx-0">
          <motion.div variants={fadeIn} className="relative group">
            <span
              className="font-extrabold text-2xl sm:text-3xl md:text-4xl xl:text-6xl 
              transition-all duration-500">
              <span className="">Hi </span>
              <span className="">I&apos;m</span>
              <h1 className="">
                Balaji <br className="hidden" /> Udayagiri
              </h1>
            </span>
            <span className="text-white/80">
              <p className="mt-2 sm:mt-6 text-sm sm:text-md md:text-xl  font-medium">
                Front-End Lead Engineer
              </p>

              <p className="mt-2 text-sm md:text-md max-w-xl md:mx-auto lg:mx-0">
                Production-ready code with AI-powered solutions
              </p>
            </span>
          </motion.div>

          {/* <motion.div
            variants={fadeIn}
            className="mt-8 flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-ring hover:from-ring hover:to-primary 
                text-primary-foreground transition-all duration-300">
              View Projects
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary/30 hover:border-primary/50
                hover:bg-gradient-to-r hover:from-primary/10 hover:to-transparent">
              Contact Me
            </Button>
          </motion.div> */}

          <motion.div
            variants={fadeIn}
            className="mt-8 flex gap-6 justify-start md:justify-center lg:justify-start text-white">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}>
                <social.icon className="h-7 w-7" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-20" />
    </div>
  );
}
