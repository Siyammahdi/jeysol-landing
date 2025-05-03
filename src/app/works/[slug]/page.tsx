// Server component for project details page
import React from 'react';
import { projectsData } from '@/data/works';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import ClientPageRoot from '@/components/ClientPageRoot';

// Define params type
interface ProjectDetailPageProps {
  params: {
    slug: string;
  };
}

// Server Component for proper params handling
export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = params;
  
  // Find the project in the dataset
  const project = projectsData.find((p) => p.slug === slug);
  
  // If project not found, show error state
  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#0A0F2C] via-[#070B22] to-[#05071A] px-4 text-center">
        <div className="text-red-400 text-xl mb-4">Project not found</div>
        <p className="text-blue-100/70 mb-8">We couldn&apos;t find the project you&apos;re looking for.</p>
        <Link 
          href="/works" 
          className="flex items-center px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white transition-colors duration-300"
        >
          <ArrowLeft size={16} className="mr-2" />
          Back to Projects
        </Link>
      </div>
    );
  }
  
  // If project is found, render the project details using the client component wrapper
  return (
    <ClientPageRoot project={project} />
  );
} 