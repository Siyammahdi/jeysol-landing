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
      label: 'hello@jeysol.com',
      href: 'mailto:hello@jeysol.com'
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
      label: 'business@jeysol.com',
      href: 'mailto:business@jeysol.com'
    },
    secondaryAction: {
      label: 'Book a Call',
      href: '/schedule'
    },
    responseTime: 'Response within 24 hours',
    gradient: 'from-violet-600 via-violet-500 to-indigo-600'
  },
  {
    id: 'partnerships',
    title: 'Partnerships',
    description: 'Interested in collaborating with us?',
    icon: HeartHandshake,
    primaryAction: {
      label: 'partners@jeysol.com',
      href: 'mailto:partners@jeysol.com'
    },
    responseTime: 'Response within 2-3 business days',
    gradient: 'from-teal-500 via-teal-400 to-emerald-600'
  },
  {
    id: 'support',
    title: 'Customer Support',
    description: 'We\'re here to help with any technical issues.',
    icon: LifeBuoy,
    primaryAction: {
      label: 'support@jeysol.com',
      href: 'mailto:support@jeysol.com'
    },
    secondaryAction: {
      label: 'Help Center',
      href: '/help'
    },
    responseTime: 'Response within 12 hours',
    gradient: 'from-amber-500 via-orange-400 to-red-500'
  }
];

export const officeLocations = [
  {
    id: 'headquarters',
    title: 'Global Headquarters',
    address: '123 Innovation Drive, Suite 400',
    city: 'San Francisco, CA 94105',
    country: 'United States',
    phone: '+1 (555) 123-4567',
    email: 'hello@jeysol.com',
    coordinates: {
      lat: 37.7749,
      lng: -122.4194
    }
  },
  {
    id: 'europe',
    title: 'European Office',
    address: '45 Tech Square',
    city: 'London, EC2A 4BX',
    country: 'United Kingdom',
    phone: '+44 20 1234 5678',
    email: 'europe@jeysol.com',
    coordinates: {
      lat: 51.5074,
      lng: -0.1278
    }
  }
]; 