import { Phone, Mail, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-24 bg-white px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-slate-900 mb-3 sm:mb-4">
            Let's Talk
          </h2>
          <p className="text-sm sm:text-base lg:text-xl text-slate-600 max-w-2xl mx-auto">
            Ready to transform your IT operations? Get in touch with our team
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
          {/* Contact Info */}
          <div className="space-y-6 sm:space-y-8">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 sm:mb-6">
                Contact Information
              </h3>

              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: '#fde8ec' }}
                  >
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6"
                      style={{ color: '#df1454' }}
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1 text-sm sm:text-base">Phone</h4>
                    <p className="text-slate-600 text-sm sm:text-base">+353 1 XXX XXXX</p>
                    <p className="text-slate-600 text-sm sm:text-base">+353 1 XXX XXXX</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: '#fde8ec' }}
                  >
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6"
                      style={{ color: '#ec87a7' }}
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1 text-sm sm:text-base">Email</h4>
                    <p className="text-slate-600 text-sm sm:text-base">info@ictservices.ie</p>
                    <p className="text-slate-600 text-sm sm:text-base">support@ictservices.ie</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: '#fde8ec' }}
                  >
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6"
                      style={{ color: '#df1454' }}
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1 text-sm sm:text-base">Locations</h4>
                    <p className="text-slate-600 text-sm sm:text-base">
                      9 offices across Ireland
                      <br />
                      Nationwide coverage, north and south
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Support Hours */}
            <div className="p-4 sm:p-6 rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200">
              <h4 className="font-semibold text-slate-900 mb-3 text-sm sm:text-base">Support Hours</h4>
              <div className="space-y-2 text-slate-600 text-sm sm:text-base">
                <div className="flex justify-between">
                  <span>Standard Support</span>
                  <span className="font-medium">Mon-Fri, 9am-5pm</span>
                </div>
                <div className="flex justify-between">
                  <span>24/7 Critical Support</span>
                  <span className="font-medium text-green-600">Available</span>
                </div>
                <div className="flex justify-between">
                  <span>Emergency Response</span>
                  <span className="font-medium text-orange-600">&lt; 4 hours</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-6 sm:p-8 lg:p-10 rounded-2xl">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 sm:mb-6">
              Send us a message
            </h3>

            <form className="space-y-4 sm:space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your full name"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-slate-300 focus:border-[#df1454] focus:ring-2 focus:ring-[#df1454]/20 transition-all outline-none text-sm sm:text-base"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="your@email.com"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-slate-300 focus:border-[#df1454] focus:ring-2 focus:ring-[#df1454]/20 transition-all outline-none text-sm sm:text-base"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="+353 1 XXX XXXX"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-slate-300 focus:border-[#df1454] focus:ring-2 focus:ring-[#df1454]/20 transition-all outline-none text-sm sm:text-base"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  placeholder="Tell us about your IT needs..."
                  rows={4}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-slate-300 focus:border-[#df1454] focus:ring-2 focus:ring-[#df1454]/20 transition-all outline-none resize-none text-sm sm:text-base"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 text-white rounded-lg font-semibold transition-all hover:scale-105 shadow-lg text-sm sm:text-base"
                style={{ backgroundColor: '#df1454' }}
              >
                Send Message
                <Send className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
