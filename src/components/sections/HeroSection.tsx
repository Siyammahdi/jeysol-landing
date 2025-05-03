'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';

interface Star {
  id: number;
  size: number;
  x: number;
  y: number;
  duration: number;
  delay: number;
}

const HeroSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [stars, setStars] = useState<Star[]>([]);
  
  // Generate stars only on the client side to avoid hydration errors
  useEffect(() => {
    const generatedStars = Array.from({ length: 50 }).map((_, i) => ({
      id: i,
      size: Math.random() * 3 + 1,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 5,
    }));
    setStars(generatedStars);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section 
      ref={sectionRef}
      className="relative flex items-center justify-center min-h-screen overflow-hidden bg-[#0A0F2C]"
    >
      {/* Starfield background effect */}
      <div className="absolute inset-0 z-0">
        {stars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute rounded-full bg-white"
            style={{
              width: star.size,
              height: star.size,
              left: `${star.x}%`,
              top: `${star.y}%`,
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: star.duration,
              repeat: Infinity,
              delay: star.delay,
            }}
          />
        ))}
      </div>

      {/* Abstract background shapes */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Gradient blob 1 */}
        <div className="absolute -top-[10%] -right-[5%] w-[60%] h-[60%] rounded-full bg-gradient-radial from-blue-500/20 via-blue-600/10 to-transparent blur-3xl transform rotate-12" />
        
        {/* Gradient blob 2 */}
        <div className="absolute -bottom-[20%] -left-[10%] w-[70%] h-[70%] rounded-full bg-gradient-radial from-purple-600/20 via-violet-600/10 to-transparent blur-3xl transform -rotate-12" />
        
        {/* Floating SVG shapes */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-[15%] right-[30%] opacity-20"
        >
          <svg width="400" height="400" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M42.2,-73.8C56.4,-68.5,70.7,-59.9,78.1,-47.1C85.5,-34.3,86,-17.1,84.7,-0.7C83.5,15.6,80.4,31.3,72.5,43.7C64.6,56.1,51.9,65.2,38.6,69.3C25.3,73.5,11.6,72.6,-1.4,74.8C-14.5,77.1,-28.9,82.6,-40.2,78.9C-51.5,75.2,-59.5,62.4,-65.9,49C-72.3,35.6,-77,21.8,-76.9,8.2C-76.8,-5.4,-71.8,-18.9,-65.4,-31.1C-59,-43.3,-51.2,-54.3,-40.6,-61.4C-30.1,-68.5,-16.8,-71.7,-1.5,-69.3C13.8,-66.9,27.9,-79.1,42.2,-73.8Z" transform="translate(100 100)" fill="#14B8A6" />
          </svg>
        </motion.div>
        
        <motion.div
          animate={{
            y: [0, 30, 0],
            rotate: [0, -8, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-[20%] left-[20%] opacity-20"
        >
          <svg width="500" height="500" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M39.5,-67.3C52.2,-61.3,64.6,-53.3,74.3,-41.9C84,-30.5,91.1,-15.3,90.2,-0.5C89.3,14.2,80.5,28.4,70.6,40.9C60.7,53.4,49.9,64.1,37.1,70.3C24.4,76.5,9.7,78.3,-5.1,76.7C-19.9,75.1,-34.7,70.1,-47.7,61.5C-60.6,53,-71.7,40.9,-77.6,26.6C-83.6,12.3,-84.4,-4.2,-80.5,-19.1C-76.6,-34.1,-68,-47.5,-55.9,-53.9C-43.8,-60.3,-28.2,-59.7,-14.1,-59.9C0,-60.2,12.6,-61.2,23.4,-64.5C34.2,-67.8,43.3,-73.4,39.5,-67.3Z" transform="translate(100 100)" fill="#3B82F6" />
          </svg>
        </motion.div>
      </div>

      {/* Subtle radial gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-[#0A0F2C]/40 to-[#0A0F2C] z-10" />

      {/* Main content container with glassmorphism */}
      <motion.div 
        style={{ y, opacity }}
        className="container relative mx-auto px-4 md:px-6 z-20 py-12 md:py-0"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left side content */}
          <div className="flex flex-col space-y-8 max-w-2xl">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="inline-block"
            >
              <span className="px-4 py-1.5 text-xs font-medium tracking-wider text-teal-300 uppercase bg-gradient-to-r from-teal-500/20 to-blue-500/10 backdrop-blur-sm rounded-full border border-teal-500/30 shadow-lg shadow-teal-500/5">
                Cutting-edge Software Solutions
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white leading-tight"
            >
              We Engineer the 
              <span className="relative inline-block px-2">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-violet-400 to-teal-400">
                  Future
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-violet-600/20 to-teal-600/20 blur-xl z-0 rounded-lg"></span>
              </span>
              of Digital Innovation
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-lg md:text-xl text-blue-100/80 max-w-xl font-light"
            >
              Transforming complex challenges into elegant software solutions that drive business growth and technological advancement.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex flex-wrap gap-5"
            >
              <Link href="#contact" className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-violet-600 rounded-lg blur opacity-60 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse-slow"></div>
                <button className="relative px-8 py-4 font-medium text-white bg-[#0A0F2C] rounded-lg leading-none flex items-center">
                  <span>Let&apos;s Build Together</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </Link>

              <Link href="/works" className="group">
                <button className="px-8 py-4 text-blue-100 border border-blue-500/30 rounded-lg relative overflow-hidden transition-all duration-500 bg-[#0A0F2C] hover:bg-blue-900/10">
                  <span className="relative z-10">Our Work</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-blue-500/0 opacity-0 group-hover:opacity-100 group-hover:animate-shine"></span>
                </button>
              </Link>
            </motion.div>
          </div>

          {/* Right side visual with testimonial card overlay */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9, duration: 1.2, ease: "easeOut" }}
            className="hidden lg:flex justify-center items-center relative"
          >
            <div className="relative w-full max-w-[600px] aspect-square">
              {/* Main visual container with glassmorphism */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-violet-600/5 to-transparent backdrop-blur-[2px] rounded-full border border-white/10"></div>
              
              {/* Floating 3D geometric shapes */}
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  rotateZ: [0, 10, 0],
                  rotateX: [0, 10, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                className="absolute top-[20%] left-[25%] w-40 h-40"
              >
                <div className="w-full h-full relative">
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-blue-400 rounded-2xl opacity-80 transform rotate-6 translate-z-10"></div>
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-blue-400 rounded-2xl border border-blue-300/30 shadow-xl shadow-blue-500/20 backdrop-blur-sm flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-14 h-14 text-white">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
                    </svg>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{
                  y: [0, 20, 0],
                  rotateZ: [0, -5, 0],
                  rotateY: [0, 15, 0],
                }}
                transition={{
                  duration: 9,
                  delay: 0.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                className="absolute bottom-[15%] right-[15%] w-32 h-32"
              >
                <div className="w-full h-full relative">
                  <div className="absolute inset-0 bg-gradient-to-tr from-violet-600 to-purple-400 rounded-full opacity-80 transform -rotate-6 translate-z-10"></div>
                  <div className="absolute inset-0 bg-gradient-to-tr from-violet-600 to-purple-400 rounded-full border border-purple-300/30 shadow-xl shadow-purple-500/20 backdrop-blur-sm flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12 text-white">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                    </svg>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{
                  y: [0, -15, 0],
                  rotateZ: [0, 8, 0],
                  rotateX: [0, -10, 0],
                }}
                transition={{
                  duration: 7,
                  delay: 1,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                className="absolute bottom-[35%] left-[20%] w-36 h-36"
              >
                <div className="w-full h-full relative">
                  <div className="absolute inset-0 bg-gradient-to-tr from-teal-600 to-teal-400 rounded-lg opacity-80 transform rotate-12 translate-z-10"></div>
                  <div className="absolute inset-0 bg-gradient-to-tr from-teal-600 to-teal-400 rounded-lg border border-teal-300/30 shadow-xl shadow-teal-500/20 backdrop-blur-sm flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-14 h-14 text-white">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                    </svg>
                  </div>
                </div>
              </motion.div>

              {/* Connecting lines animation */}
              <svg className="absolute inset-0 w-full h-full z-10" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                <motion.path
                  d="M 170,180 L 320,160 L 220,320 Z"
                  stroke="url(#lineGradient)"
                  strokeWidth="1.5"
                  strokeDasharray="5,5"
                  fill="none"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.6 }}
                  transition={{ duration: 2, delay: 1.5 }}
                />
                <defs>
                  <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.7" />
                    <stop offset="100%" stopColor="#14B8A6" stopOpacity="0.7" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/30 via-violet-500/10 to-teal-500/20 blur-3xl opacity-30 animate-pulse-slow"></div>
              
              {/* Client Testimonial Card overlaid on the visualization */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="absolute z-20 left-0 right-0 top-1/2 transform -translate-y-1/2 max-w-sm mx-auto"
              >
                <div className="relative bg-gradient-to-br from-blue-900/60 to-violet-900/60 backdrop-blur-md rounded-xl overflow-hidden border border-blue-500/20 shadow-xl p-5">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-blue-600/10 rounded-full blur-3xl -z-10 transform translate-x-10 -translate-y-10"></div>
                  <div className="absolute bottom-0 left-0 w-40 h-40 bg-violet-600/10 rounded-full blur-3xl -z-10 transform -translate-x-10 translate-y-10"></div>
                  
                  {/* Quotation mark */}
                  <div className="absolute -top-4 -left-4 text-blue-500/20 text-7xl font-serif">❝</div>
                  
                  {/* Star Rating */}
                  <div className="flex space-x-1 mb-3">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg 
                        key={star}
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-4 w-4 text-yellow-400" 
                        viewBox="0 0 20 20" 
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  
                  {/* Review Text */}
                  <p className="text-blue-100 mb-4 text-sm">
                    &quot;JeySol transformed our digital experience with their innovative approach. Their team exceeded expectations with solutions we hadn&apos;t even considered.&quot;
                  </p>
                  
                  {/* Client Info */}
                  <div className="flex items-center">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-blue-400/50 mr-3">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-violet-500 opacity-80"></div>
                      <div className="absolute inset-0 flex items-center justify-center text-white font-medium text-sm">SM</div>
                    </div>
                    <div>
                      <h4 className="font-medium text-white text-sm">Sarah Mitchell</h4>
                      <p className="text-blue-300 text-xs">CTO, TechVision Inc.</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-30"
      >
        <span className="text-blue-200 text-sm mb-2 opacity-70">Scroll to discover</span>
        <motion.div
          animate={{
            y: [0, 12, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop",
          }}
          className="w-6 h-10 rounded-full border-2 border-blue-300/30 flex justify-center p-1"
        >
          <motion.div 
            className="w-1.5 h-1.5 rounded-full bg-blue-400"
            animate={{
              y: [0, 16, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection; 