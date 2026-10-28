import React from 'react';
import { ArrowRight, ArrowUpRight, Check, Sparkles, Shield, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { siteConfig } from '../../data/siteConfig';
import { SpotlightCard } from '../ui/SpotlightCard';
import { TechMarquee } from '../ui/TechMarquee';

export const Hero: React.FC = () => {
  const activeSprintDay = 14;

  return (
    <section id="hero" className="relative min-h-screen lg:h-screen lg:max-h-[1080px] flex flex-col justify-between pt-20 sm:pt-24 lg:pt-20 pb-0 overflow-hidden bg-[#F8FAFC]">
      {/* Subtle Ambient Radial Lighting */}
      <div 
        aria-hidden="true" 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] sm:w-[1100px] h-[480px] bg-gradient-to-b from-orange-500/[0.07] via-orange-500/[0.02] to-transparent rounded-full blur-[120px] pointer-events-none -z-10" 
      />

      {/* Vertically Centered Hero Grid */}
      <div className="flex-1 flex items-center justify-center my-auto w-full py-4 sm:py-6">
        <div className="max-w-wide mx-auto px-5 sm:px-8 lg:px-12 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Classic, Minimal Editorial Copy */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-5">
              
              {/* Minimal Status Pill */}
              <motion.div 
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-sm"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
                </span>
                <span className="text-[11px] font-mono font-medium text-slate-700">
                  Q2 Sprints Active · 14-Day Delivery
                </span>
              </motion.div>

              {/* Classic Refined Headline - Proportionate & Elegant */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h1 className="text-3xl sm:text-4xl lg:text-[40px] xl:text-[46px] font-extrabold text-[#0A1128] font-heading tracking-[-0.03em] leading-[1.14]">
                  We engineer products <br />
                  <span className="text-gradient-orange">
                    that command authority.
                  </span>
                </h1>
              </motion.div>

              {/* Concise, Pure Supporting Line */}
              <motion.p 
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="text-sm sm:text-base lg:text-[17px] text-slate-600 leading-relaxed max-w-lg font-normal"
              >
                High-converting websites and investor-ready MVPs. Built in disciplined <strong className="text-[#0A1128] font-semibold">14-day sprints</strong> with direct senior engineering access.
              </motion.p>

              {/* Minimal Sleek Actions */}
              <motion.div 
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="pt-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-3"
              >
                <motion.a
                  href={siteConfig.discoveryBookingUrl}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-bold font-mono rounded-xl bg-gradient-to-r from-orange to-orange-dark text-white hover:brightness-105 shadow-orange-soft transition-all"
                >
                  <span>Book 30-Min Discovery Sprint</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </motion.a>

                <motion.a
                  href="#work"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-xs sm:text-sm font-semibold rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-[#0A1128] hover:border-slate-300 shadow-sm transition-all"
                >
                  <span>View Selected Proof</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
                </motion.a>
              </motion.div>

              {/* Pure, Minimal Trust Metrics Row */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="pt-5 border-t border-slate-200/80 flex flex-wrap items-center gap-5 sm:gap-7 text-xs sm:text-sm font-mono"
              >
                <div className="flex items-center gap-2">
                  <span className="font-extrabold text-[#0A1128] font-heading text-base sm:text-lg">42+</span>
                  <span className="text-slate-500 text-xs">Startups Launched</span>
                </div>
                <span className="text-slate-300 hidden sm:inline">•</span>
                <div className="flex items-center gap-2">
                  <span className="font-extrabold text-[#0A1128] font-heading text-base sm:text-lg">14 Days</span>
                  <span className="text-slate-500 text-xs">Turnaround</span>
                </div>
                <span className="text-slate-300 hidden sm:inline">•</span>
                <div className="flex items-center gap-2">
                  <span className="font-extrabold text-emerald-600 font-heading text-base sm:text-lg">100/100</span>
                  <span className="text-slate-500 text-xs">Lighthouse Speed</span>
                </div>
              </motion.div>

            </div>

            {/* Right Column: Pure & Minimal Sprint Execution Card */}
            <div className="lg:col-span-5 relative">
              <SpotlightCard theme="orange" className="p-0 border border-slate-200 bg-white shadow-[0_15px_40px_rgba(0,35,75,0.06)] relative z-10 overflow-hidden">
                
                {/* Card Window Header */}
                <div className="h-10 bg-slate-50/90 border-b border-slate-200/80 px-4 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-300"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-300"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-300"></span>
                    <span className="text-[11px] font-mono text-slate-500 ml-2 font-medium">
                      teamjugadu.com/sprint
                    </span>
                  </div>

                  <span className="text-[10px] font-mono font-bold text-orange bg-orange-50 px-2 py-0.5 rounded border border-orange-200">
                    Day {activeSprintDay} of 14
                  </span>
                </div>

                {/* Card Body - Pure & Essential */}
                <div className="p-5 sm:p-6 space-y-4 bg-white">
                  
                  {/* Sprint Timeline Progress Bar */}
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-slate-700 font-semibold flex items-center gap-1.5">
                        <Zap className="w-3.5 h-3.5 text-orange" /> Sprint Velocity Gate
                      </span>
                      <span className="text-emerald-600 font-bold">100% On Schedule</span>
                    </div>

                    <div className="h-2 rounded-full bg-slate-100 overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-orange to-orange-dark rounded-full transition-all duration-300"
                        style={{ width: `${(activeSprintDay / 14) * 100}%` }}
                      />
                    </div>
                  </div>

                  {/* 3 Core Milestone Checks */}
                  <div className="space-y-2 pt-1">
                    <div className="p-2.5 sm:p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0">
                          <Check className="w-3 h-3" />
                        </div>
                        <div>
                          <h4 className="text-xs font-bold text-[#0A1128]">Phase 1: Brand &amp; Architecture</h4>
                          <p className="text-[11px] text-slate-500 font-mono">Custom design system &amp; Figma prototype</p>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded">
                        Approved
                      </span>
                    </div>

                    <div className="p-2.5 sm:p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0">
                          <Check className="w-3 h-3" />
                        </div>
                        <div>
                          <h4 className="text-xs font-bold text-[#0A1128]">Phase 2: React 19 Build</h4>
                          <p className="text-[11px] text-slate-500 font-mono">TypeScript, responsive CSS &amp; sub-second TTFB</p>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded">
                        Passed
                      </span>
                    </div>

                    <div className="p-2.5 sm:p-3 rounded-xl bg-orange-50/50 border border-orange-200/60 flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-5 h-5 rounded-full bg-orange text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                          <Sparkles className="w-3 h-3" />
                        </div>
                        <div>
                          <h4 className="text-xs font-bold text-[#0A1128]">Phase 3: Production Launch</h4>
                          <p className="text-[11px] text-slate-500 font-mono">DNS live &amp; 100% clean GitHub transfer</p>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono text-orange font-bold bg-white px-2 py-0.5 rounded border border-orange-200">
                        Day 14 Gate
                      </span>
                    </div>
                  </div>

                  {/* Interactive Day Scrubber */}
                  <div className="pt-2 flex items-center justify-between text-xs font-mono text-slate-500 border-t border-slate-100">
                    <div className="flex items-center gap-1.5 text-slate-700">
                      <Shield className="w-3.5 h-3.5 text-orange" />
                      <span>Fixed Scope &amp; Price</span>
                    </div>
                    <span className="text-slate-500">Zero Agency Overhead</span>
                  </div>

                </div>

              </SpotlightCard>
            </div>

          </div>
        </div>
      </div>

      {/* Infinite Technology Marquee anchored at bottom of viewport */}
      <div className="w-full mt-auto">
        <TechMarquee />
      </div>
    </section>
  );
};
