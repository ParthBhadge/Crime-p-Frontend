import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../assets/styles/form.css';
const BASE_URL = import.meta.env.VITE_API_BASE_URL;
const Form = () => {
  const navigate = useNavigate(); // Initialize useNavigate
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

  // State for form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    address: '',
    complaintType: '',
    gender: '',
    state: '',
    complaint: '',
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form Data:', formData); // Log the form data for debugging

    try {
      const token = localStorage.getItem('token'); // Retrieve the token from localStorage
      const response = await fetch(`${BASE_URL}/api/complaints`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`, // Include the token in the Authorization header
        },
        body: JSON.stringify(formData),
      });

      console.log('Response Status:', response.status); // Log the response status
      console.log('Response Headers:', response.headers); // Log the response headers

      // Check if the response has a body
      if (!response.ok) {
        const errorText = await response.text(); // Read the response as text
        throw new Error(errorText || 'An error occurred while submitting the complaint.');
      }

      const result = await response.json();
      console.log('Response Data:', result); // Log the response data

      if (response.ok) {
        alert('Complaint submitted successfully'); // Show success message
        navigate('/profile'); // Redirect to profile page
      } else {
        alert(result.error || 'Failed to submit complaint.'); // Show error message
      }
    } catch (error) {
      console.error('Error submitting complaint:', error);
      alert('An error occurred while submitting the complaint. Please try again later.');
    }
  };

  return (
    <div className="App">
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

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Complaint Form</h1>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">Please fill out the form carefully to register your complaint. Your feedback is important to us.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                />
              </div>

              {/* Mobile */}
              <div>
                <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Mobile Number</label>
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                />
              </div>

              {/* Address */}
              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Address</label>
                <textarea
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all h-20 resize-none"
                ></textarea>
              </div>

              {/* Complaint Type */}
              <div>
                <label htmlFor="complaintType" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Complaint Type</label>
                <select
                  id="complaintType"
                  name="complaintType"
                  value={formData.complaintType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                >
                  <option value="">Select Complaint Type</option>
                  <option value="Theft">Theft</option>
                  <option value="Assault">Assault</option>
                  <option value="Fraud">Fraud</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Gender */}
              <div>
                <label htmlFor="gender" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Gender</label>
                <select
                  id="gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* State */}
              <div>
                <label htmlFor="state" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">State</label>
                <input
                  type="text"
                  id="state"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                />
              </div>

              {/* Complaint */}
              <div>
                <label htmlFor="complaint" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Complaint</label>
                <textarea
                  id="complaint"
                  name="complaint"
                  value={formData.complaint}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all h-32 resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="flex justify-center space-x-4">
                <button
                  type="submit"
                  className="gradient-bg text-white px-8 py-2 rounded-lg hover-scale focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                >
                  Submit
                </button>
                <button
                  type="reset"
                  className="bg-red-500 text-white px-8 py-2 rounded-lg hover-scale focus:outline-none focus:ring-2 focus:ring-red-500 transition-all"
                  onClick={() =>
                    setFormData({
                      name: '',
                      email: '',
                      mobile: '',
                      address: '',
                      complaintType: '',
                      gender: '',
                      state: '',
                      complaint: '',
                    })
                  }
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <footer className="gradient-bg mt-16">
        <div className="container mx-auto px-4 py-6 text-center">
          <p className="text-white">&copy; 2025 Crime Portal. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Form;