'use client';

import React from 'react';
import { Code, Server, Globe, FileText, Smartphone, ShoppingBag } from 'lucide-react';
import ServiceLayout from '@/components/layout/ServiceLayout';
import ServiceFeature from '@/components/ui/ServiceFeature';
import FAQItem from '@/components/ui/FAQItem';

const WebDevelopmentPage = () => {
  // Service features
  const features = [
    {
      title: "Custom Website Development",
      description: "Tailored websites built from the ground up to meet your unique business needs and brand identity.",
      icon: <Code className="w-6 h-6" />
    },
    {
      title: "E-commerce Solutions",
      description: "Robust online stores that drive sales with seamless shopping experiences and secure payment processing.",
      icon: <ShoppingBag className="w-6 h-6" />
    },
    {
      title: "CMS Development",
      description: "Custom content management systems that make website updates easy for your team, no technical skills required.",
      icon: <FileText className="w-6 h-6" />
    },
    {
      title: "Progressive Web Apps",
      description: "Fast, reliable, and engaging web applications that work offline and provide mobile app-like experiences.",
      icon: <Smartphone className="w-6 h-6" />
    },
    {
      title: "API Development & Integration",
      description: "Custom APIs and third-party integrations that connect your website with other systems and services.",
      icon: <Server className="w-6 h-6" />
    },
    {
      title: "Web Application Development",
      description: "Complex web applications that solve specific business challenges and streamline operations.",
      icon: <Globe className="w-6 h-6" />
    }
  ];

  // FAQ items
  const faqItems = [
    {
      question: "How long does it take to build a website?",
      answer: "The timeline varies based on complexity, but most projects follow this general schedule: Simple websites (5-10 pages) take 4-8 weeks, business websites with custom functionality take 8-12 weeks, and complex web applications or e-commerce sites take 12-16+ weeks. Each project phase includes collaborative reviews to ensure we're meeting your expectations."
    },
    {
      question: "Do you provide website maintenance services?",
      answer: "Yes, we offer comprehensive website maintenance services to keep your site secure, updated, and performing optimally. Our maintenance packages include regular updates, security monitoring, performance optimization, content updates, technical support, and analytics reporting. We recommend ongoing maintenance for all websites to ensure longevity and optimal performance."
    },
    {
      question: "What technologies do you use for web development?",
      answer: "We specialize in modern web technologies that provide the best balance of performance, security, and maintainability. For frontend development, we use React.js, Next.js, and other modern frameworks. For backend development, we work with Node.js, Django, Ruby on Rails, and PHP/Laravel depending on project requirements. Our expertise spans both traditional and headless CMS solutions including WordPress, Strapi, and Contentful."
    },
    {
      question: "How do you handle website security?",
      answer: "Security is built into every stage of our development process. We implement SSL certificates, secure coding practices, regular security updates, and protection against common vulnerabilities like XSS and CSRF attacks. For e-commerce sites, we ensure PCI compliance and secure payment processing. We also provide security monitoring and can implement additional measures like two-factor authentication and IP blocking if required."
    }
  ];

  return (
    <ServiceLayout
      title="Web Development"
      subtitle="DIGITAL PRESENCE"
      heroImage="/images/services/web-development-hero.jpg"
      icon={<Globe className="w-8 h-8" />}
      color="blue"
      nextService={{
        title: "Mobile App Development",
        path: "/services/mobile-development"
      }}
    >
      {/* Introduction */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-white">Exceptional Web Experiences</h2>
        <p className="text-blue-100/70 mb-6">
          In today&apos;s digital landscape, your website is often the first interaction potential customers have with your brand. Our web development services focus on creating visually stunning, highly functional websites that not only make a great first impression but also drive results for your business.
        </p>
        <p className="text-blue-100/70">
          From responsive corporate websites and e-commerce platforms to complex web applications, our development team leverages cutting-edge technologies to build solutions that are fast, secure, and optimized for all devices. We focus on creating intuitive user experiences, clean code architecture, and scalable solutions that grow with your business.
        </p>
      </div>

      {/* Features Grid */}
      <div className="mb-20">
        <h2 className="text-2xl font-bold mb-8 text-white">Our Web Development Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <ServiceFeature 
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              index={index}
              color="blue"
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
              color="blue"
              isInitiallyOpen={index === 0}
            />
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-16 p-8 rounded-xl bg-gradient-to-r from-blue-900/30 to-indigo-900/30 border border-blue-500/20 text-center">
        <h2 className="text-2xl font-bold mb-4 text-white">Ready to Build Your Next Web Project?</h2>
        <p className="text-blue-100/70 mb-6">
          Let&apos;s discuss how we can create a web solution that helps you achieve your business goals.
        </p>
        <a 
          href="/contact" 
          className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 text-white transition-colors duration-300"
        >
          <span>Start Your Web Project</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </a>
      </div>
    </ServiceLayout>
  );
};

export default WebDevelopmentPage; 