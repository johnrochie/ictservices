'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Let's Talk
          </h2>
          <p className="text-xl text-gray-5008892b0] max-w-2xl mx-auto">
            Ready to transform your IT operations? Get in touch with our team
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Contact Information
              </h3>

              <div className="space-y-6">
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-lg bg-white border border-[#de1352]/20 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-gray-500de1352]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                    <p className="text-gray-5008892b0]">+353 1 XXX XXXX</p>
                    <p className="text-gray-5008892b0]">+353 1 XXX XXXX</p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-lg bg-white border border-[#de1352]/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-gray-500de1352]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                    <p className="text-gray-5008892b0]">info@ictservices.ie</p>
                    <p className="text-gray-5008892b0]">support@ictservices.ie</p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-lg bg-white border border-[#de1352]/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-gray-500de1352]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Locations</h4>
                    <p className="text-gray-5008892b0]">
                      9 offices across Ireland
                      <br />
                      Nationwide coverage, north and south
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Support Hours */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-6 rounded-2xl bg-white/5 border border-[#de1352]/20 backdrop-blur-md"
            >
              <h4 className="font-semibold text-gray-900 mb-3">Support Hours</h4>
              <div className="space-y-2 text-gray-5008892b0]">
                <div className="flex justify-between">
                  <span>Standard Support</span>
                  <span className="font-medium text-gray-900">Mon-Fri, 9am-5pm</span>
                </div>
                <div className="flex justify-between">
                  <span>24/7 Critical Support</span>
                  <span className="font-medium text-gray-500de1352]">Available</span>
                </div>
                <div className="flex justify-between">
                  <span>Emergency Response</span>
                  <span className="font-medium text-orange-400">&lt; 4 hours</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 lg:p-10 rounded-2xl border border-[#de1352]/20 backdrop-blur-md"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Send us a message
            </h3>

            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-5008892b0] mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your full name"
                  className="w-full px-4 py-3 rounded-lg bg-white border border-white/10 focus:border-[#de1352] focus:ring-2 focus:ring-[#de1352]/20 transition-all outline-none text-gray-900 placeholder-[#8892b0]"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-5008892b0] mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-lg bg-white border border-white/10 focus:border-[#de1352] focus:ring-2 focus:ring-[#de1352]/20 transition-all outline-none text-gray-900 placeholder-[#8892b0]"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-5008892b0] mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="+353 1 XXX XXXX"
                  className="w-full px-4 py-3 rounded-lg bg-white border border-white/10 focus:border-[#de1352] focus:ring-2 focus:ring-[#de1352]/20 transition-all outline-none text-gray-900 placeholder-[#8892b0]"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-5008892b0] mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  placeholder="Tell us about your IT needs..."
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-white border border-white/10 focus:border-[#de1352] focus:ring-2 focus:ring-[#de1352]/20 transition-all outline-none resize-none text-gray-900 placeholder-[#8892b0]"
                  required
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#de1352] hover:bg-[#291d91d] text-gray-5000a192f] rounded-lg font-semibold transition-all shadow-lg shadow-[#de1352]/20"
              >
                Send Message
                <Send className="w-5 h-5" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
