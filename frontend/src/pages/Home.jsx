import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PulseCashHomepage from './ChooseUs';
import LoanProcess from '../components/LoanProcess';
import TestimonialSection from '../components/HomeTestimonial';
import Homeimg from '../assets/homeimg.jpg'

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  return (
    <div className="flex flex-col min-h-screen">
    

      {/* Hero Section */}
      <div className="relative flex-grow">
        {/* Background Image and Overlay */}
        <div className="absolute inset-0 bg-gray-200">
          <img 
            src={Homeimg} 
            alt="Happy couple" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>

        {/* Hero Content */}
        <div className="relative h-full py-16 md:py-24 px-4 md:px-8">
          <div className="container mx-auto">
            <div className="md:max-w-2xl lg:max-w-3xl">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              Welcome to Pulsecash – Your Trusted Lending Partner
              </h1>
              <p className="text-white text-base sm:text-lg md:text-xl mb-8 opacity-90">
                We will match you with a loan program that meet your financial need. In short term liquidity, by striving to make funds available to them within 24 hours of application.
              </p>
              <Link to="/form" className="">
              <button className="bg-green-700 text-white font-medium px-6 py-3 rounded hover:bg-green-800 transition duration-300">
              
           Apply
          
              </button> </Link>
            </div>
          </div>
        </div>
      </div>
      <PulseCashHomepage/>
      <LoanProcess/>
      <TestimonialSection/>
    </div>
  );
}