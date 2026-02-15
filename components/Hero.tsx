import Image from "next/image";
import { ArrowRight, Phone, Mail, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 overflow-hidden">
      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full" style={{
          backgroundImage: 'linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(90deg, #0f172a 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Decorative circles - new pink-magenta palette */}
      <div className="absolute top-20 right-20 w-96 h-96 rounded-full blur-3xl animate-pulse" style={{ backgroundColor: 'rgba(223, 20, 84, 0.1)' }} />
      <div className="absolute bottom-20 left-20 w-72 h-72 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s', backgroundColor: 'rgba(236, 135, 167, 0.1)' }} />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center z-10">
        {/* Logo - smaller on mobile */}
        <div className="mb-8 sm:mb-12">
          <div className="mx-auto max-w-[200px] sm:max-w-[250px]">
            <Image
              src="/logo.jpg"
              alt="ICT Services Logo"
              width={250}
              height={100}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>

        <div className="animate-fade-in">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-tight mb-6">
            Ireland's Foremost
            <br />
            <span className="text-transparent bg-clip-text" style={{
              background: 'linear-gradient(to right, #df1454, #ec87a7)'
            }}>
              IT Services Partner
            </span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto mb-10 sm:mb-12 leading-relaxed">
            100+ expert engineers. 9 nationwide offices. 24/7 support.
            Delivered with precision and trusted by Ireland's biggest names.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 text-white rounded-full font-semibold transition-all hover:scale-105 shadow-lg text-sm sm:text-base"
              style={{ backgroundColor: '#df1454' }}
            >
              Get in Touch
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 border-2 border-slate-300 hover:border-slate-400 text-slate-700 hover:text-slate-900 rounded-full font-semibold transition-all text-sm sm:text-base"
            >
              Our Services
            </a>
          </div>
        </div>

        {/* Quick contact bar - new pink-magenta accents */}
        <div className="mt-16 sm:mt-20 flex flex-wrap justify-center gap-6 sm:gap-8 text-slate-600">
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: '#df1454' }} />
            <span className="font-medium text-sm sm:text-base">24/7 Support</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: '#ec87a7' }} />
            <span className="font-medium text-sm sm:text-base">info@ictservices.ie</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: '#df1454' }} />
            <span className="font-medium text-sm sm:text-base">All-Ireland Coverage</span>
          </div>
        </div>
      </div>
    </section>
  );
}
