export default function Partners() {
  return (
    <section id="partners" className="py-12 sm:py-16 lg:py-24 bg-white px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-slate-900 mb-3 sm:mb-4">
            Trusted Global Partners
          </h2>
          <p className="text-sm sm:text-base lg:text-xl text-slate-600 max-w-2xl mx-auto">
            We work directly with the world's biggest and most innovative manufacturers
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 sm:gap-8 lg:gap-12 justify-items-center items-center">
          {/* Partner Logos - Placeholders (replace with actual Image components) */}
          {[
            { name: "Cisco", color: "#00bceb" },
            { name: "Microsoft", color: "#00a4ef" },
            { name: "HP", color: "#0096d6" },
            { name: "Dell", color: "#0c2340" },
            { name: "VMware", color: "#607078" },
            { name: "Oracle", color: "#f80000" }
          ].map((partner, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-4 sm:p-6 bg-slate-50 rounded-xl border border-slate-200 hover:border-[#df1454] transition-all hover:scale-105"
            >
              {/* Placeholder Logo - Replace with <Image /> when actual logos available */}
              <div
                className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mb-2 sm:mb-3 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: `${partner.color}20` }}
              >
                <span
                  className="font-bold text-sm sm:text-base lg:text-lg"
                  style={{ color: partner.color }}
                >
                  {partner.name}
                </span>
              </div>
              <span className="text-xs sm:text-sm font-semibold text-slate-700">
                {partner.name}
              </span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-8 sm:mt-12 lg:mt-16 text-center">
          <p className="text-sm sm:text-base lg:text-lg text-slate-600 mb-4 sm:mb-6">
            Want to partner with us? Let's discuss how we can work together.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 text-white rounded-full font-semibold transition-all hover:scale-105 shadow-lg text-sm sm:text-base w-full sm:w-auto"
            style={{ backgroundColor: '#df1454' }}
          >
            Become a Partner
          </a>
        </div>
      </div>
    </section>
  );
}
