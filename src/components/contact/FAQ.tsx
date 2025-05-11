'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSearch, FiPlus, FiMinus } from 'react-icons/fi';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: string;
}

const FAQ: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [openItemId, setOpenItemId] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  
  // Sample FAQ data
  const faqItems: FAQItem[] = [
    {
      id: 1,
      question: "What services do you offer?",
      answer: "We provide a comprehensive range of digital services including web development, mobile app development, UI/UX design, digital marketing, and IT consulting. Our team specializes in creating custom solutions tailored to your specific business needs.",
      category: "services"
    },
    {
      id: 2,
      question: "How long does it take to complete a project?",
      answer: "Project timelines vary depending on complexity and scope. A simple website might take 2-4 weeks, while a complex web application or mobile app could take 2-6 months. During our initial consultation, we'll provide you with a detailed timeline based on your specific requirements.",
      category: "process"
    },
    {
      id: 3,
      question: "What is your pricing structure?",
      answer: "We offer flexible pricing models including fixed-price quotes, hourly rates, and retainer options. The cost depends on project complexity, features required, and timeline. We provide transparent quotes after understanding your project requirements during the consultation phase.",
      category: "pricing"
    },
    {
      id: 4,
      question: "Do you provide ongoing support after project completion?",
      answer: "Yes, we offer various maintenance and support packages to ensure your digital products remain up-to-date and function optimally. These include technical support, security updates, performance optimization, and feature enhancements based on your evolving needs.",
      category: "support"
    },
    {
      id: 5,
      question: "How do you handle project communication?",
      answer: "We maintain clear and consistent communication throughout the project lifecycle. Depending on your preference, we use tools like Slack, Microsoft Teams, or email for daily updates. We also schedule regular video calls and provide access to project management tools where you can track progress in real-time.",
      category: "process"
    },
    {
      id: 6,
      question: "What technologies do you specialize in?",
      answer: "Our team is proficient in a wide range of technologies including React, Next.js, Node.js, Python, Flutter, React Native, AWS, and more. We stay updated with the latest industry trends to ensure we're using the most efficient and effective technologies for your project.",
      category: "technical"
    },
    {
      id: 7,
      question: "Can you help with an existing project or only new ones?",
      answer: "We can definitely help with existing projects. Our team is experienced in code reviews, refactoring, performance optimization, and adding new features to existing applications. We'll assess your current codebase and provide recommendations for improvements.",
      category: "services"
    },
    {
      id: 8,
      question: "What makes your company different from other agencies?",
      answer: "We combine technical excellence with a deep understanding of business objectives. Our approach focuses on creating solutions that not only look great but also drive tangible results. We pride ourselves on transparency, attention to detail, and building long-term partnerships with our clients.",
      category: "company"
    }
  ];
  
  // Filter FAQ items based on search query and category
  const filteredFAQs = faqItems.filter(item => {
    const matchesSearch = item.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    return matchesSearch && matchesCategory;
  });
  
  // Get unique categories
  const categories = ['all', ...Array.from(new Set(faqItems.map(item => item.category)))];
  
  // Toggle FAQ item
  const toggleItem = (id: number) => {
    setOpenItemId(openItemId === id ? null : id);
  };

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        {/* Radial gradient */}
        <div className="absolute inset-0 bg-gradient-radial from-[#FD673A]/5 via-transparent to-transparent opacity-50 blur-3xl" />
        
        {/* Grid background */}
        <div 
          className="absolute inset-0 opacity-10" 
          style={{ 
            backgroundImage: 'linear-gradient(to right, rgba(253, 103, 58, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(99, 102, 241, 0.1) 1px, transparent 1px)',
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
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-[#FD673A] to-blue-400">
              Frequently Asked Questions
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-[#FD673A] to-blue-500 mx-auto rounded-full mb-6" />
          <p className="text-lg text-blue-100/70 max-w-2xl mx-auto">
            Find answers to common questions about our services and process
          </p>
        </motion.div>
        
        {/* Search and Filter */}
        <div className="max-w-3xl mx-auto mb-10">
          <div className="relative mb-6">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiSearch className="h-5 w-5 text-[#FD673A]" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-blue-200/50 focus:outline-none focus:border-[#FD673A] transition-colors"
              placeholder="Search questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          {/* Category filters */}
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? 'bg-[#FD673A] text-white'
                    : 'bg-white/5 text-blue-100/70 hover:bg-white/10'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>
        
        {/* FAQ Items */}
        <div className="max-w-3xl mx-auto">
          {filteredFAQs.length > 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              {filteredFAQs.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true, margin: "-50px" }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg overflow-hidden"
                >
                  <button
                    onClick={() => toggleItem(item.id)}
                    className="w-full text-left px-6 py-4 flex justify-between items-center"
                  >
                    <span className="font-medium text-white">{item.question}</span>
                    <span className="text-[#FD673A] ml-4">
                      {openItemId === item.id ? (
                        <FiMinus className="h-5 w-5" />
                      ) : (
                        <FiPlus className="h-5 w-5" />
                      )}
                    </span>
                  </button>
                  
                  <AnimatePresence>
                    {openItemId === item.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-4 text-blue-100/80">
                          <div className="pt-2 border-t border-white/10">
                            {item.answer}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <div className="text-center py-10">
              <p className="text-blue-100/70 text-lg">No matching questions found.</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('all');
                }}
                className="mt-4 px-6 py-2 bg-[#FD673A]/80 hover:bg-[#FD673A] rounded-full text-white transition-colors"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
        
        {/* Contact prompt */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-blue-100/70 mb-6">
            Can't find what you're looking for? Feel free to reach out directly.
          </p>
          <a
            href="#contact-form"
            className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-[#FD673A] to-blue-600 text-white font-medium hover:shadow-lg hover:shadow-[#FD673A]/20 transition-shadow"
          >
            Ask Your Question
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ; 