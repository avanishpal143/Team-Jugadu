import React from 'react';
import { whyDifferentiators } from '../../data/whyTeamJugadu';
import { FileCheck, Milestone, MessageSquare, KeyRound } from 'lucide-react';
import { motion } from 'framer-motion';
import { SpotlightCard, type CardTheme } from '../ui/SpotlightCard';
import { DevlofoxIconBox } from '../ui/DevlofoxIconBox';

export const WhyTeamJugadu: React.FC = () => {
  const icons = [FileCheck, Milestone, MessageSquare, KeyRound];
  const themes: CardTheme[] = ['orange', 'cyan', 'purple', 'emerald'];
  const variants: Array<'orange' | 'cyan' | 'purple' | 'emerald'> = ['orange', 'cyan', 'purple', 'emerald'];

  return (
    <section id="why-teamjugadu" className="py-24 sm:py-32 lg:py-36 bg-white border-b border-slate-200/80 relative overflow-hidden">
      <div className="max-w-content mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-16 sm:mb-20 space-y-3"
        >
          <span className="text-xs font-mono font-medium tracking-widest uppercase text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 inline-block">
            Operational Disciplines
          </span>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0A1128] font-heading tracking-[-0.03em] leading-[1.1]">
            Professional standards. <br />
            <span className="text-gradient-orange">Without the agency overhead.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-normal">
            Execution starts with crystal-clear expectations and ends with clean, performant code you genuinely own and can scale.
          </p>
        </motion.div>

        {/* 4 Differentiators Bento with Devlofox 3D Styling */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 lg:gap-8">
          {whyDifferentiators.map((diff, idx) => {
            const Icon = icons[idx];
            const theme = themes[idx % themes.length];
            const variant = variants[idx % variants.length];

            return (
              <SpotlightCard
                key={diff.id}
                theme={theme}
                className="p-8 sm:p-10 flex flex-col justify-between relative group"
              >
                {/* 3D Watermark Number */}
                <span className="absolute top-4 right-6 text-6xl font-extrabold font-mono text-slate-900/[0.04] select-none pointer-events-none group-hover:text-slate-900/[0.08] transition-colors">
                  0{diff.number}
                </span>

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <DevlofoxIconBox 
                      icon={Icon} 
                      variant={variant} 
                      size="md" 
                    />

                    <span className="text-xs font-mono font-bold tracking-wider px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700">
                      STANDARD 0{diff.number}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold font-heading text-[#0A1128] tracking-tight mb-3">
                    {diff.title}
                  </h3>

                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6 italic">
                    &quot;{diff.description}&quot;
                  </p>
                </div>

                <div className="pt-5 border-t border-slate-100">
                  <span className="text-[10px] font-mono text-orange uppercase block mb-1 font-semibold tracking-wider">
                    Operational Proof
                  </span>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                    {diff.operationalProof}
                  </p>
                </div>
              </SpotlightCard>
            );
          })}
        </div>

      </div>
    </section>
  );
};
