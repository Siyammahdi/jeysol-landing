'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiUser, FiMail, FiMessageSquare, FiCheck, FiSend } from 'react-icons/fi';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  speedX: number;
  speedY: number;
}

const Form: React.FC = () => {
  // Form state
  const [formState, setFormState] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);
  
  const formRef = useRef<HTMLFormElement>(null);
  const nameInputRef = useRef<HTMLInputElement>(null);
  
  // Focus first input on mount
  useEffect(() => {
    if (nameInputRef.current) {
      nameInputRef.current.focus();
    }
  }, []);
  
  // Generate success particles
  useEffect(() => {
    if (isSubmitted) {
      const newParticles = Array.from({ length: 30 }).map((_, index) => ({
        id: index,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 5 + 2,
        opacity: Math.random() * 0.5 + 0.3,
        speedX: (Math.random() - 0.5) * 2,
        speedY: (Math.random() - 0.5) * 2,
      }));
      
      setParticles(newParticles);
      
      const interval = setInterval(() => {
        setParticles(prevParticles => 
          prevParticles.map(particle => ({
            ...particle,
            x: particle.x + particle.speedX,
            y: particle.y + particle.speedY,
            opacity: particle.opacity - 0.01,
          })).filter(particle => particle.opacity > 0)
        );
      }, 50);
      
      return () => clearInterval(interval);
    }
  }, [isSubmitted]);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };
  
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formState.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formState.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formState.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formState.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API request
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsSubmitted(true);
      
      // Reset form
      setFormState({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const handleFocus = () => {
    // Animation logic for focus
  };
  
  // Animation variants
  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };
  
  const inputVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        delay: 0.1 * custom,
        ease: [0.22, 1, 0.36, 1]
      }
    })
  };
  
  const buttonVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.02,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    },
    tap: { 
      scale: 0.98,
      transition: {
        duration: 0.1,
        ease: "easeIn"
      }
    }
  };
  
  const successVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      {/* Glass card container */}
      <div className="relative backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl my-20 p-6 md:p-8 shadow-xl overflow-hidden">
        {/* Background gradient */}
        <div className="absolute -inset-40 bg-gradient-radial from-[#FD673A]/10 to-transparent opacity-30 blur-3xl -z-10" />
        
        {/* Success state */}
        <AnimatePresence>
          {isSubmitted ? (
            <motion.div 
              className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 z-20"
              variants={successVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              {/* Success particles */}
              {particles.map(particle => (
                <motion.div
                  key={particle.id}
                  className="absolute rounded-full bg-gradient-to-r from-[#FD673A] to-blue-500"
                  style={{
                    left: `${particle.x}%`,
                    top: `${particle.y}%`,
                    width: particle.size,
                    height: particle.size,
                    opacity: particle.opacity,
                    filter: `blur(${particle.size <= 2 ? 0 : 1}px)`,
                  }}
                />
              ))}
              
              {/* Success icon */}
              <div className="mb-6 relative">
                <motion.div 
                  className="w-20 h-20 rounded-full bg-gradient-to-br from-[#FD673A] to-blue-500 flex items-center justify-center"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 200, 
                    damping: 20,
                    delay: 0.2
                  }}
                >
                  <FiCheck className="text-white text-4xl" />
                </motion.div>
                <motion.div 
                  className="absolute -inset-2 rounded-full bg-gradient-to-br from-[#FD673A] to-blue-500 opacity-30 blur-md -z-10"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1.2, opacity: 0.3 }}
                  transition={{ 
                    duration: 1,
                    delay: 0.3
                  }}
                />
              </div>
              
              <motion.h3 
                className="text-2xl font-bold mb-2 text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Message Sent!
              </motion.h3>
              
              <motion.p 
                className="text-blue-100/80 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                Thank you for reaching out. We&apos;ll get back to you as soon as possible.
              </motion.p>
              
              <motion.button
                className="px-6 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium transition-colors"
                onClick={() => setIsSubmitted(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Another Message
              </motion.button>
            </motion.div>
          ) : null}
        </AnimatePresence>
        
        {/* Form */}
        <motion.form 
          ref={formRef}
          onSubmit={handleSubmit}
          className={`relative z-10 ${isSubmitted ? 'opacity-0 pointer-events-none' : ''}`}
          variants={formVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Name input */}
          <motion.div 
            className="mb-5"
            variants={inputVariants}
            custom={1}
          >
            <div className="relative">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[#FD673A]">
                <FiUser />
              </div>
              <input
                ref={nameInputRef}
                type="text"
                name="name"
                value={formState.name}
                onChange={handleChange}
                onFocus={handleFocus}
                placeholder="Your Name"
                className={`w-full bg-white/5 border ${errors.name ? 'border-red-500' : 'border-white/10 focus:border-[#FD673A]'} rounded-lg py-3 pl-10 pr-4 text-white placeholder-blue-200/50 outline-none transition-colors`}
              />
            </div>
            {errors.name && (
              <p className="mt-1 text-red-500 text-sm">{errors.name}</p>
            )}
          </motion.div>
          
          {/* Email input */}
          <motion.div 
            className="mb-5"
            variants={inputVariants}
            custom={2}
          >
            <div className="relative">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[#FD673A]">
                <FiMail />
              </div>
              <input
                type="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                onFocus={handleFocus}
                placeholder="Your Email"
                className={`w-full bg-white/5 border ${errors.email ? 'border-red-500' : 'border-white/10 focus:border-[#FD673A]'} rounded-lg py-3 pl-10 pr-4 text-white placeholder-blue-200/50 outline-none transition-colors`}
              />
            </div>
            {errors.email && (
              <p className="mt-1 text-red-500 text-sm">{errors.email}</p>
            )}
          </motion.div>
          
          {/* Subject input */}
          <motion.div 
            className="mb-5"
            variants={inputVariants}
            custom={3}
          >
            <div className="relative">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[#FD673A]">
                <FiMessageSquare />
              </div>
              <input
                type="text"
                name="subject"
                value={formState.subject}
                onChange={handleChange}
                onFocus={handleFocus}
                placeholder="Subject"
                className={`w-full bg-white/5 border ${errors.subject ? 'border-red-500' : 'border-white/10 focus:border-[#FD673A]'} rounded-lg py-3 pl-10 pr-4 text-white placeholder-blue-200/50 outline-none transition-colors`}
              />
            </div>
            {errors.subject && (
              <p className="mt-1 text-red-500 text-sm">{errors.subject}</p>
            )}
          </motion.div>
          
          {/* Message textarea */}
          <motion.div 
            className="mb-6"
            variants={inputVariants}
            custom={4}
          >
            <textarea
              name="message"
              value={formState.message}
              onChange={handleChange}
              onFocus={handleFocus}
              placeholder="Your Message"
              rows={5}
              className={`w-full bg-white/5 border ${errors.message ? 'border-red-500' : 'border-white/10 focus:border-[#FD673A]'} rounded-lg py-3 px-4 text-white placeholder-blue-200/50 outline-none transition-colors`}
            />
            {errors.message && (
              <p className="mt-1 text-red-500 text-sm">{errors.message}</p>
            )}
          </motion.div>
          
          {/* Submit button */}
          <motion.div
            variants={inputVariants}
            custom={5}
            className="text-center"
          >
            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden rounded-full group"
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
            >
              {/* Button background */}
              <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-[#FD673A] to-blue-600"></div>
              
              {/* Button glow effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#FD673A] to-blue-600 rounded-full blur opacity-30 group-hover:opacity-60 transition duration-300"></div>
              
              {/* Button content */}
              <div className="relative flex items-center justify-center space-x-2">
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span className="text-white font-medium">Sending...</span>
                  </>
                ) : (
                  <>
                    <FiSend className="text-white" />
                    <span className="text-white font-medium">Send Message</span>
                  </>
                )}
              </div>
            </motion.button>
          </motion.div>
        </motion.form>
      </div>
    </div>
  );
};

export default Form; 