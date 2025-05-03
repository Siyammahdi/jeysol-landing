'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, Phone, Mail, Building } from 'lucide-react';
import { officeLocations } from '@/lib/contactConfig';

const ContactMap: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  
  // Main office (first in the array)
  const mainOffice = officeLocations[0];
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };
  
  return (
    <section 
      ref={sectionRef}
      className="relative py-24 bg-[#0C1338] overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        {/* Abstract gradient shapes */}
        <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-gradient-radial from-indigo-900/20 via-indigo-900/10 to-transparent blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-1/2 h-1/2 bg-gradient-radial from-blue-900/20 via-blue-900/10 to-transparent blur-3xl" />
        
        {/* Subtle dot pattern */}
        <div 
          className="absolute inset-0 opacity-10" 
          style={{ 
            backgroundImage: 'radial-gradient(circle, rgba(99, 102, 241, 0.1) 1px, transparent 1px)', 
            backgroundSize: '30px 30px' 
          }}
        />
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Office Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="order-2 md:order-1"
          >
            {/* Section Title */}
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-400">
                  Visit Our Office
                </span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500 rounded-full mb-8" />
            </motion.div>
            
            {/* Office Details */}
            <div className="space-y-6">
              {/* Office Building */}
              <motion.div variants={itemVariants} className="flex items-start">
                <div className="mr-4 p-3 rounded-lg bg-gradient-to-br from-blue-600/20 to-indigo-600/10 text-blue-400">
                  <Building size={20} />
                </div>
                <div>
                  <h3 className="font-medium text-white text-lg">{mainOffice.title}</h3>
                  <p className="text-blue-100/70 mt-1">{mainOffice.country}</p>
                </div>
              </motion.div>
              
              {/* Address */}
              <motion.div variants={itemVariants} className="flex items-start">
                <div className="mr-4 p-3 rounded-lg bg-gradient-to-br from-blue-600/20 to-indigo-600/10 text-blue-400">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="font-medium text-white">Address</h3>
                  <p className="text-blue-100/70 mt-1">{mainOffice.address},</p>
                  <p className="text-blue-100/70">{mainOffice.city}</p>
                </div>
              </motion.div>
              
              {/* Phone */}
              <motion.div variants={itemVariants} className="flex items-start">
                <div className="mr-4 p-3 rounded-lg bg-gradient-to-br from-blue-600/20 to-indigo-600/10 text-blue-400">
                  <Phone size={20} />
                </div>
                <div>
                  <h3 className="font-medium text-white">Phone</h3>
                  <p className="text-blue-100/70 mt-1">{mainOffice.phone}</p>
                </div>
              </motion.div>
              
              {/* Email */}
              <motion.div variants={itemVariants} className="flex items-start">
                <div className="mr-4 p-3 rounded-lg bg-gradient-to-br from-blue-600/20 to-indigo-600/10 text-blue-400">
                  <Mail size={20} />
                </div>
                <div>
                  <h3 className="font-medium text-white">Email</h3>
                  <p className="text-blue-100/70 mt-1">{mainOffice.email}</p>
                </div>
              </motion.div>
              
              {/* Business Hours - Additional information */}
              <motion.div variants={itemVariants} className="mt-8 p-4 rounded-lg bg-gradient-to-br from-indigo-900/30 to-blue-900/20 border border-indigo-500/10">
                <h3 className="font-medium text-white mb-2">Business Hours</h3>
                <ul className="space-y-1 text-blue-100/70">
                  <li className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Saturday:</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sunday:</span>
                    <span>Closed</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="order-1 md:order-2"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-square md:aspect-auto md:h-[500px] shadow-xl">
              {/* Map placeholder with stylized design */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/50 to-blue-900/40 backdrop-blur-sm">
                {/* Stylized map background */}
                <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjYwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMCAwaDYwMHY2MDBIMHoiIGZpbGw9Im5vbmUiLz48cGF0aCBkPSJNMCAwaDYwMHY2MDBIMHoiIGZpbGw9Im5vbmUiLz48cGF0aCBkPSJNMCAwaDYwMHY2MDBIMHoiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjMDAwIiBvcGFjaXR5PSIuMiIgZD0iTTAgMGg2MDB2NjAwSDB6Ii8+PHBhdGggZD0iTTAgMGg2MDB2NjAwSDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTAgMGg2MDB2NjAwSDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTAgMGg2MDB2NjAwSDB6IiBmaWxsPSJub25lIi8+PHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMzk1QkZDIiBzdHJva2Utd2lkdGg9Ii41IiBkPSJNMTcwLjggOTBsMzEuOS0yMSA1OC41LTMgNjkuOC0xNi41IDUzLjEgMjYuNyA1OC40LTI2LjdoNTYuOGwtMS4zIDM3LjQtNy42IDI2LjctMzQuNiAyMS03LjYgMjYuOC0yMi40IDUuNy01MSA0Mi42LTEzLjQgNTMuMiAyNi44IDM3LjQgMzEuOSA1My4xdjQyLjZsLTI2LjggNDcuOSAyOS4zIDQyLjZoNjEuMWw2OS44LTUuNyAxNS45LTY0LjEtMjAuNi0zNy40IDI5LjMtMzIuMSA0My45LTEzLjMgMzcuMiA3LjkgMzEuNC0yNi43LTEyLjktNjkuOCAxNS45LTI2LjggNjQuMSAxNS45IDI0LjEtMjEiLz48cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMzOTVCRkMiIHN0cm9rZS13aWR0aD0iLjUiIGQ9Ik0xNDQuMSA5MGw1OC41LTIxIDU4LjUtMyA2OS44LTE2LjUgNTMuMSAyNi43IDU4LjQtMjYuN2g1Ni44bC0xLjMgMzcuNC03LjYgMjYuNy0zNC42IDIxLTcuNiAyNi44LTIyLjQgNS43LTUxIDQyLjYtMTMuNCA1My4yIDI2LjggMzcuNCAzMS45IDUzLjF2NDIuNmwtMjYuOCA0Ny45IDI5LjMgNDIuNmg2MS4xbDY5LjgtNS43IDE1LjktNjQuMS0yMC42LTM3LjQgMjkuMy0zMi4xIDQzLjktMTMuMyAzNy4yIDcuOSAzMS40LTI2LjctMTIuOS02OS44IDE1LjktMjYuOCA2NC4xIDE1LjkiLz48cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMzOTVCRkMiIHN0cm9rZS13aWR0aD0iLjUiIGQ9Ik0zMDkuOCAxMTZsNzEuMy0zOS4yIDIxIDM0LjYgNDQuOSAxNi41IDQ3LjkgNzkuNC02LjcgMTQuOSAyMS4yIDMxLjQgNTUuOCAxMi45IDM1LjEgNDEuOSA1Ni4zIDE4LjQgMjMuMSA0MS45IDE2LjUgNTYuNyAzOSAxNiIvPjxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzM5NUJGQyIgc3Ryb2tlLXdpZHRoPSIuNSIgZD0iTTE0Mi4xIDExNmw3MS4zLTM5LjIgMjEgMzQuNiA0NC45IDE2LjUgNDcuOCA3OS40LTYuNyAxNC45IDIxLjMgMzEuNCA1NS43IDEyLjkgMzUuMSA0MS45IDU2LjQgMTguNCAyMy4xIDQxLjkgMTYuNSA1Ni43IDM5IDE2Ii8+PHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMzk1QkZDIiBzdHJva2Utd2lkdGg9Ii41IiBkPSJNMTA1LjYgMTE2bDcxLjMtMzkuMiAyMSAzNC42IDQ0LjkgMTYuNSA0Ny45IDc5LjQtNi43IDE0LjkgMjEuMiAzMS40IDU1LjggMTIuOSAzNS4xIDQxLjkgNTYuMyAxOC40IDIzLjEgNDEuOSAxNi41IDU2LjcgMzkgMTYiLz48L3N2Zz4=')] bg-center bg-no-repeat" />
                
                {/* Grid pattern */}
                <div 
                  className="absolute inset-0 opacity-20" 
                  style={{ 
                    backgroundImage: 'linear-gradient(to right, rgba(99, 102, 241, 0.3) 1px, transparent 1px), linear-gradient(to bottom, rgba(99, 102, 241, 0.3) 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                  }}
                />
                
                {/* Map pin with glowing effect */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <motion.div
                    animate={{ 
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "loop"
                    }}
                    className="w-20 h-20 rounded-full bg-blue-500/10 flex items-center justify-center"
                  >
                    <motion.div
                      animate={{ 
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        repeatType: "loop"
                      }}
                      className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center"
                    >
                      <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center">
                        <MapPin className="text-white" size={14} />
                      </div>
                    </motion.div>
                  </motion.div>
                  
                  {/* City label near pin */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 bg-gradient-to-r from-blue-900/80 to-indigo-900/80 px-3 py-1 rounded-full backdrop-blur-sm border border-indigo-500/20">
                    <p className="text-blue-100 text-sm font-medium whitespace-nowrap">{mainOffice.city}</p>
                  </div>
                </div>
                
                {/* Decorative map elements */}
                <motion.div
                  animate={{ 
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "loop"
                  }}
                  className="absolute top-[30%] right-[20%] w-20 h-20 rounded-full bg-blue-500/5 border border-blue-500/10 flex items-center justify-center"
                />
                
                <motion.div
                  animate={{ 
                    y: [0, 10, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "loop"
                  }}
                  className="absolute bottom-[25%] left-[30%] w-16 h-16 rounded-full bg-indigo-500/5 border border-indigo-500/10 flex items-center justify-center"
                />
                
                {/* Edge glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-transparent to-indigo-500/10"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactMap; 