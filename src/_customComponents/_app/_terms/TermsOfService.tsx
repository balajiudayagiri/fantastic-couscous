"use client";

import { motion } from "framer-motion";
import { TextGenerateEffect } from "@components/text-generate-effect";
import { Scale } from "lucide-react";

type Section = {
  title: string;
  introduction?: string;
  points: string[];
  conclusion?: string;
};

export function TermsOfService() {
  const sections: Section[] = [
    {
      title: "Portfolio Usage & Access",
      introduction:
        "This portfolio website serves as a professional showcase of my work, skills, and expertise in software development. By accessing this portfolio, you agree to:",
      points: [
        "Use the content for personal, non-commercial reference",
        "Not attempt to reverse engineer or copy the demonstrated projects",
        "Respect the intellectual property rights of all content presented",
        "Not use any automated systems or bots to access the portfolio",
      ],
    },
    {
      title: "Intellectual Property Rights",
      introduction:
        "All content within this portfolio is protected by intellectual property laws and remains my exclusive property. This includes:",
      points: [
        "Source code and programming examples",
        "Project demonstrations and implementations",
        "Design elements and visual assets",
        "Written content and documentation",
        "Personal branding and logos",
      ],
      conclusion:
        "You may reference or cite this work with proper attribution, but reproduction or commercial use requires explicit written permission.",
    },
    {
      title: "Project Demonstrations & Code Samples",
      introduction:
        "The projects and code samples showcased in this portfolio demonstrate my technical capabilities and development approach. Please note:",
      points: [
        "All demonstrations are provided for illustrative purposes only",
        "Projects may use third-party services, APIs, and dependencies",
        "Some features may be limited in demo versions",
        "Code samples are meant for educational purposes",
        "Implementation details may vary in production environments",
      ],
      conclusion:
        "While you're welcome to learn from these examples, they are not intended for direct reproduction or commercial use without permission.",
    },
    {
      title: "External Links & Resources",
      introduction:
        "This portfolio contains links to external platforms and resources, including:",
      points: [
        "Professional social media profiles (LinkedIn, Twitter)",
        "Code repositories on GitHub",
        "Blog posts on various platforms",
        "Project demonstrations and live examples",
        "Third-party tools and services used in projects",
      ],
      conclusion:
        "While these external resources are carefully selected, I cannot be responsible for their content or availability.",
    },
    {
      title: "Professional Communication",
      introduction:
        "When reaching out through this portfolio for professional inquiries:",
      points: [
        "Provide accurate and relevant information",
        "Maintain professional and respectful communication",
        "Use the provided contact methods for legitimate business purposes",
        "Expect reasonable response times during business hours",
        "Respect confidentiality in our communications",
      ],
    },
    {
      title: "Data & Privacy Considerations",
      introduction: "While interacting with this portfolio website:",
      points: [
        "Only necessary cookies and technical data are collected",
        "No personal information is stored without explicit consent",
        "Analytics may be used to improve user experience",
        "Your data is never sold or shared with third parties",
        "You can request information about your data at any time",
      ],
      conclusion:
        "Your privacy is important. Any collected information is handled with utmost care and in accordance with standard privacy practices.",
    },
    {
      title: "Updates & Modifications",
      introduction:
        "This portfolio and its terms may evolve over time. I reserve the right to:",
      points: [
        "Update portfolio content and project demonstrations",
        "Modify these terms to reflect new features or requirements",
        "Add or remove projects and code samples",
        "Improve site functionality and user experience",
        "Change or discontinue any aspect of the portfolio",
      ],
      conclusion:
        "Any significant changes to these terms will be reflected in the 'Last Updated' date shown above.",
    },
    {
      title: "Disclaimer",
      introduction:
        "While I strive to maintain accurate and up-to-date information:",
      points: [
        "All content is provided 'as is' without warranties",
        "Project demonstrations may not reflect current versions",
        "Technical implementations may need adaptation for specific use cases",
        "Performance may vary based on user environment and conditions",
        "Success with demonstrated techniques cannot be guaranteed",
      ],
      conclusion:
        "Always perform your own testing and validation before implementing any solutions in production environments.",
    },
  ];

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
              href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}
              className="text-primary hover:underline">
              {process.env.NEXT_PUBLIC_EMAIL}
            </a>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
