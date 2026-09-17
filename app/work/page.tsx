'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, MoveRight, ArrowLeft } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { getAlburaqLink } from '@/lib/clientLinks';

const archiveProjects = [
  {
    id: '01',
    name: "Jenil's Sabras Masala",
    category: 'E-Commerce',
    tech: ['Shopify Plus', 'React', 'Tailwind CSS', 'Klaviyo'],
    desc: 'Flagship e-commerce platform designed for global spice distribution, customized product bundle builder, and blazing fast multi-currency checkout.',
    image: '/image/Jenils_sabras_masala_website.png',
    link: 'https://jenilsmasala.com/',
  },
  {
    id: '02',
    name: 'Alburaq',
    category: 'Mobile App',
    tech: ['Flutter', 'iOS', 'Android', 'REST API'],
    desc: 'Luxury fragrance and lifestyle commerce application engineered with smooth catalog browsing, push notification campaigns, and cross-platform native performance.',
    image: '/image/Al-Buraq_Samples.jpg',
    link: 'https://apps.apple.com/us/app/al-buraq/',
  },
  {
    id: '03',
    name: 'Altius Education INC.',
    category: 'Web Application',
    tech: ['Next.js', 'Role-Based Auth', 'Student Portal', 'Admin Dashboard'],
    desc: 'Comprehensive educational management system and modern web portal featuring automated student attendance, administrator console, student profiles, assignment submissions, remark workflows, and multi-role logins.',
    image: '/image/Altius-website.png',
    link: 'https://www.altiuseducation.ca/',
  },
  {
    id: '04',
    name: 'HM Consultant',
    category: 'Consulting Platform',
    tech: ['Next.js', 'React', 'Framer Motion', 'SEO Architecture'],
    desc: 'Corporate consultation platform delivering interactive service advisories, automated appointment scheduling, and streamlined client intake workflows.',
    image: '/image/www.hmconsultech.com_.png',
    link: 'https://www.hmconsultech.com/',
  },
  {
    id: '05',
    name: 'Gurukrupa',
    category: 'Corporate Platform',
    tech: ['Next.js 15', 'TypeScript', 'Tailwind', 'Vercel'],
    desc: 'Precision engineering and manufacturing export infrastructure built with interactive product catalogs, digital RFQ workflows, and responsive UI.',
    image: '/image/gurukripaenterprise.com_.png',
    link: 'https://gurukripaenterprise.com/',
  },
  {
    id: '06',
    name: 'Alicia Studio',
    category: 'Creative Studio',
    tech: ['Editorial UI', 'Brand Design', 'Next.js', 'Tailwind'],
    desc: 'Bespoke editorial portfolio and brand identity showcase engineered for creative direction, contemporary aesthetics, and interactive visual presentation.',
    image: '/image/default-project-preview.jpg',
    link: '/contact',
  },
  {
    id: '07',
    name: 'Aashik AC Technician',
    category: 'Service Platform',
    tech: ['Responsive Web', 'Service Engine', 'WhatsApp API', 'Tailwind'],
    desc: 'On-demand HVAC service platform and customer portal featuring quick appointment dispatch, service catalog, and direct customer contact integration.',
    image: '/image/default-project-preview.jpg',
    link: 'https://actechnicianaashik.shop/',
  },
  {
    id: '08',
    name: 'JPG Saloon',
    category: 'Service Platform',
    tech: ['Service Catalog', 'Mobile First', 'Next.js', 'Booking UI'],
    desc: 'Modern salon digital presence showcasing premium grooming services, treatment menus, stylist portfolios, and easy direct booking inquiries.',
    image: '/image/default-project-preview.jpg',
    link: '/contact',
  },
  {
    id: '09',
    name: 'Universe Classes',
    category: 'Education',
    tech: ['EdTech UI', 'Course Directory', 'Assignments Portal', 'React'],
    desc: 'Informative coaching hub featuring comprehensive academic program syllabi, student assignment modules, batch course resources, and curriculum updates.',
    image: '/image/default-project-preview.jpg',
    link: '/contact',
  },
];

const categories = ['ALL', 'E-Commerce', 'Mobile App', 'Web Application', 'Corporate Platform', 'Consulting Platform', 'Service Platform', 'Education'];

