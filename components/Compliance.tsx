import { Shield, Check, Lock, Eye, Database, Globe } from "lucide-react";

const compliance = [
  {
    icon: Shield,
    title: "GDPR Compliant",
    description: "Fully compliant with EU General Data Protection Regulation. Your data is protected to the highest standards."
  },
  {
    icon: Lock,
    title: "Data Encryption",
    description: "All data encrypted in transit and at rest. We use industry-standard encryption protocols."
  },
  {
    icon: Eye,
    title: "Data Minimisation",
    description: "We only collect data necessary for service delivery. No unnecessary data collection or retention."
  },
  {
    icon: Database,
    title: "Data Retention",
    description: "Data retained only as long as necessary. Automatic deletion policies in place."
  },
  {
    icon: Globe,
    title: "International Transfers",
    description: "Compliant cross-border data transfers with appropriate safeguards and EU-approved mechanisms."
  },
  {
    icon: Check,
    title: "Right to Access",
    description: "Transparency about data processing. Easy access and correction of your personal information."
  }
];

export default function Compliance() {
  return (
    <section id="compliance" className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-slate-50 to-slate-100 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-slate-900 mb-3 sm:mb-4">
            GDPR & Data Compliance
          </h2>
          <p className="text-sm sm:text-base lg:text-xl text-slate-600 max-w-2xl mx-auto">
            Your data security and privacy are our top priority. We uphold the highest standards in data protection.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {compliance.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white p-5 sm:p-6 lg:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-slate-200"
              >
                <div
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center mb-3 sm:mb-4"
                  style={{
                    background: 'linear-gradient(135deg, #df1454, #ec87a7)'
                  }}
                >
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-slate-900 mb-2 sm:mb-3">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Compliance Badge */}
        <div className="mt-8 sm:mt-12 lg:mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-4 sm:px-6 py-3 sm:py-4 bg-white border-2 border-[#df1454] rounded-full">
            <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-[#df1454]" />
            <div className="text-left">
              <div className="text-sm sm:text-base font-bold text-slate-900">
                GDPR Compliant Since 2019
              </div>
              <div className="text-xs sm:text-sm text-slate-600">
                Registered with Irish Data Protection Commission
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
