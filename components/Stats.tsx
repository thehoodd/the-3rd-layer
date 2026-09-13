'use client';
export default function Stats() {
  return (
    <section className="py-16 border-b border-white bg-black text-white bg-chex-dark">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div>
          <div className="text-4xl md:text-5xl font-black mb-1">50+</div>
          <div className="text-xs uppercase tracking-widest text-white/70">Projects Delivered</div>
        </div>
        <div>
          <div className="text-4xl md:text-5xl font-black mb-1">100%</div>
          <div className="text-xs uppercase tracking-widest text-white/70">Client Satisfaction</div>
        </div>
        <div>
          <div className="text-4xl md:text-5xl font-black mb-1">3+</div>
          <div className="text-xs uppercase tracking-widest text-white/70">Years Experience</div>
        </div>
        <div>
          <div className="text-4xl md:text-5xl font-black mb-1">24/7</div>
          <div className="text-xs uppercase tracking-widest text-white/70">Support Available</div>
        </div>
      </div>
    </section>
  );
}