export default function WorkPage() {
  const [selectedCategory, setSelectedCategory] = useState('ALL');

  const filteredProjects =
    selectedCategory === 'ALL'
      ? archiveProjects
      : archiveProjects.filter((p) => p.category === selectedCategory || (selectedCategory === 'Service Platform' && p.category.includes('Service')));

  const getProjectLink = (p: typeof archiveProjects[0]) => {
    if (p.id === '02') {
      return getAlburaqLink();
    }
    return p.link;
  };

  return (
    <main className="bg-[#F3F0E9] text-[#0A0A0A] min-h-screen selection:bg-[#DE3D1C] selection:text-white paper-grain">
      <Navbar />

      {/* Top Hero Banner */}
      <section className="pt-32 md:pt-40 pb-16 px-6 md:px-12 border-b border-[#0A0A0A]">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-[#0A0A0A]/60 hover:text-[#DE3D1C] transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>RETURN HOME</span>
            </Link>
            <span className="text-[#0A0A0A]/30">/</span>
            <span className="text-xs font-mono uppercase tracking-widest text-[#DE3D1C] font-bold">
              PORTFOLIO ARCHIVE
            </span>
          </div>

          <div className="flex flex-col lg:flex-row justify-between lg:items-end gap-6 border-b border-[#0A0A0A]/20 pb-10">
            <div>
              <h1 className="text-5xl sm:text-7xl md:text-8xl font-display uppercase tracking-tight text-[#0A0A0A] leading-none">
                SELECTED WORKS
              </h1>
              <p className="text-sm md:text-base text-[#0A0A0A]/70 font-normal max-w-xl mt-4">
                A curated index of production digital systems, custom e-commerce engines, and high-performance applications deployed by THE THREE LAYERS.
              </p>
            </div>

            {/* Filter pills */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`text-xs font-mono uppercase tracking-wider px-3.5 py-1.5 border transition-all cursor-pointer ${selectedCategory === cat
                      ? 'bg-[#0A0A0A] text-white border-[#0A0A0A]'
                      : 'bg-transparent text-[#0A0A0A]/70 border-[#0A0A0A]/30 hover:border-[#0A0A0A] hover:text-[#0A0A0A]'
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 md:py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {filteredProjects.map((project, idx) => {
              const projectLink = getProjectLink(project);
              const isExternal = projectLink.startsWith('http');

              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="group border-2 border-[#0A0A0A] bg-white flex flex-col justify-between shadow-[6px_6px_0px_0px_rgba(10,10,10,1)] hover:shadow-[10px_10px_0px_0px_rgba(222,61,28,1)] transition-all duration-300"
                >
                  {/* Project Image Frame */}
                  <div className="relative h-64 sm:h-80 bg-[#0A0A0A] overflow-hidden border-b-2 border-[#0A0A0A]">
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover object-top filter grayscale-0 md:grayscale contrast-110 md:group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-black/85 backdrop-blur-md border border-white/20 text-[10px] font-mono text-white px-2.5 py-1 uppercase">
                      [{project.id}] // {project.category}
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-display uppercase tracking-tight text-[#0A0A0A] mb-3">
                        {project.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#0A0A0A]/75 font-light leading-relaxed">
                        {project.desc}
                      </p>
                    </div>

                    <div className="space-y-4 pt-4 border-t border-[#0A0A0A]/10">
                      <div className="flex flex-wrap gap-1.5">
                        {project.tech.map((t, i) => (
                          <span
                            key={i}
                            className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 border border-[#0A0A0A]/20 bg-[#F3F0E9] text-[#0A0A0A]"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      <a
                        href={projectLink}
                        target={isExternal ? '_blank' : '_self'}
                        rel="noreferrer"
                        className="group/btn inline-flex items-center justify-between w-full bg-[#0A0A0A] hover:bg-[#DE3D1C] text-white px-5 py-3 text-xs font-mono font-bold tracking-widest uppercase transition-colors"
                      >
                        <span>VISIT LIVE SYSTEM</span>
                        <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom Conversion CTA */}
      <section className="py-20 px-6 md:px-12 bg-[#0A0A0A] text-[#F3F0E9] border-t border-[#0A0A0A] dark-grain">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <span className="text-xs font-mono uppercase tracking-widest text-[#DE3D1C] font-bold">
            INITIATE A NEW COMMISSION
          </span>
          <h2 className="text-4xl sm:text-6xl font-display uppercase tracking-tight text-white">
            READY TO JOIN OUR PORTFOLIO?
          </h2>
          <p className="text-sm md:text-base text-[#F3F0E9]/70 font-light max-w-xl mx-auto">
            We partner with a limited number of clients each quarter to guarantee uncompromising attention to detail and engineering rigor.
          </p>
          <div className="pt-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#DE3D1C] hover:bg-[#C53213] text-white px-8 py-4 text-xs font-mono font-bold tracking-widest uppercase transition-colors shadow-2xl"
            >
              <span>START YOUR PROJECT</span>
              <MoveRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}