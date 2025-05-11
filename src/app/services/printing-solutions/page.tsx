'use client';

import React from 'react';
import { Printer, FileText, Book, Tag, ShoppingBag, Award } from 'lucide-react';
import ServiceLayout from '@/components/layout/ServiceLayout';
import ServiceFeature from '@/components/ui/ServiceFeature';
import FAQItem from '@/components/ui/FAQItem';

const PrintingSolutionsPage = () => {
  // Service features
  const features = [
    {
      title: "Marketing & Promotional",
      description: "High-quality brochures, flyers, posters, banners, and promotional materials that make a lasting impression.",
      icon: <FileText className="w-6 h-6" />
    },
    {
      title: "Corporate Stationery",
      description: "Premium business cards, letterheads, envelopes, and presentation folders with consistent branding.",
      icon: <Award className="w-6 h-6" />
    },
    {
      title: "Publication Printing",
      description: "Books, magazines, catalogs, and annual reports with exceptional binding and finishing options.",
      icon: <Book className="w-6 h-6" />
    },
    {
      title: "Packaging & Labels",
      description: "Custom product packaging, labels, and boxes that enhance shelf appeal and reflect your brand quality.",
      icon: <Tag className="w-6 h-6" />
    },
    {
      title: "Large Format Printing",
      description: "Attention-grabbing banners, signage, posters, and displays for events, retail, and exhibitions.",
      icon: <Printer className="w-6 h-6" />
    },
    {
      title: "Promotional Products",
      description: "Branded merchandise and promotional items that increase brand visibility and customer engagement.",
      icon: <ShoppingBag className="w-6 h-6" />
    }
  ];

  // FAQ items
  const faqItems = [
    {
      question: "What file formats do you accept for printing?",
      answer: "We accept a variety of industry-standard file formats including PDF, AI, PSD, INDD, EPS, and TIFF. For best results, we recommend high-resolution PDFs with embedded fonts and CMYK color mode. Our pre-press team will review all files before printing to ensure optimal quality and can assist with file preparation if needed."
    },
    {
      question: "What are your typical turnaround times?",
      answer: "Turnaround times vary by project type and quantity. Standard business cards and small print runs can be completed in 3-5 business days, while larger or more complex projects like catalogs, custom packaging, or large format printing may require 7-14 business days. Rush services are available for most products at an additional cost."
    },
    {
      question: "Do you offer environmentally friendly printing options?",
      answer: "Yes, we're committed to sustainable printing practices. We offer recycled paper options, soy-based inks, energy-efficient production processes, and FSC-certified materials. Our eco-friendly printing solutions maintain exceptional quality while reducing environmental impact. We're happy to discuss the best sustainable options for your specific project."
    },
    {
      question: "Can you help with design before printing?",
      answer: "Absolutely. Our in-house graphic design team can help with everything from minor adjustments to complete design projects. We can work with your existing brand guidelines or create new designs from scratch. Our designers understand both the creative and technical aspects of print production, ensuring your designs are optimized for the printing process."
    }
  ];

  return (
    <ServiceLayout
      title="Printing Solutions"
      subtitle="QUALITY PRINT SERVICES"
      heroImage="/images/services/printing-solutions-hero.jpg"
      icon={<Printer className="w-8 h-8" />}
      color="amber"
      nextService={{
        title: "Web Development",
        path: "/services/web-development"
      }}
    >
      {/* Introduction */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-white">Premium Printing Services</h2>
        <p className="text-blue-100/70 mb-6">
          In today's digital world, high-quality printed materials remain a powerful way to make a tangible connection with your audience. Our printing solutions combine cutting-edge technology with traditional craftsmanship to deliver exceptional print products that make a lasting impression.
        </p>
        <p className="text-blue-100/70">
          From marketing materials and corporate stationery to custom packaging and large format displays, we offer comprehensive printing services with meticulous attention to detail, color accuracy, and material quality. We work closely with you to understand your requirements and deliver print products that elevate your brand and achieve your communication goals.
        </p>
      </div>

      {/* Features Grid */}
      <div className="mb-20">
        <h2 className="text-2xl font-bold mb-8 text-white">Our Printing Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <ServiceFeature 
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              index={index}
              color="amber"
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
              color="amber"
              isInitiallyOpen={index === 0}
            />
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-16 p-8 rounded-xl bg-gradient-to-r from-amber-900/30 to-orange-900/30 border border-amber-500/20 text-center">
        <h2 className="text-2xl font-bold mb-4 text-white">Ready to Discuss Your Printing Project?</h2>
        <p className="text-blue-100/70 mb-6">
          Let's create exceptional print materials that bring your ideas to life and make a lasting impression.
        </p>
        <a 
          href="/contact" 
          className="inline-flex items-center px-6 py-3 rounded-lg bg-amber-600 hover:bg-amber-700 text-white transition-colors duration-300"
        >
          <span>Get Started</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </a>
      </div>
    </ServiceLayout>
  );
};

export default PrintingSolutionsPage; 