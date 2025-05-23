import React, { useState, useEffect } from 'react';
import '../assets/styles/signup.css'; // Import the CSS file
import { Link, useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from 'jwt-decode';
const BASE_URL = import.meta.env.VITE_API_BASE_URL;
const Signup = () => {
  const [captcha, setCaptcha] = useState('');
  const [userInput, setUserInput] = useState('');
  const [password, setPassword] = useState('');
  const [showPasswordRequirements, setShowPasswordRequirements] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  // Function to generate a random captcha
  const generateCaptcha = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let newCaptcha = '';
    for (let i = 0; i < 6; i++) {
      newCaptcha += chars[Math.floor(Math.random() * chars.length)];
    }
    setCaptcha(newCaptcha);
  };

  // Function to validate captcha
  const validateCaptcha = () => {
    return userInput === captcha;
  };

  // Function to validate password
  const validatePassword = (password) => {
    // No requirements, always return true
    return true;
  };

  // Function to clear the form
  const clearForm = (e) => {
    e.preventDefault();
    setFormData({ name: '', email: '', password: '' });
    setPassword('');
    setUserInput('');
  };

  // Generate captcha on component mount
  useEffect(() => {
    generateCaptcha();
  }, []);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      navigate('/home'); // Redirect to home if already logged in
    }
  }, [navigate]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validatePassword(password)) {
      alert('Password does not meet requirements.');
      return;
    }

    if (!validateCaptcha()) {
      alert('Captcha does not match. Please try again.');
      generateCaptcha();
      setUserInput('');
      return;
    }

    try {
      const response = await fetch(`${BASE_URL}/api/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        alert(
          `${result.message || 'Signup successful!'} Please check your email inbox or spam folder for the verification email.`
        );
        setOtpSent(true); // Show OTP input

        // Send OTP after successful signup
        await handleResendOtp();
      } else {
        alert('Error: ' + (result.error || 'Unknown error occurred.'));
      }
    } catch (error) {
      console.error('Error signing up:', error);
      alert('Failed to sign up. Please try again.');
    }
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${BASE_URL}/api/auth/verify-otp`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: formData.email, otp }),
      });

      const result = await response.json();
      if (response.ok) {
        alert(result.message || 'Email verified successfully!');
        navigate('/login');
      } else {
        alert('Error: ' + (result.error || 'Invalid OTP.'));
      }
    } catch (error) {
      console.error('Error verifying OTP:', error);
      alert('Failed to verify OTP. Please try again.');
    }
  };


  const handleResendOtp = async () => {
    try {
      const response = await fetch(`${BASE_URL}/api/auth/resend-otp`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: formData.email }), // Ensure `formData.email` is valid
      });

      const result = await response.json();
      if (response.ok) {
        alert(result.message || 'OTP resent successfully!');
      } else {
        alert('Error: ' + (result.error || 'Failed to resend OTP.'));
      }
    } catch (error) {
      console.error('Error resending OTP:', error);
      alert('Failed to resend OTP. Please try again.');
    }
  };

  return (
    <div className="signup-container">
      <div id='cpl' >
      <Link to="/" id='cpltxt' className="logo2">Crime Portal</Link>
      </div>
      <h2>Signup</h2>
      {!otpSent ? (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Username"
            value={formData.name}
            onChange={handleChange}
            required
            onFocus={() => setShowPasswordRequirements(false)}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            onFocus={() => setShowPasswordRequirements(false)}
          />
          <input
            type="tel"
            placeholder="Phone Number"
            onInput={(e) => (e.target.value = e.target.value.replace(/[^0-9]/g, ''))}
            required
            onFocus={() => setShowPasswordRequirements(false)}
          />
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={(e) => {
                setPassword(e.target.value);
                handleChange(e);
              }}
              onFocus={() => setShowPasswordRequirements(true)}
              required
            />
            <button
              type="button"
              style={{
                marginLeft: '6px',
                padding: '2px 4px', // Reduced width
                minWidth: '32px',   // Ensures it's small but clickable
                fontSize: '1.1em',
                background: 'none',
                border: 'none',
                cursor: 'pointer'
              }}
              aria-label={showPassword ? "Hide password" : "Show password"}
              onClick={() => setShowPassword((prev) => !prev)}
              tabIndex={-1}
            >
              {showPassword ? "🙈" : "👁️"}
            </button>
          </div>
          <div className="captcha-container">
            <input
              type="text"
              placeholder="Enter Captcha"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              required
            />
            <div
              className="captcha-code"
              onClick={generateCaptcha}
              title="Click to refresh captcha"
            >
              {captcha}
            </div>
          </div>
          <button  type="submit">Signup</button>
          <button className="cancel" onClick={clearForm}>
            Cancel
          </button>
        </form>
      ) : (
        <form onSubmit={handleVerifyOtp}>
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            required
          />
          <button type="submit">Verify OTP</button>
          <button type="button" onClick={handleResendOtp}>Resend OTP</button>
        </form>
      )}

      <div className="google-signup">
        {/* <GoogleLogin
          onSuccess={handleGoogleSignupSuccess}
          onError={() => {
            alert('Google Signup failed');
          }} */}
        
      </div>
    </div>
  );
};

export default Signup;
