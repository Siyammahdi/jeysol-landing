'use client';

import React, { useRef, useCallback, memo } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import Link from 'next/link';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
  isActive: boolean;
  otherCardHovered: boolean;
  setHovered: (isHovered: boolean) => void;
}

const ServiceCard: React.FC<ServiceCardProps> = memo(({ 
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

  // Get service path based on title or index
  const getServicePath = () => {
    const paths = [
      "/services/web-development",
      "/services/mobile-development",
      "/services/software-development",
      "/services/ui-ux-design",
      "/services/graphics-design",
      "/services/printing-solutions"
    ];
    
    return paths[index] || "#";
  };

  // Subtle card tilt effect on mouse move - with useCallback for better performance
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    
    // Calculate relative position within the card (0 to 1)
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    
    // Convert to -15 to 15 range for subtle rotation
    mouseX.set((x - 0.5) * 20);
    mouseY.set((y - 0.5) * -20);
  }, [mouseX, mouseY]);

  // Reset mouse position when not hovering
  const handleMouseLeave = useCallback(() => {
    mouseX.set(0);
    mouseY.set(0);
    setHovered(false);
  }, [mouseX, mouseY, setHovered]);
  
  // Handle mouse enter with useCallback
  const handleMouseEnter = useCallback(() => {
    setHovered(true);
  }, [setHovered]);
  
  // Smooth spring config for mouse movement
  const springConfig = { damping: 25, stiffness: 150 };
  const rotateX = useSpring(mouseY, springConfig);
  const rotateY = useSpring(mouseX, springConfig);
  
  // Card movement on scroll - simplified
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
  
  // Icon animations - simplified
  const iconVariants = {
    initial: { 
      scale: 1,
    },
    hover: { 
      scale: 1.15,
      y: -8,
      transition: { duration: 0.3, type: "spring", stiffness: 400 }
    }
  };
  
  // Text animations - simplified
  const titleVariants = {
    initial: { y: 0 },
    hover: { 
      y: -5, 
      transition: { duration: 0.3, delay: 0.05 } 
    }
  };
  
  // Description animation variants - simplified
  const descriptionVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { 
      opacity: 1, 
      height: "auto",
      transition: { duration: 0.3 }
    }
  };
  
  // Line animation variants - simplified
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
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ 
        rotateX,
        rotateY,
        transformPerspective: 1000,
        zIndex: isActive ? 40 : 30,
        opacity: otherCardHovered ? 0.6 : 1,
        willChange: 'transform, opacity',
      }}
      className={`
        group relative overflow-hidden rounded-xl 
        transition-all duration-300
        ${isActive ? 
          'shadow-[0_20px_50px_rgba(253,103,58,0.25)]' : 
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
            'bg-gradient-to-br from-blue-900/60 via-[#FD673A]/20 to-indigo-900/60 border-[#FD673A]/30' : 
            'bg-gradient-to-br from-blue-900/30 via-blue-800/20 to-indigo-900/30 border-blue-500/10'
          }
        `}
      />
      
      {/* Inner glow effect */}
      <div 
        className={`
          absolute inset-[1px] -z-5 rounded-xl bg-gradient-to-b from-[#FD673A]/10 to-transparent opacity-0
          transition-opacity duration-500 ease-out
          ${isActive ? 'opacity-100' : 'group-hover:opacity-50'}
        `}
      />
      
      {/* Animated background orbs - simplified */}
      {isActive && (
        <div className="absolute inset-0 overflow-hidden -z-5 rounded-xl">
          <div className="absolute -top-[20%] -right-[20%] w-[60%] h-[60%] rounded-full 
            bg-gradient-radial from-[#FD673A]/10 via-transparent to-transparent 
            blur-xl opacity-100 scale-110"
          />
          <div className="absolute -bottom-[20%] -left-[20%] w-[60%] h-[60%] rounded-full 
            bg-gradient-radial from-indigo-500/10 via-transparent to-transparent 
            blur-xl opacity-100 scale-110"
          />
        </div>
      )}
      
      {/* Active/hover border animation - simplified */}
      {isActive && (
        <motion.div 
          className="absolute inset-0 rounded-xl z-10 pointer-events-none"
          initial="hidden"
          animate="visible"
        >
          <svg width="100%" height="100%" className="absolute inset-0">
            <linearGradient id={`line-gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="1" />
              <stop offset="50%" stopColor="#FD673A" stopOpacity="1" />
              <stop offset="100%" stopColor="#4F46E5" stopOpacity="1" />
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
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeInOut" }}
            />
          </svg>
        </motion.div>
      )}
      
      {/* Card content */}
      <div className="relative z-20 p-6 md:p-8">
        {/* Icon area */}
        <motion.div 
          className={`
            w-16 h-16 mb-6 rounded-lg flex items-center justify-center 
            ${isActive ? 
              'text-white bg-gradient-to-br from-[#FD673A]/90 to-blue-600/90' : 
              'text-blue-300 bg-gradient-to-br from-blue-900/60 to-indigo-900/60'
            }
            transition-all duration-300
          `}
          variants={iconVariants}
          initial="initial"
          animate={isActive ? "hover" : "initial"}
        >
          <div className="w-8 h-8">
            {icon}
          </div>
        </motion.div>
        
        {/* Title with hover effect */}
        <motion.h3 
          className={`
            text-xl md:text-2xl font-semibold mb-2
            ${isActive ? 'text-[#FD673A]' : 'text-white group-hover:text-[#FD673A]'}
            transition-colors duration-300
          `}
          variants={titleVariants}
          initial="initial"
          animate={isActive ? "hover" : "initial"}
        >
          {title}
        </motion.h3>
        
        {/* Animated separator line */}
        <motion.div 
          className="h-0.5 bg-gradient-to-r from-blue-500 via-[#FD673A] to-blue-500 mb-4"
          variants={lineVariants}
          initial="hidden"
          animate={isActive ? "visible" : "hidden"}
        />
        
        {/* Description with fade-in effect */}
        <motion.p 
          className="text-blue-100/70 leading-relaxed"
          variants={descriptionVariants}
          initial={isActive ? "visible" : "hidden"}
          animate={isActive ? "visible" : "hidden"}
        >
          {description}
        </motion.p>
        
        {/* Learn more link */}
        {isActive && (
          <Link href={getServicePath()}>
            <motion.div 
              className="mt-6 flex items-center text-[#FD673A] font-medium cursor-pointer"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <span>Learn more</span>
              <svg className="ml-1 w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.div>
          </Link>
        )}
      </div>
    </motion.div>
  );
});

ServiceCard.displayName = 'ServiceCard';

export default ServiceCard; 