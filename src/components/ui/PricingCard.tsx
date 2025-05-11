'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Check } from 'lucide-react';
import Link from 'next/link';

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  ctaText: string;
  ctaLink: string;
  color?: string;
  index: number;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  description,
  features,
  isPopular = false,
  ctaText,
  ctaLink,
  color = 'orange',
  index
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
          button: 'bg-blue-500 hover:bg-blue-600',
          check: 'text-blue-400',
          popularBadge: 'bg-blue-500'
        };
      case 'orange':
        return {
          text: 'text-[#FD673A]',
          accent: 'bg-[#FD673A]/10',
          border: 'border-[#FD673A]/20',
          button: 'bg-[#FD673A] hover:bg-orange-600',
          check: 'text-[#FD673A]',
          popularBadge: 'bg-[#FD673A]'
        };
      case 'purple':
        return {
          text: 'text-purple-500',
          accent: 'bg-purple-500/10',
          border: 'border-purple-500/20',
          button: 'bg-purple-500 hover:bg-purple-600',
          check: 'text-purple-400',
          popularBadge: 'bg-purple-500'
        };
      case 'teal':
        return {
          text: 'text-teal-500',
          accent: 'bg-teal-500/10',
          border: 'border-teal-500/20',
          button: 'bg-teal-500 hover:bg-teal-600',
          check: 'text-teal-400',
          popularBadge: 'bg-teal-500'
        };
      case 'green':
        return {
          text: 'text-green-500',
          accent: 'bg-green-500/10',
          border: 'border-green-500/20',
          button: 'bg-green-500 hover:bg-green-600',
          check: 'text-green-400',
          popularBadge: 'bg-green-500'
        };
      case 'indigo':
        return {
          text: 'text-indigo-500',
          accent: 'bg-indigo-500/10',
          border: 'border-indigo-500/20',
          button: 'bg-indigo-500 hover:bg-indigo-600',
          check: 'text-indigo-400',
          popularBadge: 'bg-indigo-500'
        };
      default:
        return {
          text: 'text-[#FD673A]',
          accent: 'bg-[#FD673A]/10',
          border: 'border-[#FD673A]/20',
          button: 'bg-[#FD673A] hover:bg-orange-600',
          check: 'text-[#FD673A]',
          popularBadge: 'bg-[#FD673A]'
        };
    }
  };

  const colorClasses = getColorClasses();

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`rounded-xl border ${isPopular ? 'border-2' : 'border'} ${isPopular ? colorClasses.border : 'border-white/10'} 
      ${isPopular ? colorClasses.accent : 'bg-[#0A0F2C]/70'} p-6 md:p-8 relative transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}
    >
      {isPopular && (
        <div className={`absolute -top-3 left-1/2 transform -translate-x-1/2 ${colorClasses.popularBadge} text-white text-xs font-semibold py-1 px-3 rounded-full`}>
          Most Popular
        </div>
      )}
      
      <div className="text-center mb-6">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <div className="flex items-baseline justify-center">
          <span className="text-3xl font-bold text-white mr-1">{price}</span>
        </div>
        <p className="text-blue-100/60 text-sm mt-2">{description}</p>
      </div>
      
      <div className="space-y-3 mb-8">
        {features.map((feature, i) => (
          <div key={i} className="flex items-start">
            <div className={`flex-shrink-0 ${colorClasses.check} mr-2`}>
              <Check size={18} />
            </div>
            <span className="text-blue-100/80 text-sm">{feature}</span>
          </div>
        ))}
      </div>
      
      <div className="text-center">
        <Link href={ctaLink}>
          <button className={`w-full py-3 rounded-lg text-white ${isPopular ? colorClasses.button : 'bg-white/10 hover:bg-white/20'} transition-all duration-300 shadow-lg`}>
            {ctaText}
          </button>
        </Link>
      </div>
    </motion.div>
  );
};

export default PricingCard; 