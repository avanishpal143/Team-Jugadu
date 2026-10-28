import React, { useState } from 'react';
import { journeyStages, journeyTagline } from '../../data/founderJourney';
import { Check, Lightbulb, Hammer, Crown, TrendingUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { SpotlightCard, type CardTheme } from '../ui/SpotlightCard';
import { DevlofoxIconBox } from '../ui/DevlofoxIconBox';

export const FounderJourney: React.FC = () => {
  const [selectedStage, setSelectedStage] = useState(0);
  const current = journeyStages[selectedStage];

  const stageIcons = [Lightbulb, Hammer, Crown, TrendingUp];
  const stageThemes: CardTheme[] = ['orange', 'cyan', 'purple', 'emerald'];
  const stageVariants: Array<'orange' | 'cyan' | 'purple' | 'emerald'> = ['orange', 'cyan', 'purple', 'emerald'];

  return (
    <section id="journey" className="py-24 sm:py-32 lg:py-36 bg-[#F8FAFC] border-b border-slate-200/80 relative overflow-hidden">
      <div className="max-w-content mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-16 sm:mb-20 space-y-3"
        >
          <span className="text-xs font-mono font-medium tracking-widest uppercase text-cyan-600 bg-cyan-50 px-3 py-1 rounded-full border border-cyan-200 inline-block">
            Progression Roadmap
          </span>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0A1128] font-heading tracking-[-0.03em] leading-[1.1]">
            From MVP to a Brand <br />
            <span className="text-gradient-orange">People Genuinely Trust.</span>
          </h2>

          <p className="text-lg sm:text-xl font-heading text-slate-700 font-medium leading-snug">
            &quot;{journeyTagline}&quot;
          </p>

          <p className="text-base sm:text-lg text-slate-600 font-normal">
            Whether you need a rapid validation prototype or an investor-grade product overhaul, discover the right milestone for your immediate priority.
          </p>
        </motion.div>

        {/* Desktop Stage Selector */}
        <div className="hidden lg:grid grid-cols-12 gap-8 items-start mb-12">
          
          {/* Left: 4 Stage Selectors */}
          <div className="col-span-5 space-y-3.5">
            {journeyStages.map((stage, idx) => {
              const isSelected = idx === selectedStage;
              const Icon = stageIcons[idx];
              const variant = stageVariants[idx];

              return (
                <button
                  key={stage.stageCode}
                  onClick={() => setSelectedStage(idx)}
                  className={`w-full text-left p-4 sm:p-5 rounded-2xl border transition-all flex items-center gap-4 cursor-pointer ${
                    isSelected
                      ? 'bg-white border-[#FF6B0B] text-[#0A1128] shadow-[0_10px_30px_rgba(255,107,11,0.12)] translate-x-2'
                      : 'bg-white/70 border-slate-200 text-slate-600 hover:text-[#0A1128] hover:bg-white hover:border-slate-300'
                  }`}
                  aria-pressed={isSelected}
                >
                  <DevlofoxIconBox 
                    icon={Icon} 
                    variant={variant} 
                    size="sm" 
                  />

                  <div className="flex-1">
                    <span className="text-[10px] font-mono uppercase text-slate-400 block mb-0.5 font-semibold">
                      {stage.stageCode}
                    </span>
                    <h4 className="text-base font-bold font-heading text-[#0A1128] tracking-tight">
                      {stage.title}
                    </h4>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Active Stage Blueprint Card */}
          <div className="col-span-7">
            <SpotlightCard 
              theme={stageThemes[selectedStage]} 
              className="p-8 sm:p-10 min-h-[420px]"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.stageCode}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-5"
                >
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100 text-xs font-mono text-slate-500">
                    <span className="text-[#0A1128] font-bold">{current.stageCode} · Execution Blueprint</span>
                    <span className="text-emerald-600 font-semibold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">Milestone Guaranteed</span>
                  </div>

                  <div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-[#0A1128] tracking-tight mb-2">
                      {current.title}
                    </h3>
                    <p className="text-xs font-mono text-orange mb-3 font-semibold">
                      &quot;{current.mindset}&quot;
                    </p>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {current.summary}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                    <span className="text-[11px] font-mono text-slate-500 block mb-1 uppercase font-semibold">
                      When Is This Stage Right For You?
                    </span>
                    <p className="text-xs text-slate-700 leading-relaxed font-sans">
                      {current.recommendedWhen}
                    </p>
                  </div>

                  <div className="space-y-2 pt-1">
                    <span className="text-xs font-mono text-slate-500 block font-semibold uppercase">
                      Included Deliverables:
                    </span>
                    <div className="grid grid-cols-2 gap-2.5">
                      {current.supportingServices.map((service, sIdx) => (
                        <div key={sIdx} className="flex items-center gap-2 text-xs text-slate-700">
                          <Check className="w-4 h-4 text-orange flex-shrink-0" />
                          <span>{service}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </SpotlightCard>
          </div>

        </div>

        {/* Mobile View */}
        <div className="block lg:hidden space-y-4">
          {journeyStages.map((stage, idx) => {
            const Icon = stageIcons[idx];
            const theme = stageThemes[idx];
            const variant = stageVariants[idx];

            return (
              <SpotlightCard key={stage.stageCode} theme={theme} className="p-6 space-y-3">
                <div className="flex items-center gap-3.5">
                  <DevlofoxIconBox icon={Icon} variant={variant} size="sm" />
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 uppercase">{stage.stageCode}</span>
                    <h4 className="text-base font-bold text-[#0A1128]">{stage.title}</h4>
                  </div>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">{stage.summary}</p>
                <div className="pt-2 border-t border-slate-100 space-y-1.5">
                  {stage.supportingServices.map((srv, sIdx) => (
                    <div key={sIdx} className="flex items-center gap-2 text-xs text-slate-700">
                      <Check className="w-3.5 h-3.5 text-orange" />
                      <span>{srv}</span>
                    </div>
                  ))}
                </div>
              </SpotlightCard>
            );
          })}
        </div>

      </div>
    </section>
  );
};
