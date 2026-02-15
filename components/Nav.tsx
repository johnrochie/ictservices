"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Phone, Mail } from "lucide-react";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-[#0f0f0f]/95 backdrop-blur-md border-b border-[#00bcd4]/20" : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="#"
            className="flex items-center gap-3"
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#00bcd4] to-[#00acc1] flex items-center justify-center shadow-lg shadow-[#00bcd4]/30">
              <span className="text-[#0a192f] font-bold text-lg">ICT</span>
            </div>
            <div className="text-xl font-bold text-white">
              ICT Services
            </div>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                whileHover={{ y: -2 }}
                href={link.href}
                className="text-[#ccd6f6] hover:text-[#00bcd4] font-medium transition-colors"
              >
                {link.name}
              </motion.a>
            ))}
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#00bcd4] hover:bg-[#00acc1] text-[#0a192f] rounded-full font-medium transition-all shadow-lg shadow-[#00bcd4]/20"
            >
              Get in Touch
            </motion.a>
          </div>

          {/* Mobile menu button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </motion.button>
        </div>

        {/* Mobile menu */}
        <motion.div
          initial={false}
          animate={{
            height: isOpen ? "auto" : 0,
            opacity: isOpen ? 1 : 0
          }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-[#ccd6f6] hover:text-[#00bcd4] font-medium transition-colors py-2"
              >
                {link.name}
              </a>
            ))}
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="block text-center px-6 py-2.5 bg-[#00bcd4] hover:bg-[#00acc1] text-[#0a192f] rounded-full font-medium transition-all shadow-lg shadow-[#00bcd4]/20"
            >
              Get in Touch
            </motion.a>
          </div>
        </motion.div>
      </div>
    </nav>
  );
}
