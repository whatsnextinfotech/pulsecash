import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Service() {
  // Track which cards are expanded
  const [expandedCards, setExpandedCards] = useState({});
  
  const loanProducts = [
    {
      id: 1,
      title: "Personal loan",
      description: "A Personal Loan is an unsecured loan that helps you in times of financial need. Since it requires no collateral, you can get personal loan online at attractive interest rates and flexible tenure options.",
      extraInfo: [
        "Loan amounts ranging from $1,000 to $50,000",
        "Competitive interest rates starting at 7.99% APR",
        "Flexible repayment terms from 12 to 60 months",
        "No prepayment penalties or hidden fees",
        "Quick approval process with funds in as little as 24 hours"
      ],
      image: "https://media.istockphoto.com/id/1317277259/photo/asian-male-florist-owner-of-small-business-flower-shop-using-digital-tablet-while-working-on.jpg?s=612x612&w=0&k=20&c=tWCAUMVV6YyBzKPgVgiHl50vTU3a675E3sOqvGhRuIw=",
      altText: "Family shopping",
    },
    {
      id: 2,
      title: "Perday Loan",
      description: "An international student loan with us is an easy and affordable way to fund your education on your own. Our loans help support your independence since we never require a cosigner or collateral.",
      extraInfo: [
        "Cover tuition, books, housing, and other education expenses",
        "Deferred payments until 6 months after graduation",
        "Low fixed interest rates for the duration of your studies",
        "Special discounts for academic excellence",
        "Flexible repayment plans tailored to your post-graduation income"
      ],
      image: "https://media.istockphoto.com/id/1322158065/photo/business-people-contract-agreement-was-signed-co-investment-business.jpg?s=612x612&w=0&k=20&c=QE_ydA8qCzFkzAuTmzoCcQNg6nyKEBULRnlzp7Xihtc=",
      altText: "Graduates with diplomas",
    },

  ];

  // Toggle expanded state for a card
  const toggleExpand = (id) => {
    setExpandedCards({
      ...expandedCards,
      [id]: !expandedCards[id]
    });
  };

  return (
    
    <div className="max-w-full mx-auto px-1 py-1 sm:px-6 lg:px-1">
      <div className='bg-[#f6fdea] '>
      <div className="container mx-auto px-6 py-12 md:h-[60vh] ">
        {/* Navigation */}
        <nav className="flex mb-6">
          <Link to="/" className="text-green-600 text-sm font-medium hover:text-green-800">Home</Link>
          <span className="text-gray-500 mx-2 text-sm">/</span>
          <Link to="#" className="text-gray-500 text-sm font-medium hover:text-gray-700">Loan Programs</Link>
        </nav>
        
        {/* Main content */}
        <div className="flex flex-col lg:flex-row items-start gap-12">
          {/* Text content */}
          <div className="lg:w-1/2">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
            Our Lending Solutions
            </h1>
            
            <p className="text-gray-700 mb-6 text-base">
            At Pulsecash, we offer a variety of loan services to cater to your unique financial requirements
            </p>
            
            <Link to="/contact" className="inline-flex items-center text-green-600 text-sm font-medium hover:text-green-800">
              Support Now
              <svg className="ml-2 w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
          
          {/* Image with exact house overlay */}
          <div className="lg:w-1/2 relative mt-4  lg:-mt-16 md:right-40 ">
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
              <div className="w-full  max-w-lg md:max-w-96 ml-auto md:h-96 md:right-40" style={{
  clipPath: 'polygon(50% 0%, 95% 38%, 84% 38%, 84% 99%, 15% 98%, 16% 40%, 5% 39%)',
  WebkitClipPath: 'polygon(50% 0%, 95% 38%, 84% 38%, 84% 99%, 15% 98%, 16% 40%, 5% 39%)',
  overflow: 'hidden'
}}>
  <img 
    src="https://moonriseloans.com/assets/images/banner-img-1.jpg" 
    alt="Financial advisor with tablet" 
    className="w-full object-cover h-full"
  />
</div>

              
              {/* Small decorative green shape at bottom of image */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-green-200/40 rounded-md z-10"></div>
            </div>
            
            {/* Large decorative circle */}
            <div className="absolute -top-8 -left-8 w-32 h-32 rounded-full bg-green-200/40 z-10"></div>
          </div>
        </div>
      </div>
      </div>
      
      <h1 className="text-4xl font-bold text-center mb-16">
        Loan facilities specifically tailored to fulfill your needs
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 container max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 ">
        {loanProducts.map((product) => (
          <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100">
            <div className=" h-48 overflow-hidden">
              <img 
                src={product.image}
                alt={product.altText} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4">{product.title}</h2>
              <p className="text-gray-700 mb-6 ">{product.description}</p>
              
              {/* Additional info that appears when expanded */}
              {expandedCards[product.id] && (
                <div className="mt-4 mb-6">
                  <ul className="space-y-2 text-gray-700">
                    {product.extraInfo.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="inline-block mr-2 mt-1 text-blue-600">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              <div className="border-t border-gray-200 pt-4">
                <button 
                  onClick={() => toggleExpand(product.id)}
                  className="inline-flex items-center font-medium text-gray-700 hover:text-gray-900"
                >
                  {expandedCards[product.id] ? 'Show Less' : 'Read More'}
                  <svg 
                    className={`ml-1 w-5 h-5 transition-transform ${expandedCards[product.id] ? 'rotate-90' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}