'use client';

import React, { useRef, useState } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { faqItems } from '@/data/careers';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border-b border-indigo-500/20 last:border-0">
      <button
        className="w-full py-5 flex items-center justify-between text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium text-white pr-8">{question}</span>
        <span className="text-indigo-400 transition-transform duration-300">
          {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pb-5 text-blue-100/70">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const WhyWorkWithUs = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  
  const benefits = [
    {
      title: "Health & Wellness",
      description: "Comprehensive health insurance, mental health support, and wellness programs",
      icon: "heart"
    },
    {
      title: "Work-Life Balance",
      description: "Flexible working hours, remote options, and generous paid time off",
      icon: "sun"
    },
    {
      title: "Growth Opportunities",
      description: "Professional development budget, mentorship, and career advancement paths",
      icon: "trend-up"
    },
    {
      title: "Competitive Compensation",
      description: "Attractive salary packages, performance bonuses, and equity options",
      icon: "dollar"
    },
    {
      title: "Team Building",
      description: "Regular team events, retreats, and a vibrant company culture",
      icon: "users"
    },
    {
      title: "Modern Tools",
      description: "Latest hardware, software subscriptions, and home office stipend",
      icon: "laptop"
    }
  ];
  
  return (
    <section 
      ref={sectionRef}
      className="py-24 relative overflow-hidden"
      id="why-work-with-us"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-[#090E27]/30 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#090E27]/30 to-transparent"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto mb-20">
          <div className="text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
              className="mb-3"
            >
              <span className="inline-block px-4 py-1.5 text-sm font-medium rounded-full bg-indigo-600/30 backdrop-blur-sm text-indigo-200 border border-indigo-500/20">
                Benefits & FAQs
              </span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold text-white mb-4"
            >
              Why Work With Us?
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-2xl mx-auto text-lg text-blue-100/70"
            >
              Join a team that values your contributions, supports your growth, and provides the
              benefits you need to thrive both professionally and personally.
            </motion.p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-20">
          {/* Benefits - Left side (3 columns) */}
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gradient-to-br from-indigo-950/40 via-indigo-900/30 to-indigo-900/20 backdrop-blur-sm 
                border border-indigo-500/20 rounded-2xl p-8 h-full"
            >
              <h3 className="text-2xl font-bold text-white mb-8">
                Benefits & Perks
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="flex"
                  >
                    <div className="w-12 h-12 rounded-xl bg-indigo-600/20 border border-indigo-500/30 
                      flex items-center justify-center text-indigo-400 mr-4 flex-shrink-0"
                    >
                      {benefit.icon === 'heart' && (
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      )}
                      {benefit.icon === 'sun' && (
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                      )}
                      {benefit.icon === 'trend-up' && (
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                      )}
                      {benefit.icon === 'dollar' && (
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      )}
                      {benefit.icon === 'users' && (
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                      )}
                      {benefit.icon === 'laptop' && (
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                        </svg>
                      )}
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-medium text-white mb-1">{benefit.title}</h4>
                      <p className="text-blue-100/70">{benefit.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
          
          {/* FAQs - Right side (2 columns) */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-br from-indigo-950/40 via-indigo-900/30 to-indigo-900/20 backdrop-blur-sm 
                border border-indigo-500/20 rounded-2xl p-8 h-full"
            >
              <h3 className="text-2xl font-bold text-white mb-8">
                Frequently Asked Questions
              </h3>
              
              <div className="space-y-2">
                {faqItems.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  >
                    <FAQItem question={item.question} answer={item.answer} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="relative">
            <div className="absolute -top-8 -left-8 text-indigo-500 opacity-20 text-8xl">&quot;</div>
            <div className="relative z-10">
              <p className="text-xl md:text-2xl text-blue-100/90 italic mb-6">
                Joining JeySol was one of the best decisions of my career. The supportive environment,
                cutting-edge projects, and focus on work-life balance make this a truly special place to work.
              </p>
              <div className="flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-indigo-600/20 border border-indigo-500/30 
                  flex items-center justify-center mr-3"
                >
                  <span className="text-lg font-bold text-indigo-400">SL</span>
                </div>
                <div className="text-left">
                  <div className="font-medium text-white">Sarah Lee</div>
                  <div className="text-indigo-400 text-sm">Senior Developer</div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-8 -right-8 text-indigo-500 opacity-20 text-8xl transform rotate-180">&quot;</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyWorkWithUs; 