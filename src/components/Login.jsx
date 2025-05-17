import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from 'jwt-decode'; // To decode the Google token
import '../assets/styles/login.css';
import { Link } from 'react-router-dom';
const BASE_URL = import.meta.env.VITE_API_BASE_URL;
const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false); // Toggle between login and OTP form
  const [showPassword, setShowPassword] = useState(false); // <-- Add this line
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${BASE_URL}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: formData.email, password: formData.password }),
      });

      const result = await response.json();
      if (response.status === 200) {
        // Login successful
        alert('Login successful.');
        localStorage.setItem('token', result.token);
        navigate('/home'); // Redirect to home page
      } else if (response.status === 403 && result.error === 'Please verify your email before logging in.') {
        // Redirect to OTP verification form
        alert(result.error);
        setOtpSent(true);
         await handleResendOtp(); // Show OTP form
      } else {
        // Handle other errors
        alert(result.error || 'Login failed.');
      }
    } catch (error) {
      console.error('Error during login:', error);
      alert('Failed to log in. Please try again.');
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
        setOtpSent(false); // Reset OTP form state
        navigate('/login'); // Redirect to login page after successful verification
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
        body: JSON.stringify({ email: formData.email }),
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

  const handleGoogleLoginSuccess = (credentialResponse) => {
    const decoded = jwt_decode(credentialResponse.credential);
    console.log('Google User:', decoded);

    // Send the Google token to the backend for verification
    fetch(`${BASE_URL}/api/auth/google-login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token: credentialResponse.credential }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.token) {
          localStorage.setItem('token', data.token);
          alert('Google Login successful');
          navigate('/profile');
        } else {
          alert('Google Login failed Go and Signup ');
        }
      })
      .catch((error) => {
        console.error('Error with Google Login:', error);
        alert('An error occurred with Google Login. Please try again later.');
      });
  };

  return (
    <div className="login-container">
      <div id='cpl' >
      <Link to="/" id='cpltxt' className="logo2">Crime Portal</Link>
      </div>
      <h2>Login</h2>
      {!otpSent ? (
        <form onSubmit={handleLogin}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <button
              type="button"
              style={{
                marginLeft: '6px',
                padding: '2px 6px',
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
          <button type="submit">Login</button>
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
          <button type="button" onClick={handleResendOtp}>Send OTP</button>
        </form>
      )}

      <div className="google-login">
        <GoogleLogin
          onSuccess={handleGoogleLoginSuccess}
          onError={() => {
            alert('Google Login failed');
          }}
        />
      </div>

      <p>
        Don't have an account? 
      </p>
        <Link to="/signup" className="btn btn-secondary">Signup</Link>
    </div>
  );
};

export default Login;
