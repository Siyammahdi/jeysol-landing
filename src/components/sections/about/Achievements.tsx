'use client';

import React, { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { milestones } from '@/lib/mock-team';

const Achievements: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  // Parallax line movement
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  
  return (
    <section 
      ref={sectionRef}
      id="achievements"
      className="py-20 md:py-24 bg-gradient-to-b from-[#090E28] to-[#0F172A] text-white relative overflow-hidden"
    >
      {/* Background accents */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#0A0F2C]/50 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0F172A]/50 to-transparent"></div>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-blue-500 filter blur-[100px]"></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 rounded-full bg-[#FD673A] filter blur-[120px]"></div>
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
            <span className="px-4 py-1.5 text-xs font-medium tracking-wider text-blue-300 uppercase bg-gradient-to-r from-blue-500/20 to-[#FD673A]/10 backdrop-blur-sm rounded-full border border-blue-500/30 shadow-lg shadow-blue-500/5">
              Our Journey
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold mb-4 text-white"
          >
            Key Milestones & Achievements
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-2xl mx-auto text-blue-100/60 text-lg"
          >
            The story of our growth and key moments that shaped who we are today
          </motion.p>
        </div>
        
        {/* Timeline */}
        <div className="relative mt-20">
          {/* Vertical Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500/10 via-blue-400/30 to-[#FD673A]/10"></div>
          
          {/* Animated progress line */}
          <motion.div 
            className="absolute left-1/2 transform -translate-x-1/2 top-0 w-0.5 bg-gradient-to-b from-blue-400 to-[#FD673A] origin-top"
            style={{ height: lineHeight }}
          ></motion.div>
          
          {/* Timeline Events */}
          <div className="relative z-10">
            {milestones.map((milestone, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={milestone.id}
                  className={`relative mb-12 md:mb-16 flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                >
                  {/* Year Marker */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 md:static md:transform-none flex-none md:w-[15%] flex items-center justify-center">
                    <div className={`
                      w-10 h-10 md:w-16 md:h-16 rounded-full 
                      flex items-center justify-center font-bold 
                      ${milestone.isKeyEvent 
                        ? 'bg-gradient-to-br from-blue-500 to-[#FD673A] text-white shadow-lg shadow-blue-500/20' 
                        : 'bg-gradient-to-br from-slate-800 to-slate-900 text-blue-300 border border-slate-700'}
                    `}>
                      {milestone.year}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className={`
                    mt-12 md:mt-0 md:w-[35%] 
                    ${isEven ? 'md:pr-8 md:text-right' : 'md:pl-8'}
                  `}>
                    <div className={`
                      p-6 rounded-xl bg-gradient-to-br 
                      ${milestone.isKeyEvent 
                        ? 'from-blue-500/10 to-[#FD673A]/5 border border-blue-500/20' 
                        : 'from-slate-800/30 to-slate-900/20 border border-slate-700/30'}
                      hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300
                    `}>
                      <h3 className="text-xl font-semibold mb-2 text-white">
                        {milestone.title}
                      </h3>
                      <p className="text-blue-100/70">{milestone.description}</p>
                    </div>
                  </div>
                  
                  {/* Spacing for opposite side */}
                  <div className="hidden md:block md:w-[35%]"></div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements; 