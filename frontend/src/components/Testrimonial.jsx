import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Star component for the rating
const Star = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" fill="#3C6E0F" />
  </svg>
);

// Testimonial avatar component
const Avatar = ({ name }) => (
  <div className="flex items-center gap-3">
    <div className="w-10 h-10 rounded-full overflow-hidden">
      <img 
        src="/api/placeholder/40/40" 
        alt={`${name}'s profile`}
        className="w-full h-full object-cover"
      />
    </div>
    <div>
      <h4 className="font-bold text-lg">{name}</h4>
      <p className="text-sm text-gray-600">01 days ago</p>
    </div>
  </div>
);

// Testimonial component
const Testimonial = ({ quote, name }) => (
  <div className="bg-green-50 p-8 rounded-lg relative">
    {/* Five Star Rating */}
    <div className="flex justify-center mb-6">
      <Star />
      <Star />
      <Star />
      <Star />
      <Star />
    </div>
    
    {/* Quote */}
    <p className="text-center text-lg font-medium mb-8">
      "{quote}"
    </p>
    
    {/* Avatar and Name */}
    <div className="flex justify-center">
      <Avatar name={name} />
    </div>
    
    {/* Decorative element (leaf/clover) */}
    <div className="absolute left-12 bottom-12 opacity-10">
      <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M40 0C40 22.09 22.09 40 0 40C22.09 40 40 57.91 40 80C40 57.91 57.91 40 80 40C57.91 40 40 22.09 40 0Z" fill="#3C6E0F"/>
      </svg>
    </div>
  </div>
);

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  
  const testimonials = [
    {
      quote: "I really like the way these people help with loans. I got a loan from kotak and cashkumar called me every day to update on whats happening. Will recommend them to everyone.",
      name: "Alex Smith"
    },
    {
      quote: "The loan process was incredibly smooth. The team was professional and kept me informed throughout. I couldn't be happier with the service.",
      name: "Sarah Johnson"
    },
    {
      quote: "Exceptional customer service and fast approval. I received my loan within days of applying. Truly a great experience.",
      name: "Michael Brown"
    }
  ];
  
  // Auto-slide functionality
  useEffect(() => {
    let intervalId;
    
    if (!isPaused) {
      intervalId = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000); // Change slide every 5 seconds
    }
    
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isPaused, testimonials.length]);
  
  const handlePrev = () => {
    setIsPaused(true); // Pause auto-sliding when manually navigating
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
    
    // Resume auto-sliding after 10 seconds of inactivity
    setTimeout(() => setIsPaused(false), 10000);
  };
  
  const handleNext = () => {
    setIsPaused(true); // Pause auto-sliding when manually navigating
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
    
    // Resume auto-sliding after 10 seconds of inactivity
    setTimeout(() => setIsPaused(false), 10000);
  };
  
  return (
    <div 
      className="relative max-w-7xl mx-auto my-20"
      onMouseEnter={() => setIsPaused(true)} // Pause on hover
      onMouseLeave={() => setIsPaused(false)} // Resume on mouse leave
    >
      {/* Background Image */}
      <div className="w-full h-64 md:h-96 relative ">
        <img 
          src="https://img.freepik.com/free-photo/happy-couple-having-meeting-with-real-estate-agent-analyzing-blueprints-while-communicating_637285-3822.jpg?semt=ais_hybrid&w=740" 
          alt="People meeting" 
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>
      
      {/* Testimonial Card with transition effect */}
      <div className="absolute top-32 md:top-48 left-0 right-0 mx-4 md:mx-auto max-w-3xl">
        <div className="transition-opacity duration-500">
          <Testimonial 
            quote={testimonials[currentIndex].quote}
            name={testimonials[currentIndex].name}
          />
        </div>
      </div>
      
      {/* Navigation Buttons */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-between px-4 md:px-8">
        <button 
          onClick={handlePrev}
          className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center hover:bg-green-100 transition-colors"
          aria-label="Previous testimonial"
        >
          <ChevronLeft size={24} className="text-green-800" />
        </button>
        
        <button 
          onClick={handleNext}
          className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center hover:bg-green-100 transition-colors"
          aria-label="Next testimonial"
        >
          <ChevronRight size={24} className="text-green-800" />
        </button>
      </div>
      
      {/* Indicator dots */}
      <div className="absolute -bottom-8 left-0 right-0 flex justify-center gap-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setIsPaused(true);
              setCurrentIndex(index);
              setTimeout(() => setIsPaused(false), 10000);
            }}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? 'bg-green-800' : 'bg-gray-300'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}