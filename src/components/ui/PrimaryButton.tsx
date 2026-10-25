import React from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  external?: boolean;
  icon?: 'arrow' | 'up-right' | 'none';
  children: React.ReactNode;
}

export const PrimaryButton: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  href,
  external,
  icon = 'arrow',
  children,
  className = '',
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 select-none group";
  
  const sizeStyles = {
    sm: "px-4 py-2 text-xs gap-1.5",
    md: "px-5 py-2.5 text-sm gap-2",
    lg: "px-7 py-3.5 text-base gap-2.5",
  };

  const variantStyles = {
    primary: "bg-[#FF6B0B] text-white hover:bg-[#E95800] shadow-sm hover:shadow-orange-soft active:scale-[0.99]",
    secondary: "bg-[#10182A] text-white hover:bg-[#17233B] shadow-sm active:scale-[0.99]",
    outline: "border border-[#E3E8EF] bg-white text-[#172033] hover:border-[#10182A] hover:bg-[#FAFBFD]",
    ghost: "text-[#172033] hover:text-[#FF6B0B] bg-transparent p-0",
  };

  const iconElement = () => {
    if (icon === 'arrow') {
      return (
        <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
      );
    }
    if (icon === 'up-right') {
      return (
        <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      );
    }
    return null;
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={combinedClasses}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        <span>{children}</span>
        {iconElement()}
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      <span>{children}</span>
      {iconElement()}
    </button>
  );
};
