'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { contactMethods, ContactMethod } from '@/lib/contactConfig';
import { FiMail, FiMessageSquare, FiPhone, FiClock } from 'react-icons/fi';

const ContactMethods: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  
  return (
    <section className="relative py-24 bg-[#0A0F2C] overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        {/* Subtle radial gradient */}
        <div className="absolute inset-0 bg-gradient-radial from-[#0A0F2C] via-[#0A0F2C] to-[#080D24] opacity-60" />
        
        {/* Tech grid background texture */}
        <div 
          className="absolute inset-0 opacity-30" 
          style={{ 
            backgroundImage: 'radial-gradient(circle, rgba(99, 102, 241, 0.1) 1px, transparent 1px)', 
            backgroundSize: '30px 30px' 
          }}
        />
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-[#FD673A] to-blue-400">
              Get in Touch
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-[#FD673A] to-blue-500 mx-auto rounded-full mb-6" />
          <p className="text-lg text-blue-100/70 max-w-2xl mx-auto">
            Choose the best way to connect with our team
          </p>
        </motion.div>
        
        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {contactMethods.map((method, index) => (
            <ContactMethodCard 
              key={method.id}
              method={method}
              index={index}
              isHovered={hoveredCard === method.id}
              onHover={(id) => setHoveredCard(id)}
              onLeave={() => setHoveredCard(null)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface ContactMethodCardProps {
  method: ContactMethod;
  index: number;
  isHovered: boolean;
  onHover: (id: string) => void;
  onLeave: () => void;
}

const ContactMethodCard: React.FC<ContactMethodCardProps> = ({ 
  method, 
  index,
  isHovered,
  onHover,
  onLeave
}) => {
  const Icon = method.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1]
      }}
      viewport={{ once: true, amount: 0.3 }}
      onMouseEnter={() => onHover(method.id)}
      onMouseLeave={onLeave}
      className="group relative overflow-hidden rounded-2xl h-full"
    >
      {/* Card background with glassmorphism */}
      <div 
        className={`
          absolute inset-0 transition-all duration-500 
          backdrop-blur-lg
          ${isHovered
            ? 'bg-gradient-to-br from-indigo-900/50 to-blue-900/40 border border-indigo-400/20' 
            : 'bg-gradient-to-br from-indigo-900/30 to-blue-900/20 border border-indigo-500/10'
          }
        `}
      />
      
      {/* Hover background glow effect */}
      <motion.div 
        className="absolute inset-0 opacity-0 bg-gradient-to-br rounded-2xl"
        style={{ backgroundImage: `linear-gradient(to bottom right, ${method.gradient.split(' ')[1]}40, ${method.gradient.split(' ')[3]}20)` }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Content container */}
      <div className="relative z-10 p-6 md:p-8 h-full flex flex-col">
        {/* Icon */}
        <motion.div
          animate={{ 
            y: isHovered ? -5 : 0,
            scale: isHovered ? 1.1 : 1
          }}
          transition={{ duration: 0.3 }}
          className={`mb-5 text-white w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br ${method.gradient} shadow-lg`}
        >
          <Icon size={24} />
        </motion.div>
        
        {/* Title */}
        <motion.h3
          animate={{ y: isHovered ? -2 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-xl font-semibold text-white mb-2"
        >
          {method.title}
        </motion.h3>
        
        {/* Description */}
        <p className="text-blue-100/70 mb-6 text-sm">
          {method.description}
        </p>
        
        {/* Primary action */}
        <div className="mt-auto">
          <Link 
            href={method.primaryAction.href}
            className="block text-base font-medium text-blue-300 hover:text-blue-200 transition-colors"
          >
            {method.primaryAction.label}
          </Link>
          
          {/* Secondary action if available */}
          {method.secondaryAction && (
            <motion.div
              animate={{ 
                opacity: isHovered ? 1 : 0,
                y: isHovered ? 0 : 10
              }}
              transition={{ duration: 0.3 }}
            >
              <Link 
                href={method.secondaryAction.href}
                className="inline-flex items-center mt-3 text-sm font-medium text-indigo-300 hover:text-indigo-200 transition-colors"
              >
                {method.secondaryAction.label}
                <svg 
                  className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>
          )}
          
          {/* Response time */}
          <motion.p
            animate={{ 
              opacity: isHovered ? 1 : 0.6,
            }}
            transition={{ duration: 0.3 }}
            className="mt-3 text-xs text-blue-200/50"
          >
            {method.responseTime}
          </motion.p>
        </div>
        
        {/* Highlight line animation */}
        <motion.div
          className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r rounded-full"
          style={{ backgroundImage: `linear-gradient(to right, ${method.gradient.split(' ')[1]}, ${method.gradient.split(' ')[3]})` }}
          initial={{ width: 0 }}
          animate={{ width: isHovered ? '100%' : '0%' }}
          transition={{ duration: 0.4 }}
        />
      </div>
    </motion.div>
  );
};

export default ContactMethods; 