import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../assets/styles/safety.css'; // Import the CSS file

const Safety = () => {
  // Theme toggle function
  const toggleTheme = () => {
    const body = document.body;
    body.classList.toggle('dark-theme');

    // Save theme preference in localStorage
    const isDarkTheme = body.classList.contains('dark-theme');
    localStorage.setItem('dark-theme', isDarkTheme);
  };

  useEffect(() => {
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('dark-theme');
    if (savedTheme === 'true') {
      document.body.classList.add('dark-theme');
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for contacting us! We will get back to you soon.');
  };

  return (
    <div>
      {/* Navigation Bar */}
      <header>
        <nav>
          <Link to="/" className="logo2">Crime Portal</Link>
          <ul>
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

      {/* Main Content */}
      <div className="container">
        {/* Crime Prevention Tips */}
        <div className="section">
          <div className='space'></div>
          <h2>Crime Prevention Tips</h2>
          <ul>
            <li>Always be aware of your surroundings, especially in unfamiliar areas.</li>
            <li>Avoid walking alone at night; use well-lit and populated routes.</li>
            <li>Keep your valuables secure and out of sight in public places.</li>
            <li>Lock your doors and windows at home and in your vehicle.</li>
            <li>Report suspicious activities to local authorities immediately.</li>
          </ul>
        </div>

        {/* Personal Safety Resources */}
        <div className="section">
          <h2>Personal Safety Resources</h2>
          <ul>
            <li><a href="https://doj.gov.in/helpline/crime-stopper/" target="_blank" rel="noopener noreferrer">Crime Stoppers INDIA</a> - Report crimes anonymously.</li>
            <li><a href="https://digitalpolice.gov.in/" target="_blank" rel="noopener noreferrer">Digital Indian Police</a> - Official Digital police website for safety advice.</li>
            <li><a href="https://www.ncrb.gov.in/" target="_blank" rel="noopener noreferrer">National Crime Records Bureau</a> - India's national law enforcement agency.</li>
            <li><a href="https://www.childlineindia.org/" target="_blank" rel="noopener noreferrer">Children Support</a> - Help for children victims of crime.</li>
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

export default Safety;