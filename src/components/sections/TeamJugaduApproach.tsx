import React from 'react';
import { motion } from 'framer-motion';
import { Check, X, ShieldCheck, Zap, Compass, Layers } from 'lucide-react';
import { SpotlightCard, type CardTheme } from '../ui/SpotlightCard';
import { DevlofoxIconBox } from '../ui/DevlofoxIconBox';

export const TeamJugaduApproach: React.FC = () => {
  const principles: Array<{
    num: string;
    title: string;
    description: string;
    takeaway: string;
    icon: typeof Compass;
    theme: CardTheme;
    variant: 'orange' | 'cyan' | 'purple' | 'emerald';
  }> = [
    {
      num: "01",
      title: "Clarity Before Code",
      description: "We map founder positioning, buyer journeys, and scope boundaries before touching a single line of React.",
      takeaway: "Zero wasted engineering cycles",
      icon: Compass,
      theme: "orange",
      variant: "orange"
    },
    {
      num: "02",
      title: "Intent-Driven Aesthetics",
      description: "Every micro-interaction, typography choice, and 3D specimen serves conversion and investor credibility.",
      takeaway: "Design that converts visitors into believers",
      icon: Zap,
      theme: "cyan",
      variant: "cyan"
    },
    {
      num: "03",
      title: "Pragmatic Architecture",
      description: "Modern, ultra-performant React 19, TypeScript, and Tailwind stack. Sub-second loads with zero template baggage.",
      takeaway: "Production-grade from Day 1",
      icon: Layers,
      theme: "purple",
      variant: "purple"
    },
    {
      num: "04",
      title: "Absolute Ownership",
      description: "Clean Git repository handover, documented Figma tokens, zero recurring platform lock-in fees.",
      takeaway: "100% IP & source code belongs to you",
      icon: ShieldCheck,
      theme: "emerald",
      variant: "emerald"
    }
  ];

  const comparisonRows = [
    {
      feature: "Delivery Velocity",
      traditional: "2–4 Months of Slack delays",
      freelancer: "Unpredictable (ghost risk)",
      teamjugadu: "Guaranteed 14-Day Sprint"
    },
    {
      feature: "Code & IP Ownership",
      traditional: "Proprietary lock-in & hosting fees",
      freelancer: "Messy spaghetti code",
      teamjugadu: "100% Clean GitHub Handover"
    },
    {
      feature: "Engineering Standards",
      traditional: "Offshored to junior interns",
      freelancer: "Template hacks & bloat",
      teamjugadu: "Senior Architects Only"
    },
    {
      feature: "Pricing Model",
      traditional: "Endless hourly billable scope",
      freelancer: "Hidden surprises midway",
      teamjugadu: "Transparent Milestone Lock"
    },
    {
      feature: "Performance Target",
      traditional: "Bloated 40-50 Lighthouse",
      freelancer: "No speed testing",
      teamjugadu: "Lighthouse 100/100 Tested"
    }
  ];

  return (
    <section id="approach" className="py-24 sm:py-32 lg:py-36 bg-white border-b border-slate-200/80 relative overflow-hidden">
      <div className="max-w-content mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end mb-16 sm:mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-8 space-y-3"
          >
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-blue-600 bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200 inline-block shadow-sm">
              The Anti-Agency Blueprint
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0A1128] font-heading tracking-[-0.03em] leading-[1.1]">
              Clarity before code. <br />
              <span className="text-gradient-orange">Disciplined velocity.</span>
            </h2>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-4"
          >
            <p className="text-base sm:text-lg text-slate-600 font-normal">
              We eliminate agency bureaucracy. Strategy, visual storytelling, and code operate as a synchronized sprint engine.
            </p>
          </motion.div>
        </div>

        {/* 4 Devlofox-Style 3D Principle Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {principles.map((item) => {
            const Icon = item.icon;
            return (
              <SpotlightCard 
                key={item.num}
                theme={item.theme}
                className="p-7 sm:p-8 flex flex-col justify-between relative group"
              >
                {/* 3D Watermark Number */}
                <span className="absolute top-3 right-5 text-5xl font-extrabold font-mono text-slate-900/[0.04] select-none pointer-events-none group-hover:text-slate-900/[0.08] transition-colors">
                  {item.num}
                </span>

                <div>
                  <div className="mb-6">
                    <DevlofoxIconBox 
                      icon={Icon} 
                      variant={item.variant} 
                      size="md" 
                    />
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold font-heading text-[#0A1128] tracking-tight mb-2.5">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-mono text-slate-700">
                  <span className="w-2 h-2 rounded-full bg-orange"></span>
                  <span className="font-bold">{item.takeaway}</span>
                </div>
              </SpotlightCard>
            );
          })}
        </div>

        {/* Sleek Devlofox-Style Comparison Table Card */}
        <SpotlightCard theme="default" className="p-6 sm:p-10 border border-slate-200/90 bg-white shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-slate-100 gap-4">
            <div>
              <span className="text-xs font-mono text-orange uppercase tracking-wider block mb-1 font-bold">
                Comparative Standards
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-heading text-[#0A1128] tracking-tight">
                How TeamJugadu Compares
              </h3>
            </div>
            <span className="text-xs font-mono text-slate-700 bg-slate-100 px-3.5 py-1.5 rounded-full border border-slate-200 self-start sm:self-auto font-semibold">
              100% Transparent Milestone Guarantee
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm font-sans min-w-[600px]">
              <thead>
                <tr className="border-b border-slate-200 text-xs font-mono text-slate-500 uppercase tracking-wider">
                  <th className="py-3.5 px-4 font-bold">Metric</th>
                  <th className="py-3.5 px-4 font-semibold">Traditional Agency</th>
                  <th className="py-3.5 px-4 font-semibold">Freelancers</th>
                  <th className="py-3.5 px-4 font-extrabold text-orange bg-orange-50 rounded-t-xl border-t border-x border-orange-200">
                    ⚡ TeamJugadu Sprint
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {comparisonRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-4 px-4 font-bold text-[#0A1128] text-xs sm:text-sm">
                      {row.feature}
                    </td>
                    <td className="py-4 px-4 text-slate-500 text-xs sm:text-sm">
                      <span className="flex items-center gap-2">
                        <X className="w-4 h-4 text-slate-400 flex-shrink-0" />
                        <span>{row.traditional}</span>
                      </span>
                    </td>
                    <td className="py-4 px-4 text-slate-500 text-xs sm:text-sm">
                      <span className="flex items-center gap-2">
                        <X className="w-4 h-4 text-slate-400 flex-shrink-0" />
                        <span>{row.freelancer}</span>
                      </span>
                    </td>
                    <td className="py-4 px-4 text-[#0A1128] font-bold bg-orange-50/40 border-x border-orange-200/80 text-xs sm:text-sm">
                      <span className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-orange flex-shrink-0" />
                        <span className="text-emerald-700 font-extrabold">{row.teamjugadu}</span>
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </SpotlightCard>

      </div>
    </section>
  );
};
