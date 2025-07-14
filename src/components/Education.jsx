import React, { useState } from 'react';
import '../styles/main.css';

export default function Education() {
  const [formData, setFormData] = useState({
    school: '',
    degree: '',
    year: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = JSON.parse(sessionStorage.getItem('jwt'))?.token;

    try {
      const response = await fetch('http://localhost:3000/api/education', {
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
        alert('Education added!');
        setFormData({ school: '', degree: '', year: '' });
      }
    } catch (err) {
      console.error('Submission error:', err);
      alert('Failed to submit education info.');
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-form-box">
        <h2 className="contact-header">Add Education</h2>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label>School</label>
            <input
              type="text"
              name="school"
              value={formData.school}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Degree / Program</label>
            <input
              type="text"
              name="degree"
              value={formData.degree}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Graduation Year</label>
            <input
              type="text"
              name="year"
              value={formData.year}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn">Submit</button>
        </form>
      </div>
    </div>
  );
}