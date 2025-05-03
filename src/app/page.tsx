'use client';

import HeroSection from '@/components/sections/HeroSection';
import ServicesSection from '@/components/sections/ServicesSection';
import AboutSection from '@/components/sections/AboutSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import ContactSection from '@/components/sections/ContactSection';
import Navbar from '@/components/ui/Navbar';

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-[#0A0F2C]">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
  );
}

