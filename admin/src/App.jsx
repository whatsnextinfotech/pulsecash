
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Admin';

import './App.css';
import ContactDisplay from './pages/contactUsdata';


function App() {
  return (
    <Router>
      <div className="app-container">
        <header className="app-header">
         {/* <Header/> */}
        </header>
        
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/contactinfo" element={<ContactDisplay />} />
       
          </Routes>
        </main>
        
        {/* <footer className="app-footer">
          <p>&copy; 2025 Loan Management System</p>
        </footer> */}
      </div>
    </Router>
  );
}

export default App;