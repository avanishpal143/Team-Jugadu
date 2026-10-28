import React, { useState } from 'react';
import { GitFork, EyeOff, Navigation2, ClockAlert, CheckCircle2, XCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { SpotlightCard, type CardTheme } from '../ui/SpotlightCard';
import { DevlofoxIconBox } from '../ui/DevlofoxIconBox';

export const FounderRealityCheck: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'problem' | 'solution'>('problem');

  const problems: Array<{
    code: string;
    title: string;
    problemText: string;
    solutionText: string;
    icon: typeof GitFork;
    impact: string;
    fixMetric: string;
    theme: CardTheme;
    iconVariant: 'orange' | 'purple' | 'cyan' | 'emerald';
  }> = [
    {
      code: "01",
      title: "Multi-Vendor Friction",
      problemText: "Designer in one timezone, agency dev in another, copywriter missing. Zero single-point accountability for the final outcome.",
      solutionText: "Full-stack dedicated sprint team: Senior designer, principal engineer, and strategist under one unified roof.",
      icon: GitFork,
      impact: "Fragmented accountability",
      fixMetric: "1 Dedicated Point of Contact",
      theme: "orange",
      iconVariant: "orange"
    },
    {
      code: "02",
      title: "The Perception Penalty",
      problemText: "You built breakthrough technology, but your website looks like a student project. High-value clients and angels bounce in seconds.",
      solutionText: "Tier-1 visual hierarchy, custom interactive product specimens, and high-trust typography that commands authority.",
      icon: EyeOff,
      impact: "Lost founder credibility",
      fixMetric: "+340% Higher Perceived Value",
      theme: "purple",
      iconVariant: "purple"
    },
    {
      code: "03",
      title: "The Conversion Void",
      problemText: "Visitors land, get overwhelmed by jargon, find no clear decision journey, and leave without booking a demo or purchasing.",
      solutionText: "Engineered buyer journeys: 3-second hook, immediate value comprehension, and frictionless booking funnels.",
      icon: Navigation2,
      impact: "High bounce rate",
      fixMetric: "Sub-45s Value Comprehension",
      theme: "cyan",
      iconVariant: "cyan"
    },
    {
      code: "04",
      title: "The Scope Creep Abyss",
      problemText: "Vague contracts, endless revision loops, and 3-month launch delays burning precious startup runway.",
      solutionText: "Fixed-scope, fixed-price 14-day sprint framework. Milestone-locked deliverables with guaranteed launch day.",
      icon: ClockAlert,
      impact: "Burned runway & delayed revenue",
      fixMetric: "Guaranteed 14-Day Delivery",
      theme: "emerald",
      iconVariant: "emerald"
    }
  ];

  return (
    <section id="reality-check" className="py-24 sm:py-32 lg:py-36 bg-[#F8FAFC] border-b border-slate-200/80 relative overflow-hidden">
      {/* Subtle Ambient Backing Glow */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-r from-orange-400/10 via-purple-400/5 to-blue-400/10 rounded-full blur-[160px] pointer-events-none -z-10" 
      />

      <div className="max-w-content mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        
        {/* Header & Minimalist Tab Switcher */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 sm:mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl space-y-3"
          >
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-orange bg-orange-50 px-3.5 py-1.5 rounded-full border border-orange-200 inline-block shadow-sm">
              Startup Diagnostic Check
            </span>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0A1128] font-heading tracking-[-0.03em] leading-[1.1]">
              Building is hard enough. <br />
              <span className="text-gradient-orange">Your execution shouldn&apos;t be.</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-600 font-normal pt-1">
              Most founders lose months wrestling with disjointed agencies and endless revisions. Here is how our 14-day sprint protocol fixes it.
            </p>
          </motion.div>

          {/* Devlofox Style 3D Switcher in Light Mode */}
          <div className="p-1.5 rounded-2xl bg-white border border-slate-200 backdrop-blur-xl flex items-center gap-1.5 self-start lg:self-auto shadow-md">
            <button
              onClick={() => setActiveTab('problem')}
              className={`px-5 py-2.5 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
                activeTab === 'problem' 
                  ? 'bg-slate-900 text-white shadow-md' 
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              The Dilemma
            </button>
            <button
              onClick={() => setActiveTab('solution')}
              className={`px-5 py-2.5 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
                activeTab === 'solution' 
                  ? 'bg-gradient-to-r from-orange to-orange-dark text-white shadow-[0_4px_15px_rgba(255,107,11,0.4)]' 
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              The 14-Day Fix
            </button>
          </div>
        </div>

        {/* 4 Devlofox-Style 3D Cards in Light Mode */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 lg:gap-8">
          {problems.map((item) => {
            const Icon = item.icon;
            const isSolution = activeTab === 'solution';

            return (
              <SpotlightCard
                key={item.code}
                theme={item.theme}
                className="p-8 sm:p-10 flex flex-col justify-between relative group"
              >
                {/* 3D Faint Number Watermark in Background */}
                <span className="absolute top-4 right-6 text-6xl sm:text-7xl font-extrabold font-mono text-slate-900/[0.04] select-none pointer-events-none group-hover:text-slate-900/[0.08] transition-colors">
                  {item.code}
                </span>

                <div>
                  {/* Top Bar with Devlofox 3D Embossed Icon Box */}
                  <div className="flex items-center justify-between mb-7">
                    <DevlofoxIconBox 
                      icon={Icon} 
                      variant={item.iconVariant} 
                      size="md" 
                    />

                    <span className="text-xs font-mono font-bold tracking-wider px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700">
                      STEP {item.code}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold font-heading text-[#0A1128] tracking-tight mb-3">
                    {item.title}
                  </h3>

                  <AnimatePresence mode="wait">
                    <motion.p
                      key={isSolution ? 'solution' : 'problem'}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.2 }}
                      className="text-sm sm:text-base text-slate-600 leading-relaxed min-h-[70px]"
                    >
                      {isSolution ? item.solutionText : item.problemText}
                    </motion.p>
                  </AnimatePresence>
                </div>

                {/* Bottom Metric Pill */}
                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-500 font-semibold">
                    {isSolution ? 'Sprint Standard:' : 'Agency Trap:'}
                  </span>
                  
                  <span className={`font-bold px-3 py-1 rounded-lg flex items-center gap-1.5 ${
                    isSolution 
                      ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' 
                      : 'bg-rose-50 text-rose-700 border border-rose-200'
                  }`}>
                    {isSolution ? (
                      <>
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                        <span>{item.fixMetric}</span>
                      </>
                    ) : (
                      <>
                        <XCircle className="w-3.5 h-3.5 text-rose-600" />
                        <span>{item.impact}</span>
                      </>
                    )}
                  </span>
                </div>
              </SpotlightCard>
            );
          })}
        </div>

      </div>
    </section>
  );
};
