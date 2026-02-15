'use client';

import { motion } from 'framer-motion';
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
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            What We Do
          </h2>
          <p className="text-xl text-gray-5008892b0] max-w-2xl mx-auto">
            Comprehensive IT services designed to keep your business moving forward
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group p-8 rounded-2xl bg-white border border-[#de1352]/20 hover:border-[#de1352]/40 backdrop-blur-md transition-all duration-300 hover:shadow-2xl hover:shadow-[#de1352]/20"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                  className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#de1352] to-[#291d91d] flex items-center justify-center mb-6 transition-transform"
                >
                  <Icon className="w-7 h-7 text-gray-900" />
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-500de1352] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-5008892b0] leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Partnered card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-[#0f0f0f] to-[#112240] border border-[#de1352]/20 backdrop-blur-md"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Partnered with Industry Leaders
              </h3>
              <p className="text-gray-5008892b0]">
                We work directly with the world's biggest and most innovative manufacturers
              </p>
            </div>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#de1352] hover:bg-[#291d91d] text-gray-5000a192f] rounded-full font-semibold transition-all shadow-lg shadow-[#de1352]/20"
            >
              Learn More
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
