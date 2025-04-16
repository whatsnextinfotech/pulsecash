import { useState, useEffect } from 'react';
import { Phone, Mail, Download, Trash2, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import axios from 'axios';

// Get base API URL from .env file
const apiUrl = import.meta.env.VITE_API_URL;

export default function ContactDisplay() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await axios.get(`${apiUrl}/api/contacts`);
        setContacts(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching contacts:", err);
        setError("Failed to load contacts. Please try again later.");
        setLoading(false);
      }
    };

    fetchContacts();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this contact?")) {
      try {
        await axios.delete(`${apiUrl}/api/contacts/${id}`);
        // Remove the deleted contact from state
        setContacts(contacts.filter(contact => contact._id !== id));
      } catch (err) {
        console.error("Error deleting contact:", err);
        alert("Failed to delete contact. Please try again.");
      }
    }
  };

  const downloadCSV = () => {
    // Filter contacts if there's a search term
    const filteredContacts = searchTerm 
      ? contacts.filter(contact => 
          `${contact.firstName} ${contact.lastName}`.toLowerCase().includes(searchTerm.toLowerCase()) ||
          contact.phone.includes(searchTerm) ||
          contact.state.toLowerCase().includes(searchTerm.toLowerCase()) ||
          contact.message.toLowerCase().includes(searchTerm.toLowerCase())
        )
      : contacts;
    
    // Create CSV headers
    const headers = ['First Name', 'Last Name', 'Phone', 'State', 'Message', 'Submitted On'];
    
    // Map contacts to CSV rows
    const csvData = filteredContacts.map(contact => [
      contact.firstName,
      contact.lastName,
      contact.phone,
      contact.state,
      contact.message.replace(/,/g, ' ').replace(/\n/g, ' '), // Remove commas and line breaks from message
      new Date(contact.createdAt).toLocaleString()
    ]);
    
    // Add headers to the beginning of the data array
    csvData.unshift(headers);
    
    // Convert array to CSV string
    const csvString = csvData.map(row => row.join(',')).join('\n');
    
    // Create a Blob and download link
    const blob = new Blob([csvString], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', 'contacts.csv');
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const filteredContacts = searchTerm 
    ? contacts.filter(contact => 
        `${contact.firstName} ${contact.lastName}`.toLowerCase().includes(searchTerm.toLowerCase()) ||
        contact.phone.includes(searchTerm) ||
        contact.state.toLowerCase().includes(searchTerm.toLowerCase()) ||
        contact.message.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : contacts;

  if (loading) {
    return (
      <div className="bg-slate-50 min-h-screen flex justify-center items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-700"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-slate-50 min-h-screen p-6">
        <div className="container mx-auto">
          <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-lg">
            <p>{error}</p>
            <button 
              onClick={() => window.location.reload()}
              className="mt-2 bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen p-6">
      <div className="container mx-auto">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          {/* Header */}
          <div className="p-6 border-b border-gray-200">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
              <h2 className="text-xl font-bold">Contact Submissions</h2>
              <div className="flex flex-col sm:flex-row gap-3">
                        <Link to="/"  className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded shadow flex items-center"> Apply Form Data</Link>
               
                <button
                  onClick={downloadCSV}
                  className="flex items-center justify-center gap-2 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
                >
                  <Download size={18} />
                  <span>Download CSV</span>
                </button>
              </div>
            </div>
          </div>

          {/* Table */}
          {contacts.length === 0 ? (
            <div className="p-6 text-center">
              <p className="text-gray-500">No contact submissions found.</p>
              <Link to="/contact" className="inline-block mt-4 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">
                Go to Contact Page
              </Link>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      <div className="flex items-center gap-1">
                        <Phone size={14} className="text-gray-400" />
                        <span>Phone</span>
                      </div>
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      <div className="flex items-center gap-1">
                        <Mail size={14} className="text-gray-400" />
                        <span>State</span>
                      </div>
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Message</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Submitted On</th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredContacts.map((contact) => (
                    <tr key={contact._id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="font-medium text-gray-900">{contact.firstName} {contact.lastName}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-gray-600">{contact.phone}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-gray-600">{contact.state}</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-gray-600 truncate max-w-xs">{contact.message}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-gray-600 text-sm">
                          {new Date(contact.createdAt).toLocaleDateString()} {new Date(contact.createdAt).toLocaleTimeString()}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right">
                        <button 
                          onClick={() => handleDelete(contact._id)}
                          className="inline-flex items-center justify-center gap-1 text-red-600 hover:text-red-800"
                        >
                          <Trash2 size={16} />
                          <span>Delete</span>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          
          {/* Table Footer with Pagination (placeholder for future enhancement) */}
          <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-500">
                Showing <span className="font-medium">{filteredContacts.length}</span> of <span className="font-medium">{contacts.length}</span> contacts
              </div>
              {/* Pagination can be added here in the future */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}