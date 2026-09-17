'use client';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const quotes = [
  {
    text: 'The Three Layers transformed our online presence and helped us increase leads by 300%.',
    author: 'Rahul Mehta',
    role: 'CEO, Buildify',
  },
  {
    text: 'Their team designed and built a sharp, high-converting platform that feels premium from day one.',
    author: 'Priya Shah',
    role: 'Founder, HealthPlus',
  },
  {
    text: 'Professional, creative, and highly responsive. They made the entire process feel clear and collaborative.',
    author: 'Arjun Patel',
    role: 'Marketing Head, Shopora',
  },
  {
    text: 'The product experience is fast, polished, and built with real business thinking—not just pretty visuals.',
    author: 'Nisha Verma',
    role: 'Director, Elevate Labs',
  },
  {
    text: 'We needed a launch-ready digital presence and they delivered structure, speed, and quality across every touchpoint.',
    author: 'Karan Joshi',
    role: 'Founder, Vanta Forge',
  },
  {
    text: 'From strategy to final build, the process was clear and the final result felt world-class.',
    author: 'Aditi Rao',
    role: 'Brand Lead, Northstar Studio',
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % quotes.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  const visibleQuotes = quotes.slice(activeIndex, activeIndex + 3).concat(
    activeIndex + 3 > quotes.length ? quotes.slice(0, activeIndex + 3 - quotes.length) : [],
  );

  return (
    <section id="about" className="py-24 px-6 md:px-24 bg-[#F3F0E9] text-[#0A0A0A] border-b border-[#0A0A0A] paper-grain">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold block mb-2 text-[#DE3D1C]">What clients say</span>
            <h2 className="text-4xl md:text-6xl font-display uppercase tracking-tight">Trusted by businesses worldwide</h2>
          </div>
          <div className="flex gap-2 self-start md:self-auto">
            {quotes.map((_, idx) => (
              <button
                key={idx}
                type="button"
                aria-label={`Show testimonial ${idx + 1}`}
                onClick={() => setActiveIndex(idx)}
                className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                  idx === activeIndex ? 'bg-[#DE3D1C] w-8' : 'bg-[#0A0A0A]/20 hover:bg-[#0A0A0A]/40'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="relative p-3 -m-3 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.45, ease: 'easeOut' }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {visibleQuotes.map((q, idx) => (
                <motion.div
                  key={`${q.author}-${idx}`}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: idx * 0.08 }}
                  className="border-2 border-[#0A0A0A] p-8 bg-[#F8F5F1] shadow-[6px_6px_0px_0px_rgba(10,10,10,1)] flex flex-col justify-between min-h-[240px]"
                >
                  <p className="text-sm md:text-base font-light italic mb-8 text-[#0A0A0A]/80">&ldquo;{q.text}&rdquo;</p>
                  <div>
                    <div className="font-bold text-lg">{q.author}</div>
                    <div className="text-[10px] uppercase tracking-widest text-[#0A0A0A]/60 mt-2">{q.role}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}