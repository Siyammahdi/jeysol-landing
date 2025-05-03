'use client';

import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
  isActive: boolean;
  otherCardHovered: boolean;
  setHovered: (isHovered: boolean) => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  icon, 
  title, 
  description, 
  index,
  isActive,
  otherCardHovered,
  setHovered
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Subtle card tilt effect on mouse move
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    
    // Calculate relative position within the card (0 to 1)
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    
    // Convert to -15 to 15 range for subtle rotation
    mouseX.set((x - 0.5) * 20);
    mouseY.set((y - 0.5) * -20);
  };

  // Reset mouse position when not hovering
  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setHovered(false);
  };
  
  // Smooth spring config for mouse movement
  const springConfig = { damping: 25, stiffness: 150 };
  const rotateX = useSpring(mouseY, springConfig);
  const rotateY = useSpring(mouseX, springConfig);
  
  // Card movement on scroll
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring",
        stiffness: 50,
        damping: 15,
        delay: index * 0.1
      }
    }
  };
  
  // Icon animations
  const iconVariants = {
    initial: { 
      scale: 1,
      y: 0
    },
    hover: { 
      scale: 1.15,
      y: -8,
      filter: "drop-shadow(0 10px 8px rgb(59 130 246 / 0.5))",
      transition: { duration: 0.3, type: "spring", stiffness: 400 }
    }
  };
  
  // Text animations
  const titleVariants = {
    initial: { y: 0 },
    hover: { 
      y: -5, 
      transition: { duration: 0.3, delay: 0.05 } 
    }
  };
  
  const descriptionVariants = {
    hidden: { opacity: 0, height: 0, y: 10 },
    visible: { 
      opacity: 1, 
      height: "auto",
      y: 0,
      transition: { 
        duration: 0.3,
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };
  
  const lineVariants = {
    hidden: { width: "10%", left: "45%" },
    visible: { 
      width: "100%", 
      left: "0%",
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <motion.div
      ref={cardRef}
      variants={cardVariants}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{ 
        rotateX,
        rotateY,
        transformPerspective: 1000,
        zIndex: isActive ? 40 : 30,
        opacity: otherCardHovered ? 0.6 : 1
      }}
      className={`
        group relative overflow-hidden rounded-xl 
        transition-all duration-300
        ${isActive ? 
          'shadow-[0_20px_50px_rgba(59,130,246,0.25)]' : 
          'shadow-lg'
        }
      `}
      whileHover={{ scale: 1.02 }}
    >
      {/* Frosted glass effect with gradient */}
      <div 
        className={`
          absolute inset-0 -z-10 transition-all duration-500
          backdrop-blur-md border
          ${isActive ? 
            'bg-gradient-to-br from-blue-900/60 via-blue-800/40 to-indigo-900/60 border-blue-400/30' : 
            'bg-gradient-to-br from-blue-900/30 via-blue-800/20 to-indigo-900/30 border-blue-500/10'
          }
        `}
      />
      
      {/* Inner glow effect */}
      <div 
        className={`
          absolute inset-[1px] -z-5 rounded-xl bg-gradient-to-b from-blue-500/10 to-transparent opacity-0
          transition-opacity duration-500 ease-out
          ${isActive ? 'opacity-100' : 'group-hover:opacity-50'}
        `}
      />
      
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden -z-5 rounded-xl">
        <div className={`
          absolute -top-[20%] -right-[20%] w-[60%] h-[60%] rounded-full 
          bg-gradient-radial from-blue-400/10 via-transparent to-transparent 
          blur-xl transform transition-all duration-500
          ${isActive ? 'opacity-100 scale-110' : 'opacity-0 scale-90'}
        `}/>
        <div className={`
          absolute -bottom-[20%] -left-[20%] w-[60%] h-[60%] rounded-full 
          bg-gradient-radial from-indigo-500/10 via-transparent to-transparent 
          blur-xl transform transition-all duration-500
          ${isActive ? 'opacity-100 scale-110' : 'opacity-0 scale-90'}
        `}/>
      </div>
      
      {/* Active/hover border animation */}
      <motion.div 
        className="absolute inset-0 rounded-xl z-10 pointer-events-none"
        initial="hidden"
        animate={isActive ? "visible" : "hidden"}
      >
        <svg width="100%" height="100%" className="absolute inset-0">
          <linearGradient id={`line-gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" stopOpacity="1" />
            <stop offset="50%" stopColor="#8B5CF6" stopOpacity="1" />
            <stop offset="100%" stopColor="#14B8A6" stopOpacity="1" />
          </linearGradient>
          <motion.rect 
            x="0" 
            y="0" 
            width="100%" 
            height="100%" 
            fill="none" 
            stroke={`url(#line-gradient-${index})`} 
            strokeWidth="1.5"
            strokeDasharray="10,5"
            rx="12"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: isActive ? 1 : 0, 
              opacity: isActive ? 1 : 0 
            }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        </svg>
      </motion.div>
      
      {/* Card content */}
      <div className="relative z-20 p-6 md:p-8 h-full flex flex-col">
        {/* Card icon */}
        <motion.div 
          variants={iconVariants}
          initial="initial"
          animate={isActive ? "hover" : "initial"}
          className="mb-5 text-blue-400 self-start"
        >
          <div className="w-12 h-12 flex items-center justify-center">
            {icon}
          </div>
        </motion.div>
        
        {/* Card title */}
        <motion.h3 
          variants={titleVariants}
          initial="initial"
          animate={isActive ? "hover" : "initial"}
          className="text-xl font-medium text-white mb-3"
        >
          {title}
        </motion.h3>
        
        {/* Glowing divider line */}
        <motion.div
          variants={lineVariants}
          initial="hidden"
          animate={isActive ? "visible" : "hidden"}
          className="h-0.5 bg-gradient-to-r from-blue-500 via-violet-500 to-teal-500 mb-4 rounded-full relative"
          style={{
            filter: "drop-shadow(0 0 4px rgba(59, 130, 246, 0.5))"
          }}
        />
        
        {/* Expanded content on hover */}
        <motion.div
          variants={descriptionVariants}
          initial="hidden"
          animate={isActive ? "visible" : "hidden"}
          className="text-blue-100/80 text-sm overflow-hidden"
        >
          <motion.p 
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            {description}
          </motion.p>
        </motion.div>
        
        {/* Learn more button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ 
            opacity: isActive ? 1 : 0, 
            y: isActive ? 0 : 10,
            transition: { delay: 0.2 }
          }}
          className="mt-auto pt-4 flex justify-end"
        >
          <div className="text-blue-300 text-sm font-medium flex items-center cursor-pointer group/btn">
            <span>Learn more</span>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="18" 
              height="18" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className="ml-1 transform group-hover/btn:translate-x-1 transition-transform duration-200"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </div>
        </motion.div>
      </div>
      
      {/* Shimmering highlight */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 20%, 0 50%)"
        }}
      />
    </motion.div>
  );
};

export default ServiceCard; 