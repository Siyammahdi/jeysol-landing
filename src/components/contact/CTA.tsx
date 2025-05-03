'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const ContactCTA: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-[#080D24]">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        {/* Gradient blobs */}
        <div className="absolute top-0 left-1/3 w-2/3 h-2/3 bg-gradient-radial from-blue-900/10 via-blue-900/5 to-transparent blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-2/3 h-2/3 bg-gradient-radial from-indigo-900/10 via-indigo-900/5 to-transparent blur-3xl" />
        
        {/* Futuristic line pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 0 10 L 40 10 M 10 0 L 10 40" fill="none" stroke="rgba(99, 102, 241, 0.3)" strokeWidth="0.5" />
              </pattern>
              <linearGradient id="fade" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(59, 130, 246, 0.3)" />
                <stop offset="50%" stopColor="rgba(99, 102, 241, 0.15)" />
                <stop offset="100%" stopColor="rgba(139, 92, 246, 0.3)" />
              </linearGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
            <rect width="100%" height="100%" fill="url(#fade)" fillOpacity="0.1" />
          </svg>
        </div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* CTA Card */}
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.3 }}
            className="relative rounded-2xl overflow-hidden"
          >
            {/* Card background with glassmorphism */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 to-indigo-900/20 backdrop-blur-md border border-blue-500/10" />
            
            {/* Inner gradient glow */}
            <div className="absolute inset-0 bg-gradient-radial from-indigo-500/10 via-transparent to-transparent" />
            
            {/* Animated lines on hover */}
            <div className="absolute inset-0 overflow-hidden opacity-60">
              <motion.div 
                className="absolute inset-0"
                animate={{
                  background: isHovered
                    ? 'radial-gradient(circle at center, rgba(99, 102, 241, 0.2) 0%, transparent 70%)'
                    : 'radial-gradient(circle at center, rgba(99, 102, 241, 0) 0%, transparent 70%)'
                }}
                transition={{ duration: 1 }}
              />
              
              {/* Horizontal animated line */}
              <motion.div
                className="absolute top-0 left-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent"
                animate={{
                  width: isHovered ? '100%' : '0%',
                  opacity: isHovered ? 1 : 0
                }}
                transition={{ duration: 0.8 }}
              />
              
              {/* Vertical animated line */}
              <motion.div
                className="absolute top-0 right-0 w-[1px] bg-gradient-to-b from-transparent via-indigo-500 to-transparent"
                animate={{
                  height: isHovered ? '100%' : '0%',
                  opacity: isHovered ? 1 : 0
                }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
              
              {/* Bottom animated line */}
              <motion.div
                className="absolute bottom-0 right-0 h-[1px] bg-gradient-to-r from-blue-500 via-violet-500 to-transparent"
                animate={{
                  width: isHovered ? '100%' : '0%',
                  opacity: isHovered ? 1 : 0
                }}
                transition={{ duration: 0.8, delay: 0.4 }}
              />
              
              {/* Left animated line */}
              <motion.div
                className="absolute bottom-0 left-0 w-[1px] bg-gradient-to-t from-transparent via-violet-500 to-transparent"
                animate={{
                  height: isHovered ? '100%' : '0%',
                  opacity: isHovered ? 1 : 0
                }}
                transition={{ duration: 0.8, delay: 0.6 }}
              />
            </div>
            
            {/* Content container */}
            <div 
              className="relative z-10 p-8 md:p-12 text-center"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold mb-4 tracking-tight"
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-400">
                  Ready to Start Your Project?
                </span>
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-lg text-blue-100/70 max-w-2xl mx-auto mb-8"
              >
                Let's transform your vision into reality. Our team is ready to bring your ideas to life with cutting-edge technology and innovative design.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                {/* Primary CTA Button */}
                <Link href="#" className="relative">
                  <div className="group relative inline-flex overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#3b82f6_0%,#8b5cf6_50%,#3b82f6_100%)]" />
                    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-[#080D24] px-6 py-3 text-sm font-medium text-white backdrop-blur-3xl">
                      <span className="w-full flex items-center justify-center">
                        Schedule a Consultation
                        <motion.span
                          animate={{
                            x: isHovered ? 5 : 0
                          }}
                          transition={{ duration: 0.2 }}
                        >
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </motion.span>
                      </span>
                    </span>
                  </div>
                </Link>
                
                {/* Secondary CTA Button */}
                <Link 
                  href="/works" 
                  className="inline-block px-6 py-3 rounded-full border border-blue-500/30 text-blue-300 hover:text-blue-100 hover:border-blue-500/50 transition-colors duration-300"
                >
                  View Our Portfolio
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
        
        {/* Testimonial Quote - Extra Element */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center mt-16"
        >
          <div className="relative">
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-indigo-500 opacity-20">
              <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.13456 9H5.30789C4.93232 9 4.68218 9.38671 4.83302 9.72343L9.62322 20.2305C9.75823 20.5293 10.168 20.5811 10.3685 20.3301L14.8091 14.7422C14.9348 14.5791 14.8843 14.3437 14.7054 14.2422L9.13456 9Z" fill="currentColor"/>
                <path d="M18.8654 9H15.0388C14.6632 9 14.4131 9.38671 14.5639 9.72343L19.3541 20.2305C19.4891 20.5293 19.8989 20.5811 20.0994 20.3301L24.54 14.7422C24.6656 14.5791 24.6152 14.3437 24.4363 14.2422L18.8654 9Z" fill="currentColor"/>
              </svg>
            </div>
            
            <blockquote className="text-lg italic text-blue-100/80 mt-6">
              "The team at JeySol exceeded our expectations on every level. They took the time to understand our business needs and delivered a solution that has transformed our operations."
            </blockquote>
            
            <footer className="mt-4">
              <div className="flex items-center justify-center space-x-2">
                <div className="w-8 h-8 rounded-full overflow-hidden bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center">
                  <span className="text-white text-xs font-bold">JM</span>
                </div>
                <span className="text-blue-100">Jonathan Miller, CEO at TechFlow</span>
              </div>
            </footer>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCTA; 