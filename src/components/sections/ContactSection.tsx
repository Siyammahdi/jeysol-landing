'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView, useAnimate, Variants } from 'framer-motion';
import { Send, MessageSquare, User, Mail, ChevronDown, CheckCircle, Sparkles, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

// Inquiry type options
const inquiryTypes = [
  { value: 'collaboration', label: 'Collaboration' },
  { value: 'hire', label: 'Hire Us' },
  { value: 'question', label: 'Question' },
  { value: 'other', label: 'Something Else' }
];

// Form field animation variants
const inputVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      type: "spring",
      damping: 20,
      stiffness: 300
    }
  }
};

// Add a new interface for particles
interface Particle {
  id: number;
  width: number;
  height: number;
  left: string;
  top: string;
  animationDuration: number;
  animationDelay: number;
  yMovement: number; // Store movement values for the animation
  repeatDelay?: number; // Optional for success message particles
}

const ContactSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const isHeadingInView = useInView(headingRef, { once: true, amount: 0.3 });
  const isFormInView = useInView(formRef, { once: true, amount: 0.2 });
  
  // Add state for particles
  const [particles, setParticles] = useState<Particle[]>([]);
  
  // Add state for success message particles
  const [successParticles, setSuccessParticles] = useState<Particle[]>([]);
  
  // Generate particles only on client-side
  useEffect(() => {
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
    
    // Generate success message particles
    const generatedSuccessParticles = Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      width: Math.random() * 6 + 2,
      height: Math.random() * 6 + 2,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDuration: Math.random() * 2 + 1,
      animationDelay: 0,
      yMovement: -50,
      repeatDelay: Math.random() * 2
    }));
    setSuccessParticles(generatedSuccessParticles);
  }, []);
  
  // Form state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [inquiryType, setInquiryType] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // Animation hooks
  const [iconScope, animateIcon] = useAnimate();
  
  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !email || !message) return;
    
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
  
  // Handle field focus animations
  useEffect(() => {
    if (focusedField) {
      animateIcon(
        iconScope.current,
        { scale: [1, 1.2, 1], color: ['rgb(129, 140, 248)', 'rgb(99, 102, 241)', 'rgb(129, 140, 248)'] },
        { duration: 0.6 }
      );
    }
  }, [focusedField, animateIcon, iconScope]);
  
  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      }
    }
  };
  
  // Interactive elements animation
  const floatingElementVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    },
    floating: {
      y: [0, -15, 0],
      transition: {
        repeat: Infinity,
        duration: 6,
        ease: "easeInOut"
      }
    }
  };
  
  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-24 md:py-36 overflow-hidden bg-gradient-to-b from-[#0A0F2C] via-[#070B22] to-[#05071A]"
    >
      {/* Background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Circuit board pattern */}
        <div className="absolute inset-0 opacity-5 mix-blend-luminosity">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="circuit-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M 0 50 L 30 50 M 70 50 L 100 50 M 50 0 L 50 30 M 50 70 L 50 100" stroke="rgb(99, 102, 241)" strokeWidth="0.5" />
                <circle cx="50" cy="50" r="8" fill="none" stroke="rgb(99, 102, 241)" strokeWidth="0.5" />
                <circle cx="50" cy="50" r="1" fill="rgb(99, 102, 241)" />
                <circle cx="30" cy="50" r="1" fill="rgb(99, 102, 241)" />
                <circle cx="70" cy="50" r="1" fill="rgb(99, 102, 241)" />
                <circle cx="50" cy="30" r="1" fill="rgb(99, 102, 241)" />
                <circle cx="50" cy="70" r="1" fill="rgb(99, 102, 241)" />
                <path d="M 0 20 L 20 20 L 20 0" stroke="rgb(99, 102, 241)" strokeWidth="0.5" fill="none"/>
                <path d="M 80 0 L 80 20 L 100 20" stroke="rgb(99, 102, 241)" strokeWidth="0.5" fill="none"/>
                <path d="M 0 80 L 20 80 L 20 100" stroke="rgb(99, 102, 241)" strokeWidth="0.5" fill="none"/>
                <path d="M 80 100 L 80 80 L 100 80" stroke="rgb(99, 102, 241)" strokeWidth="0.5" fill="none"/>
              </pattern>
            </defs>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#circuit-pattern)" />
          </svg>
        </div>
        
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
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `radial-gradient(circle at 50% 50%, rgba(99, 102, 241, 0.1) 0%, transparent 50%),
                               radial-gradient(circle at 20% 80%, rgba(99, 102, 241, 0.05) 0%, transparent 40%),
                               radial-gradient(circle at 80% 20%, rgba(99, 102, 241, 0.05) 0%, transparent 40%)`,
            }}
          />
        </motion.div>
    
        {/* Ambient gradient blobs */}
        <div className="absolute top-0 left-[20%] w-[50%] h-[40%] rounded-full bg-gradient-radial from-indigo-600/10 via-indigo-600/5 to-transparent blur-3xl opacity-60" />
        <div className="absolute bottom-[10%] right-[5%] w-[40%] h-[40%] rounded-full bg-gradient-radial from-blue-600/10 via-blue-600/5 to-transparent blur-3xl opacity-50" />
        
        {/* Animated mesh/grid with 3D effect */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" 
            style={{ 
              backgroundImage: 'radial-gradient(circle, rgba(99, 102, 241, 0.2) 1px, transparent 1px), radial-gradient(circle, rgba(99, 102, 241, 0.1) 2px, transparent 2px)', 
              backgroundSize: '30px 30px, 90px 90px',
              backgroundPosition: '0 0, 15px 15px'
            }}/>
        </div>
        
        {/* Additional subtle patterns */}
        <div className="absolute inset-0 opacity-5" 
          style={{
            backgroundImage: 'linear-gradient(45deg, rgba(99, 102, 241, 0.1) 25%, transparent 25%, transparent 50%, rgba(99, 102, 241, 0.1) 50%, rgba(99, 102, 241, 0.1) 75%, transparent 75%, transparent)',
            backgroundSize: '100px 100px'
          }}
        />
        
        {/* Enhanced wave pattern */}
        <motion.div 
          className="absolute bottom-0 left-0 w-full h-[40%] opacity-15"
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 1440 320\'%3E%3Cpath fill=\'%234F46E5\' fill-opacity=\'0.4\' d=\'M0,192L48,181.3C96,171,192,149,288,154.7C384,160,480,192,576,218.7C672,245,768,267,864,266.7C960,267,1056,245,1152,213.3C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z\'%3E%3C/path%3E%3C/svg%3E")',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
          animate={{
            y: [0, 15, 0],
            opacity: [0.08, 0.15, 0.08]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Floating particles effect */}
        <motion.div className="absolute inset-0 z-0">
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute rounded-full bg-blue-400/20"
              style={{
                width: particle.width,
                height: particle.height,
                left: particle.left,
                top: particle.top,
              }}
              animate={{
                y: [0, particle.yMovement, 0],
                opacity: [0, 0.5, 0],
                scale: [0, 1, 0]
              }}
              transition={{
                duration: particle.animationDuration,
                repeat: Infinity,
                delay: particle.animationDelay,
                ease: "easeInOut",
              }}
            />
          ))}
        </motion.div>
        
        {/* Enhanced animated glow */}
        <motion.div 
          animate={{
            opacity: [0.1, 0.18, 0.1],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] h-[95%] rounded-full bg-gradient-radial from-indigo-500/10 via-blue-500/5 to-transparent blur-3xl"
        />
      </div>
      
      {/* Content Container */}
      <motion.div 
        className="container mx-auto px-4 md:px-6 relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Enhanced Section Header */}
        <div ref={headingRef} className="text-center mb-16 md:mb-24 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isHeadingInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4 relative"
          >
            <motion.div 
              className="absolute -inset-1 bg-gradient-to-r from-indigo-500/20 via-blue-500/20 to-indigo-500/20 blur-sm rounded-full opacity-70"
              animate={{
                backgroundPosition: ['0% center', '100% center', '0% center'],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            <span className="relative z-10 px-4 py-1.5 text-xs font-medium tracking-wider text-indigo-300 uppercase bg-gradient-to-r from-indigo-500/20 to-blue-500/10 backdrop-blur-sm rounded-full border border-indigo-500/30 shadow-lg shadow-indigo-500/10">
              Let&apos;s Connect
            </span>
          </motion.div>
          
          <motion.h2
            className="text-5xl md:text-6xl font-bold mb-6 tracking-tight"
            style={{
              opacity: isHeadingInView ? 1 : 0,
              y: isHeadingInView ? 0 : 50,
              transition: "opacity 0.6s ease-out, transform 0.8s ease-out"
            }}
          >
            <span className="relative inline-block">
              <span className="absolute -inset-1 blur-xl bg-gradient-to-r from-blue-400/20 via-indigo-400/20 to-teal-400/20 rounded-lg opacity-50"></span>
              <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-teal-400">
                Get in Touch
              </span>
            </span>
          </motion.h2>
          
          <motion.div 
            className="relative w-28 h-1.5 bg-gradient-to-r from-blue-500 via-indigo-500 to-teal-500 mx-auto rounded-full mb-8 overflow-hidden"
            initial={{ width: 0, opacity: 0 }}
            animate={isHeadingInView ? { width: 112, opacity: 1 } : { width: 0, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div 
              className="absolute inset-0 bg-white/30"
              animate={{
                x: ['-100%', '100%'],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
          
          <motion.p
            className="text-lg md:text-xl text-blue-100/60 max-w-2xl mx-auto font-light"
            style={{
              opacity: isHeadingInView ? 1 : 0,
              y: isHeadingInView ? 0 : 30,
              transition: "opacity 0.6s ease-out, transform 0.8s ease-out 0.2s"
            }}
          >
            <span className="relative text-blue-100/80 font-normal italic">
              &ldquo;Let&apos;s build something extraordinary together.&rdquo;
              <motion.span 
                className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-blue-400/10 via-blue-400/50 to-blue-400/10"
                initial={{ width: 0 }}
                animate={isHeadingInView ? { width: "100%" } : { width: 0 }}
                transition={{ duration: 1.2, delay: 1 }}
              />
            </span>
          </motion.p>
        </div>
        
        {/* Form and Interactive Elements - Two Column Layout */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {/* Left Column - Company Details */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <div className="mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-blue-100 mb-6">Contact Information</h3>
              <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full mb-8"></div>
              <p className="text-blue-100/70 mb-8">
                Feel free to reach out to us. We&apos;re here to answer any questions you might have about our services, pricing, or how we can help your business succeed.
              </p>
            </div>
            
            <div className="space-y-6">
              {/* Address Block */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-900/50 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-indigo-300 mb-1">Our Location</h4>
                  <address className="not-italic text-blue-100/70">
                    1234 Innovation Drive<br />
                    Tech District, Suite 500<br />
                    San Francisco, CA 94107
                  </address>
                </div>
              </motion.div>
              
              {/* Email Block */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-900/50 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-indigo-300 mb-1">Email Us</h4>
                  <div className="space-y-1">
                    <p className="text-blue-100/70">General Inquiries: <a href="mailto:info@jeysol.com" className="text-blue-300 hover:text-blue-200 transition-colors">info@jeysol.com</a></p>
                    <p className="text-blue-100/70">Support: <a href="mailto:support@jeysol.com" className="text-blue-300 hover:text-blue-200 transition-colors">support@jeysol.com</a></p>
                  </div>
                </div>
              </motion.div>
              
              {/* Phone Block */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-900/50 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-indigo-300 mb-1">Call Us</h4>
                  <p className="text-blue-100/70">Main Office: <a href="tel:+14155552671" className="text-blue-300 hover:text-blue-200 transition-colors">+1 (415) 555-2671</a></p>
                </div>
              </motion.div>
              
              {/* Business Hours */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-900/50 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-indigo-300 mb-1">Business Hours</h4>
                  <div className="space-y-1 text-blue-100/70">
                    <p>Monday - Friday: 9:00 AM - 6:00 PM PST</p>
                    <p>Saturday - Sunday: Closed</p>
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* Social Media Links */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              viewport={{ once: true }}
              className="mt-12"
            >
              <h4 className="text-lg font-medium text-indigo-300 mb-4">Connect With Us</h4>
              <div className="flex space-x-3">
                <a href="#" className="w-10 h-10 rounded-full bg-indigo-900/50 border border-indigo-500/30 flex items-center justify-center text-indigo-400 hover:bg-indigo-800/50 hover:text-indigo-300 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-indigo-900/50 border border-indigo-500/30 flex items-center justify-center text-indigo-400 hover:bg-indigo-800/50 hover:text-indigo-300 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-indigo-900/50 border border-indigo-500/30 flex items-center justify-center text-indigo-400 hover:bg-indigo-800/50 hover:text-indigo-300 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-indigo-900/50 border border-indigo-500/30 flex items-center justify-center text-indigo-400 hover:bg-indigo-800/50 hover:text-indigo-300 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                  </svg>
                </a>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Right Column - Contact Form */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden backdrop-blur-md bg-gradient-to-br from-indigo-950/40 via-blue-950/30 to-purple-950/40 border border-indigo-500/20 shadow-lg shadow-indigo-500/10">
              {/* Enhanced 3D floating card effect */}
              <motion.div 
                className="absolute -inset-1 bg-gradient-to-r from-indigo-500/10 via-blue-500/5 to-purple-500/10 rounded-2xl blur-lg opacity-70"
                animate={{
                  opacity: [0.3, 0.5, 0.3],
                  rotate: [0, 0.5, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              
              {/* Animated border effect with enhanced glow */}
              <motion.div 
                className="absolute inset-0 z-0 border border-indigo-500/30 rounded-2xl pointer-events-none"
                animate={{
                  boxShadow: [
                    'inset 0 0 20px rgba(99, 102, 241, 0.1)',
                    'inset 0 0 30px rgba(99, 102, 241, 0.4)',
                    'inset 0 0 20px rgba(99, 102, 241, 0.1)'
                  ],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              {/* Animated corner accents */}
              <div className="absolute top-0 left-0 w-16 h-16 overflow-hidden opacity-70">
                <div className="absolute -top-0.5 -left-0.5 w-8 border-t-2 border-l-2 border-indigo-400/50 rounded-tl-lg" />
              </div>
              <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden opacity-70">
                <div className="absolute -top-0.5 -right-0.5 w-8 border-t-2 border-r-2 border-indigo-400/50 rounded-tr-lg" />
              </div>
              <div className="absolute bottom-0 left-0 w-16 h-16 overflow-hidden opacity-70">
                <div className="absolute -bottom-0.5 -left-0.5 w-8 border-b-2 border-l-2 border-indigo-400/50 rounded-bl-lg" />
              </div>
              <div className="absolute bottom-0 right-0 w-16 h-16 overflow-hidden opacity-70">
                <div className="absolute -bottom-0.5 -right-0.5 w-8 border-b-2 border-r-2 border-indigo-400/50 rounded-br-lg" />
              </div>
              
              {/* Ambient light effect */}
              <div className="absolute top-1/4 right-1/4 w-1/2 h-1/2 bg-blue-500/5 blur-3xl rounded-full"></div>
              <div className="absolute bottom-1/4 left-1/4 w-1/2 h-1/2 bg-indigo-500/5 blur-3xl rounded-full"></div>
              
              {/* Form Section with enhanced inner glass effect */}
              <div className="relative p-8 md:p-10 z-10 bg-gradient-to-br from-indigo-950/20 via-blue-950/10 to-purple-950/20 backdrop-blur-md">
                <form 
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    animate={isFormInView ? "visible" : "hidden"}
                    className="space-y-6"
                  >
                    {/* Name Input */}
                    <motion.div variants={inputVariants} className="relative">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-indigo-400">
                        <motion.div 
                          ref={iconScope} 
                          animate={{ scale: 1 }}
                          className="w-5 h-5 flex items-center justify-center"
                        >
                          <User size={18} strokeWidth={1.5} />
                          <motion.div 
                            className="absolute inset-0 bg-indigo-400/10 rounded-full"
                            animate={{ scale: [1, 1.8, 1], opacity: [0.7, 0, 0.7] }}
                            transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                          />
                        </motion.div>
                      </div>
                      <div className="overflow-hidden rounded-xl">
                        <motion.div
                          initial={{ height: '2px' }}
                          animate={{ 
                            height: focusedField === 'name' ? '100%' : '2px',
                            y: focusedField === 'name' ? 0 : 56
                          }}
                          className="absolute bottom-0 left-0 w-full bg-gradient-to-r from-indigo-500/30 via-blue-500/30 to-indigo-500/30 z-0"
                        />
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your Full Name"
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        className={cn(
                            "relative w-full h-14 pl-12 pr-4 rounded-xl bg-indigo-950/30 border border-indigo-500/30 text-white placeholder-indigo-300/50 outline-none transition-all duration-300 z-10",
                          "hover:bg-indigo-950/40 hover:border-indigo-500/40",
                          "focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 focus:bg-indigo-950/50"
                        )}
                      />
                      </div>
                      {name && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="absolute right-4 top-1/2 -translate-y-1/2 text-green-400"
                        >
                          <motion.div className="relative">
                          <CheckCircle size={16} />
                            <motion.div 
                              className="absolute inset-0 rounded-full"
                              animate={{ 
                                boxShadow: ['0 0 0 0 rgba(74, 222, 128, 0)', '0 0 0 4px rgba(74, 222, 128, 0.3)', '0 0 0 0 rgba(74, 222, 128, 0)'] 
                              }}
                              transition={{ duration: 2, repeat: Infinity }}
                            />
                          </motion.div>
                        </motion.div>
                      )}
                    </motion.div>
                    
                    {/* Email Input */}
                    <motion.div variants={inputVariants} className="relative">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-indigo-400">
                        <Mail size={18} strokeWidth={1.5} />
                      </div>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Your Email Address"
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        className={cn(
                          "w-full h-14 pl-12 pr-4 rounded-xl bg-indigo-950/30 border border-indigo-500/30 text-white placeholder-indigo-300/50 outline-none transition-all duration-300",
                          "hover:bg-indigo-950/40 hover:border-indigo-500/40",
                          "focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 focus:bg-indigo-950/50"
                        )}
                      />
                      {email && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="absolute right-4 top-1/2 -translate-y-1/2 text-green-400"
                        >
                          <CheckCircle size={16} />
                        </motion.div>
                      )}
                    </motion.div>
                    
                    {/* Inquiry Type Dropdown */}
                    <motion.div variants={inputVariants} className="relative">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-indigo-400">
                        <MessageSquare size={18} strokeWidth={1.5} />
                      </div>
                      <div
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className={cn(
                          "w-full h-14 pl-12 pr-10 rounded-xl bg-indigo-950/30 border border-indigo-500/30 text-white outline-none transition-all duration-300 flex items-center cursor-pointer",
                          "hover:bg-indigo-950/40 hover:border-indigo-500/40",
                          isDropdownOpen && "ring-2 ring-indigo-500/50 border-indigo-500/50 bg-indigo-950/50"
                        )}
                      >
                        <span className={!inquiryType ? "text-indigo-300/50" : "text-white"}>
                          {inquiryType ? 
                            inquiryTypes.find(type => type.value === inquiryType)?.label : 
                            "Select Inquiry Type"}
                        </span>
                      </div>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 text-indigo-400">
                        <motion.div
                          animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ChevronDown size={18} strokeWidth={1.5} />
                        </motion.div>
                      </div>
                      
                      {/* Dropdown menu */}
                      {isDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="absolute z-20 mt-2 w-full rounded-xl bg-indigo-900/90 backdrop-blur-lg border border-indigo-500/30 shadow-xl shadow-indigo-500/20 overflow-hidden"
                        >
                          <ul>
                            {inquiryTypes.map((type) => (
                              <li 
                                key={type.value}
                                onClick={() => {
                                  setInquiryType(type.value);
                                  setIsDropdownOpen(false);
                                }}
                                className="px-4 py-3 hover:bg-indigo-800/50 cursor-pointer text-indigo-100 transition-colors duration-200"
                              >
                                {type.label}
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </motion.div>
                    
                    {/* Message Textarea */}
                    <motion.div variants={inputVariants} className="relative">
                      <div className="absolute left-4 top-6 text-indigo-400">
                        <MessageSquare size={18} strokeWidth={1.5} />
                      </div>
                      <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Tell us about your project or inquiry..."
                        onFocus={() => setFocusedField('message')}
                        onBlur={() => setFocusedField(null)}
                        rows={focusedField === 'message' ? 5 : 3}
                        className={cn(
                          "w-full py-4 pl-12 pr-4 rounded-xl bg-indigo-950/30 border border-indigo-500/30 text-white placeholder-indigo-300/50 outline-none transition-all duration-300 resize-none",
                          "hover:bg-indigo-950/40 hover:border-indigo-500/40",
                          "focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 focus:bg-indigo-950/50"
                        )}
                      />
                    </motion.div>
                    
                    {/* Submit Button with enhanced styling */}
                    <motion.div variants={inputVariants} className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting || isSubmitted || !name || !email || !message}
                        className={cn(
                          "relative w-full md:w-auto h-14 px-8 rounded-xl font-medium",
                          "transition-all duration-300 overflow-hidden group",
                          "disabled:opacity-50 disabled:cursor-not-allowed",
                          isSubmitted ? "bg-green-600 text-white" : "bg-gradient-to-r from-indigo-600 to-blue-600 text-white"
                        )}
                      >
                        {/* Button Glow Effect */}
                        <motion.div 
                          className="absolute inset-0 bg-gradient-to-r from-indigo-600/0 via-white/20 to-indigo-600/0"
                          animate={{
                            x: ['-100%', '100%'],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        />
                        
                        {/* Button Border Glow */}
                        <motion.div 
                          className="absolute -inset-0.5 rounded-xl"
                          animate={{
                            boxShadow: [
                              '0 0 0 0 rgba(99, 102, 241, 0)',
                              '0 0 8px 2px rgba(99, 102, 241, 0.3)',
                              '0 0 0 0 rgba(99, 102, 241, 0)'
                            ],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        />
                        
                        <span className="relative z-10 flex items-center justify-center gap-2">
                          {isSubmitting ? (
                            <>
                              <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                              />
                              <span>Sending...</span>
                            </>
                          ) : isSubmitted ? (
                            <>
                              <CheckCircle size={18} />
                              <span>Message Sent!</span>
                            </>
                          ) : (
                            <>
                              <span>Send Message</span>
                              <motion.div
                                animate={{
                                  x: [0, 3, 0],
                                }}
                                transition={{
                                  duration: 1.5,
                                  repeat: Infinity,
                                  repeatType: "reverse",
                                  ease: "easeInOut",
                                }}
                              >
                              <Send size={16} />
                              </motion.div>
                            </>
                          )}
                        </span>
                        
                        {/* Button hover effect */}
                        {!isSubmitted && (
                          <motion.div
                            className="absolute inset-0 w-full h-full bg-gradient-to-r from-indigo-700 to-blue-700 transform origin-left z-0"
                            initial={{ scaleX: 0 }}
                            whileHover={{ scaleX: 1 }}
                            transition={{ duration: 0.4 }}
                          />
                        )}
                      </button>
                    </motion.div>
                  </motion.div>
                </form>
                
                {/* Enhanced Success message */}
                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-indigo-900/95 via-blue-900/95 to-indigo-900/95 backdrop-blur-md z-20"
                  >
                    {/* Background particle animation */}
                    <div className="absolute inset-0 overflow-hidden">
                      {successParticles.map((particle) => (
                        <motion.div
                          key={particle.id}
                          className="absolute rounded-full bg-white/10"
                          style={{
                            width: particle.width,
                            height: particle.height,
                            left: particle.left,
                            top: particle.top,
                          }}
                          animate={{
                            y: [0, particle.yMovement],
                            opacity: [0, 1, 0],
                            scale: [0, 1, 0]
                          }}
                          transition={{
                            duration: particle.animationDuration,
                            repeat: Infinity,
                            repeatDelay: particle.repeatDelay,
                          }}
                        />
                      ))}
                    </div>
                    
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      className="relative z-10 bg-gradient-to-b from-indigo-900/60 to-blue-900/60 backdrop-blur-sm rounded-2xl border border-indigo-500/30 p-10 max-w-md mx-auto text-center shadow-[0_0_30px_rgba(79,70,229,0.3)]"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: [0, 1.2, 1] }}
                        transition={{ duration: 0.6, times: [0, 0.7, 1] }}
                        className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-green-500/30 to-emerald-500/30 flex items-center justify-center text-green-400"
                      >
                        {/* Success icon with animated rings */}
                        <div className="relative">
                          <motion.div 
                            className="absolute -inset-3 rounded-full border-2 border-green-400/20"
                            animate={{ 
                              scale: [0.7, 1.1, 0.7],
                              opacity: [0.5, 1, 0.5] 
                            }}
                            transition={{ 
                              duration: 3,
                              repeat: Infinity,
                              ease: "easeInOut" 
                            }}
                          />
                          <motion.div 
                            className="absolute -inset-5 rounded-full border-2 border-green-400/10"
                            animate={{ 
                              scale: [0.8, 1.15, 0.8],
                              opacity: [0.3, 0.8, 0.3] 
                            }}
                            transition={{ 
                              duration: 4,
                              repeat: Infinity,
                              ease: "easeInOut",
                              delay: 0.5
                            }}
                          />
                          <CheckCircle size={40} />
                        </div>
                      </motion.div>
                      
                      <div className="relative">
                        <motion.h3 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.3 }}
                          className="text-3xl font-bold text-white mb-3"
                        >
                          Message Sent!
                        </motion.h3>
                        
                        <motion.p 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.5 }}
                          className="text-blue-100/80 mb-8"
                        >
                          We&apos;ll be in touch with you very soon.
                        </motion.p>
                        
                        <div className="relative h-1.5 bg-indigo-900/50 rounded-full mx-auto max-w-[250px] overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 4 }}
                              className="h-full bg-gradient-to-r from-green-400 to-emerald-500 rounded-full"
                            />
                            <motion.div
                              className="absolute top-0 left-0 h-full w-20 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                              animate={{ x: ['-100%', '500%'] }}
                              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                          />
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
          
          {/* Floating decorative elements with enhanced animations */}
          <motion.div
            variants={floatingElementVariants}
            initial="hidden"
            whileInView="visible"
            animate="floating"
            viewport={{ once: true }}
            className="absolute -bottom-12 -right-10 md:right-10 text-indigo-400 opacity-20 md:opacity-30 z-10"
          >
            <div className="relative">
              <motion.div
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-0 opacity-30"
              >
                <Sparkles size={150} />
              </motion.div>
              <Sparkles size={120} />
            </div>
          </motion.div>
          
          <motion.div
            variants={floatingElementVariants}
            initial="hidden"
            whileInView="visible"
            animate="floating"
            viewport={{ once: true }}
            className="absolute -top-16 -left-6 md:left-12 text-blue-400 opacity-15 md:opacity-25 z-10"
          >
            <div className="relative">
              <motion.div
                animate={{
                  rotate: [0, -360],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  rotate: {
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear",
                  },
                  scale: {
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }
                }}
              >
                <svg width="140" height="140" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="2" strokeDasharray="15 8" />
                  <circle cx="50" cy="50" r="25" stroke="currentColor" strokeWidth="1" strokeDasharray="8 6" />
                  <circle cx="50" cy="50" r="10" fill="currentColor" fillOpacity="0.2" />
                </svg>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Additional floating elements */}
          <motion.div
            variants={floatingElementVariants}
            initial="hidden"
            whileInView="visible"
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, 0],
            }}
            transition={{
              y: {
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
              },
              rotate: {
                duration: 15,
                repeat: Infinity,
                ease: "easeInOut",
              }
            }}
            viewport={{ once: true }}
            className="absolute top-1/4 right-4 md:right-10 text-violet-400 opacity-10 md:opacity-20 z-10 hidden md:block"
          >
            <svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M50 0L61.0337 38.9663L100 50L61.0337 61.0337L50 100L38.9663 61.0337L0 50L38.9663 38.9663L50 0Z" fill="currentColor" fillOpacity="0.2" />
            </svg>
          </motion.div>
          
          <motion.div
            variants={floatingElementVariants}
            initial="hidden"
            whileInView="visible"
            animate={{
              y: [0, 20, 0],
              x: [0, 10, 0],
              rotate: [0, -5, 0],
            }}
            transition={{
              y: {
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut",
              },
              x: {
                duration: 18,
                repeat: Infinity,
                ease: "easeInOut",
              },
              rotate: {
                duration: 20,
                repeat: Infinity,
                ease: "easeInOut",
              }
            }}
            viewport={{ once: true }}
            className="absolute bottom-1/3 left-4 md:left-8 text-blue-400 opacity-10 md:opacity-15 z-10 hidden md:block"
          >
            <svg width="60" height="60" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="10" y="10" width="80" height="80" rx="15" stroke="currentColor" strokeWidth="2" />
              <rect x="25" y="25" width="50" height="50" rx="10" fill="currentColor" fillOpacity="0.1" />
            </svg>
          </motion.div>
        </div>
        
        {/* Call to action at bottom with enhanced design */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true, amount: 0.7 }}
          className="text-center mt-20 max-w-2xl mx-auto"
        >
          <div className="relative mb-8">
            <motion.div 
              className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 via-indigo-500/10 to-blue-500/20 rounded-lg blur-sm opacity-70"
              animate={{
                backgroundPosition: ['0% center', '100% center', '0% center'],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            <p className="relative bg-[#0A0F2C]/60 backdrop-blur-sm rounded-lg py-4 text-blue-100/70 mb-4 border border-blue-500/10">Looking for something else?</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="#faqs" 
              className="flex items-center gap-2 px-5 py-3 rounded-full bg-blue-950/40 text-blue-200 hover:bg-blue-900/50 transition-all duration-300 text-sm border border-blue-500/30 group"
            >
              <span>Read FAQs</span>
              <motion.div
                animate={{
                  x: [0, 4, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
                className="text-blue-400 group-hover:text-blue-300"
              >
                <ArrowRight size={14} />
              </motion.div>
            </a>
            <a 
              href="mailto:contact@jeysol.com" 
              className="flex items-center gap-2 px-5 py-3 rounded-full bg-transparent text-blue-200 hover:bg-blue-900/20 transition-all duration-300 text-sm border border-blue-500/30 group"
            >
              <div className="relative">
                <motion.div
                  className="absolute -inset-1 rounded-full opacity-0 group-hover:opacity-100"
                  animate={{
                    boxShadow: ['0 0 0 0 rgba(59, 130, 246, 0)', '0 0 0 3px rgba(59, 130, 246, 0.2)', '0 0 0 0 rgba(59, 130, 246, 0)'],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />
                <Mail size={14} />
              </div>
              <span>contact@jeysol.com</span>
            </a>
          </div>
        </motion.div>
        
        {/* Simple Footer */}
        <div className="pt-20">
          <div className="text-center text-blue-300/50">
            <p>© {new Date().getFullYear()} JeySol. All rights reserved.</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection; 