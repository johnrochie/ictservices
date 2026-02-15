import Image from "next/image";
import { ArrowRight, Phone, Mail, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 overflow-hidden px-4">
      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full" style={{
          backgroundImage: 'linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(90deg, #0f172a 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Decorative circles - hidden on mobile for cleaner look */}
      <div className="hidden md:block absolute top-20 right-20 w-96 h-96 rounded-full blur-3xl animate-pulse" style={{ backgroundColor: 'rgba(223, 20, 84, 0.1)' }} />
      <div className="hidden md:block absolute bottom-20 left-20 w-72 h-72 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s', backgroundColor: 'rgba(236, 135, 167, 0.1)' }} />

      <div className="relative max-w-7xl mx-auto text-center z-10">
        {/* Logo - mobile-friendly */}
        <div className="mb-6 sm:mb-8 md:mb-12">
          <Image
            src="/logo.jpg"
            alt="ICT Services Logo"
            width={180}
            height={80}
            className="h-auto w-full max-w-[160px] md:max-w-[200px] mx-auto"
            priority
          />
        </div>

        <div className="animate-fade-in">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-slate-900 leading-tight mb-4 sm:mb-6">
            Ireland's Foremost
            <br />
            <br className="hidden sm:block" />
            IT Services Partner
          </h1>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-600 max-w-2xl md:max-w-3xl mx-auto mb-6 sm:mb-8 md:mb-10 lg:mb-12 leading-relaxed">
            100+ expert engineers. 9 nationwide offices. 24/7 support.
            Delivered with precision and trusted by Ireland's biggest names.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-10 md:mb-12 lg:mb-14">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 sm:px-8 sm:py-4 text-white rounded-full font-semibold transition-all hover:scale-105 shadow-lg w-full sm:w-auto text-base"
              style={{ backgroundColor: '#df1454' }}
            >
              Get in Touch
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 sm:px-8 sm:py-4 border-2 border-slate-300 hover:border-slate-400 text-slate-700 hover:text-slate-900 rounded-full font-semibold transition-all w-full sm:w-auto text-base"
            >
              Our Services
            </a>
          </div>
        </div>

        {/* Quick contact bar - stacked on mobile */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 text-slate-600">
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" style={{ color: '#df1454' }} />
            <span className="font-medium text-sm md:text-base">24/7 Support</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4" style={{ color: '#ec87a7' }} />
            <span className="font-medium text-sm md:text-base">info@ictservices.ie</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" style={{ color: '#df1454' }} />
            <span className="font-medium text-sm md:text-base">All-Ireland Coverage</span>
          </div>
        </div>
      </div>
    </section>
  );
}
