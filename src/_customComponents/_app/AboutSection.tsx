"use client";

import { motion } from "framer-motion";
import { skillCategories, stats } from "./HomePageConstants";
import { StatsCard } from "./StatsCard";
import { SkillBadge } from "./SkillBadge";
import { variants } from "./animations";

export function AboutSection() {
  return (
    <motion.section
      role="region"
      aria-label="About Me"
      variants={variants.container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="relative min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
      <motion.article
        variants={variants.fadeInUp}
        className="relative z-10 w-full max-w-7xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden">
          <div className="relative z-20 p-6 md:p-12 lg:p-16 space-y-16 lg:space-y-24">
            {/* Header Section */}
            <header className="text-center max-w-4xl mx-auto">
              <motion.div
                variants={variants.fadeInUp}
                className="relative mb-8">
                <h1
                  className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 
                  bg-gradient-to-r from-primary via-[#4ECDC4] to-[#6C5CE7] 
                  bg-clip-text text-transparent drop-shadow-lg">
                  Engineering Digital Experiences
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground/90 leading-relaxed">
                  Front-End Lead Engineer crafting exceptional web experiences
                </p>
              </motion.div>
            </header>

            {/* Stats Grid */}
            <motion.div
              variants={variants.stagger}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {stats.map((stat) => (
                <StatsCard key={stat.label} {...stat} />
              ))}
            </motion.div>

            {/* Skills Section */}
            <motion.div variants={variants.stagger} className="space-y-12">
              <h2 className="text-3xl font-bold text-primary text-center mb-12">
                Technical Expertise
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                {skillCategories.map((category) => (
                  <motion.div
                    key={category.title}
                    variants={variants.fadeInUp}
                    className="space-y-4">
                    <h3
                      className={`text-xl font-semibold bg-gradient-to-r ${category.gradient} 
                      bg-clip-text text-transparent`}>
                      {category.title}
                    </h3>
                    <motion.div
                      variants={variants.stagger}
                      className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <SkillBadge key={skill.name} skill={skill} />
                      ))}
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* About Text */}
            <motion.div
              variants={variants.stagger}
              className="relative max-w-4xl mx-auto">
              <div
                className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-primary/50 to-transparent"
                aria-hidden="true"
              />
              <div className="space-y-6 pl-8">
                <motion.p
                  variants={variants.fadeInUp}
                  className="text-xl text-primary/90 leading-relaxed">
                  Passionate Front-End Lead Engineer specializing in crafting
                  exceptional web experiences. My expertise lies in architecting
                  scalable frontend systems, implementing AI-powered solutions,
                  and building robust design systems that elevate user
                  interactions.
                </motion.p>
                <motion.p
                  variants={variants.fadeInUp}
                  className="text-lg text-muted-foreground leading-relaxed">
                  Focused on modern frontend architecture, performance
                  optimization, and leading teams to deliver high-impact
                  solutions using cutting-edge technologies.
                </motion.p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.article>
    </motion.section>
  );
}
