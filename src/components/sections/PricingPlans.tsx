import React from 'react';
import { pricingPlans, pricingNotes } from '../../data/pricing';
import { siteConfig } from '../../data/siteConfig';
import { Check, ArrowRight, Info, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export const PricingPlans: React.FC = () => {
  const getBookingLinkForPlan = (planName: string, price: string) => {
    const subject = encodeURIComponent(`Inquiry for ${planName} (${price}) - TeamJugadu`);
    const body = encodeURIComponent(
      `Hi TeamJugadu,\n\nI am interested in discussing the "${planName}" launch plan (${price}).\n\nMy business / project idea:\nCurrent stage:\nExpected launch timeline:\n\nPlease let me know when we can schedule our free 30-minute discovery call.\n\nThanks!`
    );
    return `mailto:${siteConfig.contactEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="pricing" className="py-20 sm:py-28 lg:py-32 bg-[#FFFFFF] border-b border-[#E3E8EF] relative overflow-hidden">
      <div className="max-w-content mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Section Header with Motion Reveal */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16 sm:mb-20"
        >
          <div className="inline-flex items-center gap-2 mb-3.5">
            <span className="font-mono text-xs font-bold text-orange tracking-wider">08</span>
            <span className="text-slate-300 text-xs">/</span>
            <span className="text-xs font-semibold uppercase tracking-wider text-navy font-mono">
              Pricing Plans
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-navy font-heading mb-4">
            Choose Your <br className="hidden sm:inline" />
            <span className="text-orange">Launch Plan.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Three starting points for different stages of business growth. The right plan depends on your goals, scope and requirements.
          </p>
        </motion.div>

        {/* 3 Pricing Packages Comparison with 3D Float */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-16">
          {pricingPlans.map((plan, idx) => {
            const isFeatured = !!plan.popular;
            const bookingHref = getBookingLinkForPlan(plan.name, plan.price);

            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                whileHover={{ y: isFeatured ? -12 : -8, scale: 1.015 }}
                className={`rounded-3xl p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 relative ${
                  isFeatured
                    ? 'bg-gradient-to-b from-orange-pale/50 via-white to-orange-pale/30 border-2 border-orange shadow-[0_20px_50px_-10px_rgba(255,107,11,0.28)] lg:-translate-y-3'
                    : 'bg-white border border-slate-200/90 shadow-[0_4px_20px_rgba(16,24,42,0.05)] hover:border-orange-border hover:shadow-[0_20px_40px_-15px_rgba(16,24,42,0.12)]'
                }`}
              >
                {/* Popular Badge */}
                {isFeatured && (
                  <motion.div 
                    animate={{ y: [0, -3, 0] }}
                    transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
                    className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-gradient-to-r from-orange to-orange-hover text-white text-[11px] font-bold font-mono tracking-wider uppercase shadow-md flex items-center gap-1.5 whitespace-nowrap"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Most Popular For Startups</span>
                  </motion.div>
                )}

                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-mono text-xs font-bold text-orange px-3.5 py-1 rounded-full bg-orange-pale border border-orange-border">
                      PLAN {plan.number}
                    </span>
                    <span className="text-xs font-mono font-bold text-slate-500">
                      {plan.audience}
                    </span>
                  </div>

                  <h3 className="text-2xl font-extrabold font-heading text-navy mb-3 leading-snug">
                    {plan.name}
                  </h3>

                  {/* Price Tag with strong typography */}
                  <div className="mb-5 pb-5 border-b border-slate-100">
                    <div className="text-3xl sm:text-4xl font-extrabold font-heading text-navy tracking-tight leading-none">
                      {plan.price}
                    </div>
                    <span className="text-xs font-mono text-slate-400 mt-2 block">
                      {plan.period}
                    </span>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {plan.description}
                  </p>

                  {/* Deliverables List */}
                  <div className="space-y-3.5 mb-8">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-navy block">
                      Deliverables Included:
                    </span>
                    {plan.deliverables.map((item, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-navy font-semibold">
                        <Check className="w-4 h-4 text-orange flex-shrink-0 mt-0.5" />
                        <span className="leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA: Preserving Plan Context */}
                <div className="pt-6 border-t border-slate-100">
                  <motion.a
                    href={bookingHref}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className={`w-full inline-flex items-center justify-center gap-2 px-6 py-4 text-sm font-bold rounded-xl transition-all duration-200 group shadow-md cursor-pointer ${
                      isFeatured
                        ? 'bg-gradient-to-r from-[#FF6B0B] to-[#E95800] text-white hover:shadow-orange-soft'
                        : 'bg-navy text-white hover:bg-navy-800'
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight className="w-4 h-4 text-orange transition-transform duration-200 group-hover:translate-x-1" />
                  </motion.a>
                  <p className="text-[11px] text-center text-slate-400 mt-2.5 font-mono">
                    Qualify scope on a free 30-min call
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Pricing Clarification Notes */}
        <div className="rounded-3xl bg-[#FAFBFD] p-7 sm:p-9 border border-slate-200/90 space-y-4 shadow-subtle">
          <div className="flex items-center gap-2.5 pb-2 border-b border-slate-200/60">
            <Info className="w-4 h-4 text-orange" />
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-navy">
              Pricing Clarity &amp; Delivery Standards
            </h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
            {pricingNotes.map((note, idx) => (
              <div key={idx} className="flex items-start gap-2.5">
                <span className="text-orange font-bold font-mono">▸</span>
                <span>{note}</span>
              </div>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs text-slate-400 font-mono">
            <span>Transparent Quotation Standard</span>
            <span className="text-navy font-bold">Zero Hidden Extras</span>
          </div>
        </div>

      </div>
    </section>
  );
};
