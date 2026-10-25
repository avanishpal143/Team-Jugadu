import { ShieldCheck, Code, Palette, Rocket } from 'lucide-react';

export const TeamLeadership: React.FC = () => {
  return (
    <section id="team" className="py-20 sm:py-28 lg:py-32 bg-[#FAFBFD] border-b border-[#E3E8EF]">
      <div className="max-w-content mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Section Header with generous line-height */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 mb-3.5">
            <span className="font-mono text-xs font-bold text-orange tracking-wider">11</span>
            <span className="text-slate-300 text-xs">/</span>
            <span className="text-xs font-semibold uppercase tracking-wider text-navy font-mono">
              Team &amp; Leadership
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-navy font-heading mb-4">
            Built by People Who Care <br className="hidden sm:inline" />
            <span className="text-orange">About the Details.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            We bring together practical experience in website development, visual design and digital execution to help businesses move from ideas to well-built digital experiences.
          </p>
        </div>

        {/* Studio Discipline & Working Model (Honest Presentation) */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-card">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-10">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-orange">
                Studio Philosophy
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-navy leading-[1.25]">
                Direct builder access. Zero middle-management friction.
              </h3>
              <p className="text-base text-slate-600 leading-relaxed">
                When you partner with TeamJugadu, you don't speak to junior coordinators or commission-based sales reps. You collaborate directly with senior design leads and frontend engineers who write the code, shape the narrative, and deploy your production infrastructure.
              </p>
            </div>

            <div className="lg:col-span-4 p-6 sm:p-7 rounded-2xl bg-[#FAFBFD] border border-orange-border/90 space-y-2.5 shadow-subtle">
              <div className="flex items-center gap-2 text-xs font-mono text-orange font-bold uppercase">
                <ShieldCheck className="w-4 h-4" />
                <span>Verified Entity</span>
              </div>
              <p className="text-sm font-bold text-navy leading-snug">
                Operations Powered by Devlofox Technologies
              </p>
              <p className="text-xs text-slate-500 leading-relaxed">
                Full legal accountability, commercial stability, and engineering infrastructure.
              </p>
            </div>
          </div>

          {/* 3 Core Delivery Disciplines */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-slate-100">
            <div className="p-6 rounded-2xl bg-[#FAFBFD] border border-slate-200/80 space-y-3.5 shadow-subtle">
              <div className="w-11 h-11 rounded-xl bg-orange-pale text-orange border border-orange-border flex items-center justify-center">
                <Palette className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold font-heading text-navy leading-snug">
                Design &amp; Brand Systems
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Visual identity, typography hierarchy, Figma design tokens, and user experience mapped directly to conversion.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAFBFD] border border-slate-200/80 space-y-3.5 shadow-subtle">
              <div className="w-11 h-11 rounded-xl bg-orange-pale text-orange border border-orange-border flex items-center justify-center">
                <Code className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold font-heading text-navy leading-snug">
                Modern Web Engineering
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Clean React, TypeScript, responsive mobile styling, sub-second speeds, and accessible semantic architecture.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAFBFD] border border-slate-200/80 space-y-3.5 shadow-subtle">
              <div className="w-11 h-11 rounded-xl bg-orange-pale text-orange border border-orange-border flex items-center justify-center">
                <Rocket className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold font-heading text-navy leading-snug">
                Launch Execution &amp; SEO
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Production DNS migration, search engine indexability, Google analytics events, and documented handover.
              </p>
            </div>
          </div>

          {/* Studio Honesty Note */}
          <div className="mt-8 pt-6 border-t border-slate-100 text-xs text-slate-500 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 font-mono">
            <span>Ownership: Direct Founder-to-Builder Engagement</span>
            <span className="text-emerald-700 font-bold">100% In-House Delivery</span>
          </div>
        </div>

      </div>
    </section>
  );
};
