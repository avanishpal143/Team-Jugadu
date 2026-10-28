import React, { useState, useEffect } from 'react';
import { MessageCircle, ArrowUp, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteConfig } from '../../data/siteConfig';

export const FloatingActionBar: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', checkScroll, { passive: true });
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappMessage = encodeURIComponent(
    "Hi TeamJugadu! I'm interested in discussing a 14-day launch sprint for my startup website/MVP."
  );
  const whatsappUrl = `https://wa.me/917982436893?text=${whatsappMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 pointer-events-none">
      
      {/* Floating Action Buttons */}
      <div className="pointer-events-auto flex items-center gap-2.5">
        
        {/* WhatsApp Fast Direct Connect */}
        <motion.a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.06, y: -2 }}
          whileTap={{ scale: 0.94 }}
          className="relative px-4 py-2.5 rounded-full bg-white hover:bg-[#25D366] text-[#0A1128] hover:text-white border border-slate-200 shadow-[0_8px_30px_rgba(0,35,75,0.1)] flex items-center gap-2 text-xs font-mono font-bold transition-all duration-300 group cursor-pointer"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <MessageCircle className="w-4 h-4 text-emerald-500 group-hover:text-white transition-colors" />
          <span className="hidden sm:inline">WhatsApp Lead</span>
        </motion.a>

        {/* Quick Discovery CTA Pill */}
        <motion.a
          href={siteConfig.discoveryBookingUrl}
          whileHover={{ scale: 1.06, y: -2 }}
          whileTap={{ scale: 0.94 }}
          className="px-4 py-2.5 rounded-full bg-gradient-to-r from-orange to-orange-hover text-white border-t border-white/30 shadow-orange-soft flex items-center gap-2 text-xs font-mono font-bold transition-all cursor-pointer"
        >
          <Sparkles className="w-3.5 h-3.5 animate-pulse" />
          <span>Book 30-Min Sprint</span>
        </motion.a>

        {/* Scroll To Top Button */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              onClick={scrollToTop}
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.7 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 rounded-full bg-white hover:bg-slate-50 text-[#0A1128] border border-slate-200 shadow-[0_8px_30px_rgba(0,35,75,0.1)] transition-colors cursor-pointer"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </motion.button>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
};
