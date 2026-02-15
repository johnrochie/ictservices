import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin } from "lucide-react";

const footerLinks = [
  { name: "Services", href: "#services" },
  { name: "About Us", href: "#about" },
  { name: "Contact", href: "#contact" },
  { name: "Careers", href: "#" }
];

const quickLinks = [
  { name: "Support", href: "#" },
  { name: "Case Studies", href: "#" },
  { name: "Partners", href: "#" },
  { name: "Privacy Policy", href: "#" }
];

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-[#de1352]/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#de1352] to-[#291d91d] flex items-center justify-center shadow-lg shadow-[#de1352]/30">
                <span className="text-gray-5000a192f] font-bold text-lg">ICT</span>
              </div>
              <div className="text-xl font-bold text-gray-900">
                ICT Services
              </div>
            </div>

            <p className="text-gray-5008892b0] mb-6 leading-relaxed">
              Ireland's foremost field services, roll-out and IT support company. 100+ expert engineers providing nationwide coverage.
            </p>

            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white hover:bg-[#de1352] flex items-center justify-center transition-all duration-300 border border-white/10 hover:border-[#de1352]"
                aria-label="Facebook"
              >
                <Facebook size={20} className="text-gray-5008892b0] group-hover:text-gray-5000a192f]" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white hover:bg-[#de1352] flex items-center justify-center transition-all duration-300 border border-white/10 hover:border-[#de1352]"
                aria-label="Twitter"
              >
                <Twitter size={20} className="text-gray-5008892b0] group-hover:text-gray-5000a192f]" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white hover:bg-[#de1352] flex items-center justify-center transition-all duration-300 border border-white/10 hover:border-[#de1352]"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} className="text-gray-5008892b0] group-hover:text-gray-5000a192f]" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gray-900 font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-5008892b0] hover:text-gray-500de1352] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-gray-900 font-semibold mb-6">Resources</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-5008892b0] hover:text-gray-500de1352] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-gray-900 font-semibold mb-6">Contact Us</h4>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-gray-500de1352] mt-0.5" />
                <div>
                  <p className="text-sm text-gray-5008892b0]">+353 1 XXX XXXX</p>
                  <p className="text-sm text-gray-5008892b0]">+353 1 XXX XXXX</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-gray-500de1352] mt-0.5" />
                <div>
                  <p className="text-sm text-gray-5008892b0]">info@ictservices.ie</p>
                  <p className="text-sm text-gray-5008892b0]">support@ictservices.ie</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gray-500de1352] mt-0.5" />
                <p className="text-sm text-gray-5008892b0]">
                  9 offices across Ireland<br />
                  Nationwide coverage
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-5008892b0]">
            © {new Date().getFullYear()} ICT Services. All rights reserved.
          </p>
          <p className="text-sm text-gray-5008892b0]">
            Built for excellence. Delivered with precision.
          </p>
        </div>
      </div>
    </footer>
  );
}
