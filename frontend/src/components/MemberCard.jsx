import React, { useState, useEffect } from "react";
import Cards from '../assets/aboutimg.webp'
export default function TeamCards() {
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

  const teamMembers = [
    {
      id: 1,
      name: "Michael Anderson",
      title: "Office Manager",
      phone: "+1 3324 55 533",
      address: "Hilton Road, 90KY, NY, America",
      email: "[email protected]",
      image: Cards
    },
    {
      id: 2,
      name: "Jennifer Brown",
      title: "Business Manager",
      phone: "+1 3324 55 534",
      address: "Hilton Road, 90KY, NY, America",
      email: "[email protected]",
      image: Cards
    },
    {
      id: 3,
      name: "Laura Martinez",
      title: "Loan Officer",
      phone: "+1 3324 55 535",
      address: "Hilton Road, 90KY, NY, America",
      email: "[email protected]",
      image: Cards
    },
    {
      id: 4,
      name: "Richard Jackson",
      title: "CEO at Moon Rise Loan",
      phone: "+1 3324 55 536",
      address: "Hilton Road, 90KY, NY, America",
      email: "[email protected]",
      image:Cards
    }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8">
           {/* Stats Section */}
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 text-center relative">
        <StatCard endValue={681} suffix="+" description="Volunteers Participated" />
        <StatCard endValue={80} suffix="k+" description="Veteran Home Completed" />
        <StatCard endValue={27} suffix="+" description="Years in Business" />
        <StatCard endValue={89} suffix="m+" description="Customer Worldwide" />
      </div>
     <h1 className="text-xl md:text-3xl font-bold text-center mb-10 max-w-2xl mx-auto">
  Visit our professional team member for your any help from us
</h1>

      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {teamMembers.map((member) => (
          <div 
            key={member.id} 
            className="border border-gray-300 rounded-lg overflow-hidden transition duration-300 hover:bg-green-50 hover:shadow-lg hover:border-green-500 cursor-pointer"
          >
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-2/5 p-4  ">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-44 object-cover rounded border border-gray-300 "
                />
              </div>
              
              <div className="w-full md:w-3/5 p-4">
                <div className="text-green-700 text-sm font-medium">{member.title}</div>
                <h3 className="text-xl font-bold mt-1 mb-3">{member.name}</h3>
                
                <div className="space-y-2">
                  <div className="flex items-start hover:text-green-600 transition duration-300">
                    <div className="mr-2 text-gray-600">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div className="text-sm">{member.phone}</div>
                  </div>
                  
                  <div className="flex items-start hover:text-green-600 transition duration-300">
                    <div className="mr-2 text-gray-600">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div className="text-sm">{member.address}</div>
                  </div>
                  
                  <div className="flex items-start hover:text-green-600 transition duration-300">
                    <div className="mr-2 text-gray-600">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="text-sm">{member.email}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}