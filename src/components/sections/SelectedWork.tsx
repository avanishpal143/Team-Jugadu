import React, { useState } from 'react';
import { projectsData, type CaseStudy } from '../../data/projects';
import { X, ArrowRight, Laptop, Smartphone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { SpotlightCard } from '../ui/SpotlightCard';

export const SelectedWork: React.FC = () => {
  const [activeModalProject, setActiveModalProject] = useState<CaseStudy | null>(null);
  const [deviceMode, setDeviceMode] = useState<Record<string, 'desktop' | 'mobile'>>({
    'strata-cloud': 'desktop',
    'aurora-goods': 'desktop',
    'axon-ai': 'desktop'
  });

  const toggleDevice = (id: string, mode: 'desktop' | 'mobile') => {
    setDeviceMode(prev => ({ ...prev, [id]: mode }));
  };

  return (
    <section id="work" className="py-24 sm:py-32 lg:py-36 bg-white border-b border-slate-200/80 relative overflow-hidden">
      <div className="max-w-content mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-16 sm:mb-20 space-y-3"
        >
          <span className="text-xs font-mono font-bold tracking-widest uppercase text-blue-600 bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200 inline-block shadow-sm">
            Selected Work &amp; Proof
          </span>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0A1128] font-heading tracking-[-0.03em] leading-[1.1]">
            Good work should <br />
            <span className="text-gradient-orange">speak for itself.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-normal">
            Every showcase demonstrates our approach from initial problem definition to final production delivery.
          </p>
        </motion.div>

        {/* 3 Devlofox-Style Project Showcases */}
        <div className="space-y-12">
          {projectsData.map((project, index) => {
            const currentDevice = deviceMode[project.id] || 'desktop';

            return (
              <SpotlightCard
                key={project.id}
                theme="default"
                className="p-0 overflow-hidden border border-slate-200 shadow-xl"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                  
                  {/* Left Column: Device Mockup Frame (6 cols) */}
                  <div className="lg:col-span-6 p-6 sm:p-10 bg-slate-50/90 border-b lg:border-b-0 lg:border-r border-slate-200 flex flex-col justify-between">
                    <div>
                      {/* Top Bar with Device View Switcher */}
                      <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-200">
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-xs font-bold text-slate-700">
                            {project.label}
                          </span>
                          <span className="text-slate-400 font-mono text-xs">/</span>
                          <span className="text-xs font-mono text-orange font-bold">
                            {project.tag}
                          </span>
                        </div>

                        {/* Device Toggle */}
                        <div className="flex items-center gap-1 bg-white p-1 rounded-lg border border-slate-200 shadow-sm">
                          <button
                            onClick={() => toggleDevice(project.id, 'desktop')}
                            className={`p-1.5 rounded transition-colors ${
                              currentDevice === 'desktop' ? 'bg-[#0A1128] text-white' : 'text-slate-400 hover:text-slate-700'
                            }`}
                            title="Desktop View"
                          >
                            <Laptop className="w-3.5 h-3.5" />
                          </button>
                          <button
                            onClick={() => toggleDevice(project.id, 'mobile')}
                            className={`p-1.5 rounded transition-colors ${
                              currentDevice === 'mobile' ? 'bg-[#0A1128] text-white' : 'text-slate-400 hover:text-slate-700'
                            }`}
                            title="Mobile View"
                          >
                            <Smartphone className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>

                      {/* Device Screen */}
                      <div className="relative py-2 flex items-center justify-center">
                        {currentDevice === 'desktop' ? (
                          <div className="w-full rounded-2xl bg-white border border-slate-200 shadow-xl overflow-hidden">
                            {/* Browser Top Bar */}
                            <div className="h-8 bg-slate-100 border-b border-slate-200 px-3 flex items-center justify-between">
                              <div className="flex items-center gap-1.5">
                                <span className="w-2 h-2 rounded-full bg-rose-500"></span>
                                <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                              </div>
                              <div className="w-52 h-4 rounded bg-white text-[9px] font-mono text-slate-500 flex items-center justify-center border border-slate-200">
                                https://{project.id}.app
                              </div>
                              <span className="text-[9px] font-mono text-emerald-600 font-bold">SSL</span>
                            </div>
                            
                            {/* Project-Specific Rich View */}
                            <div className="p-5 sm:p-6 bg-white text-[#0A1128] min-h-[220px] flex flex-col justify-between">
                              {project.id === 'strata-cloud' && (
                                <div className="space-y-3 font-mono">
                                  <div className="flex items-center justify-between text-xs">
                                    <span className="text-slate-500">Global Cluster Latency</span>
                                    <span className="text-emerald-600 font-bold">24ms (P99)</span>
                                  </div>
                                  <div className="grid grid-cols-3 gap-2 text-[10px]">
                                    <div className="p-2 rounded-lg bg-slate-50 border border-slate-200">
                                      <span className="text-slate-500 block">Regions</span>
                                      <span className="text-[#0A1128] font-bold">12 Edge Nodes</span>
                                    </div>
                                    <div className="p-2 rounded-lg bg-slate-50 border border-slate-200">
                                      <span className="text-slate-500 block">Throughput</span>
                                      <span className="text-[#0A1128] font-bold">4.2M req/s</span>
                                    </div>
                                    <div className="p-2 rounded-lg bg-slate-50 border border-slate-200">
                                      <span className="text-slate-500 block">Uptime</span>
                                      <span className="text-emerald-600 font-bold">99.998%</span>
                                    </div>
                                  </div>
                                  <div className="h-10 flex items-end gap-1 pt-1">
                                    {[40, 55, 35, 70, 85, 95, 100].map((h, i) => (
                                      <div key={i} className="flex-1 bg-slate-100 rounded-t h-full flex items-end">
                                        <div className={`w-full rounded-t ${i === 6 ? 'bg-orange' : 'bg-blue-500'}`} style={{ height: `${h}%` }} />
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              )}

                              {project.id === 'aurora-goods' && (
                                <div className="space-y-3">
                                  <div className="flex items-center justify-between">
                                    <div>
                                      <span className="text-[10px] font-mono text-slate-500 uppercase font-semibold">Ceramic Chrono</span>
                                      <h5 className="text-sm font-bold text-[#0A1128]">Veda Limited Edition</h5>
                                    </div>
                                    <span className="text-base font-extrabold font-mono text-[#0A1128]">₹14,999</span>
                                  </div>
                                  <div className="p-3 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-between text-xs">
                                    <span className="text-slate-600 font-mono font-medium">Checkout Speed</span>
                                    <span className="text-orange font-mono font-bold">0.42s Instant Pay</span>
                                  </div>
                                  <div className="w-full py-2 rounded-lg bg-[#0A1128] text-white text-center text-xs font-bold font-mono">
                                    View Digital Flagship
                                  </div>
                                </div>
                              )}

                              {project.id === 'axon-ai' && (
                                <div className="space-y-2.5 font-mono text-[11px]">
                                  <div className="flex items-center justify-between text-slate-600 border-b border-slate-100 pb-1.5">
                                    <span className="font-bold text-slate-800">axon-engine --stream</span>
                                    <span className="text-blue-600 font-bold">140 tokens/s</span>
                                  </div>
                                  <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-700 space-y-1">
                                    <p className="text-orange font-bold">&gt; Context window loaded (128k)</p>
                                    <p className="text-emerald-600 font-bold">✓ Multi-modal embeddings ready</p>
                                    <p className="text-slate-500">Target inference completed in 38ms.</p>
                                  </div>
                                </div>
                              )}

                              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[10px] font-mono text-slate-500">
                                <span className="font-semibold text-slate-700">{project.tag}</span>
                                <span className="text-emerald-600 font-bold">100/100 Core Vitals</span>
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div className="w-60 rounded-3xl bg-white border-2 border-slate-300 shadow-2xl p-2.5 overflow-hidden mx-auto">
                            <div className="w-20 h-3 bg-slate-800 rounded-full mx-auto mb-2.5 flex items-center justify-end px-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                            </div>
                            <div className="p-3.5 rounded-2xl bg-slate-50 text-[#0A1128] space-y-3 min-h-[210px] flex flex-col justify-between font-mono">
                              <div>
                                <span className="text-[9px] text-slate-500 uppercase font-semibold">{project.category}</span>
                                <h5 className="text-xs font-bold font-sans mt-0.5 text-[#0A1128]">{project.title}</h5>
                              </div>
                              <div className="p-2 rounded-lg bg-white border border-slate-200 text-[10px] text-emerald-600 font-bold">
                                {project.tag} · Verified
                              </div>
                              <div className="text-[9px] text-slate-500 font-medium">
                                Mobile Responsive · PWA
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-slate-200 flex items-center justify-between text-xs font-mono text-slate-500">
                      <span>Showcase 0{index + 1} / 03</span>
                      <span className="text-emerald-600 font-bold">Verified Architecture</span>
                    </div>
                  </div>

                  {/* Right Column: Narrative & Results (6 cols) */}
                  <div className="lg:col-span-6 p-6 sm:p-10 space-y-6 flex flex-col justify-between bg-white">
                    <div className="space-y-5">
                      <div>
                        <span className="text-xs font-mono text-orange uppercase tracking-wider block mb-1 font-bold">
                          {project.category}
                        </span>
                        <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-[#0A1128] tracking-tight leading-tight">
                          {project.title}
                        </h3>
                      </div>

                      <div className="space-y-3">
                        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                          <span className="text-[10px] font-mono text-slate-500 uppercase block font-bold">
                            The Challenge
                          </span>
                          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                            {project.challenge}
                          </p>
                        </div>

                        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                          <span className="text-[10px] font-mono text-slate-500 uppercase block font-bold">
                            The Approach
                          </span>
                          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                            {project.approach}
                          </p>
                        </div>
                      </div>

                      {/* Outcome Highlight Box */}
                      <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 space-y-1">
                        <span className="text-[10px] font-mono text-emerald-700 uppercase font-bold flex items-center gap-1.5">
                          Verified Outcome
                        </span>
                        <p className="text-xs sm:text-sm font-semibold text-emerald-900 leading-relaxed font-sans">
                          {project.outcome}
                        </p>
                      </div>

                      {/* Deliverables Tags */}
                      <div className="flex flex-wrap gap-2 pt-1">
                        {project.deliverables.map((del, dIdx) => (
                          <span
                            key={dIdx}
                            className="px-2.5 py-1 text-xs font-mono font-medium rounded-lg bg-slate-100 border border-slate-200 text-slate-700"
                          >
                            {del}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                      <button
                        type="button"
                        onClick={() => setActiveModalProject(project)}
                        className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-orange hover:text-orange-dark transition-colors cursor-pointer group"
                      >
                        <span>Read 5-Part Architectural Blueprint</span>
                        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                      </button>

                      <span className="text-[11px] font-mono text-slate-500 hidden sm:inline font-semibold">
                        14-Day Sprint
                      </span>
                    </div>

                  </div>

                </div>
              </SpotlightCard>
            );
          })}
        </div>

      </div>

      {/* Blueprint Modal */}
      <AnimatePresence>
        {activeModalProject && (
          <div 
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
            role="dialog"
            aria-modal="true"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-9 border border-slate-200 shadow-2xl relative my-8 text-slate-800"
            >
              <button
                onClick={() => setActiveModalProject(null)}
                className="absolute top-6 right-6 p-2 rounded-xl text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition-colors cursor-pointer"
                aria-label="Close Case Study Details"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2.5 mb-3 text-xs font-mono text-slate-500 font-semibold">
                <span>{activeModalProject.label}</span>
                <span>/</span>
                <span className="text-orange">{activeModalProject.tag}</span>
              </div>

              <h3 className="text-2xl font-extrabold font-heading text-[#0A1128] tracking-tight mb-4">
                {activeModalProject.title}
              </h3>

              <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-2">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <h4 className="text-xs font-mono font-bold uppercase text-slate-700 mb-1">Challenge</h4>
                  <p className="text-sm text-slate-600 leading-relaxed font-sans">{activeModalProject.challenge}</p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <h4 className="text-xs font-mono font-bold uppercase text-slate-700 mb-1">Execution</h4>
                  <p className="text-sm text-slate-600 leading-relaxed font-sans">{activeModalProject.execution}</p>
                </div>

                <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200">
                  <h4 className="text-xs font-mono font-bold uppercase text-emerald-800 mb-1">Outcome</h4>
                  <p className="text-sm font-semibold text-emerald-950 leading-relaxed font-sans">{activeModalProject.outcome}</p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
