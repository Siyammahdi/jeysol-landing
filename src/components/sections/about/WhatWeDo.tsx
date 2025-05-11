'use client';

import React, { useRef, useState, useCallback } from 'react';
import { motion, useInView, Variants } from 'framer-motion';
import { services } from '@/lib/about-services';
import { Code, Smartphone, Cpu, Layout, Globe, Printer } from 'lucide-react';

const WhatWeDo: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const isHeadingInView = useInView(headingRef, { once: true, amount: 0.5 });

  return (
    <section 
      id="what-we-do"
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden bg-[#0A0F2C]"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Tech grid background */}
        <div className="absolute inset-0 tech-grid-bg opacity-40"></div>
        
        {/* Ambient glow */}
        <motion.div 
          animate={{
            opacity: [0.1, 0.15, 0.1],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] rounded-full bg-gradient-radial from-blue-500/5 via-[#FD673A]/3 to-transparent blur-3xl"
        />
      </div>
      
      {/* Main Content */}
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
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-[#FD673A] to-blue-400">
              What We Do
            </span>
          </motion.h2>
          
          <motion.div 
            className="w-20 h-1 bg-gradient-to-r from-blue-500 via-[#FD673A] to-blue-500 mx-auto rounded-full mb-6"
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
            Our comprehensive suite of technology services
          </motion.p>
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={service.id}
              title={service.title}
              description={service.description}
              icon={service.icon}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// Service Card Component
interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  title, 
  description, 
  icon, 
  index 
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.3 });
  const [isHovered, setIsHovered] = useState(false);
  
  // Get the appropriate icon component based on the service type
  const getIconComponent = (iconName: string) => {
    switch(iconName) {
      case 'code':
        return <Code size={24} />;
      case 'smartphone':
        return <Smartphone size={24} />;
      case 'cpu':
        return <Cpu size={24} />;
      case 'layout':
        return <Layout size={24} />;
      case 'globe':
        return <Globe size={24} />;
      case 'cloud':
        return <Printer size={24} />;
      default:
        return <Code size={24} />;
    }
  };
  
  // Animation variants
  const cardVariants: Variants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        delay: index * 0.1,
      }
    }
  };
  
  const contentVariants: Variants = {
    hidden: { opacity: 0, height: 0 },
    visible: { 
      opacity: 1, 
      height: "auto",
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <motion.div
      ref={cardRef}
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`rounded-xl p-6 md:p-8 bg-gradient-to-br from-blue-600/20 to-[#FD673A]/10 border border-[#FD673A]/20 hover:border-[#FD673A]/30 transition-all duration-300 h-full flex flex-col group`}
      whileHover={{ 
        y: -8,
        boxShadow: '0 10px 40px -10px rgba(253, 103, 58, 0.3)',
        transition: { duration: 0.3 }
      }}
    >
      {/* Icon */}
      <div className={`w-14 h-14 rounded-2xl bg-[#FD673A]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
        <div className={`w-8 h-8 text-[#FD673A]`}>
          {getIconComponent(icon)}
        </div>
      </div>
      
      {/* Title */}
      <h3 className="text-2xl font-bold text-white mb-3 group-hover:translate-y-[-0.25rem] transition-transform duration-300">
        {title}
      </h3>
      
      {/* Description */}
      <motion.div
        variants={contentVariants}
        initial={isHovered ? "visible" : "hidden"}
        animate={isHovered ? "visible" : "hidden"}
        className="text-blue-100/70 mb-4 overflow-hidden"
      >
        <p>{description}</p>
      </motion.div>
      
      {/* Divider */}
      <div className="mt-auto">
        <motion.div
          className={`h-px bg-[#FD673A] mt-auto`}
          initial={{ width: "20%" }}
          animate={{ width: isHovered ? "100%" : "20%" }}
          transition={{ duration: 0.3 }}
        />
      </div>
      
      {/* Learn More Link */}
      <motion.div
        animate={{ 
          y: isHovered ? 0 : 10, 
          opacity: isHovered ? 1 : 0 
        }}
        transition={{ duration: 0.3 }}
        className="flex items-center gap-2 pt-4 text-sm font-medium text-white/80 mt-4"
      >
        <span>Learn more</span>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="16" 
          height="16" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="transform group-hover:translate-x-1 transition-transform duration-300"
        >
          <path d="M5 12h14"></path>
          <path d="m12 5 7 7-7 7"></path>
        </svg>
      </motion.div>
    </motion.div>
  );
};

export default WhatWeDo; 