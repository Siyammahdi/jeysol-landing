import React from 'react';
import Hero from '@/components/contact/Hero';
import ContactMethods from '@/components/contact/ContactMethods';
import Form from '@/components/contact/Form';
import ContactMap from '@/components/contact/Map';
import FAQ from '@/components/contact/FAQ';
import ContactCTA from '@/components/contact/CTA';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | JeySol',
  description: 'Get in touch with our team. We\'re here to answer your questions and help bring your ideas to life.',
};

export default function ContactPage() {
  return (
    <main className="bg-[#080D24] text-white">
      <Hero />
      <ContactMethods />
      <Form />
      <ContactMap />
      <FAQ />
      <ContactCTA />
    </main>
  );
} 