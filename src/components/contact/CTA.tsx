'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiCalendar, FiArrowRight, FiBriefcase } from 'react-icons/fi';

const ContactCTA: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  
  const cardVariants = {
    initial: { 
      y: 0,
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
    },
    hover: { 
      y: -5,
      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
    }
  };
  
  const lineVariants = {
    initial: { width: 0 },
    hover: { width: '100%' }
  };

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        {/* Radial gradient */}
        <div className="absolute inset-0 bg-gradient-radial from-[#FD673A]/5 via-transparent to-transparent opacity-70 blur-3xl" />
        
        {/* Grid background */}
        <div 
          className="absolute inset-0 opacity-10" 
          style={{ 
            backgroundImage: 'linear-gradient(to right, rgba(253, 103, 58, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(99, 102, 241, 0.1) 1px, transparent 1px)',
            backgroundSize: '40px 40px'
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
              Ready to Get Started?
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-[#FD673A] to-blue-500 mx-auto rounded-full mb-6" />
          <p className="text-lg text-blue-100/70 max-w-2xl mx-auto">
            Choose the option that works best for you
          </p>
        </motion.div>
        
        {/* CTA Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Schedule Consultation Card */}
          <motion.div
            initial="initial"
            whileHover="hover"
            animate={hoveredCard === 'consultation' ? 'hover' : 'initial'}
            onMouseEnter={() => setHoveredCard('consultation')}
            onMouseLeave={() => setHoveredCard(null)}
            variants={cardVariants}
            className="relative overflow-hidden"
          >
            {/* Card background with glassmorphism */}
            <div className="absolute inset-0 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl" />
            
            {/* Card content */}
            <div className="relative z-10 p-6 md:p-8">
              <div className="mb-6">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#FD673A] to-blue-500 flex items-center justify-center mb-6">
                  <FiCalendar className="text-white text-2xl" />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-white">Schedule a Consultation</h3>
                <p className="text-blue-100/70">
                  Book a call with our team to discuss your project requirements and goals.
                </p>
              </div>
              
              {/* Animated line */}
              <motion.div 
                className="h-px bg-gradient-to-r from-[#FD673A] via-blue-400 to-[#FD673A] mb-6"
                variants={lineVariants}
              />
              
              <Link 
                href="/contact" 
                className="inline-flex items-center text-white font-medium group"
              >
                Schedule Now
                <motion.div
                  initial={{ x: 0, opacity: 0.5 }}
                  animate={hoveredCard === 'consultation' ? { x: 5, opacity: 1 } : { x: 0, opacity: 0.5 }}
                  transition={{ duration: 0.3 }}
                  className="ml-2"
                >
                  <FiArrowRight />
                </motion.div>
              </Link>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-radial from-[#FD673A]/20 to-transparent blur-xl" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-radial from-blue-500/20 to-transparent blur-xl" />
          </motion.div>
          
          {/* View Portfolio Card */}
          <motion.div
            initial="initial"
            whileHover="hover"
            animate={hoveredCard === 'portfolio' ? 'hover' : 'initial'}
            onMouseEnter={() => setHoveredCard('portfolio')}
            onMouseLeave={() => setHoveredCard(null)}
            variants={cardVariants}
            className="relative overflow-hidden"
          >
            {/* Card background with glassmorphism */}
            <div className="absolute inset-0 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl" />
            
            {/* Card content */}
            <div className="relative z-10 p-6 md:p-8">
              <div className="mb-6">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-[#FD673A] flex items-center justify-center mb-6">
                  <FiBriefcase className="text-white text-2xl" />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-white">View Our Portfolio</h3>
                <p className="text-blue-100/70">
                  Check out our previous work and successful projects we&apos;ve delivered.
                </p>
              </div>
              
              {/* Animated line */}
              <motion.div 
                className="h-px bg-gradient-to-r from-blue-400 via-[#FD673A] to-blue-400 mb-6"
                variants={lineVariants}
              />
              
              <Link 
                href="/works" 
                className="inline-flex items-center text-white font-medium group"
              >
                View Portfolio
                <motion.div
                  initial={{ x: 0, opacity: 0.5 }}
                  animate={hoveredCard === 'portfolio' ? { x: 5, opacity: 1 } : { x: 0, opacity: 0.5 }}
                  transition={{ duration: 0.3 }}
                  className="ml-2"
                >
                  <FiArrowRight />
                </motion.div>
              </Link>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-radial from-blue-500/20 to-transparent blur-xl" />
            <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-radial from-[#FD673A]/20 to-transparent blur-xl" />
          </motion.div>
        </div>
        
        {/* Testimonial Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mt-20 max-w-3xl mx-auto text-center"
        >
          <div className="relative">
            {/* Quote marks */}
            <div className="absolute -top-10 left-0 text-[#FD673A]/20 text-8xl font-serif">&quot;</div>
            <div className="absolute -bottom-20 right-0 text-[#FD673A]/20 text-8xl font-serif">&quot;</div>
            
            <p className="text-xl md:text-2xl text-blue-100/90 italic relative z-10">
              Working with this team was a game-changer for our business. Their attention to detail and creative solutions exceeded our expectations.
            </p>
          </div>
          
          <div className="mt-6 inline-flex items-center">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#FD673A] to-blue-500 mr-4"></div>
            <div className="text-left">
              <p className="font-medium text-white">Sarah Johnson</p>
              <p className="text-blue-100/70 text-sm">CEO, TechVision Inc.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCTA; 