import { useState } from 'react';
import { Phone, Clock, MapPin, ChevronDown, User, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom'; // Assuming react-router usage - adjust import as needed

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  return (
    <header className="font-sans">
      {/* Top bar */}
      <div className="bg-white py-2 border-b border-gray-100">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-700">
          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
            <div className="flex items-center gap-1">
              <Phone size={16} className="text-gray-500" />
              <span>+1 (888) 588-9239</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock size={16} className="text-gray-500" />
              <span>M-F 7 AM - 5:30 PM PT</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin size={16} className="text-gray-500" />
              <span>636 S River Rd , Des Plaines, IL 60016</span>
            </div>
          </div>
          <div>
            
          </div>
        </div>
      </div>
      
      {/* Main navigation */}
      <div className="bg-gray-50 py-4 shadow-sm">
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
           
            <div>
              <div className="font-bold text-green-700 leading-none text-xl tracking-wide">Pulsecash</div>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-800 hover:text-green-700 font-medium">Home</Link>
            <Link to="/about" className="text-gray-800 hover:text-green-800 font-medium">About us</Link>
            <Link to="/services" className="text-gray-800 hover:text-green-700 font-medium">Our Service</Link>
            {/* Dropdown for Loan Programs */}
  <div className="relative group">
    <button className="text-black font-medium flex items-center focus:outline-none">
      Loan Programs
      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
      </svg>
    </button>

    {/* Dropdown Menu */}
    <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 z-50">
      {/* <Link to="/PersonalLoan" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Home Loans</Link>
      <Link to="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Car Loans</Link> */}
      <Link to="/PersonalLoan" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Personal Loans</Link>
      <Link to="/PerdayLoan" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Payday Loans</Link>
    </div>
  </div>
            {/* <Link to="/faq" className="text-gray-800 hover:text-green-700 font-medium">FAQ's</Link> */}
            <Link to="/contact" className="text-gray-800 hover:text-green-700 font-medium">Contact Us</Link>
          </nav>
          
          {/* Apply Button */}
          <div>
            <Link to="/form" className="hidden md:inline-block border border-green-700 text-green-700 hover:bg-green-700 hover:text-white px-6 py-2 rounded-md transition-colors font-medium">Apply Now</Link>
            
            {/* Mobile menu button */}
            <button 
              className="md:hidden text-gray-800"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-md">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex flex-col space-y-3">
              <Link to="/" className="text-gray-800 hover:text-green-700 font-medium py-2">Home</Link>
              <Link to="/about" className="text-green-700 hover:text-green-800 font-medium py-2">About us</Link>
              <Link to="/services" className="text-gray-800 hover:text-green-700 font-medium py-2">Our Service</Link>
              <button 
                className="flex items-center justify-between text-gray-800 hover:text-green-700 font-medium py-2"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                Loan Programs
                <ChevronDown size={18} />
              </button>
              {isDropdownOpen && (
                <div className="pl-4 border-l-2 border-green-100 space-y-2 py-2">
                  <Link to="/loans/personal" className="block text-gray-800 hover:text-green-700">Personal Loans</Link>
                  <Link to="/loans/business" className="block text-gray-800 hover:text-green-700">Business Loans</Link>
                  <Link to="/loans/mortgage" className="block text-gray-800 hover:text-green-700">Mortgage Loans</Link>
                </div>
              )}
              <Link to="/faq" className="text-gray-800 hover:text-green-700 font-medium py-2">FAQ's</Link>
              <Link to="/contact" className="text-gray-800 hover:text-green-700 font-medium py-2">Contact Us</Link>
              <Link to="/apply" className="text-center bg-green-700 text-white py-2 rounded-md font-medium">Apply Now</Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}