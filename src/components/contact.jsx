import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../assets/styles/contact.css'; // Import the CSS file

import Parth from '../assets/Parth3.jpg'; 

const Contact = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false); // State for navbar toggle

  // Theme toggle function
  const toggleTheme = () => {
    const body = document.body;
    body.classList.toggle('dark-theme');

    // Save theme preference in localStorage
    const isDarkTheme = body.classList.contains('dark-theme');
    localStorage.setItem('dark-theme', isDarkTheme);
  };

  // Toggle navbar
  const toggleNavbar = () => {
    setIsNavbarOpen((prevState) => !prevState);
  };

  useEffect(() => {
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('dark-theme');
    if (savedTheme === 'true') {
      document.body.classList.add('dark-theme');
    }
  }, []);

  return (
    <div>
      {/* Navigation Bar */}
      <header className="gradient-bg shadow-lg">
        <nav>
          <div className="nav-header">
            <Link to="/" className="logo2">Crime Portal</Link>
            <button className="hamburger-menu" onClick={toggleNavbar}>
              ☰
            </button>
          </div>
          <ul className={`nav-links ${isNavbarOpen ? 'open' : ''}`}>
            <li><Link to="/home" className="nav-link">Home</Link></li>
            <li><Link to="/about" className="nav-link">About</Link></li>
            <li>
              <button className="theme-toggle" onClick={toggleTheme}>🌓</button>
            </li>
            <li>
              <Link to="/profile" className="profile-icon">👤</Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main>
        <div className="container">
          <div className="about-section">
            <h1>Contact Us</h1>
            <p>
              If you have any questions, concerns, or need assistance, feel free to reach out to us. We are here to help!
            </p>
            <div className="creators-grid">
              {/* Contact 1 */}
              <div className="creator-card">
                <img className="imgt" src={Parth} alt="Parth" />
                <h3>Support Team</h3>
                <p>Email: parthbhadge0@gmail.com</p>
                <p>Phone: 99***18**2</p>
              </div>
              {/* Contact 2 */}
             
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="gradient-bg shadow-lg">
        <div className="container">
          <p>&copy; 2025 Crime Portal. All rights reserved.</p>
          <ul>
            <li><Link to="/terms" className="nav-link">Terms of Service</Link></li>
            <li><Link to="/privacy" className="nav-link">Privacy Policy</Link></li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Contact;