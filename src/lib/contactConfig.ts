import { Mail, Briefcase, HeartHandshake, LifeBuoy, LucideIcon } from 'lucide-react';

export interface ContactMethod {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  primaryAction: {
    label: string;
    href: string;
  };
  secondaryAction?: {
    label: string;
    href: string;
  };
  responseTime: string;
  gradient: string;
}

export const contactMethods: ContactMethod[] = [
  {
    id: 'email',
    title: 'Email',
    description: 'Questions or thoughts? Drop us a line anytime.',
    icon: Mail,
    primaryAction: {
      label: 'info@jeysol.com',
      href: 'mailto:info@jeysol.com'
    },
    responseTime: 'Response within 24-48 hours',
    gradient: 'from-blue-500 via-blue-400 to-blue-600'
  },
  {
    id: 'business',
    title: 'Business Inquiries',
    description: 'Let\'s discuss how we can help your business.',
    icon: Briefcase,
    primaryAction: {
      label: 'info@jeysol.com',
      href: 'mailto:info@jeysol.com?subject=Business%20Inquiry'
    },
    secondaryAction: {
      label: 'Book a Call',
      href: '/schedule'
    },
    responseTime: 'Response within 24 hours',
    gradient: 'from-[#FD673A] via-[#FD673A]/80 to-[#FD673A]/60'
  },
  {
    id: 'partnerships',
    title: 'Partnerships',
    description: 'Interested in collaborating with us?',
    icon: HeartHandshake,
    primaryAction: {
      label: 'info@jeysol.com',
      href: 'mailto:info@jeysol.com?subject=Partnership%20Opportunity'
    },
    responseTime: 'Response within 2-3 business days',
    gradient: 'from-blue-600 via-blue-500 to-blue-400'
  },
  {
    id: 'support',
    title: 'Customer Support',
    description: 'We\'re here to help with any technical issues.',
    icon: LifeBuoy,
    primaryAction: {
      label: 'info@jeysol.com',
      href: 'mailto:info@jeysol.com?subject=Support%20Request'
    },
    secondaryAction: {
      label: 'Help Center',
      href: '/help'
    },
    responseTime: 'Response within 12 hours',
    gradient: 'from-[#FD673A]/60 via-[#FD673A]/80 to-[#FD673A]'
  }
];

export const officeLocations = [
  {
    id: 'headquarters',
    title: 'Global Headquarters',
    address: '124 City Road',
    city: 'London, EC1V 2NX',
    country: 'United Kingdom',
    phone: '+44 (0) 2035760384',
    email: 'info@jeysol.com',
    coordinates: {
      lat: 51.5287,
      lng: -0.0902
    }
  }
]; 