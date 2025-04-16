import React from 'react';
import TeamCards from '../components/MemberCard';
import { Link, useNavigate } from 'react-router-dom';
import TestimonialSlider from '../components/Testrimonial';
import Aboutus from '../assets/aboutimg.webp'

export default function About() {
  return (
    <div className="bg-green-50/30 min-h- w-full">
      <div className="container mx-auto px-6 py-12">
        {/* Navigation */}
        <nav className="flex mb-6">
          <Link to="/" className="text-green-600 text-sm font-medium hover:text-green-800">Home</Link>
          <span className="text-gray-500 mx-2 text-sm">/</span>
          <Link to="/" className="text-gray-500 text-sm font-medium hover:text-gray-700">History & Fidelity</Link>
        </nav>
        
        {/* Main content */}
        <div className="flex flex-col lg:flex-row items-start gap-12">
          {/* Text content */}
          <div className="lg:w-1/2">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
            Pulsecash — Empowering Your Financial Growth with transparent, reliable lending tailored to your needs. Your trust is our priority.
            </h1>
            
            <p className="text-gray-700 mb-6 text-base">
            Pulsecash is more than just a lending company. We’re a team of financial experts committed to helping individuals and businesses thrive. With years of experience in the financial industry, we understand the urgency and importance of accessible funding
            </p>
            
            <Link to="/services" className="inline-flex items-center text-green-600 text-sm font-medium hover:text-green-800">
              View All Program Loans
              <svg className="ml-2 w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
          
          {/* Image with exact house overlay */}
          <div className="lg:w-1/2 relative mt-4  lg:-mt-12">
            <div className="relative">
              {/* The house shape container */}
              {/* <div className="w-full max-w-lg ml-auto" style={{
                clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 75%)',
                shapeOutside: 'polygon(0 0, 100% 0, 100% 100%, 0 75%)',
                WebkitClipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 75%)',
              }}>
                <img 
                  src="/api/placeholder/600/500" 
                  alt="Financial advisor with tablet" 
                  className="w-full object-cover"
                />
              </div> */}
              <div className="w-full max-w-lg ml-auto" style={{
  clipPath: 'polygon(50% 0%, 95% 38%, 84% 38%, 84% 99%, 15% 98%, 16% 40%, 5% 39%)',
  WebkitClipPath: 'polygon(50% 0%, 95% 38%, 84% 38%, 84% 99%, 15% 98%, 16% 40%, 5% 39%)',
  overflow: 'hidden'
}}>
  <img 
    src={Aboutus} 
    alt="Financial advisor with tablet" 
    className="w-full object-cover h-full"
  />
</div>

              
              {/* Small decorative green shape at bottom of image */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-green-100/40 rounded-md -z-10"></div>
            </div>
            
            {/* Large decorative circle */}
            <div className="absolute -top-8 -left-8 w-32 h-32 rounded-full bg-green-100/40 -z-10"></div>
          </div>
        </div>
      </div>
      
      {/* Background decorative elements */}
      {/* <div className="absolute -bottom-16 right-1/4 w-64 h-64 bg-green-100/40 rounded-full -z-20"></div>
      <div className="absolute top-1/3 left-1/3 w-16 h-16 bg-green-100/30 -z-20"></div> */}
      <TeamCards/>
      <TestimonialSlider/>
    </div>
  );
}