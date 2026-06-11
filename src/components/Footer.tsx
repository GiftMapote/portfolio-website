"use client";

import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-dark-700 bg-dark-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-gray-500 text-sm">
            © {currentYear} Gift Mapote. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/GiftMapote"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-primary-400 transition-colors"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="https://linkedin.com/in/gift-mapote-6193801b0"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-primary-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:giftmappte@gmail.com"
              className="text-gray-500 hover:text-primary-400 transition-colors"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
