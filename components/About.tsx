import { Award, Clock, MapPin, Users } from "lucide-react";

const stats = [
  { icon: Users, value: "100+", label: "Expert Engineers" },
  { icon: MapPin, value: "9", label: "Nationwide Offices" },
  { icon: Award, value: "15+", label: "Years Experience" },
  { icon: Clock, value: "24/7", label: "Support Available" }
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
              Trusted Across Ireland
            </h2>
            <p className="text-xl text-slate-600 mb-6 leading-relaxed">
              ICT Services is Ireland's foremost field services, roll-out and IT support company. Our 100+ strong team provides an all-Ireland service — north and south — from nine offices and parts hubs.
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              We deliver the world's finest IT solutions to some of the biggest names in Irish business. Supported by a network of engineers, an expert back-office team, and meticulous attention to detail, the result is first-class service, rapid response, and around-the-clock dependability.
            </p>

            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
              <Award className="w-4 h-4" />
              Partnered with Major Global Manufacturers
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600 to-teal-600 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl sm:text-4xl font-bold text-slate-900 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-slate-600 text-sm sm:text-base">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA banner */}
        <div className="mt-20 text-center">
          <h3 className="text-3xl font-bold text-slate-900 mb-4">
            Ready to Transform Your IT Operations?
          </h3>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
            Let's discuss how ICT Services can support your business with tailored IT solutions
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white rounded-full font-semibold transition-all hover:scale-105 shadow-lg"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
}
