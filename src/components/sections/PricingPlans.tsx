import React, { useState } from 'react';
import { pricingPlans, pricingNotes } from '../../data/pricing';
import { siteConfig } from '../../data/siteConfig';
import { Check, ArrowRight, Calculator } from 'lucide-react';
import { motion } from 'framer-motion';
import { SpotlightCard } from '../ui/SpotlightCard';

export const PricingPlans: React.FC = () => {
  // Interactive Calculator State
  const [selectedBasePlan, setSelectedBasePlan] = useState<'idea' | 'growth' | 'scale'>('growth');
  const [pageCount, setPageCount] = useState<number>(8);
  const [includeCMS, setIncludeCMS] = useState<boolean>(true);
  const [include3D, setInclude3D] = useState<boolean>(true);
  const [includeSEO, setIncludeSEO] = useState<boolean>(true);

  // Dynamic Calculation
  const calculateEstimate = () => {
    let base = 40000;
    let days = 10;
    if (selectedBasePlan === 'growth') {
      base = 75000;
      days = 14;
    } else if (selectedBasePlan === 'scale') {
      base = 150000;
      days = 21;
    }

    const extraPages = Math.max(0, pageCount - 5);
    base += extraPages * 4000;
    if (includeCMS) base += 12000;
    if (include3D) base += 15000;
    if (includeSEO) base += 10000;

    return { price: base.toLocaleString('en-IN'), days };
  };

  const estimate = calculateEstimate();

  const getBookingLinkForPlan = (planName: string, price: string) => {
    const subject = encodeURIComponent(`Inquiry for ${planName} (${price}) - TeamJugadu`);
    const body = encodeURIComponent(
      `Hi TeamJugadu,\n\nI want to discuss the "${planName}" launch plan (${price}).\n\nMy project idea:\nCurrent stage:\nTarget launch date:\n\nLooking forward to scheduling the 30-minute discovery sprint.\n\nThanks!`
    );
    return `mailto:${siteConfig.contactEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="pricing" className="py-24 sm:py-32 lg:py-36 bg-[#F8FAFC] border-b border-slate-200/80 relative overflow-hidden">
      <div className="max-w-content mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-16 sm:mb-20 space-y-3"
        >
          <span className="text-xs font-mono font-bold tracking-widest uppercase text-orange bg-orange-50 px-3.5 py-1.5 rounded-full border border-orange-200 inline-block shadow-sm">
            Fixed-Scope Launch Plans
          </span>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0A1128] font-heading tracking-[-0.03em] leading-[1.1]">
            Transparent pricing. <br />
            <span className="text-gradient-orange">Guaranteed sprint milestones.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-normal">
            Fixed deliverables, zero unexpected retainers. Choose an established package or customize your build with our calculator.
          </p>
        </motion.div>

        {/* 3 Devlofox-Style Pricing Packages in Light Mode */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-20">
          {pricingPlans.map((plan, pIdx) => {
            const isFeatured = !!plan.popular;
            const bookingHref = getBookingLinkForPlan(plan.name, plan.price);
            const cardTheme = isFeatured ? 'orange' : pIdx === 2 ? 'purple' : 'default';

            return (
              <SpotlightCard
                key={plan.id}
                theme={cardTheme}
                className={`p-8 sm:p-10 flex flex-col justify-between relative group ${
                  isFeatured ? 'ring-2 ring-orange-400 shadow-xl' : 'shadow-md'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-bold text-slate-700 px-2.5 py-1 rounded-md bg-slate-100 border border-slate-200">
                      PLAN {plan.number}
                    </span>
                    
                    {isFeatured ? (
                      <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-gradient-to-r from-orange to-orange-dark text-white shadow-md shadow-orange/30">
                        🔥 Most Popular
                      </span>
                    ) : (
                      <span className="text-xs font-mono text-slate-500 font-semibold">
                        {plan.audience}
                      </span>
                    )}
                  </div>

                  <h3 className="text-2xl font-bold font-heading text-[#0A1128] tracking-tight mb-2">
                    {plan.name}
                  </h3>

                  <div className="mb-5 pb-5 border-b border-slate-200">
                    <div className="text-3xl sm:text-4xl font-extrabold font-heading text-[#0A1128] tracking-tight">
                      {plan.price}
                    </div>
                    <span className="text-xs font-mono text-slate-500 mt-1.5 block font-semibold">
                      {plan.period}
                    </span>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6 font-sans">
                    {plan.description}
                  </p>

                  <div className="space-y-3 mb-8">
                    <span className="text-xs font-mono uppercase text-slate-500 block font-bold">
                      Included Sprint Deliverables:
                    </span>
                    {plan.deliverables.map((item, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                        <Check className="w-4 h-4 text-orange flex-shrink-0 mt-0.5" />
                        <span className="leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-100">
                  <motion.a
                    href={bookingHref}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-bold rounded-xl transition-all cursor-pointer shadow-md ${
                      isFeatured
                        ? 'bg-gradient-to-r from-orange to-orange-dark text-white hover:brightness-105 shadow-orange/20'
                        : 'bg-white hover:bg-slate-50 text-slate-800 border border-slate-200'
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.a>
                  <p className="text-[11px] text-center text-slate-400 mt-2.5 font-mono font-medium">
                    Qualify scope on a free 30-min call
                  </p>
                </div>
              </SpotlightCard>
            );
          })}
        </div>

        {/* Devlofox-Style Scope & Pricing Calculator Tool */}
        <SpotlightCard theme="cyan" className="p-8 sm:p-12 mb-12 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-8 border-b border-slate-200 gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600 border border-blue-200">
                <Calculator className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-mono text-blue-600 uppercase tracking-wider block font-bold">
                  Interactive Scope Engine
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-heading text-[#0A1128] tracking-tight">
                  Estimate Your Custom Launch Sprint
                </h3>
              </div>
            </div>
            <span className="text-xs font-mono text-slate-600 bg-white px-3 py-1 rounded-full border border-slate-200 shadow-sm font-semibold">
              Instant Dynamic Calculation
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Controls (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <label className="text-xs font-mono text-slate-600 block mb-2 font-bold">
                  1. Select Sprint Tier Base:
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {(['idea', 'growth', 'scale'] as const).map(tier => (
                    <button
                      key={tier}
                      onClick={() => setSelectedBasePlan(tier)}
                      className={`p-3 rounded-xl text-xs font-mono font-bold capitalize transition-all cursor-pointer ${
                        selectedBasePlan === tier 
                          ? 'bg-[#0A1128] text-white shadow-md' 
                          : 'bg-white border border-slate-200 text-slate-600 hover:text-[#0A1128]'
                      }`}
                    >
                      {tier} Sprint
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-mono mb-2">
                  <span className="text-slate-600 font-bold">2. Page Architecture:</span>
                  <span className="text-orange font-bold text-sm">{pageCount} Custom Pages</span>
                </div>
                <input 
                  type="range" 
                  min="4" 
                  max="18" 
                  value={pageCount} 
                  onChange={e => setPageCount(Number(e.target.value))}
                  className="w-full accent-[#FF6B0B] cursor-pointer h-2 bg-slate-200 rounded-lg"
                />
              </div>

              <div>
                <label className="text-xs font-mono text-slate-600 block mb-2 font-bold">
                  3. Production Modules:
                </label>
                <div className="space-y-2">
                  <label className="flex items-center justify-between p-3 rounded-xl bg-white border border-slate-200 cursor-pointer hover:border-orange-300 transition-colors shadow-sm">
                    <span className="text-xs sm:text-sm text-slate-700 font-medium">Headless CMS / Blog Architecture</span>
                    <input 
                      type="checkbox" 
                      checked={includeCMS} 
                      onChange={e => setIncludeCMS(e.target.checked)} 
                      className="accent-[#FF6B0B] w-4 h-4 rounded cursor-pointer"
                    />
                  </label>
                  <label className="flex items-center justify-between p-3 rounded-xl bg-white border border-slate-200 cursor-pointer hover:border-orange-300 transition-colors shadow-sm">
                    <span className="text-xs sm:text-sm text-slate-700 font-medium">Interactive 3D Specimens &amp; Micro-interactions</span>
                    <input 
                      type="checkbox" 
                      checked={include3D} 
                      onChange={e => setInclude3D(e.target.checked)} 
                      className="accent-[#FF6B0B] w-4 h-4 rounded cursor-pointer"
                    />
                  </label>
                  <label className="flex items-center justify-between p-3 rounded-xl bg-white border border-slate-200 cursor-pointer hover:border-orange-300 transition-colors shadow-sm">
                    <span className="text-xs sm:text-sm text-slate-700 font-medium">SEO Turbocharger &amp; Schema Automation</span>
                    <input 
                      type="checkbox" 
                      checked={includeSEO} 
                      onChange={e => setIncludeSEO(e.target.checked)} 
                      className="accent-[#FF6B0B] w-4 h-4 rounded cursor-pointer"
                    />
                  </label>
                </div>
              </div>
            </div>

            {/* Output Card (5 cols) */}
            <div className="lg:col-span-5">
              <div className="p-6 sm:p-7 rounded-2xl bg-white border border-blue-200 shadow-xl space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100 text-xs font-mono text-slate-500 font-semibold">
                  <span>Scope Estimate</span>
                  <span className="text-emerald-700 font-bold">Guaranteed Velocity</span>
                </div>

                <div>
                  <span className="text-xs font-mono text-slate-500 uppercase tracking-wider block font-bold">Estimated Investment:</span>
                  <div className="text-4xl font-extrabold font-heading text-[#0A1128] tracking-tight mt-1">
                    ₹{estimate.price}
                  </div>
                  <span className="text-xs font-mono text-orange block mt-1 font-bold">
                    Estimated Delivery: {estimate.days} Business Days
                  </span>
                </div>

                <div className="space-y-1.5 pt-2 text-xs text-slate-600 font-mono border-t border-slate-100 font-medium">
                  <div className="flex justify-between">
                    <span>Base Framework:</span>
                    <span className="text-[#0A1128] font-bold capitalize">{selectedBasePlan}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Pages Included:</span>
                    <span className="text-[#0A1128] font-bold">{pageCount} pages</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Source Code:</span>
                    <span className="text-emerald-700 font-bold">100% Handover</span>
                  </div>
                </div>

                <motion.a
                  href={`mailto:${siteConfig.contactEmail}?subject=Custom%20Scope%20Estimate%20(₹${estimate.price})&body=Hi%20TeamJugadu,%0A%0AI%20configured%20a%20sprint%20estimate%20on%20your%20website:%0A-%20Base:%20${selectedBasePlan}%0A-%20Pages:%20${pageCount}%0A-%20Estimated%20Price:%20₹${estimate.price}%0A-%20Estimated%20Delivery:%20${estimate.days}%20Days%0A%0ALet's%20schedule%20the%20free%20discovery%20call.`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-orange to-orange-dark text-white font-bold font-mono text-center flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-orange/30"
                >
                  <span>Lock in this Scope &amp; Book Call</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.a>
              </div>
            </div>

          </div>
        </SpotlightCard>

        {/* Pricing Notes */}
        <div className="rounded-2xl bg-white p-6 sm:p-8 border border-slate-200 shadow-sm space-y-3">
          <div className="text-xs font-mono text-slate-500 uppercase tracking-wider pb-2 border-b border-slate-100 font-bold">
            Pricing Clarity &amp; Delivery Standards
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-slate-600 leading-relaxed font-sans">
            {pricingNotes.map((note, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <span className="text-orange font-bold font-mono">▸</span>
                <span>{note}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
