import React, { useState } from 'react';
import { sprintStages, sprintTagline } from '../../data/sprintStages';
import { CheckCircle2, Flag } from 'lucide-react';
import { motion } from 'framer-motion';
import { SpotlightCard } from '../ui/SpotlightCard';

export const JugaduSprint: React.FC = () => {
  const [activeStageIndex, setActiveStageIndex] = useState(0);
  const activeStage = sprintStages[activeStageIndex];

  return (
    <section id="sprint" className="py-24 sm:py-32 lg:py-36 bg-[#F8FAFC] border-b border-slate-200/80 relative overflow-hidden">
      <div className="max-w-content mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-14 sm:mb-18 space-y-3"
        >
          <span className="text-xs font-mono font-bold tracking-widest uppercase text-orange bg-orange-50 px-3.5 py-1.5 rounded-full border border-orange-200 inline-block shadow-sm">
            Sprint Velocity
          </span>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0A1128] font-heading tracking-[-0.03em] leading-[1.1]">
            A clear process. <br />
            <span className="text-gradient-orange">From conversation to launch.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-normal">
            No vague status meetings or ghosting. We execute across six disciplined milestone gates with 100% transparency.
          </p>
        </motion.div>

        {/* Process Tagline Band */}
        <div className="mb-14 p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-orange animate-pulse"></span>
            <p className="text-sm sm:text-base font-bold text-[#0A1128]">
              {sprintTagline}
            </p>
          </div>
          <span className="text-xs font-mono text-slate-500 font-semibold bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
            Milestone-Gated Deliverables
          </span>
        </div>

        {/* Desktop Interactive Journey Timeline */}
        <div className="hidden lg:block relative mb-16">
          {/* Progress Track */}
          <div className="absolute top-5 left-12 right-12 h-[3px] bg-slate-200 z-0">
            <motion.div 
              className="h-full bg-orange rounded-full"
              animate={{ width: `${(activeStageIndex / (sprintStages.length - 1)) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>

          {/* 6 Step Triggers */}
          <div className="grid grid-cols-6 gap-2 relative z-10">
            {sprintStages.map((stage, idx) => {
              const isActive = idx === activeStageIndex;
              const isPast = idx < activeStageIndex;

              return (
                <button
                  key={stage.step}
                  onClick={() => setActiveStageIndex(idx)}
                  className="flex flex-col items-center text-center group focus:outline-none cursor-pointer"
                  aria-pressed={isActive}
                >
                  <div className={`w-11 h-11 rounded-full border flex items-center justify-center font-mono font-bold text-xs transition-all ${
                    isActive 
                      ? 'bg-gradient-to-r from-orange to-orange-dark border-orange text-white shadow-lg shadow-orange/30 scale-110' 
                      : isPast
                        ? 'bg-emerald-50 border-emerald-300 text-emerald-600'
                        : 'bg-white border-slate-200 text-slate-500 group-hover:border-slate-400 group-hover:text-slate-800 shadow-sm'
                  }`}>
                    {isPast ? <CheckCircle2 className="w-4 h-4 text-emerald-600" /> : stage.step}
                  </div>

                  <span className={`mt-3 text-xs font-bold tracking-tight transition-colors ${
                    isActive ? 'text-[#0A1128]' : 'text-slate-500 group-hover:text-slate-800'
                  }`}>
                    {stage.name}
                  </span>

                  <span className="text-[11px] font-mono text-slate-400 line-clamp-1 max-w-[120px] mt-0.5">
                    {stage.headline}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Expanded Stage Panel */}
          <SpotlightCard theme="orange" className="mt-12 p-8 sm:p-10 shadow-xl">
            <div className="grid grid-cols-12 gap-8 items-center">
              <div className="col-span-8 space-y-4">
                <div className="flex items-center gap-2.5">
                  <span className="font-mono text-xs font-bold text-orange px-2.5 py-1 rounded bg-orange-50 border border-orange-200">
                    STAGE {activeStage.step}
                  </span>
                  <span className="text-slate-400 font-mono text-xs">/</span>
                  <span className="text-xs font-mono text-slate-600 font-semibold">
                    {activeStage.headline}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-[#0A1128] tracking-tight">
                  {activeStage.name}
                </h3>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-sans">
                  {activeStage.description}
                </p>

                <div className="pt-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-500 font-bold block mb-2">
                    Guaranteed Stage Deliverables:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1.5 rounded-lg bg-orange-50 border border-orange-200 text-xs font-mono font-bold text-orange shadow-sm">
                      Gate Signoff: {activeStage.deliverable}
                    </span>
                    {activeStage.details.map((detail, dIdx) => (
                      <span key={dIdx} className="px-3 py-1 rounded-lg bg-white border border-slate-200 text-xs font-mono font-medium text-slate-700 shadow-sm">
                        ✓ {detail}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="col-span-4 p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono text-orange font-bold uppercase">
                  <Flag className="w-4 h-4" />
                  <span>Sprint Milestone Gate</span>
                </div>
                <p className="text-sm font-bold text-[#0A1128]">
                  Milestone-locked signoff before proceeding to next gate.
                </p>
                <p className="text-xs text-slate-500 leading-relaxed font-sans">
                  Zero scope creep, guaranteed 14-day delivery velocity.
                </p>
              </div>
            </div>
          </SpotlightCard>
        </div>

        {/* Mobile View */}
        <div className="block lg:hidden space-y-4">
          {sprintStages.map((stage) => (
            <SpotlightCard key={stage.step} theme="default" className="p-6 space-y-3">
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-orange-50 text-orange border border-orange-200 font-mono font-bold text-xs flex items-center justify-center">
                  {stage.step}
                </span>
                <h4 className="text-base font-bold text-[#0A1128]">{stage.name}</h4>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed font-sans">{stage.description}</p>
              <div className="pt-2 border-t border-slate-100 flex flex-wrap gap-1.5">
                <span className="text-[10px] font-mono bg-orange-50 text-orange font-bold px-2 py-0.5 rounded border border-orange-200">
                  {stage.deliverable}
                </span>
                {stage.details.map((d, i) => (
                  <span key={i} className="text-[10px] font-mono bg-slate-100 text-slate-700 px-2 py-0.5 rounded">
                    ✓ {d}
                  </span>
                ))}
              </div>
            </SpotlightCard>
          ))}
        </div>

      </div>
    </section>
  );
};
