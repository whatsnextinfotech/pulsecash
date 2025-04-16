import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';
const FooterContactSection = () => {
  return (
    <div className="">
      {/* Top Green Banner */}
      <div className="bg-gradient-to-r from-[#6ba92d] to-[#3f6604] rounded-xl mx-4 md:mx-40 xl:mx-60 mt-10 p-10 text-white flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-6 md:mb-0">
          <h2 className="text-2xl md:text-3xl font-bold">
            A team of industry pros to guide <br className="hidden md:block" /> you each step of the way
          </h2>
        </div>
        <div className="text-center md:text-right">
          <p className="flex items-center justify-center md:justify-end gap-2 text-lg">
            <span className="material-icons"><Phone size={18} /></span>
            +1 (888) 588-9239
          </p>
          <p className="flex items-center justify-center md:justify-end gap-2 text-lg mt-2">
            <span className="material-icons"><Mail size={18} /></span>
            pulsecashus@gmail.com
          </p> 
          <p className='py-2'></p>
          <Link to="/form" className="mt-4  bg-white text-[#3f6604] px-6 py-2 rounded hover:bg-gray-100 font-medium">
            Apply Now
         </Link>
        </div>
      </div>

      {/* Footer Section */}
      <div className="grid md:grid-cols-4  gap-10 px-6 md:px-20 py-16 text-[#1b1b1b] bg-[#f6fdea]">
        {/* Logo & Description */}
        <div>
          <div className="flex items-center gap-2">
            {/* <div className="text-5xl text-[#6ba92d]">•••</div> */}
            <div>
              <h3 className="text-2xl font-bold text-[#6ba92d]">Pulsecash</h3>
              {/* <div className="h-1 w-20 bg-[#6ba92d] mt-1"></div> */}
              {/* <p className="text-md font-semibold">Loan</p> */}
            </div>
          </div>
          <p className="mt-6 text-sm">
          Our mission is to provide easy, transparent, and reliable lending solutions that are tailored to our customers’ needs. We prioritize your trust and satisfaction in every transaction.
          </p>
        </div>
       
        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-bold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
          <Link to="/about"> <li>About Us</li> </Link>
          <Link to="/contact">  <li>Contact Us</li> </Link>
          <Link to="/services"> <li>Services</li> </Link>
            
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-lg font-bold mb-4">Services</h4>
          <ul className="space-y-2 text-sm">
          <Link to="PersonalLoan">  <li>Personal Loan</li></Link>
          <Link to="perdayLoan">  <li>Payday Loan</li></Link>
           
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-bold mb-4">Our Contact</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <span className="material-icons text-green-800"><Mail size={18} /></span>
              pulsecashus@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <span className="material-icons text-green-800"><Phone size={18} /></span>
              +1 (888) 588-9239
            </li>
            {/* <li className="flex items-center gap-2">
              <span className="material-icons">call</span>
              +1 (312)-9393-9393
            </li> */}
            <li className="flex items-center gap-2 ">
              <span className="material-icons text-green-800"><MapPin size={18} /></span> 
              636 S River Rd, Des Plaines, IL 60016
            </li>
          </ul>
          <div className="flex gap-4 mt-4">
              <a href="#" className="text-gray-600 hover:text-green-700">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-gray-600 hover:text-green-700">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-gray-600 hover:text-green-700">
                <Twitter size={18} />
              </a>
            </div>
        </div>
        
      </div>
      
    </div>
  );
};

export default FooterContactSection;
