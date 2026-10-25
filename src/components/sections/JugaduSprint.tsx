import React, { useState } from 'react';
import { sprintStages, sprintTagline } from '../../data/sprintStages';
import { CheckCircle2, Clock } from 'lucide-react';

export const JugaduSprint: React.FC = () => {
  const [activeStageIndex, setActiveStageIndex] = useState(0);
  const activeStage = sprintStages[activeStageIndex];

  return (
    <section id="sprint" className="py-20 sm:py-28 lg:py-32 bg-[#FFFFFF] border-b border-[#E3E8EF]">
      <div className="max-w-content mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Section Header with generous line-height */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 mb-3.5">
            <span className="font-mono text-xs font-bold text-orange tracking-wider">06</span>
            <span className="text-slate-300 text-xs">/</span>
            <span className="text-xs font-semibold uppercase tracking-wider text-navy font-mono">
              The Jugadu Sprint
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-navy font-heading mb-4">
            A Clear Process. <br className="hidden md:inline" />
            <span className="text-orange">From First Conversation to Launch.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            No endless revision loops or opaque status meetings. We execute across six disciplined milestone gates so your project moves steadily forward with full transparency.
          </p>
        </div>

        {/* Process Statement Tagline Band */}
        <div className="mb-14 p-6 sm:p-7 rounded-2xl bg-navy text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-elevated">
          <div className="flex items-center gap-3.5">
            <div className="w-3 h-3 rounded-full bg-orange animate-pulse flex-shrink-0"></div>
            <p className="text-base sm:text-lg font-bold font-heading tracking-tight text-white leading-snug">
              {sprintTagline}
            </p>
          </div>
          <span className="text-xs font-mono text-slate-300 bg-slate-800/90 px-3.5 py-1.5 rounded-full border border-slate-700">
            Milestone-Gated Deliverables
          </span>
        </div>

        {/* Desktop Interactive Journey Timeline */}
        <div className="hidden lg:block relative mb-16">
          {/* Connecting Progress Track */}
          <div className="absolute top-6 left-12 right-12 h-1 bg-[#E3E8EF] z-0">
            <div 
              className="h-full bg-orange transition-all duration-300 rounded-full"
              style={{ width: `${(activeStageIndex / (sprintStages.length - 1)) * 100}%` }}
            ></div>
          </div>

          {/* 6 Step Interactive Triggers */}
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
                  {/* Step Circle Node */}
                  <div className={`w-12 h-12 rounded-full border-2 flex items-center justify-center font-mono font-bold text-sm transition-all duration-200 ${
                    isActive 
                      ? 'bg-orange border-orange text-white shadow-orange-soft scale-110 ring-4 ring-orange-pale' 
                      : isPast
                        ? 'bg-navy border-navy text-white'
                        : 'bg-white border-[#E3E8EF] text-slate-500 group-hover:border-orange group-hover:text-orange'
                  }`}>
                    {stage.step}
                  </div>

                  <span className={`mt-3.5 text-xs font-bold font-heading transition-colors ${
                    isActive ? 'text-orange' : 'text-navy group-hover:text-orange'
                  }`}>
                    {stage.name}
                  </span>

                  <span className="text-[11px] text-slate-400 line-clamp-1 max-w-[130px] mt-0.5">
                    {stage.headline}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Expanded Active Stage Detail Panel */}
          <div className="mt-12 p-8 sm:p-10 rounded-3xl bg-[#FAFBFD] border border-orange-border/90 shadow-card">
            <div className="grid grid-cols-12 gap-8 items-center">
              <div className="col-span-8 space-y-4">
                <div className="flex items-center gap-2.5">
                  <span className="font-mono text-xs font-bold text-orange px-3 py-1 rounded-full bg-orange-pale border border-orange-border">
                    STAGE {activeStage.step}
                  </span>
                  <span className="text-xs font-mono text-slate-500 font-semibold">
                    {activeStage.headline}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-navy leading-[1.25]">
                  {activeStage.name}: {activeStage.headline}
                </h3>

                <p className="text-base text-slate-600 leading-relaxed">
                  {activeStage.description}
                </p>

                <div className="pt-2 grid grid-cols-3 gap-3.5">
                  {activeStage.details.map((detail, dIdx) => (
                    <div key={dIdx} className="p-3.5 rounded-xl bg-white border border-[#E3E8EF] text-xs font-medium text-navy flex items-start gap-2 shadow-subtle">
                      <CheckCircle2 className="w-4 h-4 text-orange flex-shrink-0 mt-0.5" />
                      <span className="leading-snug">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="col-span-4 p-6 sm:p-7 rounded-2xl bg-white border border-[#E3E8EF] space-y-3 shadow-subtle">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-orange block">
                  Agreed Handover Deliverable
                </span>
                <p className="text-lg font-bold font-heading text-navy leading-snug">
                  {activeStage.deliverable}
                </p>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Documented in the project repository and reviewed live before proceeding to the next stage gate.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Vertical Flow Timeline */}
        <div className="block lg:hidden space-y-5">
          {sprintStages.map((stage) => (
            <div
              key={stage.step}
              className="bg-[#FAFBFD] rounded-2xl p-6 border border-[#E3E8EF] space-y-3.5 shadow-subtle"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-navy text-white flex items-center justify-center font-mono font-bold text-sm flex-shrink-0">
                  {stage.step}
                </div>
                <div>
                  <h3 className="text-lg font-bold font-heading text-navy">
                    {stage.name}
                  </h3>
                  <p className="text-xs text-orange font-semibold font-mono">{stage.headline}</p>
                </div>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed">
                {stage.description}
              </p>

              <div className="p-3.5 bg-white rounded-xl border border-slate-200 text-xs">
                <span className="font-mono text-[10px] text-orange uppercase font-bold block mb-1">
                  Deliverable:
                </span>
                <span className="font-bold text-navy">{stage.deliverable}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Reality-Based Timeline Disclaimer */}
        <div className="mt-12 p-5 rounded-2xl bg-slate-50 border border-slate-200 flex items-start sm:items-center gap-3.5 text-xs text-slate-600 shadow-subtle">
          <Clock className="w-4 h-4 text-navy flex-shrink-0 mt-0.5 sm:mt-0" />
          <p>
            <strong className="text-navy font-bold">Timeline Expectation:</strong> We do not offer arbitrary "launch in 48 hours" gimmicks. Actual delivery timelines depend strictly on agreed project scope, content readiness, third-party API integrations, and milestone approval cycles.
          </p>
        </div>

      </div>
    </section>
  );
};
