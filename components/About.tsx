'use client';

import { motion } from 'framer-motion';
import { Award, Clock, MapPin, Users } from "lucide-react";

const stats = [
  { icon: Users, value: "100+", label: "Expert Engineers" },
  { icon: MapPin, value: "9", label: "Nationwide Offices" },
  { icon: Award, value: "15+", label: "Years Experience" },
  { icon: Clock, value: "24/7", label: "Support Available" }
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#0f0f0f]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Trusted Across Ireland
            </h2>
            <p className="text-xl text-[#ccd6f6] mb-6 leading-relaxed">
              ICT Services is Ireland's foremost field services, roll-out and IT support company. Our 100+ strong team provides an all-Ireland service — north and south — from nine offices and parts hubs.
            </p>
            <p className="text-lg text-[#8892b0] mb-8 leading-relaxed">
              We deliver the world's finest IT solutions to some of the biggest names in Irish business. Supported by a network of engineers, an expert back-office team, and meticulous attention to detail, the result is first-class service, rapid response, and around-the-clock dependability.
            </p>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#de1352]/10 text-[#de1352] rounded-full text-sm font-semibold border border-[#de1352]/20"
            >
              <Award className="w-4 h-4" />
              Partnered with Major Global Manufacturers
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-[#112240] p-8 rounded-2xl border border-[#de1352]/20 hover:border-[#de1352]/40 backdrop-blur-md transition-all duration-300 hover:shadow-2xl hover:shadow-[#de1352]/20"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#de1352] to-[#291d91d] flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl sm:text-4xl font-bold text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-[#8892b0] text-sm sm:text-base">
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* CTA banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 p-12 rounded-2xl bg-gradient-to-r from-[#112240] to-[#0f0f0f] border border-[#de1352]/20 backdrop-blur-md text-center"
        >
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your IT Operations?
          </h3>
          <p className="text-lg text-[#8892b0] max-w-2xl mx-auto mb-8">
            Let's discuss how ICT Services can support your business with tailored IT solutions
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#de1352] hover:bg-[#291d91d] text-[#0a192f] rounded-full font-semibold transition-all shadow-lg shadow-[#de1352]/20"
          >
            Get Started
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
