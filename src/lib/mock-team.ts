export interface TeamMember {
  id: number;
  name: string;
  role: string;
  motto: string;
  imageUrl: string;
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}

export interface Milestone {
  id: number;
  year: string;
  title: string;
  description: string;
  isKeyEvent?: boolean;
}

export interface Statistic {
  id: number;
  value: string | number;
  label: string;
  prefix?: string;
  suffix?: string;
  icon: string;
  endValue: number;
}

export interface Value {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface CompanyStat {
  value: number;
  label: string;
  icon: string;
  suffix?: string;
  prefix?: string;
  additional?: string;
}

export interface ServiceCard {
  id: number;
  title: string;
  description: string;
  icon: string;
  color: string;
}

export interface GalleryImage {
  id: number;
  imageUrl: string;
  caption: string;
  aspectRatio?: 'wide' | 'tall' | 'square';
}

// Team Members data
export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Alex Johnson',
    role: 'CEO & Founder',
    motto: 'Building the impossible is my passion',
    imageUrl: '/about/alex.jpg',
    socialLinks: {
      linkedin: 'https://linkedin.com/',
      twitter: 'https://twitter.com/'
    }
  },
  {
    id: 2,
    name: 'Maya Rodriguez',
    role: 'Chief Technology Officer',
    motto: 'Technology should serve humanity',
    imageUrl: '/about/team-growth.jpg',
    socialLinks: {
      linkedin: 'https://linkedin.com/',
      github: 'https://github.com/'
    }
  },
  {
    id: 3,
    name: 'David Chen',
    role: 'Lead UX Designer',
    motto: 'Beautiful design solves problems',
    imageUrl: '/about/ui-ux-review.jpg',
    socialLinks: {
      linkedin: 'https://linkedin.com/',
      twitter: 'https://twitter.com/'
    }
  },
  {
    id: 4,
    name: 'Sarah Williams',
    role: 'Head of Product',
    motto: 'User-centered thinking drives innovation',
    imageUrl: '/about/brainstorming.jpg',
    socialLinks: {
      linkedin: 'https://linkedin.com/'
    }
  },
  {
    id: 5,
    name: 'Michael Okonjo',
    role: 'Senior Developer',
    motto: 'Clean code is my religion',
    imageUrl: '/about/pair-programming.jpg',
    socialLinks: {
      github: 'https://github.com/',
      linkedin: 'https://linkedin.com/'
    }
  },
  {
    id: 6,
    name: 'Leila Patel',
    role: 'Marketing Director',
    motto: 'Stories connect brands to people',
    imageUrl: '/about/colab-workspace.jpg',
    socialLinks: {
      twitter: 'https://twitter.com/',
      linkedin: 'https://linkedin.com/'
    }
  }
];

// Company timeline/milestones
export const milestones: Milestone[] = [
  {
    id: 1,
    year: '2016',
    title: 'Founded in a Garage',
    description: 'JeySol began as a two-person operation, building custom web applications for local businesses.',
    isKeyEvent: true
  },
  {
    id: 2,
    year: '2017',
    title: 'First Major Client',
    description: 'Secured our first enterprise client, a Fortune 500 company looking for digital transformation solutions.'
  },
  {
    id: 3,
    year: '2018',
    title: 'Team Expansion',
    description: 'Grew from 5 to 15 employees and moved to our first official office space.'
  },
  {
    id: 4,
    year: '2019',
    title: 'International Reach',
    description: 'Expanded services to clients in Europe and Asia, establishing a global presence.',
    isKeyEvent: true
  },
  {
    id: 5,
    year: '2020',
    title: 'Remote-First Culture',
    description: 'Embraced a fully remote work environment, allowing us to hire top talent worldwide.'
  },
  {
    id: 6,
    year: '2021',
    title: 'Launch of SaaS Products',
    description: 'Released our first suite of SaaS products, expanding beyond custom solutions.',
    isKeyEvent: true
  },
  {
    id: 7,
    year: '2022',
    title: 'Technology Innovation Award',
    description: 'Recognized for our contributions to AI-driven development tools and methodologies.'
  },
  {
    id: 8,
    year: '2023',
    title: 'Today',
    description: 'A team of 50+ professionals serving clients across 12 countries and 5 continents.',
    isKeyEvent: true
  }
];

