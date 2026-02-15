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
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center"
                style={{
                  background: 'linear-gradient(135deg, #df1454, #ec87a7)'
                }}
              >
                <span className="text-white font-bold text-lg">ICT</span>
              </div>
              <div className="text-xl font-bold text-white">
                ICT Services
              </div>
            </div>

            <p className="text-slate-400 mb-6 leading-relaxed">
              Ireland's foremost field services, roll-out and IT support company. 100+ expert engineers providing nationwide coverage.
            </p>

            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:scale-110 transition-all"
                style={{
                  backgroundColor: '#df1454',
                  transition: 'transform 0.2s ease-in-out'
                }}
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:scale-110 transition-all"
                style={{
                  backgroundColor: '#ec87a7',
                  transition: 'transform 0.2s ease-in-out'
                }}
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:scale-110 transition-all"
                style={{
                  backgroundColor: '#df1454',
                  transition: 'transform 0.2s ease-in-out'
                }}
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold mb-6">Resources</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-6">Contact Us</h4>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 mt-0.5"
                  style={{ color: '#df1454' }}
                />
                <div>
                  <p className="text-sm">+353 1 XXX XXXX</p>
                  <p className="text-sm">+353 1 XXX XXXX</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 mt-0.5"
                  style={{ color: '#ec87a7' }}
                />
                <div>
                  <p className="text-sm">info@ictservices.ie</p>
                  <p className="text-sm">support@ictservices.ie</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5"
                  style={{ color: '#df1454' }}
                />
                <p className="text-sm">
                  9 offices across Ireland<br />
                  Nationwide coverage
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} ICT Services. All rights reserved.
          </p>
          <p className="text-sm text-slate-500">
            Built for excellence. Delivered with precision.
          </p>
        </div>
      </div>
    </footer>
  );
}
