import React, { useState } from 'react';
import { servicesData } from '../../data/services';
import { ArrowRight, Check, Palette, ShoppingBag, Presentation, TrendingUp, Laptop } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { SpotlightCard } from '../ui/SpotlightCard';

export const ServicesByOutcome: React.FC = () => {
  const [activeServiceId, setActiveServiceId] = useState<string>(servicesData[0].id);
  const activeService = servicesData.find(s => s.id === activeServiceId) || servicesData[0];

  const getServiceIcon = (id: string) => {
    switch(id) {
      case 'brand-identity': return Palette;
      case 'ecommerce-launch': return ShoppingBag;
      case 'mvp-websites': return Presentation;
      case 'seo-growth': return TrendingUp;
      default: return Laptop;
    }
  };

  const serviceTechStacks: Record<string, string[]> = {
    'startup-website': ['React 19', 'TypeScript', 'TailwindCSS', 'Framer Motion', 'Vite', 'Cloudflare Edge'],
    'brand-identity': ['Figma Design Tokens', 'Vector Typography', 'Brand Kit PDF', 'Design System Spec'],
    'ecommerce-launch': ['Shopify / WooCommerce', 'Custom Cart API', 'Stripe / Razorpay', 'Sub-second Checkout'],
    'mvp-websites': ['Next.js / Vite', 'Interactive Product Simulator', 'Waitlist API', 'Supabase'],
    'seo-growth': ['JSON-LD Schema', 'OpenGraph Meta', 'Core Web Vitals 100', 'Sitemap Protocol']
  };

  return (
    <section id="services" className="py-24 sm:py-32 lg:py-36 bg-[#F8FAFC] border-b border-slate-200/80 relative overflow-hidden">
      <div className="max-w-content mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-12 sm:mb-16 space-y-3"
        >
          <span className="text-xs font-mono font-bold tracking-widest uppercase text-orange bg-orange-50 px-3.5 py-1.5 rounded-full border border-orange-200 inline-block shadow-sm">
            Sprint Scopes &amp; Offerings
          </span>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0A1128] font-heading tracking-[-0.03em] leading-[1.1]">
            Engineered for outcomes. <br />
            <span className="text-gradient-orange">Built for immediate priorities.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-normal">
            No generic design retainers. Every sprint is mapped directly to what your business needs to achieve next.
          </p>
        </motion.div>

        {/* Devlofox Light Tab Selector Bar */}
        <div className="flex flex-wrap gap-2 p-1.5 rounded-2xl bg-slate-100 border border-slate-200 mb-10 overflow-x-auto shadow-inner">
          {servicesData.map((svc) => {
            const Icon = getServiceIcon(svc.id);
            const isActive = svc.id === activeServiceId;

            return (
              <button
                key={svc.id}
                onClick={() => setActiveServiceId(svc.id)}
                className={`flex-1 min-w-[180px] py-2.5 px-4 rounded-xl text-xs sm:text-sm font-mono font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                  isActive 
                    ? 'bg-white text-[#0A1128] shadow-md border border-slate-200' 
                    : 'text-slate-600 hover:text-[#0A1128] hover:bg-white/50'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-orange' : 'text-slate-400'}`} />
                <span className="truncate">{svc.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Service Showcase */}
        <AnimatePresence mode="wait">
          <SpotlightCard
            key={activeService.id}
            theme="orange"
            className="p-8 sm:p-12 shadow-xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
              
              {/* Left Column: Scope & Deliverables */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-bold text-orange px-2.5 py-1 rounded bg-orange-50 border border-orange-200">
                    SERVICE {activeService.number}
                  </span>
                  <span className="text-xs font-mono text-slate-600 font-semibold">
                    Target: <strong className="text-[#0A1128]">{activeService.outcome}</strong>
                  </span>
                </div>

                <h3 className="text-2xl sm:text-4xl font-extrabold font-heading text-[#0A1128] tracking-tight leading-tight">
                  {activeService.title}
                </h3>

                <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                  {activeService.description}
                </p>

                {/* Deliverables Checklist */}
                <div className="space-y-3 pt-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-500 font-bold block">
                    Agreed Sprint Deliverables:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {activeService.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                        <Check className="w-4 h-4 text-orange flex-shrink-0 mt-0.5" />
                        <span className="leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack Badges */}
                <div className="pt-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-500 font-bold block mb-2">
                    Production Stack:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {(serviceTechStacks[activeService.id] || []).map((tech, tIdx) => (
                      <span key={tIdx} className="px-3 py-1 rounded-lg bg-slate-50 border border-slate-200 text-xs font-mono font-bold text-slate-700">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action CTA */}
                <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                  <motion.a
                    href={activeService.ctaHref}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-orange to-orange-dark text-white hover:brightness-105 text-xs sm:text-sm font-bold shadow-md shadow-orange/20 transition-all cursor-pointer"
                  >
                    <span>{activeService.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </motion.a>

                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-[#0A1128] hover:bg-slate-50 text-xs sm:text-sm font-mono font-semibold transition-colors shadow-sm"
                  >
                    <span>Request Custom Scope Estimate</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Sleek Specimen Frame */}
              <div className="lg:col-span-5">
                <div className="rounded-2xl border border-slate-200 bg-slate-50/90 p-6 space-y-4 shadow-md">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-200 text-[10px] font-mono text-slate-500 font-semibold">
                    <span>specimen.{activeService.id}.tsx</span>
                    <span className="text-emerald-600 font-bold">14-Day Delivery</span>
                  </div>

                  <div className="space-y-3">
                    <div className="p-4 rounded-xl bg-white border border-slate-200 text-[#0A1128] space-y-2 shadow-sm">
                      <span className="text-[10px] font-mono text-orange uppercase font-bold">Architecture Spec</span>
                      <p className="text-sm font-bold leading-snug">
                        {activeService.title}
                      </p>
                      <p className="text-xs text-slate-500">
                        Targeting {activeService.outcome} with sub-second page performance.
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-[10px] font-mono">
                      <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-sm">
                        <span className="text-slate-500 block mb-1">Performance</span>
                        <span className="text-emerald-700 font-extrabold text-xs">100/100 Vitals</span>
                      </div>
                      <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-sm">
                        <span className="text-slate-500 block mb-1">IP Ownership</span>
                        <span className="text-[#0A1128] font-extrabold text-xs">Full GitHub Transfer</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2 text-[10px] font-mono text-slate-500 text-center font-medium">
                    Zero technical debt. Production handover ready.
                  </div>
                </div>
              </div>

            </div>
          </SpotlightCard>
        </AnimatePresence>

      </div>
    </section>
  );
};
