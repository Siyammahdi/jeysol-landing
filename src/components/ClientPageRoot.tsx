'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Project } from '@/data/works';
import Image from 'next/image';
import {
  ArrowLeft,
  Calendar,
  ExternalLink,
  Github,
  User,
} from 'lucide-react';
import Link from 'next/link';

interface ClientPageRootProps {
  project: Project;
}

const ClientPageRoot: React.FC<ClientPageRootProps> = ({ project }) => {
  // Refs for the sections to be animated when in view
  const heroRef = useRef<HTMLDivElement>(null);
  const overviewRef = useRef<HTMLDivElement>(null);
  const techStackRef = useRef<HTMLDivElement>(null);

  // Track when each section is in view
  const isHeroInView = useInView(heroRef, { once: true });
  const isOverviewInView = useInView(overviewRef, { once: true, amount: 0.3 });
  const isTechStackInView = useInView(techStackRef, { once: true, amount: 0.3 });

  // Scroll animation effects
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.1], [0, -50]);

  return (
    <main className="relative min-h-screen pt-24 pb-32 overflow-x-hidden bg-gradient-to-b from-[#0A0F2C] via-[#070B22] to-[#05071A]">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Tech circuit pattern */}
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
              </pattern>
            </defs>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#circuit-pattern)" />
          </svg>
        </div>
        
        {/* Large subtle blobs */}
        <div className="absolute -top-[10%] -left-[10%] w-[65%] h-[65%] rounded-full bg-gradient-radial from-indigo-600/5 via-indigo-600/2 to-transparent blur-3xl opacity-50 animate-blob" />
        <div className="absolute top-[40%] -right-[10%] w-[70%] h-[70%] rounded-full bg-gradient-radial from-blue-600/5 via-blue-600/2 to-transparent blur-3xl opacity-40 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-[10%] left-[20%] w-[50%] h-[50%] rounded-full bg-gradient-radial from-purple-600/5 via-purple-600/2 to-transparent blur-3xl opacity-30 animate-blob animation-delay-4000" />
      </div>

      {/* Back to projects link - fixed on scroll */}
      <motion.div 
        className="fixed top-6 left-4 md:left-8 z-50"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Link 
          href="/works" 
          className="flex items-center px-4 py-2 text-sm font-medium rounded-full
            bg-indigo-900/60 text-indigo-200 border border-indigo-500/30 
            backdrop-blur-md shadow-lg shadow-indigo-500/10
            hover:bg-indigo-800/60 transition-all duration-300"
        >
          <ArrowLeft size={16} className="mr-2" />
          Back to Projects
        </Link>
      </motion.div>

      <div className="relative z-10">
        {/* Hero section */}
        <section 
          ref={heroRef}
          className="relative"
        >
          {/* Hero background with parallax effect */}
          <div className="relative h-[40vh] md:h-[60vh] lg:h-[75vh] overflow-hidden">
            <motion.div
              style={{ opacity, y }}
              className="absolute inset-0 z-0"
            >
              <div className="relative w-full h-full">
                <div className="absolute inset-0 bg-gradient-to-t from-[#070B22] via-[#070B22]/80 to-transparent z-10" />
                <div className="absolute inset-0 bg-indigo-900/30 mix-blend-overlay z-[5]" />
                <Image
                  src={project.coverImage}
                  alt={project.title}
                  fill
                  className="object-cover object-center"
                  priority
                  sizes="100vw"
                  quality={90}
                />
              </div>
            </motion.div>

            {/* Project info overlay */}
            <div className="absolute bottom-0 inset-x-0 z-20">
              <div className="container mx-auto px-4 md:px-6 py-8 md:py-16">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.8 }}
                  className="max-w-4xl"
                >
                  {/* Category badge */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                  >
                    <span className="inline-block px-4 py-1.5 text-sm font-medium rounded-full bg-indigo-600/70 backdrop-blur-sm text-white mb-4">
                      {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                    </span>
                  </motion.div>

                  {/* Project title */}
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight"
                  >
                    <span className="inline relative">
                      {project.title}
                      <motion.div 
                        className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"
                        initial={{ width: 0 }}
                        animate={isHeroInView ? { width: '100%' } : { width: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                      />
                    </span>
                  </motion.h1>

                  {/* Short description */}
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-lg md:text-xl text-blue-100/80 max-w-3xl"
                  >
                    {project.shortDescription}
                  </motion.p>

                  {/* Project meta info */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex flex-wrap gap-4 mt-6"
                  >
                    <div className="flex items-center text-blue-100/70">
                      <Calendar size={18} className="mr-2 text-indigo-400" />
                      <span>Launched: {project.launchDate}</span>
                    </div>
                    <div className="flex items-center text-blue-100/70">
                      <User size={18} className="mr-2 text-indigo-400" />
                      <span>Client: {project.client}</span>
                    </div>
                  </motion.div>

                  {/* Project links */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="flex space-x-4 mt-8"
                  >
                    <a
                      href={project.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white flex items-center transition-colors duration-300"
                    >
                      <span>Visit Website</span>
                      <ExternalLink size={16} className="ml-2" />
                    </a>
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 rounded-lg bg-indigo-900/50 hover:bg-indigo-800 text-indigo-200 border border-indigo-500/30 flex items-center transition-colors duration-300"
                      >
                        <span>View Source</span>
                        <Github size={16} className="ml-2" />
                      </a>
                    )}
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Main content */}
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 pt-16">
            {/* Left column - Main content */}
            <div className="lg:col-span-2">
              {/* Overview section */}
              <section ref={overviewRef} className="mb-16">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={isOverviewInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="flex items-center mb-6">
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={isOverviewInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      className="w-10 h-10 rounded-lg bg-indigo-900/50 border border-indigo-500/30 flex items-center justify-center text-indigo-400 mr-4"
                    >
                      <span className="text-xl font-bold">01</span>
                    </motion.div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white">Overview</h2>
                  </div>

                  <div className="space-y-6 pl-14">
                    {project.fullDescription.map((paragraph, index) => (
                      <motion.p
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={isOverviewInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                        className="text-lg text-blue-100/70"
                      >
                        {paragraph}
                      </motion.p>
                    ))}
                  </div>
                </motion.div>
              </section>
            </div>

            {/* Right column - Sidebar */}
            <div className="lg:col-span-1">
              {/* Tech stack section */}
              <section ref={techStackRef} className="mb-12 sticky top-8">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={isTechStackInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.8 }}
                  className="space-y-8"
                >
                  {/* Project Info Card */}
                  <div className="p-6 rounded-xl backdrop-blur-sm bg-gradient-to-br from-indigo-950/40 via-blue-950/30 to-purple-950/40 border border-indigo-500/20">
                    <h3 className="text-xl font-bold text-white mb-4">Project Info</h3>
                    
                    <div className="space-y-4">
                      {/* Client */}
                      <div className="flex items-start">
                        <div className="w-8 h-8 rounded-lg bg-indigo-900/50 border border-indigo-500/30 flex items-center justify-center text-indigo-400 mr-3 flex-shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                            <circle cx="9" cy="7" r="4" />
                            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-sm text-blue-200 font-medium">Client</p>
                          <p className="text-blue-100">{project.client}</p>
                        </div>
                      </div>
                      
                      {/* Team Size */}
                      <div className="flex items-start">
                        <div className="w-8 h-8 rounded-lg bg-indigo-900/50 border border-indigo-500/30 flex items-center justify-center text-indigo-400 mr-3 flex-shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                            <circle cx="9" cy="7" r="4" />
                            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-sm text-blue-200 font-medium">Team Size</p>
                          <p className="text-blue-100">{project.teamSize} specialists</p>
                        </div>
                      </div>
                      
                      {/* Duration */}
                      <div className="flex items-start">
                        <div className="w-8 h-8 rounded-lg bg-indigo-900/50 border border-indigo-500/30 flex items-center justify-center text-indigo-400 mr-3 flex-shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10" />
                            <polyline points="12 6 12 12 16 14" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-sm text-blue-200 font-medium">Duration</p>
                          <p className="text-blue-100">{project.duration}</p>
                        </div>
                      </div>
                      
                      {/* Launch Date */}
                      <div className="flex items-start">
                        <div className="w-8 h-8 rounded-lg bg-indigo-900/50 border border-indigo-500/30 flex items-center justify-center text-indigo-400 mr-3 flex-shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                            <line x1="16" y1="2" x2="16" y2="6" />
                            <line x1="8" y1="2" x2="8" y2="6" />
                            <line x1="3" y1="10" x2="21" y2="10" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-sm text-blue-200 font-medium">Launch Date</p>
                          <p className="text-blue-100">{project.launchDate}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ClientPageRoot; 