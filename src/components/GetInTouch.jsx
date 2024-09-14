import React, { useState } from 'react';
import './GetInTouch.css';

const GetInTouch = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form data:', formData);
  };

  return (
    <section id="get-in-touch">
      <h2>Get in Touch With Me</h2>
      <div className="get-in-touch-container">
        <div className="contact-details">
          <p>Terry Koek</p>
          <p>terrykoekkaijun@gmail.com</p>
          <p>+65 98286195</p>
          <p>Singapore</p>
            <a href="https://www.linkedin.com/in/terrykoek/" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://github.com/Terrykoek" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fa-brands fa-github"></i>
            </a>
        </div>

        <div className="contact-form">
          <h3>Submit Your Details</h3>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <label htmlFor="contact">Contact Number</label>
            <input
              type="text"
              id="contact"
              name="contact"
              placeholder="Enter your contact number"
              value={formData.contact}
              onChange={handleChange}
              required
            />
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Enter your message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
