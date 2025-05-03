'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { projectsData, Project } from '@/data/works';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Calendar, ExternalLink, Github } from 'lucide-react';

type CategoryFilter = 'all' | 'web' | 'mobile' | 'ai' | 'saas';

const WorksPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>('all');
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projectsData);
  const [isLoaded, setIsLoaded] = useState(false);

  // Filter projects when activeFilter changes
  useEffect(() => {
    if (activeFilter === 'all') {
      setFilteredProjects(projectsData);
    } else {
      const filtered = projectsData.filter(project => project.category === activeFilter);
      setFilteredProjects(filtered);
    }
  }, [activeFilter]);

  // Set loaded state after initial render
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: 0.1
      }
    }
  };

  // Filter tabs data
  const filterTabs: { name: string; value: CategoryFilter; count: number }[] = [
    { name: 'All Projects', value: 'all', count: projectsData.length },
    { name: 'Web Apps', value: 'web', count: projectsData.filter(p => p.category === 'web').length },
    { name: 'Mobile Apps', value: 'mobile', count: projectsData.filter(p => p.category === 'mobile').length },
    { name: 'AI Solutions', value: 'ai', count: projectsData.filter(p => p.category === 'ai').length },
    { name: 'SaaS Platforms', value: 'saas', count: projectsData.filter(p => p.category === 'saas').length },
  ];

  return (
    <main className="min-h-screen py-20 md:py-32 overflow-hidden bg-gradient-to-b from-[#0A0F2C] via-[#070B22] to-[#05071A]">
      {/* Background patterns and elements */}
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
              </pattern>
            </defs>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#circuit-pattern)" />
          </svg>
        </div>
        
        {/* Gradient blobs */}
        <div className="absolute top-0 left-[20%] w-[50%] h-[40%] rounded-full bg-gradient-radial from-indigo-600/10 via-indigo-600/5 to-transparent blur-3xl opacity-60" />
        <div className="absolute bottom-[10%] right-[5%] w-[40%] h-[40%] rounded-full bg-gradient-radial from-blue-600/10 via-blue-600/5 to-transparent blur-3xl opacity-50" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Page header */}
        <motion.div 
          className="text-center mb-20"
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          variants={headerVariants}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-teal-400">
              Our Works
            </span>
          </h1>
          
          <motion.div 
            className="w-24 h-1.5 bg-gradient-to-r from-blue-500 via-indigo-500 to-teal-500 mx-auto rounded-full mb-6"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          
          <p className="text-lg md:text-xl text-blue-100/70 max-w-3xl mx-auto">
            Explore our portfolio of innovative digital solutions, transforming ideas into
            impactful experiences across web, mobile, and AI technologies.
          </p>

          {/* Filter tabs */}
          <div className="mt-12 flex flex-wrap justify-center gap-2 md:gap-4">
            {filterTabs.map((tab) => (
              <motion.button
                key={tab.value}
                onClick={() => setActiveFilter(tab.value)}
                className={`relative px-4 py-2 rounded-full backdrop-blur-sm transition-all duration-300 
                  ${activeFilter === tab.value 
                    ? 'bg-indigo-600/20 text-white border border-indigo-500/30' 
                    : 'bg-indigo-950/30 text-blue-200/70 border border-transparent hover:bg-indigo-900/30'}`}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 } 
                }}
              >
                <span>{tab.name}</span>
                {tab.count > 0 && (
                  <span className={`ml-2 inline-flex items-center justify-center w-5 h-5 text-xs rounded-full 
                    ${activeFilter === tab.value ? 'bg-indigo-500/30' : 'bg-indigo-800/30'}`}>
                    {tab.count}
                  </span>
                )}
                {activeFilter === tab.value && (
                  <motion.div 
                    className="absolute inset-0 rounded-full border border-indigo-500/50 z-0"
                    layoutId="activeFilterBorder"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Projects grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
          variants={containerVariants}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
        >
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} variants={itemVariants} />
          ))}
        </motion.div>

        {/* No projects message */}
        {filteredProjects.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center py-20"
          >
            <p className="text-xl text-blue-100/50">No projects found in this category.</p>
          </motion.div>
        )}
      </div>
    </main>
  );
};

