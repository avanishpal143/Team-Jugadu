import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Sparkles, PhoneCall } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { BrandLogo } from '../ui/BrandLogo';
import { siteConfig } from '../../data/siteConfig';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [clickedSection, setClickedSection] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // ScrollSpy: identify currently visible section
      const sections = ['reality-check', 'approach', 'services', 'work', 'sprint', 'technologies', 'pricing', 'journey', 'faq'];
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
    setClickedSection(targetId);
    setActiveSection(targetId);
    setMobileMenuOpen(false);

    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const navOffset = 95; // Account for floating island navbar
      const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - navOffset,
        behavior: 'smooth'
      });
      window.history.pushState(null, '', href);
    } else if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    setTimeout(() => setClickedSection(null), 600);
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-3 sm:px-6 pt-3 sm:pt-4 pointer-events-none">
      <header
        className={`pointer-events-auto max-w-wide mx-auto transition-all duration-500 rounded-2xl ${
          isScrolled
            ? 'bg-white/85 backdrop-blur-2xl border border-white/80 shadow-[0_16px_40px_-8px_rgba(16,24,42,0.14),inset_0_1px_1px_rgba(255,255,255,0.9)] py-2.5 sm:py-3 px-4 sm:px-6'
            : 'bg-white/75 backdrop-blur-xl border border-slate-200/70 shadow-[0_10px_30px_-6px_rgba(16,24,42,0.08),inset_0_1px_1px_rgba(255,255,255,0.85)] py-3 sm:py-3.5 px-4 sm:px-6'
        }`}
      >
        <div className="flex items-center justify-between">
          
          {/* Brand Logo with Tactile Click Effect */}
          <motion.a 
            href="#" 
            onClick={(e) => handleLinkClick(e, '#')}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="focus:outline-none focus-visible:ring-2 focus-visible:ring-orange rounded-xl py-1 cursor-pointer"
            aria-label="TeamJugadu Homepage"
          >
            <BrandLogo variant="dark" size="large" />
          </motion.a>

          {/* Desktop Navigation Links with Animated Pill Indicator */}
          <nav 
            className="hidden xl:flex items-center gap-1 bg-slate-900/[0.04] backdrop-blur-md border border-slate-200/80 p-1.5 rounded-full shadow-[inset_0_1px_2px_rgba(0,0,0,0.04)]" 
            aria-label="Main Navigation"
          >
            {siteConfig.navLinks.map((link) => {
              const targetId = link.href.replace('#', '');
              const isActive = activeSection === targetId;
              const isJustClicked = clickedSection === targetId;

              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`relative px-4 py-1.5 rounded-full text-[13px] font-semibold transition-colors duration-200 cursor-pointer ${
                    isActive ? 'text-navy' : 'text-slate-600 hover:text-navy'
                  }`}
                >
                  {/* Sliding animated active background pill */}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      className="absolute inset-0 bg-white rounded-full shadow-[0_2px_10px_rgba(16,24,42,0.1)] border border-slate-200/60 -z-10"
                    />
                  )}

                  {/* Micro Ripple Pulse on Click */}
                  {isJustClicked && (
                    <motion.span
                      initial={{ scale: 0.8, opacity: 0.8 }}
                      animate={{ scale: 1.5, opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      className="absolute inset-0 rounded-full bg-orange/20 -z-10"
                    />
                  )}

                  <span className="relative z-10 flex items-center gap-1.5">
                    {link.label}
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-orange animate-pulse"></span>
                    )}
                  </span>
                </a>
              );
            })}
          </nav>

          {/* Compact links for medium desktop (lg to xl) */}
          <nav className="hidden lg:flex xl:hidden items-center gap-4 text-xs font-bold text-slate-600" aria-label="Main Navigation">
            {['services', 'work', 'sprint', 'pricing', 'faq'].map((id) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={(e) => handleLinkClick(e, `#${id}`)}
                className={`capitalize transition-colors ${
                  activeSection === id ? 'text-orange font-extrabold' : 'hover:text-orange'
                }`}
              >
                {id}
              </a>
            ))}
          </nav>

          {/* Desktop Glass Primary CTA with 3D Pop Effect */}
          <div className="hidden lg:flex items-center gap-3">
            <motion.a
              href={siteConfig.discoveryBookingUrl}
              whileHover={{ scale: 1.04, y: -1 }}
              whileTap={{ scale: 0.96 }}
              className="relative inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-bold rounded-xl text-white bg-gradient-to-r from-[#FF6B0B] via-[#FF751F] to-[#E95800] border-t border-white/35 shadow-[0_4px_16px_rgba(255,107,11,0.35)] hover:shadow-[0_8px_24px_rgba(255,107,11,0.5)] transition-all duration-200 group overflow-hidden cursor-pointer"
            >
              {/* Shimmer light sweep */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none"></div>

              <Sparkles className="w-3.5 h-3.5 text-white animate-pulse" />
              <span>{siteConfig.primaryCTA}</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
            </motion.a>
          </div>

          {/* Mobile Controls */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href={siteConfig.discoveryBookingUrl}
              className="inline-flex sm:hidden items-center justify-center px-3 py-2 rounded-xl bg-gradient-to-r from-orange to-orange-hover text-white text-xs font-bold gap-1 shadow-sm border-t border-white/30"
              aria-label="Book Call"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Book</span>
            </a>
            
            <motion.button
              type="button"
              whileTap={{ scale: 0.9 }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 text-navy hover:text-orange bg-slate-100/80 hover:bg-slate-200/80 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange transition-all backdrop-blur-sm cursor-pointer"
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </motion.button>
          </div>

        </div>
      </header>

      {/* Mobile Frosted Glass Drawer with Spring Animation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -15, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.96 }}
            transition={{ type: 'spring', stiffness: 350, damping: 25 }}
            className="pointer-events-auto fixed inset-x-3 sm:inset-x-6 top-20 bg-white/95 backdrop-blur-2xl border border-white/80 shadow-[0_25px_60px_rgba(16,24,42,0.22)] rounded-3xl p-6 sm:p-7 max-h-[85vh] overflow-y-auto z-50"
            role="dialog"
            aria-modal="true"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200/80">
                <span className="text-[11px] font-mono font-bold tracking-wider text-orange uppercase flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-orange animate-pulse"></span>
                  Studio Directory
                </span>
                <button 
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-navy hover:bg-slate-100 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex flex-col space-y-1">
                {siteConfig.navLinks.map((link) => {
                  const targetId = link.href.replace('#', '');
                  const isActive = activeSection === targetId;

                  return (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      whileTap={{ scale: 0.98 }}
                      className={`py-3 px-4 rounded-xl text-base font-bold transition-all flex items-center justify-between ${
                        isActive 
                          ? 'bg-orange-pale text-orange shadow-subtle border border-orange-border/80' 
                          : 'text-navy hover:text-orange hover:bg-slate-100/70'
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        {link.label}
                        {isActive && <span className="w-1.5 h-1.5 rounded-full bg-orange"></span>}
                      </span>
                      <ArrowRight className={`w-4 h-4 ${isActive ? 'text-orange' : 'text-slate-400'}`} />
                    </motion.a>
                  );
                })}
              </div>
            </div>

            <div className="pt-6 border-t border-slate-200/80 space-y-3.5 mt-4">
              <motion.a
                href={siteConfig.discoveryBookingUrl}
                whileTap={{ scale: 0.97 }}
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold rounded-xl text-white bg-gradient-to-r from-orange to-orange-hover shadow-[0_8px_24px_rgba(255,107,11,0.35)] border-t border-white/30 transition-all"
              >
                <Sparkles className="w-4 h-4" />
                <span>{siteConfig.primaryCTA}</span>
                <ArrowRight className="w-4 h-4" />
              </motion.a>
              
              <p className="text-center text-xs text-slate-500 font-mono">
                Direct: <a href={`mailto:${siteConfig.contactEmail}`} className="text-navy font-bold underline">{siteConfig.contactEmail}</a>
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
