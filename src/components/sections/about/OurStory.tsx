'use client';

import React, { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

const OurStory: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const y1 = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const y2 = useTransform(scrollYProgress, [0, 1], ['0%', '-15%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.4, 1, 0.4]);
  
  return (
    <section 
      ref={sectionRef}
      id="our-story"
      className="relative py-20 md:py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-[#080D24] to-[#0A0F2C] text-white"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Subtle blurred circles */}
        <div className="absolute top-1/3 -right-24 w-96 h-96 bg-blue-500/10 rounded-full filter blur-[80px] opacity-70"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full filter blur-[100px] opacity-60"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content Column */}
          <div className="order-2 lg:order-1">
            {/* Section Label */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
              transition={{ duration: 0.6 }}
              className="inline-block mb-6"
            >
              <span className="px-4 py-1.5 text-xs font-medium tracking-wider text-blue-300 uppercase bg-gradient-to-r from-blue-500/20 to-indigo-500/10 backdrop-blur-sm rounded-full border border-blue-500/30 shadow-lg shadow-blue-500/5">
                Our Story
              </span>
            </motion.div>
            
            {/* Main Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold mb-6 text-white"
            >
              From Startup to Industry Leader
            </motion.h2>
            
            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4 text-lg text-blue-100/70"
            >
              <p>
                JeySol began in 2016 as a small team of passionate designers and developers working out of a shared office space. Our founders, Alex Johnson and Maya Rodriguez, believed there was a better way to create digital experiences that truly served people's needs.
              </p>
              <p>
                What started as a boutique web design agency quickly evolved into a full-service digital solutions provider as we expanded our expertise and client base. By 2019, we had established an international presence with clients spanning three continents.
              </p>
              <p>
                The pandemic accelerated our transition to a remote-first organization, allowing us to attract top talent regardless of geography. Today, our team of 50+ professionals creates innovative solutions for clients worldwide, maintaining the same passion and attention to detail that defined our beginnings.
              </p>
            </motion.div>
            
            {/* Founder Quote */}
            <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 pl-4 border-l-2 border-blue-500 italic text-blue-100"
            >
              "We founded JeySol with the belief that technology should amplify human potential, not replace it. That principle still guides everything we do today."
              <footer className="mt-2 text-blue-300/70 not-italic text-sm">
                — Alex Johnson, Founder & CEO
              </footer>
            </motion.blockquote>
          </div>
          
          {/* Image Column with Floating Elements */}
          <motion.div 
            className="order-1 lg:order-2 relative"
            style={{ opacity }}
          >
            {/* Main Image with Frame */}
            <motion.div
              className="relative z-10 rounded-2xl overflow-hidden border-2 border-white/10 shadow-xl shadow-blue-900/10"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8 }}
            >
              <div className="aspect-[4/3] relative">
                <Image
                  src="/about/team-growth.jpg"
                  alt="JeySol team growth through the years"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <p className="text-sm font-medium">Team Growth: 2016 vs 2023</p>
              </div>
            </motion.div>
            
            {/* Floating Element 1 - Key Stats Card */}
            <motion.div
              className="absolute top-10 -right-10 z-20 bg-gradient-to-br from-blue-900/80 to-indigo-900/80 backdrop-blur-md rounded-lg p-4 shadow-xl shadow-blue-900/20 border border-white/10 w-32 md:w-40"
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              style={{ y: y1 }}
            >
              <div className="text-center">
                <p className="text-xs text-blue-300/80 uppercase tracking-wider">Growth</p>
                <div className="flex justify-center items-end my-1 gap-1">
                  <span className="text-3xl font-bold text-white">10x</span>
                </div>
                <p className="text-xs text-blue-200/70">Since founding</p>
              </div>
            </motion.div>
            
            {/* Floating Element 2 - Year Label */}
            <motion.div
              className="absolute -bottom-5 -left-5 z-20 bg-gradient-to-br from-indigo-600 to-blue-700 rounded-full h-16 w-16 flex items-center justify-center shadow-lg shadow-blue-600/20"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              style={{ y: y2 }}
            >
              <div className="text-center">
                <span className="text-lg font-bold text-white">7+</span>
                <p className="text-xs text-white/80">Years</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurStory; 