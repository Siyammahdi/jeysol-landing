'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Search } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqData: FAQItem[] = [
  {
    question: "How do I request a quote for my project?",
    answer: "You can request a quote by filling out our contact form with details about your project requirements. Our team will review your request and get back to you within 24 hours with a detailed proposal and pricing estimate.",
    category: "Pricing"
  },
  {
    question: "What information should I include in my project brief?",
    answer: "For the most accurate quote, include details about your project goals, target audience, desired features, timeline, and budget range. The more specific you can be, the better we can tailor our proposal to meet your needs.",
    category: "Process"
  },
  {
    question: "How long does a typical project take to complete?",
    answer: "Project timelines vary depending on scope and complexity. A small website might take 2-4 weeks, while more complex applications can take 3-6 months. During our initial consultation, we'll provide a detailed timeline specific to your project needs.",
    category: "Process"
  },
  {
    question: "Do you offer ongoing maintenance and support?",
    answer: "Yes, we offer various maintenance and support packages to keep your project running smoothly after launch. These include regular updates, security patches, performance optimization, and technical support for any issues that may arise.",
    category: "Services"
  },
  {
    question: "What technologies do you specialize in?",
    answer: "Our team specializes in a wide range of modern technologies including React, Next.js, Node.js, Python, AWS, and more. We select the most appropriate tech stack for each project based on specific requirements and goals.",
    category: "Technical"
  },
  {
    question: "Can you work with our existing design team?",
    answer: "Absolutely! We're happy to collaborate with your existing design team, developers, or other stakeholders. We can adapt our process to complement your team's workflow and ensure a smooth collaboration experience.",
    category: "Process"
  },
  {
    question: "What happens after the project is launched?",
    answer: "After launch, we conduct a thorough handover including documentation and training if needed. We also offer a warranty period to address any issues that might arise. Many clients choose to continue with our maintenance packages for ongoing support.",
    category: "Services"
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept various payment methods including bank transfers, credit cards, and PayPal. For larger projects, we typically work with a milestone-based payment schedule that aligns with project deliverables.",
    category: "Pricing"
  }
];

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  
  const categories = Array.from(new Set(faqData.map(item => item.category)));
  
  const filteredFAQs = faqData.filter(faq => {
    const matchesSearch = searchQuery === '' || 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = activeCategory === null || faq.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });
  
  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  
  return (
    <section className="py-20 relative overflow-hidden bg-[#080D24]">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-indigo-900/10 via-blue-900/5 to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-indigo-900/10 via-blue-900/5 to-transparent blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center mb-12"
        >
          <div className="inline-block px-3 py-1 bg-blue-900/20 rounded-full mb-4">
            <span className="text-sm font-medium text-blue-400">Your Questions Answered</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight text-white">Frequently Asked Questions</h2>
          <p className="text-lg text-blue-100/70">
            Find answers to common questions about our services, process, and more.
          </p>
        </motion.div>
        
        {/* Search and filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mb-8"
        >
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-blue-500" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-3 border border-blue-900/50 rounded-lg bg-blue-950/30 text-white placeholder-blue-400/70 focus:outline-none focus:ring-2 focus:ring-blue-500/50 backdrop-blur-sm"
              placeholder="Search questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          {/* Category filters */}
          <div className="flex flex-wrap gap-2 mt-4 justify-center">
            <button
              onClick={() => setActiveCategory(null)}
              className={`px-4 py-1.5 rounded-full text-sm ${
                activeCategory === null
                  ? 'bg-blue-600 text-white'
                  : 'bg-blue-900/20 text-blue-300 hover:bg-blue-800/30'
              } transition-colors duration-200`}
            >
              All
            </button>
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-1.5 rounded-full text-sm ${
                  activeCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-blue-900/20 text-blue-300 hover:bg-blue-800/30'
                } transition-colors duration-200`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>
        
        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="space-y-4">
            {filteredFAQs.length > 0 ? (
              filteredFAQs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="border border-blue-800/30 rounded-xl overflow-hidden backdrop-blur-sm"
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full px-6 py-4 text-left flex justify-between items-center bg-blue-900/10 hover:bg-blue-900/20 transition-colors duration-200"
                  >
                    <span className="text-lg font-medium text-white">{faq.question}</span>
                    <motion.div
                      animate={{ rotate: activeIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="h-5 w-5 text-blue-400" />
                    </motion.div>
                  </button>
                  
                  <AnimatePresence>
                    {activeIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 py-4 bg-blue-950/30">
                          <p className="text-blue-100/80">{faq.answer}</p>
                          <div className="mt-2 pt-2 border-t border-blue-800/20">
                            <span className="text-xs text-blue-400/70 inline-block px-2 py-0.5 bg-blue-900/20 rounded-full">
                              {faq.category}
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))
            ) : (
              <div className="text-center py-10">
                <p className="text-blue-400">No results found. Try a different search term.</p>
              </div>
            )}
          </div>
          
          {/* Still have questions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-12 text-center p-6 border border-blue-800/30 rounded-xl bg-blue-900/10 backdrop-blur-sm"
          >
            <h3 className="text-xl font-semibold text-white mb-2">Still have questions?</h3>
            <p className="text-blue-100/70 mb-4">
              Our team is ready to assist you with any specific queries about your project.
            </p>
            <a
              href="#contact-form"
              className="inline-block px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-200"
            >
              Contact Our Team
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ; 