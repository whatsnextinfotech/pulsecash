import { useState } from 'react';
import { Check } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { FaDollarSign, FaCreditCard, FaChartLine } from 'react-icons/fa';

// Custom icon components using react-icons
const DollarIcon = () => (
  <div className="bg-white p-2 rounded-full border border-green-500 flex items-center justify-center w-10 h-10">
    <FaDollarSign className="text-green-500" size={20} />
  </div>
);

const CreditCardIcon = () => (
  <div className="bg-white p-2 rounded-full border border-green-500 flex items-center justify-center w-10 h-10">
    <FaCreditCard className="text-green-600" size={20} />
  </div>
);

const ChartIcon = () => (
  <div className="bg-white p-2 rounded-full border border-green-500 flex items-center justify-center w-10 h-10">
    <FaChartLine className="text-green-600" size={20} />
  </div>
);

export default function PerdayLoan() {
  return (
    <div className="max-w-full mx-auto px-2 py-1 font-sans"><div className='bg-[url("https://img.freepik.com/free-photo/top-view-piggy-bank-with-notebooks-coins_23-2148756586.jpg?ga=GA1.1.1186869695.1744704793&semt=ais_hybrid&w=740")] bg-cover bg-center  z-0'>
       
      <div className="container mx-auto px-6 py-12 ">
        
    
        
        {/* Main content */}
        <div className="flex flex-col lg:flex-row items-start gap-12">
          
          {/* Text content */}
          <div className="lg:w-1/2">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight">
            Payday Loan
            </h1>
            
            <p className="text-white mb-6 text-base">
            - Your Dream are right with in reach, with the help of Pulsecash.
            </p>
            
            <Link to="/contact" className="inline-flex items-center text-green-500 text-xl font-bold hover:text-green-800">
             Support Now
              <svg className="ml-2 w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
          
        
        </div>
      </div>
      </div>
      

      <div className='max-w-6xl mx-auto px-4 py-8 font-sans'>
      {/* Header */}

      <div className="mb-6">
        <div className="text-green-600 font-medium text-lg mb-2">$50,000 to $20 million loans</div>
        <h1 className="text-3xl font-bold mb-4">Quality commercial loans to suit your own unique needs</h1>
        
        <p className="text-gray-700 mb-2">
          Cash buyers have the advantage - from getting their offers accepted to moving into their dream the homes faster. Cash buyers can save big too.
        </p>
        <p className="text-gray-700 mb-4">
          <span className="text-green-600">Business owners and investors come to Fidelity Mortgage Lenders because we offer quality commercial loans with attractive payments, speed and discretion</span>
        </p>
        
        <p className="text-gray-700 mb-4">
          Where? Where? We can help you obtain real estate loans in California, Colorado, Idaho, Montana, Oregon, Texas, Utah, Washington and ask us about loans in Nevada. Size? Our commercial loans range from <span className="font-medium">$50,000 to $20 million</span>. We accommodate a variety of property loans (excluding construction and raw land). Easy Process? We make borrowing easy. There are no prepayment penalties. The application is short. We don't need tax returns, and personal guarantees aren't required.
        </p>
        
        <p className="text-gray-700">
          Hassle Free? High-Quality Customer Service is important. Our borrowers are busy <span className="text-green-600">people</span>, so our receptionist answers all calls and gets you the right person on the phone quickly. There's no waiting – and no voice mail – at Fidelity. Get Closed? Whether you want to purchase or refinance commercial or industrial properties, apartment buildings, motels, religious facilities or otherwise, we can help get your deal funded and closed.
        </p>
      </div>
      
      {/* Features Section */}
      <div className="bg-green-50 rounded-lg p-6 mb-8">
        <div className="grid md:grid-cols-3 gap-6">
          {/* Feature 1 */}
          <div className="flex">
            <div className="mr-4">
              <DollarIcon />
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">Loan amounts that suit your income</h3>
              <p className="text-gray-700">
                Receive a payroll personal loan starting from $ 3,000 up to $ 50,000,000 depending on your cash flow up to 3 years
              </p>
            </div>
          </div>
          
          {/* Feature 2 */}
          <div className="flex">
            <div className="mr-4">
              <CreditCardIcon />
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">Attractive car loan interest rates</h3>
              <p className="text-gray-700">
                Get the advantage of low loan interest rates that we offer on your new or used.
              </p>
            </div>
          </div>
          
          {/* Feature 3 */}
          <div className="flex">
            <div className="mr-4">
              <ChartIcon />
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">Flexible Repayment Tenure</h3>
              <p className="text-gray-700">
                a used car re-finance, our flexible repayment tenure of 12 to 48 months ensures that you have no financial burden.
              </p>
            </div>
          </div>
        </div>
         <hr />
        {/* Property Types */}
        <div className="mt-8">
          <h3 className="text-center font-bold text-xl mb-6">We make loans on properties including:</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex items-center">
              <Check size={18} className="text-green-600 mr-1" />
              <span>Personal Loan</span>
            </div>
            <div className="flex items-center">
              <Check size={18} className="text-green-600 mr-1" />
              <span>Apartments</span>
            </div>
            <div className="flex items-center">
              <Check size={18} className="text-green-600 mr-1" />
              <span>Factories</span>
            </div>
            <div className="flex items-center">
              <Check size={18} className="text-green-600 mr-1" />
              <span>Strip Centers</span>
            </div>
            <div className="flex items-center">
              <Check size={18} className="text-green-600 mr-1" />
              <span>Factories</span>
            </div>
            <div className="flex items-center">
              <Check size={18} className="text-green-600 mr-1" />
              <span>Office Buildings</span>
            </div>
            <div className="flex items-center">
              <Check size={18} className="text-green-600 mr-1" />
              <span>Warehouses</span>
            </div>
            <div className="flex items-center">
              <Check size={18} className="text-green-600 mr-1" />
              <span>Industrial</span>
            </div>
            <div className="flex items-center">
              <Check size={18} className="text-green-600 mr-1" />
              <span>Non-Profits</span>
            </div>
            <div className="flex items-center">
              <Check size={18} className="text-green-600 mr-1" />
              <span>Religious Institutions & Buildings</span>
            </div>
            <div className="flex items-center">
              <Check size={18} className="text-green-600 mr-1" />
              <span>Mixed-Use / Single Use</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Application Process */}
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <h2 className="text-2xl font-bold mb-4">We make borrowing easy</h2>
          
          <p className="mb-4">The loan application procedure for a personal loan very is simple. You can apply from any of the following options:</p>
          
          <ul className="list-disc ml-6 space-y-4">
            <li>Fill in the personal details along with the mobile number.</li>
            <li>Your loan application is accepted and our representative will get in touch with you soon</li>
            <li>verification and then loan Approval.</li>
            <li>Complete the image/signature.</li>
          </ul>
        </div>
        
        <div className="md:w-1/2">
          <img 
            src="https://media.istockphoto.com/id/1413761479/photo/mature-couple-meeting-financial-advisor-for-investment.jpg?s=612x612&w=0&k=20&c=kKraGQ3d_90VsQVIwAx6mi3gNsiytiLT9jlEbmEh1lE=" 
            alt="Happy couple reviewing loan documents" 
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>
      </div>
    </div>
  );
}