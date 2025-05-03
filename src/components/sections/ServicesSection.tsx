'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import ServiceCard from '../ui/ServiceCard';
import { serviceData } from '@/data/services';

// Generate a starfield with random positions
const generateStars = (count: number) => {
  return Array.from({ length: count }).map((_, i) => ({
    id: i,
    size: Math.random() * 2 + 0.5,
    x: Math.random() * 100,
    y: Math.random() * 100,
    opacity: Math.random() * 0.7 + 0.3,
    duration: Math.random() * 10 + 20,
    delay: Math.random() * 5,
  }));
};

const ServicesSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [stars, setStars] = useState<Array<any>>([]);
  const [hoveredCardIndex, setHoveredCardIndex] = useState<number | null>(null);
  
  useEffect(() => {
    setStars(generateStars(100));
  }, []);
  
  // Handle mouse move for interactive parallax effect
  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const rect = sectionRef.current?.getBoundingClientRect();
    
    if (rect) {
      // Calculate the mouse position relative to the section
      const x = clientX - rect.left;
      const y = clientY - rect.top;
      mouseX.set(x / rect.width - 0.5);  // Normalize to -0.5 to 0.5
      mouseY.set(y / rect.height - 0.5); // Normalize to -0.5 to 0.5
    }
  };
  
  // Smooth spring effects for mouse movement
  const springConfig = { damping: 25, stiffness: 200 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);
  
  // Scroll-based parallax
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
  
  return (
    <motion.section
      id="services"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative py-32 lg:py-48 overflow-hidden bg-[#0A0F2C]"
    >
      {/* Deep background layer - Starfield */}
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
              }}
              animate={{
                opacity: [star.opacity, star.opacity * 0.3, star.opacity],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: star.duration,
                repeat: Infinity,
                delay: star.delay,
              }}
            />
          ))}
        </motion.div>
      </div>

      {/* Mid layer - Gradient blobs and tech patterns */}
      <div className="absolute inset-0 z-[1] overflow-hidden">
        {/* Gradient blob 1 */}
        <motion.div
          style={{ 
            y: midY, 
            rotate: rotate1,
            scale: scale1,
            x: useTransform(smoothMouseX, [-0.5, 0.5], ['-5%', '5%']),
          }}
          className="absolute top-[5%] right-[10%] w-[50%] h-[50%] opacity-20"
        >
          <div className="w-full h-full bg-gradient-radial from-blue-500/30 via-indigo-500/20 to-transparent rounded-full blur-3xl"></div>
        </motion.div>
        
        {/* Gradient blob 2 */}
        <motion.div
          style={{ 
            y: midY, 
            rotate: rotate2,
            scale: scale1,
            x: useTransform(smoothMouseX, [-0.5, 0.5], ['5%', '-5%']),
          }}
          className="absolute bottom-[10%] left-[10%] w-[60%] h-[60%] opacity-20"
        >
          <div className="w-full h-full bg-gradient-radial from-violet-600/30 via-purple-500/20 to-transparent rounded-full blur-3xl"></div>
        </motion.div>
        
        {/* Tech Circuit Pattern */}
        <motion.div
          style={{ 
            y: useTransform(midY, v => parseFloat(String(v)) * 1.5),
            rotate: rotate3,
            opacity: useTransform(scrollYProgress, [0, 0.5], [0.05, 0.15]),
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
                <path d="M200,250 Q400,150 600,250" />
                <path d="M200,550 Q400,650 600,550" />
                <path d="M250,200 Q150,400 250,600" />
                <path d="M550,200 Q650,400 550,600" />
              </g>
            </svg>
          </div>
        </motion.div>
      </div>

      {/* Foreground layer - Floating tech nodes and lines */}
      <div className="absolute inset-0 z-[2] overflow-hidden">
        <motion.div
          style={{ 
            y: foreY,
            x: useTransform(smoothMouseX, [-0.5, 0.5], ['2%', '-2%']),
          }}
          className="absolute inset-0"
        >
          {/* Animated Nodes and Lines */}
          <svg width="100%" height="100%" className="opacity-10">
            <defs>
              <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="5" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>
            <g filter="url(#glow)">
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
                transition={{ duration: 3, ease: "easeInOut", repeat: Infinity, repeatType: "loop" }}
              />
              
              {/* Vertical line with gradient */}
              <motion.line 
                x1="25%" 
                y1="15%" 
                x2="25%" 
                y2="85%"
                stroke="url(#line-gradient-v)"
                strokeWidth="1"
                strokeDasharray="5,10" 
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 4, ease: "easeInOut", repeat: Infinity, repeatType: "loop" }}
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
                transition={{ duration: 5, ease: "easeInOut", repeat: Infinity, repeatType: "loop" }}
              />
              
              {/* Connected nodes */}
              <motion.circle cx="25%" cy="35%" r="6" fill="#3B82F6" initial={{ opacity: 0.5 }} animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 3, repeat: Infinity }} />
              <motion.circle cx="75%" cy="35%" r="6" fill="#3B82F6" initial={{ opacity: 0.5 }} animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity, delay: 1 }} />
              <motion.circle cx="25%" cy="75%" r="6" fill="#8B5CF6" initial={{ opacity: 0.5 }} animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 4, repeat: Infinity, delay: 0.5 }} />
              <motion.circle cx="75%" cy="60%" r="6" fill="#14B8A6" initial={{ opacity: 0.5 }} animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 3.5, repeat: Infinity, delay: 1.5 }} />
              
              {/* Gradients */}
              <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#14B8A6" stopOpacity="0.8" />
              </linearGradient>
              
              <linearGradient id="line-gradient-v" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#14B8A6" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.8" />
              </linearGradient>
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
          }}
        >
          <motion.h2
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-teal-400">
              Our Services
            </span>
          </motion.h2>
          
          <motion.div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 via-indigo-500 to-teal-500 mx-auto rounded-full mb-6"
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: 96, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          />
          
          <motion.p
            className="text-xl text-blue-100/70 max-w-3xl mx-auto font-light"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            We deliver cutting-edge solutions that transform businesses
            <br className="hidden md:block" /> and create exceptional digital experiences.
          </motion.p>
        </motion.div>
        
        {/* Services grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1,
              }
            },
            hidden: {}
          }}
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
              setHovered={(isHovered) => {
                setHoveredCardIndex(isHovered ? index : null);
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