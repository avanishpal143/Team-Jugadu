import React, { useState } from 'react';
import { technologyGroups, mernStackNote } from '../../data/technologies';
import { Code2, Cpu, Sparkles, Layers } from 'lucide-react';
import { motion } from 'framer-motion';
import { SpotlightCard, type CardTheme } from '../ui/SpotlightCard';
import { DevlofoxIconBox } from '../ui/DevlofoxIconBox';

export const TechnologyCapabilities: React.FC = () => {
  const [selectedTag, setSelectedTag] = useState<string>('All');
  const allTags = ['All', 'Core', 'Architecture', 'E-commerce', 'Database'];

  const groupThemes: Record<string, { theme: CardTheme; variant: 'orange' | 'cyan' | 'purple'; icon: typeof Code2 }> = {
    'modern-web': { theme: 'cyan', variant: 'cyan', icon: Code2 },
    'full-stack': { theme: 'orange', variant: 'orange', icon: Cpu },
    'design-systems': { theme: 'purple', variant: 'purple', icon: Sparkles },
  };

  return (
    <section id="technologies" className="py-24 sm:py-32 lg:py-36 bg-white border-b border-slate-200/80 relative overflow-hidden">
      <div className="max-w-content mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-12 sm:mb-16 space-y-3"
        >
          <span className="text-xs font-mono font-bold tracking-widest uppercase text-purple-700 bg-purple-50 px-3.5 py-1.5 rounded-full border border-purple-200 inline-block shadow-sm">
            Production-Ready Architecture
          </span>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0A1128] font-heading tracking-[-0.03em] leading-[1.1]">
            The right stack for the <br />
            <span className="text-gradient-orange">right product stage.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-normal">
            We select battle-tested technologies based on extreme velocity, developer ergonomics, and zero template lock-in.
          </p>
        </motion.div>

        {/* Minimalist Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-10">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
                selectedTag === tag 
                  ? 'bg-[#0A1128] text-white shadow-md' 
                  : 'bg-white border border-slate-200 text-slate-600 hover:text-[#0A1128] hover:bg-slate-50'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* 3 Devlofox-Style 3D Category Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {technologyGroups.map((group) => {
            const config = groupThemes[group.id] || { theme: 'default', variant: 'orange', icon: Code2 };
            const Icon = config.icon;

            return (
              <SpotlightCard
                key={group.id}
                theme={config.theme}
                className="p-8 sm:p-9 flex flex-col justify-between group shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <DevlofoxIconBox 
                      icon={Icon} 
                      variant={config.variant} 
                      size="md" 
                    />

                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-700 shadow-sm">
                      {group.badge}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-extrabold font-heading text-[#0A1128] tracking-tight mb-2">
                    {group.category}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-sans">
                    {group.description}
                  </p>

                  {/* Technology Items */}
                  <div className="space-y-2.5 pt-1">
                    {group.technologies
                      .filter(t => selectedTag === 'All' || t.tag.toLowerCase().includes(selectedTag.toLowerCase()))
                      .map((tech) => (
                      <div
                        key={tech.name}
                        className="p-3.5 rounded-xl bg-white border border-slate-200/90 hover:border-orange-300 hover:shadow-sm transition-all flex items-center justify-between gap-3 group/item"
                      >
                        <div>
                          <span className="text-xs font-mono font-bold text-[#0A1128] group-hover/item:text-orange transition-colors">
                            {tech.name}
                          </span>
                          <p className="text-[11px] text-slate-500 mt-0.5 font-sans">
                            {tech.description}
                          </p>
                        </div>

                        <span className="px-2 py-0.5 rounded-md bg-slate-100 text-[10px] font-mono text-slate-600 whitespace-nowrap border border-slate-200 font-semibold">
                          {tech.tag}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-500 font-semibold">
                  <span>Engineered In-House</span>
                  <span className="text-emerald-700 font-bold">Production Ready</span>
                </div>
              </SpotlightCard>
            );
          })}
        </div>

        {/* MERN Architecture Standard Note Card */}
        <SpotlightCard theme="emerald" className="p-6 sm:p-8 shadow-md">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-2xl bg-emerald-100 text-emerald-800 border border-emerald-300">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-mono text-emerald-800 font-extrabold uppercase tracking-wider block">
                  {mernStackNote.formula}
                </span>
                <p className="text-sm sm:text-base font-bold text-[#0A1128] mt-0.5 font-sans">
                  {mernStackNote.title}: {mernStackNote.description}
                </p>
              </div>
            </div>
            <span className="text-xs font-mono text-emerald-900 bg-white px-4 py-2 rounded-xl border border-emerald-200 self-start sm:self-auto whitespace-nowrap font-bold shadow-sm">
              Full-Stack Guarantee
            </span>
          </div>
        </SpotlightCard>

      </div>
    </section>
  );
};
