import React, { useRef, useState } from 'react';

export type CardTheme = 'default' | 'orange' | 'cyan' | 'purple' | 'emerald' | 'subtle';

interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
  theme?: CardTheme;
  interactive?: boolean;
}

export const SpotlightCard: React.FC<SpotlightCardProps> = ({
  children,
  className = '',
  spotlightColor,
  theme = 'default',
  interactive = true,
  ...props
}) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter = () => setOpacity(1);
  const handleMouseLeave = () => setOpacity(0);

  // Devlofox Light Theme Cards
  const themeStyles: Record<CardTheme, { bg: string; border: string; glow: string; defaultSpotlight: string }> = {
    default: {
      bg: 'bg-white',
      border: 'border-slate-200/80 hover:border-slate-300',
      glow: 'shadow-[0_10px_35px_rgba(0,35,75,0.06)] hover:shadow-[0_20px_50px_rgba(0,35,75,0.12)]',
      defaultSpotlight: 'rgba(0, 35, 75, 0.03)',
    },
    orange: {
      bg: 'bg-gradient-to-br from-white via-white to-orange-50/70',
      border: 'border-orange-200 hover:border-orange-400',
      glow: 'shadow-[0_10px_35px_rgba(255,107,11,0.08)] hover:shadow-[0_20px_50px_rgba(255,107,11,0.18)]',
      defaultSpotlight: 'rgba(255, 107, 11, 0.08)',
    },
    cyan: {
      bg: 'bg-gradient-to-br from-white via-white to-blue-50/70',
      border: 'border-blue-200 hover:border-blue-400',
      glow: 'shadow-[0_10px_35px_rgba(0,153,250,0.08)] hover:shadow-[0_20px_50px_rgba(0,153,250,0.18)]',
      defaultSpotlight: 'rgba(0, 153, 250, 0.08)',
    },
    purple: {
      bg: 'bg-gradient-to-br from-white via-white to-purple-50/70',
      border: 'border-purple-200 hover:border-purple-400',
      glow: 'shadow-[0_10px_35px_rgba(147,51,234,0.08)] hover:shadow-[0_20px_50px_rgba(147,51,234,0.18)]',
      defaultSpotlight: 'rgba(147, 51, 234, 0.08)',
    },
    emerald: {
      bg: 'bg-gradient-to-br from-white via-white to-emerald-50/70',
      border: 'border-emerald-200 hover:border-emerald-400',
      glow: 'shadow-[0_10px_35px_rgba(16,185,129,0.08)] hover:shadow-[0_20px_50px_rgba(16,185,129,0.18)]',
      defaultSpotlight: 'rgba(16, 185, 129, 0.08)',
    },
    subtle: {
      bg: 'bg-slate-50/90',
      border: 'border-slate-200/80 hover:border-slate-300',
      glow: 'shadow-sm hover:shadow-md',
      defaultSpotlight: 'rgba(0, 35, 75, 0.03)',
    },
  };

  const activeTheme = themeStyles[theme];
  const activeSpotlight = spotlightColor || activeTheme.defaultSpotlight;

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`group relative overflow-hidden rounded-3xl border transition-all duration-300 ${
        interactive ? 'hover:-translate-y-2' : ''
      } ${activeTheme.bg} ${activeTheme.border} ${activeTheme.glow} ${className}`}
      {...props}
    >
      {/* Top Glass Specular Line */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent z-10" />

      {/* Dynamic Cursor Spotlight Sheen */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300 rounded-3xl z-0"
        style={{
          opacity,
          background: `radial-gradient(500px circle at ${position.x}px ${position.y}px, ${activeSpotlight}, transparent 50%)`,
        }}
      />

      {/* Card Content */}
      <div className="relative z-10 h-full w-full">
        {children}
      </div>
    </div>
  );
};
