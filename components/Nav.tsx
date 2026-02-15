"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
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
      scrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo - responsive sizing */}
          <a href="#" className="flex items-center gap-2 sm:gap-3">
            <Image
              src="/logo.jpg"
              alt="ICT Services Logo"
              width={100}
              height={50}
              className="h-8 sm:h-10 w-auto"
              priority
            />
            <div className={`font-bold text-slate-900 ${
              scrolled || isOpen ? "text-lg" : "text-base sm:text-lg md:text-xl"
            }`}>
              ICT Services
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-700 font-medium hover:text-[#df1454] transition-colors text-sm lg:text-base"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 lg:px-6 py-2 lg:py-2.5 text-white rounded-full font-medium transition-all hover:scale-105 text-sm lg:text-base"
              style={{ backgroundColor: '#df1454' }}
            >
              Get in Touch
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden py-4 sm:py-6 space-y-3 sm:space-y-4 border-t border-slate-200">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block py-3 text-slate-700 font-medium hover:text-[#df1454] transition-colors text-base"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 text-white rounded-full font-medium transition-all text-sm sm:text-base"
              style={{ backgroundColor: '#df1454' }}
            >
              Get in Touch
            </a>
            <div className="flex gap-3 sm:gap-4 pt-4 border-t border-slate-200">
              <a
                href="tel:+3531XXXXXXXX"
                className="flex items-center justify-center gap-2 px-3 sm:px-4 py-2 rounded-full text-sm font-medium"
                style={{ backgroundColor: '#fde8ec', color: '#df1454' }}
              >
                <Phone size={16} />
                Call Us
              </a>
              <a
                href="mailto:info@ictservices.ie"
                className="flex items-center justify-center gap-2 px-3 sm:px-4 py-2 rounded-full text-sm font-medium"
                style={{ backgroundColor: '#fde8ec', color: '#ec87a7' }}
              >
                <Mail size={16} />
                Email
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
