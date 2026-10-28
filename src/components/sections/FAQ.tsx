import React, { useState } from 'react';
import { faqsData } from '../../data/faqs';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>("cost");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "Pricing", "Delivery", "Scope", "Technical"];

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const filteredFaqs = selectedCategory === "All"
    ? faqsData
    : faqsData.filter(f => f.category.toLowerCase().includes(selectedCategory.toLowerCase()));

  return (
    <section id="faq" className="py-24 sm:py-32 lg:py-36 bg-white border-b border-slate-200/80 relative overflow-hidden">
      <div className="max-w-content mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-12 sm:mb-16 space-y-3"
        >
          <span className="text-xs font-mono font-medium tracking-widest uppercase text-slate-500 bg-slate-100 px-3 py-1 rounded-full border border-slate-200 inline-block">
            Frequently Asked Questions
          </span>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0A1128] font-heading tracking-[-0.03em] leading-[1.1]">
            Direct answers to <br />
            <span className="text-gradient-orange">crucial founder questions.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-normal">
            Straightforward answers regarding sprint costs, velocity, IP ownership, and technical handover.
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-10 max-w-4xl">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                selectedCategory === cat 
                  ? 'bg-[#0A1128] text-white font-semibold shadow-sm' 
                  : 'bg-slate-100 border border-slate-200 text-slate-600 hover:text-[#0A1128] hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Minimalist Accordion */}
        <div className="max-w-4xl space-y-3">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen 
                    ? 'bg-white border-orange shadow-[0_10px_35px_rgba(255,107,11,0.08)]' 
                    : 'bg-white border-slate-200 hover:border-slate-300 shadow-[0_4px_16px_rgba(0,35,75,0.03)] hover:shadow-md'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(faq.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                  className="w-full text-left p-6 sm:p-7 flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                >
                  <div className="flex items-center gap-3.5 sm:gap-4">
                    <span className="font-mono text-xs font-bold text-orange px-2.5 py-1 rounded bg-orange-50 border border-orange-200">
                      {faq.number}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold font-heading text-[#0A1128] tracking-tight">
                      {faq.question}
                    </h3>
                  </div>

                  <div className={`p-2 rounded-full border transition-all flex-shrink-0 ${
                    isOpen 
                      ? 'bg-gradient-to-r from-orange to-orange-dark text-white border-orange shadow-orange-soft' 
                      : 'border-slate-200 text-slate-500 bg-slate-50'
                  }`}>
                    {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${faq.id}`}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25 }}
                      className="px-6 pb-6 sm:px-7 sm:pb-7 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100"
                    >
                      <p>{faq.answer}</p>
                      <div className="mt-3 text-xs font-mono text-slate-400">
                        Category: {faq.category}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
