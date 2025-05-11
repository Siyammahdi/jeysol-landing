'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';

interface TestimonialCardProps {
  quote: string;
  name: string;
  title: string;
  company: string;
  avatar: string;
  color?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  name,
  title,
  company,
  avatar,
  color = 'orange'
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.3 });
  
  // Get color classes based on the color prop
  const getColorClasses = () => {
    switch(color) {
      case 'blue':
        return {
          text: 'text-blue-500',
          accent: 'bg-blue-500/10',
          border: 'border-blue-500/20',
          quote: 'text-blue-300'
        };
      case 'orange':
        return {
          text: 'text-[#FD673A]',
          accent: 'bg-[#FD673A]/10',
          border: 'border-[#FD673A]/20',
          quote: 'text-orange-300'
        };
      case 'purple':
        return {
          text: 'text-purple-500',
          accent: 'bg-purple-500/10',
          border: 'border-purple-500/20',
          quote: 'text-purple-300'
        };
      case 'teal':
        return {
          text: 'text-teal-500',
          accent: 'bg-teal-500/10',
          border: 'border-teal-500/20',
          quote: 'text-teal-300'
        };
      case 'green':
        return {
          text: 'text-green-500',
          accent: 'bg-green-500/10',
          border: 'border-green-500/20',
          quote: 'text-green-300'
        };
      case 'indigo':
        return {
          text: 'text-indigo-500',
          accent: 'bg-indigo-500/10',
          border: 'border-indigo-500/20',
          quote: 'text-indigo-300'
        };
      default:
        return {
          text: 'text-[#FD673A]',
          accent: 'bg-[#FD673A]/10',
          border: 'border-[#FD673A]/20',
          quote: 'text-orange-300'
        };
    }
  };

  const colorClasses = getColorClasses();

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6 }}
      className={`rounded-xl p-6 ${colorClasses.accent} ${colorClasses.border} border relative`}
    >
      {/* Quote marks */}
      <div className={`absolute -top-5 left-6 ${colorClasses.quote} text-6xl opacity-50`}>
        "
      </div>
      
      <div className="pt-4">
        <p className="text-blue-100/90 mb-6 relative z-10">{quote}</p>
        
        <div className="flex items-center">
          <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-white/20">
            <Image 
              src={avatar} 
              alt={name}
              fill
              className="object-cover"
            />
          </div>
          
          <div>
            <h4 className="text-white font-semibold">{name}</h4>
            <p className="text-blue-100/60 text-sm">
              {title}, <span className={colorClasses.text}>{company}</span>
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard; 