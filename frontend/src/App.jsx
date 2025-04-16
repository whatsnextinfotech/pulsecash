
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import UserForm from './pages/ApplyForm';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';

import About from './pages/About';

import Footer from './components/Footer';
import Service from './pages/service';
import PersonalLoan from './components/PersonalLoan';
import Contact from './pages/Contact';
import PerdayLoan from './components/PerdayLoan';

function App() {
  return (
    <Router>
      <div className="app-container">
        <header className="app-header">
       
         <Header/>
       
        </header>
        
        <main className="main-content">
          <Routes>
           
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Service />} />
            <Route path="/PersonalLoan" element={<PersonalLoan />} />
            <Route path="/PerdayLoan" element={<PerdayLoan />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/form" element={<UserForm />} />
            <Route path="/" element={<Home />} />
            {/* <Route path="/edit/:id" element={<UserForm />} /> */}
          </Routes>
        </main>
        
        <footer className="app-footer">
          <Footer/>
        </footer>
      </div>
    </Router>
  );
}

export default App;