'use client';

import React from 'react';
import { Palette, Users, Trophy, LineChart, Layers, PenTool } from 'lucide-react';
import ServiceLayout from '@/components/layout/ServiceLayout';
import ServiceFeature from '@/components/ui/ServiceFeature';
import FAQItem from '@/components/ui/FAQItem';

const UiUxDesignPage = () => {
  // Service features
  const features = [
    {
      title: "User Research & Analysis",
      description: "In-depth research to understand your users' behaviors, needs, and motivations to inform design decisions.",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "UI Design",
      description: "Beautiful, intuitive interfaces with consistent visual language and modern aesthetics that reflect your brand.",
      icon: <Palette className="w-6 h-6" />
    },
    {
      title: "UX Design",
      description: "Strategic user experience design that creates seamless, enjoyable journeys and solves user pain points.",
      icon: <PenTool className="w-6 h-6" />
    },
    {
      title: "Conversion Optimization",
      description: "Data-driven design choices that improve conversion rates and achieve your business objectives.",
      icon: <LineChart className="w-6 h-6" />
    },
    {
      title: "Design Systems",
      description: "Comprehensive design systems with reusable components to ensure consistency and streamline development.",
      icon: <Layers className="w-6 h-6" />
    },
    {
      title: "Usability Testing",
      description: "Rigorous testing with real users to validate designs and ensure optimal functionality and user satisfaction.",
      icon: <Trophy className="w-6 h-6" />
    }
  ];

  // FAQ items
  const faqItems = [
    {
      question: "What's the difference between UI and UX design?",
      answer: "UI (User Interface) design focuses on the visual aspects of a digital product—how it looks and feels, including colors, typography, layout, and visual elements. UX (User Experience) design addresses the overall experience and user journey, focusing on usability, accessibility, and solving user problems. While UI is about aesthetics and presentation, UX is about functionality and satisfaction. Our approach integrates both disciplines to create designs that are both beautiful and highly functional."
    },
    {
      question: "How long does a typical UI/UX design project take?",
      answer: "Project timelines vary based on complexity and scope. A simple website redesign might take 4-6 weeks, while a complex application could take 8-12 weeks or more. Our process includes research, wireframing, prototyping, testing, and refinement phases. We'll provide a detailed timeline during our initial consultation based on your specific project requirements."
    },
    {
      question: "Do you create responsive designs for all devices?",
      answer: "Yes, we design for all screen sizes and devices to ensure a consistent and optimized experience across desktop, tablet, and mobile. We use a mobile-first approach when appropriate and ensure that all designs adapt seamlessly to different screen sizes. Our responsive design approach prioritizes usability regardless of the device being used."
    },
    {
      question: "How do you ensure your designs align with our brand?",
      answer: "We begin with a thorough review of your brand guidelines, values, and existing materials. If you have an established brand, we ensure our designs align with and enhance your visual identity. If your brand needs development, we can help refine or create brand elements that reflect your company's vision. Throughout the process, we maintain open communication to ensure the designs authentically represent your brand."
    }
  ];

  return (
    <ServiceLayout
      title="UI/UX Design"
      subtitle="USER-CENTERED DESIGN"
      heroImage="/images/services/ui-ux-design-hero.jpg"
      icon={<Palette className="w-8 h-8" />}
      color="cyan"
      nextService={{
        title: "Graphics Design",
        path: "/services/graphics-design"
      }}
    >
      {/* Introduction */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-white">Exceptional Digital Experiences</h2>
        <p className="text-blue-100/70 mb-6">
          In today&apos;s competitive digital landscape, user experience can make or break your product&apos;s success. Our UI/UX design services focus on creating intuitive, engaging interfaces that delight users while achieving your business goals.
        </p>
        <p className="text-blue-100/70">
          We combine the art of visual design with the science of user psychology to create digital experiences that are not only beautiful but also functional and user-centered. From websites and mobile apps to complex software systems, our design approach balances aesthetics with usability to create solutions that users love.
        </p>
      </div>

      {/* Features Grid */}
      <div className="mb-20">
        <h2 className="text-2xl font-bold mb-8 text-white">Our UI/UX Design Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <ServiceFeature 
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              index={index}
              color="cyan"
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
              color="cyan"
              isInitiallyOpen={index === 0}
            />
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-16 p-8 rounded-xl bg-gradient-to-r from-cyan-800/30 to-blue-900/30 border border-cyan-500/20 text-center">
        <h2 className="text-2xl font-bold mb-4 text-white">Ready to Transform Your Digital Experience?</h2>
        <p className="text-blue-100/70 mb-6">
          Let&apos;s discuss how we can create intuitive, engaging designs that delight your users and drive business results.
        </p>
        <a 
          href="/contact" 
          className="inline-flex items-center px-6 py-3 rounded-lg bg-cyan-600 hover:bg-cyan-700 text-white transition-colors duration-300"
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

export default UiUxDesignPage; 