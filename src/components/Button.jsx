import React from 'react';

const Button = ({ 
  text = 'Click me', 
  onClick = () => {}, 
  color = 'text-black', 
  bgColor = 'bg-gray-200', 
  padding = '', 
  borderRadius = 'rounded-md', 
  border = 'border border-gray-300', 
  icon = null, 
  disabled = false,
  className = '',
  type = 'button',
  size = 'base', // Added size prop for more responsive control
  fullWidth = false // Option to make button full width
}) => {
  // Responsive padding and text size classes based on size prop
  const sizeClasses = {
    xs: 'px-1 py-1 text-xs sm:px-3 sm:py-2 sm:text-xs',
    sm: 'px-3 py-2 text-sm sm:px-4 sm:py-3 sm:text-sm',
    base: 'px-4 py-2 text-xs sm:px-4 sm:py-2 sm:text-xs md:px-5 md:py-3 md:text-xs',
    lg: 'px-5 py-3 text-lg sm:px-6 sm:py-4 sm:text-lg',
    xl: 'px-6 py-4 text-xl sm:px-8 sm:py-5 sm:text-xl',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={` 
        inline-flex 
        items-center 
        justify-center 
        ${fullWidth ? 'w-full' : 'w-auto'}
        transition 
        duration-300 
        ease-in-out 
        hover:opacity-80 
        focus:outline-none 
        focus:ring-2 
        focus:ring-offset-2 
        ${color} 
        ${bgColor} 
        ${sizeClasses[size] || sizeClasses['base']}
        ${borderRadius} 
        ${border}
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
        ${className}
      `}
    >
      {icon && <span className="mr-2 flex-shrink-0">{icon}</span>}
      <span className="truncate">{text}</span>
    </button>
  );
};

export default Button;
