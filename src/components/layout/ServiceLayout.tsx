'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Navbar from '../ui/Navbar';
import Footer from '../ui/Footer';

interface ServiceLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
  heroImage: string;
  nextService?: {
    title: string;
    path: string;
  };
  color: string;
  icon: React.ReactNode;
}

const ServiceLayout: React.FC<ServiceLayoutProps> = ({
  children,
  title,
  subtitle,
  heroImage,
  nextService,
  color,
  icon
}) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [isClient, setIsClient] = useState(false);
  
  // Mark client-side rendering
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Parallax scrolling effect
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);

  // Get color classes based on the color prop
  const getColorClasses = () => {
    switch(color) {
      case 'blue':
        return {
          gradient: 'from-blue-600 to-blue-400',
          button: 'bg-blue-500 hover:bg-blue-600',
          border: 'border-blue-500/20',
          text: 'text-blue-500',
          accent: 'bg-blue-500/10'
        };
      case 'orange':
        return {
          gradient: 'from-[#FD673A] to-orange-400',
          button: 'bg-[#FD673A] hover:bg-orange-600',
          border: 'border-[#FD673A]/20',
          text: 'text-[#FD673A]',
          accent: 'bg-[#FD673A]/10'
        };
      case 'purple':
        return {
          gradient: 'from-purple-600 to-purple-400',
          button: 'bg-purple-500 hover:bg-purple-600',
          border: 'border-purple-500/20',
          text: 'text-purple-500',
          accent: 'bg-purple-500/10'
        };
      case 'teal':
        return {
          gradient: 'from-teal-600 to-teal-400',
          button: 'bg-teal-500 hover:bg-teal-600',
          border: 'border-teal-500/20',
          text: 'text-teal-500',
          accent: 'bg-teal-500/10'
        };
      case 'green':
        return {
          gradient: 'from-green-600 to-green-400',
          button: 'bg-green-500 hover:bg-green-600',
          border: 'border-green-500/20',
          text: 'text-green-500',
          accent: 'bg-green-500/10'
        };
      case 'indigo':
        return {
          gradient: 'from-indigo-600 to-indigo-400',
          button: 'bg-indigo-500 hover:bg-indigo-600',
          border: 'border-indigo-500/20',
          text: 'text-indigo-500',
          accent: 'bg-indigo-500/10'
        };
      default:
        return {
          gradient: 'from-[#FD673A] to-blue-500',
          button: 'bg-[#FD673A] hover:bg-orange-600',
          border: 'border-[#FD673A]/20',
          text: 'text-[#FD673A]',
          accent: 'bg-[#FD673A]/10'
        };
    }
  };

  const colorClasses = getColorClasses();

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <div ref={heroRef} className="relative min-h-[70vh] flex items-center bg-[#080D24] overflow-hidden">
        {/* Parallax Background Image */}
        {isClient && (
          <motion.div
            style={{ y, scale }}
            className="absolute inset-0 z-0"
          >
            <div className="absolute inset-0 bg-[#080D24]/70 z-10"></div>
            <div className="relative h-full w-full">
              <Image
                src={heroImage}
                alt={title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        )}
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#080D24]/0 via-[#080D24]/20 to-[#080D24] z-10"></div>
        
        {/* Content */}
        <motion.div 
          style={{ opacity }}
          className="container mx-auto px-4 md:px-6 relative z-20 pt-32 pb-16"
        >
          <div className="max-w-5xl mx-auto">
            <Link 
              href="/#services" 
              className="inline-flex items-center text-white/70 hover:text-white mb-6 transition-colors duration-300"
            >
              <ArrowLeft size={16} className="mr-2" />
              <span>Back to Services</span>
            </Link>
            
            <div className="flex items-center mb-6">
              <div className={`mr-4 w-14 h-14 rounded-xl ${colorClasses.accent} flex items-center justify-center ${colorClasses.text}`}>
                {icon}
              </div>
              
              <div className="bg-gradient-to-r text-transparent bg-clip-text ${colorClasses.gradient} text-sm font-medium uppercase tracking-wider">
                {subtitle}
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              {title}
            </h1>
            
            <div className="w-20 h-1 bg-gradient-to-r ${colorClasses.gradient} mb-8"></div>
          </div>
        </motion.div>
      </div>
      
      {/* Main Content */}
      <div className="bg-[#0A0F2C] pb-24">
        <div className="container mx-auto px-4 md:px-6 -mt-12 relative z-30">
          <div className="bg-[#0F1635] shadow-xl rounded-xl p-8 md:p-12 max-w-5xl mx-auto">
            {children}
          </div>
        </div>
      </div>
      
      {/* Next Service Section */}
      {nextService && (
        <div className="bg-[#080B1E] py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center">
              <h3 className="text-lg text-white/70 mb-3">Next Service</h3>
              <Link href={nextService.path}>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 inline-block hover:text-[#FD673A] transition-colors duration-300">
                  {nextService.title}
                </h2>
              </Link>
              <div className="flex justify-center">
                <Link 
                  href={nextService.path}
                  className={`px-8 py-3 rounded-lg text-white ${colorClasses.button} transition-all duration-300 inline-flex items-center shadow-lg`}
                >
                  <span>Learn More</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
      
      <Footer />
    </>
  );
};

export default ServiceLayout; 