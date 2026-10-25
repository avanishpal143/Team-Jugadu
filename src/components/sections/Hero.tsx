import { ArrowRight, ArrowUpRight, CheckCircle2, Sparkles } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 sm:pt-40 lg:pt-44 pb-20 sm:pb-28 lg:pb-32 overflow-hidden bg-gradient-to-b from-[#FAFBFD] via-[#FFFFFF] to-[#FAFBFD] border-b border-[#E3E8EF]">
      {/* Background Subtle Atmosphere */}
      <div 
        aria-hidden="true" 
        className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-orange-pale/60 to-transparent rounded-full blur-3xl pointer-events-none -z-10" 
      />
      <div 
        aria-hidden="true" 
        className="absolute top-20 right-0 w-[400px] h-[400px] bg-navy/5 rounded-full blur-3xl pointer-events-none -z-10" 
      />

      <div className="max-w-wide mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Editorial Copy Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            
            {/* Eyebrow Label */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white border border-[#E3E8EF] shadow-subtle">
              <span className="w-2 h-2 rounded-full bg-orange animate-pulse"></span>
              <span className="text-[12px] font-bold tracking-wider uppercase text-navy font-mono">
                TeamJugadu · Founder Execution Studio
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-[68px] font-extrabold text-navy font-heading">
              Big Ideas Deserve <br className="hidden sm:inline" />
              <span className="relative inline-block text-navy mt-1">
                Better Execution
                {/* Thin orange underline marker tying back to logo */}
                <span className="absolute -bottom-1.5 left-0 w-full h-[4px] bg-gradient-to-r from-orange to-orange-hover rounded-full"></span>
              </span>
              <span className="text-orange">.</span>
            </h1>

            {/* Supporting Hero Line */}
            <p className="text-lg sm:text-xl text-ink-secondary leading-relaxed max-w-2xl font-normal pt-1">
              {siteConfig.heroSupport}
            </p>

            {/* Hero CTAs */}
            <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={siteConfig.discoveryBookingUrl}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 text-sm sm:text-base font-bold rounded-xl bg-[#FF6B0B] text-white hover:bg-[#E95800] transition-all duration-200 shadow-md hover:shadow-orange-soft active:scale-[0.98] group"
              >
                <span>Book a Free Discovery Call</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </a>

              <a
                href="#work"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 text-sm sm:text-base font-bold rounded-xl bg-white border border-slate-200 text-navy hover:border-navy hover:bg-slate-50 transition-all duration-200 shadow-subtle group"
              >
                <span>Explore Our Work</span>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-navy transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>

            {/* Process & Trust Badges */}
            <div className="pt-6 border-t border-slate-200/80 flex flex-wrap items-center gap-y-2.5 gap-x-6 text-xs text-slate-600 font-medium">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-orange" />
                <span>30-minute scoping session</span>
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-orange" />
                <span>Zero template lock-in</span>
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-orange" />
                <span>Full source code ownership</span>
              </span>
            </div>

          </div>

          {/* Right Bespoke Visual Column (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-[480px] lg:max-w-none">
              
              {/* Back Layer: Wireframe Specimen & Blueprint */}
              <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-card hover:shadow-card-hover transition-all duration-300">
                
                {/* Header Stage Indicator: IDEA -> DESIGN -> LAUNCH */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-300"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-300"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-300"></span>
                    <span className="text-[11px] font-mono text-slate-400 ml-2">production-sprint.spec</span>
                  </div>
                  
                  {/* Progression tracker */}
                  <div className="flex items-center gap-1.5 text-[10px] font-mono font-bold tracking-wider uppercase">
                    <span className="text-slate-400">Idea</span>
                    <span className="text-slate-300">→</span>
                    <span className="text-slate-400">Design</span>
                    <span className="text-slate-300">→</span>
                    <span className="text-orange bg-orange-pale px-2.5 py-0.5 rounded-full border border-orange-border">Launch</span>
                  </div>
                </div>

                {/* Main Specimen Preview: Clean UI mockup */}
                <div className="space-y-4">
                  {/* Mock Navbar */}
                  <div className="flex items-center justify-between bg-slate-50 p-2.5 rounded-lg border border-slate-200/80">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded bg-navy flex items-center justify-center text-[9px] font-extrabold text-white">TJ</div>
                      <div className="w-16 h-2 rounded bg-slate-300"></div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-1.5 rounded bg-slate-200 hidden sm:block"></div>
                      <div className="w-10 h-1.5 rounded bg-slate-200 hidden sm:block"></div>
                      <div className="w-14 h-5 rounded bg-orange text-[9px] text-white flex items-center justify-center font-bold px-2">Launch</div>
                    </div>
                  </div>

                  {/* Mock Hero Block with Editorial Focus */}
                  <div className="bg-navy rounded-xl p-5 text-white relative overflow-hidden shadow-sm">
                    <div className="absolute top-0 right-0 w-28 h-28 bg-orange/20 rounded-full blur-xl"></div>
                    <div className="flex items-center gap-1.5 text-[10px] font-mono text-orange mb-2 font-bold">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>MVP REVENUE VALIDATION</span>
                    </div>
                    <p className="text-base sm:text-lg font-bold font-heading leading-snug mb-3">
                      Precision-built digital products that earn trust from day one.
                    </p>
                    <div className="flex items-center gap-2">
                      <div className="px-3 py-1 rounded bg-orange text-[10px] font-bold flex items-center justify-center text-white">
                        Live Preview
                      </div>
                      <div className="px-2.5 py-1 rounded border border-slate-700 text-[10px] font-mono text-slate-300 flex items-center justify-center">
                        99.8% Speed
                      </div>
                    </div>
                  </div>

                  {/* Two Sub-panels: Brand specimen & Mobile interface */}
                  <div className="grid grid-cols-2 gap-3 pt-1">
                    
                    {/* Brand Identity Specimen */}
                    <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/80">
                      <span className="text-[10px] font-mono font-bold text-slate-500 uppercase block mb-2">
                        Brand Identity
                      </span>
                      <div className="flex items-center gap-1.5 mb-2.5">
                        <div className="w-5 h-5 rounded bg-[#10182A] flex items-center justify-center text-[10px] font-extrabold text-white">
                          Aa
                        </div>
                        <div className="w-5 h-5 rounded bg-[#FF6B0B] flex items-center justify-center text-[10px] font-extrabold text-white">
                          #
                        </div>
                        <div className="w-5 h-5 rounded bg-[#FAFBFD] border border-slate-300"></div>
                      </div>
                      <p className="text-[11px] font-heading font-bold text-navy leading-tight">
                        Plus Jakarta Sans · Inter
                      </p>
                    </div>

                    {/* Responsive Mobile Interface Specimen */}
                    <div className="p-3.5 rounded-xl border border-orange-border/90 bg-orange-pale/40">
                      <span className="text-[10px] font-mono font-bold text-orange uppercase block mb-1.5">
                        Core Vitals
                      </span>
                      <div className="flex items-baseline gap-1">
                        <span className="text-2xl font-extrabold font-heading text-navy">100</span>
                        <span className="text-xs font-mono text-emerald-600 font-bold">/100</span>
                      </div>
                      <p className="text-[11px] text-slate-600 leading-tight mt-0.5">
                        Lighthouse Performance
                      </p>
                    </div>

                  </div>
                </div>

                {/* Overlaid Floating Studio Tag */}
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                  <span>Architecture: React + TS</span>
                  <span className="text-navy font-bold">Zero Template Debt</span>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
