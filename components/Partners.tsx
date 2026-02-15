"use client";

import { useState } from "react";
import Image from "next/image";

const partners = [
  {
    name: "Cisco",
    filename: "cisco.png",
    alt: "Cisco Logo",
    color: "#00bceb"
  },
  {
    name: "Microsoft",
    filename: "microsoft.png",
    alt: "Microsoft Logo",
    color: "#00a4ef"
  },
  {
    name: "HP",
    filename: "hp.png",
    alt: "HP Logo",
    color: "#0096d6"
  },
  {
    name: "Dell",
    filename: "dell.png",
    alt: "Dell Logo",
    color: "#0c2340"
  },
  {
    name: "VMware",
    filename: "vmware.png",
    alt: "VMware Logo",
    color: "#607078"
  },
  {
    name: "Oracle",
    filename: "oracle.png",
    alt: "Oracle Logo",
    color: "#f80000"
  }
];

interface PartnerLogoProps {
  partner: typeof partners[0];
  index: number;
}

function PartnerLogo({ partner, index }: PartnerLogoProps) {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div
      key={index}
      className="flex flex-col items-center justify-center p-4 sm:p-6 bg-slate-50 rounded-xl border border-slate-200 hover:border-[#df1454] transition-all hover:scale-105"
    >
      {/* Logo Image with Fallback */}
      <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mb-2 sm:mb-3 flex items-center justify-center">
        {!imageError ? (
          <Image
            src={`/partners/${partner.filename}`}
            alt={partner.alt}
            width={120}
            height={60}
            className={`h-10 sm:h-12 lg:h-16 w-auto object-contain transition-opacity duration-300 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => setImageLoaded(true)}
            onError={() => {
              setImageError(true);
              setImageLoaded(true);
            }}
          />
        ) : (
          <div
            className="w-full h-full rounded-lg flex items-center justify-center px-2"
            style={{ backgroundColor: `${partner.color}20` }}
          >
            <span
              className="font-bold text-xs sm:text-sm lg:text-base text-center leading-tight"
              style={{ color: partner.color }}
            >
              {partner.name}
            </span>
          </div>
        )}
      </div>

      <span className="text-xs sm:text-sm font-semibold text-slate-700">
        {partner.name}
      </span>
    </div>
  );
}

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
          {partners.map((partner, index) => (
            <PartnerLogo key={index} partner={partner} index={index} />
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
