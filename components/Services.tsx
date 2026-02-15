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
    <section id="services" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            What We Do
          </h2>
          <p className="text-base sm:text-xl text-slate-600 max-w-2xl mx-auto">
            Comprehensive IT services designed to keep your business moving forward
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group p-6 sm:p-8 rounded-2xl bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-all duration-300 hover:-translate-y-1"
                style={{
                  borderBottom: index === 0 ? '3px solid #df1454' : 'none',
                  cursor: 'pointer'
                }}
              >
                <div
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform"
                  style={{
                    background: 'linear-gradient(135deg, #df1454, #ec87a7)'
                  }}
                >
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Large service card spanning full width */}
        <div className="mt-8 sm:mt-12 p-6 sm:p-8 rounded-2xl text-white" style={{
          background: 'linear-gradient(135deg, #df1454, #ec87a7)'
        }}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
            <div className="flex-1">
              <h3 className="text-xl sm:text-2xl font-bold mb-2">
                Partnered with Industry Leaders
              </h3>
              <p className="text-sm sm:text-base text-white/90 md:text-lg">
                We work directly with the world's biggest and most innovative manufacturers
              </p>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-white hover:bg-slate-100 text-slate-900 rounded-full font-semibold transition-all text-sm sm:text-base"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
