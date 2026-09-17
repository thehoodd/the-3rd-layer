'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MoveRight, CheckCircle2, ChevronDown, ArrowUpRight, Loader2 } from 'lucide-react';

const serviceOptions = [
  { value: 'Website Development', label: 'Website Architecture & Next.js' },
  { value: 'E-Commerce Solutions', label: 'Shopify Plus / E-Commerce Store' },
  { value: 'Mobile App Development', label: 'Mobile Application (iOS / Android)' },
  { value: 'Digital Marketing & SEO', label: 'SEO & Growth Marketing' },
  { value: 'Full Retainer / Custom Project', label: 'Full Retainer / Custom Project' },
  { value: 'Crafting Your Idea', label: 'Crafting Your Idea · Ideation & Prototyping' },
];

const socialChannels = [
  {
    name: 'LINKEDIN',
    handle: '/company/the3rdlayers',
    action: 'CONNECT',
    url: 'https://www.linkedin.com/company/the3rdlayers',
  },
  {
    name: 'X / TWITTER',
    handle: '@TheThreeLaye',
    action: 'FOLLOW',
    url: 'https://x.com/TheThreeLaye',
  },
  {
    name: 'GITHUB',
    handle: 'the-three-layers',
    action: 'REPOSITORIES',
    url: 'https://github.com/the-three-layers',
  },
  {
    name: 'INSTAGRAM',
    handle: '@the.three.layers',
    action: 'DISPATCHES',
    url: 'https://www.instagram.com/the.three.layers',
  },
  {
    name: 'WHATSAPP',
    handle: '+91 93135 04709',
    action: 'DIRECT CHAT',
    url: 'https://wa.me/9313504709',
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Website Development',
    details: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.details) return;
    setSending(true);
    setSubmitError('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Something went wrong. Please try again.');
      }

      setSubmitted(true);
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : 'Failed to send your inquiry. Please try again.');
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-36 px-6 md:px-12 bg-[#0A0A0A] text-[#F3F0E9] border-b border-[#0A0A0A] relative dark-grain overflow-hidden">
      {/* Background Graphic Watermark */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 text-[18vw] font-display tracking-[0.12em] text-white/[0.02] select-none pointer-events-none leading-none">
        CONNECT
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start relative z-10">
        {/* Left Column: Dramatic Manifesto & Direct Channels (No box, no 06 tag) */}
        <div className="lg:col-span-5 space-y-8">
          <div>
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-display uppercase tracking-tight text-white leading-[0.88]">
              HAVE A PROJECT<br />
              <span className="text-[#DE3D1C]">IN MIND?</span>
            </h1>
          </div>

          <p className="text-base sm:text-lg text-[#F3F0E9]/80 font-light leading-relaxed max-w-md">
            Let&apos;s build something extraordinary together. Whether you are launching a new digital venture or scaling an existing architecture, we are ready to engineer your solution.
          </p>

          <div className="space-y-3 pt-6 border-t border-white/15 text-xs sm:text-sm font-mono text-white/70">
            <div className="flex items-center gap-3">
              <span className="text-white/40 uppercase text-xs tracking-wider">EMAIL //</span>
              <a href="mailto:hello@the3rdlayers.com" className="text-white hover:text-[#DE3D1C] font-bold transition-colors">
                hello@the3rdlayers.com
              </a>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-white/40 uppercase text-xs tracking-wider">WHATSAPP //</span>
              <a href="https://wa.me/9313504709" target="_blank" rel="noreferrer" className="text-white hover:text-[#DE3D1C] font-bold transition-colors">
                +91 93135 04709
              </a>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-white/40 uppercase text-xs tracking-wider">LOCATION //</span>
              <span className="text-white">SURAT, GUJARAT, INDIA</span>
            </div>

            <div className="pt-2 text-[10px] text-[#DE3D1C] font-bold uppercase tracking-widest">
              ACCEPTING COMMISSIONS WORLDWIDE
            </div>
          </div>
        </div>

        {/* Right Column: Rectangular Editorial Form */}
        <div className="lg:col-span-7 bg-[#F3F0E9] text-[#0A0A0A] p-8 sm:p-12 md:p-14 border-2 border-[#0A0A0A] shadow-[10px_10px_0px_0px_rgba(222,61,28,1)]">
          {submitted ? (
            <div className="py-12 text-center space-y-6">
              <CheckCircle2 className="w-16 h-16 text-[#DE3D1C] mx-auto animate-bounce" />
              <h3 className="text-3xl sm:text-4xl font-display uppercase tracking-tight text-[#0A0A0A]">
                COMMISSION RECEIVED
              </h3>
              <p className="text-sm md:text-base text-[#0A0A0A]/80 font-medium max-w-md mx-auto">
                Thank you for reaching out. A lead systems architect from THE THREE LAYERS will review your project requirements and reply within 24 hours.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-6 border border-[#0A0A0A] bg-[#0A0A0A] hover:bg-[#DE3D1C] hover:border-[#DE3D1C] text-white px-6 py-3 text-xs font-mono uppercase font-bold tracking-widest transition-colors cursor-pointer"
              >
                SUBMIT ANOTHER INQUIRY
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex justify-between items-center border-b border-[#0A0A0A]/20 pb-4">
                <span className="text-xs font-mono uppercase tracking-widest text-[#0A0A0A] font-bold">
                  PROJECT SPECIFICATION FORM
                </span>
                <span className="text-[10px] font-mono text-[#DE3D1C] font-bold">
                  STEP 01/01
                </span>
              </div>

              {/* YOUR NAME */}
              <div className="space-y-2">
                <label className="block text-xs font-mono uppercase tracking-widest text-[#0A0A0A] font-bold">
                  YOUR NAME <span className="text-[#DE3D1C]">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Alexander Vance"
                  className="w-full bg-white border-2 border-[#0A0A0A] px-4 py-3.5 text-[#0A0A0A] font-sans text-sm outline-none focus:border-[#DE3D1C] transition-colors rounded-none placeholder:text-[#0A0A0A]/30"
                />
              </div>

              {/* EMAIL ADDRESS */}
              <div className="space-y-2">
                <label className="block text-xs font-mono uppercase tracking-widest text-[#0A0A0A] font-bold">
                  EMAIL ADDRESS <span className="text-[#DE3D1C]">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="alexander@company.com"
                  className="w-full bg-white border-2 border-[#0A0A0A] px-4 py-3.5 text-[#0A0A0A] font-sans text-sm outline-none focus:border-[#DE3D1C] transition-colors rounded-none placeholder:text-[#0A0A0A]/30"
                />
              </div>

              {/* SERVICE SELECTION - Custom Brutalist Dropdown */}
              <div className="space-y-2 relative" ref={dropdownRef}>
                <label className="block text-xs font-mono uppercase tracking-widest text-[#0A0A0A] font-bold">
                  PRIMARY SERVICE REQUIRED
                </label>
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className={`w-full bg-white border-2 px-4 py-3.5 flex items-center justify-between text-[#0A0A0A] font-sans text-sm outline-none transition-all duration-200 text-left cursor-pointer ${dropdownOpen ? 'border-[#DE3D1C] ring-1 ring-[#DE3D1C]' : 'border-[#0A0A0A] hover:border-[#DE3D1C]'
                      }`}
                    aria-haspopup="listbox"
                    aria-expanded={dropdownOpen}
                  >
                    <span className="font-medium text-[#0A0A0A]">
                      {serviceOptions.find((opt) => opt.value === formData.service)?.label || formData.service}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#0A0A0A] transition-transform duration-200 ${dropdownOpen ? 'rotate-180 text-[#DE3D1C]' : ''
                        }`}
                    />
                  </button>

                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.15 }}
                        className="absolute left-0 right-0 top-full mt-1.5 bg-[#0A0A0A] border-2 border-[#0A0A0A] text-[#F3F0E9] shadow-[6px_6px_0px_0px_rgba(222,61,28,1)] z-40 overflow-hidden divide-y divide-white/10"
                        role="listbox"
                      >
                        {serviceOptions.map((opt) => {
                          const isSelected = formData.service === opt.value;
                          return (
                            <button
                              key={opt.value}
                              type="button"
                              onClick={() => {
                                setFormData({ ...formData, service: opt.value });
                                setDropdownOpen(false);
                              }}
                              className={`w-full px-4 py-3.5 text-xs font-mono tracking-wider uppercase text-left flex items-center justify-between transition-colors cursor-pointer ${isSelected
                                  ? 'bg-[#DE3D1C] text-white font-bold'
                                  : 'hover:bg-white/10 text-white/90'
                                }`}
                              role="option"
                              aria-selected={isSelected}
                            >
                              <span>{opt.label}</span>
                              {isSelected ? (
                                <span className="w-2 h-2 rounded-full bg-white" />
                              ) : (
                                <span className="text-[10px] text-white/40">SELECT</span>
                              )}
                            </button>
                          );
                        })}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* PROJECT DETAILS */}
              <div className="space-y-2">
                <label className="block text-xs font-mono uppercase tracking-widest text-[#0A0A0A] font-bold">
                  PROJECT DETAILS & GOALS <span className="text-[#DE3D1C]">*</span>
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  placeholder="Briefly describe your objectives, target timeline, and budget parameters..."
                  className="w-full bg-white border-2 border-[#0A0A0A] px-4 py-3.5 text-[#0A0A0A] font-sans text-sm outline-none focus:border-[#DE3D1C] transition-colors rounded-none resize-none placeholder:text-[#0A0A0A]/30"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={sending}
                className="group w-full bg-[#0A0A0A] hover:bg-[#DE3D1C] disabled:hover:bg-[#0A0A0A] disabled:opacity-70 text-white py-4 px-6 text-xs font-mono font-bold tracking-widest uppercase flex items-center justify-center gap-3 transition-all duration-200 cursor-pointer disabled:cursor-wait"
              >
                {sending ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>SENDING...</span>
                  </>
                ) : (
                  <>
                    <span>START YOUR PROJECT</span>
                    <MoveRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                  </>
                )}
              </button>

              {submitError && (
                <p className="text-xs font-mono text-[#DE3D1C] font-bold uppercase tracking-wider border border-[#DE3D1C]/40 bg-[#DE3D1C]/5 px-3 py-2.5">
                  {submitError}
                </p>
              )}
            </form>
          )}
        </div>
      </div>

      {/* Dedicated Social Channels Section with Spacing */}
      <div className="max-w-7xl mx-auto mt-20 md:mt-28 pt-12 border-t border-white/15 relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#DE3D1C] font-bold block mb-1">
              / DIRECTORY & NETWORKS
            </span>
            <h3 className="text-2xl sm:text-4xl font-display uppercase tracking-tight text-white">
              CONNECT ACROSS CHANNELS
            </h3>
          </div>
          <p className="text-xs font-mono text-white/50 max-w-sm">
            Direct communication lines, design tokens, and technical engineering dispatches.
          </p>
        </div>

        {/* 5 Social Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          {socialChannels.map((s) => (
            <a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noreferrer"
              className="group border border-white/15 bg-white/[0.02] hover:bg-[#DE3D1C] hover:border-[#DE3D1C] p-4 sm:p-5 transition-all duration-200 flex flex-col justify-between h-28 sm:h-32 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase tracking-widest text-white/40 group-hover:text-white/80 transition-colors">
                  {s.action}
                </span>
                <ArrowUpRight className="w-4 h-4 text-white/40 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>
              <div>
                <span className="text-sm sm:text-base font-mono uppercase tracking-wider font-bold text-white group-hover:text-white block">
                  {s.name}
                </span>
                <span className="text-[10px] font-mono text-white/40 group-hover:text-white/80 block mt-0.5 truncate">
                  {s.handle}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}