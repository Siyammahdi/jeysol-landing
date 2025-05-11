'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  duration: number;
  delay: number;
}

const CareersHero = () => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [isClient, setIsClient] = useState(false);

  // Generate particles only on client-side to avoid hydration issues
  useEffect(() => {
    setIsClient(true);
    const generateParticles = () => {
      return Array.from({ length: 30 }).map((_, index) => ({
        id: index,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 1,
        opacity: Math.random() * 0.5 + 0.1,
        duration: Math.random() * 15 + 10,
        delay: Math.random() * 5,
      }));
    };
    
    setParticles(generateParticles());
  }, []);

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-[#080C22]">
      {/* Enhanced Background elements */}
      <div className="absolute inset-0 z-0">
        {/* Circuit pattern background with updated colors */}
        <div className="absolute inset-0 opacity-5 mix-blend-luminosity">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="careers-circuit-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M 0 50 L 30 50 M 70 50 L 100 50 M 50 0 L 50 30 M 50 70 L 50 100" stroke="url(#circuit-gradient)" strokeWidth="0.5" />
                <circle cx="50" cy="50" r="8" fill="none" stroke="url(#circuit-gradient)" strokeWidth="0.5" />
                <circle cx="50" cy="50" r="1" fill="#FD673A" />
                <circle cx="30" cy="50" r="1" fill="#3B82F6" />
                <circle cx="70" cy="50" r="1" fill="#FD673A" />
                <circle cx="50" cy="30" r="1" fill="#3B82F6" />
                <circle cx="50" cy="70" r="1" fill="#FD673A" />
              </pattern>
              <linearGradient id="circuit-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3B82F6" />
                <stop offset="50%" stopColor="#FD673A" />
                <stop offset="100%" stopColor="#4F46E5" />
              </linearGradient>
            </defs>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#careers-circuit-pattern)" />
          </svg>
        </div>
        
        {/* Enhanced animated blobs with secondary color */}
        {isClient && (
          <>
            <motion.div 
              animate={{
                scale: [1, 1.05, 0.98, 1.02, 1],
                rotate: [0, 2, -1, 1, 0],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
              className="absolute -top-[10%] -left-[5%] w-[60%] h-[60%] rounded-full bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-[#FD673A]/15 via-blue-600/10 to-indigo-700/5 blur-3xl"
            />
            <motion.div 
              animate={{
                scale: [1, 0.96, 1.04, 0.98, 1],
                rotate: [0, -1, 2, -1, 0],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
              className="absolute top-[30%] -right-[10%] w-[70%] h-[70%] rounded-full bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-blue-600/15 via-[#FD673A]/8 to-transparent blur-3xl"
            />
            <motion.div 
              animate={{
                scale: [1, 1.03, 0.97, 1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
              className="absolute -bottom-[10%] left-[20%] w-[45%] h-[45%] rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#FD673A]/10 via-indigo-600/5 to-transparent blur-3xl"
            />
            
            {/* Floating particles */}
            {particles.map((particle) => (
              <motion.div
                key={particle.id}
                className="absolute rounded-full"
                style={{
                  left: `${particle.x}%`,
                  top: `${particle.y}%`,
                  width: `${particle.size}px`,
                  height: `${particle.size}px`,
                  backgroundColor: particle.id % 2 === 0 ? '#FD673A' : '#3B82F6',
                  opacity: particle.opacity,
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [particle.opacity, particle.opacity * 2, particle.opacity],
                }}
                transition={{
                  duration: particle.duration,
                  repeat: Infinity,
                  delay: particle.delay,
                }}
              />
            ))}
          </>
        )}
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-3"
        >
          <span className="inline-block px-4 py-1.5 text-sm font-medium rounded-full bg-gradient-to-r from-[#FD673A]/20 to-blue-500/20 backdrop-blur-sm text-[#FD673A] border border-[#FD673A]/30 shadow-lg shadow-[#FD673A]/5">
            We&apos;re Hiring
          </span>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight"
        >
          <span className="inline-block relative">
            Work with Passion.
            <motion.div 
              className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-blue-500 via-[#FD673A] to-blue-500"
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 0.8, delay: 0.6 }}
            />
          </span>
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-[#FD673A] to-indigo-500">
            Build the Future.
          </span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-3xl mx-auto text-lg md:text-xl text-blue-100/70 mb-8"
        >
          Join our team of innovators, creators, and problem-solvers. Help us build exceptional
          digital experiences that push boundaries and make a difference.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a 
            href="#open-positions" 
            className="group relative px-8 py-3 rounded-lg text-white flex items-center justify-center transition-all duration-300"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#FD673A] to-blue-500 rounded-lg blur opacity-30 group-hover:opacity-60 transition duration-300"></div>
            <div className="relative px-6 py-3 bg-[#0A0F2C] rounded-lg leading-none flex items-center">
              <span>View Open Positions</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
          </a>
          <a 
            href="#resume-drop" 
            className="px-8 py-3 rounded-lg bg-transparent border border-[#FD673A]/30
              text-[#FD673A] hover:bg-[#FD673A]/10 
              flex items-center justify-center transition-all duration-300 group overflow-hidden relative"
          >
            <span className="relative z-10">Submit Your Resume</span>
            <span className="absolute inset-0 bg-gradient-to-r from-[#FD673A]/0 via-[#FD673A]/10 to-[#FD673A]/0 opacity-0 group-hover:opacity-100 group-hover:animate-shine"></span>
          </a>
        </motion.div>
        
        {/* Enhanced Floating icons */}
        <div className="absolute left-[5%] top-[20%] hidden lg:block">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 0.8, y: 0 }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse" 
            }}
            className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#FD673A]/20 to-indigo-900/10 backdrop-blur-sm border border-[#FD673A]/20 flex items-center justify-center shadow-lg shadow-[#FD673A]/5"
          >
            <svg className="w-8 h-8 text-[#FD673A]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </motion.div>
        </div>
        
        <div className="absolute right-[10%] top-[30%] hidden lg:block">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 0.8, y: 0 }}
            transition={{ 
              duration: 3,
              delay: 0.5,
              repeat: Infinity,
              repeatType: "reverse" 
            }}
            className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600/20 to-blue-900/10 backdrop-blur-sm border border-blue-500/20 flex items-center justify-center shadow-lg shadow-blue-500/5"
          >
            <svg className="w-6 h-6 text-blue-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
            </svg>
          </motion.div>
        </div>
        
        <div className="absolute left-[15%] bottom-[15%] hidden lg:block">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 0.8, y: 0 }}
            transition={{ 
              duration: 2.5,
              delay: 1,
              repeat: Infinity,
              repeatType: "reverse" 
            }}
            className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#FD673A]/20 to-blue-900/10 backdrop-blur-sm border border-[#FD673A]/20 flex items-center justify-center shadow-lg shadow-[#FD673A]/5"
          >
            <svg className="w-7 h-7 text-[#FD673A]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CareersHero; 