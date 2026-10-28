import React from 'react';
import { BrandLogo } from '../ui/BrandLogo';
import { siteConfig } from '../../data/siteConfig';
import { ArrowUpRight, Mail, ShieldCheck, Sparkles, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 text-[#0A1128] pt-20 pb-12 border-t border-slate-200 relative overflow-hidden">
      {/* Background subtle glow */}
      <div 
        aria-hidden="true" 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-orange-500/5 rounded-full blur-[140px] pointer-events-none -z-10" 
      />

      <div className="max-w-content mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-slate-200">
          
          {/* Brand & Purpose Column */}
          <div className="md:col-span-5 lg:col-span-5 space-y-4">
            <BrandLogo variant="dark" showSubtitle size="large" />
            <p className="text-xl sm:text-2xl font-bold font-heading text-[#0A1128] pt-3 leading-snug">
              {siteConfig.tagline}
            </p>
            <p className="text-sm text-slate-600 max-w-sm leading-relaxed">
              We engineer high-performance startup websites, investor-ready MVPs, and cohesive brand systems in focused 14-day sprints.
            </p>
            
            <div className="pt-2 flex items-center gap-2 text-xs text-slate-500 font-mono">
              <ShieldCheck className="w-4 h-4 text-orange" />
              <span>Commercial Infrastructure Powered by Devlofox</span>
            </div>
          </div>

          {/* Navigation Column */}
          <div className="md:col-span-3 lg:col-span-3 space-y-3">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-orange flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" /> Studio Directory
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-600 font-medium">
              <li>
                <a href="#reality-check" className="hover:text-orange transition-colors">Founder Reality Check</a>
              </li>
              <li>
                <a href="#approach" className="hover:text-orange transition-colors">Our Anti-Agency Approach</a>
              </li>
              <li>
                <a href="#services" className="hover:text-orange transition-colors">Services by Outcome</a>
              </li>
              <li>
                <a href="#work" className="hover:text-orange transition-colors">Selected Work &amp; Proof</a>
              </li>
              <li>
                <a href="#sprint" className="hover:text-orange transition-colors">The 14-Day Sprint</a>
              </li>
              <li>
                <a href="#technologies" className="hover:text-orange transition-colors">Technology Matrix</a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-orange transition-colors">Launch Pricing Plans</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-orange transition-colors">Frequently Asked Questions</a>
              </li>
            </ul>
          </div>

          {/* Contact & Direct Channel Column */}
          <div className="md:col-span-4 lg:col-span-4 space-y-4">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-600 flex items-center gap-1.5">
              Direct Senior Builder Access
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Have an MVP to build or an established website to revamp? Connect directly with our core engineering team:
            </p>
            
            <div className="space-y-2.5">
              <a 
                href={`mailto:${siteConfig.contactEmail}`}
                className="inline-flex items-center gap-2.5 text-sm text-[#0A1128] hover:text-orange font-medium transition-colors bg-white px-4 py-2.5 rounded-xl border border-slate-200 hover:border-orange shadow-sm w-full"
              >
                <Mail className="w-4 h-4 text-orange" />
                <span className="truncate">{siteConfig.contactEmail}</span>
                <ArrowUpRight className="w-3.5 h-3.5 ml-auto text-slate-400" />
              </a>

              <a 
                href="https://wa.me/917982436893"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 text-sm text-emerald-700 hover:text-emerald-800 font-medium transition-colors bg-emerald-50 px-4 py-2.5 rounded-xl border border-emerald-200 hover:border-emerald-500 shadow-sm w-full"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>WhatsApp Instant Inquiry</span>
                <ArrowUpRight className="w-3.5 h-3.5 ml-auto text-emerald-600" />
              </a>
            </div>

            <div className="pt-2">
              <motion.a
                href={siteConfig.discoveryBookingUrl}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-xs sm:text-sm font-bold font-mono rounded-xl bg-gradient-to-r from-orange to-orange-hover text-white shadow-orange-soft"
              >
                <span>{siteConfig.primaryCTA}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </motion.a>
            </div>
          </div>

        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4 font-mono">
          <p>© {currentYear} TeamJugadu. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="text-slate-500">Professional Standards · Dependable Delivery</span>
            <a href={siteConfig.parentCompanyUrl} target="_blank" rel="noopener noreferrer" className="hover:text-orange transition-colors">
              Devlofox Technologies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
