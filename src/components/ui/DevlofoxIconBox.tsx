import React from 'react';
import type { LucideIcon } from 'lucide-react';

interface DevlofoxIconBoxProps {
  icon: LucideIcon;
  variant?: 'orange' | 'cyan' | 'purple' | 'emerald';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const DevlofoxIconBox: React.FC<DevlofoxIconBoxProps> = ({
  icon: Icon,
  variant = 'orange',
  className = '',
  size = 'md',
}) => {
  const sizeClasses = {
    sm: 'w-10 h-10 rounded-xl',
    md: 'w-14 h-14 rounded-2xl',
    lg: 'w-16 h-16 rounded-2xl',
  };

  const iconSizes = {
    sm: 'w-5 h-5',
    md: 'w-6 h-6',
    lg: 'w-7 h-7',
  };

  const variantStyles = {
    orange: {
      gradient: 'from-[#FF6B0B] to-[#E04800]',
      shadow: 'shadow-[0_8px_25px_rgba(255,107,11,0.45)]',
      glow: 'bg-[#FF6B0B]',
    },
    cyan: {
      gradient: 'from-[#00E5FF] to-[#0099FA]',
      shadow: 'shadow-[0_8px_25px_rgba(0,229,255,0.45)]',
      glow: 'bg-[#00E5FF]',
    },
    purple: {
      gradient: 'from-[#A855F7] to-[#7C3AED]',
      shadow: 'shadow-[0_8px_25px_rgba(168,85,247,0.45)]',
      glow: 'bg-[#A855F7]',
    },
    emerald: {
      gradient: 'from-[#10B981] to-[#059669]',
      shadow: 'shadow-[0_8px_25px_rgba(16,185,129,0.45)]',
      glow: 'bg-[#10B981]',
    },
  };

  const v = variantStyles[variant];

  return (
    <div className={`relative inline-block ${className}`}>
      {/* 3D Animated Glow Blob behind the icon */}
      <div 
        className={`absolute inset-0 rounded-full blur-xl opacity-60 animate-pulse-glow ${v.glow} pointer-events-none`} 
      />

      {/* 3D Embossed Icon Container */}
      <div 
        className={`relative z-10 flex items-center justify-center bg-gradient-to-br ${v.gradient} ${sizeClasses[size]} ${v.shadow} border border-white/25 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6`}
      >
        {/* Specular Top Chamfer */}
        <div className="absolute inset-x-0 top-0 h-[2px] bg-white/40 rounded-t-xl pointer-events-none" />
        <Icon className={`${iconSizes[size]} text-white stroke-[2.2] drop-shadow-sm`} />
      </div>
    </div>
  );
};
