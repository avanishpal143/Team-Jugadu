import React from 'react';
import { motion } from 'framer-motion';

export const TeamJugaduApproach: React.FC = () => {
  const principles = [
    {
      num: "01",
      title: "Clarity Before Code",
      description: "Understand the business, audience and priorities before defining the build.",
      takeaway: "No assumptions, no wasted engineering hours.",
      bgGradient: "from-orange-50/40 via-white to-white",
      badgeColor: "bg-orange-pale text-orange border-orange-border"
    },
    {
      num: "02",
      title: "Design With Purpose",
      description: "Build a visual and content experience that communicates value clearly.",
      takeaway: "Every element serves founder conversion.",
      bgGradient: "from-blue-50/40 via-white to-white",
      badgeColor: "bg-blue-50 text-blue-600 border-blue-200"
    },
    {
      num: "03",
      title: "Build for the Right Stage",
      description: "Choose the technology and scope that fit the product's real needs.",
      takeaway: "Pragmatic modern stack, zero over-engineering.",
      bgGradient: "from-emerald-50/40 via-white to-white",
      badgeColor: "bg-emerald-50 text-emerald-600 border-emerald-200"
    },
    {
      num: "04",
      title: "Launch With Confidence",
      description: "QA, agreed handover and a clear path for the next stage.",
      takeaway: "Full source code, no vendor lock-in.",
      bgGradient: "from-purple-50/40 via-white to-white",
      badgeColor: "bg-purple-50 text-purple-600 border-purple-200"
    }
  ];

  return (
    <section id="approach" className="py-20 sm:py-28 lg:py-32 bg-[#FAFBFD] border-b border-[#E3E8EF] relative overflow-hidden">
      <div className="max-w-content mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Split Editorial Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end mb-16 sm:mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8"
          >
            <div className="flex items-center gap-2 mb-3.5">
              <span className="font-mono text-xs font-bold text-orange tracking-wider">03</span>
              <span className="text-slate-300 text-xs">/</span>
              <span className="text-xs font-semibold uppercase tracking-wider text-navy font-mono">
                The TeamJugadu Approach
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-navy font-heading">
              One Clear Direction. <br className="hidden md:inline" />
              <span className="text-orange">Thoughtful Execution.</span>
            </h2>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-4"
          >
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              We bring strategy, design and development together to help founders move forward with clarity—thinking deeply before touching code.
            </p>
          </motion.div>
        </div>

        {/* 3D Numbered Principle Framework Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          
          {principles.map((item, idx) => (
            <motion.div 
              key={item.num}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`relative z-10 bg-gradient-to-b ${item.bgGradient} rounded-3xl p-7 sm:p-8 border border-slate-200/90 hover:border-orange-border hover:shadow-[0_20px_45px_-12px_rgba(255,107,11,0.18)] transition-all duration-300 flex flex-col justify-between group shadow-subtle`}
            >
              <div>
                {/* Large Distinctive Numeral Marker with 3D Pop */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
                  <motion.span 
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    className={`w-12 h-12 rounded-2xl ${item.badgeColor} border flex items-center justify-center font-mono font-extrabold text-lg shadow-sm`}
                  >
                    {item.num}
                  </motion.span>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-bold">
                    Principle
                  </span>
                </div>

                <h3 className="text-xl font-bold font-heading text-navy leading-[1.3] mb-3 group-hover:text-orange transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-mono text-navy font-semibold">
                <span className="w-2 h-2 rounded-full bg-orange flex-shrink-0 animate-pulse"></span>
                <span>{item.takeaway}</span>
              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};
