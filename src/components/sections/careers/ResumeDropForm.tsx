'use client';

import React, { useRef, useState, ChangeEvent, FormEvent } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { jobPostings } from '@/data/careers';
import { Upload, CheckCircle2, XCircle, Send, Loader2 } from 'lucide-react';
import Image from 'next/image';
import confetti from 'canvas-confetti';

// Helper for form validation
type FieldError = {
  message: string;
};

type FormData = {
  fullName: string;
  email: string;
  coverLetter: string;
  role: string;
  resumeFile: File | null;
  portfolioUrl: string;
};

const ResumeDropForm = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  // Form state
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    coverLetter: '',
    role: '',
    resumeFile: null,
    portfolioUrl: ''
  });
  
  // Form errors
  const [errors, setErrors] = useState<Record<string, FieldError>>({});
  
  // Form submission state
  const [submissionState, setSubmissionState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    
    if (file) {
      // Validate file type (PDF only)
      if (file.type !== 'application/pdf') {
        setErrors(prev => ({
          ...prev,
          resumeFile: { message: 'Only PDF files are accepted' }
        }));
        return;
      }
      
      // Validate file size (10 MB max)
      if (file.size > 10 * 1024 * 1024) {
        setErrors(prev => ({
          ...prev,
          resumeFile: { message: 'File size should be less than 10MB' }
        }));
        return;
      }
      
      // Clear any existing errors
      const newErrors = { ...errors };
      delete newErrors.resumeFile;
      setErrors(newErrors);
    }
    
    setFormData(prev => ({
      ...prev,
      resumeFile: file
    }));
  };
  
  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear any existing error for this field
    if (errors[name]) {
      const newErrors = { ...errors };
      delete newErrors[name];
      setErrors(newErrors);
    }
  };
  
  const validateForm = (): boolean => {
    const newErrors: Record<string, FieldError> = {};
    
    // Name validation
    if (!formData.fullName.trim()) {
      newErrors.fullName = { message: 'Full name is required' };
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = { message: 'Email is required' };
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = { message: 'Please enter a valid email address' };
    }
    
    // Cover letter validation
    if (!formData.coverLetter.trim()) {
      newErrors.coverLetter = { message: 'Cover letter is required' };
    } else if (formData.coverLetter.length < 100) {
      newErrors.coverLetter = { message: 'Cover letter should be at least 100 characters' };
    }
    
    // Role validation
    if (!formData.role) {
      newErrors.role = { message: 'Please select a role' };
    }
    
    // Resume validation
    if (!formData.resumeFile) {
      newErrors.resumeFile = { message: 'Resume file is required' };
    }
    
    // Portfolio URL validation - optional but if provided should be a valid URL
    if (formData.portfolioUrl && !formData.portfolioUrl.startsWith('http')) {
      newErrors.portfolioUrl = { message: 'Please enter a valid URL starting with http:// or https://' };
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setSubmissionState('submitting');
    
    // Simulate form submission with a delay
    setTimeout(() => {
      try {
        // In a real app, you would send the form data to your backend here
        console.log('Form submitted with data:', formData);
        
        // Show success state
        setSubmissionState('success');
        
        // Trigger confetti animation
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
        
        // Reset form after a few seconds
        setTimeout(() => {
          setFormData({
            fullName: '',
            email: '',
            coverLetter: '',
            role: '',
            resumeFile: null,
            portfolioUrl: ''
          });
          setSubmissionState('idle');
          
          // Clear the file input
          if (fileInputRef.current) {
            fileInputRef.current.value = '';
          }
        }, 5000);
      } catch (error) {
        console.error('Error submitting form:', error);
        setSubmissionState('error');
      }
    }, 2000);
  };
  
  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };
  
  return (
    <section 
      ref={sectionRef}
      className="py-24 relative"
      id="resume-drop"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#090E27]/50 to-[#0A0F2C]"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-indigo-950/60 via-indigo-900/50 to-indigo-900/40 backdrop-blur-sm 
                border border-indigo-500/20 rounded-2xl p-8 shadow-xl shadow-indigo-950/20"
            >
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mb-8"
              >
                <span className="text-indigo-400 font-medium text-sm uppercase tracking-wider">Join Our Team</span>
                <h2 className="text-3xl font-bold text-white mt-2">Drop Your Resume</h2>
                <p className="text-blue-100/70 mt-3">
                  Don't see a position that matches your skills? Submit your resume for future opportunities.
                  Our team will review your application and reach out when a suitable role becomes available.
                </p>
              </motion.div>
              
              <motion.form
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-indigo-200 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-lg bg-indigo-950/50 border ${
                      errors.fullName ? 'border-red-500' : 'border-indigo-500/30'
                    } text-white placeholder-indigo-300/50 focus:outline-none focus:border-indigo-400 
                    focus:ring-2 focus:ring-indigo-500/20 transition-all duration-300`}
                    placeholder="Enter your full name"
                  />
                  {errors.fullName && (
                    <p className="mt-1 text-sm text-red-400 flex items-center">
                      <XCircle size={14} className="mr-1" />
                      {errors.fullName.message}
                    </p>
                  )}
                </div>
                
                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-indigo-200 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-lg bg-indigo-950/50 border ${
                      errors.email ? 'border-red-500' : 'border-indigo-500/30'
                    } text-white placeholder-indigo-300/50 focus:outline-none focus:border-indigo-400 
                    focus:ring-2 focus:ring-indigo-500/20 transition-all duration-300`}
                    placeholder="you@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-400 flex items-center">
                      <XCircle size={14} className="mr-1" />
                      {errors.email.message}
                    </p>
                  )}
                </div>
                
                {/* Role Selection */}
                <div>
                  <label htmlFor="role" className="block text-sm font-medium text-indigo-200 mb-1">
                    Position of Interest
                  </label>
                  <select
                    id="role"
                    name="role"
                    value={formData.role}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-lg bg-indigo-950/50 border ${
                      errors.role ? 'border-red-500' : 'border-indigo-500/30'
                    } text-white placeholder-indigo-300/50 focus:outline-none focus:border-indigo-400 
                    focus:ring-2 focus:ring-indigo-500/20 transition-all duration-300 appearance-none`}
                  >
                    <option value="" disabled>Select a position</option>
                    <option value="general">General Application</option>
                    {jobPostings.map(job => (
                      <option key={job.id} value={job.id}>
                        {job.title} ({job.location})
                      </option>
                    ))}
                  </select>
                  {errors.role && (
                    <p className="mt-1 text-sm text-red-400 flex items-center">
                      <XCircle size={14} className="mr-1" />
                      {errors.role.message}
                    </p>
                  )}
                </div>
                
                {/* Portfolio URL */}
                <div>
                  <label htmlFor="portfolioUrl" className="block text-sm font-medium text-indigo-200 mb-1">
                    Portfolio / GitHub URL <span className="text-indigo-400/70">(optional)</span>
                  </label>
                  <input
                    type="url"
                    id="portfolioUrl"
                    name="portfolioUrl"
                    value={formData.portfolioUrl}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-lg bg-indigo-950/50 border ${
                      errors.portfolioUrl ? 'border-red-500' : 'border-indigo-500/30'
                    } text-white placeholder-indigo-300/50 focus:outline-none focus:border-indigo-400 
                    focus:ring-2 focus:ring-indigo-500/20 transition-all duration-300`}
                    placeholder="https://github.com/yourusername"
                  />
                  {errors.portfolioUrl && (
                    <p className="mt-1 text-sm text-red-400 flex items-center">
                      <XCircle size={14} className="mr-1" />
                      {errors.portfolioUrl.message}
                    </p>
                  )}
                </div>
                
                {/* Cover Letter */}
                <div>
                  <label htmlFor="coverLetter" className="block text-sm font-medium text-indigo-200 mb-1">
                    Cover Letter / Introduction
                  </label>
                  <textarea
                    id="coverLetter"
                    name="coverLetter"
                    value={formData.coverLetter}
                    onChange={handleInputChange}
                    rows={5}
                    className={`w-full px-4 py-3 rounded-lg bg-indigo-950/50 border ${
                      errors.coverLetter ? 'border-red-500' : 'border-indigo-500/30'
                    } text-white placeholder-indigo-300/50 focus:outline-none focus:border-indigo-400 
                    focus:ring-2 focus:ring-indigo-500/20 transition-all duration-300`}
                    placeholder="Tell us about yourself, your experience, and why you want to join our team..."
                  />
                  {errors.coverLetter && (
                    <p className="mt-1 text-sm text-red-400 flex items-center">
                      <XCircle size={14} className="mr-1" />
                      {errors.coverLetter.message}
                    </p>
                  )}
                </div>
                
                {/* Resume Upload */}
                <div>
                  <p className="block text-sm font-medium text-indigo-200 mb-3">
                    Resume
                  </p>
                  
                  <div 
                    onClick={triggerFileInput}
                    className={`cursor-pointer border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center
                      ${errors.resumeFile 
                        ? 'border-red-500 bg-red-500/10' 
                        : formData.resumeFile 
                          ? 'border-green-500/50 bg-green-500/5' 
                          : 'border-indigo-500/30 bg-indigo-950/30 hover:bg-indigo-900/30 hover:border-indigo-400/50'
                      } transition-all duration-300`}
                  >
                    <input
                      type="file"
                      id="resumeFile"
                      name="resumeFile"
                      ref={fileInputRef}
                      onChange={handleFileChange}
                      accept=".pdf"
                      className="hidden"
                    />
                    
                    {formData.resumeFile ? (
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                          <CheckCircle2 size={20} className="text-green-400" />
                        </div>
                        <div className="text-left">
                          <p className="text-white font-medium">Resume Uploaded</p>
                          <p className="text-indigo-300/70 text-sm">
                            {formData.resumeFile.name} ({Math.round(formData.resumeFile.size / 1024)} KB)
                          </p>
                        </div>
                      </div>
                    ) : (
                      <>
                        <div className="w-14 h-14 rounded-full bg-indigo-600/20 flex items-center justify-center mb-4">
                          <Upload size={24} className="text-indigo-400" />
                        </div>
                        <p className="text-indigo-200 text-sm font-medium mb-1">
                          Drag your resume here or click to browse
                        </p>
                        <p className="text-indigo-300/50 text-xs">
                          PDF file only, 10MB maximum
                        </p>
                      </>
                    )}
                  </div>
                  
                  {errors.resumeFile && (
                    <p className="mt-1 text-sm text-red-400 flex items-center">
                      <XCircle size={14} className="mr-1" />
                      {errors.resumeFile.message}
                    </p>
                  )}
                </div>
                
                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={submissionState === 'submitting' || submissionState === 'success'}
                    className={`w-full py-4 rounded-lg font-medium flex items-center justify-center transition-all duration-300 
                      ${submissionState === 'error' 
                        ? 'bg-red-600 hover:bg-red-700 text-white' 
                        : submissionState === 'success'
                          ? 'bg-green-600 text-white cursor-default'
                          : 'bg-indigo-600 hover:bg-indigo-700 text-white'
                      } shadow-lg ${submissionState !== 'error' ? 'shadow-indigo-600/20' : 'shadow-red-600/20'}`}
                  >
                    {submissionState === 'idle' && (
                      <>
                        <Send size={18} className="mr-2" />
                        Submit Application
                      </>
                    )}
                    {submissionState === 'submitting' && (
                      <>
                        <Loader2 size={18} className="mr-2 animate-spin" />
                        Submitting...
                      </>
                    )}
                    {submissionState === 'success' && (
                      <>
                        <CheckCircle2 size={18} className="mr-2" />
                        Application Submitted!
                      </>
                    )}
                    {submissionState === 'error' && (
                      <>
                        <XCircle size={18} className="mr-2" />
                        Error - Try Again
                      </>
                    )}
                  </button>
                </div>
              </motion.form>
            </motion.div>
            
            {/* Right Column - Image and Details */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="relative">
                <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl shadow-indigo-950/20">
                  <Image
                    src="/careers/team-colab-2.jpg"
                    alt="Team collaborating"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F2C]/90 via-[#0A0F2C]/50 to-transparent"></div>
                </div>
                
                {/* Info cards */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="absolute bottom-8 left-0 right-0 mx-8"
                >
                  <div className="bg-indigo-950/80 backdrop-blur-sm border border-indigo-500/20 
                    rounded-xl p-6 shadow-lg shadow-indigo-950/40"
                  >
                    <h3 className="text-xl font-bold text-white mb-4">
                      Application Process
                    </h3>
                    
                    <div className="space-y-4">
                      <div className="flex">
                        <div className="w-8 h-8 rounded-full bg-indigo-600/30 border border-indigo-500/30 
                          flex items-center justify-center text-indigo-400 mr-3 flex-shrink-0"
                        >
                          <span>1</span>
                        </div>
                        <div>
                          <h4 className="text-white font-medium">Submit Your Application</h4>
                          <p className="text-blue-100/70 text-sm">
                            Fill out the form and upload your resume.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex">
                        <div className="w-8 h-8 rounded-full bg-indigo-600/30 border border-indigo-500/30 
                          flex items-center justify-center text-indigo-400 mr-3 flex-shrink-0"
                        >
                          <span>2</span>
                        </div>
                        <div>
                          <h4 className="text-white font-medium">Initial Review</h4>
                          <p className="text-blue-100/70 text-sm">
                            Our recruitment team will review your application within 1-2 weeks.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex">
                        <div className="w-8 h-8 rounded-full bg-indigo-600/30 border border-indigo-500/30 
                          flex items-center justify-center text-indigo-400 mr-3 flex-shrink-0"
                        >
                          <span>3</span>
                        </div>
                        <div>
                          <h4 className="text-white font-medium">Interview Process</h4>
                          <p className="text-blue-100/70 text-sm">
                            Selected candidates will be invited for interviews.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex">
                        <div className="w-8 h-8 rounded-full bg-indigo-600/30 border border-indigo-500/30 
                          flex items-center justify-center text-indigo-400 mr-3 flex-shrink-0"
                        >
                          <span>4</span>
                        </div>
                        <div>
                          <h4 className="text-white font-medium">Welcome Aboard!</h4>
                          <p className="text-blue-100/70 text-sm">
                            Successful candidates will receive an offer and onboarding details.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeDropForm; 