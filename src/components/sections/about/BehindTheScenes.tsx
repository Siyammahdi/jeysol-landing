'use client';

import React, { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { galleryImages } from '@/lib/mock-team';

const BehindTheScenes: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const y1 = useTransform(scrollYProgress, [0, 1], ['0%', '10%']);
  const y2 = useTransform(scrollYProgress, [0, 1], ['0%', '-5%']);
  
  return (
    <section 
      ref={sectionRef}
      id="behind-the-scenes"
      className="py-20 md:py-28 bg-gradient-to-b from-[#0F172A] to-[#0A0F2C] text-white relative overflow-hidden"
    >
      {/* Subtle background gradient */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-0 left-1/3 w-64 h-64 rounded-full bg-blue-500 mix-blend-screen filter blur-[100px]"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-indigo-500 mix-blend-screen filter blur-[120px]"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-4"
          >
            <span className="px-4 py-1.5 text-xs font-medium tracking-wider text-blue-300 uppercase bg-gradient-to-r from-blue-500/20 to-indigo-500/10 backdrop-blur-sm rounded-full border border-blue-500/30 shadow-lg shadow-blue-500/5">
              Behind The Scenes
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold mb-4 text-white"
          >
            Our Culture & Workspace
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-2xl mx-auto text-blue-100/60 text-lg"
          >
            A glimpse into our daily life, team events, and creative environment
          </motion.p>
        </div>
        
        {/* Masonry Gallery */}
        <div className="mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {galleryImages.map((image, index) => {
              // Determine span and transform values for each image
              const isWide = image.aspectRatio === 'wide';
              const isTall = image.aspectRatio === 'tall';
              const transformY = index % 2 === 0 ? y1 : y2;
              
              return (
                <motion.div
                  key={image.id}
                  className={`relative overflow-hidden rounded-xl group
                    ${isWide ? 'md:col-span-2' : ''}
                    ${isTall ? 'row-span-2' : ''}
                  `}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  style={{ y: transformY }}
                >
                  {/* Image */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src={image.imageUrl}
                      alt={image.caption}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Caption */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-white text-sm md:text-base font-medium drop-shadow-md">
                        {image.caption}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
        
        {/* Quote about company culture */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 md:mt-20 text-center max-w-4xl mx-auto"
        >
          <div className="relative">
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-blue-400 opacity-20">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 11C10 13.2091 8.20914 15 6 15C3.79086 15 2 13.2091 2 11C2 8.79086 3.79086 7 6 7C8.20914 7 10 8.79086 10 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M22 11C22 13.2091 20.2091 15 18 15C15.7909 15 14 13.2091 14 11C14 8.79086 15.7909 7 18 7C20.2091 7 22 8.79086 22 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M6 15L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M18 15L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 17L12 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            
            <blockquote className="text-xl md:text-2xl font-light italic text-blue-100">
              &quot;Our team culture is the foundation of everything we build. We believe that when talented people feel valued, supported, and inspired, they create exceptional work.&quot;
            </blockquote>
            
            <footer className="mt-6">
              <div className="flex items-center justify-center space-x-4">
                <div className="w-12 h-12 rounded-full overflow-hidden relative">
                  <Image 
                    src="/about/alex.jpg" 
                    alt="Alex Johnson" 
                    fill 
                    className="object-cover"
                  />
                </div>
                <div className="text-left">
                  <p className="font-medium text-white">Alex Johnson</p>
                  <p className="text-blue-300/60 text-sm">CEO & Founder</p>
                </div>
              </div>
            </footer>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BehindTheScenes; 