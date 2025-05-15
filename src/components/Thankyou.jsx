import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/thankyou.css'; // Import the CSS file

const ThankYou = () => {
  return (
    <div className="thank-you-container">
      <Link to="/home" className="logo2">Crime Portal</Link>
      <div className="thank-you-box">
        <h1>Thank You!</h1>
        <div className="checkmark">✓</div>
        <p>
          Thanks a bunch for filling that out. It means a lot to us, just like you do! We really appreciate you giving us a moment of your time today. Thanks for being you.
        </p>
        <div className="smile-emoji">😊</div>
      </div>
    </div>
  );
};

export default ThankYou;