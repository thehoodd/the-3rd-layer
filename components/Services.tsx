'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const serviceList = [
  {
    num: '01',
    title: 'STRATEGY & ARCHITECTURE',
    desc: 'We define the technical roadmap, competitive landscape, and digital infrastructure required for your business to scale aggressively.',
    deliverables: ['Digital Roadmapping', 'System Architecture', 'Conversion Funnel Audit', 'Tech Stack Evaluation'],
  },
  {
    num: '02',
    title: 'DESIGN & DIGITAL IDENTITY',
    desc: 'Bold, functional, and user-focused digital interfaces crafted with editorial precision, brutalist aesthetics, and seamless usability.',
    deliverables: ['UI/UX Design Systems', 'Design Tokens', 'Micro-Interactions', 'Responsive Prototypes'],
  },
  {
    num: '03',
    title: 'FULL-STACK DEVELOPMENT',
    desc: 'Custom web platforms, mobile apps, and e-commerce engines engineered with Next.js, React, TypeScript, and modern backend architectures.',
    deliverables: ['Next.js Applications', 'Mobile App Development', 'E-Commerce Solutions', 'API & DB Architecture'],
  },
  {
    num: '04',
    title: 'DEPLOYMENT & CLOUD OPS',
    desc: 'Automated CI/CD pipelines, high-availability cloud infrastructure, CDN acceleration, and enterprise-grade security hardening.',
    deliverables: ['Cloud Infrastructure', 'CI/CD Pipelines', 'Performance Optimization', 'SEO Hardening'],
  },
  {
    num: '05',
    title: 'MAINTENANCE & CONTINUOUS GROWTH',
    desc: 'Dedicated ongoing engineering support, uptime monitoring, security patches, and iterative feature rollouts that keep you ahead.',
    deliverables: ['24/7 Monitoring', 'Security Patches', 'Feature Sprints', 'Analytics & CRO'],
  },
];

export default function Services() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section id="services" className="py-24 md:py-32 px-6 md:px-12 bg-[#0A0A0A] text-[#F3F0E9] border-b border-[#0A0A0A] relative dark-grain">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between md:items-end pb-10 border-b border-white/15">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#DE3D1C] font-bold block mb-2">
              02 / CAPABILITIES & SERVICES
            </span>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-display uppercase tracking-tight text-white">
              WHAT WE BUILD
            </h2>
          </div>
          {/* <p className="text-sm md:text-base text-[#F3F0E9]/70 font-light max-w-md mt-4 md:mt-0 leading-relaxed">
            Every service is engineered to connect with the next — high-converting design feeding scalable code, feeding continuous performance.
          </p> */}
        </div>

        {/* Editorial Services List (Horizontal Rows with Thin Separators) */}
        <div className="divide-y divide-white/15 border-b border-white/15">
          {serviceList.map((service, idx) => {
            const isHovered = hoveredIdx === idx;

            return (
              <div
                key={service.num}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                className="group relative transition-all duration-300 py-8 md:py-12 px-4 sm:px-8 hover:bg-[#F3F0E9] hover:text-[#0A0A0A] overflow-hidden cursor-pointer"
              >
                {/* Left accent bar on hover */}
                <div
                  className={`absolute left-0 top-0 bottom-0 w-2 bg-[#DE3D1C] transition-transform duration-300 ${isHovered ? 'scale-y-100' : 'scale-y-0'
                    }`}
                />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                  {/* Service Number */}
                  <div className="lg:col-span-2 flex items-center gap-4">
                    <span className="text-xs font-mono font-bold text-[#DE3D1C] group-hover:text-[#DE3D1C]">
                      [{service.num}]
                    </span>
                    <span className="text-xs font-mono text-white/40 group-hover:text-[#0A0A0A]/40 uppercase tracking-widest hidden sm:inline">
                      SERVICE
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="lg:col-span-7 space-y-2">
                    <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display uppercase tracking-tight text-white group-hover:text-[#0A0A0A] group-hover:translate-x-2 transition-all duration-200">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base text-[#F3F0E9]/70 group-hover:text-[#0A0A0A]/80 font-light leading-relaxed max-w-2xl transition-colors">
                      {service.desc}
                    </p>

                    {/* Deliverables tags */}
                    <div className="flex flex-wrap gap-2 pt-3">
                      {service.deliverables.map((item, dIdx) => (
                        <span
                          key={dIdx}
                          className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 border border-white/20 group-hover:border-[#0A0A0A]/30 text-white/60 group-hover:text-[#0A0A0A] transition-colors"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Column */}
                  <div className="lg:col-span-3 flex justify-end items-center" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col sm:flex-row justify-between items-center text-xs font-mono text-[#F3F0E9]/50">
          <div>CUSTOM SCOPES AND FULL-CYCLE CONTRACTS AVAILABLE</div>
          <Link
            href="/contact"
            className="text-[#DE3D1C] hover:text-white mt-4 sm:mt-0 font-bold uppercase tracking-widest inline-flex items-center gap-1.5 transition-colors"
          >
            <span>REQUEST A CUSTOM SCOPE ESTIMATE</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}