"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { footerLinks, socialLinks } from "./HomePageConstants";
import { HoverBorderGradient } from "@b/components/ui/hover-border-gradient";

export function FooterSection() {
  return (
    <footer className="relative mt-20 border-t border-primary/10">
      <div className="mx-auto max-w-7xl px-6 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link
              aria-label={"home"}
              href="/"
              className="flex items-center gap-2">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Balaji Udayagiri
              </motion.div>
            </Link>
            <p className="text-sm text-muted-foreground">
              Building exceptional digital experiences with modern web
              technologies.
            </p>
            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              {socialLinks.map((social) => (
                <a
                  title={social.name}
                  key={social.name}
                  href={social.url || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors">
                  <social.icon className="w-5 h-5" />
                </a>
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
                    <a
                      href={link.url}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      {link.name}
                    </a>
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
            <HoverBorderGradient as="button">
              <Link
                aria-label="Contact Me"
                // href={`mailto:${process.env.EMAIL}`}
                href={"/contact-me"}
                className="inline-block px-4 py-2 text-sm font-medium text-primary rounded-full hover:bg-primary/5 transition-colors">
                Contact Me
              </Link>
            </HoverBorderGradient>
          </div>
        </div>

        {/* Sitemap link */}
        <div className="mt-8 text-end">
          <Link
            href="/terms"
            className="text-sm text-muted-foreground hover:text-primary transition-colors mr-4">
            Privacy Policy
          </Link>
          <a
            href="/sitemap.xml"
            className="text-sm text-muted-foreground hover:text-primary transition-colors">
            Sitemap
          </a>
        </div>

        {/* Copyright */}
        <div className="mt-1 pt-8 border-t border-primary/10">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Balaji Udayagiri. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
