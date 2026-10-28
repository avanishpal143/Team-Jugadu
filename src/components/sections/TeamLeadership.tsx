import React from 'react';
import { ShieldCheck, Code, Palette, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';
import { SpotlightCard } from '../ui/SpotlightCard';
import { DevlofoxIconBox } from '../ui/DevlofoxIconBox';

export const TeamLeadership: React.FC = () => {
  return (
    <section id="team" className="py-24 sm:py-32 lg:py-36 bg-[#F8FAFC] border-b border-slate-200/80 relative overflow-hidden">
      <div className="max-w-content mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-16 sm:mb-20 space-y-3"
        >
          <span className="text-xs font-mono font-medium tracking-widest uppercase text-orange bg-orange-50 px-3 py-1 rounded-full border border-orange-200 inline-block">
            Senior Engineering Team
          </span>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0A1128] font-heading tracking-[-0.03em] leading-[1.1]">
            Built by people who care <br />
            <span className="text-gradient-orange">about every single detail.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-normal">
            No middle managers, no outsourced junior handoffs. You collaborate directly with senior product architects and engineers who write the code and ship the build.
          </p>
        </motion.div>

        {/* Working Model Card */}
        <SpotlightCard theme="subtle" className="p-8 sm:p-12 mb-8 border border-slate-200/80">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-10">
            <div className="lg:col-span-8 space-y-3">
              <span className="text-xs font-mono text-orange uppercase font-semibold">
                Direct Builder Access Model
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-[#0A1128] tracking-tight leading-snug">
                Senior Architects. Zero Middle-Management Friction.
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                When you partner with TeamJugadu, you collaborate directly with builders who understand startup velocity, fundraising timelines, and modern technical trade-offs.
              </p>
            </div>

            <div className="lg:col-span-4 p-6 rounded-2xl bg-white border border-slate-200 space-y-2.5 shadow-[0_10px_30px_rgba(0,35,75,0.06)]">
              <div className="flex items-center gap-2 text-xs font-mono text-orange font-semibold uppercase">
                <ShieldCheck className="w-4 h-4 text-orange" />
                <span>Verified Entity</span>
              </div>
              <p className="text-sm font-bold text-[#0A1128]">
                Backed by Devlofox Technologies
              </p>
              <p className="text-xs text-slate-500 leading-relaxed">
                Institutional legal stability, enterprise infrastructure, and dependable SLAs for every client build.
              </p>
            </div>
          </div>

          {/* 3 Core Delivery Disciplines with Devlofox 3D Styling */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-slate-100">
            <div className="p-7 rounded-2xl bg-white border border-purple-200 hover:border-purple-400 hover:shadow-[0_15px_40px_rgba(168,85,247,0.15)] transition-all space-y-4 group">
              <DevlofoxIconBox icon={Palette} variant="purple" size="md" />
              <h4 className="text-lg font-bold font-heading text-[#0A1128]">
                Design &amp; Brand Systems
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Visual identity, typography systems, responsive Figma tokens, and narrative positioning that wins angels and customers.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-white border border-cyan-200 hover:border-cyan-400 hover:shadow-[0_15px_40px_rgba(0,229,255,0.15)] transition-all space-y-4 group">
              <DevlofoxIconBox icon={Code} variant="cyan" size="md" />
              <h4 className="text-lg font-bold font-heading text-[#0A1128]">
                Modern Web Engineering
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                React 19, TypeScript, sub-second TTFB, mobile-first responsiveness, and zero-debt maintainability for your team.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-white border border-orange-200 hover:border-orange-400 hover:shadow-[0_15px_40px_rgba(255,107,11,0.15)] transition-all space-y-4 group">
              <DevlofoxIconBox icon={Rocket} variant="orange" size="md" />
              <h4 className="text-lg font-bold font-heading text-[#0A1128]">
                Launch Execution &amp; SEO
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                DNS cutover, schema crawlability, analytics instrumentation, and 100% clean GitHub transfer on Day 14.
              </p>
            </div>
          </div>
        </SpotlightCard>

      </div>
    </section>
  );
};
