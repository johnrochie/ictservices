import { Award, Clock, MapPin, Users } from "lucide-react";

const stats = [
  { icon: Users, value: "100+", label: "Expert Engineers" },
  { icon: MapPin, value: "9", label: "Nationwide Offices" },
  { icon: Award, value: "15+", label: "Years Experience" },
  { icon: Clock, value: "24/7", label: "Support Available" }
];

export default function About() {
  return (
    <section id="about" className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-slate-50 to-slate-100 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-center">
          <div className="text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-slate-900 mb-3 sm:mb-4 lg:mb-6">
              Trusted Across Ireland
            </h2>
            <p className="text-sm sm:text-base lg:text-xl text-slate-600 mb-3 sm:mb-4 lg:mb-6 leading-relaxed">
              ICT Services is Ireland's foremost field services, roll-out and IT support company. Our 100+ strong team provides an all-Ireland service — north and south — from nine offices and parts hubs.
            </p>
            <p className="text-sm sm:text-base lg:text-lg text-slate-600 mb-4 sm:mb-6 lg:mb-8 leading-relaxed">
              We deliver the world's finest IT solutions to some of the biggest names in Irish business. Supported by a network of engineers, an expert back-office team, and meticulous attention to detail, the result is first-class service, rapid response, and around-the-clock dependability.
            </p>

            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold"
              style={{ backgroundColor: '#fde8ec', color: '#df1454' }}
            >
              <Award className="w-3 h-3 sm:w-4 sm:h-4" />
              Partnered with Major Global Manufacturers
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-4 sm:p-5 lg:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div
                    className="w-9 h-9 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-lg flex items-center justify-center mb-2 sm:mb-3 lg:mb-4"
                    style={{
                      background: 'linear-gradient(135deg, #df1454, #ec87a7)'
                    }}
                  >
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
                  </div>
                  <div className="text-xl sm:text-2xl lg:text-4xl font-bold text-slate-900 mb-0.5 sm:mb-1 lg:mb-2">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm lg:text-base text-slate-600">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA banner - stacked on mobile */}
        <div className="mt-8 sm:mt-12 lg:mt-20 text-center">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 mb-2 sm:mb-3 lg:mb-4">
            Ready to Transform Your IT Operations?
          </h3>
          <p className="text-sm sm:text-base lg:text-lg text-slate-600 max-w-2xl mx-auto mb-4 sm:mb-6 lg:mb-8">
            Let's discuss how ICT Services can support your business with tailored IT solutions
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 text-white rounded-full font-semibold transition-all hover:scale-105 shadow-lg text-sm sm:text-base w-full sm:w-auto"
            style={{ backgroundColor: '#df1454' }}
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
}
