import { useState } from 'react';
import { Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Get base API URL from .env file
const apiurl = import.meta.env.VITE_API_URL;

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    state: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${apiurl}/api/contacts`, formData);
      console.log(response.data);
      toast.success("Message sent successfully!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      setFormData({ firstName: '', lastName: '', phone: '', state: '', message: '' });
    } catch (error) {
      console.error(error);
      toast.error("Fill the required field ", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      <ToastContainer />
      <div className='bg-[url("https://t3.ftcdn.net/jpg/05/30/96/04/360_F_530960431_c8fPd3HansYvrSJ4fJxZqp9OhjQmYoll.jpg")] bg-cover bg-center'>
        <div className="container mx-auto px-6 py-12">
          <div className="flex flex-col lg:flex-row items-start gap-12">
            <div className="lg:w-1/2">
              <h1 className="text-3xl lg:text-4xl font-bold text-white mb-6">Contact Us</h1>
              <p className="text-white mb-6">
                - Your dreams are within reach, with the help of Moonrise Loan.
              </p>
              <Link to="/services" className="inline-flex items-center text-green-600 text-sm font-medium hover:text-green-800">
                View All Program Loans
                <svg className="ml-2 w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Info Cards */}
      <div className="container mx-auto px-4 py-6 grid md:grid-cols-2 gap-4">
        <div className="bg-green-50 p-6 rounded-lg border border-green-100">
          <h3 className="font-bold mb-4">Contact</h3>
          <div className="border-t border-gray-200 my-2" />
          <div className="space-y-3">
            {[...Array(3)].map((_, i) => (
              <div className="flex items-center gap-2" key={i}>
                <Phone size={18} className="text-green-700" />
                <span className="text-gray-600">+1 (888) 588-9239</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-green-50 p-6 rounded-lg border border-green-100">
          <h3 className="font-bold mb-4">E-mail</h3>
          <div className="border-t border-gray-200 my-2" />
          <div className="space-y-3">
            {[...Array(3)].map((_, i) => (
              <div className="flex items-center gap-2" key={i}>
                <Mail size={18} className="text-green-700" />
                <span className="text-gray-600">pulsecashus@gmail.com</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="container mx-auto px-4 py-6">
        <h2 className="text-xl font-bold mb-6">Contact with us for your any help -</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
              <input
                name="firstName"
                type="text"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
              <input
                name="lastName"
                type="text"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
              <input
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md" required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">State</label>
              <select
                name="state"
                value={formData.state}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md bg-white" required
              >
                <option>Select State</option>
                <option>Alabama</option>
                <option>Alaska</option>
                <option>Arizona</option>
                <option>Arkansas</option>
                <option>California</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md h-32"
              placeholder="Message" required
            ></textarea>
          </div>

          <div>
            {/* <button
              type="submit"
              className="bg-gray-900 text-white px-6 py-2 rounded-md hover:bg-green-800"
            >
              Submit
            </button> */}
              <div className="flex justify-start">
        <button 
          type="submit" 
          className="bg-green-900 text-white px-6 py-3 rounded-md hover:bg-green-800 disabled:bg-gray-400"
          disabled={loading}
        >
          {loading ? 'Submitting...' : 'Submit'}
        </button>
      </div>
          </div>
        </form>
      </div>
    </div>
  );
}