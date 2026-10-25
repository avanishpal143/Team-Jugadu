import React from 'react';
import { technologyGroups, mernStackNote } from '../../data/technologies';
import { Code2, CheckCircle2, Cpu } from 'lucide-react';

export const TechnologyCapabilities: React.FC = () => {
  return (
    <section id="technologies" className="py-20 sm:py-28 lg:py-32 bg-[#FAFBFD] border-b border-[#E3E8EF]">
      <div className="max-w-content mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Section Header with generous line-height */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 mb-3.5">
            <span className="font-mono text-xs font-bold text-orange tracking-wider">07</span>
            <span className="text-slate-300 text-xs">/</span>
            <span className="text-xs font-semibold uppercase tracking-wider text-navy font-mono">
              Technology &amp; Capabilities
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-navy font-heading mb-4">
            The Right Stack for the <br className="hidden sm:inline" />
            <span className="text-orange">Right Stage.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            We choose technologies around your product requirements, scalability needs, budget and long-term maintenance, not trends alone. Clean, reliable, maintainable code.
          </p>
        </div>

        {/* 3 Accurate Technology Groups */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {technologyGroups.map((group) => (
            <div
              key={group.id}
              className="bg-white rounded-3xl p-7 sm:p-9 border border-slate-200/90 shadow-subtle hover:border-orange-border hover:shadow-card transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-orange">
                    {group.badge}
                  </span>
                  <div className="p-2 rounded-lg bg-slate-50 border border-slate-200 text-navy">
                    <Code2 className="w-4 h-4 text-orange" />
                  </div>
                </div>

                <h3 className="text-xl font-bold font-heading text-navy leading-[1.3] mb-2">
                  {group.category}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {group.description}
                </p>

                {/* Technology Items */}
                <div className="space-y-3 pt-2">
                  {group.technologies.map((tech) => (
                    <div
                      key={tech.name}
                      className="p-3.5 rounded-xl bg-[#FAFBFD] border border-slate-200/80 hover:border-orange-border transition-colors flex items-start justify-between gap-3 shadow-subtle"
                    >
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-bold text-navy font-mono">
                            {tech.name}
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-500 leading-snug mt-1">
                          {tech.description}
                        </p>
                      </div>

                      <span className="px-2.5 py-1 rounded-full bg-white border border-slate-200 text-[10px] font-mono text-slate-600 font-bold whitespace-nowrap">
                        {tech.tag}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-mono text-slate-500 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Production Tested Execution</span>
              </div>
            </div>
          ))}
        </div>

        {/* MERN Stack Accurate Definition Block */}
        <div className="p-7 sm:p-9 rounded-3xl bg-navy text-white border border-slate-800 shadow-elevated">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <div className="flex items-center gap-2.5">
                <Cpu className="w-5 h-5 text-orange" />
                <span className="text-xs font-mono text-orange uppercase tracking-wider font-bold">
                  {mernStackNote.title}
                </span>
              </div>
              <h4 className="text-xl sm:text-2xl font-bold font-heading text-white leading-snug">
                {mernStackNote.formula}
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                {mernStackNote.description}
              </p>
            </div>

            <div className="lg:col-span-4 p-5 rounded-2xl bg-slate-900 border border-slate-700/80 text-xs font-mono text-slate-400 space-y-2">
              <div className="text-orange font-bold text-xs uppercase tracking-wider">Architecture Standard:</div>
              <p className="leading-relaxed">We configure full-stack JavaScript architectures when speed of iteration and unified type safety are critical to the MVP launch.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
