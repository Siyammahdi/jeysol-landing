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
        backdrop-blur-sm border border-indigo-500/20 shadow-lg shadow-indigo-900/10"
    >
      <motion.div 
        layout="position"
        className={`p-6 cursor-pointer ${isExpanded ? 'border-b border-indigo-500/20' : ''}`}
        onClick={toggleExpand}
      >
        <div className="flex justify-between items-start mb-3">
          <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-indigo-600/30 text-indigo-300 border border-indigo-500/30">
            {job.category}
          </span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              toggleExpand();
            }}
            className="text-indigo-400 hover:text-indigo-300 transition-colors"
          >
            {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>
        </div>
        
        <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
          {job.title}
        </h3>
        
        <div className="grid grid-cols-2 md:flex gap-4 md:gap-6 mb-4 text-sm text-blue-100/70">
          <div className="flex items-center">
            <MapPin size={16} className="mr-2 text-indigo-400" />
            <span>{job.location}</span>
          </div>
          <div className="flex items-center">
            <Clock size={16} className="mr-2 text-indigo-400" />
            <span>{job.type}</span>
          </div>
          <div className="flex items-center">
            <Calendar size={16} className="mr-2 text-indigo-400" />
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
                  <span className="w-6 h-6 rounded-full bg-indigo-600/30 flex items-center justify-center text-indigo-400 mr-2 text-sm">
                    1
                  </span>
                  Responsibilities
                </h4>
                <ul className="space-y-2 text-blue-100/70">
                  {job.responsibilities.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <ArrowDownRight size={16} className="text-indigo-400 mr-2 mt-1 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                  <span className="w-6 h-6 rounded-full bg-indigo-600/30 flex items-center justify-center text-indigo-400 mr-2 text-sm">
                    2
                  </span>
                  Requirements
                </h4>
                <ul className="space-y-2 text-blue-100/70">
                  {job.requirements.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <ArrowDownRight size={16} className="text-indigo-400 mr-2 mt-1 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="mt-6">
              <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                <span className="w-6 h-6 rounded-full bg-indigo-600/30 flex items-center justify-center text-indigo-400 mr-2 text-sm">
                  3
                </span>
                Required Skills
              </h4>
              <div className="flex flex-wrap gap-2">
                {job.skills.map((skill, i) => (
                  <span 
                    key={i} 
                    className="inline-block px-3 py-1.5 text-sm rounded-full bg-indigo-900/50 
                      text-indigo-300 border border-indigo-500/20"
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
                className="px-6 py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white 
                  flex items-center transition-colors duration-300 shadow-md shadow-indigo-600/20"
              >
                Apply for this position
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
      {/* Background elements */}
      <div className="absolute inset-0 bg-[#090E27]/30"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="mb-3"
          >
            <span className="inline-block px-4 py-1.5 text-sm font-medium rounded-full bg-indigo-600/30 backdrop-blur-sm text-indigo-200 border border-indigo-500/20">
              Career Opportunities
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Open Positions
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto text-lg text-blue-100/70"
          >
            Explore our current job openings and find the perfect role for your skills and aspirations.
          </motion.p>
        </div>
        
        {/* Category filter */}
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
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20' 
                  : 'bg-indigo-900/30 text-indigo-300 border border-indigo-500/20 hover:bg-indigo-800/40'
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
                className="text-center py-16"
              >
                <p className="text-blue-100/70 text-lg">
                  No open positions in this category right now. Check back soon or drop your resume for future opportunities.
                </p>
                <a 
                  href="#resume-drop" 
                  className="inline-block mt-4 px-6 py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white transition-colors duration-300"
                >
                  Submit Your Resume
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default OpenPositions; 