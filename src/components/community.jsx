import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../assets/styles/community.css'; // Import the CSS file

const Community = () => {
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
      <main>
        <div className="container">
          <div className='space'></div>
          <h1>Community Support</h1>
          <p>
            Join our community programs to enhance safety and awareness. Together, we can make a difference.
          </p>
          <div className="card">
            <h2>Community Program 1</h2>
            <p>Details about the first community program.</p>
            <button className="fill-it-button">Join Now</button>
          </div>
          <div className="card">
            <h2>Community Program 2</h2>
            <p>Details about the second community program.</p>
            <button className="fill-it-button">Join Now</button>
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

export default Community;