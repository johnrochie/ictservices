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

      {/* Decorative circles */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl sm:text-7xl font-bold text-slate-900 leading-tight mb-6">
            Ireland's Foremost
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">
              IT Services Partner
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-slate-600 max-w-3xl mx-auto mb-12 leading-relaxed">
            100+ expert engineers. 9 nationwide offices. 24/7 support.
            Delivered with precision and trusted by Ireland's biggest names.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white rounded-full font-semibold transition-all hover:scale-105 shadow-lg"
            >
              Get in Touch
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-slate-300 hover:border-slate-400 text-slate-700 hover:text-slate-900 rounded-full font-semibold transition-all"
            >
              Our Services
            </a>
          </div>
        </div>

        {/* Quick contact bar */}
        <div className="mt-20 flex flex-wrap justify-center gap-8 text-slate-600">
          <div className="flex items-center gap-2">
            <Phone className="w-5 h-5 text-blue-600" />
            <span className="font-medium">24/7 Support</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-5 h-5 text-teal-600" />
            <span className="font-medium">info@ictservices.ie</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-blue-600" />
            <span className="font-medium">All-Ireland Coverage</span>
          </div>
        </div>
      </div>
    </section>
  );
}
