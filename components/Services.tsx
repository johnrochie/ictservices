import {
  Monitor,
  Shield,
  ShoppingBag,
  Cpu,
  Users
} from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "Field Services",
    description: "On-site IT support and engineering deployed nationwide. Expert technicians at your location, when you need them."
  },
  {
    icon: Shield,
    title: "Annual Maintenance",
    description: "Proactive support contracts keeping your IT infrastructure optimized and secure around the clock."
  },
  {
    icon: ShoppingBag,
    title: "Retail Support",
    description: "Specialized IT support for retail stores and POS systems. Keep your business running smoothly."
  },
  {
    icon: Cpu,
    title: "Hardware Procurement",
    description: "Strategic sourcing and supply of enterprise-grade IT equipment. Partnered with major manufacturers."
  },
  {
    icon: Users,
    title: "IT Resourcing",
    description: "Skilled IT professionals deployed to your projects and operations. Right talent, right time."
  }
];

export default function Services() {
  return (
    <section id="services" className="py-12 sm:py-16 lg:py-24 bg-white px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-slate-900 mb-3 sm:mb-4">
            What We Do
          </h2>
          <p className="text-sm sm:text-base lg:text-xl text-slate-600 max-w-2xl mx-auto">
            Comprehensive IT services designed to keep your business moving forward
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="p-5 sm:p-6 lg:p-8 rounded-2xl bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-all duration-300 hover:-translate-y-1"
                style={{
                  borderTop: index === 0 ? '3px solid #df1454' : 'none',
                  cursor: 'pointer'
                }}
              >
                <div
                  className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-lg flex items-center justify-center mb-3 sm:mb-4 lg:mb-6 group-hover:scale-110 transition-transform"
                  style={{
                    background: 'linear-gradient(135deg, #df1454, #ec87a7)'
                  }}
                >
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-white" />
                </div>
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-slate-900 mb-2 sm:mb-3">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Large service card spanning full width - stacked on mobile */}
        <div className="mt-6 sm:mt-8 lg:mt-12 p-5 sm:p-6 lg:p-8 rounded-2xl text-white" style={{
          background: 'linear-gradient(135deg, #df1454, #ec87a7)'
        }}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 lg:gap-8">
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-1 sm:mb-2">
                Partnered with Industry Leaders
              </h3>
              <p className="text-sm sm:text-base text-white/90">
                We work directly with the world's biggest and most innovative manufacturers
              </p>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-white hover:bg-slate-100 text-slate-900 rounded-full font-semibold transition-all text-sm sm:text-base w-full sm:w-auto"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
