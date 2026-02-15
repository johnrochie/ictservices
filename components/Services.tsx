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
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            What We Do
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Comprehensive IT services designed to keep your business moving forward
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-all duration-300 hover:-translate-y-1"
                style={{
                  borderBottom: index === 0 ? '3px solid #df1454' : 'none',
                  cursor: 'pointer'
                }}
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
                  style={{
                    background: 'linear-gradient(135deg, #df1454, #ec87a7)'
                  }}
                >
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Large service card spanning full width */}
        <div className="mt-12 p-8 rounded-2xl text-white" style={{
          background: 'linear-gradient(135deg, #df1454, #ec87a7)'
        }}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-2">
                Partnered with Industry Leaders
              </h3>
              <p className="text-white/90">
                We work directly with the world's biggest and most innovative manufacturers
              </p>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-slate-100 text-slate-900 rounded-full font-semibold transition-all"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
