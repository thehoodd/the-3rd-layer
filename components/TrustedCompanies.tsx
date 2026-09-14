'use client';

import Image from 'next/image';

const clientLogos = [
  { name: 'Sabras Masala', src: '/image/company1-color.png' },
  { name: 'Al Buraq Group', src: '/image/company2-color.png' },
  { name: 'Gurukrupa Enterprise', src: '/image/company3-color.png' },
  { name: 'HM Consultech', src: '/image/company5-color.png' },
  { name: 'Universe EdTech', src: '/image/company6-color.png' },
  { name: 'Uniserve Platform', src: '/image/company7-color.png' },
  { name: 'Altius Group', src: '/image/company8-color.png' },
];

export default function TrustedCompanies() {
  return (
    <section className="pt-10 pb-3 bg-[#F3F0E9] text-[#0A0A0A] overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 bg-[#DE3D1C]" />
          <span className="text-xs font-mono uppercase tracking-widest text-[#0A0A0A] font-bold">
            TRUSTED BY INNOVATIVE BRANDS &amp; FOUNDERS
          </span>
        </div>
        <div className="text-[10px] font-mono text-[#0A0A0A]/40 uppercase tracking-widest">
          PORTFOLIO IMPACT // 2024–2026
        </div>
      </div>

      <div className="w-full border-t border-b border-[#0A0A0A]/15 py-5 bg-white/40">
        <div className="flex overflow-hidden whitespace-nowrap">
          <div className="animate-marquee flex items-center gap-8 sm:gap-10 md:gap-14">
            {clientLogos.map((client, i) => (
              <div
                key={`client-1-${i}`}
                className="relative flex h-8 w-20 items-center justify-center overflow-visible px-2 opacity-75 transition-opacity duration-300 filter grayscale hover:opacity-100 hover:grayscale-0 sm:h-9 sm:w-24 md:h-10 md:w-28 lg:h-12 lg:w-32"
              >
                <Image
                  src={client.src}
                  alt={client.name}
                  width={160}
                  height={80}
                  className="h-full w-auto max-w-full object-contain"
                />
              </div>
            ))}

            {clientLogos.map((client, i) => (
              <div
                key={`client-2-${i}`}
                className="relative flex h-8 w-20 items-center justify-center overflow-visible px-2 opacity-75 transition-opacity duration-300 filter grayscale hover:opacity-100 hover:grayscale-0 sm:h-9 sm:w-24 md:h-10 md:w-28 lg:h-12 lg:w-32"
              >
                <Image
                  src={client.src}
                  alt={client.name}
                  width={160}
                  height={80}
                  className="h-full w-auto max-w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}