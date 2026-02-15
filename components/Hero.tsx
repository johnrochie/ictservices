'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Phone, Mail, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden">
      {/* Dark animated background */}
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full" style={{
          backgroundImage: 'linear-gradient(rgba(0, 188, 212, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 188, 212, 0.3) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Animated orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        className="absolute top-20 right-20 w-96 h-96 bg-gray-200 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1
        }}
        className="absolute bottom-20 left-20 w-72 h-72 bg-[de1352]-20 rounded-full blur-3xl"
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-5xl sm:text-7xl font-bold text-gray-900 leading-tight mb-6"
          >
            Ireland's Foremost{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#de1352] to-[#291d91d]">
              IT Services Partner
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-xl sm:text-2xl text-gray-500ccd6f6] max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            100+ expert engineers. 9 nationwide offices. 24/7 support.
            Delivered with precision and trusted by Ireland's biggest names.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#de1352] hover:bg-[#291d91d] text-gray-5000a192f] rounded-full font-semibold transition-all shadow-lg shadow-[#de1352]/40"
            >
              Get in Touch
              <ArrowRight className="w-5 h-5" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#services"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-[#de1352] hover:border-[#291d91d] text-gray-500de1352] hover:text-gray-500291d91d] rounded-full font-semibold transition-all"
            >
              Our Services
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Glassmorphism contact bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-20 p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md"
        >
          <div className="flex flex-wrap justify-center gap-8 text-gray-500ccd6f6]">
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-gray-500de1352]" />
              <span className="font-medium">24/7 Support</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-gray-500de1352]" />
              <span className="font-medium">info@ictservices.ie</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-gray-500de1352]" />
              <span className="font-medium">All-Ireland Coverage</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
