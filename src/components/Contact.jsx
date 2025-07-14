// File: Contact.jsx | Student: Marianna McCue | StudentID: 301481506 | Date: May 2025
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/main.css' // ensure your CSS file is imported

export default function Contact() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    contactNumber: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
  e.preventDefault();

  const token = JSON.parse(sessionStorage.getItem('jwt'))?.token;

  try {
    const response = await fetch('http://localhost:3000/api/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(formData)
    });

    const result = await response.json();
    if (result.error) {
      alert('Error: ' + result.error);
    } else {
      alert('Message sent!');
      setFormData({
        firstName: '',
        lastName: '',
        contactNumber: '',
        email: '',
        message: ''
      });
      navigate('/');
    }
  } catch (err) {
    console.error('Submission error:', err);
    alert('Failed to submit contact form.');
  }
};


  return (
    <div className="contact-container"> {/* main container */}
      {/* Contact Info Box */}
      <div className="contact-info-box">
        <h2 className="contact-header">Contact Information</h2>
        <p><strong>Name:</strong> Marianna McCue</p>
        <p><strong>Email:</strong> mmccue2@my.centennialcollege.ca</p>
        <p><strong>Phone:</strong> 519-835-3278</p>
      </div>

      {/* Send Message Form Box */}
      <div className="contact-form-box">
        <h2 className="contact-header">Message Me</h2>
        <form onSubmit={handleSubmit} className="contact-form">
          {/* Name input */}
          <div className="form-group">
            <label>Full Name</label>
            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
          </div>
          
          {/* Contact Number input */}
          <div className="form-group">
            <label>Contact Number</label>
            <input type="tel" name="contactNumber" value={formData.contactNumber} onChange={handleChange} required />
          </div>
          
          {/* Email input */}
          <div className="form-group">
            <label>Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          
          {/* Message textarea */}
          <div className="form-group">
            <label>Message</label>
            <textarea name="message" value={formData.message} onChange={handleChange} rows={4} required />
          </div>
          
          {/* Submit button */}
          <button type="submit" className="btn">Send Message</button>
        </form>
      </div>
    </div>
  )
}