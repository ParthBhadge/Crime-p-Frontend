import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Web4 from './components/web4.jsx';
import About from './components/about.jsx';
import Contact from './components/contact.jsx'; 
import Admin from './components/admin.jsx';
import Community from './components/community.jsx';
//hell
import CrimePrevention from './components/CrimePrevention.jsx';
import Emergency from './components/Emergency.jsx';
import Login from './components/Login.jsx';
import New from './components/New.jsx';
import Profile from './components/Profile.jsx';
import Safety from './components/Safety.jsx';
import Signup from './components/Signup.jsx';
// import Status from './components/Status.jsx';
import ThankYou from './components/Thankyou.jsx';
import Type from './components/Type.jsx';
import Welcome from './components/Welcome.jsx';
import Form from './components/Form.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';


function App() {


  return (
    <Router>
      <Routes>
      <Route path="/form" element={<ProtectedRoute><Form /></ProtectedRoute>} />
        <Route path="/web4" element={<Web4 />} />
        <Route path="/" element={<Welcome />} />
        <Route path="/type" element={<ProtectedRoute><Type /></ProtectedRoute>} />
        <Route path="/thankyou" element={<ThankYou />} />
        {/* <Route path="/status" element={<Status />} /> */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/safety" element={<Safety />} /> 
        
        <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
        <Route path="/new" element={<New />} />
        <Route path="/login" element={<Login />} />
        <Route path="/emergency" element={<Emergency />} />
        <Route path="/crime-prevention" element={<CrimePrevention />} />

        <Route path="/community" element={<Community />} />
        <Route path="/admin" element={<Admin />} />
   
        <Route path="/contact" element={<Contact />} />
        <Route path="/home" element={<Web4 />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App
