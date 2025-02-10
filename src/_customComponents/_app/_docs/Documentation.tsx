"use client";

import { motion } from "framer-motion";
import { docs } from "./constant";

export function Documentation() {
  return (
    <div className="min-h-screen bg-background py-20 px-6">
      <div className="max-w-4xl mx-auto space-y-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r  from-[#6C5CE7] to-[#a363f5] bg-clip-text text-transparent">
            Documentation
          </h1>
          <p className="text-muted-foreground">
            Everything you need to know about EmpyreanUI
          </p>
        </motion.div>

        {/* Documentation Sections */}
        <div className="space-y-12">
          {docs.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="space-y-6">
              <h2 className="text-2xl font-semibold text-primary">
                {section.title}
              </h2>
              <div className="grid gap-6">
                {section.sections.map((subsection) => (
                  <div
                    key={subsection.heading}
                    className="p-6 rounded-2xl border border-primary/10 bg-primary/5 backdrop-blur-sm">
                    <h3 className="text-lg font-medium text-primary mb-2">
                      {subsection.heading}
                    </h3>
                    <p className="text-muted-foreground">
                      {subsection.content}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
