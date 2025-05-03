export interface JobPosting {
  id: string;
  title: string;
  location: string;
  type: string;
  category: 'Engineering' | 'Design' | 'Marketing' | 'Management';
  description: string;
  responsibilities: string[];
  requirements: string[];
  skills: string[];
  postedDate: string;
}

export const jobPostings: JobPosting[] = [
  {
    id: 'frontend-dev-1',
    title: 'Frontend Developer',
    location: 'Remote',
    type: 'Full-Time',
    category: 'Engineering',
    description: 'We\'re looking for a frontend engineer to work on modern React-based interfaces. You\'ll collaborate closely with our design and backend teams to create beautiful, responsive, and performant user experiences.',
    responsibilities: [
      'Develop responsive user interfaces using React, Next.js, and TypeScript',
      'Collaborate with designers to implement pixel-perfect UI',
      'Write clean, maintainable, and well-tested code',
      'Optimize applications for maximum performance',
      'Participate in code reviews and contribute to technical decisions'
    ],
    requirements: [
      '3+ years of experience with React',
      'Strong understanding of JavaScript, TypeScript, and modern web technologies',
      'Experience with responsive design and cross-browser compatibility',
      'Familiarity with version control systems like Git',
      'Bachelor\'s degree in Computer Science or equivalent experience'
    ],
    skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
    postedDate: '2023-10-15'
  },
  {
    id: 'ux-designer-1',
    title: 'UX/UI Designer',
    location: 'Hybrid (San Francisco)',
    type: 'Full-Time',
    category: 'Design',
    description: 'Join our design team to create beautiful and intuitive user experiences. You\'ll work on various projects, from concept to implementation, ensuring our products are both aesthetically pleasing and highly usable.',
    responsibilities: [
      'Create user-centered designs by understanding business requirements and user feedback',
      'Design wireframes, prototypes, and high-fidelity mockups',
      'Conduct usability testing and iterate on designs',
      'Collaborate with developers to ensure design implementation meets expectations',
      'Create and maintain design systems and documentation'
    ],
    requirements: [
      '3+ years of experience in UX/UI design',
      'Proficiency in design tools like Figma, Adobe XD, or Sketch',
      'Strong portfolio showcasing your design process and solutions',
      'Understanding of user-centered design principles',
      'Excellent communication and collaboration skills'
    ],
    skills: ['Figma', 'Adobe XD', 'UI Design', 'User Research', 'Design Systems'],
    postedDate: '2023-10-10'
  },
  {
    id: 'backend-dev-1',
    title: 'Backend Developer',
    location: 'Remote',
    type: 'Full-Time',
    category: 'Engineering',
    description: 'We\'re seeking a talented Backend Developer to join our engineering team. You\'ll design, build, and maintain our server-side applications, ensuring they\'re scalable, secure, and efficient.',
    responsibilities: [
      'Design and implement server-side logic and APIs',
      'Optimize application performance and responsiveness',
      'Implement security and data protection measures',
      'Integrate with databases and third-party services',
      'Collaborate with frontend developers to integrate user-facing elements'
    ],
    requirements: [
      '3+ years of experience in backend development',
      'Proficiency in Node.js, Python, or similar technologies',
      'Experience with database design and ORM technologies',
      'Knowledge of server security and data protection best practices',
      'Understanding of cloud services (AWS, Azure, or GCP)'
    ],
    skills: ['Node.js', 'Express', 'PostgreSQL', 'API Design', 'AWS'],
    postedDate: '2023-10-05'
  },
  {
    id: 'marketing-specialist-1',
    title: 'Digital Marketing Specialist',
    location: 'Remote',
    type: 'Full-Time',
    category: 'Marketing',
    description: 'We\'re looking for a Digital Marketing Specialist to help grow our online presence. You\'ll be responsible for planning and executing marketing campaigns across various digital channels.',
    responsibilities: [
      'Develop and implement digital marketing strategies',
      'Manage social media accounts and create engaging content',
      'Plan and execute email marketing campaigns',
      'Analyze campaign performance and optimize for better results',
      'Collaborate with design and content teams'
    ],
    requirements: [
      '2+ years of experience in digital marketing',
      'Knowledge of SEO, SEM, and social media marketing',
      'Experience with marketing analytics tools',
      'Strong written and verbal communication skills',
      'Bachelor\'s degree in Marketing or related field'
    ],
    skills: ['SEO', 'Social Media Marketing', 'Email Marketing', 'Google Analytics', 'Content Strategy'],
    postedDate: '2023-09-28'
  },
  {
    id: 'product-manager-1',
    title: 'Product Manager',
    location: 'Hybrid (New York)',
    type: 'Full-Time',
    category: 'Management',
    description: 'We\'re seeking a Product Manager to help define and execute our product vision. You\'ll work closely with engineering, design, and marketing teams to ensure we\'re building the right products for our users.',
    responsibilities: [
      'Define product strategy and roadmap',
      'Gather and prioritize product requirements',
      'Work with engineering and design teams to deliver features',
      'Analyze market trends and competitor products',
      'Collect and analyze user feedback to inform product decisions'
    ],
    requirements: [
      '3+ years of experience in product management',
      'Strong analytical and problem-solving skills',
      'Excellent communication and stakeholder management abilities',
      'Experience with agile development methodologies',
      'Technical background or understanding of software development'
    ],
    skills: ['Product Strategy', 'User Stories', 'Agile Methodologies', 'Data Analysis', 'User Testing'],
    postedDate: '2023-09-20'
  }
];

export const companyValues = [
  {
    title: 'Innovation',
    description: 'We push boundaries and think outside the box to create cutting-edge solutions.',
    icon: 'lightbulb'
  },
  {
    title: 'Collaboration',
    description: 'We believe great ideas come from diverse teams working together toward a common goal.',
    icon: 'users'
  },
  {
    title: 'Excellence',
    description: 'We strive for the highest quality in everything we do, from code to communication.',
    icon: 'star'
  },
  {
    title: 'Growth',
    description: 'We invest in personal and professional development to help our team reach their full potential.',
    icon: 'trending-up'
  },
  {
    title: 'Balance',
    description: 'We value work-life balance and believe in sustainable productivity.',
    icon: 'compass'
  }
];

export const faqItems = [
  {
    question: 'What is the interview process like?',
    answer: 'Our interview process typically includes an initial screening call, a technical interview, and a final team interview. We focus on understanding your skills, experience, and how you approach problems rather than tricky puzzles or obscure algorithms.'
  },
  {
    question: 'Do you offer remote work options?',
    answer: 'Yes! Many of our positions are fully remote, while others are hybrid. We believe in flexibility and trust our team to work from where they\'re most productive.'
  },
  {
    question: 'What benefits do you offer?',
    answer: 'We offer competitive salaries, comprehensive health insurance, retirement plans, generous PTO, professional development stipends, and a home office allowance for remote employees.'
  },
  {
    question: 'How large is the company?',
    answer: 'We\'re a growing team of about 50 people spread across multiple countries and time zones. We\'re large enough to offer stability but small enough that your work makes a meaningful impact.'
  },
  {
    question: 'What opportunities are there for growth?',
    answer: 'We believe in promoting from within and providing opportunities for skill development. We work with each team member to create individualized growth plans and provide the resources needed to achieve their goals.'
  }
]; 