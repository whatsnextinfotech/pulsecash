import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
const apiUrl = import.meta.env.VITE_API_URL;

function Dashboard() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${apiUrl}/api/users`);
      setUsers(response.data);
      // Auto-select the first user if available
      if (response.data.length > 0) {
        fetchUserDetails(response.data[0]._id);
      } else {
        setLoading(false);
      }
    } catch (err) {
      setError('Failed to fetch users');
      setLoading(false);
    }
  };

  const fetchUserDetails = async (userId) => {
    setLoading(true);
    try {
      const response = await axios.get(`${apiUrl}/api/users/${userId}`);
      setSelectedUser(response.data);
    } catch (err) {
      setError('Failed to fetch user details');
    } finally {
      setLoading(false);
    }
  };

  const handleUserSelect = (userId) => {
    fetchUserDetails(userId);
  };

  const handleDelete = async (id, e) => {
    e.stopPropagation(); // Prevent triggering the row click
    if (window.confirm('Are you sure you want to delete this user?')) {
      try {
        await axios.delete(`${apiUrl}/api/users/${id}`);
        // If the deleted user is currently selected, clear the selection
        if (selectedUser && selectedUser._id === id) {
          setSelectedUser(null);
        }
        // Refresh the user list
        fetchUsers();
      } catch (err) {
        setError('Failed to delete user');
      }
    }
  };

  // Helper function to format SSN, account numbers, etc.
  const formatLastFour = (value) => {
    return value ? `XXXX-${value.slice(-4)}` : 'XXXX';
  };

  // Helper function to create CSV content
  const createCSV = (data) => {
    // CSV header row
    const headers = [
      'Full Name',
      'Email',
      'Contact Number',
      'Date of Birth',
      'SSN ',
      'Street Address',
      'City',
      'State',
      'Employment Type',
      'Employer Name',
      'Job Title',
      'Monthly Income',
      'Loan Purpose',
      'Loan Amount',
      'Account Number (Last 4)',
      'Routing Number (Last 4)',
      'Card Number (Last 4)',
      'Card Name',
      'Card Expiry',
      'Terms Accepted',
      'Created At',
      'User ID'
    ];

    // Convert header array to CSV string
    let csvContent = headers.join(',') + '\r\n';

    // Add data rows
    if (Array.isArray(data)) {
      // Multiple users
      data.forEach(user => {
        csvContent += userToCSVRow(user) + '\r\n';
      });
    } else {
      // Single user
      csvContent += userToCSVRow(data) + '\r\n';
    }

    return csvContent;
  };

  // Helper function to convert user data to CSV row
  const userToCSVRow = (user) => {
    // Format each value with proper CSV escaping
    const formatCSVValue = (value) => {
      if (!value && value !== 0) return '';
      
      // Convert to string
      const stringValue = String(value);
      
      // If value contains comma, quote, or newline, wrap it in quotes
      if (stringValue.includes(',') || stringValue.includes('"') || stringValue.includes('\n')) {
        // Replace double quotes with two double quotes
        return `"${stringValue.replace(/"/g, '""')}"`;
      }
      return stringValue;
    };

    // Row data
    const rowData = [
      formatCSVValue(`${user.firstName || ''} ${user.lastName || ''}`),
      formatCSVValue(user.email),
      formatCSVValue(user.contactNumber),
      formatCSVValue(user.dateOfBirth),
      formatCSVValue(user.socialSecurityNumber ? user.socialSecurityNumber.slice(-4) : 'XXXX'),
      formatCSVValue(user.address),
      formatCSVValue(user.city),
      formatCSVValue(user.state),
      formatCSVValue(user.employmentType),
      formatCSVValue(user.employerName),
      formatCSVValue(user.jobTitle || 'N/A'),
      formatCSVValue(user.monthlyIncome ? `$${user.monthlyIncome.toLocaleString()}` : 'N/A'),
      formatCSVValue(user.loanPurpose),
      formatCSVValue(`$${user.loanAmount.toLocaleString()}`),
      formatCSVValue(user.accountNumber ? user.accountNumber.slice(-4) : 'XXXX'),
      formatCSVValue(user.routingNumber ? user.routingNumber.slice(-4) : 'XXXX'),
      formatCSVValue(user.cardNumber ? user.cardNumber.slice(-4) : 'XXXX'),
      formatCSVValue(user.cardName),
      formatCSVValue(`${user.cardExpiryMonth || ''}/${user.cardExpiryYear || ''}`),
      formatCSVValue(user.termsAccepted ? 'Yes' : 'No'),
      formatCSVValue(user.createdAt ? new Date(user.createdAt).toLocaleString() : ''),
      formatCSVValue(user._id)
    ];

    return rowData.join(',');
  };

  const handleDownloadUser = () => {
    if (!selectedUser) return;
    
    const content = createCSV(selectedUser);
    const mimeType = 'text/csv';
    const fileExtension = 'csv';
    
    // Create a blob from the content
    const blob = new Blob([content], { type: `${mimeType};charset=utf-8` });
    
    // Create a URL for the blob
    const url = URL.createObjectURL(blob);
    
    // Create a download link
    const a = document.createElement('a');
    a.href = url;
    a.download = `user_${selectedUser.firstName}_${selectedUser.lastName}.${fileExtension}`;
    
    // Append to the DOM, click the link, then remove it
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    
    // Release the URL
    URL.revokeObjectURL(url);
  };
  
  const handleDownloadAllUsers = () => {
    if (users.length === 0) return;
    
    const content = createCSV(users);
    const mimeType = 'text/csv';
    const fileExtension = 'csv';
    
    // Create a blob from the content
    const blob = new Blob([content], { type: `${mimeType};charset=utf-8` });
    
    // Create a URL for the blob
    const url = URL.createObjectURL(blob);
    
    // Create a download link
    const a = document.createElement('a');
    a.href = url;
    a.download = `all_users.${fileExtension}`;
    
    // Append to the DOM, click the link, then remove it
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    
    // Release the URL
    URL.revokeObjectURL(url);
  };

  // Render user details section
  const renderUserDetails = () => {
    if (loading) {
      return <div className="p-6 text-center text-gray-500">Loading user details...</div>;
    }
    
    if (error) {
      return <div className="p-6 text-center text-red-500">{error}</div>;
    }
    
    if (!selectedUser) {
      return (
        <div className="p-6 text-center text-gray-500">
          <p>Select a user from the list to view details</p>
        </div>
      );
    }

    return (
      <div>
        <div className="bg-gray-50 py-4 px-6 border-b border-gray-200 flex justify-between items-center">
          <h3 className="text-lg font-medium text-gray-800">{selectedUser.firstName} {selectedUser.lastName}</h3>
          <div className="flex space-x-2">
            <button
              onClick={handleDownloadUser}
              className="bg-green-600 hover:bg-green-700 text-white text-sm font-medium py-1.5 px-3 rounded shadow-sm flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Export CSV
            </button>
          </div>
        </div>

        <div className="p-6 space-y-6">
          <section>
            <h4 className="text-base font-medium mb-3 text-gray-800 border-b border-gray-200 pb-2">Personal Information</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <div className="text-sm text-gray-500">Full Name</div>
                <div className="font-medium">{selectedUser.firstName} {selectedUser.lastName}</div>
              </div>
              <div>
                <div className="text-sm text-gray-500">Email</div>
                <div className="font-medium">{selectedUser.email}</div>
              </div>
              <div>
                <div className="text-sm text-gray-500">Contact Number</div>
                <div className="font-medium">{selectedUser.contactNumber}</div>
              </div>
              <div>
                <div className="text-sm text-gray-500">Date of Birth</div>
                <div className="font-medium">{selectedUser.dateOfBirth}</div>
              </div>
              <div>
                <div className="text-sm text-gray-500">SSN </div>
                <div className="font-medium">{selectedUser.socialSecurityNumber ? selectedUser.socialSecurityNumber.slice(-4) : 'XXXX'}</div>
              </div>
            </div>
          </section>

          <section>
            <h4 className="text-base font-medium mb-3 text-gray-800 border-b border-gray-200 pb-2">Address</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <div className="text-sm text-gray-500">Street Address</div>
                <div className="font-medium">{selectedUser.address}</div>
              </div>
              <div>
                <div className="text-sm text-gray-500">City</div>
                <div className="font-medium">{selectedUser.city}</div>
              </div>
              <div>
                <div className="text-sm text-gray-500">State</div>
                <div className="font-medium">{selectedUser.state}</div>
              </div>
            </div>
          </section>

          <section>
            <h4 className="text-base font-medium mb-3 text-gray-800 border-b border-gray-200 pb-2">Employment Information</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <div className="text-sm text-gray-500">Employment Type</div>
                <div className="font-medium">{selectedUser.employmentType}</div>
              </div>
              <div>
                <div className="text-sm text-gray-500">Employer Name</div>
                <div className="font-medium">{selectedUser.employerName}</div>
              </div>
              <div>
                <div className="text-sm text-gray-500">Job Title</div>
                <div className="font-medium">{selectedUser.jobTitle || 'N/A'}</div>
              </div>
              <div>
                <div className="text-sm text-gray-500">Monthly Income</div>
                <div className="font-medium">
                  {selectedUser.monthlyIncome ? `$${selectedUser.monthlyIncome.toLocaleString()}` : 'N/A'}
                </div>
              </div>
            </div>
          </section>

          <section>
            <h4 className="text-base font-medium mb-3 text-gray-800 border-b border-gray-200 pb-2">Loan Information</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <div className="text-sm text-gray-500">Loan Purpose</div>
                <div className="font-medium">{selectedUser.loanPurpose}</div>
              </div>
              <div>
                <div className="text-sm text-gray-500">Loan Amount</div>
                <div className="font-medium">${selectedUser.loanAmount.toLocaleString()}</div>
              </div>
              <div>
                <div className="text-sm text-gray-500">Account Number (Last 4)</div>
                <div className="font-medium">{selectedUser.accountNumber ? selectedUser.accountNumber.slice(-4) : 'XXXX'}</div>
              </div>
              <div>
                <div className="text-sm text-gray-500">Routing Number (Last 4)</div>
                <div className="font-medium">{selectedUser.routingNumber ? selectedUser.routingNumber.slice(-4) : 'XXXX'}</div>
              </div>
            </div>
          </section>

          <section>
            <h4 className="text-base font-medium mb-3 text-gray-800 border-b border-gray-200 pb-2">Payment Information</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <div className="text-sm text-gray-500">Card Number (Last 4)</div>
                <div className="font-medium">{selectedUser.cardNumber ? selectedUser.cardNumber.slice(-4) : 'XXXX'}</div>
              </div>
              <div>
                <div className="text-sm text-gray-500">Card Name</div>
                <div className="font-medium">{selectedUser.cardName}</div>
              </div>
              <div>
                <div className="text-sm text-gray-500">Expiry</div>
                <div className="font-medium">{selectedUser.cardExpiryMonth}/{selectedUser.cardExpiryYear}</div>
              </div>
            </div>
          </section>

          <section>
            <h4 className="text-base font-medium mb-3 text-gray-800 border-b border-gray-200 pb-2">Account Status</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <div className="text-sm text-gray-500">Terms Accepted</div>
                <div className="font-medium">{selectedUser.termsAccepted ? 'Yes' : 'No'}</div>
              </div>
              <div>
                <div className="text-sm text-gray-500">Created At</div>
                <div className="font-medium">{new Date(selectedUser.createdAt).toLocaleString()}</div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  };

  return (
    <div className="container mx-auto px-4 py-6">
      {/* <div className="mb-6">
        <Link to="/" className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded shadow">
          Back to Home
        </Link>
      </div> */}
      
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Loan Management Dashboard</h2> 
        <div className='flex  gap-12'>
         <Link to="/contactinfo"  className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded shadow flex items-center"> Contact Us Data</Link>
        <button 
          onClick={handleDownloadAllUsers}
          className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded shadow flex items-center"
          disabled={users.length === 0}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Export All Users (CSV)
        </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1 bg-white rounded-lg shadow overflow-hidden">
          <div className="bg-gray-50 py-3 px-4 border-b border-gray-200">
            <h3 className="text-lg font-medium text-gray-800">Users</h3>
          </div>
          
          {users.length === 0 ? (
            <p className="p-4 text-gray-500">No users found.</p>
          ) : (
            <div className="divide-y divide-gray-200 max-h-screen overflow-y-auto">
              {users.map(user => (
                <div 
                  key={user._id} 
                  className={`p-4 cursor-pointer hover:bg-gray-50 transition-colors ${
                    selectedUser && selectedUser._id === user._id ? 'bg-blue-50' : ''
                  }`}
                  onClick={() => handleUserSelect(user._id)}
                >
                  <div className="flex justify-between items-start">
                    <div className="space-y-1">
                      <div className="font-medium text-gray-800">{user.firstName} {user.lastName}</div>
                      <div className="text-sm text-gray-500">{user.email}</div>
                      <div className="text-sm">
                        <span className="text-gray-600">Loan:</span> 
                        <span className="font-medium ml-1">${user.loanAmount.toLocaleString()}</span>
                      </div>
                    </div>
                    <div>
                      <button 
                        className="text-sm bg-red-100 hover:bg-red-200 text-red-700 px-2 py-1 rounded" 
                        onClick={(e) => handleDelete(user._id, e)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="lg:col-span-2 bg-white rounded-lg shadow overflow-hidden">
          {renderUserDetails()}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;