const ProjectCard: React.FC<{ 
  project: Project; 
  variants: any;
}> = ({ project, variants }) => {
  // Add handleExternalLinkClick to open links in a new tab
  const handleExternalLinkClick = (e: React.MouseEvent<HTMLButtonElement>, url: string) => {
    e.preventDefault();
    e.stopPropagation();
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <motion.div
      variants={variants}
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
      className="group"
    >
      <Link href={`/works/${project.slug}`} className="block h-full focus:outline-none focus:ring-2 focus:ring-indigo-500/50 rounded-xl">
        <div className="relative h-full overflow-hidden rounded-xl backdrop-blur-sm transition-all duration-300
          bg-gradient-to-br from-indigo-950/40 via-blue-950/30 to-purple-950/40 border border-indigo-500/20 
          group-hover:border-indigo-500/40 group-hover:shadow-[0_8px_30px_rgb(59,130,246,0.15)]">
          
          {/* Enhanced glowing effect on hover */}
          <motion.div 
            className="absolute -inset-1 bg-gradient-to-r from-indigo-500/10 via-blue-500/10 to-purple-500/10 rounded-xl blur-lg opacity-0 
              group-hover:opacity-100 transition-opacity duration-300"
            animate={{
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          
          {/* Project image with zoom effect */}
          <div className="relative w-full h-48 overflow-hidden">
            <div className="absolute inset-0 bg-indigo-900/30 z-10 group-hover:bg-indigo-900/10 transition-all duration-300" />
            <motion.div
              className="relative w-full h-full"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.6 }}
            >
              <Image 
                src={project.coverImage} 
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                quality={90}
              />
            </motion.div>
            
            {/* Category badge */}
            <div className="absolute top-4 left-4 z-10">
              <div className="px-3 py-1 text-xs font-medium rounded-full bg-indigo-600/70 backdrop-blur-sm text-white">
                {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div className="p-6">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-semibold text-white group-hover:text-indigo-300 transition-colors duration-300">
                {project.title}
              </h3>
              <motion.div
                whileHover={{ rotate: 45 }}
                transition={{ duration: 0.3 }}
                className="text-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <ArrowUpRight size={18} />
              </motion.div>
            </div>
            
            <p className="text-blue-100/70 text-sm mb-4 line-clamp-2">
              {project.shortDescription}
            </p>
            
            {/* Tech stack pills */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.techStack.slice(0, 3).map((tech, i) => (
                <span 
                  key={i} 
                  className="text-xs px-2 py-1 rounded-full bg-indigo-900/50 text-indigo-300 border border-indigo-500/20"
                >
                  {tech}
                </span>
              ))}
              {project.techStack.length > 3 && (
                <span className="text-xs px-2 py-1 rounded-full bg-indigo-900/50 text-indigo-300 border border-indigo-500/20">
                  +{project.techStack.length - 3} more
                </span>
              )}
            </div>
            
            {/* Footer with date and links */}
            <div className="flex justify-between items-center pt-2 text-sm text-blue-200/60">
              <div className="flex items-center">
                <Calendar size={14} className="mr-1" />
                <span>{project.launchDate}</span>
              </div>
              
              <div className="flex items-center space-x-2">
                {project.githubUrl && (
                  <button 
                    type="button"
                    className="text-blue-300 hover:text-indigo-400 transition-colors"
                    onClick={(e) => handleExternalLinkClick(e, project.githubUrl!)}
                    aria-label="View GitHub repository"
                  >
                    <Github size={16} />
                  </button>
                )}
                <button 
                  type="button"
                  className="text-blue-300 hover:text-indigo-400 transition-colors"
                  onClick={(e) => handleExternalLinkClick(e, project.websiteUrl)}
                  aria-label="Visit project website"
                >
                  <ExternalLink size={16} />
                </button>
              </div>
            </div>
            
            {/* Read more button (visible on hover) */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-4 pt-4 border-t border-indigo-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <span className="text-indigo-400 text-sm font-medium flex items-center">
                View project details
                <motion.span 
                  initial={{ x: 0 }} 
                  whileHover={{ x: 5 }}
                  className="ml-1"
                >
                  →
                </motion.span>
              </span>
            </motion.div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default WorksPage; 