'use client';

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  color?: string;
  isInitiallyOpen?: boolean;
}

const FAQItem: React.FC<FAQItemProps> = ({
  question,
  answer,
  color = 'orange',
  isInitiallyOpen = false
}) => {
  const [isOpen, setIsOpen] = useState(isInitiallyOpen);
  const contentRef = useRef<HTMLDivElement>(null);
  
  // Get color classes based on the color prop
  const getColorClasses = () => {
    switch(color) {
      case 'blue':
        return {
          text: 'text-blue-500',
          accent: 'bg-blue-500/10',
          border: 'border-blue-500/20',
          hover: 'hover:border-blue-500/40'
        };
      case 'orange':
        return {
          text: 'text-[#FD673A]',
          accent: 'bg-[#FD673A]/10',
          border: 'border-[#FD673A]/20',
          hover: 'hover:border-[#FD673A]/40'
        };
      case 'purple':
        return {
          text: 'text-purple-500',
          accent: 'bg-purple-500/10',
          border: 'border-purple-500/20',
          hover: 'hover:border-purple-500/40'
        };
      case 'teal':
        return {
          text: 'text-teal-500',
          accent: 'bg-teal-500/10',
          border: 'border-teal-500/20',
          hover: 'hover:border-teal-500/40'
        };
      case 'green':
        return {
          text: 'text-green-500',
          accent: 'bg-green-500/10',
          border: 'border-green-500/20',
          hover: 'hover:border-green-500/40'
        };
      case 'indigo':
        return {
          text: 'text-indigo-500',
          accent: 'bg-indigo-500/10',
          border: 'border-indigo-500/20',
          hover: 'hover:border-indigo-500/40'
        };
      default:
        return {
          text: 'text-[#FD673A]',
          accent: 'bg-[#FD673A]/10',
          border: 'border-[#FD673A]/20',
          hover: 'hover:border-[#FD673A]/40'
        };
    }
  };

  const colorClasses = getColorClasses();

  return (
    <div 
      className={`border ${colorClasses.border} rounded-lg mb-4 overflow-hidden transition-all duration-300 ${colorClasses.hover} ${isOpen ? colorClasses.accent : 'bg-[#0A0F2C]/30'}`}
    >
      <button
        className="w-full py-4 px-6 flex justify-between items-center focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-left font-medium text-white">{question}</h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className={`${colorClasses.text} flex-shrink-0 ml-4`}
        >
          <ChevronDown size={20} />
        </motion.div>
      </button>
      
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div ref={contentRef} className="p-6 pt-0 text-blue-100/70">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FAQItem; 