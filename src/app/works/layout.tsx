import React from 'react';
import Navbar from '@/components/ui/Navbar';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Works | JeySol',
  description: 'Explore our portfolio of innovative digital solutions across web, mobile, and AI technologies.',
};

export default function WorksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
} 