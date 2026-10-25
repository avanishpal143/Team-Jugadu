import React, { useState } from 'react';
import { faqsData } from '../../data/faqs';
import { Plus, Minus } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>("cost"); // First open by default

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 sm:py-28 lg:py-32 bg-[#FAFBFD] border-b border-[#E3E8EF]">
      <div className="max-w-content mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Section Header with generous line-height */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 mb-3.5">
            <span className="font-mono text-xs font-bold text-orange tracking-wider">13</span>
            <span className="text-slate-300 text-xs">/</span>
            <span className="text-xs font-semibold uppercase tracking-wider text-navy font-mono">
              Frequently Asked Questions
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-navy font-heading mb-4">
            Answers to Common <br className="hidden sm:inline" />
            <span className="text-orange">Founder Questions.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Straightforward answers regarding our website costs, delivery timelines, intellectual property ownership, and technical processes.
          </p>
        </div>

        {/* Accessible Accordion Component */}
        <div className="max-w-4xl space-y-4">
          {faqsData.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen 
                    ? 'bg-white border-orange shadow-card' 
                    : 'bg-white border-slate-200/90 hover:border-slate-300 shadow-subtle'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(faq.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                  className="w-full text-left p-6 sm:p-7 flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange cursor-pointer"
                >
                  <div className="flex items-center gap-3.5 sm:gap-4">
                    <span className="font-mono text-xs font-bold text-orange px-2.5 py-1 rounded-full bg-orange-pale border border-orange-border">
                      {faq.number}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold font-heading text-navy leading-snug">
                      {faq.question}
                    </h3>
                  </div>

                  <div className={`p-2 rounded-full border transition-colors flex-shrink-0 ${
                    isOpen 
                      ? 'bg-orange border-orange text-white' 
                      : 'border-slate-200 text-slate-500 bg-slate-50'
                  }`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${faq.id}`}
                    role="region"
                    className="px-6 pb-6 sm:px-7 sm:pb-7 pt-2 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100"
                  >
                    <p>{faq.answer}</p>
                    <div className="mt-4 flex items-center gap-2 text-xs font-mono text-slate-400">
                      <span>Category: {faq.category}</span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
