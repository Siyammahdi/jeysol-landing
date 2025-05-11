'use client';

import React, { useRef } from 'react';
import { motion, useInView, Variants } from 'framer-motion';

const AboutVisual: React.FC = () => {
  const visualRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(visualRef, { once: true, amount: 0.3 });

  // Animation variants for the visual elements
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    }
  };
  
  const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };
  
  // Animation for the pulse effect
  const pulseVariants: Variants = {
    initial: { scale: 0.95, opacity: 0.5 },
    animate: {
      scale: 1.05,
      opacity: 0.8,
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }
    }
  };
  
  // Animation for the floating elements
  const floatVariants: Variants = {
    initial: { y: 0 },
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };
  
  // Animation for spinning
  const spinVariants: Variants = {
    initial: { rotate: 0 },
    animate: {
      rotate: 360,
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  return (
    <motion.div
      ref={visualRef}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="relative w-full aspect-square max-w-xl mx-auto"
    >
      {/* Main visual container with glassmorphism */}
      <motion.div 
        variants={itemVariants}
        className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-600/10 via-violet-600/5 to-transparent backdrop-blur-sm border border-blue-500/10"
      />
      
      {/* Central core */}
      <motion.div
        variants={itemVariants}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40%] h-[40%]"
      >
        <motion.div 
          variants={pulseVariants}
          initial="initial"
          animate="animate"
          className="absolute inset-0 rounded-full bg-gradient-radial from-blue-500/20 via-violet-500/10 to-transparent blur-md"
        />
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-600/30 to-violet-600/30 backdrop-blur-sm border border-blue-400/20 flex items-center justify-center overflow-hidden">
          <svg className="w-1/2 h-1/2 text-blue-100/90" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.5 12C15.5 14.21 13.71 16 11.5 16C9.29 16 7.5 14.21 7.5 12C7.5 9.79 9.29 8 11.5 8C13.71 8 15.5 9.79 15.5 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M11.9998 2V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="3 3"/>
            <path d="M2 12H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="3 3"/>
          </svg>
        </div>
      </motion.div>
      
      {/* Orbiting elements */}
      <motion.div
        variants={spinVariants}
        initial="initial"
        animate="animate"
        className="absolute inset-0"
      >
        {/* Orbit path */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] rounded-full border border-blue-500/10 border-dashed"></div>
        
        {/* Orbiting element 1 */}
        <motion.div
          variants={floatVariants}
          initial="initial"
          animate="animate"
          className="absolute top-[5%] left-1/2 -translate-x-1/2 w-14 h-14"
        >
          <div className="w-full h-full rounded-lg bg-gradient-to-tr from-blue-600/30 to-blue-400/20 border border-blue-500/20 shadow-lg shadow-blue-500/10 flex items-center justify-center transform rotate-12">
            <svg className="w-7 h-7 text-blue-100/90" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </motion.div>
        
        {/* Orbiting element 2 */}
        <motion.div
          variants={floatVariants}
          initial="initial"
          animate="animate"
          className="absolute bottom-[5%] left-1/2 -translate-x-1/2 w-14 h-14"
        >
          <div className="w-full h-full rounded-full bg-gradient-to-tr from-[#FD673A]/30 to-[#FD673A]/20 border border-[#FD673A]/20 shadow-lg shadow-[#FD673A]/10 flex items-center justify-center">
            <svg className="w-7 h-7 text-blue-100/90" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </motion.div>
        
        {/* Orbiting element 3 */}
        <motion.div
          variants={floatVariants}
          initial="initial"
          animate="animate"
          className="absolute top-1/2 -translate-y-1/2 left-[5%] w-14 h-14"
        >
          <div className="w-full h-full rounded-lg bg-gradient-to-tr from-blue-600/30 to-blue-400/20 border border-blue-500/20 shadow-lg shadow-blue-500/10 flex items-center justify-center transform -rotate-12">
            <svg className="w-7 h-7 text-blue-100/90" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </motion.div>
        
        {/* Orbiting element 4 */}
        <motion.div
          variants={floatVariants}
          initial="initial"
          animate="animate"
          className="absolute top-1/2 -translate-y-1/2 right-[5%] w-14 h-14"
        >
          <div className="w-full h-full rounded-full bg-gradient-to-tr from-[#FD673A]/30 to-[#FD673A]/20 border border-[#FD673A]/20 shadow-lg shadow-[#FD673A]/10 flex items-center justify-center">
            <svg className="w-7 h-7 text-blue-100/90" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 9V4m0 5c0 1.105.895 2 2 2s2-.895 2-2-.895-2-2-2-2 .895-2 2zM8 15v5m8-5v5M8 15c0 1.105.895 2 2 2s2-.895 2-2-.895-2-2-2-2 .895-2 2zM16 15c0 1.105.895 2 2 2s2-.895 2-2-.895-2-2-2-2 .895-2 2zM16 9V4m0 5c0 1.105.895 2 2 2s2-.895 2-2-.895-2-2-2-2 .895-2 2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </motion.div>
      </motion.div>
      
      {/* Connection lines */}
      <svg className="absolute inset-0 w-full h-full z-10 opacity-60" viewBox="0 0 100 100" preserveAspectRatio="none">
        <motion.path
          d="M50,50 L50,10 M50,50 L50,90 M50,50 L10,50 M50,50 L90,50"
          stroke="url(#line-gradient)"
          strokeWidth="0.2"
          strokeDasharray="1,1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1 }}
        />
        <defs>
          <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#FD673A" stopOpacity="0.6" />
          </linearGradient>
        </defs>
      </svg>
      
      {/* Glow effects */}
      <motion.div
        variants={pulseVariants}
        initial="initial"
        animate="animate"
        className="absolute inset-[10%] rounded-full bg-gradient-to-r from-blue-500/5 via-[#FD673A]/5 to-blue-500/5 blur-3xl"
      />
    </motion.div>
  );
};

export default AboutVisual; 