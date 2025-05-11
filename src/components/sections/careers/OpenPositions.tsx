'use client';

import React, { useRef, useState } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { jobPostings, JobPosting } from '@/data/careers';
import { ArrowDownRight, ChevronDown, ChevronUp, MapPin, Clock, Calendar } from 'lucide-react';

const JobCard = ({ job }: { job: JobPosting }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };
  
  return (
    <motion.div 
      layout
      className="rounded-xl overflow-hidden bg-gradient-to-br from-indigo-950/40 via-indigo-900/30 to-indigo-900/30 
        backdrop-blur-sm border border-indigo-500/20 shadow-lg shadow-indigo-900/10 hover:shadow-[#FD673A]/10 transition-all duration-300"
      whileHover={{
        boxShadow: "0 10px 30px rgba(253, 103, 58, 0.15)",
        borderColor: "rgba(253, 103, 58, 0.3)"
      }}
    >
      <motion.div 
        layout="position"
        className={`p-6 cursor-pointer ${isExpanded ? 'border-b border-[#FD673A]/20' : ''}`}
        onClick={toggleExpand}
      >
        <div className="flex justify-between items-start mb-3">
          <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-[#FD673A]/20 to-indigo-600/30 text-[#FD673A] border border-[#FD673A]/30">
            {job.category}
          </span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              toggleExpand();
            }}
            className="text-[#FD673A] hover:text-[#FD673A]/80 transition-colors"
          >
            {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>
        </div>
        
        <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-[#FD673A]/90 transition-colors">
          {job.title}
        </h3>
        
        <div className="grid grid-cols-2 md:flex gap-4 md:gap-6 mb-4 text-sm text-blue-100/70">
          <div className="flex items-center">
            <MapPin size={16} className="mr-2 text-[#FD673A]" />
            <span>{job.location}</span>
          </div>
          <div className="flex items-center">
            <Clock size={16} className="mr-2 text-[#FD673A]" />
            <span>{job.type}</span>
          </div>
          <div className="flex items-center">
            <Calendar size={16} className="mr-2 text-[#FD673A]" />
            <span>Posted: {formatDate(job.postedDate)}</span>
          </div>
        </div>
        
        <p className="text-blue-100/70">
          {job.description}
        </p>
      </motion.div>
      
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="p-6 pt-4 overflow-hidden"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                  <span className="w-6 h-6 rounded-full bg-gradient-to-br from-[#FD673A]/30 to-indigo-600/30 flex items-center justify-center text-white mr-2 text-sm">
                    1
                  </span>
                  Responsibilities
                </h4>
                <ul className="space-y-2 text-blue-100/70">
                  {job.responsibilities.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <ArrowDownRight size={16} className="text-[#FD673A] mr-2 mt-1 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                  <span className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-600/30 to-[#FD673A]/30 flex items-center justify-center text-white mr-2 text-sm">
                    2
                  </span>
                  Requirements
                </h4>
                <ul className="space-y-2 text-blue-100/70">
                  {job.requirements.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <ArrowDownRight size={16} className="text-[#FD673A] mr-2 mt-1 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="mt-6">
              <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                <span className="w-6 h-6 rounded-full bg-gradient-to-br from-[#FD673A]/30 to-blue-600/30 flex items-center justify-center text-white mr-2 text-sm">
                  3
                </span>
                Required Skills
              </h4>
              <div className="flex flex-wrap gap-2">
                {job.skills.map((skill, i) => (
                  <span 
                    key={i} 
                    className="inline-block px-3 py-1.5 text-sm rounded-full bg-indigo-900/50 
                      text-indigo-300 border border-indigo-500/20 hover:border-[#FD673A]/30 hover:text-[#FD673A]/90 transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-8 flex justify-end"
            >
              <a 
                href="#resume-drop" 
                className="group relative px-6 py-2.5 rounded-lg text-white flex items-center transition-all duration-300"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#FD673A] to-blue-500 rounded-lg blur opacity-30 group-hover:opacity-60 transition duration-300"></div>
                <div className="relative bg-[#0A0F2C] rounded-lg px-6 py-2.5 flex items-center">
                  <span>Apply for this position</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const OpenPositions = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  
  const [activeFilter, setActiveFilter] = useState<string>("All");
  
  const categories = ["All", ...Array.from(new Set(jobPostings.map(job => job.category)))];
  
  const filteredJobs = activeFilter === "All" 
    ? jobPostings 
    : jobPostings.filter(job => job.category === activeFilter);
  
  return (
    <section 
      ref={sectionRef}
      className="py-24 relative"
      id="open-positions"
    >
      {/* Enhanced Background elements */}
      <div className="absolute inset-0 bg-[#090E27]/30"></div>
      
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FD673A]/5 via-transparent to-blue-500/5"></div>
      
      {/* Subtle dot pattern */}
      <div className="absolute inset-0 opacity-[0.03]" 
        style={{ 
          backgroundImage: 'radial-gradient(circle, rgba(253, 103, 58, 0.4) 1px, transparent 1px)', 
          backgroundSize: '30px 30px' 
        }}
      />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="mb-3"
          >
            <span className="inline-block px-4 py-1.5 text-sm font-medium rounded-full bg-gradient-to-r from-[#FD673A]/20 to-blue-500/20 backdrop-blur-sm text-[#FD673A] border border-[#FD673A]/30 shadow-lg shadow-[#FD673A]/5">
              Career Opportunities
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-[#FD673A] to-indigo-400"
          >
            Open Positions
          </motion.h2>
          
          <motion.div 
            className="w-20 h-[2px] mx-auto mb-6 overflow-hidden relative"
            initial={{ width: 0, opacity: 0 }}
            animate={isInView ? { width: 80, opacity: 1 } : { width: 0, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              animate={{
                x: ['-100%', '100%'],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut"
              }}
              className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-[#FD673A] to-blue-400/0 rounded-full w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-[#FD673A] to-blue-400 rounded-full opacity-40" />
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto text-lg text-blue-100/70"
          >
            Explore our current job openings and find the perfect role for your skills and aspirations.
          </motion.p>
        </div>
        
        {/* Category filter - updated with gradient effects */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveFilter(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === category 
                  ? 'bg-gradient-to-r from-[#FD673A] to-blue-500 text-white shadow-md shadow-[#FD673A]/20' 
                  : 'bg-indigo-900/30 text-blue-300 border border-indigo-500/20 hover:border-[#FD673A]/30 hover:text-[#FD673A]'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>
        
        {/* Job listings */}
        <motion.div
          layout
          className="space-y-6 max-w-4xl mx-auto"
        >
          <AnimatePresence mode="wait">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job, index) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <JobCard job={job} />
                </motion.div>
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="bg-gradient-to-br from-indigo-950/40 to-indigo-900/30 backdrop-blur-sm
                  border border-indigo-500/20 rounded-xl p-12 text-center"
              >
                <p className="text-lg text-blue-100/70">No positions available in this category at the moment.</p>
                <p className="text-[#FD673A] mt-2">Please check back later or explore other categories.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default OpenPositions; 