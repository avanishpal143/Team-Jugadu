import React, { useState } from 'react';
import { siteConfig } from '../../data/siteConfig';
import { ArrowRight, Mail, Calendar, Clock, CheckCircle2, MessageCircle, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { SpotlightCard } from '../ui/SpotlightCard';

export const DiscoveryCTA: React.FC = () => {
  const [stage, setStage] = useState<'Idea' | 'MVP' | 'Launched' | 'Growing'>('Idea');
  const [need, setNeed] = useState<string>('Website');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [budget, setBudget] = useState('₹60k - ₹1L');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch {
      // ignore
    }

    const subject = encodeURIComponent(`Discovery Sprint Request: ${name} (${company || 'New Startup'})`);
    const body = encodeURIComponent(
      `Hi TeamJugadu,\n\nI want to schedule a 30-min discovery sprint.\n\nFounder: ${name}\nWork Email: ${email}\nCompany: ${company}\nCurrent Stage: ${stage}\nNeed: ${need}\nBudget Range: ${budget}\n\nPlease share your calendar invite for our scoping call.\n\nThanks!`
    );
    window.open(`mailto:${siteConfig.contactEmail}?subject=${subject}&body=${body}`, '_blank');
  };

  const whatsappMessage = encodeURIComponent(
    `Hi TeamJugadu! I'm interested in discussing a 14-day launch sprint for my startup. Stage: ${stage}, Scope: ${need}.`
  );
  const whatsappUrl = `https://wa.me/917982436893?text=${whatsappMessage}`;

  return (
    <section id="contact" className="py-24 sm:py-32 lg:py-36 bg-[#F8FAFC] border-b border-slate-200/80 relative overflow-hidden">
      <div className="max-w-content mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        
        <SpotlightCard theme="orange" className="p-8 sm:p-14 lg:p-16 border border-orange-200/80 shadow-[0_20px_70px_rgba(255,107,11,0.12)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            {/* Left Column (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-mono font-medium tracking-widest uppercase text-orange bg-orange-50 px-3 py-1 rounded-full border border-orange-200 inline-block">
                Primary Conversion Point
              </span>

              <h2 className="text-4xl sm:text-5xl font-extrabold font-heading text-[#0A1128] tracking-[-0.03em] leading-tight">
                Tell us what <br />
                <span className="text-gradient-orange">you&apos;re building.</span>
              </h2>

              <p className="text-base text-slate-600 leading-relaxed">
                Whether you&apos;re validating an early concept, preparing for a funding round, or revamping an existing digital asset, let&apos;s map out your exact 14-day sprint scope.
              </p>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                <Clock className="w-4 h-4 text-orange flex-shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  <strong className="text-[#0A1128] font-medium">Focused 30-Minute Discovery Call:</strong> We analyze your business goals, target audience, and architecture requirements. Zero aggressive sales pitches.
                </p>
              </div>

              {/* Instant WhatsApp */}
              <div className="p-4 rounded-xl bg-emerald-50/50 border border-emerald-200 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-600 flex items-center justify-center">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-medium text-[#0A1128] block">Need Quick Answers?</span>
                    <span className="text-[11px] text-slate-500 font-mono">Chat directly with lead architect</span>
                  </div>
                </div>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-mono font-semibold transition-colors shadow-sm"
                >
                  WhatsApp
                </a>
              </div>

              {/* Direct Email */}
              <div className="pt-1 text-xs text-slate-500 font-mono flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-slate-400" />
                <span>Direct Lead: </span>
                <a href={`mailto:${siteConfig.contactEmail}`} className="text-[#0A1128] font-semibold hover:underline">
                  {siteConfig.contactEmail}
                </a>
              </div>
            </div>

            {/* Right Column: Intake Form (7 cols) */}
            <div className="lg:col-span-7 bg-white p-7 sm:p-9 rounded-2xl border border-slate-200 shadow-[0_10px_35px_rgba(0,35,75,0.06)]">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold font-heading text-[#0A1128]">
                    Discovery Request Sent!
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
                    Thank you, <strong className="text-[#0A1128]">{name}</strong>. Our lead architect will review your {stage} requirements and respond within 4 business hours.
                  </p>
                  <div className="pt-2">
                    <a
                      href={siteConfig.discoveryBookingUrl}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0A1128] text-white hover:bg-slate-800 text-xs font-semibold font-mono shadow-md"
                    >
                      <Calendar className="w-3.5 h-3.5" />
                      <span>Pick a Calendar Slot Immediately</span>
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100 text-xs font-mono">
                    <span className="text-slate-600 font-medium">Sprint Intake</span>
                    <span className="text-slate-400">Confidential</span>
                  </div>

                  {/* Stage Selector */}
                  <div>
                    <label className="text-xs font-mono text-slate-600 block mb-1.5 font-medium">
                      Current Startup Stage:
                    </label>
                    <div className="grid grid-cols-4 gap-1.5">
                      {(['Idea', 'MVP', 'Launched', 'Growing'] as const).map(s => (
                        <button
                          type="button"
                          key={s}
                          onClick={() => setStage(s)}
                          className={`py-2 px-2.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                            stage === s 
                              ? 'bg-[#0A1128] text-white font-semibold shadow-sm' 
                              : 'bg-slate-50 border border-slate-200 text-slate-600 hover:text-[#0A1128] hover:bg-slate-100'
                          }`}
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Primary Requirement */}
                  <div>
                    <label className="text-xs font-mono text-slate-600 block mb-1.5 font-medium">
                      What are you building?
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
                      {['Website', 'Branding', 'E-commerce', 'MVP Scope'].map(n => (
                        <button
                          type="button"
                          key={n}
                          onClick={() => setNeed(n)}
                          className={`py-2 px-2.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                            need === n 
                              ? 'bg-[#0A1128] text-white font-semibold shadow-sm' 
                              : 'bg-slate-50 border border-slate-200 text-slate-600 hover:text-[#0A1128] hover:bg-slate-100'
                          }`}
                        >
                          {n}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Inputs */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                    <div>
                      <label className="text-xs font-mono text-slate-600 block mb-1 font-medium">Your Name *</label>
                      <input 
                        type="text" 
                        required 
                        value={name} 
                        onChange={e => setName(e.target.value)} 
                        placeholder="e.g. Rahul Sharma"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-200 text-[#0A1128] placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:border-orange focus:bg-white transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-mono text-slate-600 block mb-1 font-medium">Work Email *</label>
                      <input 
                        type="email" 
                        required 
                        value={email} 
                        onChange={e => setEmail(e.target.value)} 
                        placeholder="founder@startup.com"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-200 text-[#0A1128] placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:border-orange focus:bg-white transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs font-mono text-slate-600 block mb-1 font-medium">Company / Startup</label>
                      <input 
                        type="text" 
                        value={company} 
                        onChange={e => setCompany(e.target.value)} 
                        placeholder="e.g. Nexus Tech"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-200 text-[#0A1128] placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:border-orange focus:bg-white transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-mono text-slate-600 block mb-1 font-medium">Estimated Budget</label>
                      <select 
                        value={budget} 
                        onChange={e => setBudget(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-200 text-[#0A1128] text-xs sm:text-sm focus:outline-none focus:border-orange focus:bg-white transition-colors"
                      >
                        <option value="₹35k - ₹50k">₹35,000 – ₹50,000 (Idea Launch)</option>
                        <option value="₹60k - ₹1L">₹60,000 – ₹1,00,000 (Growth Launch)</option>
                        <option value="₹1.25L - ₹2.5L+">₹1,25,000 – ₹2,50,000+ (Scale / MVP)</option>
                        <option value="Custom Enterprise">Custom Enterprise</option>
                      </select>
                    </div>
                  </div>

                  {/* Submit */}
                  <div className="pt-2">
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      className="w-full py-3.5 rounded-xl bg-gradient-to-r from-orange to-orange-hover text-white font-semibold font-mono text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer shadow-orange-soft hover:shadow-orange-glow transition-all"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Book Free 30-Min Discovery Sprint</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </motion.button>
                    <p className="text-[11px] text-center text-slate-500 font-mono mt-2">
                      Zero commitment. 100% confidential.
                    </p>
                  </div>
                </form>
              )}
            </div>

          </div>
        </SpotlightCard>

      </div>
    </section>
  );
};
