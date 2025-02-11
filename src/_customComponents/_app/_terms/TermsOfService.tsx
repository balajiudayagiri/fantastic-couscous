"use client";

import { motion } from "framer-motion";
import { Scale } from "lucide-react";
import { sections } from "./constant";

export function TermsOfService() {
  return (
    <div className="min-h-screen bg-background py-20 px-6">
      <div className="max-w-4xl mx-auto space-y-16">
        {/* Header - keeping existing header code */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-4">
          <div className="flex justify-center mb-6">
            <Scale className="w-16 h-16 text-primary/60" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Terms of Service
          </h1>
          <p className="text-muted-foreground">
            Last updated:{" "}
            {new Date().toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </motion.div>

        {/* Terms Sections with improved structure */}
        <div className="space-y-12">
          {sections.map((section, index) => (
            <motion.section
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="space-y-6 p-8 rounded-2xl border border-primary/10 bg-primary/5 backdrop-blur-sm">
              <h2 className="text-2xl font-semibold text-primary">
                {section.title}
              </h2>
              <div className="space-y-4">
                {section.introduction && (
                  <p className="text-muted-foreground">
                    {section.introduction}
                  </p>
                )}
                <ul className="space-y-2">
                  {section.points.map((point, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-muted-foreground">
                      <span className="text-primary mt-1">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                {section.conclusion && (
                  <p className="text-muted-foreground pt-4 border-t border-primary/5">
                    {section.conclusion}
                  </p>
                )}
              </div>
            </motion.section>
          ))}
        </div>

        {/* Contact Information - keeping existing contact section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center space-y-4 p-6 rounded-2xl border border-primary/10 bg-primary/5 backdrop-blur-sm">
          <h2 className="text-xl font-semibold text-primary">Questions?</h2>
          <p className="text-muted-foreground">
            If you have any questions about these Terms, please contact me at{" "}
            <a
              href={`mailto:${process.env.EMAIL}`}
              className="text-primary hover:underline">
              {process.env.EMAIL}
            </a>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
