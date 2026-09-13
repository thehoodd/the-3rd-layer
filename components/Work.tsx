'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { getAlburaqLink } from '@/lib/clientLinks';

const projects = [
  {
    id: '01',
    name: "JENIL'S SABRAS MASALA",
    category: 'E-COMMERCE · SHOPIFY PLUS · CUSTOM ARCHITECTURE',
    desc: 'Full-scale custom Shopify e-commerce flagship engineered with lightning-fast catalog search, high-converting product pages, and automated logistics integration.',
    image: '/image/Jenils_sabras_masala_website.png',
    link: 'https://jenilsmasala.com/',
    tags: ['Shopify Plus', 'React', 'Tailwind CSS', 'Klaviyo'],
  },
  {
    id: '02',
    name: 'ALBURAQ',
    category: 'E-COMMERCE APPLICATION · IOS & ANDROID',
    desc: 'Luxury fragrance and lifestyle commerce application engineered with fast catalog browsing, secure checkout, and cross-platform native mobile performance.',
    image: '/image/Al-Buraq_Samples.jpg',
    link: 'https://apps.apple.com/us/app/al-buraq/',
    tags: ['Flutter', 'iOS', 'Android', 'REST API'],
  },
  {
    id: '03',
    name: 'ALTIUS EDUCATION INC.',
    category: 'WEB APPLICATION & MANAGEMENT PORTAL',
    desc: 'Comprehensive educational management system and modern web portal featuring automated student attendance, administrator console, student profiles, assignment submissions, remark workflows, and multi-role logins.',
    image: '/image/Altius-website.png',
    link: 'https://www.altiuseducation.ca/',
    tags: ['Next.js', 'Portal System', 'Role-Based Auth', 'Cloudflare'],
  },
  {
    id: '04',
    name: 'HM CONSULTANT',
    category: 'CONSULTING PLATFORM · ARCHITECTURE',
    desc: 'Corporate consultation platform delivering interactive service advisories, automated appointment scheduling, and streamlined client intake workflows.',
    image: '/image/www.hmconsultech.com_.png',
    link: 'https://www.hmconsultech.com/',
    tags: ['Next.js', 'React', 'Framer Motion', 'SEO Ops'],
  },
  {
    id: '05',
    name: 'GURUKRUPA',
    category: 'CORPORATE PLATFORM · EXPORT INFRASTRUCTURE',
    desc: 'Industrial manufacturing digital infrastructure built for international buyers with interactive product catalogs, RFQ workflows, and responsive UI.',
    image: '/image/gurukripaenterprise.com_.png',
    link: 'https://gurukripaenterprise.com/',
    tags: ['Next.js 15', 'TypeScript', 'Tailwind', 'Vercel'],
  },
  {
    id: '06',
    name: 'ALICIA STUDIO',
    category: 'CREATIVE STUDIO & BRANDING',
    desc: 'Bespoke editorial portfolio and brand identity showcase engineered for creative direction, contemporary aesthetics, and interactive visual presentation.',
    image: '/image/default-project-preview.jpg',
    link: '/contact',
    tags: ['Editorial UI', 'Brand Design', 'Next.js', 'Tailwind'],
  },
  {
    id: '07',
    name: 'AASHIK AC TECHNICIAN',
    category: 'SERVICE & BOOKING PLATFORM',
    desc: 'On-demand HVAC service platform and customer portal featuring quick appointment dispatch, service catalog, and direct customer contact integration.',
    image: '/image/default-project-preview.jpg',
    link: 'https://actechnicianaashik.shop/',
    tags: ['Responsive Web', 'Service Engine', 'WhatsApp API', 'Tailwind'],
  },
  {
    id: '08',
    name: 'JPG SALOON',
    category: 'SALON & GROOMING SERVICES',
    desc: 'Modern salon digital presence showcasing premium grooming services, treatment menus, stylist portfolios, and easy direct booking inquiries.',
    image: '/image/default-project-preview.jpg',
    link: '/contact',
    tags: ['Service Catalog', 'Mobile First', 'Next.js', 'UI/UX'],
  },
  {
    id: '09',
    name: 'UNIVERSE CLASSES',
    category: 'EDUCATION & COACHING PORTAL',
    desc: 'Informative coaching hub featuring comprehensive academic program syllabi, student assignment modules, batch course resources, and curriculum updates.',
    image: '/image/default-project-preview.jpg',
    link: '/contact',
    tags: ['EdTech UI', 'Course Directory', 'Assignments Portal', 'React'],
  },
];

