'use client';

import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import { teamMembers } from '@/lib/mock-team';
import { Github, Linkedin, Twitter } from 'lucide-react';

const MeetTheTeam: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const isHeadingInView = useInView(headingRef, { once: true, amount: 0.5 });
  
  return (
    <section 
      id="team"
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden bg-[#0A0F2C]"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Tech grid background */}
        <div className="absolute inset-0 tech-grid-bg opacity-40"></div>
        
        {/* Background noise texture */}
        <div 
          className="absolute inset-0 opacity-20" 
          style={{ 
            backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
            backgroundSize: '200px 200px'
          }}
        ></div>
      </div>
      
      {/* Content Container */}
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div ref={headingRef} className="text-center mb-16 md:mb-24">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4 tracking-tight"
            style={{
              opacity: isHeadingInView ? 1 : 0,
              y: isHeadingInView ? 0 : 50,
              transition: "opacity 0.6s ease-out, transform 0.8s ease-out"
            }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-teal-400">
              Meet the Team
            </span>
          </motion.h2>
          
          <motion.div 
            className="w-20 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-teal-500 mx-auto rounded-full mb-6"
            initial={{ width: 0, opacity: 0 }}
            animate={isHeadingInView ? { width: 80, opacity: 1 } : { width: 0, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          
          <motion.p
            className="text-xl text-blue-100/70 max-w-3xl mx-auto font-light"
            style={{
              opacity: isHeadingInView ? 1 : 0,
              y: isHeadingInView ? 0 : 30,
              transition: "opacity 0.6s ease-out, transform 0.8s ease-out 0.2s"
            }}
          >
            The talented people behind our success
          </motion.p>
        </div>
        
        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {teamMembers.map((member, index) => (
            <TeamMemberCard 
              key={member.id}
              name={member.name}
              role={member.role}
              motto={member.motto}
              imageUrl={member.imageUrl}
              socialLinks={member.socialLinks}
              index={index}
            />
          ))}
        </div>
        
        {/* View Full Team Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 flex justify-center"
        >
          <Link href="#" className="group relative inline-flex items-center">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-violet-600 rounded-lg blur opacity-60 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse-slow"></div>
            <button className="relative px-8 py-4 font-medium text-white bg-[#0A0F2C] rounded-lg leading-none flex items-center">
              <span>View Full Team</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

// Team Member Card Component
interface TeamMemberCardProps {
  name: string;
  role: string;
  motto: string;
  imageUrl: string;
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
  index: number;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ 
  name, 
  role, 
  motto, 
  imageUrl, 
  socialLinks,
  index
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.3 });
  
  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        type: "spring",
        stiffness: 100,
        damping: 15
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative group"
    >
      {/* Card Container */}
      <div className="relative bg-gradient-to-br from-blue-900/20 to-indigo-900/10 backdrop-blur-sm rounded-2xl overflow-hidden aspect-[3/4] flex flex-col h-full z-10">
        {/* Team member image */}
        <div className="relative w-full h-3/4 overflow-hidden">
          {/* Placeholder for image with gradients */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 to-indigo-900/60 z-10"></div>
          
          {/* Initials placeholder */}
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <span className="text-6xl font-bold text-white/40">
              {name.split(' ').map(n => n[0]).join('')}
            </span>
          </div>
          
          {/* Ambient glow on hover */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-t from-blue-500/0 to-indigo-500/0 z-30"
            animate={{
              background: isHovered 
                ? 'linear-gradient(to top, rgba(59, 130, 246, 0.1), rgba(99, 102, 241, 0.2))' 
                : 'linear-gradient(to top, rgba(59, 130, 246, 0), rgba(99, 102, 241, 0))'
            }}
            transition={{ duration: 0.3 }}
          />
        </div>
        
        {/* Info section */}
        <div className="p-5 flex-1 flex flex-col justify-between z-10 relative">
          <div>
            <h3 className="text-xl font-bold text-white">{name}</h3>
            <p className="text-blue-300 text-sm">{role}</p>
          </div>
          
          {/* Motto - Only visible on hover */}
          <motion.div 
            className="overflow-hidden"
            animate={{
              height: isHovered ? 'auto' : 0,
              opacity: isHovered ? 1 : 0,
              marginTop: isHovered ? '0.75rem' : 0
            }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-blue-100/70 text-sm italic">"{motto}"</p>
          </motion.div>
          
          {/* Social links - Only visible on hover */}
          <motion.div 
            className="flex gap-3 mt-4 overflow-hidden"
            animate={{
              height: isHovered ? 'auto' : 0,
              opacity: isHovered ? 1 : 0
            }}
            transition={{ duration: 0.3 }}
          >
            {socialLinks?.linkedin && (
              <Link 
                href={socialLinks.linkedin}
                className="text-blue-300 hover:text-blue-100 transition-colors duration-200"
                aria-label={`${name}'s LinkedIn profile`}
              >
                <Linkedin size={18} />
              </Link>
            )}
            {socialLinks?.twitter && (
              <Link 
                href={socialLinks.twitter}
                className="text-blue-300 hover:text-blue-100 transition-colors duration-200"
                aria-label={`${name}'s Twitter profile`}
              >
                <Twitter size={18} />
              </Link>
            )}
            {socialLinks?.github && (
              <Link 
                href={socialLinks.github}
                className="text-blue-300 hover:text-blue-100 transition-colors duration-200"
                aria-label={`${name}'s GitHub profile`}
              >
                <Github size={18} />
              </Link>
            )}
          </motion.div>
        </div>
      </div>
      
      {/* Background and hover effects */}
      <motion.div 
        className="absolute inset-0 rounded-2xl z-0"
        animate={{
          background: isHovered 
            ? 'linear-gradient(145deg, rgba(59, 130, 246, 0.2), rgba(99, 102, 241, 0.3))' 
            : 'rgba(0, 0, 0, 0)',
          scale: isHovered ? 1.05 : 1,
          y: isHovered ? -8 : 0
        }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Glow effect on hover */}
      <motion.div 
        className="absolute -inset-1 rounded-2xl z-0 opacity-0"
        animate={{
          boxShadow: isHovered 
            ? '0 20px 40px -20px rgba(66, 71, 112, 0.5)' 
            : '0 0 0 0 rgba(66, 71, 112, 0)',
          opacity: isHovered ? 0.5 : 0
        }}
        transition={{ duration: 0.4 }}
      />
    </motion.div>
  );
};

export default MeetTheTeam; 