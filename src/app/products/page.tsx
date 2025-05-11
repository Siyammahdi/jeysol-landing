'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Check, Star, Utensils, ShoppingBag, Store, Receipt, BarChart, Users, Clock, Shield, Database, Cloud, Smartphone, Laptop, Zap } from 'lucide-react';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';

const ProductsPage = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'features' | 'pricing'>('overview');
  const [activeProduct, setActiveProduct] = useState(0);
  
  // Product data
  const products = [
    {
      id: 1,
      name: "Meal Deal Finder",
      tagline: "Global Restaurant Management Solution",
      description: "A comprehensive platform for restaurants to manage food orders, deals, promotions, and customer relationships—all in one place. Streamline operations and boost customer engagement worldwide.",
      image: "/placeholder.jpg",
      features: [
        "Order management system",
        "Deal & promotion creation",
        "Menu customization",
        "Customer loyalty program",
        "Analytics dashboard",
        "Multi-location support",
        "Mobile ordering integration",
        "Inventory tracking"
      ],
      pricing: [
        {
          name: "Starter",
          price: "$79",
          period: "per month",
          features: [
            "Single location",
            "Basic order management",
            "Simple deal creation",
            "Email support",
            "Mobile app access"
          ]
        },
        {
          name: "Business",
          price: "$199",
          period: "per month",
          features: [
            "Up to 3 locations",
            "Advanced order management",
            "Deal & promotion tools",
            "Customer loyalty program",
            "Priority support",
            "Analytics dashboard"
          ],
          popular: true
        },
        {
          name: "Enterprise",
          price: "Custom",
          period: "",
          features: [
            "Unlimited locations",
            "Full feature access",
            "API integration",
            "Dedicated account manager",
            "24/7 premium support",
            "Custom branding",
            "Advanced analytics"
          ]
        }
      ]
    },
    {
      id: 2,
      name: "JS-POS",
      tagline: "Cloud-Based Point of Sale System",
      description: "A powerful, cloud-based Point of Sale system built to streamline sales, inventory, and customer management for any business—from retail shops and cafés to restaurants, takeaways, and multi-location enterprises.",
      image: "/placeholder.jpg",
      features: [
        "Real-time cloud synchronization",
        "Multi-location management",
        "Inventory tracking",
        "Customer relationship tools",
        "Automatic backups",
        "Sales analytics",
        "Employee management",
        "Mobile access anywhere"
      ],
      pricing: [
        {
          name: "Basic",
          price: "$99",
          period: "per month",
          features: [
            "Single register",
            "Cloud synchronization",
            "Basic reporting",
            "Inventory management",
            "Email support"
          ]
        },
        {
          name: "Professional",
          price: "$249",
          period: "per month",
          features: [
            "Up to 5 registers",
            "Advanced reporting",
            "Customer management",
            "Employee controls",
            "Priority support",
            "API access"
          ],
          popular: true
        },
        {
          name: "Enterprise",
          price: "Custom",
          period: "",
          features: [
            "Unlimited registers",
            "Multi-location support",
            "Custom integrations",
            "Advanced security",
            "24/7 dedicated support",
            "White labeling options",
            "Dedicated server"
          ]
        }
      ]
    }
  ];

  // Tab variants for animation
  const tabVariants = {
    active: {
      color: '#FD673A',
      borderColor: '#FD673A',
      transition: { duration: 0.3 }
    },
    inactive: {
      color: 'rgba(148, 163, 184, 0.7)',
      borderColor: 'transparent',
      transition: { duration: 0.3 }
    }
  };

  // Content variants for animation
  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  // Product-specific icons
  const getProductIcons = (productIndex: number) => {
    if (productIndex === 0) { // Meal Deal Finder
      return [
        <Utensils key="utensils" className="w-5 h-5 text-[#FD673A]" />,
        <ShoppingBag key="bag" className="w-5 h-5 text-[#FD673A]" />,
        <Users key="users" className="w-5 h-5 text-[#FD673A]" />
      ];
    } else { // JS-POS
      return [
        <Store key="store" className="w-5 h-5 text-[#FD673A]" />,
        <Receipt key="receipt" className="w-5 h-5 text-[#FD673A]" />,
        <BarChart key="chart" className="w-5 h-5 text-[#FD673A]" />
      ];
    }
  };

  return (
    <main className="flex flex-col min-h-screen bg-[#0A0F2C]">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-blue-500/10 via-transparent to-transparent opacity-60 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-radial from-[#FD673A]/10 via-transparent to-transparent opacity-60 blur-3xl"></div>
          
          {/* Grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(to_right,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-block mb-6">
              <span className="px-4 py-1.5 text-xs font-medium tracking-wider text-[#FD673A] uppercase bg-gradient-to-r from-[#FD673A]/20 to-blue-500/10 backdrop-blur-sm rounded-full border border-[#FD673A]/30 shadow-lg shadow-[#FD673A]/5">
                Our Products
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              Powerful Solutions for 
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-[#FD673A] to-blue-400 ml-2">Modern Businesses</span>
            </h1>
            
            <p className="text-xl text-blue-100/70 max-w-3xl mx-auto">
              We've crafted innovative products designed to transform how businesses operate in today's competitive landscape. Explore our flagship offerings below.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Products Showcase */}
      <section className="py-16 md:py-24 relative">
        <div className="container mx-auto px-4 md:px-6">
          {/* Product Selection Tabs */}
          <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-8 mb-16">
            {products.map((product, index) => (
              <motion.button
                key={product.id}
                className={`px-8 py-4 rounded-xl text-lg md:text-xl font-medium transition-all duration-300 ${activeProduct === index 
                  ? 'bg-gradient-to-r from-[#FD673A]/20 to-blue-600/20 border border-[#FD673A]/30 text-white' 
                  : 'bg-[#0F1635] border border-blue-500/10 text-blue-100/70 hover:border-blue-500/30'}`}
                onClick={() => setActiveProduct(index)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {product.name}
              </motion.button>
            ))}
          </div>
          
          {/* Active Product Display */}
          <motion.div
            key={activeProduct}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          >
            {/* Product Image */}
            <div className="relative">
              <div className="aspect-[16/9] rounded-2xl overflow-hidden border-2 border-blue-500/20 shadow-2xl shadow-blue-500/10">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 to-[#0A0F2C]/80 z-10"></div>
                <Image 
                  src={products[activeProduct].image} 
                  alt={products[activeProduct].name} 
                  width={800} 
                  height={450} 
                  className="object-cover w-full h-full"
                  onError={(e) => {
                    // If image fails to load, replace with a fallback
                    const target = e.target as HTMLImageElement;
                    target.onerror = null; // Prevent infinite loop
                    target.src = '/jeysol-logo.webp'; // Fallback to logo
                  }}
                />
              </div>
              
              {/* Floating badges */}
              <motion.div 
                className="absolute -top-6 -right-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <span className="text-sm font-medium">Enterprise Ready</span>
              </motion.div>
              
              <motion.div 
                className="absolute -bottom-6 -left-6 bg-gradient-to-r from-[#FD673A] to-orange-600 text-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <Star className="w-4 h-4 fill-white" />
                <span className="text-sm font-medium">Top Rated</span>
              </motion.div>
            </div>
            
            {/* Product Info */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2 text-white">
                {products[activeProduct].name}
              </h2>
              
              <p className="text-xl text-[#FD673A] font-medium mb-4">
                {products[activeProduct].tagline}
              </p>
              
              <p className="text-blue-100/70 mb-8 text-lg">
                {products[activeProduct].description}
              </p>
              
              {/* Tabs */}
              <div className="flex border-b border-blue-500/20 mb-6">
                <motion.button
                  className={`px-4 py-2 border-b-2 text-lg font-medium`}
                  variants={tabVariants}
                  animate={activeTab === 'overview' ? 'active' : 'inactive'}
                  onClick={() => setActiveTab('overview')}
                >
                  Overview
                </motion.button>
                
                <motion.button
                  className={`px-4 py-2 border-b-2 text-lg font-medium`}
                  variants={tabVariants}
                  animate={activeTab === 'features' ? 'active' : 'inactive'}
                  onClick={() => setActiveTab('features')}
                >
                  Features
                </motion.button>
                
                <motion.button
                  className={`px-4 py-2 border-b-2 text-lg font-medium`}
                  variants={tabVariants}
                  animate={activeTab === 'pricing' ? 'active' : 'inactive'}
                  onClick={() => setActiveTab('pricing')}
                >
                  Pricing
                </motion.button>
              </div>
              
              {/* Tab Content */}
              <motion.div 
                key={activeTab}
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                className="min-h-[300px]"
              >
                {/* Overview Tab */}
                {activeTab === 'overview' && (
                  <div className="space-y-6">
                    <p className="text-blue-100/70">
                      {activeProduct === 0 ? (
                        <>Meal Deal Finder is a global software service designed specifically for restaurants. Our platform helps restaurant owners and managers efficiently handle orders, create enticing deals, manage promotions, and build stronger customer relationships.</>
                      ) : (
                        <>JS-POS delivers real-time performance anytime, anywhere. It fits seamlessly into your operations—whether you're serving behind the counter or managing multiple locations. With automatic backups, live data access, and effortless updates, you stay in control—without the tech headaches.</>
                      )}
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                      <div className="bg-blue-900/20 p-6 rounded-xl border border-blue-500/20">
                        <h3 className="text-xl font-semibold text-white mb-2">Key Benefits</h3>
                        <ul className="space-y-2">
                          {activeProduct === 0 ? (
                            <>
                              <li className="flex items-center text-blue-100/70">
                                <Check className="w-5 h-5 text-[#FD673A] mr-2" />
                                <span>Streamlined order management</span>
                              </li>
                              <li className="flex items-center text-blue-100/70">
                                <Check className="w-5 h-5 text-[#FD673A] mr-2" />
                                <span>Increased customer engagement</span>
                              </li>
                              <li className="flex items-center text-blue-100/70">
                                <Check className="w-5 h-5 text-[#FD673A] mr-2" />
                                <span>Simplified deal creation</span>
                              </li>
                            </>
                          ) : (
                            <>
                              <li className="flex items-center text-blue-100/70">
                                <Check className="w-5 h-5 text-[#FD673A] mr-2" />
                                <span>Run smoother operations</span>
                              </li>
                              <li className="flex items-center text-blue-100/70">
                                <Check className="w-5 h-5 text-[#FD673A] mr-2" />
                                <span>Serve customers faster</span>
                              </li>
                              <li className="flex items-center text-blue-100/70">
                                <Check className="w-5 h-5 text-[#FD673A] mr-2" />
                                <span>Grow your business stronger</span>
                              </li>
                            </>
                          )}
                        </ul>
                      </div>
                      
                      <div className="bg-blue-900/20 p-6 rounded-xl border border-blue-500/20">
                        <h3 className="text-xl font-semibold text-white mb-2">Use Cases</h3>
                        <ul className="space-y-2">
                          {activeProduct === 0 ? (
                            <>
                              <li className="flex items-center text-blue-100/70">
                                <Check className="w-5 h-5 text-[#FD673A] mr-2" />
                                <span>Fine dining restaurants</span>
                              </li>
                              <li className="flex items-center text-blue-100/70">
                                <Check className="w-5 h-5 text-[#FD673A] mr-2" />
                                <span>Quick service restaurants</span>
                              </li>
                              <li className="flex items-center text-blue-100/70">
                                <Check className="w-5 h-5 text-[#FD673A] mr-2" />
                                <span>Restaurant chains</span>
                              </li>
                            </>
                          ) : (
                            <>
                              <li className="flex items-center text-blue-100/70">
                                <Check className="w-5 h-5 text-[#FD673A] mr-2" />
                                <span>Retail shops</span>
                              </li>
                              <li className="flex items-center text-blue-100/70">
                                <Check className="w-5 h-5 text-[#FD673A] mr-2" />
                                <span>Cafés and restaurants</span>
                              </li>
                              <li className="flex items-center text-blue-100/70">
                                <Check className="w-5 h-5 text-[#FD673A] mr-2" />
                                <span>Multi-location enterprises</span>
                              </li>
                            </>
                          )}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="flex justify-center mt-8">
                      <Link href="/contact" className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-[#FD673A] to-orange-600 text-white font-medium transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#FD673A]/20">
                        <span>Request a Demo</span>
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </Link>
                    </div>
                  </div>
                )}
                
                {/* Features Tab */}
                {activeTab === 'features' && (
                  <div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {products[activeProduct].features.map((feature, index) => (
                        <div key={index} className="flex items-center p-4 rounded-lg bg-blue-900/20 border border-blue-500/10">
                          <div className="w-8 h-8 rounded-full bg-[#FD673A]/20 flex items-center justify-center mr-3">
                            {activeProduct === 0 ? (
                              index === 0 ? <Utensils className="w-4 h-4 text-[#FD673A]" /> :
                              index === 1 ? <ShoppingBag className="w-4 h-4 text-[#FD673A]" /> :
                              index === 2 ? <Users className="w-4 h-4 text-[#FD673A]" /> :
                              index === 3 ? <Database className="w-4 h-4 text-[#FD673A]" /> :
                              index === 4 ? <BarChart className="w-4 h-4 text-[#FD673A]" /> :
                              index === 5 ? <Store className="w-4 h-4 text-[#FD673A]" /> :
                              index === 6 ? <Smartphone className="w-4 h-4 text-[#FD673A]" /> :
                              <Clock className="w-4 h-4 text-[#FD673A]" />
                            ) : (
                              index === 0 ? <Cloud className="w-4 h-4 text-[#FD673A]" /> :
                              index === 1 ? <Store className="w-4 h-4 text-[#FD673A]" /> :
                              index === 2 ? <Database className="w-4 h-4 text-[#FD673A]" /> :
                              index === 3 ? <Users className="w-4 h-4 text-[#FD673A]" /> :
                              index === 4 ? <Shield className="w-4 h-4 text-[#FD673A]" /> :
                              index === 5 ? <BarChart className="w-4 h-4 text-[#FD673A]" /> :
                              index === 6 ? <Clock className="w-4 h-4 text-[#FD673A]" /> :
                              <Laptop className="w-4 h-4 text-[#FD673A]" />
                            )}
                          </div>
                          <span className="text-blue-100/90">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex justify-center mt-8">
                      <Link href="/contact" className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-[#FD673A] to-orange-600 text-white font-medium transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#FD673A]/20">
                        <span>Learn More</span>
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </Link>
                    </div>
                  </div>
                )}
                
                {/* Pricing Tab */}
                {activeTab === 'pricing' && (
                  <div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {products[activeProduct].pricing.map((plan, index) => (
                        <div 
                          key={index} 
                          className={`rounded-xl p-6 border relative ${
                            plan.popular 
                              ? 'bg-gradient-to-b from-[#FD673A]/20 to-blue-900/30 border-[#FD673A]/30 shadow-lg shadow-[#FD673A]/5' 
                              : 'bg-blue-900/20 border-blue-500/20'
                          }`}
                        >
                          {plan.popular && (
                            <div className="absolute -top-3 right-6 bg-[#FD673A] text-white text-xs font-medium px-3 py-1 rounded-full">
                              Popular
                            </div>
                          )}
                          
                          <h3 className="text-xl font-semibold text-white mb-2">{plan.name}</h3>
                          
                          <div className="flex items-baseline mb-4">
                            <span className="text-3xl font-bold text-white">{plan.price}</span>
                            {plan.period && <span className="text-blue-100/50 ml-1">{plan.period}</span>}
                          </div>
                          
                          <ul className="space-y-3 mb-6">
                            {plan.features.map((feature, idx) => (
                              <li key={idx} className="flex items-start">
                                <Check className="w-5 h-5 text-[#FD673A] mr-2 mt-0.5 flex-shrink-0" />
                                <span className="text-blue-100/70">{feature}</span>
                              </li>
                            ))}
                          </ul>
                          
                          <Link 
                            href="/contact" 
                            className={`block text-center py-2 rounded-lg transition-colors duration-300 ${
                              plan.popular 
                                ? 'bg-[#FD673A] hover:bg-[#FD673A]/90 text-white' 
                                : 'bg-blue-500/20 hover:bg-blue-500/30 text-white'
                            }`}
                          >
                            Get Started
                          </Link>
                        </div>
                      ))}
                    </div>
                    
                    <p className="text-center text-blue-100/50 mt-6">
                      All plans include 14-day free trial. No credit card required.
                    </p>
                  </div>
                )}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-[#0A0F2C] to-[#070B20] relative">
        <div className="absolute inset-0 overflow-hidden">
          {/* Background elements */}
          <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(to_right,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:60px_60px] opacity-20"></div>
          
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gradient-radial from-[#FD673A]/10 via-blue-500/5 to-transparent opacity-60 blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to transform your business with our products?
            </h2>
            
            <p className="text-xl text-blue-100/70 mb-10">
              Schedule a personalized demo with our product specialists and discover how our solutions can address your specific needs.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                href="/contact" 
                className="px-8 py-4 rounded-lg bg-gradient-to-r from-[#FD673A] to-orange-600 text-white font-medium hover:shadow-lg hover:shadow-[#FD673A]/20 transition-all duration-300"
              >
                Schedule a Demo
              </Link>
              
              <Link 
                href="/contact" 
                className="px-8 py-4 rounded-lg bg-blue-500/20 border border-blue-500/30 text-white font-medium hover:bg-blue-500/30 transition-all duration-300"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
};

export default ProductsPage; 