import React from 'react';

export interface ServiceCard {
  id: number;
  title: string;
  description: string;
  icon: string;
  color: string;
}

// What we do - services aligned with the home page services
export const services: ServiceCard[] = [
  {
    id: 1,
    title: "Web Design & Development",
    description: "Creating visually stunning, highly functional websites that make a great first impression and drive results. We build responsive corporate websites, e-commerce platforms, and complex web applications.",
    icon: 'code',
    color: 'orange'
  },
  {
    id: 2,
    title: "Mobile App Design & Development",
    description: "Building beautiful, high-performance mobile applications for iOS and Android that engage users and drive business growth. We create native, cross-platform, and progressive web apps.",
    icon: 'smartphone',
    color: 'orange'
  },
  {
    id: 3,
    title: "Software Development",
    description: "Developing tailored software solutions that address your unique business challenges. We create custom applications, enterprise systems, cloud solutions, and integrated platforms.",
    icon: 'cpu',
    color: 'orange'
  },
  {
    id: 4,
    title: "UI/UX Design",
    description: "Creating intuitive, engaging interfaces that delight users while achieving business goals. We combine visual design with user psychology to deliver exceptional digital experiences.",
    icon: 'layout',
    color: 'orange'
  },
  {
    id: 5,
    title: "Graphics Design",
    description: "Delivering visually compelling designs that strengthen your brand identity. Our graphics design services include brand identity, marketing materials, social media assets, and more.",
    icon: 'globe',
    color: 'orange'
  },
  {
    id: 6,
    title: "Printing Solutions",
    description: "Providing high-quality printing services for all your business needs. We offer marketing materials, corporate stationery, publication printing, packaging solutions, and promotional products.",
    icon: 'cloud',
    color: 'orange'
  }
]; 