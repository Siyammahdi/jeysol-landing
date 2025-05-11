'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface AboutTextBlockProps {
  title: string;
  content: string;
  icon: React.ReactNode;
  highlightWords: string[];
  index: number;
}

const AboutTextBlock: React.FC<AboutTextBlockProps> = ({ 
  title, 
  content, 
  icon, 
  highlightWords,
  index
}) => {
  const blockRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(blockRef, { once: true, amount: 0.3 });
  
  // Split content by spaces to find and highlight keywords
  const contentWords = content.split(' ');
  
  // Animation variants for staggered text
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <motion.div
      ref={blockRef}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ 
        duration: 0.7, 
        delay: 0.1 + (index * 0.1),
        ease: [0.22, 1, 0.36, 1]
      }}
      className="group"
    >
      {/* Title with Icon */}
      <div className="flex items-center mb-3">
        <div className="w-8 h-8 mr-3 flex items-center justify-center rounded-full bg-gradient-to-tr from-[#FD673A]/30 to-blue-500/20 border border-[#FD673A]/30 text-[#FD673A]">
          {icon}
        </div>
        <h3 className="text-2xl font-semibold text-blue-100">{title}</h3>
      </div>
      
      {/* Glowing divider line */}
      <motion.div 
        className="h-px bg-gradient-to-r from-[#FD673A]/60 via-[#FD673A]/40 to-transparent mb-4 ml-11"
        initial={{ width: 0 }}
        animate={isInView ? { width: "100%" } : { width: 0 }}
        transition={{ duration: 0.8, delay: 0.3 + (index * 0.1) }}
      />
      
      {/* Text content with highlighted words */}
      <motion.div
        className="pl-11 text-blue-100/80"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {contentWords.map((word, idx) => {
          // Remove punctuation for checking if it's a highlight word
          const cleanWord = word.replace(/[.,!?;:]/g, '');
          // Check if the current word should be highlighted
          const isHighlighted = highlightWords.some(hw => 
            hw.toLowerCase() === cleanWord.toLowerCase()
          );
          
          // Get any punctuation to keep it in the output
          const punctuation = word.match(/[.,!?;:]/g);
          
          return (
            <motion.span 
              key={idx} 
              variants={itemVariants}
              className={`inline-block ${idx > 0 ? 'ml-1' : ''}`}
            >
              {isHighlighted ? (
                <span 
                  className="text-[#FD673A] font-medium relative group-hover:text-[#FD673A]/90 transition-colors duration-300 cursor-default"
                >
                  {cleanWord}
                  {punctuation ? punctuation[0] : ''}
                  <span className="absolute -bottom-px left-0 w-full h-px bg-gradient-to-r from-[#FD673A]/30 via-[#FD673A]/60 to-[#FD673A]/30 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </span>
              ) : (
                <span>
                  {word}
                </span>
              )}
            </motion.span>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default AboutTextBlock; 