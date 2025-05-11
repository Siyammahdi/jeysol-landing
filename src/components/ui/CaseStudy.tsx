'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';

interface CaseStudyProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  color?: string;
  reversed?: boolean;
}

const CaseStudy: React.FC<CaseStudyProps> = ({
  title,
  description,
  image,
  tags,
  link,
  color = 'orange',
  reversed = false
}) => {
  const caseStudyRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(caseStudyRef, { once: true, amount: 0.3 });
  
  // Get color classes based on the color prop
  const getColorClasses = () => {
    switch(color) {
      case 'blue':
        return {
          text: 'text-blue-500',
          badge: 'bg-blue-500/20 text-blue-300',
          button: 'bg-blue-500 hover:bg-blue-600',
          border: 'border-blue-500/20'
        };
      case 'orange':
        return {
          text: 'text-[#FD673A]',
          badge: 'bg-[#FD673A]/20 text-orange-300',
          button: 'bg-[#FD673A] hover:bg-orange-600',
          border: 'border-[#FD673A]/20'
        };
      case 'purple':
        return {
          text: 'text-purple-500',
          badge: 'bg-purple-500/20 text-purple-300',
          button: 'bg-purple-500 hover:bg-purple-600',
          border: 'border-purple-500/20'
        };
      case 'teal':
        return {
          text: 'text-teal-500',
          badge: 'bg-teal-500/20 text-teal-300',
          button: 'bg-teal-500 hover:bg-teal-600',
          border: 'border-teal-500/20'
        };
      case 'green':
        return {
          text: 'text-green-500',
          badge: 'bg-green-500/20 text-green-300',
          button: 'bg-green-500 hover:bg-green-600',
          border: 'border-green-500/20'
        };
      case 'indigo':
        return {
          text: 'text-indigo-500',
          badge: 'bg-indigo-500/20 text-indigo-300',
          button: 'bg-indigo-500 hover:bg-indigo-600',
          border: 'border-indigo-500/20'
        };
      default:
        return {
          text: 'text-[#FD673A]',
          badge: 'bg-[#FD673A]/20 text-orange-300',
          button: 'bg-[#FD673A] hover:bg-orange-600',
          border: 'border-[#FD673A]/20'
        };
    }
  };

  const colorClasses = getColorClasses();

  return (
    <div 
      ref={caseStudyRef}
      className={`grid grid-cols-1 ${reversed ? 'md:grid-cols-[55%_45%]' : 'md:grid-cols-[45%_55%]'} gap-8 items-center my-16`}
    >
      <motion.div 
        className={`${reversed ? 'md:order-2' : ''} relative overflow-hidden rounded-xl shadow-xl`}
        initial={{ opacity: 0, x: reversed ? 30 : -30 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: reversed ? 30 : -30 }}
        transition={{ duration: 0.8 }}
      >
        <div className={`absolute inset-0 ${colorClasses.border} border-2 rounded-xl -m-1 z-10`}></div>
        <div className="aspect-w-16 aspect-h-10 relative">
          <Image 
            src={image} 
            alt={title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-[#080D24]/70 to-transparent"></div>
        </div>
      </motion.div>
      
      <motion.div
        className={`${reversed ? 'md:order-1 md:pr-8' : 'md:pl-8'}`}
        initial={{ opacity: 0, x: reversed ? -30 : 30 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: reversed ? -30 : 30 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{title}</h3>
        <p className="text-blue-100/70 mb-6">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag, index) => (
            <span key={index} className={`px-3 py-1 rounded-full text-xs font-medium ${colorClasses.badge}`}>
              {tag}
            </span>
          ))}
        </div>
        
        <Link href={link}>
          <button className={`px-6 py-3 rounded-lg text-white ${colorClasses.button} transition-all duration-300 inline-flex items-center shadow-lg`}>
            <span>View Case Study</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </Link>
      </motion.div>
    </div>
  );
};

export default CaseStudy; 