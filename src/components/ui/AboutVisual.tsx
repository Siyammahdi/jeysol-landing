'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const AboutVisual: React.FC = () => {
  const visualRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(visualRef, { once: true, amount: 0.3 });

  // Animation variants for the visual elements
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    }
  };
  
  const itemVariants = {
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
  const pulseVariants = {
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
  const floatVariants = {
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
  const spinVariants = {
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
              <path d="M20 7L12 3L4 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M20 12V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 17V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 12L4 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M20 12L12 17L4 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M4 17V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 21.5V17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
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
          <div className="w-full h-full rounded-full bg-gradient-to-tr from-violet-600/30 to-violet-400/20 border border-violet-500/20 shadow-lg shadow-violet-500/10 flex items-center justify-center">
            <svg className="w-7 h-7 text-blue-100/90" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 7.5V6.1C21 4.6 19.8 3.4 18.3 3.5H5.7C4.2 3.4 3 4.6 3 6.1V7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M3 12.8V16.9C3 18.4 4.2 19.6 5.7 19.5H18.3C19.8 19.6 21 18.4 21 16.9V12.8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M3 12.8C3 11.3 4.2 10.1 5.7 10.2H18.3C19.8 10.1 21 11.3 21 12.8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M7.5 16.2001V15.0001C7.5 14.6001 7.8 14.2001 8.3 14.2001H9.5C9.9 14.2001 10.3 14.5001 10.3 15.0001V16.2001C10.3 16.6001 10 17.0001 9.5 17.0001H8.3C7.8 17.0001 7.5 16.6001 7.5 16.2001Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
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
          <div className="w-full h-full rounded-lg bg-gradient-to-tr from-teal-600/30 to-teal-400/20 border border-teal-500/20 shadow-lg shadow-teal-500/10 flex items-center justify-center transform -rotate-12">
            <svg className="w-7 h-7 text-blue-100/90" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.8496 5.00005C10.1696 5.00005 9.50961 5.12005 8.88961 5.34005" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M13.1603 19C14.2603 19 15.3002 18.75 16.2202 18.31" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M5.02051 7.98008C4.39051 9.15008 4.04053 10.5001 4.04053 11.9201C4.04053 13.3001 4.37051 14.5901 4.96051 15.7301" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M18.5 9.5C18.86 10.24 19.04 11.08 19.04 11.92C19.04 16.19 15.6 19.7 11.37 19.98" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M18.5904 5.56006C17.8704 4.69006 16.95 3.98001 15.9 3.50001C13.92 2.66001 11.68 2.64004 9.70996 3.49004C9.60996 3.54004 9.50996 3.59005 9.40996 3.65005" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8.5 10.5V14.5" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M15.5 10.5V14.5" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 8.5V16.5" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
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
          <div className="w-full h-full rounded-full bg-gradient-to-tr from-indigo-600/30 to-indigo-400/20 border border-indigo-500/20 shadow-lg shadow-indigo-500/10 flex items-center justify-center">
            <svg className="w-7 h-7 text-blue-100/90" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.5 12H14.5" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12.5 15L15.5 12L12.5 9" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M4 6C2.75 7.67 2 9.75 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C10.57 2 9.2 2.3 7.97 2.85" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
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
            <stop offset="100%" stopColor="#14B8A6" stopOpacity="0.6" />
          </linearGradient>
        </defs>
      </svg>
      
      {/* Glow effects */}
      <motion.div
        variants={pulseVariants}
        initial="initial"
        animate="animate"
        className="absolute inset-[10%] rounded-full bg-gradient-to-r from-blue-500/5 via-violet-500/5 to-teal-500/5 blur-3xl"
      />
    </motion.div>
  );
};

export default AboutVisual; 