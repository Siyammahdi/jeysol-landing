'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import AboutTextBlock from '../ui/AboutTextBlock';
import AboutVisual from '../ui/AboutVisual';

const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const isHeadingInView = useInView(headingRef, { once: true, amount: 0.5 });
  
  // Parallax effect for background elements
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const bgY1 = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const bgY2 = useTransform(scrollYProgress, [0, 1], ['0%', '-10%']);
  const bgRotate = useTransform(scrollYProgress, [0, 1], [0, 15]);
  
  // Content blocks for the about section
  const aboutBlocks = [
    {
      title: "Our Mission",
      content: "To empower businesses with cutting-edge software solutions that transform challenges into opportunities and drive sustainable growth in the digital landscape.",
      highlightWords: ["empower", "transform", "growth"],
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 22V12M5 12V2M5 12H10M19 22V16M19 16V10M19 16H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "Our Vision",
      content: "To be at the forefront of technological innovation, creating intuitive and powerful digital solutions that seamlessly integrate with human needs and elevate everyday experiences.",
      highlightWords: ["innovation", "intuitive", "elevate"],
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 9V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 12H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "Our Culture",
      content: "Built on collaboration, curiosity, and commitment, our team thrives on solving complex problems with creativity. We foster an environment where innovation is celebrated and continuous learning is essential.",
      highlightWords: ["collaboration", "creativity", "innovation", "learning"],
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17 20H7C4.79086 20 3 18.2091 3 16V8C3 5.79086 4.79086 4 7 4H17C19.2091 4 21 5.79086 21 8V16C21 18.2091 19.2091 20 17 20Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 11.3701C16.5978 11.7366 16.5978 12.2634 16 12.63L11 15.2321C10.4022 15.5986 10 15.3352 10 14.6022V9.39788C10 8.66486 10.4022 8.40144 11 8.76794L16 11.3701Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "What We Do",
      content: "We specialize in developing custom software solutions, web applications, mobile apps, and AI-powered systems that help businesses optimize operations, enhance customer experiences, and stay ahead in the digital evolution.",
      highlightWords: ["custom", "AI", "optimize", "enhance", "digital evolution"],
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.325 4.317C10.751 2.561 13.249 2.561 13.675 4.317C13.7389 4.5808 13.8642 4.82578 14.0407 5.032C14.2172 5.23822 14.4399 5.39985 14.6907 5.50375C14.9414 5.60764 15.2132 5.65085 15.4838 5.62987C15.7544 5.60889 16.0162 5.5243 16.248 5.383C17.791 4.443 19.558 6.209 18.618 7.753C18.4769 7.98466 18.3924 8.24634 18.3715 8.51677C18.3506 8.78721 18.3938 9.05877 18.4975 9.30938C18.6013 9.55999 18.7627 9.78258 18.9687 9.95905C19.1747 10.1355 19.4194 10.2609 19.683 10.325C21.439 10.751 21.439 13.249 19.683 13.675C19.4192 13.7389 19.1742 13.8642 18.968 14.0407C18.7618 14.2172 18.6001 14.4399 18.4963 14.6907C18.3924 14.9414 18.3491 15.2132 18.3701 15.4838C18.3911 15.7544 18.4757 16.0162 18.617 16.248C19.557 17.791 17.791 19.558 16.247 18.618C16.0153 18.4769 15.7537 18.3924 15.4832 18.3715C15.2128 18.3506 14.9412 18.3938 14.6906 18.4975C14.44 18.6013 14.2174 18.7627 14.0409 18.9687C13.8645 19.1747 13.7391 19.4194 13.675 19.683C13.249 21.439 10.751 21.439 10.325 19.683C10.2611 19.4192 10.1358 19.1742 9.95929 18.968C9.7828 18.7618 9.56011 18.6001 9.30935 18.4963C9.05859 18.3924 8.78683 18.3491 8.51621 18.3701C8.24559 18.3911 7.98375 18.4757 7.752 18.617C6.209 19.557 4.442 17.791 5.382 16.247C5.5231 16.0153 5.60755 15.7537 5.62848 15.4832C5.64942 15.2128 5.60624 14.9412 5.50247 14.6906C5.3987 14.44 5.23726 14.2174 5.03127 14.0409C4.82529 13.8645 4.58056 13.7391 4.317 13.675C2.561 13.249 2.561 10.751 4.317 10.325C4.5808 10.2611 4.82578 10.1358 5.032 9.95929C5.23822 9.7828 5.39985 9.56011 5.50375 9.30935C5.60764 9.05859 5.65085 8.78683 5.62987 8.51621C5.60889 8.24559 5.5243 7.98375 5.383 7.752C4.443 6.209 6.209 4.442 7.753 5.382C8.753 5.99 10.049 5.452 10.325 4.317Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    }
  ];

  return (
    <section 
      id="about"
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden bg-[#090E22]"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Ambient Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F2C] via-[#0F1635] to-[#0A0F2C] opacity-80"></div>
        
        {/* Floating Orb 1 */}
        <motion.div
          style={{ y: bgY1, rotate: bgRotate }}
          className="absolute -top-[10%] right-[5%] w-[40%] h-[40%] rounded-full bg-gradient-radial from-blue-600/10 via-blue-600/5 to-transparent blur-3xl"
        />
        
        {/* Floating Orb 2 */}
        <motion.div
          style={{ y: bgY2 }}
          className="absolute bottom-[10%] -left-[5%] w-[30%] h-[30%] rounded-full bg-gradient-radial from-violet-600/10 via-violet-600/5 to-transparent blur-3xl"
        />
        
        {/* Constellation Lines */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
            <motion.path
              d="M10,30 L25,50 L40,40 L55,60 L70,50 L90,70"
              stroke="url(#constellation-gradient)"
              strokeWidth="0.2"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 3, ease: "easeInOut" }}
            />
            <motion.path
              d="M20,80 L30,60 L50,70 L60,50 L80,60"
              stroke="url(#constellation-gradient)"
              strokeWidth="0.2"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 2.5, ease: "easeInOut", delay: 0.5 }}
            />
            <defs>
              <linearGradient id="constellation-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.5" />
                <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#14B8A6" stopOpacity="0.5" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      
      {/* Content Container */}
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div ref={headingRef} className="text-center mb-16 md:mb-24">
          <motion.h2
            className="text-5xl md:text-6xl font-bold mb-4 tracking-tight"
            style={{
              opacity: isHeadingInView ? 1 : 0,
              y: isHeadingInView ? 0 : 50,
              transition: "opacity 0.6s ease-out, transform 0.8s ease-out"
            }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-teal-400">
              About Us
            </span>
          </motion.h2>
          
          <motion.div 
            className="w-20 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-teal-500 mx-auto rounded-full mb-6"
            initial={{ width: 0, opacity: 0 }}
            animate={isHeadingInView ? { width: 80, opacity: 1 } : { width: 0, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          
          <motion.p
            className="text-xl text-blue-100/70 max-w-2xl mx-auto font-light"
            style={{
              opacity: isHeadingInView ? 1 : 0,
              y: isHeadingInView ? 0 : 30,
              transition: "opacity 0.6s ease-out, transform 0.8s ease-out 0.2s"
            }}
          >
            Driven by vision. Powered by technology.
          </motion.p>
        </div>
        
        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Visual */}
          <AboutVisual />
          
          {/* Right Column - Text Blocks */}
          <div className="space-y-8 md:space-y-12">
            {aboutBlocks.map((block, index) => (
              <AboutTextBlock
                key={index}
                title={block.title}
                content={block.content}
                icon={block.icon}
                highlightWords={block.highlightWords}
                index={index}
              />
            ))}
          </div>
        </div>
        
        {/* Animated Signature or Slogan */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true, amount: 0.8 }}
        >
          <div className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-blue-900/30 to-violet-900/30 backdrop-blur-sm border border-blue-500/20">
            <p className="text-lg text-blue-100/90 font-light italic">
              "Building tomorrow's solutions, today."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection; 