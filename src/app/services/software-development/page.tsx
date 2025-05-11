'use client';

import React from 'react';
import { Code2, Database, Lock, Cloud, Cpu, GitBranch } from 'lucide-react';
import ServiceLayout from '@/components/layout/ServiceLayout';
import ServiceFeature from '@/components/ui/ServiceFeature';
import FAQItem from '@/components/ui/FAQItem';

const SoftwareDevelopmentPage = () => {
  // Service features
  const features = [
    {
      title: "Custom Software Solutions",
      description: "Bespoke software applications designed to address your unique business challenges and streamline operations.",
      icon: <Code2 className="w-6 h-6" />
    },
    {
      title: "Enterprise Integration",
      description: "Seamlessly connect your systems, applications, and data sources for improved efficiency and business insights.",
      icon: <GitBranch className="w-6 h-6" />
    },
    {
      title: "Cloud Solutions",
      description: "Scalable, secure, and cost-effective cloud applications using AWS, Azure, or Google Cloud Platform.",
      icon: <Cloud className="w-6 h-6" />
    },
    {
      title: "Database Design & Management",
      description: "Robust database architecture that ensures data integrity, security, and optimal performance.",
      icon: <Database className="w-6 h-6" />
    },
    {
      title: "AI & Machine Learning Integration",
      description: "Leverage the power of artificial intelligence and machine learning to gain competitive advantages.",
      icon: <Cpu className="w-6 h-6" />
    },
    {
      title: "Cybersecurity Implementation",
      description: "Comprehensive security measures to protect your software applications and sensitive data from threats.",
      icon: <Lock className="w-6 h-6" />
    }
  ];

  // FAQ items
  const faqItems = [
    {
      question: "How do you approach custom software development?",
      answer: "We follow an agile development methodology that combines flexibility with structured processes. Our approach starts with a thorough analysis of your business requirements, followed by iterative development phases with regular client check-ins. This ensures the solution evolves to meet your changing needs while maintaining focus on your core business objectives."
    },
    {
      question: "What industries do you specialize in?",
      answer: "We have experience developing software for diverse industries including healthcare, finance, manufacturing, retail, logistics, education, and professional services. Our team has domain expertise in regulatory requirements, industry best practices, and specific technical challenges across these sectors."
    },
    {
      question: "Do you offer ongoing support and maintenance?",
      answer: "Yes, we provide comprehensive support and maintenance services, including bug fixes, security updates, performance optimization, feature enhancements, and technical support. We offer flexible SLAs tailored to your business needs, with options for 24/7 critical support."
    },
    {
      question: "How do you handle data security and compliance?",
      answer: "Security is integrated throughout our development process. We implement industry standard security measures including encryption, secure authentication, regular vulnerability assessments, and penetration testing. We also ensure compliance with relevant regulations such as GDPR, HIPAA, SOC 2, and PCI DSS based on your industry requirements."
    }
  ];

  return (
    <ServiceLayout
      title="Software Development"
      subtitle="CUSTOM SOLUTIONS"
      heroImage="/images/services/software-development-hero.jpg"
      icon={<Code2 className="w-8 h-8" />}
      color="purple"
      nextService={{
        title: "UI/UX Design",
        path: "/services/ui-ux-design"
      }}
    >
      {/* Introduction */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-white">Powerful Software Solutions for Modern Businesses</h2>
        <p className="text-blue-100/70 mb-6">
          In today&apos;s fast-paced digital environment, off-the-shelf software often can&apos;t address the unique challenges facing your business. Our custom software development services create tailored solutions that align perfectly with your processes, goals, and growth strategy.
        </p>
        <p className="text-blue-100/70">
          Whether you need to automate workflows, integrate disparate systems, analyze complex data, or create entirely new digital products, our experienced development team will guide you through the entire process from concept to deployment and beyond.
        </p>
      </div>

      {/* Features Grid */}
      <div className="mb-20">
        <h2 className="text-2xl font-bold mb-8 text-white">Our Software Development Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <ServiceFeature 
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              index={index}
              color="purple"
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
              color="purple"
              isInitiallyOpen={index === 0}
            />
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-16 p-8 rounded-xl bg-gradient-to-r from-purple-900/30 to-indigo-900/30 border border-purple-500/20 text-center">
        <h2 className="text-2xl font-bold mb-4 text-white">Ready to Build Your Custom Software Solution?</h2>
        <p className="text-blue-100/70 mb-6">
          Let&apos;s discuss how we can create software that addresses your unique business challenges and drives growth.
        </p>
        <a 
          href="/contact" 
          className="inline-flex items-center px-6 py-3 rounded-lg bg-purple-600 hover:bg-purple-700 text-white transition-colors duration-300"
        >
          <span>Start Your Project</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </a>
      </div>
    </ServiceLayout>
  );
};

export default SoftwareDevelopmentPage; 