import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../assets/styles/type.css'; // Import the CSS file

const Type = () => {
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
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/contact">Contact</Link></li>
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
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <div className='space-2'></div>
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4">
              Injustice Anywhere, Is A Threat To Justice Everywhere.
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Select Your Appropriate Options Given Below and Kindly Register Your Form Carefully. It Is NOT EDITABLE After Submission.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            {/* Crime Categories */}
            {[
              {
                title: 'Violent Crimes',
                description: 'Includes assault, homicide, rape, robbery, extortion, and terrorism.',
              },
              {
                title: 'Property Crimes',
                description: 'Includes burglary, larceny, motor vehicle theft, and arson.',
              },
              {
                title: 'White-Collar Crimes',
                description: 'Includes fraudulent financial activities and embezzlement.',
              },
              {
                title: 'Organized Crimes',
                description: 'Includes illegal distribution of goods, gambling, prostitution, and money laundering.',
              },
              {
                title: 'Cyber Crimes',
                description: 'Includes identity theft, phishing scams, and online fraud.',
              },
              {
                title: 'Hate Crimes',
                description: 'Crimes motivated by prejudice or bias against a particular group of people.',
              },
            ].map((crime, index) => (
              <div key={index} className="xl:w-1/3 lg:w-1/2 md:w-full p-4 card">
                <div className="p-6 rounded-lg h-full">
                  <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">{crime.title}</h2>
                  <p className="leading-relaxed text-base mb-4">{crime.description}</p>
                  <Link to="/form" className="fill-it-button inline-flex items-center px-4 py-2 rounded-lg">
                    Fill It!
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

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

export default Type;