export default function Work() {
  const [activeProjectIdx, setActiveProjectIdx] = useState(0);
  const topProjects = projects.slice(0, 4);
  const active = topProjects[activeProjectIdx] || topProjects[0];

  const getResolvedLink = (proj: typeof active) => {
    if (proj.id === '02') {
      return getAlburaqLink();
    }
    return proj.link;
  };

  return (
    <section id="work" className="pt-6 md:pt-8 pb-16 md:pb-24 px-6 md:px-12 bg-[#F3F0E9] text-[#0A0A0A] border-b border-[#0A0A0A] relative paper-grain">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between md:items-end border-b border-[#0A0A0A] pb-8">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#DE3D1C] font-bold block mb-2">
              03 / SELECTED WORKS
            </span>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-display uppercase tracking-tight text-[#0A0A0A]">
              REAL PROJECTS.<br />REAL IMPACT.
            </h2>
          </div>
          <div className="mt-6 md:mt-0 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <span className="text-xs font-mono text-[#0A0A0A]/60 uppercase">
              PRODUCTION DEPLOYMENTS
            </span>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 border border-[#0A0A0A] bg-[#0A0A0A] hover:bg-[#DE3D1C] hover:border-[#DE3D1C] text-white px-5 py-2.5 text-xs font-mono uppercase font-bold tracking-widest transition-colors"
            >
              <span>SEE MORE WORK</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Compact Side-by-Side Showcase: Clients Directory on Left, Clean Preview on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 border-2 border-[#0A0A0A] bg-[#F3F0E9] shadow-[6px_6px_0px_0px_rgba(10,10,10,1)]">
          {/* LEFT SIDE: Clients Directory (Span 5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between border-b lg:border-b-0 lg:border-r-2 border-[#0A0A0A] bg-[#F3F0E9]">
            {/* Top Directory Bar */}
            <div className="p-4 bg-[#0A0A0A] text-white flex justify-between items-center text-xs font-mono uppercase tracking-wider border-b border-[#0A0A0A]">
              <span className="font-bold flex items-center gap-2">
                <span className="w-2 h-2 bg-[#DE3D1C]" />
                CLIENT DIRECTORY
              </span>
              <span className="text-white/60 text-[10px]">TOP 4 FEATURED // PREVIEW</span>
            </div>

            {/* Top 4 Companies List (No cut-offs, no scrollbar) */}
            <div className="divide-y divide-[#0A0A0A]/15 flex-1">
              {topProjects.map((proj, idx) => {
                const isSelected = activeProjectIdx === idx;

                return (
                  <div key={proj.id}>
                    <button
                      onClick={() => setActiveProjectIdx(idx)}
                      onMouseEnter={() => setActiveProjectIdx(idx)}
                      className={`w-full text-left p-4 sm:p-4.5 transition-all duration-200 flex flex-col justify-between relative group cursor-pointer ${
                        isSelected
                          ? 'bg-[#0A0A0A] text-[#F3F0E9]'
                          : 'hover:bg-white/70 text-[#0A0A0A]'
                      }`}
                    >
                      {/* Active Left Indicator Bar */}
                      <div
                        className={`absolute left-0 top-0 bottom-0 w-1.5 bg-[#DE3D1C] transition-opacity ${
                          isSelected ? 'opacity-100' : 'opacity-0 group-hover:opacity-40'
                        }`}
                      />

                      <div className="flex justify-between items-center w-full mb-2">
                        <span className="text-xs font-mono font-bold text-[#DE3D1C]">
                          [{proj.id}]
                        </span>

                        <ArrowUpRight
                          className={`w-4 h-4 transition-transform ${
                            isSelected
                              ? 'rotate-45 text-[#DE3D1C]'
                              : 'text-[#0A0A0A]/40 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#0A0A0A]'
                          }`}
                        />
                      </div>

                      <h3 className="text-xl sm:text-2xl font-display uppercase tracking-tight leading-snug">
                        {proj.name}
                      </h3>

                      <p
                        className={`text-xs font-mono tracking-wider uppercase mt-1 ${
                          isSelected ? 'text-white/60' : 'text-[#0A0A0A]/60'
                        }`}
                      >
                        {proj.category.split('·')[0].trim()}
                      </p>
                    </button>

                    {/* Mobile-only preview that expands right under the tapped client */}
                    <AnimatePresence initial={false}>
                      {isSelected && (
                        <motion.div
                          key="preview"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                          className="lg:hidden overflow-hidden border-t-2 border-[#0A0A0A] bg-white"
                        >
                          <div className="relative w-full h-[210px] bg-[#0A0A0A] overflow-hidden flex items-center justify-center">
                            <Image
                              src={proj.image}
                              alt={proj.name}
                              fill
                              sizes="100vw"
                              className="object-cover object-top"
                            />
                          </div>
                          <div className="p-4 space-y-3">
                            <p className="text-[10px] font-mono uppercase tracking-wider text-[#DE3D1C] font-bold leading-relaxed">
                              {proj.category.replaceAll(' · ', ' ').replaceAll('·', '/')}
                            </p>
                            <p className="text-[11px] text-[#0A0A0A]/80 font-light leading-relaxed">
                              {proj.desc}
                            </p>
                            <div className="flex flex-wrap gap-1.5">
                              {proj.tags.map((tag, tIdx) => (
                                <span
                                  key={tIdx}
                                  className="text-[9px] font-mono uppercase tracking-wider px-2 py-0.5 bg-[#F3F0E9] text-[#0A0A0A] border border-[#0A0A0A]/20"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                            <a
                              href={getResolvedLink(proj)}
                              target={getResolvedLink(proj).startsWith('http') ? '_blank' : '_self'}
                              rel="noreferrer"
                              className="group w-full inline-flex items-center justify-center gap-2 bg-[#0A0A0A] hover:bg-[#DE3D1C] text-white px-4 py-2.5 text-[11px] font-mono font-bold tracking-widest uppercase transition-all duration-200"
                            >
                              <span>VIEW PROJECT</span>
                              <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                            </a>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            {/* Prominent "SEE MORE WORK" CTA Redirecting to /work */}
            <div className="p-4 sm:p-4.5 bg-white border-t-2 border-[#0A0A0A]">
              <Link
                href="/work"
                className="group w-full py-3.5 px-4 bg-[#0A0A0A] hover:bg-[#DE3D1C] text-white flex items-center justify-between text-xs font-mono font-bold uppercase tracking-widest transition-all duration-200 shadow-sm"
              >
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 bg-[#DE3D1C] group-hover:bg-white transition-colors" />
                  <span>SEE MORE WORK</span>
                </div>
                <div className="flex items-center gap-2 text-white/80 group-hover:text-white">
                  <span className="text-[10px] tracking-wider text-white/60 group-hover:text-white transition-colors">
                    [+{projects.length - topProjects.length} MORE PROJECTS]
                  </span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </Link>
            </div>
          </div>

          {/* RIGHT SIDE: Preview (Span 7 cols, desktop only — mobile uses inline accordion) */}
          <div className="hidden lg:col-span-7 lg:flex flex-col justify-between bg-[#0A0A0A] text-white">
            {/* Top Preview Status Bar */}
            <div className="px-5 py-3.5 bg-[#141414] border-b border-white/15 flex justify-between items-center text-xs font-mono">
              <div className="flex items-center gap-2 text-white/90">
                <span className="w-2 h-2 rounded-full bg-[#DE3D1C] animate-pulse" />
                <span className="uppercase font-bold tracking-wider">PREVIEW // [{active.id}] {active.name}</span>
              </div>
              <div className="text-[10px] uppercase text-white/50 tracking-widest hidden sm:block">
                LIVE PRODUCTION
              </div>
            </div>

            {/* Image Container */}
            <div className="relative w-full h-[260px] sm:h-[320px] lg:h-[350px] bg-[#0A0A0A] border-b border-white/15 overflow-hidden flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0, scale: 0.99 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.01 }}
                  transition={{ duration: 0.3 }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={active.image}
                    alt={active.name}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 55vw"
                    className="object-cover object-top transition-transform duration-500 hover:scale-102"
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Project Details & Primary Action Bar */}
            <div className="p-5 sm:p-7 bg-[#0A0A0A] space-y-4">
              <div>
                <div className="flex items-center gap-3 text-xs font-mono text-[#DE3D1C] font-bold mb-1">
                  <span>{active.category}</span>
                </div>
                <p className="text-xs sm:text-sm text-white/80 font-light leading-relaxed">
                  {active.desc}
                </p>
              </div>

              {/* Tech Tags & Live Link */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-3 border-t border-white/10">
                <div className="flex flex-wrap gap-1.5">
                  {active.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 bg-white/10 text-white/90 border border-white/15"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={getResolvedLink(active)}
                  target={getResolvedLink(active).startsWith('http') ? '_blank' : '_self'}
                  rel="noreferrer"
                  className="group inline-flex items-center justify-center gap-2 bg-[#DE3D1C] hover:bg-white hover:text-[#0A0A0A] text-white px-5 py-2.5 text-xs font-mono font-bold tracking-widest uppercase transition-all duration-200 shadow-md shrink-0"
                >
                  <span>VIEW PROJECT</span>
                  <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
