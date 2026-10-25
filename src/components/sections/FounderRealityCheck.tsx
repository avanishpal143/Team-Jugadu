import React from 'react';
import { GitFork, EyeOff, Navigation2, ClockAlert, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const FounderRealityCheck: React.FC = () => {
  const problems = [
    {
      code: "A",
      number: "01",
      title: "Too Many Moving Parts",
      description: "Different vendors, disconnected timelines and no single owner of the final outcome.",
      icon: GitFork,
      impact: "Fragmented accountability",
      color: "from-rose-50/60 to-white",
      borderColor: "hover:border-rose-300",
      accent: "text-rose-600 bg-rose-50 border-rose-200"
    },
    {
      code: "B",
      number: "02",
      title: "A Brand That Doesn't Reflect the Vision",
      description: "Your business has potential, but its online presence doesn't communicate it clearly.",
      icon: EyeOff,
      impact: "Lost founder credibility",
      color: "from-amber-50/60 to-white",
      borderColor: "hover:border-amber-300",
      accent: "text-amber-600 bg-amber-50 border-amber-200"
    },
    {
      code: "C",
      number: "03",
      title: "A Website Without a Clear Journey",
      description: "Visitors struggle to understand the offer, trust the business or take the next step.",
      icon: Navigation2,
      impact: "High bounce rate",
      color: "from-blue-50/60 to-white",
      borderColor: "hover:border-blue-300",
      accent: "text-blue-600 bg-blue-50 border-blue-200"
    },
    {
      code: "D",
      number: "04",
      title: "Launch Delays and Unclear Scope",
      description: "Missing content, changing requirements and poor coordination slow down progress.",
      icon: ClockAlert,
      impact: "Burned runway & momentum",
      color: "from-orange-pale/50 to-white",
      borderColor: "hover:border-orange-300",
      accent: "text-orange bg-orange-pale border-orange-border"
    }
  ];

  return (
    <section id="reality-check" className="py-20 sm:py-28 lg:py-32 bg-[#FFFFFF] border-b border-[#E3E8EF] relative overflow-hidden">
      <div className="max-w-content mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Editorial Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-14 sm:mb-18"
        >
          <div className="inline-flex items-center gap-2 mb-3.5">
            <span className="font-mono text-xs font-bold text-orange tracking-wider">02</span>
            <span className="text-slate-300 text-xs">/</span>
            <span className="text-xs font-semibold uppercase tracking-wider text-navy font-mono">
              Founder Reality Check
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-navy font-heading mb-5">
            Building a Startup Is Hard Enough. <br className="hidden md:inline" />
            <span className="text-slate-600 font-bold">Your Digital Execution Shouldn't Be.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            You've got a product to build, customers to understand and a business to grow. But turning an idea into a credible digital presence can quickly become a project of its own.
          </p>
        </motion.div>

        {/* 3D Animated 2x2 Problem Map */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 relative">
          {problems.map((problem, idx) => {
            const Icon = problem.icon;
            return (
              <motion.div
                key={problem.code}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6, scale: 1.015 }}
                className={`group relative bg-gradient-to-br ${problem.color} rounded-3xl p-8 sm:p-9 border border-slate-200/90 ${problem.borderColor} transition-all duration-300 shadow-[0_4px_20px_rgba(16,24,42,0.04)] hover:shadow-[0_20px_40px_-15px_rgba(16,24,42,0.1)] flex flex-col justify-between`}
              >
                {/* Thin orange top accent border with glow */}
                <div className="absolute top-0 left-0 right-0 h-[3.5px] bg-gradient-to-r from-orange to-orange-hover rounded-t-3xl group-hover:h-[4.5px] transition-all"></div>

                <div>
                  <div className="flex items-start justify-between mb-5">
                    <div className="flex items-center gap-2">
                      <span className={`font-mono text-xs font-bold px-3 py-1 rounded-full border ${problem.accent}`}>
                        PROBLEM {problem.code}
                      </span>
                      <span className="text-xs font-mono text-slate-400">
                        ({problem.number})
                      </span>
                    </div>

                    <motion.div 
                      whileHover={{ rotate: 12, scale: 1.1 }}
                      className="p-3 rounded-2xl bg-white border border-slate-200/80 text-navy group-hover:text-orange group-hover:border-orange-border transition-colors shadow-subtle"
                    >
                      <Icon className="w-5 h-5" />
                    </motion.div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold font-heading text-navy leading-[1.3] mb-3 group-hover:text-orange transition-colors">
                    {problem.title}
                  </h3>

                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                    {problem.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs text-slate-500 font-mono">
                  <span>Consequence</span>
                  <span className="text-rose-700 font-bold">{problem.impact}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Editorial Connecting Line & Closing Resolution with 3D Pop */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 sm:mt-16 p-7 sm:p-9 rounded-3xl bg-gradient-to-r from-orange-pale via-white to-orange-pale/50 border border-orange-border flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-md hover:shadow-lg transition-all"
        >
          <div className="space-y-1.5 max-w-2xl">
            <span className="text-xs font-mono font-bold tracking-wider uppercase text-orange flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-orange animate-pulse"></span>
              The Path Forward
            </span>
            <p className="text-lg sm:text-xl font-bold font-heading text-navy leading-snug">
              "You don't need more complexity. You need a clearer path from idea to execution."
            </p>
          </div>

          <motion.a
            href="#approach"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-bold rounded-xl bg-navy text-white hover:bg-navy-800 transition-colors whitespace-nowrap shadow-sm group cursor-pointer"
          >
            <span>See How We Fix This</span>
            <ArrowRight className="w-4 h-4 text-orange transition-transform group-hover:translate-x-1" />
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
};
