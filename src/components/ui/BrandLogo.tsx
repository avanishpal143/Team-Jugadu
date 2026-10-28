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
  const isLarge = size === 'large';
  const isLight = variant === 'light';

  return (
    <div className={`inline-flex items-center gap-3 select-none group cursor-pointer ${className}`}>
      {/* Brand Icon Badge - Distinctive High-Tech Studio Symbol */}
      <div className={`relative rounded-xl flex items-center justify-center font-extrabold font-heading shadow-md transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_4px_20px_rgba(255,107,11,0.4)] ${
        isLarge ? 'w-10 h-10 sm:w-11 sm:h-11' : 'w-9 h-9'
      } bg-gradient-to-br from-[#0A1128] via-[#1E293B] to-[#0F172A] border border-black/10`}>
        {/* Subtle glow border */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-orange to-orange-hover opacity-20 group-hover:opacity-70 transition-opacity blur-[2px] -z-10"></div>
        <span className="text-white text-base sm:text-lg tracking-tighter font-extrabold">T</span>
        <span className="text-[#FF6B0B] text-base sm:text-lg tracking-tighter -ml-0.5 font-extrabold">J</span>
      </div>

      {/* Brand Wordmark - Big, Bold, Premium & Legible */}
      <div className="flex flex-col justify-center">
        <div className={`flex items-center tracking-tight font-extrabold font-heading leading-none ${
          isLarge 
            ? 'text-2xl sm:text-[27px] lg:text-[29px]' 
            : 'text-xl sm:text-2xl'
        }`}>
          <span className={isLight ? "text-white font-extrabold" : "text-[#0A1128] font-extrabold"}>
            TEAM
          </span>
          <span className="text-[#FF6B0B] ml-1.5 font-extrabold drop-shadow-[0_2px_10px_rgba(255,107,11,0.25)]">
            JUGADU
          </span>
          <span className="w-2 h-2 rounded-full bg-[#FF6B0B] ml-1.5 self-end mb-1 shadow-[0_0_8px_#FF6B0B]"></span>
        </div>
        
        {/* Signature Orange Accent Line with Gradient Glow */}
        <div className="h-[2.5px] w-full max-w-[110px] bg-gradient-to-r from-[#FF6B0B] via-[#FF8533] to-transparent mt-1.5 rounded-full"></div>

        {showSubtitle && (
          <span className="text-[10px] font-mono tracking-widest uppercase font-semibold mt-1 text-slate-500">
            Founder Studio Execution
          </span>
        )}
      </div>
    </div>
  );
};
