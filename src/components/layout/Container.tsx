import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: 'normal' | 'wide' | 'reading';
}

export const Container: React.FC<ContainerProps> = ({ 
  children, 
  className = '', 
  size = 'normal' 
}) => {
  const sizeClasses = {
    normal: 'max-w-content',
    wide: 'max-w-wide',
    reading: 'max-w-reading',
  };

  return (
    <div className={`mx-auto px-5 sm:px-8 lg:px-12 w-full ${sizeClasses[size]} ${className}`}>
      {children}
    </div>
  );
};
