import React from 'react';

const technologies = [
  { name: 'React 19', tag: 'Core UI' },
  { name: 'Next.js 15', tag: 'SSR / Edge' },
  { name: 'TypeScript', tag: 'Type Safety' },
  { name: 'Tailwind CSS', tag: 'Design System' },
  { name: 'Supabase', tag: 'Postgres & Auth' },
  { name: 'Framer Motion', tag: '60fps Micro-interactions' },
  { name: 'Node.js', tag: 'API Engine' },
  { name: 'GraphQL', tag: 'Data Layer' },
  { name: 'Figma', tag: 'Design Tokens' },
  { name: 'Vercel', tag: 'Edge Deployment' },
  { name: 'Cloudflare', tag: 'Global CDN' },
  { name: 'Docker', tag: 'Containerization' },
  { name: 'Stripe', tag: 'Payments' },
  { name: 'Python AI', tag: 'LLM Agents' },
];

export const TechMarquee: React.FC = () => {
  return (
    <div className="w-full py-3 sm:py-3.5 border-t border-slate-200/80 bg-white/80 backdrop-blur-md relative overflow-hidden">
      {/* Edge Blur Masks for Seamless Infinite Fade */}
      <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-[#F8FAFC] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-[#F8FAFC] to-transparent z-10 pointer-events-none" />

      {/* Marquee Content */}
      <div className="flex select-none gap-5 sm:gap-6 animate-marquee whitespace-nowrap items-center">
        {technologies.concat(technologies).map((tech, idx) => (
          <div
            key={idx}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-slate-50/90 border border-slate-200 hover:border-orange-300 hover:bg-white hover:shadow-sm transition-all duration-200 group"
          >
            <span className="w-2 h-2 rounded-full bg-orange group-hover:scale-125 transition-transform" />
            <span className="text-xs sm:text-sm font-bold text-slate-800 group-hover:text-orange transition-colors">
              {tech.name}
            </span>
            <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 bg-white border border-slate-200/80 px-2 py-0.5 rounded-md">
              {tech.tag}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
