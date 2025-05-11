'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView, useAnimate } from 'framer-motion';

// Interface for particles
interface Particle {
  id: number;
  width: number;
  height: number;
  left: string;
  top: string;
  animationDuration: number;
  animationDelay: number;
  yMovement: number;
  repeatDelay?: number;
}

const ContactSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const isHeadingInView = useInView(headingRef, { once: true, amount: 0.3 });
  
  const [particles, setParticles] = useState<Particle[]>([]);
  const [isClient, setIsClient] = useState(false);
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [inquiryType, setInquiryType] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const [iconScope, animateIcon] = useAnimate();
  
  useEffect(() => {
    setIsClient(true);
    const generatedParticles = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      width: Math.random() * 6 + 2,
      height: Math.random() * 6 + 2,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDuration: Math.random() * 5 + 10,
      animationDelay: Math.random() * 10,
      yMovement: Math.random() * -30 - 10
    }));
    setParticles(generatedParticles);
  }, []);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !email || !message || !inquiryType) return;
    
    setIsSubmitting(true);
    
    // Simulate API call with timeout
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after showing success message
      setTimeout(() => {
        setName('');
        setEmail('');
        setMessage('');
        setInquiryType('');
        setIsSubmitted(false);
      }, 5000);
    }, 2000);
  };
  
  // Handle field focus for icon animation
  const handleFocus = () => {
      animateIcon(
        iconScope.current,
        { scale: [1, 1.2, 1], color: ['rgb(129, 140, 248)', 'rgb(99, 102, 241)', 'rgb(129, 140, 248)'] },
        { duration: 0.6 }
      );
  };
  
  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-24 md:py-36 overflow-hidden bg-gradient-to-b from-[#0A0F2C] via-[#070B22] to-[#05071A]"
    >
      {/* Background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Static elements */}
        <div className="absolute inset-0 opacity-5 mix-blend-luminosity">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="circuit-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M 0 50 L 30 50 M 70 50 L 100 50 M 50 0 L 50 30 M 50 70 L 50 100" stroke="rgb(99, 102, 241)" strokeWidth="0.5" />
                <circle cx="50" cy="50" r="8" fill="none" stroke="rgb(99, 102, 241)" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#circuit-pattern)" />
          </svg>
        </div>
        
        {/* Client-side only animations */}
        {isClient && (
          <>
        <motion.div
          animate={{ 
            opacity: [0.02, 0.04, 0.02],
            scale: [1, 1.05, 1] 
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute inset-0 z-0"
        >
              <div className="w-full h-full"></div>
        </motion.div>
    
            {/* Particles */}
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
                className="absolute rounded-full bg-indigo-500/30"
              style={{
                width: particle.width,
                height: particle.height,
                left: particle.left,
                top: particle.top,
              }}
              animate={{
                y: [0, particle.yMovement, 0],
                  opacity: [0.2, 0.6, 0.2],
              }}
              transition={{
                duration: particle.animationDuration,
                  delay: particle.animationDelay,
                repeat: Infinity,
                  repeatType: "loop",
              }}
            />
          ))}
          </>
        )}
      </div>
      
      {/* Content Container */}
      <motion.div 
        className="container mx-auto px-4 md:px-6 relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Section Header */}
        <div ref={headingRef} className="text-center mb-16 md:mb-24 max-w-3xl mx-auto">
          <motion.h2
            className="text-5xl md:text-6xl font-bold mb-4 tracking-tight"
            style={{
              opacity: isHeadingInView ? 1 : 0,
              y: isHeadingInView ? 0 : 50,
              transition: "opacity 0.6s ease-out, transform 0.8s ease-out"
            }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-[#FD673A] to-indigo-400">
                Get in Touch
            </span>
          </motion.h2>
          
          <motion.div 
            className="w-20 h-1 bg-gradient-to-r from-blue-500 via-[#FD673A] to-indigo-500 mx-auto rounded-full mb-6"
            initial={{ width: 0, opacity: 0 }}
            animate={isHeadingInView ? { width: 80, opacity: 1 } : { width: 0, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <p className="text-lg md:text-xl text-blue-100/60 max-w-2xl mx-auto font-light">
            Let&apos;s build something extraordinary together.
          </p>
        </div>
        
        {/* Form */}
        <div className="max-w-lg mx-auto">
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
              <label htmlFor="name" className="block mb-2 text-white">Name</label>
                      <input
                        type="text"
                id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                onFocus={() => handleFocus()}
                className="w-full p-3 bg-indigo-950/50 border border-indigo-500/30 rounded-lg text-white"
                placeholder="Your Name"
                      />
                      </div>
            
            <div className="relative">
              <label htmlFor="email" className="block mb-2 text-white">Email</label>
                      <input
                        type="email"
                id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                onFocus={() => handleFocus()}
                className="w-full p-3 bg-indigo-950/50 border border-indigo-500/30 rounded-lg text-white"
                placeholder="Your Email"
              />
          </div>
          
            <div className="relative">
              <label htmlFor="inquiryType" className="block mb-2 text-white">Inquiry Type</label>
              <select
                id="inquiryType"
                value={inquiryType}
                onChange={(e) => setInquiryType(e.target.value)}
                onFocus={() => handleFocus()}
                className="w-full p-3 bg-indigo-950/50 border border-indigo-500/30 rounded-lg text-white"
              >
                <option value="" disabled>Select an inquiry type</option>
                <option value="collaboration">Collaboration</option>
                <option value="hire">Hire Us</option>
                <option value="question">Question</option>
                <option value="other">Something Else</option>
              </select>
            </div>
            
            <div className="relative">
              <label htmlFor="message" className="block mb-2 text-white">Message</label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onFocus={() => handleFocus()}
                className="w-full p-3 bg-indigo-950/50 border border-indigo-500/30 rounded-lg text-white"
                rows={4}
                placeholder="Your Message"
              ></textarea>
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className={`px-6 py-3 relative ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''} ${isSubmitted ? 'bg-green-600' : 'bg-gradient-to-r from-indigo-600 to-[#FD673A]'} text-white rounded-lg flex items-center justify-center`}
            >
              <span ref={iconScope} className="mr-2">
                {isSubmitting ? (
                  <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
                ) : isSubmitted ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
                ) : null}
              </span>
              {isSubmitted ? 'Message Sent!' : isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection; 