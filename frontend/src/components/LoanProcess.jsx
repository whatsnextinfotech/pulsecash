import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function LoanProcess() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8 font-sans">
      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 text-center">
        <StatCard endValue={681} suffix="+" description="Volunteers Participated" />
        <StatCard endValue={80} suffix="k+" description="Veteran Home Completed" />
        <StatCard endValue={27} suffix="+" description="Years in Business" />
        <StatCard endValue={89} suffix="m+" description="Customer Worldwide" />
      </div>

      {/* Main Heading */}
      <div className="text-center mb-16">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-900 max-w-3xl mx-auto">
        Pulsecash has a simple online process for loan applications
        </h1>
      </div>

      {/* Process Steps */}
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

      {/* Apply Now Button */}
      <div className="flex justify-center mb-12">
      <Link to="/form" className="">
              <button className="bg-green-700 text-white font-medium px-6 py-3 rounded hover:bg-green-800 transition duration-300">
              
           Apply
          
              </button> </Link>
      </div>
    </div>
  );
}

// Stat Card Component with Animation
function StatCard({ endValue, suffix, description }) {
  const [count, setCount] = useState(0);
  const duration = 2000; // Animation duration in milliseconds
  const frameRate = 50; // Updates per second
  
  useEffect(() => {
    let startTime;
    let animationFrameId;
    
    // Animation function
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      
      // Calculate current count based on progress
      const nextCount = Math.min(endValue, Math.floor((progress / duration) * endValue));
      setCount(nextCount);
      
      // Continue animation if not complete
      if (progress < duration && count < endValue) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };
    
    // Start animation
    animationFrameId = requestAnimationFrame(animate);
    
    // Cleanup
    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [endValue]);
  
  return (
    <div className="p-4">
      <div className="text-5xl md:text-6xl font-bold text-zinc-900 mb-2">
        {count}{suffix}
      </div>
      <div className="text-sm md:text-base text-zinc-700">{description}</div>
    </div>
  );
}

// Process Step Component
function ProcessStep({ number, title, description }) {
  return (
    <div className="relative">
      {/* Number Circle */}
      <div className="bg-black text-white rounded-full w-12 h-12 flex items-center justify-center font-bold mb-6">
        {number}
      </div>
      
      {/* Horizontal Line (only visible on md and above screens) */}
      {number !== "03" && (
        <div className="hidden md:block absolute top-6 left-12 w-full h-0.5 bg-gray-200 transform -translate-y-1/2 z-0"></div>
      )}
      
      {/* Content */}
      <div className="relative z-10">
        <h3 className="text-xl font-bold text-zinc-900 mb-3">{title}</h3>
        <p className="text-zinc-700 text-sm md:text-base">{description}</p>
      </div>
    </div>
  );
}