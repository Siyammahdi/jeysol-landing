'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

const AboutHero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [particles, setParticles] = useState<Array<{
    id: number;
    size: number;
    initialX: number;
    initialY: number;
    duration: number;
    delay: number;
  }>>([]);
  
  // Generate particles only on the client side to avoid hydration errors
  useEffect(() => {
    const generatedParticles = Array.from({ length: 20 }).map((_, index) => ({
      id: index,
      size: Math.random() * 4 + 1,
      initialX: Math.random() * 100,
      initialY: Math.random() * 100,
      duration: Math.random() * 30 + 15,
      delay: Math.random() * 5,
    }));
    setParticles(generatedParticles);
  }, []);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  
  return (
    <div 
      ref={containerRef}
      className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden bg-[#080D24]"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent to-[#060A1C] opacity-70"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="absolute w-full h-full" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="0.5"></path>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)"></rect>
          </svg>
        </div>
        
        {/* Moving particles - client-side only rendering */}
        <div className="absolute inset-0">
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute rounded-full bg-blue-400"
              style={{
                width: `${particle.size}px`,
                height: `${particle.size}px`,
                x: `${particle.initialX}vw`,
                y: `${particle.initialY}vh`,
                opacity: 0.3,
              }}
              animate={{
                x: [`${particle.initialX}vw`, `${(particle.initialX + 20) % 100}vw`, `${(particle.initialX - 10) % 100}vw`, `${particle.initialX}vw`],
                y: [`${particle.initialY}vh`, `${(particle.initialY - 15) % 100}vh`, `${(particle.initialY + 10) % 100}vh`, `${particle.initialY}vh`],
                opacity: [0.2, 0.5, 0.3, 0.2],
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                delay: particle.delay,
                ease: "linear"
              }}
            />
          ))}
        </div>
        
        {/* Circular accent */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[150vw] rounded-full border border-blue-500/10"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.5 }}
          transition={{ duration: 2, ease: "easeOut" }}
        />
        
        {/* Second circular accent */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vw] rounded-full border border-indigo-500/20"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.7 }}
          transition={{ duration: 2.5, ease: "easeOut", delay: 0.3 }}
        />
      </div>
      
      {/* Content */}
      <motion.div 
        className="container mx-auto px-4 md:px-6 relative z-10"
        style={{ y, opacity }}
      >
        <div className="max-w-5xl mx-auto text-center">
          {/* Breadcrumb or tagline */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="inline-block">
              <span className="px-4 py-1.5 text-xs font-medium tracking-wider text-blue-300 uppercase bg-gradient-to-r from-blue-500/20 to-indigo-500/10 backdrop-blur-sm rounded-full border border-blue-500/30 shadow-lg shadow-blue-500/5">
                About Us
              </span>
            </div>
          </motion.div>
          
          {/* Main title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight"
          >
            We're a team of{' '}
            <span className="relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
                creators & innovators
              </span>
              <svg className="absolute -bottom-4 left-0 right-0 w-full opacity-70" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0,0 Q50,10 100,0" fill="none" stroke="url(#gradient)" strokeWidth="2" />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#3B82F6" />
                    <stop offset="100%" stopColor="#6366F1" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </motion.h1>
          
          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-blue-100/70 max-w-3xl mx-auto mb-10"
          >
            Passionate about building digital solutions that transform businesses
            and enhance people's lives through thoughtful design and cutting-edge technology.
          </motion.p>
          
          {/* Key stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-8 md:gap-16 mt-10 text-center"
          >
            <div className="flex flex-col">
              <span className="text-3xl md:text-4xl font-bold text-white mb-1">50+</span>
              <span className="text-blue-300/70">Team Members</span>
            </div>
            
            <div className="flex flex-col">
              <span className="text-3xl md:text-4xl font-bold text-white mb-1">7+</span>
              <span className="text-blue-300/70">Years Experience</span>
            </div>
            
            <div className="flex flex-col">
              <span className="text-3xl md:text-4xl font-bold text-white mb-1">250+</span>
              <span className="text-blue-300/70">Projects Delivered</span>
            </div>
            
            <div className="flex flex-col">
              <span className="text-3xl md:text-4xl font-bold text-white mb-1">12</span>
              <span className="text-blue-300/70">Countries</span>
            </div>
          </motion.div>
        </div>
      </motion.div>
      
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-blue-300/70 text-sm mb-2">Scroll to explore</span>
        <motion.div
          className="w-6 h-10 rounded-full border-2 border-blue-500/30 flex justify-center p-1"
          initial={{ y: 0 }}
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <motion.div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutHero; 