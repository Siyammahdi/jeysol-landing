'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Envelope, Send, Check, X } from 'lucide-react';

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

type SubmissionStatus = 'idle' | 'submitting' | 'success' | 'error';

const Form: React.FC = () => {
  const [formState, setFormState] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<SubmissionStatus>('idle');
  const [focused, setFocused] = useState<keyof FormState | null>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [particles, setParticles] = useState<Array<any>>([]);
  
  // Generate particles for success animation
  useEffect(() => {
    if (status === 'success') {
      const newParticles = Array.from({ length: 20 }).map((_, index) => ({
        id: index,
        x: 50,
        y: 50,
        size: Math.random() * 6 + 2,
        color: ['#3b82f6', '#8b5cf6', '#14b8a6', '#6366f1'][Math.floor(Math.random() * 4)],
        velocity: {
          x: (Math.random() - 0.5) * 8,
          y: (Math.random() - 0.5) * 8
        },
        opacity: Math.random() * 0.6 + 0.4,
        duration: Math.random() * 1 + 0.5
      }));
      
      setParticles(newParticles);
      
      // Reset after animation
      const timer = setTimeout(() => {
        setFormState({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        setStatus('idle');
        setParticles([]);
      }, 3000);
      
      return () => clearTimeout(timer);
    }
  }, [status]);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
    
    // Clear error when typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };
  
  const handleInputFocus = (name: keyof FormState) => {
    setFocused(name);
  };
  
  const handleInputBlur = () => {
    setFocused(null);
    validateForm();
  };
  
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formState.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formState.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      newErrors.email = 'Email is not valid';
    }
    
    if (!formState.subject) {
      newErrors.subject = 'Please select a subject';
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
    
    setStatus('submitting');
    
    // Simulate API request
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setStatus('success');
    } catch (error) {
      setStatus('error');
    }
  };
  
  // Animation variants
  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.1
      }
    }
  };
  
  const inputVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };
  
  return (
    <section className="relative py-24 bg-gradient-to-b from-[#0A0F2C] to-[#0C1338] overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        {/* Radial gradient */}
        <div className="absolute inset-0 bg-gradient-radial from-blue-900/5 via-transparent to-transparent blur-3xl opacity-30" />
        
        {/* Grid background */}
        <div 
          className="absolute inset-0 opacity-10" 
          style={{ 
            backgroundImage: 'linear-gradient(to right, rgba(99, 102, 241, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(99, 102, 241, 0.1) 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}
        />
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-400">
              Send Us a Message
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500 mx-auto rounded-full mb-6" />
          <p className="text-lg text-blue-100/70 max-w-2xl mx-auto">
            Fill out the form below and we'll get back to you as soon as possible
          </p>
        </motion.div>
        
        {/* Form Card */}
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="relative overflow-hidden"
          >
            {/* Form background with glassmorphism */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/30 to-blue-900/20 backdrop-blur-md border border-indigo-500/10 rounded-2xl" />
            
            {/* Inner glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-violet-600/5 rounded-2xl" />
            
            {/* Content container */}
            <div className="relative z-10 p-6 md:p-10">
              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center justify-center py-16 text-center"
                  >
                    {/* Success animation */}
                    <div className="relative w-20 h-20 mb-6">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
                        className="w-20 h-20 rounded-full bg-gradient-to-r from-green-500 to-emerald-400 flex items-center justify-center"
                      >
                        <Check className="text-white" size={32} />
                      </motion.div>
                      
                      {/* Success particles */}
                      {particles.map(particle => (
                        <motion.div
                          key={particle.id}
                          initial={{ 
                            x: 40, 
                            y: 40, 
                            opacity: particle.opacity 
                          }}
                          animate={{ 
                            x: 40 + particle.velocity.x * 20, 
                            y: 40 + particle.velocity.y * 20, 
                            opacity: 0 
                          }}
                          transition={{ 
                            duration: particle.duration, 
                            ease: "easeOut" 
                          }}
                          className="absolute rounded-full"
                          style={{
                            width: particle.size,
                            height: particle.size,
                            backgroundColor: particle.color
                          }}
                        />
                      ))}
                    </div>
                    
                    <motion.h3
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                      className="text-2xl font-bold text-white mb-3"
                    >
                      Message Sent!
                    </motion.h3>
                    
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4, duration: 0.5 }}
                      className="text-blue-100/70 max-w-md"
                    >
                      Thank you for reaching out. We'll respond to your message as soon as possible.
                    </motion.p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    ref={formRef}
                    variants={formVariants}
                    onSubmit={handleSubmit}
                    noValidate
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Name Input */}
                      <motion.div variants={inputVariants}>
                        <div className="relative">
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formState.name}
                            onChange={handleInputChange}
                            onFocus={() => handleInputFocus('name')}
                            onBlur={handleInputBlur}
                            className={`
                              w-full px-4 py-3 bg-indigo-900/20 border rounded-lg outline-none 
                              transition-all duration-300 placeholder-transparent focus:ring-2
                              ${focused === 'name' 
                                ? 'border-blue-400/50 ring-blue-400/20' 
                                : errors.name 
                                  ? 'border-red-400/50 ring-red-400/20' 
                                  : 'border-indigo-500/30'
                              }
                            `}
                            placeholder="Your name"
                          />
                          <label 
                            htmlFor="name"
                            className={`
                              absolute left-3 transition-all duration-300
                              ${formState.name || focused === 'name'
                                ? '-top-2.5 text-xs bg-[#0C1338] px-1 py-0 text-blue-400'
                                : 'top-3 text-base text-blue-100/50'
                              }
                            `}
                          >
                            Your name
                          </label>
                          
                          {/* Error message */}
                          <AnimatePresence mode="wait">
                            {errors.name && (
                              <motion.p
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                className="text-red-400 text-xs mt-1 ml-1"
                              >
                                {errors.name}
                              </motion.p>
                            )}
                          </AnimatePresence>
                        </div>
                      </motion.div>
                      
                      {/* Email Input */}
                      <motion.div variants={inputVariants}>
                        <div className="relative">
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formState.email}
                            onChange={handleInputChange}
                            onFocus={() => handleInputFocus('email')}
                            onBlur={handleInputBlur}
                            className={`
                              w-full px-4 py-3 bg-indigo-900/20 border rounded-lg outline-none 
                              transition-all duration-300 placeholder-transparent focus:ring-2
                              ${focused === 'email' 
                                ? 'border-blue-400/50 ring-blue-400/20' 
                                : errors.email 
                                  ? 'border-red-400/50 ring-red-400/20' 
                                  : 'border-indigo-500/30'
                              }
                            `}
                            placeholder="Your email"
                          />
                          <label 
                            htmlFor="email"
                            className={`
                              absolute left-3 transition-all duration-300
                              ${formState.email || focused === 'email'
                                ? '-top-2.5 text-xs bg-[#0C1338] px-1 py-0 text-blue-400'
                                : 'top-3 text-base text-blue-100/50'
                              }
                            `}
                          >
                            Your email
                          </label>
                          
                          {/* Error message */}
                          <AnimatePresence mode="wait">
                            {errors.email && (
                              <motion.p
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                className="text-red-400 text-xs mt-1 ml-1"
                              >
                                {errors.email}
                              </motion.p>
                            )}
                          </AnimatePresence>
                        </div>
                      </motion.div>
                      
                      {/* Subject dropdown - Full width */}
                      <motion.div variants={inputVariants} className="md:col-span-2">
                        <div className="relative">
                          <select
                            id="subject"
                            name="subject"
                            value={formState.subject}
                            onChange={handleInputChange}
                            onFocus={() => handleInputFocus('subject')}
                            onBlur={handleInputBlur}
                            className={`
                              w-full px-4 py-3 bg-indigo-900/20 border rounded-lg outline-none 
                              transition-all duration-300 appearance-none
                              focus:ring-2
                              ${focused === 'subject' 
                                ? 'border-blue-400/50 ring-blue-400/20' 
                                : errors.subject 
                                  ? 'border-red-400/50 ring-red-400/20' 
                                  : 'border-indigo-500/30'
                              }
                            `}
                          >
                            <option value="" disabled>Select a subject</option>
                            <option value="general">General Inquiry</option>
                            <option value="support">Technical Support</option>
                            <option value="business">Business Opportunity</option>
                            <option value="feedback">Feedback</option>
                          </select>
                          
                          {/* Custom dropdown arrow */}
                          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                            <svg 
                              width="16" 
                              height="16" 
                              viewBox="0 0 16 16" 
                              fill="none" 
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path 
                                d="M4 6L8 10L12 6" 
                                stroke="currentColor" 
                                strokeWidth="1.5" 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                className="text-blue-400"
                              />
                            </svg>
                          </div>
                          
                          <label 
                            htmlFor="subject"
                            className={`
                              absolute left-3 transition-all duration-300
                              ${formState.subject || focused === 'subject'
                                ? '-top-2.5 text-xs bg-[#0C1338] px-1 py-0 text-blue-400'
                                : 'top-3 text-base text-blue-100/50'
                              }
                            `}
                          >
                            Subject
                          </label>
                          
                          {/* Error message */}
                          <AnimatePresence mode="wait">
                            {errors.subject && (
                              <motion.p
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                className="text-red-400 text-xs mt-1 ml-1"
                              >
                                {errors.subject}
                              </motion.p>
                            )}
                          </AnimatePresence>
                        </div>
                      </motion.div>
                      
                      {/* Message textarea - Full width */}
                      <motion.div variants={inputVariants} className="md:col-span-2">
                        <div className="relative">
                          <textarea
                            id="message"
                            name="message"
                            value={formState.message}
                            onChange={handleInputChange}
                            onFocus={() => handleInputFocus('message')}
                            onBlur={handleInputBlur}
                            rows={5}
                            className={`
                              w-full px-4 py-3 bg-indigo-900/20 border rounded-lg outline-none 
                              transition-all duration-300 placeholder-transparent resize-none
                              focus:ring-2
                              ${focused === 'message' 
                                ? 'border-blue-400/50 ring-blue-400/20' 
                                : errors.message 
                                  ? 'border-red-400/50 ring-red-400/20' 
                                  : 'border-indigo-500/30'
                              }
                            `}
                            placeholder="Your message"
                          />
                          <label 
                            htmlFor="message"
                            className={`
                              absolute left-3 transition-all duration-300
                              ${formState.message || focused === 'message'
                                ? '-top-2.5 text-xs bg-[#0C1338] px-1 py-0 text-blue-400'
                                : 'top-3 text-base text-blue-100/50'
                              }
                            `}
                          >
                            Your message
                          </label>
                          
                          {/* Character counter */}
                          <div className="absolute bottom-3 right-3 text-xs text-blue-100/40">
                            {formState.message.length} / 500
                          </div>
                          
                          {/* Error message */}
                          <AnimatePresence mode="wait">
                            {errors.message && (
                              <motion.p
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                className="text-red-400 text-xs mt-1 ml-1"
                              >
                                {errors.message}
                              </motion.p>
                            )}
                          </AnimatePresence>
                        </div>
                      </motion.div>
                    </div>
                    
                    {/* Submit button */}
                    <motion.div 
                      variants={inputVariants}
                      className="mt-8 text-center"
                    >
                      <button
                        type="submit"
                        disabled={status === 'submitting'}
                        className={`
                          relative inline-flex items-center justify-center px-8 py-3 overflow-hidden
                          rounded-full group focus:outline-none min-w-[180px]
                          ${status === 'submitting' ? 'cursor-wait' : ''}
                        `}
                      >
                        {/* Button background */}
                        <span className="absolute w-full h-full bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-600"></span>
                        
                        {/* Button hover effect */}
                        <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-indigo-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
                        
                        {/* Button content with loading states */}
                        <span className="relative flex items-center justify-center w-full h-full text-white transition-all duration-300">
                          <AnimatePresence mode="wait" initial={false}>
                            {status === 'submitting' ? (
                              <motion.div
                                key="loading"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="flex items-center"
                              >
                                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Sending...
                              </motion.div>
                            ) : status === 'error' ? (
                              <motion.div
                                key="error"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="flex items-center"
                              >
                                <X className="mr-2 h-4 w-4" />
                                Error
                              </motion.div>
                            ) : (
                              <motion.div
                                key="send"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="flex items-center"
                              >
                                <Send className="mr-2 h-4 w-4" />
                                Send Message
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </span>
                      </button>
                    </motion.div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Form; 