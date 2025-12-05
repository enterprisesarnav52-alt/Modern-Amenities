import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost' | 'white';
  size?: 'sm' | 'md' | 'lg';
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-display font-medium transition-all duration-300 tracking-wide uppercase";
  
  const variants = {
    primary: "bg-brand-red text-white hover:bg-red-700 shadow-md",
    outline: "border-2 border-brand-black text-brand-black hover:bg-brand-black hover:text-white",
    ghost: "text-brand-black hover:text-brand-red",
    white: "bg-white text-brand-black hover:bg-gray-100 shadow-md"
  };

  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
