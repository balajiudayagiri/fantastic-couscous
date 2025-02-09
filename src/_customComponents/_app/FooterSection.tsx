"use client";

import { motion } from "framer-motion";
import { Github, Instagram, Linkedin, Mail, Twitter } from "lucide-react";
import Link from "next/link";

export function FooterSection() {
  const socialLinks = [
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

  const footerLinks = [
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
        // { name: "Terms of Service", url: "#" },
      ],
    },
  ];

  return (
    <footer className="relative mt-20 border-t border-primary/10">
      <div className="mx-auto max-w-7xl px-6 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Balaji Udayagiri
            </motion.div>
            <p className="text-sm text-muted-foreground">
              Building exceptional digital experiences with modern web
              technologies.
            </p>
            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.url || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors">
                  <social.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {footerLinks.map((section) => (
            <div key={section.title} className="space-y-4">
              <h4 className="text-sm font-semibold text-primary">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.url}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Section */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-primary">Get in Touch</h4>
            <p className="text-sm text-muted-foreground">
              Have a project in mind? Let&apos;s work together.
            </p>
            <Link
              href={`mailto:${process.env.EMAIL}`}
              className="inline-block px-4 py-2 text-sm font-medium text-primary border border-primary/10 rounded-full hover:bg-primary/5 transition-colors">
              Contact Me
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-primary/10">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Balaji Udayagiri. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
