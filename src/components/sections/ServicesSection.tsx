'use client';

import React, { useRef, useState, useEffect, useCallback, useMemo } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import ServiceCard from '@/components/ui/ServiceCard';
import { serviceData } from '@/data/services';

interface Star {
  id: number;
  size: number;
  x: number;
  y: number;
  opacity: number;
  duration: number;
  delay: number;
}

const ServicesSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [stars, setStars] = useState<Star[]>([]);
  const [hoveredCardIndex, setHoveredCardIndex] = useState<number | null>(null);
  const lastMouseMoveRef = useRef<number>(0);
  const [isClient, setIsClient] = useState(false);
  
  // Move star generation to useEffect for client-side only
  useEffect(() => {
    setIsClient(true);
    // Reduce the number of stars for better performance (50 instead of 100)
    const generatedStars = Array.from({ length: 50 }).map((_, i) => ({
      id: i,
      size: Math.random() * 2 + 0.5,
      x: Math.random() * 100,
      y: Math.random() * 100,
      opacity: Math.random() * 0.7 + 0.3,
      duration: Math.random() * 10 + 20,
      delay: Math.random() * 5,
    }));
    setStars(generatedStars);
  }, []);
  
  // Handle mouse move for interactive parallax effect with manual throttling (every 16ms ~ 60fps)
  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isClient) return;
    
    const now = Date.now();
    // Throttle to 60fps (16ms)
    if (now - lastMouseMoveRef.current < 16) {
      return;
    }
    
    lastMouseMoveRef.current = now;
    const { clientX, clientY } = e;
    const rect = sectionRef.current?.getBoundingClientRect();
    
    if (rect) {
      // Calculate the mouse position relative to the section
      const x = clientX - rect.left;
      const y = clientY - rect.top;
      mouseX.set(x / rect.width - 0.5);  // Normalize to -0.5 to 0.5
      mouseY.set(y / rect.height - 0.5); // Normalize to -0.5 to 0.5
    }
  }, [mouseX, mouseY, isClient]);
  
  // Smooth spring effects for mouse movement - reduce stiffness for smoother animation
  const springConfig = { damping: 30, stiffness: 150 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  // We'll still use smoothMouseY for potential future interactions
  const smoothMouseY = useSpring(mouseY, springConfig); 
  
  // Scroll-based parallax - optimize by using once: true where possible
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  // Parallax effect for different layers
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const midY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const foreY = useTransform(scrollYProgress, [0, 1], ['0%', '10%']);
  
  // Rotate and scale for background shapes
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 20]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -15]);
  const rotate3 = useTransform(scrollYProgress, [0, 1], [0, 30]);
  const scale1 = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 1.2]);
  
  // Title animation
  const titleY = useTransform(scrollYProgress, [0, 0.2], ['50px', '0px']);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  
  // Memoize the card animation variants to prevent recreation on every render
  const cardAnimationVariants = useMemo(() => ({
    visible: {
      transition: {
        staggerChildren: 0.1,
      }
    },
    hidden: {}
  }), []);

  // Callback for updating hovered card index
  const setHovered = useCallback((index: number | null) => {
    setHoveredCardIndex(index);
  }, []);
  
  return (
    <motion.section
      id="services"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative py-32 lg:py-48 overflow-hidden bg-[#0A0F2C] tech-grid-bg"
    >
      {/* Deep background layer - Starfield - Optimize by rendering fewer stars */}
      {isClient && (
        <div className="absolute inset-0 z-0">
          <motion.div
            style={{ y: bgY }}
            className="absolute inset-0 w-full h-full"
          >
            {stars.map((star) => (
              <motion.div
                key={star.id}
                className="absolute rounded-full bg-white"
                style={{
                  width: star.size,
                  height: star.size,
                  left: `${star.x}%`,
                  top: `${star.y}%`,
                  opacity: star.opacity,
                  willChange: 'opacity, transform',
                }}
                animate={{
                  opacity: [star.opacity, star.opacity * 0.3, star.opacity],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: star.duration,
                  repeat: Infinity,
                  delay: star.delay,
                  ease: "linear", // Change to linear for more efficiency
                }}
              />
            ))}
          </motion.div>
        </div>
      )}

      {/* Mid layer - Gradient blobs and tech patterns */}
      <div className="absolute inset-0 z-[1] overflow-hidden">
        {/* Gradient blob 1 - Simplify animation */}
        <motion.div
          style={{ 
            y: midY, 
            rotate: rotate1,
            scale: scale1,
            x: useTransform(smoothMouseX, [-0.5, 0.5], ['-5%', '5%']),
            translateY: useTransform(smoothMouseY, [-0.5, 0.5], ['-3%', '3%']),
            willChange: 'transform',
          }}
          className="absolute top-[5%] right-[10%] w-[50%] h-[50%] opacity-20"
        >
          <div className="w-full h-full bg-gradient-radial from-[#FD673A]/30 via-blue-500/20 to-transparent rounded-full blur-3xl"></div>
        </motion.div>
        
        {/* Gradient blob 2 - Simplify animation */}
        <motion.div
          style={{ 
            y: midY, 
            rotate: rotate2,
            scale: scale1,
            x: useTransform(smoothMouseX, [-0.5, 0.5], ['5%', '-5%']),
            willChange: 'transform',
          }}
          className="absolute bottom-[10%] left-[10%] w-[60%] h-[60%] opacity-20"
        >
          <div className="w-full h-full bg-gradient-radial from-violet-600/30 via-purple-500/20 to-transparent rounded-full blur-3xl"></div>
        </motion.div>
        
        {/* Tech Circuit Pattern - Optimize to be simpler */}
        <motion.div
          style={{ 
            y: useTransform(midY, v => parseFloat(String(v)) * 1.5),
            rotate: rotate3,
            opacity: useTransform(scrollYProgress, [0, 0.5], [0.05, 0.15]),
            willChange: 'transform, opacity',
          }}
          className="absolute inset-0 z-[1]"
        >
          <div className="absolute top-1/4 left-1/4 w-[90%] h-[90%] -translate-x-1/4 -translate-y-1/4">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 800 800"
              xmlns="http://www.w3.org/2000/svg"
              className="text-blue-500/10"
            >
              <g fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="400" cy="400" r="200" />
                <circle cx="400" cy="400" r="300" />
                <circle cx="400" cy="400" r="380" />
                <line x1="0" y1="400" x2="800" y2="400" />
                <line x1="400" y1="0" x2="400" y2="800" />
                <line x1="100" y1="100" x2="700" y2="700" />
                <line x1="700" y1="100" x2="100" y2="700" />
                <rect x="100" y="100" width="600" height="600" rx="20" />
              </g>
            </svg>
          </div>
        </motion.div>
      </div>

      {/* Foreground layer - Floating tech nodes and lines - Simplify SVG */}
      <div className="absolute inset-0 z-[2] overflow-hidden">
        <motion.div
          style={{ 
            y: foreY,
            x: useTransform(smoothMouseX, [-0.5, 0.5], ['2%', '-2%']),
            willChange: 'transform',
          }}
          className="absolute inset-0"
        >
          {/* Animated Nodes and Lines - Simplified */}
          <svg width="100%" height="100%" className="opacity-10">
            <defs>
              <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#FD673A" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#4F46E5" stopOpacity="0.8" />
              </linearGradient>
              
              <linearGradient id="line-gradient-v" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#4F46E5" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#FD673A" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.8" />
              </linearGradient>
            </defs>
            
            {/* Simplified nodes and lines for better performance */}
            <g>
              {/* Horizontal line with gradient */}
              <motion.line 
                x1="10%" 
                y1="35%" 
                x2="90%" 
                y2="35%"
                stroke="url(#line-gradient)"
                strokeWidth="1"
                strokeDasharray="5,10" 
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 4, ease: "linear", repeat: Infinity, repeatType: "loop" }}
              />
              
              {/* Circular path with gradient */}
              <motion.circle 
                cx="75%" 
                cy="60%" 
                r="120"
                stroke="url(#line-gradient)"
                strokeWidth="1"
                strokeDasharray="5,10" 
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 6, ease: "linear", repeat: Infinity, repeatType: "loop" }}
              />
              
              {/* Connected nodes - Reduced number */}
              <motion.circle cx="25%" cy="35%" r="6" fill="#3B82F6" initial={{ opacity: 0.5 }} animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }} />
              <motion.circle cx="75%" cy="60%" r="6" fill="#FD673A" initial={{ opacity: 0.5 }} animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 3.5, repeat: Infinity, delay: 1.5, ease: "linear" }} />
            </g>
          </svg>
        </motion.div>
      </div>
      
      {/* Section content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section header */}
        <motion.div 
          className="text-center mb-20 lg:mb-32"
          style={{
            y: titleY,
            opacity: titleOpacity,
            willChange: 'transform, opacity',
          }}
        >
          <motion.h2
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-[#FD673A] to-indigo-400">
              Our Services
            </span>
          </motion.h2>
          
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-blue-500 via-[#FD673A] to-indigo-500 mx-auto rounded-full mb-8"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          />
          
          <p className="text-blue-100/70 text-lg md:text-xl max-w-3xl mx-auto">
            We create innovative, scalable software solutions tailored to your unique business needs.
          </p>
        </motion.div>
        
        {/* Services grid - Using memoized variants */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={cardAnimationVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
        >
          {serviceData.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              index={index}
              isActive={hoveredCardIndex === index}
              otherCardHovered={hoveredCardIndex !== null && hoveredCardIndex !== index}
              setHovered={(isHovered: boolean) => {
                setHovered(isHovered ? index : null);
              }}
            />
          ))}
        </motion.div>
      </div>
      
      {/* Subtle radial gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-[#0A0F2C]/30 to-[#0A0F2C]/80 pointer-events-none z-5" />
    </motion.section>
  );
};

export default ServicesSection; 