// Company statistics/achievements 
export const statistics: Statistic[] = [
  {
    id: 1,
    value: 100,
    label: 'Clients Worldwide',
    suffix: '+',
    icon: 'globe',
    endValue: 100
  },
  {
    id: 2,
    value: 98,
    label: 'Client Satisfaction',
    suffix: '%',
    icon: 'thumbs-up',
    endValue: 98
  },
  {
    id: 3,
    value: 5,
    label: 'Continents',
    icon: 'map',
    endValue: 5
  },
  {
    id: 4,
    value: 250,
    label: 'Projects Completed',
    suffix: '+',
    icon: 'check-circle',
    endValue: 250
  },
  {
    id: 5,
    value: 15,
    label: 'Industry Awards',
    icon: 'award',
    endValue: 15
  }
];

// Company values
export const values: Value[] = [
  {
    id: 1,
    title: 'Innovation',
    description: 'We continuously explore new technologies and methodologies to deliver cutting-edge solutions.',
    icon: 'lightbulb'
  },
  {
    id: 2,
    title: 'Excellence',
    description: 'We hold ourselves to the highest standards in everything we create and deliver.',
    icon: 'award'
  },
  {
    id: 3,
    title: 'Collaboration',
    description: 'We believe the best results come from diverse teams working together toward shared goals.',
    icon: 'users'
  },
  {
    id: 4,
    title: 'Integrity',
    description: 'We build relationships based on trust, transparency, and ethical business practices.',
    icon: 'shield'
  },
  {
    id: 5,
    title: 'User-Centered',
    description: 'We design with empathy, putting human needs at the center of everything we create.',
    icon: 'heart'
  },
  {
    id: 6,
    title: 'Adaptability',
    description: 'We embrace change and remain flexible in our approach to solving complex problems.',
    icon: 'refresh-cw'
  }
];

// Gallery images for the Behind The Scenes section
export const galleryImages: GalleryImage[] = [
  {
    id: 1,
    imageUrl: '/about/colab-workspace.jpg',
    caption: 'Our modern collaborative workspace',
    aspectRatio: 'wide'
  },
  {
    id: 2,
    imageUrl: '/about/brainstorming.jpg',
    caption: 'Weekly brainstorming session'
  },
  {
    id: 3,
    imageUrl: '/about/company-retreat.jpg',
    caption: 'Company retreat 2023',
    aspectRatio: 'wide'
  },
  {
    id: 4,
    imageUrl: '/about/pair-programming.jpg',
    caption: 'Pair programming in action',
    aspectRatio: 'tall'
  },
  {
    id: 5,
    imageUrl: '/about/anniversary.jpg',
    caption: 'Celebrating our 5-year anniversary'
  },
  {
    id: 6,
    imageUrl: '/about/ui-ux-review.jpg',
    caption: 'UX/UI design review session'
  }
];

// Company stats for the animated counters
export const companyStats: CompanyStat[] = [
  {
    value: 50,
    label: 'Team Members',
    icon: 'users',
    suffix: '+',
    additional: 'Across 8 countries'
  },
  {
    value: 248,
    label: 'Projects Delivered',
    icon: 'check',
    additional: 'On time, on budget'
  },
  {
    value: 98,
    label: 'Client Satisfaction',
    icon: 'thumbsUp',
    suffix: '%',
    additional: 'Based on post-project surveys'
  },
  {
    value: 7,
    label: 'Years Experience',
    icon: 'calendar',
    additional: 'Founded in 2016'
  }
];

// What we do - services
export const services: ServiceCard[] = [
  {
    id: 1,
    title: 'Custom Software Development',
    description: 'Tailored solutions designed to address your unique business challenges and opportunities.',
    icon: 'code',
    color: 'blue'
  },
  {
    id: 2,
    title: 'Web Application Development',
    description: 'Responsive, scalable web applications built with modern frameworks and architectures.',
    icon: 'globe',
    color: 'purple'
  },
  {
    id: 3,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications for iOS and Android platforms.',
    icon: 'smartphone',
    color: 'green'
  },
  {
    id: 4,
    title: 'UI/UX Design',
    description: 'User-centered design processes that create intuitive, engaging digital experiences.',
    icon: 'layout',
    color: 'orange'
  },
  {
    id: 5,
    title: 'AI & Machine Learning',
    description: 'Intelligent systems that leverage data to automate processes and provide insights.',
    icon: 'cpu',
    color: 'teal'
  },
  {
    id: 6,
    title: 'Cloud Solutions',
    description: 'Scalable infrastructure and deployment strategies optimized for performance and cost.',
    icon: 'cloud',
    color: 'indigo'
  }
]; 