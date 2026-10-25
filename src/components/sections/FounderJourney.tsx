import React, { useState } from 'react';
import { journeyStages, journeyTagline } from '../../data/founderJourney';
import { Check, Lightbulb, Hammer, Crown, TrendingUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const FounderJourney: React.FC = () => {
  const [selectedStage, setSelectedStage] = useState(0);
  const current = journeyStages[selectedStage];

  const stageIcons = [Lightbulb, Hammer, Crown, TrendingUp];

  return (
    <section id="journey" className="py-20 sm:py-28 lg:py-32 bg-[#FAFBFD] border-b border-[#E3E8EF] relative overflow-hidden">
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
            <span className="font-mono text-xs font-bold text-orange tracking-wider">09</span>
            <span className="text-slate-300 text-xs">/</span>
            <span className="text-xs font-semibold uppercase tracking-wider text-navy font-mono">
              From MVP to a Brand People Trust
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-navy font-heading mb-4">
            The Founder Journey
          </h2>

          <p className="text-xl sm:text-2xl font-bold font-heading text-orange mb-3 leading-snug">
            "{journeyTagline}"
          </p>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Not every founder needs every stage. Whether you need an early validation landing page or an investor-grade brand revamp, discover the right milestone for your immediate business priority.
          </p>
        </motion.div>

        {/* Interactive Desktop Stage Selector with 3D Pop */}
        <div className="hidden lg:grid grid-cols-12 gap-8 items-start mb-12">
          
          {/* Left: 4 Stage Cards as Interactive Selectors (5 cols) */}
          <div className="col-span-5 space-y-3.5">
            {journeyStages.map((stage, idx) => {
              const isSelected = idx === selectedStage;
              const Icon = stageIcons[idx];

              return (
                <motion.button
                  key={stage.stageCode}
                  onClick={() => setSelectedStage(idx)}
                  whileHover={{ x: 6, scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full text-left p-5 sm:p-6 rounded-2xl border transition-all duration-300 flex items-start gap-4 cursor-pointer ${
                    isSelected
                      ? 'bg-navy text-white border-navy shadow-[0_12px_32px_rgba(16,24,42,0.2)]'
                      : 'bg-white text-navy border-slate-200/90 hover:border-orange-border hover:bg-slate-50'
                  }`}
                  aria-pressed={isSelected}
                >
                  <div className={`p-3 rounded-xl transition-colors ${
                    isSelected ? 'bg-slate-800 text-orange shadow-sm' : 'bg-slate-100 text-navy'
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className={`text-[11px] font-mono font-bold uppercase tracking-wider ${
                        isSelected ? 'text-orange' : 'text-slate-400'
                      }`}>
                        {stage.stageCode}
                      </span>
                    </div>
                    <h3 className={`text-lg font-bold font-heading leading-snug ${
                      isSelected ? 'text-white' : 'text-navy'
                    }`}>
                      {stage.title}
                    </h3>
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* Right: Active Stage Blueprint Specimen with AnimatePresence */}
          <div className="col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-card min-h-[460px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.stageCode}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="space-y-6"
              >
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <span className="font-mono text-xs font-bold text-orange px-3.5 py-1 rounded-full bg-orange-pale border border-orange-border">
                    {current.stageCode} · STRATEGY SPECIMEN
                  </span>
                  <span className="text-xs font-mono text-slate-400 font-bold">Founder Decision Gate</span>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-navy mb-2 leading-[1.25]">
                    {current.title}
                  </h3>
                  <p className="text-sm font-mono text-orange font-bold mb-4">
                    "{current.mindset}"
                  </p>
                  <p className="text-base text-slate-600 leading-relaxed">
                    {current.summary}
                  </p>
                </div>

                {/* Recommended when */}
                <div className="p-4 sm:p-5 rounded-2xl bg-[#FAFBFD] border border-slate-200">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-navy block mb-1.5">
                    When Is This Right For You?
                  </span>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {current.recommendedWhen}
                  </p>
                </div>

                {/* Supporting Deliverables */}
                <div className="space-y-3 pt-2">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-navy block">
                    Recommended Digital Assets &amp; Scope:
                  </span>
                  <div className="grid grid-cols-2 gap-3">
                    {current.supportingServices.map((service, sIdx) => (
                      <div key={sIdx} className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-xs font-semibold text-navy shadow-subtle">
                        <Check className="w-3.5 h-3.5 text-orange flex-shrink-0" />
                        <span>{service}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

        {/* Mobile Accordion Flow */}
        <div className="block lg:hidden space-y-4">
          {journeyStages.map((stage, idx) => {
            const Icon = stageIcons[idx];
            return (
              <div
                key={stage.stageCode}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-subtle space-y-4"
              >
                <div className="flex items-center gap-3.5">
                  <div className="p-2.5 rounded-xl bg-orange-pale text-orange">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase text-orange">
                      {stage.stageCode}
                    </span>
                    <h3 className="text-lg font-bold font-heading text-navy">
                      {stage.title}
                    </h3>
                  </div>
                </div>

                <p className="text-xs font-mono text-slate-500 italic">
                  "{stage.mindset}"
                </p>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {stage.summary}
                </p>

                <div className="pt-2 border-t border-slate-100 space-y-2">
                  <span className="text-[10px] font-mono font-bold uppercase text-navy">Key Deliverables:</span>
                  {stage.supportingServices.map((srv, sIdx) => (
                    <div key={sIdx} className="flex items-center gap-2 text-xs text-navy font-medium">
                      <Check className="w-3 h-3 text-orange" />
                      <span>{srv}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
