import React from 'react';
import { whyDifferentiators } from '../../data/whyTeamJugadu';
import { FileCheck, Milestone, MessageSquare, KeyRound } from 'lucide-react';

export const WhyTeamJugadu: React.FC = () => {
  const icons = [FileCheck, Milestone, MessageSquare, KeyRound];

  return (
    <section id="why-teamjugadu" className="py-20 sm:py-28 lg:py-32 bg-[#FFFFFF] border-b border-[#E3E8EF]">
      <div className="max-w-content mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Section Header with generous line-height */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 mb-3.5">
            <span className="font-mono text-xs font-bold text-orange tracking-wider">10</span>
            <span className="text-slate-300 text-xs">/</span>
            <span className="text-xs font-semibold uppercase tracking-wider text-navy font-mono">
              Why TeamJugadu
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-navy font-heading mb-4">
            Professional Standards. <br className="hidden md:inline" />
            <span className="text-orange">Without the Unnecessary Complexity.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            We believe good execution starts with clear expectations and ends with a delivery you understand and can manage. No agency buzzwords, no bait-and-switch.
          </p>
        </div>

        {/* 4 Differentiators Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {whyDifferentiators.map((diff, idx) => {
            const Icon = icons[idx];
            return (
              <div
                key={diff.id}
                className="bg-[#FAFBFD] rounded-3xl p-8 sm:p-10 border border-slate-200/90 hover:border-orange-border transition-all duration-300 shadow-subtle hover:shadow-card flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-200/70">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold text-orange px-3 py-1 rounded-full bg-orange-pale border border-orange-border">
                        STANDARD {diff.number}
                      </span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white border border-slate-200 text-navy shadow-subtle">
                      <Icon className="w-5 h-5 text-orange" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold font-heading text-navy mb-3 leading-[1.3]">
                    {diff.title}
                  </h3>

                  <p className="text-base text-slate-600 leading-relaxed mb-6 font-medium">
                    "{diff.description}"
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/60 bg-white -mx-8 -mb-8 sm:-mx-10 sm:-mb-10 p-6 sm:p-8 rounded-b-3xl">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 block mb-1">
                    Operational Proof
                  </span>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {diff.operationalProof}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
