"use client";

import AnimatedSection from "./AnimatedSection";
import { Mail, Phone, Linkedin, Github, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact">
      <div className="section-container">
        <AnimatedSection>
          <p className="section-subtitle">Let&apos;s connect</p>
          <h2 className="section-title mb-4">Get in Touch</h2>
          <p className="text-gray-400 max-w-xl mb-12">
            I&apos;m always open to discussing new opportunities, data engineering
            challenges, or just connecting with fellow tech enthusiasts.
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatedSection delay={0.1}>
            <a
              href="mailto:giftmappte@gmail.com"
              className="group p-6 bg-dark-800 border border-dark-700 rounded-xl flex flex-col items-center text-center hover:border-primary-500/50 transition-all"
            >
              <Mail
                size={28}
                className="text-primary-400 mb-3 group-hover:scale-110 transition-transform"
              />
              <h3 className="text-white font-medium text-sm mb-1">Email</h3>
              <p className="text-gray-400 text-xs">giftmappte@gmail.com</p>
            </a>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <a
              href="tel:+27635864151"
              className="group p-6 bg-dark-800 border border-dark-700 rounded-xl flex flex-col items-center text-center hover:border-primary-500/50 transition-all"
            >
              <Phone
                size={28}
                className="text-primary-400 mb-3 group-hover:scale-110 transition-transform"
              />
              <h3 className="text-white font-medium text-sm mb-1">Phone</h3>
              <p className="text-gray-400 text-xs">063 586 4151</p>
            </a>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <a
              href="https://linkedin.com/in/gift-mapote-6193801b0"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 bg-dark-800 border border-dark-700 rounded-xl flex flex-col items-center text-center hover:border-primary-500/50 transition-all"
            >
              <Linkedin
                size={28}
                className="text-primary-400 mb-3 group-hover:scale-110 transition-transform"
              />
              <h3 className="text-white font-medium text-sm mb-1">LinkedIn</h3>
              <p className="text-gray-400 text-xs">gift-mapote</p>
            </a>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <a
              href="https://github.com/GiftMapote"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 bg-dark-800 border border-dark-700 rounded-xl flex flex-col items-center text-center hover:border-primary-500/50 transition-all"
            >
              <Github
                size={28}
                className="text-primary-400 mb-3 group-hover:scale-110 transition-transform"
              />
              <h3 className="text-white font-medium text-sm mb-1">GitHub</h3>
              <p className="text-gray-400 text-xs">GiftMapote</p>
            </a>
          </AnimatedSection>
        </div>

        {/* Message form */}
        <AnimatedSection delay={0.5}>
          <div className="mt-12 p-8 bg-dark-800 border border-dark-700 rounded-xl max-w-2xl mx-auto">
            <h3 className="text-white font-semibold text-lg mb-4 text-center">
              Leave a Message
            </h3>
            <form
              action="https://formspree.io/f/mdavwgly"
              method="POST"
              className="space-y-4"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-3 bg-dark-900 border border-dark-700 rounded-lg text-gray-200 text-sm placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-colors"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="w-full px-4 py-3 bg-dark-900 border border-dark-700 rounded-lg text-gray-200 text-sm placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-colors"
                />
              </div>
              <textarea
                name="message"
                placeholder="Your Message"
                rows={4}
                required
                className="w-full px-4 py-3 bg-dark-900 border border-dark-700 rounded-lg text-gray-200 text-sm placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-colors resize-none"
              />
              <button
                type="submit"
                className="w-full px-6 py-3 bg-primary-500 hover:bg-primary-600 text-dark-900 font-semibold rounded-lg transition-colors duration-200"
              >
                Send Message
              </button>
            </form>
            <p className="text-gray-500 text-xs text-center mt-3">
              I&apos;ll get back to you as soon as possible.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
