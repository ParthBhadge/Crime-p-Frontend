import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../assets/styles/about.css'; // Import the CSS file

import Parth from '../assets/Parth3.jpg'; // Import the image for Parth

const About = () => {
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
          <div className="about-section">
            <h1>About Us</h1>
            <p>
              Welcome to the Crime Portal, a platform dedicated to enhancing community safety and awareness.
              Our mission is to provide a secure and user-friendly way to report crimes, track their status,
              and access valuable resources for crime prevention. We are committed to making our communities
              safer and more connected.
            </p>
            <div className="creators-grid">
              {/* Creator 4: Parth */}
              <div className="creator-card">
                <img className="imgt" src={Parth} alt="Parth" />
                👨‍💻 About Me
                <div></div>
                I’m Parth Bhadge, a passionate Full-Stack Developer who recently graduated with a Bachelor of Technology (B.Tech) in Computer Science from Vellore Institute of Technology, Bhopal (Class of 2025). I specialize in building scalable, user-friendly web applications using modern technologies like the MERN stack, FastAPI, PostgreSQL, and more.
                <br />
                This Crime Reporting Portal is a project I developed to streamline how users can securely report incidents and how admins can track and manage those reports effectively. My goal is to use technology to create meaningful impact through intuitive and robust digital solutions.
                <h3>Parth</h3>
                <p>Developer</p>
              </div>
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

export default About;