'use client';

import Navbar from '@/components/ui/Navbar';
import AboutHero from '@/components/sections/about/AboutHero';
import OurStory from '@/components/sections/about/OurStory';
import WhatWeDo from '@/components/sections/about/WhatWeDo';
import OurValues from '@/components/sections/about/OurValues';
import OurVision from '@/components/sections/about/OurVision';
import Achievements from '@/components/sections/about/Achievements';
import AboutCTA from '@/components/sections/about/AboutCTA';
import Footer from '@/components/ui/Footer';

export default function AboutPage() {
  return (
    <main className="flex flex-col min-h-screen bg-[#0A0F2C] overflow-hidden">
      <Navbar />
      <AboutHero />
      <OurStory />
      <OurVision />
      <WhatWeDo />
      {/* <CompanyStats /> */}
      <OurValues />
      {/* <MeetTheTeam /> */}
      <Achievements />
      {/* <BehindTheScenes /> */}
      <AboutCTA />
      <Footer />
    </main>
  );
} 