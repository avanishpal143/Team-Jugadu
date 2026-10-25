import React from 'react';
import { BrandLogo } from '../ui/BrandLogo';
import { siteConfig } from '../../data/siteConfig';
import { ArrowUpRight, Mail, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white pt-20 pb-12 border-t border-slate-800">
      <div className="max-w-content mx-auto px-5 sm:px-8 lg:px-12">
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-slate-800/80">
          
          {/* Brand & Purpose Column */}
          <div className="md:col-span-5 lg:col-span-5 space-y-4">
            <BrandLogo variant="light" showSubtitle size="large" />
            <p className="text-xl sm:text-2xl font-bold font-heading text-slate-100 pt-3 leading-snug">
              {siteConfig.tagline}
            </p>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              We help founders, startups, and product teams bridge the gap between initial concept and market-ready digital presence with clarity and high-speed execution.
            </p>
            
            <div className="pt-2 flex items-center gap-2 text-xs text-slate-400">
              <ShieldCheck className="w-4 h-4 text-orange" />
              <span>Operating under {siteConfig.legalEntity}</span>
            </div>
          </div>

          {/* Navigation Column */}
          <div className="md:col-span-3 lg:col-span-3 space-y-3">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-orange">
              Directory
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <a href="#approach" className="hover:text-orange transition-colors">Our Approach</a>
              </li>
              <li>
                <a href="#services" className="hover:text-orange transition-colors">Services by Outcome</a>
              </li>
              <li>
                <a href="#work" className="hover:text-orange transition-colors">Selected Work &amp; Proof</a>
              </li>
              <li>
                <a href="#sprint" className="hover:text-orange transition-colors">The Jugadu Sprint</a>
              </li>
              <li>
                <a href="#technologies" className="hover:text-orange transition-colors">Technology &amp; Stack</a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-orange transition-colors">Launch Pricing Plans</a>
              </li>
              <li>
                <a href="#journey" className="hover:text-orange transition-colors">Founder Journey</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-orange transition-colors">Frequently Asked Questions</a>
              </li>
            </ul>
          </div>

          {/* Contact & Direct Channel Column */}
          <div className="md:col-span-4 lg:col-span-4 space-y-4">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-orange">
              Direct Contact
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Have a product to launch or an existing website to revamp? Email our delivery team directly:
            </p>
            
            <div className="space-y-2">
              <a 
                href={`mailto:${siteConfig.contactEmail}`}
                className="inline-flex items-center gap-2.5 text-sm text-white hover:text-orange font-medium transition-colors bg-slate-900/80 px-4 py-2.5 rounded-xl border border-slate-700/80 hover:border-orange"
              >
                <Mail className="w-4 h-4 text-orange" />
                <span>{siteConfig.contactEmail}</span>
                <ArrowUpRight className="w-3.5 h-3.5 ml-auto text-slate-400" />
              </a>
            </div>

            <div className="pt-2">
              <a
                href={siteConfig.discoveryBookingUrl}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-xs sm:text-sm font-bold rounded-xl bg-orange text-white hover:bg-orange-hover transition-colors shadow-sm"
              >
                <span>{siteConfig.primaryCTA}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {currentYear} TeamJugadu. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="text-slate-500 font-mono">Professional Standards. Dependable Delivery.</span>
            <a href={siteConfig.parentCompanyUrl} target="_blank" rel="noopener noreferrer" className="hover:text-slate-300 transition-colors">
              Devlofox Technologies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
