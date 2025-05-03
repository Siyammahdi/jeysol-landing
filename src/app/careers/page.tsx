'use client';

import React from 'react';
import CareersHero from '@/components/sections/careers/CareersHero';
import CultureSection from '@/components/sections/careers/CultureSection';
import OpenPositions from '@/components/sections/careers/OpenPositions';
import ResumeDropForm from '@/components/sections/careers/ResumeDropForm';
import WhyWorkWithUs from '@/components/sections/careers/WhyWorkWithUs';
import Navbar from '@/components/ui/Navbar';

export default function CareersPage() {
  return (
    <main className="flex flex-col min-h-screen bg-[#0A0F2C]">
      <Navbar />
      <CareersHero />
      <CultureSection />
      <OpenPositions />
      <WhyWorkWithUs />
      <ResumeDropForm />
    </main>
  );
} 