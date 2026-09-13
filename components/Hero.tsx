'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ArrowDown, ArrowUpRight, MoveRight } from 'lucide-react';

interface SystemModule {
  id: string;
  num: string;
  name: string;
  subStages: string[];
  desc: string;
  cx: number;
  cy: number;
  labelX: number;
  labelY: number;
}

const modules: SystemModule[] = [
  {
    id: 'strategy',
    num: '01',
    name: 'STRATEGY',
    subStages: ['RESEARCH', 'ANALYZE', 'PLAN', 'ARCHITECT'],
    desc: 'System roadmapping & competitive infrastructure',
    cx: 270,
    cy: 88,
    labelX: 270,
    labelY: 54,
  },
  {
    id: 'design',
    num: '02',
    name: 'DESIGN',
    subStages: ['UX', 'ARCHITECTURE', 'PROTOTYPE', 'TOKENS'],
    desc: 'Brutalist identity & conversion UX systems',
    cx: 92,
    cy: 270,
    labelX: 86,
    labelY: 270,
  },
  {
    id: 'development',
    num: '03',
    name: 'DEVELOPMENT',
    subStages: ['ENGINEER', 'TEST', 'INTEGRATE', 'HARDEN'],
    desc: 'Next.js full-stack engines & cloud backends',
    cx: 448,
    cy: 270,
    labelX: 454,
    labelY: 270,
  },
  {
    id: 'launch',
    num: '04',
    name: 'LAUNCH',
    subStages: ['DEPLOY', 'MONITOR', 'OPTIMIZE', 'SCALE'],
    desc: 'Automated CI/CD & continuous growth ops',
    cx: 270,
    cy: 452,
    labelX: 270,
    labelY: 486,
  },
];

