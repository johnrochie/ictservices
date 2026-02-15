"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

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
    { name: "Compliance", href: "#compliance" },
    { name: "Partners", href: "#partners" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 md:h-20">
          {/* Logo - very small on mobile */}
          <a href="#" className="flex items-center gap-2">
            <Image
              src="/logo.jpg"
              alt="ICT Services Logo"
              width={80}
              height={40}
              className="h-8 sm:h-9 md:h-10 w-auto"
              priority
            />
          </a>

          {/* Mobile-only: Logo text */}
          <span className={`hidden sm:block font-bold text-slate-900 ${
            scrolled || isOpen ? "text-sm md:text-base" : "text-sm md:text-lg lg:text-xl"
          }`}>
            ICT Services
          </span>

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
              className="inline-flex items-center gap-2 px-4 sm:px-5 lg:px-6 py-2 lg:py-2.5 text-white rounded-full font-medium transition-all hover:scale-105 text-sm lg:text-base"
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
          <div className="md:hidden py-4 border-t border-slate-200 bg-white/95 backdrop-blur-md">
            <div className="space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-3 px-4 text-slate-700 font-medium hover:text-[#df1454] hover:bg-slate-50 transition-colors text-base rounded-lg"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="block w-full px-4 py-3 text-center text-white rounded-lg font-medium transition-all text-base"
                style={{ backgroundColor: '#df1454' }}
              >
                Get in Touch
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
