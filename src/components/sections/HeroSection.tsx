'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

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
  const [isClient, setIsClient] = useState(false);
  
  // Mark client-side rendering and generate stars
  useEffect(() => {
    setIsClient(true);
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
      {/* Starfield background effect - Only render on client side */}
      {isClient && (
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
      )}

      {/* Abstract background shapes */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Gradient blob 1 - Updated with secondary color */}
        <div className="absolute -top-[10%] -right-[5%] w-[60%] h-[60%] rounded-full bg-gradient-radial from-blue-500/20 via-[#FD673A]/10 to-transparent blur-3xl transform rotate-12" />
        
        {/* Gradient blob 2 */}
        <div className="absolute -bottom-[20%] -left-[10%] w-[70%] h-[70%] rounded-full bg-gradient-radial from-blue-600/20 via-blue-800/10 to-transparent blur-3xl transform -rotate-12" />
        
        {/* Floating SVG shapes - Updated the first one with secondary color */}
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
            <path d="M42.2,-73.8C56.4,-68.5,70.7,-59.9,78.1,-47.1C85.5,-34.3,86,-17.1,84.7,-0.7C83.5,15.6,80.4,31.3,72.5,43.7C64.6,56.1,51.9,65.2,38.6,69.3C25.3,73.5,11.6,72.6,-1.4,74.8C-14.5,77.1,-28.9,82.6,-40.2,78.9C-51.5,75.2,-59.5,62.4,-65.9,49C-72.3,35.6,-77,21.8,-76.9,8.2C-76.8,-5.4,-71.8,-18.9,-65.4,-31.1C-59,-43.3,-51.2,-54.3,-40.6,-61.4C-30.1,-68.5,-16.8,-71.7,-1.5,-69.3C13.8,-66.9,27.9,-79.1,42.2,-73.8Z" transform="translate(100 100)" fill="#FD673A" />
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
              <span className="px-4 py-1.5 text-xs font-medium tracking-wider text-[#FD673A] uppercase bg-gradient-to-r from-[#FD673A]/20 to-blue-500/10 backdrop-blur-sm rounded-full border border-[#FD673A]/30 shadow-lg shadow-[#FD673A]/5">
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
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-[#FD673A] to-blue-300">
                  Future
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-[#FD673A]/20 to-blue-500/20 blur-xl z-0 rounded-lg"></span>
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
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#FD673A] to-blue-500 rounded-lg blur opacity-60 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse-slow"></div>
                <button className="relative px-8 py-4 font-medium text-white bg-[#0A0F2C] rounded-lg leading-none flex items-center">
                  <span>Let&apos;s Build Together</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </Link>

              <Link href="/works" className="group">
                <button className="px-8 py-4 text-[#FD673A] border border-[#FD673A]/30 rounded-lg relative overflow-hidden transition-all duration-500 bg-[#0A0F2C] hover:bg-[#FD673A]/10">
                  <span className="relative z-10">Our Work</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-[#FD673A]/0 via-[#FD673A]/10 to-[#FD673A]/0 opacity-0 group-hover:opacity-100 group-hover:animate-shine"></span>
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
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-violet-600/5 to-transparent backdrop-blur-[10px] rounded-full border border-white/10"></div>
              
              {/* Service Buttons in Circular Arrangement */}
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Center button with JeySol favicon */}
                <motion.div
                  className="absolute z-30"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="relative group cursor-pointer">
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#FD673A] to-blue-500 rounded-full opacity-70 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse-slow"></div>
                    <div className="relative w-28 h-28 bg-[#0A0F2C] rounded-full flex items-center justify-center overflow-hidden shadow-xl shadow-blue-900/20 border border-white/5">
                      <div className="relative w-16 h-16">
                        <Image 
                          src="/jeysol-logo.webp" 
                          alt="JeySol Logo" 
                          fill
                          className="object-contain"
                          priority
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Service buttons arranged in a circle */}
                {[0, 1, 2, 3, 4, 5].map((index) => {
                  // Calculate position on the circle
                  const angle = (index * (2 * Math.PI / 6)) - Math.PI/2; // Start from top position
                  const radius = 220; // Increased radius for more distance from center
                  const x = radius * Math.cos(angle);
                  const y = radius * Math.sin(angle);
                  
                  // Define icons for each position
                  const icons = [
                    // Web Design & Development
                    <svg key="web" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7 text-white">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
                    </svg>,
                    // Mobile App Design & Development
                    <svg key="mobile" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7 text-white">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                    </svg>,
                    // Software Development
                    <svg key="software" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7 text-white">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                    </svg>,
                    // UI/UX Design
                    <svg key="uiux" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7 text-white">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
                    </svg>,
                    // Graphics Design
                    <svg key="graphics" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7 text-white">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                    </svg>,
                    // Printing Solutions
                    <svg key="printing" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7 text-white">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0110.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0l.229 2.523a1.125 1.125 0 01-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0021 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 00-1.913-.247M6.34 18H5.25A2.25 2.25 0 013 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 011.913-.247m10.5 0a48.536 48.536 0 00-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5zm-3 0h.008v.008H15V10.5z" />
                    </svg>
                  ];

                  // Updated service names
                  const serviceNames = [
                    "Web Design & Development",
                    "Mobile App Design & Development",
                    "Software Development",
                    "UI/UX Design",
                    "Graphics Design", 
                    "Printing Solutions"
                  ];

                  // Service page paths
                  const servicePaths = [
                    "/services/web-development",
                    "/services/mobile-development",
                    "/services/software-development",
                    "/services/ui-ux-design",
                    "/services/graphics-design",
                    "/services/printing-solutions"
                  ];

                  return (
                    <motion.div
                      key={index}
                      className="absolute"
                      style={{ 
                        x, 
                        y,
                        zIndex: 20
                      }}
                      whileHover={{ scale: 1.08 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ 
                        opacity: 1, 
                        scale: 1,
                        transition: { delay: 1.2 + index * 0.1, duration: 0.5 } 
                      }}
                    >
                      <Link href={servicePaths[index]} className="relative cursor-pointer block">
                        {/* Modern button design */}
                        <div className="w-32 h-32 bg-[#0A0F2C] rounded-full shadow-xl flex flex-col items-center justify-center border-2 border-blue-500/30 hover:border-[#FD673A]/50 transition-colors duration-300">
                          {/* Inner circle for icon - reduced size */}
                          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500/20 to-[#FD673A]/20 flex items-center justify-center mt-3">
                            {/* Smaller icon */}
                            <div className="w-6 h-6 text-white">
                              {icons[index]}
                            </div>
                          </div>
                          
                          {/* Improved text label with more space */}
                          <div className="text-center px-3 flex-1 flex items-start my-3">
                            <span className="text-xs text-white font-medium block w-full leading-tight">
                              {serviceNames[index]}
                            </span>
                          </div>
                          
                          {/* Animated ring on hover */}
                          <motion.div 
                            className="absolute inset-0 rounded-full border-2 border-transparent"
                            whileHover={{ 
                              borderColor: ["rgba(59, 130, 246, 0.3)", "rgba(253, 103, 58, 0.5)", "rgba(59, 130, 246, 0.3)"] 
                            }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          />
                        </div>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/30 via-[#FD673A]/20 to-indigo-500/30 blur-3xl opacity-30 animate-pulse-slow"></div>

              {/* Connecting lines animation */}
              <svg className="absolute inset-0 w-full h-full z-10" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                {[0, 1, 2, 3, 4, 5].map((index) => {
                  // Calculate start and end points for the lines (from center to each button)
                  const angle = (index * (2 * Math.PI / 6)) - Math.PI/2;
                  const centerX = 250;
                  const centerY = 250;
                  const endX = centerX + (220 * Math.cos(angle));
                  const endY = centerY + (220 * Math.sin(angle));
                  
                  return (
                <motion.path
                      key={index}
                      d={`M ${centerX},${centerY} L ${endX},${endY}`}
                  stroke="url(#lineGradient)"
                  strokeWidth="1.5"
                      strokeDasharray="3,4"
                  fill="none"
                  initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 0.7 }}
                      transition={{ duration: 1, delay: 1.5 + (index * 0.1) }}
                />
                  );
                })}
                <defs>
                  <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.8" />
                    <stop offset="50%" stopColor="#FD673A" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#6366F1" stopOpacity="0.8" />
                  </linearGradient>
                </defs>
              </svg>
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
        <span className="text-[#FD673A]/80 text-sm mb-2 font-medium">Scroll to discover</span>
        <motion.div
          animate={{
            y: [0, 12, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop",
          }}
          className="w-6 h-10 rounded-full border-2 border-[#FD673A]/40 flex justify-center p-1 relative overflow-hidden group"
        >
          {/* Animated gradient background on hover */}
          <motion.div 
            className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-b from-[#FD673A]/0 via-[#FD673A]/30 to-[#FD673A]/0"
            animate={{
              y: ["-100%", "100%"],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear"
            }}
          />
          
          <motion.div 
            className="w-1.5 h-1.5 rounded-full bg-[#FD673A] relative z-10"
            animate={{
              y: [0, 16, 0],
              boxShadow: ["0 0 0px rgba(253, 103, 58, 0.3)", "0 0 8px rgba(253, 103, 58, 0.6)", "0 0 0px rgba(253, 103, 58, 0.3)"]
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