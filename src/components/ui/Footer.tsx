'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Github, Twitter, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import Image from 'next/image';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <footer className="bg-[#070B20] border-t border-[#FD673A]/10 pt-16 pb-8 overflow-hidden relative">
      {/* Background gradients */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/3 w-64 h-64 bg-[#FD673A]/5 rounded-full filter blur-[80px]"></div>
        <div className="absolute bottom-0 right-1/3 w-64 h-64 bg-blue-600/5 rounded-full filter blur-[100px]"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Column 1: Company Logo & Info */}
          <motion.div variants={itemVariants} className="space-y-6">
            <Link href="/" className="flex items-center">
              <div className="relative h-10 w-32">
                <Image 
                  src="/jeysol-logo.webp" 
                  alt="JeySol Logo" 
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>
            
            <p className="text-blue-100/60 text-sm max-w-xs">
              Building innovative software solutions that transform challenges into opportunities for businesses worldwide.
            </p>
            
            <div className="flex space-x-4">
              <SocialLink href="https://github.com" icon={<Github size={18} />} label="Github" />
              <SocialLink href="https://twitter.com" icon={<Twitter size={18} />} label="Twitter" />
              <SocialLink href="https://linkedin.com" icon={<Linkedin size={18} />} label="LinkedIn" />
              <SocialLink href="https://instagram.com" icon={<Instagram size={18} />} label="Instagram" />
            </div>
          </motion.div>
          
          {/* Column 2: Site Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-white font-medium mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <FooterLink href="/" label="Home" />
              <FooterLink href="/works" label="Our Work" />
              <FooterLink href="/products" label="Products" />
              <FooterLink href="/about" label="About Us" />
              <FooterLink href="/careers" label="Careers" />
              <FooterLink href="/contact" label="Contact" />
            </ul>
          </motion.div>
          
          {/* Column 3: Services */}
          <motion.div variants={itemVariants}>
            <h3 className="text-white font-medium mb-6">Services</h3>
            <ul className="space-y-3">
              <FooterLink href="/services/web-development" label="Web Development" />
              <FooterLink href="/services/mobile-development" label="Mobile Development" />
              <FooterLink href="/services/software-development" label="Software Development" />
              <FooterLink href="/services/ui-ux-design" label="UI/UX Design" />
              <FooterLink href="/services/graphics-design" label="Graphics Design" />
              <FooterLink href="/services/printing-solutions" label="Printing Solutions" />
            </ul>
          </motion.div>
          
          {/* Column 4: Contact Info */}
          <motion.div variants={itemVariants}>
            <h3 className="text-white font-medium mb-6">Contact Us</h3>
            <ul className="space-y-5">
              <li className="flex items-start">
                <MapPin size={18} className="text-[#FD673A] mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-blue-100/70 text-sm">
                  <span className="font-bold">Jeysol Group Limited</span><br />
                  124 City Road,<br />
                  London, EC1V 2NX,<br />
                  United Kingdom
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="text-[#FD673A] mr-3 flex-shrink-0" />
                <span className="text-blue-100/70 text-sm">+44 (0) 2035760384</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="text-[#FD673A] mr-3 flex-shrink-0" />
                <span className="text-blue-100/70 text-sm">info@jeysol.com</span>
              </li>
            </ul>
          </motion.div>
        </motion.div>
        
        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#FD673A]/20 to-transparent my-8"></div>
        
        {/* Copyright and Legal */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.p 
            className="text-blue-100/50 text-sm text-center md:text-left"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          >
            &copy; {currentYear} JeySol. All rights reserved.
          </motion.p>
          
          <motion.div 
            className="flex space-x-6 mt-4 md:mt-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link href="/privacy" className="text-blue-100/50 text-sm hover:text-[#FD673A] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-blue-100/50 text-sm hover:text-[#FD673A] transition-colors">
              Terms of Service
            </Link>
            <Link href="/cookies" className="text-blue-100/50 text-sm hover:text-[#FD673A] transition-colors">
              Cookie Policy
            </Link>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

// Helper Components
interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon, label }) => {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      aria-label={label}
      className="w-8 h-8 rounded-full flex items-center justify-center bg-gradient-to-br from-[#FD673A]/20 to-blue-900/40 border border-[#FD673A]/20 text-[#FD673A] hover:text-white hover:border-[#FD673A]/40 hover:from-[#FD673A]/30 hover:to-blue-800/40 transition-all duration-300"
    >
      {icon}
    </a>
  );
};

interface FooterLinkProps {
  href: string;
  label: string;
}

const FooterLink: React.FC<FooterLinkProps> = ({ href, label }) => {
  return (
    <li>
      <Link 
        href={href}
        className="text-blue-100/70 text-sm hover:text-[#FD673A] transition-colors duration-300 inline-block"
      >
        {label}
      </Link>
    </li>
  );
};

export default Footer; 