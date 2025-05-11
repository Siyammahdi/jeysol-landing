'use client';

import React from 'react';
import { PenTool, Brush, Image, FileImage, Layers, Package } from 'lucide-react';
import ServiceLayout from '@/components/layout/ServiceLayout';
import ServiceFeature from '@/components/ui/ServiceFeature';
import FAQItem from '@/components/ui/FAQItem';

const GraphicsDesignPage = () => {
  // Service features
  const features = [
    {
      title: "Brand Identity Design",
      description: "Comprehensive brand identity systems including logos, color palettes, typography, and brand guidelines.",
      icon: <PenTool className="w-6 h-6" />
    },
    {
      title: "Marketing Materials",
      description: "Eye-catching brochures, flyers, business cards, and promotional materials that communicate your message effectively.",
      icon: <FileImage className="w-6 h-6" />
    },
    {
      title: "Social Media Graphics",
      description: "Custom graphics optimized for various social platforms to enhance your online presence and engagement.",
      icon: <Image className="w-6 h-6" />
    },
    {
      title: "Illustration & Infographics",
      description: "Custom illustrations and data visualizations that simplify complex information and enhance storytelling.",
      icon: <Brush className="w-6 h-6" />
    },
    {
      title: "Packaging Design",
      description: "Distinctive packaging that stands out on shelves and enhances product appeal while conveying brand values.",
      icon: <Package className="w-6 h-6" />
    },
    {
      title: "Publication Design",
      description: "Professional layouts for magazines, annual reports, books, and catalogs with attention to typography and readability.",
      icon: <Layers className="w-6 h-6" />
    }
  ];

  // FAQ items
  const faqItems = [
    {
      question: "What file formats will I receive for my designs?",
      answer: "We provide industry-standard formats suitable for both digital and print use. Typically, this includes editable source files (AI, PSD, INDD), print-ready files (PDF, EPS), and web-optimized formats (PNG, JPG, SVG). We'll discuss your specific requirements to ensure you receive all the formats you need for your intended applications."
    },
    {
      question: "How many revisions are included in your design process?",
      answer: "Our standard process includes two rounds of revisions after the initial concept presentation. This allows us to refine the designs based on your feedback to achieve the perfect result. Additional revision rounds can be arranged if needed. We believe in collaborative design and work closely with you to ensure the final product meets your expectations."
    },
    {
      question: "Can you work with our existing brand guidelines?",
      answer: "Absolutely. We excel at working within established brand guidelines and can ensure all designs maintain brand consistency while bringing fresh creative ideas. If your guidelines need updating or expansion, we can also help enhance your brand system while respecting its core elements."
    },
    {
      question: "What information do you need to get started?",
      answer: "To begin, we'll need your brand assets (if existing), project goals, target audience information, examples of designs you like/dislike, technical requirements, and any content for the project. Our detailed creative brief process will guide you through providing all necessary information. The more context you can share, the better we can align our designs with your vision."
    }
  ];

  return (
    <ServiceLayout
      title="Graphics Design"
      subtitle="VISUAL COMMUNICATIONS"
      heroImage="/images/services/graphics-design-hero.jpg"
      icon={<PenTool className="w-8 h-8" />}
      color="pink"
      nextService={{
        title: "Printing Solutions",
        path: "/services/printing-solutions"
      }}
    >
      {/* Introduction */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-white">Captivating Visual Design</h2>
        <p className="text-blue-100/70 mb-6">
          In a world saturated with visual content, exceptional graphic design is the key to standing out and making a memorable impression. Our graphic design services blend creativity with strategic thinking to create compelling visuals that communicate your message effectively and elevate your brand.
        </p>
        <p className="text-blue-100/70">
          From brand identity systems and marketing materials to custom illustrations and packaging design, our team of talented designers combines artistic skill with marketing insight to create visuals that not only look stunning but also drive real business results.
        </p>
      </div>

      {/* Features Grid */}
      <div className="mb-20">
        <h2 className="text-2xl font-bold mb-8 text-white">Our Graphics Design Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <ServiceFeature 
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              index={index}
              color="pink"
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
              color="pink"
              isInitiallyOpen={index === 0}
            />
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-16 p-8 rounded-xl bg-gradient-to-r from-pink-900/30 to-purple-900/30 border border-pink-500/20 text-center">
        <h2 className="text-2xl font-bold mb-4 text-white">Ready to Elevate Your Visual Identity?</h2>
        <p className="text-blue-100/70 mb-6">
          Let's discuss how we can create stunning designs that capture attention and communicate your message effectively.
        </p>
        <a 
          href="/contact" 
          className="inline-flex items-center px-6 py-3 rounded-lg bg-pink-600 hover:bg-pink-700 text-white transition-colors duration-300"
        >
          <span>Start Your Design Project</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </a>
      </div>
    </ServiceLayout>
  );
};

export default GraphicsDesignPage; 