'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
  color?: string;
}

const ProcessStep: React.FC<ProcessStepProps> = ({
  number,
  title,
  description,
  color = 'orange'
}) => {
  const stepRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(stepRef, { once: true, amount: 0.3 });
  
  // Get color classes based on the color prop
  const getColorClasses = () => {
    switch(color) {
      case 'blue':
        return {
          text: 'text-blue-500',
          accent: 'bg-blue-500/10',
          border: 'border-blue-500/20',
          numberBg: 'bg-blue-500',
          lineBg: 'bg-gradient-to-b from-blue-500 via-blue-500/50 to-transparent'
        };
      case 'orange':
        return {
          text: 'text-[#FD673A]',
          accent: 'bg-[#FD673A]/10',
          border: 'border-[#FD673A]/20',
          numberBg: 'bg-[#FD673A]',
          lineBg: 'bg-gradient-to-b from-[#FD673A] via-[#FD673A]/50 to-transparent'
        };
      case 'purple':
        return {
          text: 'text-purple-500',
          accent: 'bg-purple-500/10',
          border: 'border-purple-500/20',
          numberBg: 'bg-purple-500',
          lineBg: 'bg-gradient-to-b from-purple-500 via-purple-500/50 to-transparent'
        };
      case 'teal':
        return {
          text: 'text-teal-500',
          accent: 'bg-teal-500/10',
          border: 'border-teal-500/20',
          numberBg: 'bg-teal-500',
          lineBg: 'bg-gradient-to-b from-teal-500 via-teal-500/50 to-transparent'
        };
      case 'green':
        return {
          text: 'text-green-500',
          accent: 'bg-green-500/10',
          border: 'border-green-500/20',
          numberBg: 'bg-green-500',
          lineBg: 'bg-gradient-to-b from-green-500 via-green-500/50 to-transparent'
        };
      case 'indigo':
        return {
          text: 'text-indigo-500',
          accent: 'bg-indigo-500/10',
          border: 'border-indigo-500/20',
          numberBg: 'bg-indigo-500',
          lineBg: 'bg-gradient-to-b from-indigo-500 via-indigo-500/50 to-transparent'
        };
      default:
        return {
          text: 'text-[#FD673A]',
          accent: 'bg-[#FD673A]/10',
          border: 'border-[#FD673A]/20',
          numberBg: 'bg-[#FD673A]',
          lineBg: 'bg-gradient-to-b from-[#FD673A] via-[#FD673A]/50 to-transparent'
        };
    }
  };

  const colorClasses = getColorClasses();

  return (
    <div ref={stepRef} className="relative pl-14 pb-10">
      {/* Number bubble */}
      <motion.div 
        initial={{ scale: 0, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
        transition={{ duration: 0.4 }}
        className={`absolute left-0 top-0 w-10 h-10 rounded-full ${colorClasses.numberBg} flex items-center justify-center text-white font-bold text-lg z-10`}
      >
        {number}
      </motion.div>
      
      {/* Connecting line */}
      {number !== 5 && (
        <motion.div 
          initial={{ height: 0, opacity: 0 }}
          animate={isInView ? { height: '100%', opacity: 1 } : { height: 0, opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className={`absolute left-5 top-10 w-0.5 h-[calc(100%-20px)] ${colorClasses.lineBg} transform -translate-x-1/2`}
        />
      )}
      
      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-blue-100/70">{description}</p>
      </motion.div>
    </div>
  );
};

export default ProcessStep; 