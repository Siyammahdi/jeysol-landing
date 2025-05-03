'use client';

import React from 'react';
import { motion } from 'framer-motion';

const CareersHero = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        {/* Circuit pattern background */}
        <div className="absolute inset-0 opacity-5 mix-blend-luminosity">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="careers-circuit-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M 0 50 L 30 50 M 70 50 L 100 50 M 50 0 L 50 30 M 50 70 L 50 100" stroke="rgb(99, 102, 241)" strokeWidth="0.5" />
                <circle cx="50" cy="50" r="8" fill="none" stroke="rgb(99, 102, 241)" strokeWidth="0.5" />
                <circle cx="50" cy="50" r="1" fill="rgb(99, 102, 241)" />
                <circle cx="30" cy="50" r="1" fill="rgb(99, 102, 241)" />
                <circle cx="70" cy="50" r="1" fill="rgb(99, 102, 241)" />
                <circle cx="50" cy="30" r="1" fill="rgb(99, 102, 241)" />
                <circle cx="50" cy="70" r="1" fill="rgb(99, 102, 241)" />
              </pattern>
            </defs>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#careers-circuit-pattern)" />
          </svg>
        </div>
        
        {/* Animated blobs */}
        <div className="absolute -top-[10%] -left-[5%] w-[60%] h-[60%] rounded-full bg-gradient-radial from-indigo-600/10 via-indigo-600/5 to-transparent blur-3xl animate-blob" />
        <div className="absolute top-[30%] -right-[10%] w-[70%] h-[70%] rounded-full bg-gradient-radial from-blue-600/10 via-blue-600/5 to-transparent blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute -bottom-[10%] left-[20%] w-[45%] h-[45%] rounded-full bg-gradient-radial from-purple-600/10 via-purple-600/5 to-transparent blur-3xl animate-blob animation-delay-4000" />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-3"
        >
          <span className="inline-block px-4 py-1.5 text-sm font-medium rounded-full bg-indigo-600/30 backdrop-blur-sm text-indigo-200 border border-indigo-500/20">
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
              className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 0.8, delay: 0.6 }}
            />
          </span>
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
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
            className="px-8 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white 
              flex items-center justify-center transition-colors duration-300 shadow-lg shadow-indigo-600/20"
          >
            View Open Positions
          </a>
          <a 
            href="#resume-drop" 
            className="px-8 py-3 rounded-lg bg-transparent border border-indigo-500/30
              text-indigo-300 hover:bg-indigo-500/10 hover:text-indigo-200 
              flex items-center justify-center transition-colors duration-300"
          >
            Submit Your Resume
          </a>
        </motion.div>
        
        {/* Floating icons */}
        <div className="absolute left-[5%] top-[20%] hidden lg:block">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 0.6, y: 0 }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse" 
            }}
            className="w-16 h-16 rounded-xl bg-indigo-900/20 backdrop-blur-sm border border-indigo-500/20 flex items-center justify-center"
          >
            <svg className="w-8 h-8 text-indigo-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </motion.div>
        </div>
        
        <div className="absolute right-[10%] top-[30%] hidden lg:block">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 0.6, y: 0 }}
            transition={{ 
              duration: 3,
              delay: 0.5,
              repeat: Infinity,
              repeatType: "reverse" 
            }}
            className="w-12 h-12 rounded-xl bg-purple-900/20 backdrop-blur-sm border border-purple-500/20 flex items-center justify-center"
          >
            <svg className="w-6 h-6 text-purple-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
            </svg>
          </motion.div>
        </div>
        
        <div className="absolute left-[15%] bottom-[15%] hidden lg:block">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 0.6, y: 0 }}
            transition={{ 
              duration: 2.5,
              delay: 1,
              repeat: Infinity,
              repeatType: "reverse" 
            }}
            className="w-14 h-14 rounded-xl bg-blue-900/20 backdrop-blur-sm border border-blue-500/20 flex items-center justify-center"
          >
            <svg className="w-7 h-7 text-blue-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CareersHero; 