import React, { useState } from 'react';
import { projectsData, type CaseStudy } from '../../data/projects';
import { X, ArrowRight, ShieldCheck } from 'lucide-react';

export const SelectedWork: React.FC = () => {
  const [activeModalProject, setActiveModalProject] = useState<CaseStudy | null>(null);

  return (
    <section id="work" className="py-20 sm:py-28 lg:py-32 bg-[#FAFBFD] border-b border-[#E3E8EF]">
      <div className="max-w-content mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Section Header with generous line-height */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 mb-3.5">
            <span className="font-mono text-xs font-bold text-orange tracking-wider">05</span>
            <span className="text-slate-300 text-xs">/</span>
            <span className="text-xs font-semibold uppercase tracking-wider text-navy font-mono">
              Selected Work &amp; Proof
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-navy font-heading mb-4">
            Good Work Should <br className="hidden sm:inline" />
            <span className="text-orange">Speak for Itself.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Explore how we approach digital challenges, from the first problem to the final experience. We present honest, verified studio showcases structured across challenge, objective, approach, execution, and real outcomes.
          </p>
        </div>

        {/* Editorial Project Showcase: 3 In-Depth Case Studies */}
        <div className="space-y-12">
          {projectsData.map((project, index) => (
            <article
              key={project.id}
              className="bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-subtle hover:shadow-card hover:border-orange-border/90 transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                
                {/* Visual Preview Side (5 cols) */}
                <div className={`lg:col-span-5 p-7 sm:p-10 flex flex-col justify-between ${
                  index % 2 === 1 ? 'bg-navy text-white' : 'bg-slate-50 text-navy'
                }`}>
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className={`text-[11px] font-mono font-bold tracking-wider uppercase px-3 py-1 rounded-full border ${
                        index % 2 === 1 
                          ? 'border-orange/60 bg-orange/10 text-orange' 
                          : 'border-orange-border bg-orange-pale text-orange'
                      }`}>
                        {project.label}
                      </span>
                      <span className="text-xs font-mono opacity-60">
                        0{index + 1} / 03
                      </span>
                    </div>

                    <span className="text-xs font-mono font-bold tracking-wider text-orange uppercase block mb-2">
                      {project.tag}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold font-heading leading-[1.28] mb-4">
                      {project.title}
                    </h3>

                    <p className={`text-sm leading-relaxed mb-6 ${
                      index % 2 === 1 ? 'text-slate-300' : 'text-slate-600'
                    }`}>
                      {project.category}
                    </p>
                  </div>

                  {/* Visual Specimen Box */}
                  <div className={`p-4 rounded-xl border text-xs font-mono ${
                    index % 2 === 1 
                      ? 'bg-slate-800/90 border-slate-700 text-slate-300' 
                      : 'bg-white border-slate-200 text-slate-600'
                  }`}>
                    <div className="flex items-center justify-between pb-2 border-b border-slate-200/40 font-bold">
                      <span>Verification Framework</span>
                      <span className="text-orange">5-Part Case Study</span>
                    </div>
                    <p className="mt-2 text-[11px] font-sans leading-relaxed">
                      {project.metricsContext}
                    </p>
                  </div>
                </div>

                {/* Case Study Breakdown (7 cols) */}
                <div className="lg:col-span-7 p-7 sm:p-10 space-y-6 flex flex-col justify-between">
                  <div className="space-y-4">
                    
                    {/* The 5-Part Breakdown from Blueprint */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-4 border-b border-slate-100">
                      <div>
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-rose-600 block mb-1">
                          1. The Challenge
                        </span>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          {project.challenge}
                        </p>
                      </div>
                      <div>
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-navy block mb-1">
                          2. The Objective
                        </span>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          {project.objective}
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-4 border-b border-slate-100">
                      <div>
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-orange block mb-1">
                          3. Our Approach
                        </span>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          {project.approach}
                        </p>
                      </div>
                      <div>
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-navy block mb-1">
                          4. The Execution
                        </span>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          {project.execution}
                        </p>
                      </div>
                    </div>

                    <div>
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-600 block mb-1">
                        5. The Outcome
                      </span>
                      <p className="text-xs font-semibold text-navy leading-relaxed bg-emerald-50/80 p-3 rounded-xl border border-emerald-200/80">
                        {project.outcome}
                      </p>
                    </div>

                    {/* Deliverable Tags */}
                    <div className="pt-2 flex flex-wrap gap-2">
                      {project.deliverables.map((del, dIdx) => (
                        <span
                          key={dIdx}
                          className="px-3 py-1 text-[11px] font-mono font-semibold rounded-lg bg-slate-100 text-slate-700"
                        >
                          {del}
                        </span>
                      ))}
                    </div>

                  </div>

                  {/* Actions & Deep Dive */}
                  <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                    <button
                      type="button"
                      onClick={() => setActiveModalProject(project)}
                      className="inline-flex items-center gap-2 text-xs font-bold text-navy hover:text-orange transition-colors group"
                    >
                      <span>Read Complete 5-Part Architectural Blueprint</span>
                      <ArrowRight className="w-3.5 h-3.5 text-orange transition-transform group-hover:translate-x-1" />
                    </button>
                    <span className="text-[11px] font-mono text-slate-400">
                      Honest Studio Portfolio
                    </span>
                  </div>

                </div>

              </div>
            </article>
          ))}
        </div>

        {/* Transparency Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-slate-200/90 flex items-start sm:items-center gap-4 text-xs text-slate-600 shadow-subtle">
          <ShieldCheck className="w-5 h-5 text-orange flex-shrink-0 mt-0.5 sm:mt-0" />
          <p>
            <strong className="text-navy font-bold">Studio Transparency Note:</strong> In strict compliance with our honesty policy, concept case studies are rigorously designated as such to demonstrate technical capability, architectural thinking, and design execution without invented metrics or unverified client endorsements.
          </p>
        </div>

      </div>

      {/* Case Study Full Modal */}
      {activeModalProject && (
        <div 
          className="fixed inset-0 z-50 bg-navy/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-9 border border-slate-200 shadow-2xl relative my-8">
            <button
              onClick={() => setActiveModalProject(null)}
              className="absolute top-6 right-6 p-2 rounded-xl text-slate-400 hover:text-navy hover:bg-slate-100 transition-colors"
              aria-label="Close Case Study Details"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2.5 mb-3">
              <span className="font-mono text-xs font-bold text-orange px-2.5 py-0.5 rounded-full bg-orange-pale border border-orange-border">
                {activeModalProject.label}
              </span>
              <span className="text-xs font-mono text-slate-400">
                {activeModalProject.tag}
              </span>
            </div>

            <h3 className="text-2xl font-bold font-heading text-navy leading-[1.25] mb-4">
              {activeModalProject.title}
            </h3>

            <div className="space-y-4 my-6 text-sm divide-y divide-slate-100 max-h-[60vh] overflow-y-auto pr-2">
              <div className="pt-2">
                <h4 className="font-mono font-bold text-xs uppercase tracking-wider text-rose-600 mb-1">
                  1. The Challenge
                </h4>
                <p className="text-slate-600 leading-relaxed">{activeModalProject.challenge}</p>
              </div>

              <div className="pt-3">
                <h4 className="font-mono font-bold text-xs uppercase tracking-wider text-navy mb-1">
                  2. The Objective
                </h4>
                <p className="text-slate-600 leading-relaxed">{activeModalProject.objective}</p>
              </div>

              <div className="pt-3">
                <h4 className="font-mono font-bold text-xs uppercase tracking-wider text-orange mb-1">
                  3. Our Strategic Approach
                </h4>
                <p className="text-slate-600 leading-relaxed">{activeModalProject.approach}</p>
              </div>

              <div className="pt-3">
                <h4 className="font-mono font-bold text-xs uppercase tracking-wider text-navy mb-1">
                  4. Technical &amp; Design Execution
                </h4>
                <p className="text-slate-600 leading-relaxed">{activeModalProject.execution}</p>
              </div>

              <div className="pt-3">
                <h4 className="font-mono font-bold text-xs uppercase tracking-wider text-emerald-600 mb-1">
                  5. The Outcome
                </h4>
                <p className="text-slate-700 font-semibold leading-relaxed bg-emerald-50/80 p-3.5 rounded-xl border border-emerald-100">
                  {activeModalProject.outcome}
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-slate-100">
              <span className="text-xs text-slate-400 font-mono">TeamJugadu Studio Standard</span>
              <button
                onClick={() => setActiveModalProject(null)}
                className="px-6 py-2.5 text-xs font-bold rounded-xl bg-navy text-white hover:bg-slate-800 transition-colors shadow-sm"
              >
                Done Reading
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
