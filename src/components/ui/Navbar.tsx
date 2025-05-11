"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out",
        isScrolled 
          ? "bg-[#0A0F2C]/90 backdrop-blur-lg py-3 shadow-lg border-b border-[#FD673A]/10" 
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo - Increased size */}
          <Link href="/" className="flex items-center">
            <div className="relative h-12 w-40">
              <Image 
                src="/jeysol-logo.webp" 
                alt="JeySol Logo" 
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation - Updated routes */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink href="/">Home</NavLink>
            {/* <NavLink href="/works">Works</NavLink> */}
            <NavLink href="/products">Products</NavLink>
            <NavLink href="/about">About us</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          </nav>

          {/* Mobile menu button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-[#FD673A] focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              className="h-6 w-6"
            >
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation - Updated routes */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-[#0A0F2C]/95 backdrop-blur-md border-t border-[#FD673A]/10 mt-3"
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <MobileNavLink href="/" onClick={() => setIsMobileMenuOpen(false)}>Home</MobileNavLink>
            <MobileNavLink href="/works" onClick={() => setIsMobileMenuOpen(false)}>Works</MobileNavLink>
            <MobileNavLink href="/products" onClick={() => setIsMobileMenuOpen(false)}>Products</MobileNavLink>
            <MobileNavLink href="/about" onClick={() => setIsMobileMenuOpen(false)}>About us</MobileNavLink>
            <MobileNavLink href="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</MobileNavLink>
            <Link 
              href="/login" 
              className="flex items-center justify-center px-4 py-2 rounded-lg bg-gradient-to-r from-[#FD673A]/20 to-blue-600/20 text-[#FD673A] border border-[#FD673A]/30 hover:bg-[#FD673A]/30 transition duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span>Login</span>
              <svg className="ml-1 w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
                <polyline points="10 17 15 12 10 7"></polyline>
                <line x1="15" y1="12" x2="3" y2="12"></line>
              </svg>
            </Link>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => {
  return (
    <Link 
      href={href} 
      className="text-blue-100/80 hover:text-white transition duration-300 relative group"
    >
      <span>{children}</span>
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#FD673A] to-blue-500 group-hover:w-full transition-all duration-300"></span>
    </Link>
  );
};

interface MobileNavLinkProps extends NavLinkProps {
  onClick: () => void;
}

const MobileNavLink: React.FC<MobileNavLinkProps> = ({ href, onClick, children }) => {
  return (
    <Link 
      href={href} 
      className="block px-4 py-2 text-blue-100 hover:text-[#FD673A] hover:bg-[#FD673A]/5 rounded-lg transition duration-300"
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default Navbar; 