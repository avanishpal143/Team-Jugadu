import React from 'react';
import { siteConfig } from '../../data/siteConfig';
import { ArrowRight, Mail, Calendar, Clock, Sparkles } from 'lucide-react';

export const DiscoveryCTA: React.FC = () => {
  return (
    <section id="contact" className="py-20 sm:py-28 lg:py-32 bg-[#FFFFFF] border-b border-[#E3E8EF]">
      <div className="max-w-content mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Primary Conversion Card (Deep Navy Editorial Card with Orange Accents) */}
        <div className="relative rounded-3xl bg-navy text-white p-8 sm:p-14 lg:p-16 overflow-hidden shadow-2xl border border-slate-800">
          
          {/* Subtle Graphic Element: Idea taking shape into finished digital experience */}
          <div 
            aria-hidden="true" 
            className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-br from-orange/30 via-orange/10 to-transparent rounded-full blur-3xl pointer-events-none" 
          />
          <div 
            aria-hidden="true" 
            className="absolute -bottom-20 -left-20 w-80 h-80 bg-navy-800/60 rounded-full blur-2xl pointer-events-none" 
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Copy & Conversion Actions (7 cols) */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-7">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-slate-700 text-orange font-mono text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Primary Conversion Point</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white mb-3">
                Tell Us What <br className="hidden sm:inline" />
                <span className="text-orange">You're Building.</span>
              </h2>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl">
                Whether you're validating an idea, preparing for launch or improving an existing business, let's understand what you need and define the right next step.
              </p>

              <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-700/80 flex items-start gap-3.5 text-xs sm:text-sm text-slate-300">
                <Clock className="w-5 h-5 text-orange flex-shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  <strong className="text-white font-bold">Focused 30-Minute Discovery Call:</strong> We discuss your business goals, target audience, technical requirements, and possible scope. No sales pressure.
                </p>
              </div>

              {/* Conversion Buttons (Strictly NO contact form) */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href={siteConfig.discoveryBookingUrl}
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-4 text-sm sm:text-base font-bold rounded-xl bg-[#FF6B0B] text-white hover:bg-[#E95800] transition-all duration-200 shadow-lg hover:shadow-orange-strong group"
                >
                  <span>Book Your Free Discovery Call</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </a>

                <a
                  href={`mailto:${siteConfig.contactEmail}?subject=Project%20Inquiry%20-%20TeamJugadu`}
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-4 text-sm sm:text-base font-semibold rounded-xl bg-slate-900 border border-slate-700 text-slate-200 hover:text-white hover:border-slate-500 transition-colors"
                >
                  <Mail className="w-4 h-4 text-orange" />
                  <span>Email TeamJugadu</span>
                </a>
              </div>

              {/* Direct email display */}
              <div className="pt-2 text-xs text-slate-400 font-mono flex flex-wrap items-center gap-x-4 gap-y-1">
                <span>Verified Direct Channel:</span>
                <a href={`mailto:${siteConfig.contactEmail}`} className="text-orange hover:underline font-bold">
                  {siteConfig.contactEmail}
                </a>
                <span>·</span>
                <a href={`mailto:${siteConfig.secondaryEmail}`} className="text-slate-300 hover:underline">
                  {siteConfig.secondaryEmail}
                </a>
              </div>

            </div>

            {/* Right Bespoke Specimen: Consultation Structure (5 cols) */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl bg-slate-900/95 border border-slate-700/90 p-6 sm:p-8 space-y-4 shadow-xl">
                <div className="flex items-center justify-between pb-3.5 border-b border-slate-800">
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                    <Calendar className="w-4 h-4 text-orange" />
                    <span>Discovery Agenda</span>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/80 px-2.5 py-0.5 rounded-full border border-emerald-800 font-bold">
                    Free / 30 Minutes
                  </span>
                </div>

                <div className="space-y-3 text-xs text-slate-300">
                  <div className="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/60 flex items-start gap-3">
                    <span className="font-mono text-orange font-bold text-sm">01</span>
                    <div>
                      <p className="font-bold text-white text-xs sm:text-sm">Understand Founder Goal</p>
                      <p className="text-[11px] text-slate-400 mt-0.5 leading-relaxed">What is the immediate milestone: early validation, demo pitch, or revenue storefront?</p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/60 flex items-start gap-3">
                    <span className="font-mono text-orange font-bold text-sm">02</span>
                    <div>
                      <p className="font-bold text-white text-xs sm:text-sm">Identify Key Friction</p>
                      <p className="text-[11px] text-slate-400 mt-0.5 leading-relaxed">Where is the current website or brand falling short in communicating credibility?</p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/60 flex items-start gap-3">
                    <span className="font-mono text-orange font-bold text-sm">03</span>
                    <div>
                      <p className="font-bold text-white text-xs sm:text-sm">Scope &amp; Budget Fit</p>
                      <p className="text-[11px] text-slate-400 mt-0.5 leading-relaxed">Align requirements with our defined milestone packages and delivery timeline.</p>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
                  <span>Founder Call Lead: Senior Architect</span>
                  <span className="text-orange font-bold">No Sales Handoff</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
