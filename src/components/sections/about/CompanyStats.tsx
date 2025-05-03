'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { IconMap } from './IconMap';
import { companyStats } from '@/lib/mock-team';

// Component to animate counting numbers
const CountUp: React.FC<{ end: number; suffix?: string; prefix?: string; duration?: number }> = ({ 
  end, 
  suffix = '', 
  prefix = '',
  duration = 2
}) => {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(nodeRef, { once: true, amount: 0.3 });
  const [count, setCount] = React.useState(0);
  
  React.useEffect(() => {
    if (!isInView) return;
    
    let startTime: number;
    let animationFrame: number;
    
    const counter = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
      // Use easeOutExpo for smoother animation near the end
      const easeOutProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      
      setCount(Math.floor(easeOutProgress * end));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(counter);
      }
    };
    
    animationFrame = requestAnimationFrame(counter);
    
    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [end, duration, isInView]);
  
  return <span ref={nodeRef}>{prefix}{count}{suffix}</span>;
};

const CompanyStats: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  
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
      className="py-20 md:py-24 bg-gradient-to-b from-[#0F1738] to-[#0A0F2C] text-white overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-4"
          >
            <span className="px-4 py-1.5 text-xs font-medium tracking-wider text-blue-300 uppercase bg-gradient-to-r from-blue-500/20 to-indigo-500/10 backdrop-blur-sm rounded-full border border-blue-500/30 shadow-lg shadow-blue-500/5">
              Company Metrics
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold mb-4 text-white"
          >
            Our Growth in Numbers
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-2xl mx-auto text-blue-100/60 text-lg"
          >
            Metrics that reflect our commitment to excellence and continued growth
          </motion.p>
        </div>
        
        {/* Stats Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {companyStats.map((stat, index) => {
            const Icon = IconMap.stats[stat.icon as keyof typeof IconMap.stats] || IconMap.stats.default;
            
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-2xl p-6 border border-white/10 shadow-xl hover:shadow-blue-500/5 transition-all hover:-translate-y-1 group relative overflow-hidden"
              >
                {/* Background Blob */}
                <div className="absolute -right-10 -bottom-10 w-32 h-32 rounded-full bg-gradient-to-br from-blue-500/20 via-indigo-500/10 to-transparent blur-2xl opacity-0 group-hover:opacity-70 transition-opacity duration-700"></div>
                
                {/* Icon */}
                <div className="relative z-10 mb-4 flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/30 to-indigo-500/20 text-blue-300">
                  <Icon size={24} className="text-blue-300" />
                </div>
                
                {/* Stat Number */}
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-2 relative z-10">
                  <CountUp 
                    end={stat.value} 
                    suffix={stat.suffix} 
                    prefix={stat.prefix} 
                  />
                </h3>
                
                {/* Stat Label */}
                <p className="text-blue-200/80 font-medium relative z-10">{stat.label}</p>
                
                {/* Additional Info */}
                {stat.additional && (
                  <p className="text-sm text-blue-100/40 mt-2 relative z-10">{stat.additional}</p>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default CompanyStats; 