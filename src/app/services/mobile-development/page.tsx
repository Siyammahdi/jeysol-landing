'use client';

import React from 'react';
import { Smartphone, Layout, Puzzle, Gift, ClipboardList, Zap, BarChart } from 'lucide-react';
import ServiceLayout from '@/components/layout/ServiceLayout';
import ServiceFeature from '@/components/ui/ServiceFeature';
import FAQItem from '@/components/ui/FAQItem';

const MobileDevelopmentPage = () => {
  // Service features
  const features = [
    {
      title: "Native Mobile Applications",
      description: "High-performance native apps tailored specifically for iOS and Android platforms, delivering the best possible user experience.",
      icon: <Smartphone className="w-6 h-6" />
    },
    {
      title: "Cross-Platform Development",
      description: "Build once, deploy everywhere. Create cost-effective applications that work seamlessly across multiple platforms.",
      icon: <Layout className="w-6 h-6" />
    },
    {
      title: "UI/UX Design for Mobile",
      description: "Intuitive, engaging, and visually appealing interfaces designed specifically for mobile users and their unique needs.",
      icon: <Puzzle className="w-6 h-6" />
    },
    {
      title: "App Store Optimization",
      description: "Strategic optimization to increase your app's visibility and maximize downloads on the App Store and Google Play.",
      icon: <Gift className="w-6 h-6" />
    },
    {
      title: "Mobile App Testing",
      description: "Comprehensive testing across devices and operating systems to ensure flawless performance and user experience.",
      icon: <ClipboardList className="w-6 h-6" />
    },
    {
      title: "App Analytics & Performance",
      description: "Integration of analytics tools to monitor usage patterns, user engagement, and app performance.",
      icon: <BarChart className="w-6 h-6" />
    }
  ];

  // FAQ items
  const faqItems = [
    {
      question: "How long does it take to develop a mobile app?",
      answer: "Development timelines vary based on complexity. A simple app might take 3-4 months, while complex applications with extensive features can take 6-12 months. We'll provide a detailed timeline during our initial consultation."
    },
    {
      question: "What's the difference between native and cross-platform development?",
      answer: "Native apps are built specifically for one platform (iOS or Android) using platform-specific programming languages, while cross-platform apps use technologies like React Native or Flutter to build a single codebase that works on multiple platforms. Native apps typically offer better performance and access to platform features, while cross-platform apps can be more cost-effective and faster to market."
    },
    {
      question: "Do you provide app maintenance services?",
      answer: "Yes, we offer ongoing maintenance and support to ensure your app stays updated with the latest OS versions, security patches, and performance improvements. We also offer enhancement plans to continuously improve your app based on user feedback and market changes."
    },
    {
      question: "How do you ensure app security?",
      answer: "We implement industry best practices for mobile security, including data encryption, secure authentication methods, protected API communication, and regular security testing. We stay updated on the latest security threats and ensure your app complies with platform security guidelines."
    }
  ];

  return (
    <ServiceLayout
      title="Mobile App Development"
      subtitle="MOBILE EXPERIENCES"
      heroImage="/images/services/mobile-development-hero.jpg"
      icon={<Smartphone className="w-8 h-8" />}
      color="orange"
      nextService={{
        title: "Software Development",
        path: "/services/software-development"
      }}
    >
      {/* Introduction */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-white">Transforming Ideas Into Powerful Mobile Experiences</h2>
        <p className="text-blue-100/70 mb-6">
          In an increasingly mobile-first world, having a strong mobile presence is essential for businesses of all sizes. We design and develop beautiful, high-performance mobile applications that engage users, solve real problems, and drive business growth.
        </p>
        <p className="text-blue-100/70">
          Whether you need a native iOS or Android app, a cross-platform solution, or a progressive web app, our team of experienced mobile developers and designers will help you create a mobile experience that stands out in a crowded marketplace.
        </p>
      </div>

      {/* Features Grid */}
      <div className="mb-20">
        <h2 className="text-2xl font-bold mb-8 text-white">Our Mobile Development Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <ServiceFeature 
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              index={index}
              color="orange"
            />
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-8 text-white">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              color="orange"
              isInitiallyOpen={index === 0}
            />
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-16 p-8 rounded-xl bg-gradient-to-r from-[#FD673A]/20 to-orange-900/20 border border-[#FD673A]/20 text-center">
        <h2 className="text-2xl font-bold mb-4 text-white">Ready to Build Your Mobile App?</h2>
        <p className="text-blue-100/70 mb-6">
          Let's discuss how we can create a mobile experience that drives engagement and growth for your business.
        </p>
        <a 
          href="/contact" 
          className="inline-flex items-center px-6 py-3 rounded-lg bg-[#FD673A] hover:bg-orange-600 text-white transition-colors duration-300"
        >
          <span>Get in Touch</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </a>
      </div>
    </ServiceLayout>
  );
};

export default MobileDevelopmentPage; 