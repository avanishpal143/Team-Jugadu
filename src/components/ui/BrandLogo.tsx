import React from 'react';

interface BrandLogoProps {
  variant?: 'dark' | 'light';
  className?: string;
  showSubtitle?: boolean;
  size?: 'normal' | 'large';
}

export const BrandLogo: React.FC<BrandLogoProps> = ({ 
  variant = 'dark', 
  className = '',
  showSubtitle = false,
  size = 'large'
}) => {
  const isLight = variant === 'light';
  const isLarge = size === 'large';

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Brand Icon Badge - Distinctive Studio Symbol */}
      <div className={`rounded-xl flex items-center justify-center font-extrabold font-heading shadow-sm transition-transform duration-200 group-hover:scale-105 ${
        isLarge ? 'w-10 h-10 sm:w-11 sm:h-11' : 'w-9 h-9'
      } ${
        isLight
          ? 'bg-slate-800/90 border border-slate-700 text-white'
          : 'bg-[#10182A] border border-slate-900 text-white shadow-subtle'
      }`}>
        <span className="text-white text-base sm:text-lg tracking-tighter">T</span>
        <span className="text-[#FF6B0B] text-base sm:text-lg tracking-tighter -ml-0.5">J</span>
      </div>

      {/* Brand Wordmark - Big, Bold, Premium & Legible */}
      <div className="flex flex-col justify-center">
        <div className={`flex items-center tracking-tight font-extrabold font-heading leading-none ${
          isLarge 
            ? 'text-2xl sm:text-[28px] lg:text-[30px]' 
            : 'text-xl sm:text-2xl'
        }`}>
          <span className={isLight ? "text-white" : "text-[#10182A]"}>
            TEAM
          </span>
          <span className="text-[#FF6B0B] ml-1">
            JUGADU
          </span>
          <span className="w-2 h-2 rounded-full bg-[#FF6B0B] ml-1.5 self-end mb-1"></span>
        </div>
        
        {/* Signature Orange Accent Line from Blueprint */}
        <div className="h-[3px] w-24 bg-gradient-to-r from-[#FF6B0B] via-[#FF6B0B] to-transparent mt-1.5 rounded-full"></div>

        {showSubtitle && (
          <span className={`text-[10.5px] font-mono tracking-widest uppercase font-semibold mt-1.5 ${
            isLight ? 'text-slate-400' : 'text-slate-500'
          }`}>
            Founder Studio Execution
          </span>
        )}
      </div>
    </div>
  );
};
