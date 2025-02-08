"use client";
import React from "react";
import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import { Button } from "@b/components/ui/button";

// FadeIn animation variants
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const socialLinks = [
  { icon: Linkedin, href: "https://linkedin.com/in/yourusername" },
];

export function HeroContent() {
  return (
    <div className="relative  min-h-[120dvh] flex items-center justify-center overflow-hidden py-20 sm:py-32 lg:pb-32 xl:pb-36">
      <div className="absolute inset-0 flex max-md:flex-col">
        <div className=" h-full w-1/2 bg-black">
          <svg
            width="675"
            height="675"
            viewBox="0 0 675 675"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mandala w-[80vmin] h-[80vmin]"
            style={{
              color: "currentColor",
              fill: "hsl(var(--primary) / 0.4)",
              animation: "spin 150s linear infinite",
            }}>
            <defs>
              <path
                d="M337.5,337.5 m-320,0 a320,320 0 1,1 640,0 a320,320 0 1,1 -640,0"
                id="circle1"></path>
              <path
                d="M337.5,337.5 m-280,0 a280,280 0 1,1 560,0 a280,280 0 1,1 -560,0"
                id="circle2"></path>
              <path
                d="M337.5,337.5 m-240,0 a240,240 0 1,1 480,0 a240,240 0 1,1 -480,0"
                id="circle3"></path>
              <path
                d="M337.5,337.5 m-200,0 a200,200 0 1,1 400,0 a200,200 0 1,1 -400,0"
                id="circle4"></path>
              <path
                d="M337.5,337.5 m-160,0 a160,160 0 1,1 320,0 a160,160 0 1,1 -320,0"
                id="circle5"></path>
            </defs>
            <text dy="70" textLength="2010">
              <textPath textLength="2010" href="#circle1">
                &nbsp;&nbsp;&nbsp;/<tspan>/</tspan>/<tspan>/</tspan>/{" "}
                <tspan>/</tspan>/<tspan>/</tspan>/<tspan>/</tspan>/{" "}
                <tspan>/</tspan>&nbsp;&nbsp;&nbsp;/<tspan>/</tspan>/{" "}
                <tspan>/</tspan>/<tspan>/</tspan>/<tspan>/</tspan>/{" "}
                <tspan>/</tspan>/<tspan>/</tspan>&nbsp;&nbsp;&nbsp;/{" "}
                <tspan>/</tspan>/<tspan>/</tspan>/<tspan>/</tspan>/{" "}
                <tspan>/</tspan>/<tspan>/</tspan>/<tspan>/</tspan>{" "}
                &nbsp;&nbsp;&nbsp;/<tspan>/</tspan>/<tspan>/</tspan>/{" "}
                <tspan>/</tspan>/<tspan>/</tspan>/<tspan>/</tspan>/{" "}
                <tspan>/</tspan>&nbsp;&nbsp;&nbsp;/<tspan>/</tspan>/{" "}
                <tspan>/</tspan>/<tspan>/</tspan>/<tspan>/</tspan>/{" "}
                <tspan>/</tspan>/<tspan>/</tspan>&nbsp;&nbsp;&nbsp;/{" "}
                <tspan>/</tspan>/<tspan>/</tspan>/<tspan>/</tspan>/{" "}
                <tspan>/</tspan>/<tspan>/</tspan>/<tspan>/</tspan>{" "}
                &nbsp;&nbsp;&nbsp;/<tspan>/</tspan>/<tspan>/</tspan>/{" "}
                <tspan>/</tspan>/<tspan>/</tspan>/<tspan>/</tspan>/{" "}
                <tspan>/</tspan>
              </textPath>
            </text>
            <text dy="70" textLength="1760">
              <textPath textLength="1760" href="#circle2">
                &nbsp;&nbsp;+<tspan>+</tspan>+<tspan>+</tspan>+<tspan>+</tspan>
                &nbsp;&nbsp;+<tspan>+</tspan>+<tspan>+</tspan>+<tspan>+</tspan>
                &nbsp;&nbsp;+<tspan>+</tspan>+<tspan>+</tspan>+<tspan>+</tspan>
                &nbsp;&nbsp;+<tspan>+</tspan>+<tspan>+</tspan>+<tspan>+</tspan>
                &nbsp;&nbsp;+<tspan>+</tspan>+<tspan>+</tspan>+<tspan>+</tspan>
                &nbsp;&nbsp;+<tspan>+</tspan>+<tspan>+</tspan>+<tspan>+</tspan>
                &nbsp;&nbsp;+<tspan>+</tspan>+<tspan>+</tspan>+<tspan>+</tspan>
              </textPath>
            </text>
            <text dy="70" textLength="1507">
              <textPath textLength="1507" href="#circle3">
                &lbrace;&lbrace;<tspan>&lbrace;</tspan>&lbrace;&nbsp;
                <tspan>&rbrace;</tspan>&rbrace;&nbsp;&nbsp;&lbrace;&lbrace;
                <tspan>&lbrace;</tspan>&lbrace;&nbsp;<tspan>&rbrace;</tspan>
                &rbrace;&nbsp;&nbsp;&lbrace;&lbrace;<tspan>&lbrace;</tspan>
                &lbrace;&nbsp;<tspan>&rbrace;</tspan>
                &rbrace;&nbsp;&nbsp;&lbrace;&lbrace;<tspan>&lbrace;</tspan>
                &lbrace;&nbsp;<tspan>&rbrace;</tspan>
                &rbrace;&nbsp;&nbsp;&lbrace;&lbrace;<tspan>&lbrace;</tspan>
                &lbrace;&nbsp;<tspan>&rbrace;</tspan>&rbrace;&nbsp;&nbsp;
              </textPath>
            </text>
            <text dy="70" textLength="1257">
              <textPath textLength="1257" href="#circle4">
                &nbsp;&nbsp;&nbsp;../../ &nbsp;&nbsp;&nbsp;../../
                &nbsp;&nbsp;&nbsp;../../ &nbsp;&nbsp;&nbsp;../../
                &nbsp;&nbsp;&nbsp;../../ &nbsp;&nbsp;&nbsp;../../
                &nbsp;&nbsp;&nbsp;../../
              </textPath>
            </text>
            <text dy="70" textLength="1005">
              <textPath textLength="1005" href="#circle5">
                &lt;&gt;&lt;/&gt;<tspan>&lt;&gt;</tspan>&lt;/&gt;
                <tspan>&lt;&gt;</tspan>&lt;/&gt;<tspan>&lt;&gt;</tspan>&lt;/&gt;
                <tspan>&lt;&gt;</tspan>&lt;/&gt;<tspan>&lt;&gt;</tspan>&lt;/&gt;
                <tspan>&lt;&gt;</tspan>&lt;/&gt;<tspan>&lt;&gt;</tspan>&lt;/&gt;
                <tspan>&lt;&gt;</tspan>&lt;/&gt;<tspan>&lt;&gt;</tspan>&lt;/&gt;
                <tspan>&lt;&gt;</tspan>&lt;/&gt;<tspan>&lt;&gt;</tspan>&lt;/&gt;
                <tspan>&lt;&gt;</tspan>&lt;/&gt;<tspan>&lt;&gt;</tspan>&lt;/&gt;
                <tspan>&lt;&gt;</tspan>&lt;/&gt;
              </textPath>
            </text>
          </svg>
        </div>
        <div className=" h-full w-1/2 bg-[url('/images/myphoto.jpg')] bg-cover bg-center bg-no-repeat"></div>
      </div>
      <motion.div
        className="relative z-20 mx-auto w-4/5 px-6 lg:px-8"
        initial="initial"
        animate="animate"
        variants={{
          animate: { transition: { staggerChildren: 0.1 } },
        }}>
        <div className="text-center lg:text-left lg:mx-0">
          <motion.div variants={fadeIn} className="relative group">
            <span
              className="font-extrabold text-5xl sm:text-6xl md:text-7xl xl:text-8xl 
              bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80
              transition-all duration-500">
              Hi
            </span>
            <h1
              className="font-extrabold text-5xl sm:text-6xl md:text-7xl xl:text-8xl 
              bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80
              transition-all duration-500">
              Balaji <br /> Udayagiri
            </h1>
            <div className="absolute -inset-x-6 -inset-y-4 z-[-1] bg-gradient-to-r from-primary/10 to-transparent blur-2xl" />
          </motion.div>

          <motion.div variants={fadeIn} className="space-y-6">
            <p className="mt-6 text-xl sm:text-2xl md:text-3xl  font-medium">
              Front-End Lead Engineer
            </p>

            <p className="text-lg sm:text-xl md:text-2xl max-w-xl mx-auto lg:mx-0">
              Transforming Figma designs into production-ready code with
              AI-powered solutions
            </p>
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
            className="mt-8 flex gap-6 justify-center lg:justify-start">
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
