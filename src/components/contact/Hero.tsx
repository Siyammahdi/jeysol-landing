'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  speedX: number;
  speedY: number;
  color: string;
}

const Hero: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<Particle[]>([]);
  
  // Generate particles on the client side only
  useEffect(() => {
    const colors = ['#3b82f6', '#8b5cf6', '#14b8a6', '#6366f1'];
    const newParticles = Array.from({ length: 30 }).map((_, index) => ({
      id: index,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      opacity: Math.random() * 0.5 + 0.2,
      speedX: (Math.random() - 0.5) * 0.3,
      speedY: (Math.random() - 0.5) * 0.3,
      color: colors[Math.floor(Math.random() * colors.length)]
    }));
    
    setParticles(newParticles);
    
    // Move particles animation
    const interval = setInterval(() => {
      setParticles(prevParticles => 
        prevParticles.map(particle => ({
          ...particle,
          x: (particle.x + particle.speedX + 100) % 100,
          y: (particle.y + particle.speedY + 100) % 100,
        }))
      );
    }, 50);
    
    return () => clearInterval(interval);
  }, []);
  
  // Update mouse position for subtle interactivity
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!e.currentTarget) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height
    });
  };
  
  // Text animation variants
  const textContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };
  
  const wordAnimation = {
    hidden: { 
      y: 20, 
      opacity: 0 
    },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <section 
      className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-[#080D24]"
      onMouseMove={handleMouseMove}
    >
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        {/* Animated particles */}
        {particles.map(particle => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full z-0"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: particle.size,
              height: particle.size,
              backgroundColor: particle.color,
              opacity: particle.opacity,
              filter: `blur(${particle.size <= 2 ? 0 : particle.size/2}px)`,
            }}
            animate={{
              opacity: [particle.opacity, particle.opacity * 0.5, particle.opacity],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
        
        {/* Ambient gradient blobs */}
        <div className="absolute top-1/4 right-1/4 w-[40vw] h-[40vw] rounded-full bg-gradient-radial from-blue-500/10 via-blue-500/5 to-transparent blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-[50vw] h-[50vw] rounded-full bg-gradient-radial from-violet-500/10 via-violet-500/5 to-transparent blur-3xl" />
        
        {/* Grid overlay */}
        <div 
          className="absolute inset-0 grid-pattern" 
          style={{
            backgroundImage: 'linear-gradient(to right, rgba(99, 102, 241, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(99, 102, 241, 0.05) 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}
        />
        
        {/* Radial gradient overlay */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-[#080D24]/60 to-[#080D24] z-10"></div>
      </div>
      
      {/* Interactive gradient follow mouse */}
      <motion.div 
        className="absolute w-[50vw] h-[50vh] rounded-full bg-gradient-radial from-blue-500/5 via-violet-500/3 to-transparent blur-3xl z-0 pointer-events-none"
        animate={{
          x: mousePosition.x * 100 - 50,
          y: mousePosition.y * 100 - 50
        }}
        transition={{
          type: "spring",
          damping: 20,
          stiffness: 50
        }}
      />
      
      {/* Content container */}
      <div className="container px-4 md:px-6 relative z-20 text-center py-20">
        {/* Staggered animated title */}
        <motion.div
          className="mb-6"
          variants={textContainer}
          initial="hidden"
          animate="visible"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight">
            <div className="overflow-hidden">
              <motion.span 
                className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-violet-400 to-blue-400 block"
                variants={wordAnimation}
              >
                Let&apos;s Create
              </motion.span>
            </div>
            <div className="overflow-hidden">
              <motion.span 
                className="text-white block"
                variants={wordAnimation}
              >
                Something Great
              </motion.span>
            </div>
            <div className="overflow-hidden">
              <motion.span 
                className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-violet-400 to-blue-400 block"
                variants={wordAnimation}
              >
                Together
              </motion.span>
            </div>
          </h1>
        </motion.div>
        
        {/* Animated subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8, 
            delay: 0.8, 
            ease: [0.22, 1, 0.36, 1] 
          }}
        >
          <p className="text-xl text-blue-100/80 max-w-2xl mx-auto font-light">
            Have a question, proposal, or just want to say hi?
          </p>
        </motion.div>
        
        {/* Animated line separator */}
        <motion.div 
          className="w-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto mt-12"
          initial={{ width: 0 }}
          animate={{ width: "60%" }}
          transition={{ duration: 1.2, delay: 1 }}
        />
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-30"
      >
        <span className="text-blue-200 text-sm mb-2 opacity-70">Scroll to explore</span>
        <motion.div
          animate={{
            y: [0, 8, 0],
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

export default Hero; 