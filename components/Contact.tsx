import { Phone, Mail, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Let's Talk
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Ready to transform your IT operations? Get in touch with our team
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: '#fde8ec' }}
                  >
                    <Phone className="w-6 h-6"
                      style={{ color: '#df1454' }}
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Phone</h4>
                    <p className="text-slate-600">+353 1 XXX XXXX</p>
                    <p className="text-slate-600">+353 1 XXX XXXX</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: '#fde8ec' }}
                  >
                    <Mail className="w-6 h-6"
                      style={{ color: '#ec87a7' }}
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Email</h4>
                    <p className="text-slate-600">info@ictservices.ie</p>
                    <p className="text-slate-600">support@ictservices.ie</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: '#fde8ec' }}
                  >
                    <MapPin className="w-6 h-6"
                      style={{ color: '#df1454' }}
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Locations</h4>
                    <p className="text-slate-600">
                      9 offices across Ireland
                      <br />
                      Nationwide coverage, north and south
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Support Hours */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200">
              <h4 className="font-semibold text-slate-900 mb-3">Support Hours</h4>
              <div className="space-y-2 text-slate-600">
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
          <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-8 lg:p-10 rounded-2xl">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">
              Send us a message
            </h3>

            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your full name"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 transition-all outline-none"
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
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 transition-all outline-none"
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
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 transition-all outline-none"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  placeholder="Tell us about your IT needs..."
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 transition-all outline-none resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 text-white rounded-lg font-semibold transition-all hover:scale-105 shadow-lg"
                style={{ backgroundColor: '#df1454' }}
              >
                Send Message
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
