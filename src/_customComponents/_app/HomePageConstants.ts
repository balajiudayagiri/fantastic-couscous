import { calculateExperience } from "./utils";
import {
  BookOpen,
  Brain,
  Code,
  Instagram,
  Linkedin,
  Mail,
  Newspaper,
  Rocket,
  Twitter,
  User2,
} from "lucide-react";

export const skills = [
  // Core Technologies
  { name: "HTML5", years: 4 },
  { name: "CSS3", years: 4 },
  { name: "JavaScript", years: 4 },
  { name: "TypeScript", years: 4 },

  // Modern Frameworks & Libraries
  { name: "React.js", years: 4 },
  { name: "Next.js 14", years: 3 },
  { name: "TailwindCSS", years: 3 },
  { name: "SCSS", years: 3 },

  // State Management
  { name: "Redux", years: 3 },
  { name: "Zustand", years: 2 },

  // Animation & UI
  { name: "Framer Motion", years: 2 },
  { name: "GSAP", years: 2 },

  // Testing
  { name: "Jest", years: 3 },
  { name: "Cypress", years: 2 },

  // Build Tools
  { name: "Webpack", years: 3 },
  { name: "Vite", years: 2 },

  // Architecture & Design
  { name: "Design Systems", years: 2 },
  { name: "System Design", years: 2 },
  { name: "Module Federation", years: 2 },
  { name: "Micro-Frontends", years: 2 },

  // Performance & Optimization
  { name: "Web Vitals", years: 2 },
  { name: "Performance", years: 3 },
  { name: "SEO", years: 3 },
  { name: "A11y", years: 2 },

  // Modern Web Concepts
  { name: "Server Components", years: 2 },
  { name: "Edge Runtime", years: 1 },
  { name: "Streaming SSR", years: 2 },
  { name: "PWA", years: 2 },

  // Development Practices
  { name: "CI/CD", years: 2 },
  { name: "Web Workers", years: 1 },
  { name: "Atomic Design", years: 2 },
  { name: "Team Leadership", years: 2 },
];

export const skillCategories = [
  {
    title: "Core Stack",
    skills: skills.slice(0, 8),
    gradient: "from-[#FF6B6B] to-[#4ECDC4]",
  },
  {
    title: "State & Animation",
    skills: skills.slice(8, 12),
    gradient: "from-[#A8E6CF] to-[#3D84A8]",
  },
  {
    title: "Architecture",
    skills: skills.slice(12, 20),
    gradient: "from-[#FFD93D] to-[#FF6B6B]",
  },
  {
    title: "Modern Web",
    skills: skills.slice(20),
    gradient: "from-[#6C5CE7] to-[#a363f5]",
  },
];

export const startDate = new Date("2020-11-01");

export const stats = [
  {
    label: "Years Experience",
    value: calculateExperience(startDate),
    icon: Code,
    description: "Building scalable web applications",
  },
  {
    label: "Products Enhanced",
    value: "5+",
    icon: Rocket,
    description: "Enterprise-scale solutions delivered",
  },
  {
    label: "Team Members Led",
    value: "8",
    icon: User2,
    description: "Mentored & guided development teams",
  },
];

export const experiences = [
  {
    title: "Front End Lead Engineer",
    company: "PureCode AI",
    period: "October 2024 - Present",
    responsibilities: [
      "Lead development of AI-powered platform A simple Prompt  to production code",
      "Guide team in React.js, Next.js, TypeScript, and Tailwind CSS implementation",
      "Drive technical architecture and best practices",
      "Mentor team members and foster collaborative environment",
    ],
    gradient: "from-[#FF6B6B] to-[#4ECDC4]",
    link: "/work",
  },
  {
    title: "Software Engineer",
    company: "PureCode AI",
    period: "April 2023 - October 2024",
    responsibilities: [
      "Developed core features of web application platform",
      "Implemented modern front-end technologies",
      "Collaborated on AI integration features",
    ],
    gradient: "from-[#A8E6CF] to-[#3D84A8]",
    link: "/work",
  },
  {
    title: "Associate Application Developer",
    company: "Armorize Technology Solutions",
    period: "November 2020 - April 2023",
    responsibilities: [
      "Built responsive web applications",
      "Worked with Java and modern CSS technologies",
      "Contributed to application architecture and development",
    ],
    gradient: "from-[#FFD93D] to-[#FF6B6B]",
    link: "/work",
  },
];

export const socialLinks = [
  // {
  //   name: "GitHub",
  //   url: "https://github.com/yourusername",
  //   icon: Github,
  // },
  {
    name: "LinkedIn",
    url: process.env.LINKEDIN_URL,
    icon: Linkedin,
  },
  {
    name: "Twitter",
    url: process.env.TWITTER_URL,
    icon: Twitter,
  },
  {
    name: "Instagram Profile",
    url: process.env.INSTAGRAM_URL,
    icon: Instagram,
  },
  {
    name: "Email",
    url: `mailto:${process.env.EMAIL}`,
    icon: Mail,
  },
];

export const footerLinks = [
  {
    title: "Projects",
    links: [
      {
        name: "README Generator",
        url: "https://empyreanui-core.vercel.app/readme",
      },
      {
        name: "AI README",
        url: "https://empyreanui-core.vercel.app/readme-ai",
      },
      {
        name: "AIJsDocs",
        url: "https://empyreanui-core.vercel.app/jsdoc-ai",
      },
      {
        name: "EmpyreanUI Blogs",
        url: "https://empyreanui-core.vercel.app/blogs",
      },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Documentation", url: "/docs" },
      { name: "Blog", url: "/blogs" },
      { name: "Privacy Policy", url: "/terms" },
      { name: "Projects", url: "/projects" },
      { name: "Research Blogs", url: "/research-blogs" },

      // { name: "Terms of Service", url: "#" },
    ],
  },
];

export const _socialLinks = [
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

export const projects = [
  {
    title: "README Generator",
    description:
      "Create stunning README files effortlessly with our powerful generator. Transform your project documentation into professional and eye-catching presentations.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "AI Integration"],
    link: "https://empyreanui-core.vercel.app/readme",
    icon: BookOpen,
    gradient: "from-[#FF6B6B] to-[#4ECDC4]",
  },
  {
    title: "AI README Generator",
    description:
      "Leverage the power of AI to generate professional README files in seconds. Streamline your documentation process with intelligent content generation.",
    tech: ["OpenAI", "Next.js", "React", "TailwindCSS"],
    link: "https://empyreanui-core.vercel.app/readme-ai",
    icon: Brain,
    gradient: "from-[#A8E6CF] to-[#3D84A8]",
  },
  {
    title: "AIJsDocs Generator",
    description:
      "Generate professional JSDoc documentation for your code instantly using AI. Enhance code maintainability with automated documentation.",
    tech: ["AI", "JavaScript", "Documentation", "Automation"],
    link: "https://empyreanui-core.vercel.app/jsdoc-ai",
    icon: Code,
    gradient: "from-[#FFD93D] to-[#FF6B6B]",
  },
  {
    title: "EmpyreanUI Blogs",
    description:
      "Discover the latest news, tips, and insights from our experts. A platform for sharing knowledge and staying updated with the newest trends.",
    tech: ["Next.js", "MDX", "Content Management", "SEO"],
    link: "https://empyreanui-core.vercel.app/blogs",
    icon: Newspaper,
    gradient: "from-[#6C5CE7] to-[#a363f5]",
  },
];
