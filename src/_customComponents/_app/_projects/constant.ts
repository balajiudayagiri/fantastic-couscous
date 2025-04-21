import {
  BookOpen,
  Brain,
  Code,
  Newspaper,
  Github,
  LucideIcon,
} from "lucide-react";

export interface DetailedFeature {
  title: string;
  description: string;
}

export interface TechStack {
  frontend: readonly string[];
  backend: readonly string[];
  devOps: readonly string[];
}

export interface ProjectMetrics {
  performance?: string;
  accessibility?: string;
  seo?: string;
  users?: string;
  stars?: string;
  accuracy?: string;
  articles?: string;
  readers?: string;
}

export interface ProjectInterface {
  title: string;
  summary: string;
  description: string;
  detailedFeatures: readonly DetailedFeature[];
  techStack: TechStack;
  metrics: ProjectMetrics;
  tech: readonly string[];
  link: string;
  github: string;
  documentation: string;
  icon: LucideIcon;
  gradient: string;
  gallery: readonly string[];
}

export const projects = [
  {
    title: "README Generator",
    summary:
      "Create stunning README files effortlessly with our powerful generator.",
    description:
      "A revolutionary documentation tool that transforms the way developers create and maintain README files. Built with modern web technologies and AI capabilities, it streamlines the documentation process while ensuring consistency and professionalism.",
    detailedFeatures: [
      {
        title: "AI-Powered Content Generation",
        description:
          "Utilizes advanced AI models to suggest content and improve writing quality",
      },
      {
        title: "Real-time Preview",
        description:
          "Live markdown preview with instant rendering and formatting feedback",
      },
      {
        title: "Template Library",
        description:
          "Collection of industry-standard templates for various project types",
      },
      {
        title: "Custom Sections",
        description:
          "Flexible section management with drag-and-drop reordering",
      },
    ],
    techStack: {
      frontend: [
        "Next.js 14",
        "TypeScript 5",
        "Tailwind CSS",
        "Radix UI",
        "Framer Motion",
      ],
      backend: ["Node.js", "OpenAI API", "MongoDB"],
      devOps: ["Vercel", "GitHub Actions"],
    },
    metrics: {
      performance: "98/100",
      accessibility: "100/100",
      seo: "100/100",
      users: "1000+",
      stars: "250+",
    },
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "AI Integration"],
    link: "https://empyreanui-core.vercel.app/readme",
    github: "https://github.com/yourusername/readme-generator",
    documentation: "https://docs.empyreanui.com/readme",
    icon: BookOpen,
    gradient: "from-[#FF6B6B] to-[#4ECDC4]",
    gallery: [
      "/projects/readme/dashboard.png",
      "/projects/readme/editor.png",
      "/projects/readme/templates.png",
    ],
  },
  {
    title: "AI README Generator",
    summary: "Leverage AI to generate professional README files instantly.",
    description:
      "An intelligent documentation assistant that understands your project structure and generates comprehensive README files. Powered by advanced language models and code analysis tools.",
    detailedFeatures: [
      {
        title: "Code Analysis",
        description:
          "Automatically analyzes your repository structure and dependencies",
      },
      {
        title: "Smart Suggestions",
        description:
          "AI-powered content recommendations based on project context",
      },
      {
        title: "Multi-language Support",
        description: "Generate documentation in multiple programming languages",
      },
      {
        title: "Git Integration",
        description: "Direct integration with GitHub and GitLab repositories",
      },
    ],
    techStack: {
      frontend: [
        "Next.js 14",
        "TypeScript 5",
        "Tailwind CSS",
        "Radix UI",
        "Framer Motion",
      ],
      backend: ["Node.js", "OpenAI API", "MongoDB"],
      devOps: ["Vercel", "GitHub Actions"],
    },
    metrics: {
      performance: "96/100",
      accessibility: "98/100",
      seo: "100/100",
      users: "500+",
      stars: "150+",
    },
    tech: ["OpenAI", "Next.js", "React", "TailwindCSS"],
    link: "https://empyreanui-core.vercel.app/readme-ai",
    github: "https://github.com/yourusername/ai-readme",
    documentation: "https://docs.empyreanui.com/ai-readme",
    icon: Brain,
    gradient: "from-[#A8E6CF] to-[#3D84A8]",
    gallery: [
      "/projects/ai-readme/main.png",
      "/projects/ai-readme/analysis.png",
      "/projects/ai-readme/output.png",
    ],
  },
  {
    title: "AIJsDocs Generator",
    summary: "Generate professional JSDoc documentation using AI.",
    description:
      "An automated documentation tool that analyzes JavaScript code and generates comprehensive JSDoc comments using AI. Improves code maintainability and team collaboration.",
    detailedFeatures: [
      {
        title: "Intelligent Code Analysis",
        description: "Deep analysis of JavaScript/TypeScript code structure",
      },
      {
        title: "Automated JSDoc Generation",
        description: "AI-powered generation of detailed function documentation",
      },
      {
        title: "Type Inference",
        description: "Smart type detection and documentation",
      },
      {
        title: "Batch Processing",
        description: "Process entire projects or selected files",
      },
    ],
    techStack: {
      frontend: [
        "Next.js 14",
        "TypeScript 5",
        "Tailwind CSS",
        "Radix UI",
        "Framer Motion",
      ],
      backend: ["Node.js", "OpenAI API", "MongoDB"],
      devOps: ["Vercel", "GitHub Actions"],
    },
    metrics: {
      performance: "95/100",
      accuracy: "92%",
      users: "300+",
      stars: "100+",
    },
    tech: ["AI", "JavaScript", "Documentation", "Automation"],
    link: "https://empyreanui-core.vercel.app/jsdoc-ai",
    github: "https://github.com/yourusername/jsdoc-ai",
    documentation: "https://docs.empyreanui.com/jsdoc-ai",
    icon: Code,
    gradient: "from-[#FFD93D] to-[#FF6B6B]",
    gallery: [
      "/projects/jsdoc/editor.png",
      "/projects/jsdoc/preview.png",
      "/projects/jsdoc/settings.png",
    ],
  },
  {
    title: "EmpyreanUI Blogs",
    summary: "A platform for sharing development insights and knowledge.",
    description:
      "A modern technical blog platform built with Next.js and MDX, featuring rich content about web development, AI integration, and software engineering best practices.",
    detailedFeatures: [
      {
        title: "Rich Content",
        description: "Interactive code blocks and live demos",
      },
      {
        title: "Advanced Search",
        description: "AI-powered content search and filtering",
      },
      {
        title: "Newsletter Integration",
        description: "Automated email updates for subscribers",
      },
      {
        title: "Analytics Dashboard",
        description: "Detailed content performance metrics",
      },
    ],
    techStack: {
      frontend: [
        "Next.js 14",
        "TypeScript 5",
        "Tailwind CSS",
        "Radix UI",
        "Framer Motion",
      ],
      backend: ["Node.js", "OpenAI API", "MongoDB"],
      devOps: ["Vercel", "GitHub Actions"],
    },
    metrics: {
      performance: "100/100",
      accessibility: "100/100",
      seo: "100/100",
      articles: "50+",
      readers: "1000+",
    },
    tech: ["Next.js", "MDX", "Content Management", "SEO"],
    link: "https://empyreanui-core.vercel.app/blogs",
    github: "https://github.com/yourusername/empyrean-blogs",
    documentation: "https://docs.empyreanui.com/blogs",
    icon: Newspaper,
    gradient: "from-[#6C5CE7] to-[#a363f5]",
    gallery: [
      "/projects/blogs/home.png",
      "/projects/blogs/article.png",
      "/projects/blogs/search.png",
    ],
  },
] as const;

// Use [number] to create a union of all project types
export type Project = (typeof projects)[number] & ProjectInterface;
