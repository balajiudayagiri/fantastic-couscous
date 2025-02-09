"use client";
import { motion } from "framer-motion";
import { Code, Rocket, User2 } from "lucide-react";

export function AboutSection() {
  const skills = [
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

  function calculateExperience(startDate: Date): string {
    const start = new Date(startDate);
    const now = new Date();

    const diffInYears =
      (now.getTime() - start.getTime()) / (1000 * 60 * 60 * 24 * 365.25);
    const years = Math.floor(diffInYears);
    const months = Math.floor((diffInYears - years) * 12);

    // Add .5 to years if months are 6 or more
    return months >= 6 ? `${years}.5+` : `${years}+`;
  }

  // Set your start date
  const startDate = new Date("2020-11-01");

  const stats = [
    {
      label: "Years Experience",
      value: calculateExperience(startDate),
      icon: Code,
      description: "Building scalable web applications",
    },
    {
      label: "Products Enhanced",
      value: "10+",
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

  const skillCategories = [
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

  return (
    <section className="relative min-h-screen flex items-center justify-center p-6 md:p-12 overflow-hidden">
      <motion.div
        className="relative z-10 max-w-7xl w-full bg-black/90 backdrop-blur-2xl rounded-3xl p-8 md:p-16 border border-primary/10 shadow-2xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}>
        {/* Header Section with enhanced styling */}
        <div className="space-y-20">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}>
              <div className="mb-8">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-[#4ECDC4] to-[#6C5CE7] bg-clip-text text-transparent">
                  Engineering Digital Experiences
                </h1>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="relative inline-block">
                  <p className="text-xl md:text-2xl text-muted-foreground/90 leading-relaxed">
                    Front-End Lead Engineer crafting exceptional web experiences
                  </p>
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary/50 to-transparent" />
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Enhanced Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                <div className="relative p-8 rounded-2xl border border-primary/10 bg-black/60 backdrop-blur-sm hover:border-primary/30 transition-all duration-300 hover:-translate-y-1">
                  <span className="flex items-center gap-3">
                    <stat.icon className="w-8 h-8 text-primary/80 mb-4" />
                    <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent mb-2">
                      {stat.value}
                    </div>
                  </span>
                  <div className="text-sm font-medium text-primary/80 mb-2">
                    {stat.label}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {stat.description}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Categorized Skills Section */}
          <div className="space-y-12">
            <h3 className="text-3xl font-bold text-primary text-center mb-12">
              Technical Expertise
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {skillCategories.map((category, categoryIndex) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: categoryIndex * 0.2 }}
                  className="space-y-4">
                  <h4
                    className={`text-xl font-semibold bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`}>
                    {category.title}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.05 }}>
                        <div
                          className="px-4 py-2 rounded-full text-sm font-medium
                          bg-gradient-to-r from-primary/5 to-transparent
                          border border-primary/10 hover:border-primary/30
                          backdrop-blur-sm transition-all duration-300
                          hover:translate-y-[-2px] hover:shadow-lg">
                          {skill.name}
                          {/* <span className="ml-2 text-xs text-primary/60">
                            {skill.years}y
                          </span> */}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Enhanced About Text */}
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-primary/50 to-transparent" />
            <div className="space-y-6 pl-8">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-xl text-primary/90 leading-relaxed">
                Passionate Front-End Lead Engineer specializing in crafting
                exceptional web experiences. My expertise lies in architecting
                scalable frontend systems, implementing AI-powered solutions,
                and building robust design systems that elevate user
                interactions.
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="text-lg text-muted-foreground leading-relaxed">
                Focused on modern frontend architecture, performance
                optimization, and leading teams to deliver high-impact solutions
                using cutting-edge technologies.
              </motion.p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
