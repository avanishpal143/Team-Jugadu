import React from 'react';

interface SectionHeadingProps {
  number?: string;
  badge?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center' | 'split';
  className?: string;
  theme?: 'light' | 'dark';
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  number,
  badge,
  title,
  description,
  align = 'left',
  className = '',
  theme = 'light'
}) => {
  const isDark = theme === 'dark';

  if (align === 'split') {
    return (
      <div className={`grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end mb-12 sm:mb-16 ${className}`}>
        <div className="lg:col-span-7">
          {(number || badge) && (
            <div className="flex items-center gap-2 mb-3">
              {number && (
                <span className="font-mono text-xs font-bold text-orange tracking-wider">
                  {number}
                </span>
              )}
              {number && badge && <span className="text-ink-muted text-xs">/</span>}
              {badge && (
                <span className={`text-xs font-semibold uppercase tracking-wider ${isDark ? 'text-orange-pale' : 'text-navy'}`}>
                  {badge}
                </span>
              )}
            </div>
          )}
          <h2 className={`text-3xl sm:text-4xl lg:text-[44px] font-extrabold tracking-[-0.025em] leading-[1.15] font-heading ${
            isDark ? 'text-white' : 'text-navy'
          }`}>
            {title}
          </h2>
        </div>
        {description && (
          <div className="lg:col-span-5">
            <p className={`text-base sm:text-lg leading-relaxed font-normal ${
              isDark ? 'text-slate-300' : 'text-ink-secondary'
            }`}>
              {description}
            </p>
          </div>
        )}
      </div>
    );
  }

  const alignClasses = {
    left: 'text-left max-w-reading',
    center: 'text-center mx-auto max-w-reading',
    split: ''
  };

  return (
    <div className={`mb-12 sm:mb-16 ${alignClasses[align]} ${className}`}>
      {(number || badge) && (
        <div className={`inline-flex items-center gap-2 mb-3 ${align === 'center' ? 'justify-center' : ''}`}>
          {number && (
            <span className="font-mono text-xs font-bold text-orange tracking-wider">
              {number}
            </span>
          )}
          {number && badge && <span className="text-ink-muted text-xs">/</span>}
          {badge && (
            <span className={`text-xs font-semibold uppercase tracking-wider ${isDark ? 'text-orange-border' : 'text-navy'}`}>
              {badge}
            </span>
          )}
        </div>
      )}
      <h2 className={`text-3xl sm:text-4xl lg:text-[44px] font-extrabold tracking-[-0.025em] leading-[1.15] font-heading mb-4 ${
        isDark ? 'text-white' : 'text-navy'
      }`}>
        {title}
      </h2>
      {description && (
        <p className={`text-base sm:text-lg leading-relaxed font-normal ${
          isDark ? 'text-slate-300' : 'text-ink-secondary'
        }`}>
          {description}
        </p>
      )}
    </div>
  );
};
