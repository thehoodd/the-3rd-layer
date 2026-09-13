'use client';

import Link from 'next/link';
import { MoveRight, Mail, MessageSquare, MapPin } from 'lucide-react';

export default function HomeCta() {
  return (
    <section id="contact" className="pt-4 sm:pt-6 md:pt-8 pb-20 sm:pb-24 md:pb-28 px-6 md:px-12 bg-[#0A0A0A] text-[#F3F0E9] border-b border-[#0A0A0A] relative dark-grain overflow-hidden select-none">
      {/* Background Graphic Watermark */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 text-[18vw] font-display tracking-[0.12em] text-white/[0.02] select-none pointer-events-none leading-none">
        BUILD
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="border border-white/15 bg-gradient-to-b from-white/[0.03] to-transparent p-8 sm:p-12 md:p-16 lg:p-20 shadow-[0_0_60px_rgba(222,61,28,0.06)] relative overflow-hidden">
          {/* Subtle Top Accent Line */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#DE3D1C] to-transparent" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Left Column: Heading and Context */}
            <div className="lg:col-span-8 space-y-6">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 bg-[#DE3D1C]" />
                <span className="text-xs font-mono uppercase tracking-widest text-[#DE3D1C] font-bold">
                  COMMISSION ARCHITECTURE // 2026
                </span>
              </div>

              <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display uppercase tracking-tight text-white leading-[0.9]">
                HAVE A PROJECT <br />
                <span className="text-[#DE3D1C]">IN MIND?</span>
              </h2>

              <p className="text-sm sm:text-base md:text-lg text-[#F3F0E9]/75 font-light leading-relaxed max-w-2xl">
                Whether you are launching a new digital venture, engineering complex web architectures, or scaling an existing enterprise system, our engineers and designers are ready to deploy. Tell us about your vision, scope, and timeline.
              </p>

              {/* Direct Quick Badges */}
              <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2 text-xs font-mono text-white/60">
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#DE3D1C]" />
                  <span>hello@the3rdlayers.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-3.5 h-3.5 text-[#DE3D1C]" />
                  <span>+91 93135 04709</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#DE3D1C]" />
                  <span>Surat, India</span>
                </div>
              </div>
            </div>

            {/* Right Column: High-Impact Build Project CTA Button */}
            <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center gap-4">
              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-between gap-4 w-full sm:w-auto bg-[#DE3D1C] hover:bg-white text-white hover:text-[#0A0A0A] px-8 py-5 sm:py-6 text-xs sm:text-sm font-mono font-bold tracking-widest uppercase transition-all duration-200 shadow-[6px_6px_0px_0px_rgba(255,255,255,0.2)] hover:shadow-[6px_6px_0px_0px_rgba(222,61,28,1)] text-center"
              >
                <span>BUILD YOUR PROJECT</span>
                <MoveRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-200 shrink-0" />
              </Link>

              <div className="text-[10px] font-mono text-white/40 uppercase tracking-widest flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>ACCEPTING COMMISSIONS // Q1–Q2 2026</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
