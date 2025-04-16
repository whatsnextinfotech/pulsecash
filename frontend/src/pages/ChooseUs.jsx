import React, { useState, useEffect } from 'react';
import { ArrowRight, DollarSign, CreditCard, TrendingUp, Home } from 'lucide-react';
import Chooseus from '../assets/chooseusimg.jpg'

export default function PulseCashHomepage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-1 mt-0 font-sans my-0 md:mb-36 md:py-8">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 py-12 font-sans relative">
      <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold text-gray-900 leading-tight">
            You know the home you want. We make it happen for your need.
          </h1>
          <p className="text-gray-700">
            At Pulsecash, We believe in turning financial possibilities into realities. Whether you're looking for a personal loan, 
            business funding, or quick cash support, our easy, fast, and secure loan process is designed to help you 
            achieve your goals.
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-0 md:gap-0 ">
          {/* Image Section - Left */}
          <div className="w-full md:w-1/2 relative md:absolute">
            <img 
              src={Chooseus} 
              alt="Senior couple reviewing loan documents"
              className="rounded-lg w-full md:w-fit h-[50vh] md:h-[55vh] md:mt-60 object-cover shadow-lg" 
            />
          </div>
        </div>
      </div>
 
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-1 relative md:absolute   ">
        <div className="bg-green-50 p-6 rounded-lg">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
              <DollarSign className="text-green-600" size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-900">Competitive interest rates</h3>
          </div>
        </div>

        <div className="bg-green-50 p-6 rounded-lg">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
              <CreditCard className="text-green-600" size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-900">Transparent process with no hidden fees</h3>
          </div>
        </div>

        <div className="bg-green-50 p-6 rounded-lg">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
              <TrendingUp className="text-green-600" size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-900">Simple online application</h3>
          </div>
        </div>

        <div className="bg-green-50 p-6 rounded-lg">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
              <Home className="text-green-600" size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-900">Fast loan approval and disbursement</h3>
          </div>
            {/* <p className="text-gray-700">
            Lower your monthly payments or access your home's equity with our competitive refinancing options tailored to your financial goals.
          </p> */}
        </div>
      </div>
      
      {/* Add spacer div to prevent content from being covered by absolute positioned elements */}
      {/* <div className="h-96 md:h-[650px] lg:h-[700px]"></div> */}
    </div>

    {/* <div className=' relative'></div> */}
      {/* Stats Section
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 text-center relative">
        <StatCard endValue={681} suffix="+" description="Volunteers Participated" />
        <StatCard endValue={80} suffix="k+" description="Veteran Home Completed" />
        <StatCard endValue={27} suffix="+" description="Years in Business" />
        <StatCard endValue={89} suffix="m+" description="Customer Worldwide" />
      </div> */}

      {/* Process Section */}
      {/* <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 max-w-3xl mx-auto mb-8">
          Pulsecash has a simple online process for loan applications
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <ProcessStep 
            number="01" 
            title="Calculate Your Payments"
            description="Use our Payment Calculator to estimate your monthly mortgage payment. You can input a different home price, down payment, loan term and interest rate to see how your monthly payment changes."
          />
          
          <ProcessStep 
            number="02" 
            title="See If You Pre-Qualify"
            description="Your pre-qualification request is just the first step in the home loan process, so you need to keep all of your other paperwork together and available for when you're ready to buy."
          />
          
          <ProcessStep 
            number="03" 
            title="Buy Your Dream"
            description="If you get pre-qualified, we will use your information to find the loan amount that works well for your situation. We work hard to make it easy on you for when you're ready to buy."
          />
        </div>

        <button className="bg-green-700 hover:bg-green-800 text-white font-medium py-3 px-10 rounded-lg transition-colors">
          Apply Now <ArrowRight className="inline ml-2" size={18} />
        </button>
      </div> */}
    </div>
  );
}

// Stat Card Component with Animation
function StatCard({ endValue, suffix, description }) {
  const [count, setCount] = useState(0);
  const duration = 2000; // Animation duration in milliseconds
  
  useEffect(() => {
    let startTime;
    let animationFrameId;
    
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      
      const nextCount = Math.min(endValue, Math.floor((progress / duration) * endValue));
      setCount(nextCount);
      
      if (progress < duration && count < endValue) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };
    
    animationFrameId = requestAnimationFrame(animate);
    
    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [endValue]);
  
  return (
    <div className="p-4">
      <div className="text-5xl md:text-6xl font-bold text-gray-900 mb-2">
        {count}{suffix}
      </div>
      <div className="text-sm md:text-base text-gray-700">{description}</div>
    </div>
  );
}

// Process Step Component
function ProcessStep({ number, title, description }) {
  return (
    <div className="relative">
      {/* Number Circle */}
      <div className="bg-black text-white rounded-full w-12 h-12 flex items-center justify-center font-bold mb-6 mx-auto md:mx-0">
        {number}
      </div>
      
      {/* Horizontal Line (only visible on md and above screens) */}
      {number !== "03" && (
        <div className="hidden md:block absolute top-6 left-1/2 w-full h-0.5 bg-gray-200 transform -translate-y-1/2 z-0"></div>
      )}
      
      {/* Content */}
      <div className="text-center md:text-left">
        <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-700 text-sm md:text-base">{description}</p>
      </div>
    </div>
  );
}