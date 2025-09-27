"use client";

import { useState } from 'react';

const StarBorder = ({
  as: Component = 'button',
  className = '',
  color = 'var(--neon)',
  speed = '6s',
  hoverSpeed = '1.5s',
  thickness = 1,
  children,
  ...rest
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const componentStyle = {
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    transform: isHovered ? 'scale(1.05)' : 'scale(1)',
    boxShadow: isHovered ? `0 0 25px -5px ${color}` : 'none',
    ...rest.style,
  };

  const starStyle = {
    background: `radial-gradient(circle, ${color}, transparent 25%)`,
    animationDuration: isHovered ? hoverSpeed : speed,
    opacity: isHovered ? 1 : 0.7,
    transition: 'animation-duration 0.4s ease, opacity 0.4s ease',
  };

  const innerBoxStyle = {
    transition: 'background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease',
    backgroundColor: isHovered ? 'rgba(0, 0, 0, 0.3)' : 'black',
    borderColor: isHovered ? color : 'rgb(55 65 81)', // Tailwind's gray-700
    color: isHovered ? color : 'white',
    borderWidth: `${thickness}px`,
    borderStyle: 'solid',
  };

  return (
    <Component
      className={`relative inline-block overflow-hidden rounded-[20px] ${className}`}
      style={componentStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...rest}
    >
      <div
        className="absolute w-[300%] h-[50%] bottom-[-11px] right-[-250%] rounded-full animate-star-movement-bottom z-0"
        style={starStyle}
      ></div>
      <div
        className="absolute w-[300%] h-[50%] top-[-10px] left-[-250%] rounded-full animate-star-movement-top z-0"
        style={starStyle}
      ></div>
      
      <div
        className="relative z-10 text-center text-[16px] py-4 px-6 rounded-[19px]"
        style={innerBoxStyle}
      >
        {children}
      </div>
    </Component>
  );
};

export default StarBorder;