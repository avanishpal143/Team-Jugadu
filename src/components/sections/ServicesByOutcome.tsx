import React from 'react';
import { servicesData } from '../../data/services';
import { ArrowRight, Check, Palette, ShoppingBag, Presentation, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

export const ServicesByOutcome: React.FC = () => {
  return (
    <section id="services" className="py-20 sm:py-28 lg:py-32 bg-[#FFFFFF] border-b border-[#E3E8EF] relative overflow-hidden">
      <div className="max-w-content mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Section Header with Framer Motion Reveal */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16 sm:mb-20"
        >
          <div className="inline-flex items-center gap-2 mb-3.5">
            <span className="font-mono text-xs font-bold text-orange tracking-wider">04</span>
            <span className="text-slate-300 text-xs">/</span>
            <span className="text-xs font-semibold uppercase tracking-wider text-navy font-mono">
              Services by Outcome
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-navy font-heading mb-4">
            Digital Execution, <br className="hidden md:inline" />
            <span className="text-orange">Built Around What You Need Next.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Choose the service that matches your business stage, product and immediate priorities. Every build is scoped directly around clear founder outcomes.
          </p>
        </motion.div>

        {/* Curated Editorial Service Showcase: Asymmetric Layout with 3D Pop */}
        <div className="space-y-8">
          
          {/* Lead Service 01: Hero Asymmetric Card with 3D glow */}
          {(() => {
            const s1 = servicesData[0];
            return (
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                whileHover={{ y: -6 }}
                className="rounded-3xl border-2 border-orange/40 bg-gradient-to-br from-orange-pale/50 via-white to-orange-pale/20 p-8 sm:p-12 shadow-[0_10px_35px_-8px_rgba(255,107,11,0.15)] hover:shadow-[0_25px_50px_-12px_rgba(255,107,11,0.28)] hover:border-orange transition-all duration-300 relative group overflow-hidden"
              >
                {/* Background warm ambient light */}
                <div className="absolute top-0 right-0 w-80 h-80 bg-orange/10 rounded-full blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-700"></div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
                  
                  {/* Left Copy (7 cols) */}
                  <div className="lg:col-span-7 space-y-6">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="font-mono text-xs font-bold text-orange px-3.5 py-1 rounded-full bg-orange-pale border border-orange-border shadow-sm">
                        SERVICE {s1.number}
                      </span>
                      <span className="text-xs font-mono text-slate-500 uppercase tracking-wider font-bold">
                        Outcome: {s1.outcome}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-navy leading-[1.25] group-hover:text-navy transition-colors">
                      {s1.title}
                    </h3>

                    <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                      {s1.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                      {s1.deliverables.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-navy">
                          <Check className="w-4 h-4 text-orange flex-shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-4">
                      <motion.a
                        href={s1.ctaHref}
                        whileHover={{ scale: 1.03, x: 2 }}
                        whileTap={{ scale: 0.98 }}
                        className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-orange text-white text-sm sm:text-base font-bold shadow-md hover:bg-orange-hover hover:shadow-orange-soft transition-all group"
                      >
                        <span>{s1.ctaText}</span>
                        <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                      </motion.a>
                    </div>
                  </div>

                  {/* Right Custom Visual: Responsive Website Preview */}
                  <div className="lg:col-span-5">
                    <motion.div 
                      whileHover={{ scale: 1.02, rotate: 0.5 }}
                      className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-md space-y-3.5"
                    >
                      <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-slate-300"></span>
                          <span className="w-2.5 h-2.5 rounded-full bg-slate-300"></span>
                          <span className="w-2.5 h-2.5 rounded-full bg-slate-300"></span>
                        </div>
                        <span className="text-[10px] font-mono text-slate-400">startup-landing.preview</span>
                      </div>
                      
                      {/* Mini Preview Mockup */}
                      <div className="space-y-3">
                        <div className="h-7 bg-slate-50 border border-slate-200/60 rounded-lg flex items-center px-3 justify-between">
                          <div className="w-14 h-2 bg-slate-300 rounded"></div>
                          <div className="w-12 h-4 bg-orange rounded text-[8px] text-white flex items-center justify-center font-bold">CTA</div>
                        </div>
                        <div className="bg-navy rounded-xl p-4 text-white flex flex-col justify-between space-y-2 shadow-sm">
                          <div className="w-32 h-2.5 bg-slate-300 rounded"></div>
                          <div className="w-44 h-2 bg-orange rounded"></div>
                          <div className="w-20 h-5 bg-orange rounded text-[9px] flex items-center justify-center font-bold">Book Call</div>
                        </div>
                        <div className="grid grid-cols-3 gap-2">
                          <div className="h-12 bg-slate-50 border border-slate-200 rounded-lg p-2 flex flex-col justify-between">
                            <div className="w-8 h-1.5 bg-slate-300 rounded"></div>
                            <div className="w-10 h-1 bg-slate-200 rounded"></div>
                          </div>
                          <div className="h-12 bg-slate-50 border border-slate-200 rounded-lg p-2 flex flex-col justify-between">
                            <div className="w-8 h-1.5 bg-slate-300 rounded"></div>
                            <div className="w-10 h-1 bg-slate-200 rounded"></div>
                          </div>
                          <div className="h-12 bg-slate-50 border border-slate-200 rounded-lg p-2 flex flex-col justify-between">
                            <div className="w-8 h-1.5 bg-slate-300 rounded"></div>
                            <div className="w-10 h-1 bg-slate-200 rounded"></div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                </div>
              </motion.div>
            );
          })()}

          {/* 2x2 Grid for Remaining 4 Services with Rich Colors & 3D Tilt */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Service 02: Brand Identity (Purple/Indigo Theme) */}
            {(() => {
              const s2 = servicesData[1];
              return (
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  whileHover={{ y: -6, scale: 1.015 }}
                  className="rounded-3xl border border-indigo-100 bg-gradient-to-br from-indigo-50/40 via-white to-purple-50/30 p-8 sm:p-9 hover:border-indigo-400 hover:shadow-[0_20px_45px_-12px_rgba(99,102,241,0.22)] transition-all duration-300 flex flex-col justify-between group shadow-subtle"
                >
                  <div className="space-y-5">
                    <div className="flex items-center justify-between pb-3 border-b border-indigo-100/60">
                      <span className="font-mono text-xs font-bold text-indigo-700 px-3.5 py-1 rounded-full bg-indigo-50 border border-indigo-200">
                        SERVICE {s2.number}
                      </span>
                      <div className="p-2.5 rounded-xl bg-indigo-50 text-indigo-600 border border-indigo-200 shadow-sm group-hover:scale-110 transition-transform">
                        <Palette className="w-5 h-5" />
                      </div>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold font-heading text-navy leading-[1.3] group-hover:text-indigo-900 transition-colors">
                      {s2.title}
                    </h3>

                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                      {s2.description}
                    </p>

                    {/* Brand specimen visual preview */}
                    <div className="p-4 rounded-2xl bg-white border border-indigo-100/90 shadow-sm space-y-3">
                      <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
                        <span className="font-bold text-indigo-700">Studio Palette</span>
                        <div className="flex gap-2 ml-auto">
                          <span className="w-4 h-4 rounded-full bg-[#10182A] shadow-sm" title="Primary Navy"></span>
                          <span className="w-4 h-4 rounded-full bg-[#FF6B0B] shadow-sm" title="Brand Orange"></span>
                          <span className="w-4 h-4 rounded-full bg-indigo-600 shadow-sm" title="Indigo Accent"></span>
                        </div>
                      </div>
                      <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-heading">
                        <span className="font-extrabold text-navy">Plus Jakarta Sans 800</span>
                        <span className="text-slate-500 font-normal">Inter Body 400</span>
                      </div>
                    </div>

                    <div className="space-y-2 pt-1">
                      {s2.deliverables.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2.5 text-xs text-navy font-semibold">
                          <Check className="w-4 h-4 text-indigo-600 flex-shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-slate-100 mt-6">
                    <a
                      href={s2.ctaHref}
                      className="inline-flex items-center gap-2 text-sm font-bold text-navy hover:text-indigo-600 transition-colors group"
                    >
                      <span>{s2.ctaText}</span>
                      <ArrowRight className="w-4 h-4 text-indigo-600 transition-transform duration-200 group-hover:translate-x-1" />
                    </a>
                  </div>
                </motion.div>
              );
            })()}

            {/* Service 03: E-commerce Launch (Emerald Theme) */}
            {(() => {
              const s3 = servicesData[2];
              return (
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.15 }}
                  whileHover={{ y: -6, scale: 1.015 }}
                  className="rounded-3xl border border-emerald-100 bg-gradient-to-br from-emerald-50/40 via-white to-teal-50/30 p-8 sm:p-9 hover:border-emerald-400 hover:shadow-[0_20px_45px_-12px_rgba(16,185,129,0.22)] transition-all duration-300 flex flex-col justify-between group shadow-subtle"
                >
                  <div className="space-y-5">
                    <div className="flex items-center justify-between pb-3 border-b border-emerald-100/60">
                      <span className="font-mono text-xs font-bold text-emerald-700 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200">
                        SERVICE {s3.number}
                      </span>
                      <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-200 shadow-sm group-hover:scale-110 transition-transform">
                        <ShoppingBag className="w-5 h-5" />
                      </div>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold font-heading text-navy leading-[1.3] group-hover:text-emerald-900 transition-colors">
                      {s3.title}
                    </h3>

                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                      {s3.description}
                    </p>

                    {/* E-commerce grid visual */}
                    <div className="p-4 rounded-2xl bg-white border border-emerald-100/90 shadow-sm space-y-2">
                      <div className="flex items-center justify-between text-xs font-mono text-slate-500 pb-1 border-b border-slate-100">
                        <span className="font-bold text-emerald-700">Checkout Pipeline</span>
                        <span className="text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded">Razorpay / Stripe</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2 pt-1">
                        <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-200 text-[10px]">
                          <div className="w-full h-8 bg-slate-200/70 rounded-lg mb-1.5"></div>
                          <p className="font-bold text-navy">Catalog SKU</p>
                          <span className="text-emerald-700 font-mono font-bold">₹2,499</span>
                        </div>
                        <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-200 text-[10px]">
                          <div className="w-full h-8 bg-slate-200/70 rounded-lg mb-1.5"></div>
                          <p className="font-bold text-navy">Featured Drop</p>
                          <span className="text-emerald-700 font-mono font-bold">₹4,899</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2 pt-1">
                      {s3.deliverables.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2.5 text-xs text-navy font-semibold">
                          <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-slate-100 mt-6">
                    <a
                      href={s3.ctaHref}
                      className="inline-flex items-center gap-2 text-sm font-bold text-navy hover:text-emerald-600 transition-colors group"
                    >
                      <span>{s3.ctaText}</span>
                      <ArrowRight className="w-4 h-4 text-emerald-600 transition-transform duration-200 group-hover:translate-x-1" />
                    </a>
                  </div>
                </motion.div>
              );
            })()}

            {/* Service 04: MVP & Investor-Facing (Dark Cyber Theme) */}
            {(() => {
              const s4 = servicesData[3];
              return (
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  whileHover={{ y: -6, scale: 1.015 }}
                  className="rounded-3xl border border-slate-800 bg-gradient-to-br from-navy via-navy-900 to-slate-900 text-white p-8 sm:p-9 hover:border-orange hover:shadow-[0_20px_45px_-12px_rgba(255,107,11,0.28)] transition-all duration-300 flex flex-col justify-between group shadow-elevated"
                >
                  <div className="space-y-5">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                      <span className="font-mono text-xs font-bold text-orange px-3.5 py-1 rounded-full bg-orange-pale/20 border border-orange/40">
                        SERVICE {s4.number}
                      </span>
                      <div className="p-2.5 rounded-xl bg-slate-800 text-orange border border-slate-700 shadow-sm group-hover:scale-110 transition-transform">
                        <Presentation className="w-5 h-5" />
                      </div>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold font-heading text-white leading-[1.3] group-hover:text-orange transition-colors">
                      {s4.title}
                    </h3>

                    <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                      {s4.description}
                    </p>

                    {/* MVP / Pitch page visual preview */}
                    <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-2 text-xs">
                      <div className="flex items-center justify-between text-[11px] font-mono text-orange pb-1 border-b border-slate-800">
                        <span>PITCH ARCHITECTURE</span>
                        <span>SERIES PRE-SEED</span>
                      </div>
                      <p className="text-xs text-slate-300 font-sans leading-relaxed">
                        Interactive telemetry diagrams + value proposition validation
                      </p>
                      <div className="flex gap-2 pt-1">
                        <span className="px-3 py-1 rounded-full bg-orange text-[9px] font-bold text-white shadow-sm">Interactive Demo</span>
                        <span className="px-3 py-1 rounded-full bg-slate-800 text-[9px] font-mono text-slate-300 border border-slate-700">Waitlist Ready</span>
                      </div>
                    </div>

                    <div className="space-y-2 pt-1">
                      {s4.deliverables.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2.5 text-xs text-slate-200 font-medium">
                          <Check className="w-4 h-4 text-orange flex-shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-slate-800 mt-6">
                    <a
                      href={s4.ctaHref}
                      className="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-orange transition-colors group"
                    >
                      <span>{s4.ctaText}</span>
                      <ArrowRight className="w-4 h-4 text-orange transition-transform duration-200 group-hover:translate-x-1" />
                    </a>
                  </div>
                </motion.div>
              );
            })()}

            {/* Service 05: SEO & Growth (Amber Theme) */}
            {(() => {
              const s5 = servicesData[4];
              return (
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.25 }}
                  whileHover={{ y: -6, scale: 1.015 }}
                  className="rounded-3xl border border-amber-100 bg-gradient-to-br from-amber-50/40 via-white to-orange-50/30 p-8 sm:p-9 hover:border-amber-400 hover:shadow-[0_20px_45px_-12px_rgba(245,158,11,0.22)] transition-all duration-300 flex flex-col justify-between group shadow-subtle"
                >
                  <div className="space-y-5">
                    <div className="flex items-center justify-between pb-3 border-b border-amber-100/60">
                      <span className="font-mono text-xs font-bold text-amber-700 px-3.5 py-1 rounded-full bg-amber-50 border border-amber-200">
                        SERVICE {s5.number}
                      </span>
                      <div className="p-2.5 rounded-xl bg-amber-50 text-amber-600 border border-amber-200 shadow-sm group-hover:scale-110 transition-transform">
                        <TrendingUp className="w-5 h-5" />
                      </div>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold font-heading text-navy leading-[1.3] group-hover:text-amber-900 transition-colors">
                      {s5.title}
                    </h3>

                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                      {s5.description}
                    </p>

                    {/* SEO structure diagram preview */}
                    <div className="p-4 rounded-2xl bg-white border border-amber-100/90 shadow-sm space-y-2 text-xs font-mono">
                      <div className="flex items-center justify-between text-slate-500 pb-1 border-b border-slate-100">
                        <span className="font-bold text-amber-700">Indexable Architecture</span>
                        <span className="text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded">100% Crawlability</span>
                      </div>
                      <div className="flex items-center gap-2 text-[11px] text-navy">
                        <span className="text-orange font-bold">GET</span>
                        <span className="truncate">/startup-website-development</span>
                        <span className="ml-auto text-slate-400">200 OK</span>
                      </div>
                    </div>

                    <div className="space-y-2 pt-1">
                      {s5.deliverables.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2.5 text-xs text-navy font-semibold">
                          <Check className="w-4 h-4 text-amber-600 flex-shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-slate-100 mt-6">
                    <a
                      href={s5.ctaHref}
                      className="inline-flex items-center gap-2 text-sm font-bold text-navy hover:text-amber-600 transition-colors group"
                    >
                      <span>{s5.ctaText}</span>
                      <ArrowRight className="w-4 h-4 text-amber-600 transition-transform duration-200 group-hover:translate-x-1" />
                    </a>
                  </div>
                </motion.div>
              );
            })()}

          </div>

        </div>

      </div>
    </section>
  );
};
