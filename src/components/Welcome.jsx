import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../assets/styles/welcome.css'; // Import the CSS file

const Welcome = () => {
  return (
    <div className="home-container">
      <h1>Welcome to the Crime Portal</h1>
      <p>Your Safety, Our Priority</p>
      <div className="button-group">
        <Link to="/home" className="btn">Home</Link> {/* Home button */}
        <Link to="/login" className="btn">Login</Link>
        <Link to="/signup" className="btn btn-secondary">Signup</Link>
      </div>
    </div>
  );
};

export default Welcome;