'use client';

import HeroSection from '@/components/sections/HeroSection';
import ServicesSection from '@/components/sections/ServicesSection';
import AboutSection from '@/components/sections/AboutSection';
import Navbar from '@/components/ui/Navbar';

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-[#0A0F2C]">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      
      {/* Placeholder for Testimonials Section */}
      <section id="testimonials" className="py-20 bg-[#0A0F2C]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-white mb-4">What Our Clients Say</h2>
          <p className="text-blue-200/70 text-center mb-12">Future testimonials section will be placed here</p>
        </div>
      </section>
      
      {/* Placeholder for Contact Section */}
      <section id="contact" className="py-20 bg-[#090E22]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-white mb-4">Get In Touch</h2>
          <p className="text-blue-200/70 text-center mb-12">Future contact section will be placed here</p>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-8 bg-[#070B1B] border-t border-blue-900/20">
        <div className="container mx-auto px-4 text-center text-blue-300/50">
          <p>© {new Date().getFullYear()} JeySol. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}