export default function Hero() {
  const [hoveredModule, setHoveredModule] = useState<string | null>(null);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const activeMod = modules.find((m) => m.id === hoveredModule);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 16; // -8px to +8px
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 16; // -8px to +8px
    setMouseOffset({ x, y });
  };

  const handleMouseLeave = () => {
    setMouseOffset({ x: 0, y: 0 });
    setHoveredModule(null);
  };

  return (
    <section className="relative w-full bg-[#F3F0E9] text-[#0A0A0A] pt-16 md:pt-20 border-b border-[#0A0A0A] overflow-hidden flex flex-col justify-between">
      {/* Top Main Grid (Asymmetric Split Layout) */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 min-h-[540px] lg:min-h-[600px] xl:min-h-[640px] border-b border-[#0A0A0A]">
        {/* LEFT COLUMN: Typography & Editorial Manifesto (Span 7 cols) */}
        <div className="lg:col-span-7 p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-between relative border-b lg:border-b-0 border-[#0A0A0A] bg-[#F3F0E9] paper-grain">
          {/* Top Metadata row */}
          <div className="flex justify-between items-start">
            <div className="text-[11px] font-mono uppercase tracking-widest text-[#0A0A0A]/70 leading-tight">
              <span className="block text-[#DE3D1C] font-bold">DIGITAL PARTNERS</span>
              <span className="block font-semibold">FOR GROWTH</span>
            </div>

            <div className="hidden sm:block text-[10px] font-mono text-[#0A0A0A]/40 uppercase tracking-widest text-right">
              VOL. 26 / ISSUE 03<br />
              SYS.DEPLOY // ARCH.V4
            </div>
          </div>

          {/* Center Giant Headline */}
          <div className="my-4 md:my-6">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-0"
            >
              <div className="flex items-start">
                <h1 className="text-[15vw] sm:text-[11vw] lg:text-[8.8vw] font-display leading-[0.84] tracking-[0.02em] uppercase text-[#0A0A0A]">
                  IDEAS
                </h1>
                {/* Burnt Orange Asterisk Graphic */}
                <span className="text-[#DE3D1C] text-[7vw] sm:text-[5vw] lg:text-[3.8vw] font-sans ml-2 md:ml-3 -mt-1 md:-mt-2 animate-spin-slow inline-block select-none">
                  ✱
                </span>
              </div>

              <h1 className="text-[15vw] sm:text-[11vw] lg:text-[8.8vw] font-display leading-[0.84] tracking-[0.02em] uppercase text-[#0A0A0A]">
                CODE
              </h1>

              <h1 className="text-[15vw] sm:text-[11vw] lg:text-[8.8vw] font-display leading-[0.84] tracking-[0.02em] uppercase text-[#0A0A0A]">
                IMPACT
              </h1>
            </motion.div>

            {/* Editorial Paragraph with underline styling */}
            <div className="mt-5 pt-3 flex flex-col md:flex-row md:items-end justify-between gap-5">
              <div className="relative pl-4 border-l-2 border-[#DE3D1C] max-w-md">
                <p className="text-xs sm:text-sm md:text-base text-[#0A0A0A]/90 font-medium leading-snug">
                  We design, develop and deploy digital systems that help businesses grow faster and smarter.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-2.5 pt-1">
                <Link
                  href="/work"
                  className="group inline-flex items-center gap-2 bg-[#0A0A0A] hover:bg-[#DE3D1C] text-[#F3F0E9] px-5 py-3 text-xs font-mono font-bold tracking-widest uppercase transition-all duration-200"
                >
                  <span>VIEW OUR WORK</span>
                  <MoveRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 border border-[#0A0A0A] hover:border-[#DE3D1C] hover:text-[#DE3D1C] bg-transparent text-[#0A0A0A] px-4 py-3 text-xs font-mono font-bold tracking-widest uppercase transition-all duration-200"
                >
                  <span>LET&apos;S TALK</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom Left Scroll Indicator & Coordinates */}
          <div className="flex justify-between items-end pt-3 border-t border-[#0A0A0A]/10 text-[10px] sm:text-[11px] font-mono text-[#0A0A0A]/60">
            <div className="flex items-center gap-2 uppercase tracking-widest">
              <ArrowDown className="w-3 h-3 animate-bounce text-[#DE3D1C]" />
              <span>SCROLL TO EXPLORE</span>
            </div>
            <div className="hidden sm:block uppercase tracking-widest font-mono text-[10px]">
              21.1702° N, 72.8311° E
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Interactive Digital-System Interface (Span 5 cols) */}
        <div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="lg:col-span-5 flex flex-col justify-between bg-[#F3F0E9] relative overflow-hidden select-none p-5 sm:p-7 md:p-8"
        >
          {/* Subtle Technical Engineering Grid Overlay */}
          <div className="absolute inset-0 pointer-events-none opacity-40">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="techGrid" width="36" height="36" patternUnits="userSpaceOnUse">
                  <path d="M 36 0 L 0 0 0 36" fill="none" stroke="#0A0A0A" strokeWidth="0.5" strokeOpacity="0.12" />
                  <circle cx="0" cy="0" r="0.75" fill="#0A0A0A" fillOpacity="0.25" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#techGrid)" />
            </svg>
          </div>

          {/* Top Interface Metadata Strip */}
          <div className="relative z-10 flex justify-between items-center text-[10px] font-mono uppercase tracking-widest pb-3 border-b border-[#0A0A0A]/15 text-[#0A0A0A]/70">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#DE3D1C] animate-pulse" />
              <span className="font-bold text-[#0A0A0A]">LIVE SYS.01 // ARCH.OS</span>
            </div>
            <div className="flex items-center gap-1.5 font-bold">
              <span className="text-[#0A0A0A]/40">STATUS:</span>
              <span className="text-[#DE3D1C]">● OPERATIONAL</span>
            </div>
          </div>

          {/* Center Interactive System Architecture Map */}
          <div className="relative z-10 flex-1 flex flex-col items-center justify-center my-3 sm:my-5">
            <div
              className="relative w-full max-w-[460px] aspect-square flex items-center justify-center transition-transform duration-300 ease-out"
              style={{
                transform: `translate3d(${mouseOffset.x}px, ${mouseOffset.y}px, 0)`,
              }}
            >
              {/* Primary SVG System Visualization */}
              <svg
                viewBox="0 0 540 540"
                className="w-full h-full overflow-visible"
                preserveAspectRatio="xMidYMid meet"
              >
                <defs>
                  {/* Subtle radial glow filter for active nodes */}
                  <filter id="subtleGlow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>

                {/* --- Grid Alignment Marks & Perimeter Bounds --- */}
                <rect
                  x="20"
                  y="20"
                  width="500"
                  height="500"
                  fill="none"
                  stroke="#0A0A0A"
                  strokeWidth="0.75"
                  strokeOpacity="0.15"
                  strokeDasharray="4 8"
                />

                {/* Corner Precision Calipers */}
                <path d="M 20 35 L 20 20 L 35 20" fill="none" stroke="#0A0A0A" strokeWidth="1.5" strokeOpacity="0.6" />
                <path d="M 520 35 L 520 20 L 505 20" fill="none" stroke="#0A0A0A" strokeWidth="1.5" strokeOpacity="0.6" />
                <path d="M 20 505 L 20 520 L 35 520" fill="none" stroke="#0A0A0A" strokeWidth="1.5" strokeOpacity="0.6" />
                <path d="M 520 505 L 520 520 L 505 520" fill="none" stroke="#0A0A0A" strokeWidth="1.5" strokeOpacity="0.6" />

                {/* Primary Crosshairs (Axes) passing through center (270, 270) */}
                <line x1="20" y1="270" x2="520" y2="270" stroke="#0A0A0A" strokeWidth="0.75" strokeOpacity="0.25" />
                <line x1="270" y1="20" x2="270" y2="520" stroke="#0A0A0A" strokeWidth="0.75" strokeOpacity="0.25" />

                {/* Axis Coordinate Calibration Tick Marks */}
                {[110, 150, 190, 230, 310, 350, 390, 430].map((pos) => (
                  <g key={`tick-${pos}`}>
                    <line x1={pos} y1="267" x2={pos} y2="273" stroke="#0A0A0A" strokeWidth="1" strokeOpacity="0.35" />
                    <line x1="267" y1={pos} x2="273" y2={pos} stroke="#0A0A0A" strokeWidth="1" strokeOpacity="0.35" />
                  </g>
                ))}

                {/* --- Concentric Radar & Architecture Rings --- */}
                {/* Outermost Gauge Ring with Measurement Dots */}
                <circle
                  cx="270"
                  cy="270"
                  r="215"
                  fill="none"
                  stroke="#0A0A0A"
                  strokeWidth="0.5"
                  strokeOpacity="0.2"
                />

                {/* Rotating Dashed Technical Ring (Calm, 45s Cycle) */}
                <circle
                  cx="270"
                  cy="270"
                  r="170"
                  fill="none"
                  stroke="#0A0A0A"
                  strokeWidth="1.2"
                  strokeDasharray="4 6"
                  strokeOpacity="0.45"
                  className="origin-center animate-spin-slow"
                />

                {/* Middle Continuous Boundary Ring */}
                <circle
                  cx="270"
                  cy="270"
                  r="120"
                  fill="none"
                  stroke={hoveredModule ? '#DE3D1C' : '#0A0A0A'}
                  strokeWidth={hoveredModule ? '1.5' : '1'}
                  strokeOpacity={hoveredModule ? '0.7' : '0.3'}
                  className="transition-colors duration-300"
                />

                {/* Inner Core Guide Ring */}
                <circle
                  cx="270"
                  cy="270"
                  r="72"
                  fill="none"
                  stroke="#0A0A0A"
                  strokeWidth="0.75"
                  strokeOpacity="0.25"
                />

                {/* Orbiting Satellite Node on middle ring */}
                <circle
                  cx="270"
                  cy="150"
                  r="3"
                  fill="#DE3D1C"
                  className="origin-center animate-spin-slow"
                  style={{ animationDuration: '32s' }}
                />

                {/* Subtle Coordinate Satellite Points */}
                <circle cx="190" cy="190" r="2" fill="#0A0A0A" fillOpacity="0.4" />
                <circle cx="350" cy="190" r="2" fill="#0A0A0A" fillOpacity="0.4" />
                <circle cx="190" cy="350" r="2" fill="#0A0A0A" fillOpacity="0.4" />
                <circle cx="350" cy="350" r="2" fill="#0A0A0A" fillOpacity="0.4" />

                {/* --- Connecting Traces to the 4 Modules --- */}
                {/* 01 STRATEGY: Top Vertical Trace */}
                <line
                  x1="270"
                  y1="75"
                  x2="270"
                  y2="225"
                  stroke={hoveredModule === 'strategy' ? '#DE3D1C' : '#0A0A0A'}
                  strokeWidth={hoveredModule === 'strategy' ? '2' : '1'}
                  strokeOpacity={hoveredModule === 'strategy' ? '1' : '0.4'}
                  className="transition-colors duration-200"
                />
                <circle
                  cx="270"
                  cy="198"
                  r={hoveredModule === 'strategy' ? '4' : '2.5'}
                  fill={hoveredModule === 'strategy' ? '#DE3D1C' : '#0A0A0A'}
                  className="transition-all duration-200"
                />

                {/* 02 DESIGN: Left Horizontal Trace */}
                <line
                  x1="135"
                  y1="270"
                  x2="225"
                  y2="270"
                  stroke={hoveredModule === 'design' ? '#DE3D1C' : '#0A0A0A'}
                  strokeWidth={hoveredModule === 'design' ? '2' : '1'}
                  strokeOpacity={hoveredModule === 'design' ? '1' : '0.4'}
                  className="transition-colors duration-200"
                />
                <circle
                  cx="198"
                  cy="270"
                  r={hoveredModule === 'design' ? '4' : '2.5'}
                  fill={hoveredModule === 'design' ? '#DE3D1C' : '#0A0A0A'}
                  className="transition-all duration-200"
                />

                {/* 03 DEVELOPMENT: Right Horizontal Trace */}
                <line
                  x1="315"
                  y1="270"
                  x2="405"
                  y2="270"
                  stroke={hoveredModule === 'development' ? '#DE3D1C' : '#0A0A0A'}
                  strokeWidth={hoveredModule === 'development' ? '2' : '1'}
                  strokeOpacity={hoveredModule === 'development' ? '1' : '0.4'}
                  className="transition-colors duration-200"
                />
                <circle
                  cx="342"
                  cy="270"
                  r={hoveredModule === 'development' ? '4' : '2.5'}
                  fill={hoveredModule === 'development' ? '#DE3D1C' : '#0A0A0A'}
                  className="transition-all duration-200"
                />

                {/* 04 LAUNCH: Bottom Vertical Trace */}
                <line
                  x1="270"
                  y1="315"
                  x2="270"
                  y2="465"
                  stroke={hoveredModule === 'launch' ? '#DE3D1C' : '#0A0A0A'}
                  strokeWidth={hoveredModule === 'launch' ? '2' : '1'}
                  strokeOpacity={hoveredModule === 'launch' ? '1' : '0.4'}
                  className="transition-colors duration-200"
                />
                <circle
                  cx="270"
                  cy="342"
                  r={hoveredModule === 'launch' ? '4' : '2.5'}
                  fill={hoveredModule === 'launch' ? '#DE3D1C' : '#0A0A0A'}
                  className="transition-all duration-200"
                />

                {/* --- CENTRAL CORE: THE THREE LAYERS --- */}
                {/* Outer concentric pulse ring */}
                <circle
                  cx="270"
                  cy="270"
                  r="52"
                  fill="none"
                  stroke="#DE3D1C"
                  strokeWidth="1.5"
                  strokeOpacity="0.4"
                  strokeDasharray="3 3"
                />

                {/* Solid Red Core */}
                <circle
                  cx="270"
                  cy="270"
                  r="45"
                  fill="#DE3D1C"
                  className="drop-shadow-md"
                />

                {/* Core White Monogram Typography */}
                <text
                  x="270"
                  y="265"
                  textAnchor="middle"
                  className="font-display font-black fill-white text-[15px] tracking-tight leading-none pointer-events-none select-none"
                >
                  THREE
                </text>
                <text
                  x="270"
                  y="280"
                  textAnchor="middle"
                  className="font-mono font-bold fill-white text-[8px] tracking-[0.22em] pointer-events-none select-none"
                >
                  LAYERS
                </text>
              </svg>

              {/* --- Interactive HTML Module Nodes Layer (Positioned over SVG) --- */}
              {/* 01 STRATEGY (North) */}
              <div
                onMouseEnter={() => setHoveredModule('strategy')}
                onMouseLeave={() => setHoveredModule(null)}
                className="absolute top-2 left-1/2 -translate-x-1/2 cursor-pointer group z-20"
              >
                <div
                  className={`flex items-center gap-2 px-3 py-1.5 border text-xs font-mono uppercase tracking-wider transition-all duration-200 shadow-sm ${hoveredModule === 'strategy'
                      ? 'border-[#DE3D1C] bg-[#DE3D1C] text-white scale-105'
                      : 'border-[#0A0A0A] bg-white text-[#0A0A0A] hover:border-[#DE3D1C]'
                    }`}
                >
                  <span className={`font-bold ${hoveredModule === 'strategy' ? 'text-white' : 'text-[#DE3D1C]'}`}>
                    [01]
                  </span>
                  <span className="font-bold">STRATEGY</span>
                </div>
              </div>

              {/* 02 DESIGN (West) */}
              <div
                onMouseEnter={() => setHoveredModule('design')}
                onMouseLeave={() => setHoveredModule(null)}
                className="absolute left-0 top-1/2 -translate-y-1/2 cursor-pointer group z-20"
              >
                <div
                  className={`flex items-center gap-2 px-3 py-1.5 border text-xs font-mono uppercase tracking-wider transition-all duration-200 shadow-sm ${hoveredModule === 'design'
                      ? 'border-[#DE3D1C] bg-[#DE3D1C] text-white scale-105'
                      : 'border-[#0A0A0A] bg-white text-[#0A0A0A] hover:border-[#DE3D1C]'
                    }`}
                >
                  <span className={`font-bold ${hoveredModule === 'design' ? 'text-white' : 'text-[#DE3D1C]'}`}>
                    [02]
                  </span>
                  <span className="font-bold">DESIGN</span>
                </div>
              </div>

              {/* 03 DEVELOPMENT (East) */}
              <div
                onMouseEnter={() => setHoveredModule('development')}
                onMouseLeave={() => setHoveredModule(null)}
                className="absolute right-0 top-1/2 -translate-y-1/2 cursor-pointer group z-20"
              >
                <div
                  className={`flex items-center gap-2 px-3 py-1.5 border text-xs font-mono uppercase tracking-wider transition-all duration-200 shadow-sm ${hoveredModule === 'development'
                      ? 'border-[#DE3D1C] bg-[#DE3D1C] text-white scale-105'
                      : 'border-[#0A0A0A] bg-white text-[#0A0A0A] hover:border-[#DE3D1C]'
                    }`}
                >
                  <span className={`font-bold ${hoveredModule === 'development' ? 'text-white' : 'text-[#DE3D1C]'}`}>
                    [03]
                  </span>
                  <span className="font-bold">DEVELOPMENT</span>
                </div>
              </div>

              {/* 04 LAUNCH (South) */}
              <div
                onMouseEnter={() => setHoveredModule('launch')}
                onMouseLeave={() => setHoveredModule(null)}
                className="absolute bottom-2 left-1/2 -translate-x-1/2 cursor-pointer group z-20"
              >
                <div
                  className={`flex items-center gap-2 px-3 py-1.5 border text-xs font-mono uppercase tracking-wider transition-all duration-200 shadow-sm ${hoveredModule === 'launch'
                      ? 'border-[#DE3D1C] bg-[#DE3D1C] text-white scale-105'
                      : 'border-[#0A0A0A] bg-white text-[#0A0A0A] hover:border-[#DE3D1C]'
                    }`}
                >
                  <span className={`font-bold ${hoveredModule === 'launch' ? 'text-white' : 'text-[#DE3D1C]'}`}>
                    [04]
                  </span>
                  <span className="font-bold">LAUNCH</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Active Telemetry Box (Interactive Sub-Stage Readout) */}
          <div className="relative z-10 bg-white/90 border border-[#0A0A0A]/20 backdrop-blur-sm p-3 sm:p-3.5 transition-all duration-200">
            <AnimatePresence mode="wait">
              {activeMod ? (
                <motion.div
                  key={activeMod.id}
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.15 }}
                  className="space-y-1.5"
                >
                  <div className="flex justify-between items-center text-[10px] font-mono">
                    <span className="text-[#DE3D1C] font-bold uppercase tracking-wider">
                      ACTIVE // [{activeMod.num}] {activeMod.name}
                    </span>
                    <span className="text-[#0A0A0A]/50 uppercase">ENGAGED</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-0.5">
                    {activeMod.subStages.map((stage, idx) => (
                      <span
                        key={idx}
                        className="text-[9px] font-mono uppercase tracking-wider px-2 py-0.5 bg-[#0A0A0A] text-white"
                      >
                        {stage}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="idle"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[10px] font-mono text-[#0A0A0A]/70"
                >
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DE3D1C] animate-ping" />
                    <span className="uppercase tracking-widest text-[#0A0A0A] font-bold">
                      BUILDING SYSTEMS FOR SCALE
                    </span>
                  </div>
                  <span className="uppercase tracking-widest text-[9px] text-[#0A0A0A]/50">
                    HOVER NODES TO INSPECT ARCHITECTURE
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Bottom Edge Coordinates & Specification Bar */}
          <div className="relative z-10 flex justify-between items-center text-[9px] font-mono text-[#0A0A0A]/50 uppercase tracking-widest pt-2.5 mt-1 border-t border-[#0A0A0A]/10">
            <span>MODULES // 04 CONNECTED</span>
            <span>21.1702° N, 72.8311° E</span>
          </div>
        </div>
      </div>

      {/* Bottom WHAT WE DO Quick Bar (Integrated 4-Column Strip - PRESERVED) */}
      <div className="w-full bg-[#0A0A0A] text-[#F3F0E9] px-6 md:px-10 py-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 items-center">
        {/* Label column */}
        <div className="lg:col-span-1 border-b sm:border-b-0 sm:border-r border-white/15 pb-3 sm:pb-0 sm:pr-4">
          <span className="text-xs font-mono uppercase tracking-widest text-[#DE3D1C] font-bold block">
            / WHAT WE DO
          </span>
          <span className="text-[11px] text-[#F3F0E9]/60 font-mono">
            CORE CAPABILITIES
          </span>
        </div>

        {/* 01 Strategy */}
        <div className="group flex flex-col justify-between sm:border-r border-white/10 sm:pr-4">
          <div className="flex justify-between items-center text-xs font-mono text-[#DE3D1C] font-bold">
            <span>01</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
          </div>
          <h4 className="text-sm font-bold text-white uppercase tracking-tight mt-1">Strategy</h4>
          <p className="text-[11px] text-[#F3F0E9]/70 font-light mt-0.5 leading-snug">
            We find the right path for your business.
          </p>
        </div>

        {/* 02 Design */}
        <div className="group flex flex-col justify-between sm:border-r border-white/10 sm:pr-4">
          <div className="flex justify-between items-center text-xs font-mono text-[#DE3D1C] font-bold">
            <span>02</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
          </div>
          <h4 className="text-sm font-bold text-white uppercase tracking-tight mt-1">Design</h4>
          <p className="text-[11px] text-[#F3F0E9]/70 font-light mt-0.5 leading-snug">
            Bold, functional and user-focused.
          </p>
        </div>

        {/* 03 Development */}
        <div className="group flex flex-col justify-between sm:border-r border-white/10 sm:pr-4">
          <div className="flex justify-between items-center text-xs font-mono text-[#DE3D1C] font-bold">
            <span>03</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
          </div>
          <h4 className="text-sm font-bold text-white uppercase tracking-tight mt-1">Development</h4>
          <p className="text-[11px] text-[#F3F0E9]/70 font-light mt-0.5 leading-snug">
            Powerful solutions built for scale.
          </p>
        </div>

        {/* 04 Deployment / Launch */}
        <div className="group flex flex-col justify-between">
          <div className="flex justify-between items-center text-xs font-mono text-[#DE3D1C] font-bold">
            <span>04</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
          </div>
          <h4 className="text-sm font-bold text-white uppercase tracking-tight mt-1">Launch</h4>
          <p className="text-[11px] text-[#F3F0E9]/70 font-light mt-0.5 leading-snug">
            We ship and support your growth.
          </p>
        </div>
      </div>
    </section>
  );
}