import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../assets/styles/emergency.css'; // Import the CSS file

const Emergency = () => {
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
      <header>
        <nav>
          <div className="nav-header">
            <Link to="/" className="logo2">Crime Portal</Link>
            <button className="hamburger-menu" onClick={toggleNavbar}>
              ☰
            </button>
          </div>
          <ul className={`nav-links ${isNavbarOpen ? 'open' : ''}`}>
            <li><Link to="/home" className="nav-link">Home</Link></li>
            <li><Link to="/contact" className="nav-link">Contact</Link></li>
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
      <div className="container">
        {/* Emergency Contacts Section */}
        <div className="section">
          <div className='space'></div>
          <h2>Emergency Contacts</h2>
          <div className="emergency-contacts">
            <div className="contact-card">
              <h3>Police</h3>
              <p>📞 100</p>
            </div>
            <div className="contact-card">
              <h3>Ambulance</h3>
              <p>📞 102</p>
            </div>
            <div className="contact-card">
              <h3>Fire Brigade</h3>
              <p>📞 101</p>
            </div>
            <div className="contact-card">
              <h3>Women Helpline</h3>
              <p>📞 1091</p>
            </div>
            <div className="contact-card">
              <h3>Cyber Crime</h3>
              <p>📞 155620</p>
            </div>
            <div className="contact-card">
              <h3>Child Helpline</h3>
              <p>📞 1098</p>
            </div>
          </div>
        </div>

        {/* Crime Prevention Tips */}
        <div className="section">
          <h2>Crime Prevention Tips</h2>
          <ul>
            <li>Always be aware of your surroundings, especially in unfamiliar areas.</li>
            <li>Avoid walking alone at night; use well-lit and populated routes.</li>
            <li>Keep your valuables secure and out of sight in public places.</li>
            <li>Lock your doors and windows at home and in your vehicle.</li>
            <li>Report suspicious activities to local authorities immediately.</li>
          </ul>
        </div>
      </div>

      {/* Footer */}
      <footer>
        <p>&copy; 2025 Crime Portal. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Emergency;