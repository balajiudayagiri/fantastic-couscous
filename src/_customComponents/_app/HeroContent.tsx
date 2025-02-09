"use client";
import React from "react";
import { motion } from "framer-motion";
import { Instagram, Linkedin, Mail, Twitter } from "lucide-react";
import { Button } from "@b/components/ui/button";
import { TwitterXIcon } from "@b/_icons";

// FadeIn animation variants
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const socialLinks = [
  { icon: Linkedin, href: "https://linkedin.com/in/yourusername" },
  { icon: Instagram, href: "https://linkedin.com/in/yourusername" },
  { icon: Twitter, href: "https://linkedin.com/in/yourusername" },
  { icon: Mail, href: "https://linkedin.com/in/yourusername" },
];

export function HeroContent() {
  return (
    <div className="relative lg:min-h-[120dvh] min-h-screen bg-black flex lg:items-center items-end justify-center overflow-hidden py-20 sm:py-20 lg:pb-32 xl:pb-36">
      <div className="absolute inset-0 flex max-lg:flex-col">
        <div className="h-full max-lg:hidden lg:w-1/2 overflow-visible">
          <svg
            width="675"
            height="675"
            viewBox="0 0 675 675"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mandala w-[80vmin] h-[80vmin]"
            style={{
              color: "currentColor",
              fill: "hsl(var(--primary) / 0.3)",
              animation: "spin 170s linear infinite",
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
                &nbsp;&nbsp;&nbsp;/<tspan>/</tspan>
                {"/***/"}
                <tspan>/</tspan>/ <tspan>/</tspan>/<tspan>/</tspan>
                {"/***/"}
                <tspan>/</tspan>/ <tspan>/</tspan>&nbsp;&nbsp;&nbsp;/
                <tspan>/</tspan>/ <tspan>/</tspan>/<tspan>/</tspan>/
                <tspan>/</tspan>/ <tspan>/</tspan>/<tspan>/</tspan>
                &nbsp;&nbsp;&nbsp;/ <tspan>/</tspan>/<tspan>/</tspan>/
                <tspan>/</tspan>/ <tspan>/</tspan>
                {"/***/"}
                <tspan>/</tspan>/<tspan>/</tspan> &nbsp;&nbsp;&nbsp;/
                <tspan>/</tspan>/<tspan>/</tspan>/ <tspan>/</tspan>/
                <tspan>/</tspan>/<tspan>/</tspan>/ <tspan>/</tspan>
                &nbsp;&nbsp;&nbsp;/
                <tspan>/</tspan>/ <tspan>/</tspan>/<tspan>/</tspan>/
                <tspan>/</tspan>/ <tspan>/</tspan>
                {"/***/"}
                <tspan>/</tspan>
                &nbsp;&nbsp;&nbsp;/ <tspan>/</tspan>/<tspan>/</tspan>/
                <tspan>/</tspan>/ <tspan>/</tspan>/<tspan>/</tspan>/
                <tspan>/</tspan> &nbsp;&nbsp;&nbsp;/<tspan>/</tspan>/
                <tspan>/</tspan>/ <tspan>/</tspan>/<tspan>/</tspan>/
                <tspan>/</tspan>/ <tspan>/</tspan>
              </textPath>
            </text>
            <text dy="70" textLength="1507">
              <textPath textLength="1507" href="#circle3">
                &nbsp;=&gt;<tspan>+=</tspan>-=<tspan>==</tspan>=
                <tspan>||</tspan>&amp;&amp;<tspan>{}</tspan>[]
                <tspan>()</tspan>$#<tspan>@/</tspan>\*
                <tspan>%</tspan>++<tspan>--</tspan>**
                <tspan>~/</tspan>!&lt;<tspan>&gt;</tspan>!=
                <tspan>??</tspan>?.<tspan>...</tspan>:=
                <tspan>=&gt;</tspan>|&gt;<tspan>&lt;|</tspan>&nbsp;=&gt;
                <tspan>+=</tspan>-=<tspan>==</tspan>=<tspan>||</tspan>&amp;&amp;
                <tspan>{}</tspan>[]
                <tspan>()</tspan>$#<tspan>@/</tspan>\*
                <tspan>%</tspan>++<tspan>--</tspan>**
                <tspan>~/</tspan>!&lt;<tspan>&gt;</tspan>!=
                <tspan>??</tspan>?.<tspan>...</tspan>:=
                <tspan>=&gt;</tspan>|&gt;<tspan>&lt;|</tspan>
              </textPath>
            </text>
            <text dy="70" textLength="1860">
              <textPath textLength="1860" href="#circle2">
                {/* HTML5&nbsp;<tspan>CSS3&nbsp;</tspan>
                JavaScript&nbsp;<tspan>TypeScript&nbsp;</tspan>
                React&nbsp;<tspan>Next.js&nbsp;</tspan>
                TailwindCSS&nbsp;<tspan>SCSS&nbsp;</tspan>
                Redux&nbsp;<tspan>Zustand&nbsp;</tspan>
                Framer&nbsp;<tspan>GSAP&nbsp;</tspan>
                <tspan>Cypress&nbsp;</tspan>
                Webpack&nbsp;<tspan>Vite&nbsp;</tspan>
                SEO&nbsp;<tspan>A11y&nbsp;</tspan>
                PWA&nbsp;<tspan>SPA&nbsp;</tspan> Architecture&nbsp;
                <tspan>System Design&nbsp;</tspan>
                React&nbsp;<tspan>Next.js 14&nbsp;</tspan>
                TypeScript&nbsp;<tspan>Module Federation&nbsp;</tspan>
                Micro-Frontends&nbsp;<tspan>Design Systems&nbsp;</tspan>
                Server Components&nbsp;<tspan>Client Components&nbsp;</tspan>
                Performance&nbsp;<tspan>Web Vitals&nbsp;</tspan>
                State Machines&nbsp;<tspan>Atomic Design&nbsp;</tspan>
                CI/CD&nbsp;<tspan>Web Workers&nbsp;</tspan>
                Edge Runtime&nbsp;<tspan>Streaming SSR&nbsp;</tspan>
                RSC&nbsp;<tspan>Islands Architecture&nbsp;</tspan> */}
                &nbsp;Next.js 14&nbsp;<tspan>React 18&nbsp;</tspan>
                TypeScript&nbsp;<tspan>Turborepo&nbsp;</tspan>
                TailwindCSS&nbsp;<tspan>Shadcn/ui&nbsp;</tspan>
                Tanstack Query&nbsp;<tspan>Zustand&nbsp;</tspan>
                Framer Motion&nbsp;<tspan>GSAP&nbsp;</tspan>
                System Design&nbsp;<tspan>Vitest&nbsp;</tspan>
                Vite&nbsp;<tspan>SWC&nbsp;</tspan>
                Storybook&nbsp;<tspan>Radix UI&nbsp;</tspan>
                tRPC&nbsp;<tspan>Zod&nbsp;</tspan>
                ESLint&nbsp;<tspan>Prettier&nbsp;</tspan>
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
        <div className="relative sm:h-full h-2/3 lg:w-1/2 bg-[url('/images/myphoto.jpg')] bg-cover bg-center bg-no-repeat bg-transparent">
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

              <p className="mt-2 text-sm sm:text-md md:text-xl max-w-xl md:mx-auto lg:mx-0">
                Transforming Figma designs into production-ready code with
                AI-powered solutions
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
