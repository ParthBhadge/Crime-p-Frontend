import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../assets/styles/web4.css'; // Import the CSS file

const Web4 = () => {
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

    // Enhanced Parallax Scrolling Effect
    const handleScroll = () => {
      const parallaxSections = document.querySelectorAll('.parallax');
      parallaxSections.forEach(section => {
        const scrollPosition = window.pageYOffset;
        const sectionTop = section.offsetTop;

        const parallaxOffset = (scrollPosition - sectionTop) * 0.5;
        section.style.backgroundPositionY = `${parallaxOffset}px`;
      });
    };

    document.addEventListener('scroll', handleScroll);
    return () => document.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='home-container23'>
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
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/type">Report Crime</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/about">About</Link></li>
            <li>
              <button className="theme-toggle" onClick={toggleTheme}>🌓</button>
            </li>
            <li>
              <Link to="/profile" className="profile-icon">👤</Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="hero" className="parallax">
        <div className="container parallax-content">
          <h1>Welcome to the Crime Portal</h1>
          <p>Your Safety, Our Priority</p>
          <Link to="/type" className="btn">Report a Crime</Link>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="container">
        <h2>Our Services</h2>
        <div className="service-container">
          <div className="service">
            <Link to="/type">
              <h3>Crime Reporting</h3>
              <p>Easily report crimes online with our secure and user-friendly form.</p>
            </Link>
          </div>
          <div className="service">
            <Link to="/profile">
              <h3>Status Tracking</h3>
              <p>Monitor the progress of your reported cases in real-time.</p>
            </Link>
          </div>
          <div className="service">
            <Link to="/safety">
              <h3>Safety Resources</h3>
              <p>Access valuable information and resources related to crime prevention and personal safety.</p>
            </Link>
          </div>
          <div className="service">
            <Link to="/crime-prevention">
              <h3>Crime Prevention</h3>
              <p>Learn effective strategies to prevent crimes in your community.</p>
            </Link>
          </div>
          <div className="service">
            <Link to="/emergency">
              <h3>Emergency Contacts</h3>
              <p>Find important emergency contact numbers for quick assistance.</p>
            </Link>
          </div>
          <div className="service">
            <Link to="/community">
              <h3>Community Support</h3>
              <p>Join community programs to enhance safety and awareness.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="container">
        <h2>Testimonials</h2>
        <div className="testimonial-container">
          <div className="testimonial">
            <p>"The Crime Portal made it so easy for me to report an incident. The staff was helpful and kept me updated throughout the process."</p>
            <p>- RISHI</p>
          </div>
          <div className="testimonial">
            <p>"I am grateful for the resources available on this portal. They have helped me feel more informed and empowered to protect myself and my family."</p>
            <p>- PARTH</p>
          </div>
          <div className="testimonial">
            <p>"The Crime Portal is a game-changer for community safety. It’s user-friendly and highly effective."</p>
            <p>- PRATIKSHA</p>
          </div>
          <div className="testimonial">
            <p>"I love how easy it is to track the status of my reported cases. Highly recommended!"</p>
            <p>- CHETNA</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="gradient-bg shadow-lg">
        <div className="container">
          <p>&copy; 2025 Crime Portal. All rights reserved.</p>
          <ul>
            <li><Link to="/terms">Terms of Service</Link></li>
            <li><Link to="/privacy">Privacy Policy</Link></li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Web4;