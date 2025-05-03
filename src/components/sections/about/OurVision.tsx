'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

interface Star {
  id: number;
  size: number;
  x: number;
  y: number;
  duration: number;
  delay: number;
}

const OurVision: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const isTextInView = useInView(textRef, { once: true, amount: 0.5 });
  const [stars, setStars] = useState<Star[]>([]);
  
  // Generate stars only on the client side to avoid hydration errors
  useEffect(() => {
    const generatedStars = Array.from({ length: 50 }).map((_, i) => ({
      id: i,
      size: Math.random() * 2 + 1,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 5,
    }));
    setStars(generatedStars);
  }, []);
  
  // Parallax effects for the background
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const y1 = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const y2 = useTransform(scrollYProgress, [0, 1], ['0%', '-15%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
  
  return (
    <section 
      id="vision"
      ref={sectionRef}
      className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-[#080D24] py-20 md:py-24"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Ambient Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F2C] via-[#080D24] to-[#0A0F2C] opacity-90"></div>
        
        {/* 3D Animated Stars Background - Client-side only rendering */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-30">
            {stars.map((star) => (
              <motion.div
                key={star.id}
                className="absolute rounded-full bg-white"
                style={{
                  width: `${star.size}px`,
                  height: `${star.size}px`,
                  left: `${star.x}%`,
                  top: `${star.y}%`,
                }}
                animate={{
                  opacity: [0.2, 0.8, 0.2],
                  scale: [1, 1.2, 1],
                  z: [0, 100, 0], // 3D effect
                }}
                transition={{
                  duration: star.duration,
                  repeat: Infinity,
                  delay: star.delay,
                }}
              />
            ))}
          </div>
        </div>
        
        {/* Horizontal parallax layers */}
        <motion.div
          style={{ y: y1 }}
          className="absolute bottom-0 left-0 right-0 h-[60%] z-1"
        >
          <svg
            viewBox="0 0 1440 320"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute bottom-0 left-0 right-0 w-full opacity-20"
            preserveAspectRatio="none"
          >
            <path
              d="M0,192L48,170.7C96,149,192,107,288,101.3C384,96,480,128,576,138.7C672,149,768,139,864,144C960,149,1056,171,1152,176C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              fill="url(#horizon-gradient)"
            />
            <defs>
              <linearGradient id="horizon-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.1" />
                <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#14B8A6" stopOpacity="0.1" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>
        
        <motion.div
          style={{ y: y2 }}
          className="absolute bottom-0 left-0 right-0 h-[40%] z-2"
        >
          <svg
            viewBox="0 0 1440 320"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute bottom-0 left-0 right-0 w-full opacity-10"
            preserveAspectRatio="none"
          >
            <path
              d="M0,96L48,90.7C96,85,192,75,288,85.3C384,96,480,128,576,154.7C672,181,768,203,864,202.7C960,203,1056,181,1152,154.7C1248,128,1344,96,1392,80L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              fill="url(#horizon-gradient-2)"
            />
            <defs>
              <linearGradient id="horizon-gradient-2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#14B8A6" stopOpacity="0.1" />
                <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.1" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>
      </div>
      
      {/* Content Container */}
      <motion.div
        className="container mx-auto px-4 md:px-6 relative z-10 text-center"
        style={{ opacity }}
      >
        <div ref={textRef} className="max-w-4xl mx-auto">
          {/* Section Label */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isTextInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="inline-block mb-6"
          >
            <span className="px-4 py-1.5 text-xs font-medium tracking-wider text-blue-300 uppercase bg-gradient-to-r from-blue-500/20 to-indigo-500/10 backdrop-blur-sm rounded-full border border-blue-500/30 shadow-lg shadow-blue-500/5">
              Our Vision
            </span>
          </motion.div>
          
          {/* Main Vision Text */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isTextInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight"
          >
            To <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">transform</span> how the world builds technology by merging <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">human creativity</span> with <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-teal-400">technical excellence</span>
          </motion.h2>
          
          {/* Supporting Text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isTextInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-blue-100/60 max-w-3xl mx-auto font-light"
          >
            We envision a future where technology seamlessly enhances human capabilities,
            where digital experiences feel intuitive and natural, and where innovation is accessible to all.
          </motion.p>
          
          {/* Signature Flourish */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isTextInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-12"
          >
            <div className="inline-block">
              <svg width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-blue-400 opacity-70">
                <path d="M10,20 Q30,5 50,20 T90,20" stroke="currentColor" strokeWidth="1" fill="none" />
                <circle cx="10" cy="20" r="2" fill="currentColor" />
                <circle cx="110" cy="20" r="2" fill="currentColor" />
              </svg>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default OurVision; 