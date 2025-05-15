import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/crimeprevention.css'; // Import the CSS file

const CrimePrevention = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const toggleTheme = () => {
    const body = document.body;
    body.classList.toggle('dark-theme');

    // Save theme preference in localStorage
    const isDarkTheme = body.classList.contains('dark-theme');
    localStorage.setItem('dark-theme', isDarkTheme);
  };

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
        <nav className="crimeprevention-nav">
          <Link to="/" className="logo2">Crime Portal</Link>
          <button className="hamburger-menu" onClick={toggleNavbar}>
            ☰
          </button>
          <ul className={`nav-links ${isNavbarOpen ? 'open' : ''}`}>
            <li><Link to="/home" className="nav-link">Home</Link></li>
            <li><Link to="/contact" className="nav-link">Contact</Link></li>
            <li>
              <button className="theme-toggle" onClick={toggleTheme}>🌓</button>
            </li>
            <li>
              <div className="profile-icon">👤</div>
            </li>
          </ul>
        </nav>
      </header>
      <br /><br /><br />

      {/* Main Content */}
      <div className="container">
        {/* Section 1: General Tips */}
        <div className="section">
          <h2>General Crime Prevention Tips</h2>
          <ul>
            <li><strong>Be Aware:</strong> Always stay alert and aware of your surroundings.</li>
            <li><strong>Secure Your Home:</strong> Install strong locks, alarms, and security cameras.</li>
            <li><strong>Travel Safely:</strong> Avoid walking alone at night and use well-lit routes.</li>
            <li><strong>Report Suspicious Activity:</strong> Contact local authorities if you notice anything unusual.</li>
            <li><strong>Community Involvement:</strong> Join or start a neighborhood watch program.</li>
          </ul>
        </div>

        {/* Section 2: Personal Safety */}
        <div className="section">
          <h2>Personal Safety Strategies</h2>
          <ul>
            <li><strong>Self-Defense:</strong> Learn basic self-defense techniques to protect yourself.</li>
            <li><strong>Emergency Contacts:</strong> Keep a list of emergency contacts handy.</li>
            <li><strong>Stay Connected:</strong> Inform friends or family about your whereabouts.</li>
            <li><strong>Avoid Risky Areas:</strong> Stay away from high-crime areas, especially at night.</li>
            <li><strong>Use Technology:</strong> Use safety apps to share your location with trusted contacts.</li>
          </ul>
        </div>

        {/* Section 3: Community Safety */}
        <div className="section">
          <h2>Community Safety Initiatives</h2>
          <ul>
            <li><strong>Neighborhood Watch:</strong> Collaborate with neighbors to monitor and report suspicious activities.</li>
            <li><strong>Public Awareness Campaigns:</strong> Educate the community about crime prevention.</li>
            <li><strong>Lighting Improvements:</strong> Advocate for better street lighting in your area.</li>
            <li><strong>Youth Programs:</strong> Support programs that engage young people in positive activities.</li>
            <li><strong>Police Partnerships:</strong> Work closely with local law enforcement to address safety concerns.</li>
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

export default CrimePrevention;