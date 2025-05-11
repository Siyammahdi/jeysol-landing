'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface ServiceFeatureProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
  color?: string;
}

const ServiceFeature: React.FC<ServiceFeatureProps> = ({
  title,
  description,
  icon,
  index,
  color = 'orange'
}) => {
  const featureRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(featureRef, { once: true, amount: 0.3 });
  
  // Get color classes based on the color prop
  const getColorClasses = () => {
    switch(color) {
      case 'blue':
        return {
          text: 'text-blue-500',
          accent: 'bg-blue-500/10',
          border: 'border-blue-500/20'
        };
      case 'orange':
        return {
          text: 'text-[#FD673A]',
          accent: 'bg-[#FD673A]/10',
          border: 'border-[#FD673A]/20'
        };
      case 'purple':
        return {
          text: 'text-purple-500',
          accent: 'bg-purple-500/10',
          border: 'border-purple-500/20'
        };
      case 'teal':
        return {
          text: 'text-teal-500',
          accent: 'bg-teal-500/10',
          border: 'border-teal-500/20'
        };
      case 'green':
        return {
          text: 'text-green-500',
          accent: 'bg-green-500/10',
          border: 'border-green-500/20'
        };
      case 'indigo':
        return {
          text: 'text-indigo-500',
          accent: 'bg-indigo-500/10',
          border: 'border-indigo-500/20'
        };
      default:
        return {
          text: 'text-[#FD673A]',
          accent: 'bg-[#FD673A]/10',
          border: 'border-[#FD673A]/20'
        };
    }
  };

  const colorClasses = getColorClasses();

  return (
    <motion.div
      ref={featureRef}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`p-6 rounded-xl ${colorClasses.accent} ${colorClasses.border} border backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}
    >
      <div className="flex items-start">
        <div className={`flex-shrink-0 mr-4 ${colorClasses.text}`}>
          {icon}
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
          <p className="text-blue-100/70">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceFeature; 