import React, { useState } from 'react';
import './ContactUs.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateEmail = (email) => {
    
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    
    // Validate name field
    if (!formData.name.match(/^[A-Za-z]+$/)) {
      setErrors({ ...errors, name: 'Name must contain only alphabets' });
      return;
    }

    // Validate email field
    if (!validateEmail(formData.email)) {
      setErrors({ ...errors, email: 'Invalid email format' });
      return;
    }

   
    setErrors({ name: '', email: '' });
  };

  return (
    <div className="container">
      <h1 className="heading">Contact Us</h1>
      <form onSubmit={handleFormSubmit}className="form">
        <div>
          <label className="label">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="input"
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>
        <div>
          <label className="label">Email:</label>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="input"
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <div>
          <label>Phone:</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Message:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
          />
        </div>
        <button
          type="submit"
          className="button"
          onMouseOver={(e) => e.target.style.backgroundColor = getComputedStyle(e.target).getPropertyValue('--hover-bg')}
          onMouseOut={(e) => e.target.style.backgroundColor = getComputedStyle(e.target).getPropertyValue('--default-bg')}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactUs;