import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Sparkles, PhoneCall } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { BrandLogo } from '../ui/BrandLogo';
import { siteConfig } from '../../data/siteConfig';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['reality-check', 'approach', 'services', 'work', 'sprint', 'technologies', 'pricing', 'faq'];
      const scrollPosition = window.scrollY + 180;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    setActiveSection(targetId);
    setMobileMenuOpen(false);

    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const navOffset = 90;
      const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - navOffset,
        behavior: 'smooth'
      });
      window.history.pushState(null, '', href);
    } else if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-3 sm:px-6 pt-3 sm:pt-4 pointer-events-none">
      <header
        className={`pointer-events-auto max-w-wide mx-auto transition-all duration-500 rounded-2xl ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-2xl border border-slate-200/80 shadow-[0_10px_35px_rgba(0,35,75,0.08)] py-2.5 px-4 sm:px-6'
            : 'bg-white/70 backdrop-blur-xl border border-slate-200/60 shadow-sm py-3 px-4 sm:px-6'
        }`}
      >
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <motion.a 
            href="#" 
            onClick={(e) => handleLinkClick(e, '#')}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            className="focus:outline-none rounded-xl py-1 cursor-pointer"
            aria-label="TeamJugadu Homepage"
          >
            <BrandLogo variant="dark" size="large" />
          </motion.a>

          {/* Desktop Navigation Links */}
          <nav 
            className="hidden xl:flex items-center gap-1 bg-slate-100/90 backdrop-blur-md border border-slate-200 p-1 rounded-full" 
            aria-label="Main Navigation"
          >
            {siteConfig.navLinks.map((link) => {
              const targetId = link.href.replace('#', '');
              const isActive = activeSection === targetId;

              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`relative px-4 py-1.5 rounded-full text-xs font-semibold transition-colors duration-200 cursor-pointer ${
                    isActive ? 'text-[#0A1128]' : 'text-slate-600 hover:text-[#0A1128]'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      className="absolute inset-0 bg-white rounded-full shadow-sm border border-slate-200/60 -z-10"
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-1.5">
                    {link.label}
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-orange"></span>
                    )}
                  </span>
                </a>
              );
            })}
          </nav>

          {/* Compact links for medium desktop */}
          <nav className="hidden lg:flex xl:hidden items-center gap-4 text-xs font-semibold text-slate-600" aria-label="Main Navigation">
            {['services', 'work', 'sprint', 'pricing', 'faq'].map((id) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={(e) => handleLinkClick(e, `#${id}`)}
                className={`capitalize transition-colors ${
                  activeSection === id ? 'text-orange font-bold' : 'hover:text-[#0A1128]'
                }`}
              >
                {id}
              </a>
            ))}
          </nav>

          {/* Desktop Minimal Primary CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <motion.a
              href={siteConfig.discoveryBookingUrl}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold rounded-xl text-white bg-gradient-to-r from-orange to-orange-dark hover:brightness-105 transition-all shadow-md shadow-orange/20 cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>{siteConfig.primaryCTA}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </motion.a>
          </div>

          {/* Mobile Controls */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href={siteConfig.discoveryBookingUrl}
              className="inline-flex sm:hidden items-center justify-center px-3 py-1.5 rounded-lg bg-orange text-white text-xs font-semibold gap-1"
              aria-label="Book Call"
            >
              <PhoneCall className="w-3 h-3" />
              <span>Book</span>
            </a>
            
            <motion.button
              type="button"
              whileTap={{ scale: 0.95 }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl border border-slate-200 focus:outline-none transition-all cursor-pointer"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </motion.button>
          </div>

        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="pointer-events-auto fixed inset-x-3 sm:inset-x-6 top-20 bg-white/95 backdrop-blur-2xl border border-slate-200 shadow-2xl rounded-2xl p-6 max-h-[85vh] overflow-y-auto z-50 text-slate-800"
            role="dialog"
            aria-modal="true"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                <span className="text-[11px] font-mono text-slate-500 uppercase font-semibold">
                  Studio Directory
                </span>
                <button 
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1 rounded-md text-slate-500 hover:text-slate-800"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="flex flex-col space-y-1">
                {siteConfig.navLinks.map((link) => {
                  const targetId = link.href.replace('#', '');
                  const isActive = activeSection === targetId;

                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      className={`py-2.5 px-3 rounded-lg text-sm transition-all flex items-center justify-between ${
                        isActive 
                          ? 'bg-orange-50 text-orange font-bold' 
                          : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                      }`}
                    >
                      <span>{link.label}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="pt-5 border-t border-slate-200 space-y-3 mt-4">
              <a
                href={siteConfig.discoveryBookingUrl}
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-semibold rounded-xl text-white bg-gradient-to-r from-orange to-orange-dark shadow-md shadow-orange/30"
              >
                <span>{siteConfig.primaryCTA}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
