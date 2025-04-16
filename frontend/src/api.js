import axios from 'axios';

// Base URL for API requests
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:7000/api';

// Create an axios instance with base config
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor for authentication if needed
api.interceptors.request.use(
  (config) => {
    // Get token from localStorage if you implement authentication later
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor for error handling
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Handle common errors here
    console.error('API Error:', error);
    
    // If you implement auth later, handle 401 unauthorized
    if (error.response && error.response.status === 401) {
      // Handle unauthorized access - log out user, redirect, etc.
      localStorage.removeItem('token');
      // Redirect to login if you have auth
    }
    
    return Promise.reject(error);
  }
);

export default api;