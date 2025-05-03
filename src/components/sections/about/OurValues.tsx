'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { values } from '@/lib/mock-team';
import { IconMap } from './IconMap';

const OurValues: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const isHeadingInView = useInView(headingRef, { once: true, amount: 0.5 });
  
  // Container animation variants
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

  return (
    <section 
      id="our-values"
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden bg-[#080D24]"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Ambient Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F2C] via-[#080D24] to-[#0A0F2C] opacity-80"></div>
        
        {/* Abstract background pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="smallGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="white" strokeWidth="0.5" opacity="0.3"/>
              </pattern>
              <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
                <rect width="100" height="100" fill="url(#smallGrid)"/>
                <path d="M 100 0 L 0 0 0 100" fill="none" stroke="white" strokeWidth="1" opacity="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        
        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-[40rem] h-[40rem] rounded-full bg-gradient-radial from-blue-500/5 via-blue-400/2 to-transparent blur-3xl opacity-60 animate-blob"></div>
        <div className="absolute top-3/4 right-1/4 w-[35rem] h-[35rem] rounded-full bg-gradient-radial from-purple-500/5 via-purple-400/2 to-transparent blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[25rem] h-[25rem] rounded-full bg-gradient-radial from-teal-500/5 via-teal-400/2 to-transparent blur-3xl opacity-40 animate-blob animation-delay-4000"></div>
      </div>
      
      {/* Content Container */}
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div ref={headingRef} className="text-center mb-16 md:mb-24">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4 tracking-tight"
            style={{
              opacity: isHeadingInView ? 1 : 0,
              y: isHeadingInView ? 0 : 50,
              transition: "opacity 0.6s ease-out, transform 0.8s ease-out"
            }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-teal-400">
              Our Values
            </span>
          </motion.h2>
          
          <motion.div 
            className="w-20 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-teal-500 mx-auto rounded-full mb-6"
            initial={{ width: 0, opacity: 0 }}
            animate={isHeadingInView ? { width: 80, opacity: 1 } : { width: 0, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          
          <motion.p
            className="text-xl text-blue-100/70 max-w-3xl mx-auto font-light"
            style={{
              opacity: isHeadingInView ? 1 : 0,
              y: isHeadingInView ? 0 : 30,
              transition: "opacity 0.6s ease-out, transform 0.8s ease-out 0.2s"
            }}
          >
            The core principles that drive our work and culture
          </motion.p>
        </div>
        
        {/* Values Grid - Smaller values per row on larger screens for more focus */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
        >
          {values.map((value, index) => (
            <ValueCard 
              key={value.id}
              title={value.title}
              description={value.description}
              iconName={value.icon}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Value Card Component
interface ValueCardProps {
  title: string;
  description: string;
  iconName: string;
  index: number;
}

const ValueCard: React.FC<ValueCardProps> = ({ title, description, iconName, index }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
        delay: index * 0.1,
      }
    }
  };
  
  const iconVariants = {
    hidden: { scale: 0, rotate: -15 },
    visible: { 
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: index * 0.1 + 0.3,
      }
    }
  };
  
  const lineVariants = {
    hidden: { width: "0%" },
    visible: { 
      width: "100%",
      transition: {
        duration: 0.8,
        delay: index * 0.1 + 0.6
      }
    }
  };

  // Get the correct icon component
  const Icon = IconMap.value[iconName as keyof typeof IconMap.value] || IconMap.value.default;

  return (
    <motion.div
      variants={cardVariants}
      className="backdrop-blur-sm bg-gradient-to-br from-blue-900/20 to-indigo-900/10 border border-blue-500/10 hover:border-blue-500/30 transition-all duration-300 rounded-xl p-6 md:p-8 h-full group"
      whileHover={{ 
        y: -10,
        boxShadow: "0 20px 80px -20px rgba(66, 71, 112, 0.25)",
        transition: { duration: 0.3 }
      }}
    >
      {/* Icon */}
      <motion.div
        variants={iconVariants}
        className="mb-6 relative"
      >
        <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500/20 to-indigo-500/10 flex items-center justify-center text-blue-300 group-hover:text-blue-200 transition-colors duration-300">
          <div className="w-8 h-8">
            <Icon size={24} />
          </div>
        </div>
        
        {/* Animated glow on hover */}
        <div className="absolute inset-0 rounded-xl bg-blue-400/0 group-hover:bg-blue-400/20 blur-xl transition-all duration-500 opacity-0 group-hover:opacity-70"></div>
      </motion.div>
      
      {/* Title */}
      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-200 transition-colors duration-300">
        {title}
      </h3>
      
      {/* Underline animation */}
      <motion.div
        variants={lineVariants}
        className="h-px bg-gradient-to-r from-blue-500 to-indigo-500 w-0 mb-4"
      />
      
      {/* Description */}
      <p className="text-blue-100/70 group-hover:text-blue-100/90 transition-colors duration-300">
        {description}
      </p>
    </motion.div>
  );
};

export default OurValues; 