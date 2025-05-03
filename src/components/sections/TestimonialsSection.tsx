'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useInView, Variants } from 'framer-motion';
import { Quote } from 'lucide-react';
import { cn } from '@/lib/utils';

// Sample testimonial data
const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "CTO",
    company: "TechVision Inc.",
    content: "JeySol transformed our digital presence with their innovative approach. Their team exceeded expectations and delivered solutions that propelled our business growth beyond what we imagined possible.",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Founder",
    company: "NexGen Startups",
    content: "Working with JeySol was the best decision for our platform launch. Their technical expertise and creative problem-solving abilities helped us launch months ahead of schedule with features that delighted our users.",
    rating: 5
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    role: "Product Director",
    company: "GlobalConnect",
    content: "The attention to detail and technical sophistication JeySol brought to our project was remarkable. They didn't just build what we asked for—they improved upon our vision in ways we hadn't imagined.",
    rating: 5
  },
  {
    id: 4,
    name: "David Park",
    role: "VP of Engineering",
    company: "InnovateTech",
    content: "JeySol's development team is exceptional. They navigated complex technical challenges with ease and delivered a robust, scalable solution that has become the backbone of our operations.",
    rating: 5
  },
  {
    id: 5,
    name: "Aisha Williams",
    role: "Digital Director",
    company: "FutureWave Media",
    content: "The level of creativity and technical prowess demonstrated by JeySol sets them apart. Our interactive platform has received countless compliments since they redesigned it with their signature modern approach.",
    rating: 5
  },
];

// Extend the array to ensure smooth looping
const extendedTestimonials = [...testimonials, ...testimonials, ...testimonials];

const TestimonialsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const isHeadingInView = useInView(headingRef, { once: true, amount: 0.5 });
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  
  // Parallax effect for background elements
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  
  // Calculate carousel width and setup auto-scroll
  useEffect(() => {
    // Auto-scroll implementation
    let interval: NodeJS.Timeout;
    
    if (!isPaused) {
      interval = setInterval(() => {
        if (carouselRef.current) {
          const newScrollPosition = carouselRef.current.scrollLeft + 1;
          carouselRef.current.scrollLeft = newScrollPosition;
          
          // Reset to beginning when reaching end for infinite loop effect
          if (newScrollPosition >= carouselRef.current.scrollWidth - carouselRef.current.clientWidth - 10) {
            carouselRef.current.scrollLeft = 0;
          }
        }
      }, 20);
    }
    
    return () => clearInterval(interval);
  }, [isPaused]);
  
  // Variants for animations
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };
  
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };
  
  return (
    <section 
      id="testimonials"
      ref={sectionRef}
      className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-b from-[#0A1235] via-[#0A0F2C] to-[#0E0B30]"
    >
      {/* Background ambient elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Floating orbs and ambient gradients */}
        <motion.div
          style={{ y: bgY }}
          className="absolute -top-[30%] right-[20%] w-[40%] h-[40%] rounded-full bg-gradient-radial from-indigo-600/10 via-indigo-600/5 to-transparent blur-3xl opacity-60"
        />
        
        <motion.div
          style={{ y: useTransform(bgY, v => parseFloat(String(v)) * -1) }}
          className="absolute bottom-[5%] left-[10%] w-[50%] h-[50%] rounded-full bg-gradient-radial from-blue-600/10 via-blue-600/5 to-transparent blur-3xl opacity-40"
        />
        
        {/* Subtle dot grid - adds texture */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" 
            style={{ 
              backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)', 
              backgroundSize: '30px 30px' 
            }}/>
        </div>
        
        {/* Ambient glow */}
        <motion.div 
          animate={{
            opacity: [0.1, 0.15, 0.1],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] rounded-full bg-gradient-radial from-blue-500/5 via-indigo-500/3 to-transparent blur-3xl"
        />
      </div>
      
      {/* Content Container */}
      <motion.div 
        className="container mx-auto px-4 md:px-6 relative z-10"
        style={{ opacity }}
      >
        {/* Section Header */}
        <div ref={headingRef} className="text-center mb-16 md:mb-20">
        <motion.h2
            className="text-5xl md:text-6xl font-bold mb-4 tracking-tight"
            style={{
              opacity: isHeadingInView ? 1 : 0,
              y: isHeadingInView ? 0 : 50,
              transition: "opacity 0.6s ease-out, transform 0.8s ease-out"
            }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-teal-400">
              What Our Client&apos;s Say
            </span>
          </motion.h2>
          <motion.div 
            className="w-20 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-teal-500 mx-auto rounded-full mb-6"
            initial={{ width: 0, opacity: 0 }}
            animate={isHeadingInView ? { width: 80, opacity: 1 } : { width: 0, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          
          
          <motion.p
            className="text-xl text-blue-100/60 max-w-2xl mx-auto font-light mt-6"
            style={{
              opacity: isHeadingInView ? 1 : 0,
              y: isHeadingInView ? 0 : 30,
              transition: "opacity 0.6s ease-out, transform 0.8s ease-out 0.2s"
            }}
          >
            Trusted by innovative companies worldwide
          </motion.p>
        </div>
        
        {/* Testimonials Carousel */}
        <div className="relative w-full max-w-full mx-auto">
          {/* Carousel container with horizontal scroll */}
          <div 
            ref={carouselRef}
            className="pb-12 pt-8 px-4 overflow-x-auto overflow-y-hidden hide-scrollbar"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            style={{ scrollBehavior: 'smooth' }}
          >
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="flex gap-6 md:gap-8 pb-4 w-max"
            >
              {extendedTestimonials.map((testimonial, index) => (
                <TestimonialCard 
                  key={`${testimonial.id}-${index}`}
                  testimonial={testimonial}
                  variants={cardVariants}
                  isActive={activeIndex === index % testimonials.length}
                />
              ))}
            </motion.div>
          </div>
          
          {/* Pagination indicators */}
          <div className="flex justify-center mt-6 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (carouselRef.current) {
                    const scrollAmount = index * (carouselRef.current.clientWidth * 0.8);
                    carouselRef.current.scrollLeft = scrollAmount;
                    setActiveIndex(index);
                  }
                }}
                className={cn(
                  "w-2 h-2 rounded-full transition-all duration-300",
                  activeIndex === index 
                    ? "bg-indigo-400 w-6" 
                    : "bg-indigo-600/30 hover:bg-indigo-400/50"
                )}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
        {/* Scroll hint */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="text-blue-100/30 text-xs text-center mt-2 font-light"
        >
          Hover to pause · Drag to explore
        </motion.p>
      </motion.div>
    </section>
  );
};

// Testimonial Card Component
interface TestimonialCardProps {
  testimonial: {
    id: number;
    name: string;
    role: string;
    company: string;
    content: string;
    rating: number;
  };
  variants: Variants;
  isActive: boolean;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial, variants, isActive }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      variants={variants}
      whileHover={{ 
        y: -8,
        transition: { type: "spring", stiffness: 400, damping: 17 }
      }}
      className="flex-shrink-0 w-[350px] h-[220px] relative my-8"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Card background with glassmorphism */}
      <motion.div 
        className="absolute inset-0 rounded-2xl overflow-hidden"
        animate={{
          boxShadow: isHovered 
            ? "0 20px 40px rgba(0, 0, 20, 0.35), 0 0 30px rgba(59, 130, 246, 0.3)" 
            : "0 10px 30px rgba(0, 0, 20, 0.2)"
        }}
      />
      
      <motion.div 
        className="absolute inset-0 rounded-2xl backdrop-blur-lg"
        animate={{
          background: isHovered
            ? "linear-gradient(145deg, rgba(15, 23, 42, 0.75) 0%, rgba(30, 41, 95, 0.85) 100%)"
            : "linear-gradient(145deg, rgba(15, 23, 42, 0.65) 0%, rgba(30, 41, 95, 0.75) 100%)",
        }}
      >
        {/* Inner glow border effect */}
        <motion.div 
          className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none"
          animate={{
            boxShadow: isHovered || isActive
              ? "inset 0 0 0 1px rgba(99, 102, 241, 0.4), inset 0 0 20px rgba(99, 102, 241, 0.2)" 
              : "inset 0 0 0 1px rgba(99, 102, 241, 0.15)",
          }}
        />
        
        {/* Subtle ambient background blobs for depth */}
        <div className="absolute inset-0 overflow-hidden opacity-60">
          <div className="absolute -top-[30%] -right-[30%] w-[100%] h-[100%] rounded-full bg-gradient-radial from-indigo-600/5 via-transparent to-transparent blur-3xl"></div>
          <div className="absolute -bottom-[30%] -left-[30%] w-[100%] h-[100%] rounded-full bg-gradient-radial from-blue-600/5 via-transparent to-transparent blur-3xl"></div>
        </div>
      </motion.div>
      
      {/* Card content */}
      <div className="relative h-full w-full p-6 flex flex-col">
        {/* Quote icon */}
        <motion.div 
          className="absolute top-4 left-4 text-blue-400/20 z-0"
          animate={{
            scale: isHovered ? 1.1 : 1,
            opacity: isHovered ? 0.3 : 0.15,
          }}
          transition={{ duration: 0.2 }}
        >
          <Quote size={36} strokeWidth={1} />
        </motion.div>
        
        {/* Testimonial text */}
        <div className="mb-4 flex-1 z-10 relative">
          <motion.p 
            className="text-blue-50/90 text-sm leading-relaxed line-clamp-4 mt-3"
            animate={{
              opacity: isHovered ? 1 : 0.9,
            }}
          >
            &ldquo;{testimonial.content}&rdquo;
          </motion.p>
        </div>
        
        {/* User info row */}
        <div className="flex items-center mt-auto">
          {/* User avatar with letter */}
          <div className="relative w-10 h-10 rounded-full overflow-hidden mr-3">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-700 flex items-center justify-center text-white font-medium text-lg">
              {testimonial.name.charAt(0)}
            </div>
            
            {/* Avatar glow border */}
            <motion.div 
              className="absolute inset-0 rounded-full border border-blue-400/30"
              animate={{
                boxShadow: isHovered 
                  ? "0 0 15px rgba(59, 130, 246, 0.5)" 
                  : "0 0 0 rgba(59, 130, 246, 0)",
              }}
            />
          </div>
          
          {/* User details */}
          <div>
            <h4 className="font-medium text-white text-xs">{testimonial.name}</h4>
            <p className="text-blue-300/70 text-xs">{testimonial.role} · {testimonial.company}</p>
          </div>
          
          {/* Rating (optional) */}
          {testimonial.rating > 0 && (
            <div className="ml-auto flex">
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <svg
                  key={i}
                  className="w-3 h-3 text-yellow-400 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              ))}
            </div>
          )}
        </div>
        
        {/* Shimmer effect on hover */}
        <motion.div
          className="absolute inset-0 w-full h-full rounded-2xl"
          animate={{
            background: isHovered 
              ? "linear-gradient(45deg, rgba(59, 130, 246, 0) 0%, rgba(59, 130, 246, 0.03) 50%, rgba(59, 130, 246, 0) 100%)"
              : "linear-gradient(45deg, rgba(59, 130, 246, 0) 0%, rgba(59, 130, 246, 0) 50%, rgba(59, 130, 246, 0) 100%)",
            backgroundSize: "200% 100%",
            backgroundPositionX: isHovered ? "100%" : "0%",
          }}
          transition={{
            backgroundPositionX: { duration: 1.5, ease: "easeInOut" }
          }}
        />
      </div>
    </motion.div>
  );
};

export default TestimonialsSection; 