'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const AboutCTA: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };
  
  return (
    <section 
      ref={sectionRef}
      className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-b from-[#0A0F2C] to-[#070B20]"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <svg
          className="absolute w-full h-full opacity-20"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <defs>
            <radialGradient id="cta-gradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#0F172A" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="60" cy="40" r="40" fill="url(#cta-gradient)" />
        </svg>
        
        {/* Decorative lines - top left */}
        <svg 
          className="absolute top-0 left-0 w-64 h-64 opacity-10 text-blue-400"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0,0 L100,100" stroke="currentColor" strokeWidth="0.5" />
          <path d="M20,0 L100,80" stroke="currentColor" strokeWidth="0.5" />
          <path d="M40,0 L100,60" stroke="currentColor" strokeWidth="0.5" />
          <path d="M60,0 L100,40" stroke="currentColor" strokeWidth="0.5" />
          <path d="M80,0 L100,20" stroke="currentColor" strokeWidth="0.5" />
          <path d="M0,20 L80,100" stroke="currentColor" strokeWidth="0.5" />
          <path d="M0,40 L60,100" stroke="currentColor" strokeWidth="0.5" />
          <path d="M0,60 L40,100" stroke="currentColor" strokeWidth="0.5" />
          <path d="M0,80 L20,100" stroke="currentColor" strokeWidth="0.5" />
        </svg>
        
        {/* Decorative lines - bottom right */}
        <svg 
          className="absolute bottom-0 right-0 w-64 h-64 opacity-10 text-[#FD673A]"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0,0 L100,100" stroke="currentColor" strokeWidth="0.5" />
          <path d="M20,0 L100,80" stroke="currentColor" strokeWidth="0.5" />
          <path d="M40,0 L100,60" stroke="currentColor" strokeWidth="0.5" />
          <path d="M60,0 L100,40" stroke="currentColor" strokeWidth="0.5" />
          <path d="M80,0 L100,20" stroke="currentColor" strokeWidth="0.5" />
          <path d="M0,20 L80,100" stroke="currentColor" strokeWidth="0.5" />
          <path d="M0,40 L60,100" stroke="currentColor" strokeWidth="0.5" />
          <path d="M0,60 L40,100" stroke="currentColor" strokeWidth="0.5" />
          <path d="M0,80 L20,100" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-block px-4 py-1.5 text-xs font-medium tracking-wider text-blue-300 uppercase bg-gradient-to-r from-blue-500/20 to-[#FD673A]/10 backdrop-blur-sm rounded-full border border-blue-500/30 shadow-lg shadow-blue-500/5">
              Ready to collaborate?
            </span>
          </motion.div>
          
          <motion.h2 
            variants={itemVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
          >
            Let&apos;s build something<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-[#FD673A] to-blue-400">
              extraordinary together
            </span>
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-blue-100/70 mb-10 max-w-3xl mx-auto"
          >
            Whether you&apos;re looking to start a new project, enhance an existing one, or join our team,
            we&apos;d love to hear from you.
          </motion.p>
          
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link 
              href="/contact" 
              className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-[#FD673A] text-white font-medium text-base hover:from-blue-700 hover:to-[#E55B2D] shadow-lg shadow-blue-700/20 transition-all duration-300 hover:shadow-xl hover:shadow-[#FD673A]/30 hover:-translate-y-1"
            >
              Start A Conversation
            </Link>
            
            <Link 
              href="/careers" 
              className="px-8 py-3 rounded-full bg-white/10 hover:bg-white/15 text-white font-medium text-base border border-white/20 shadow-lg shadow-blue-500/5 transition-all duration-300 flex items-center gap-2"
            >
              Join Our Team
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            className="mt-12 text-blue-200/50 flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-[#FD673A]"></div>
              <span>Available for new projects</span>
            </div>
            
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-blue-400"></div>
              <span>Global remote team</span>
            </div>
            
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-[#FD673A]"></div>
              <span>7+ years experience</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutCTA; 