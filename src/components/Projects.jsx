// File: Projects.jsx | Student: Marianna McCue | StudentID: 301481506 | Date: May 2025
import LoonieSRS from '../assets/LoonieSRS.pdf';
import forkAndSpoon from '../assets/forkandspoon.png';
import loonie from '../assets/loonie.png';
import database from '../assets/database.png';
import React, { useState } from 'react';
import '../styles/main.css';

export default function Projects() {
  const [formData, setFormData] = useState({
    title: '',
    summary: '',
    date: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = JSON.parse(sessionStorage.getItem('jwt'))?.token;

    try {
      const response = await fetch('http://localhost:3000/api/projects', {
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
        alert('Project added!');
        setFormData({ name: '', summary: '', date: '' });
      }
    } catch (err) {
      console.error('Submission error:', err);
      alert('Failed to submit project.');
    }
  };

    return (
    <div className="projects-section">
        
        <h1>Projects</h1>
        <div className="projects-grid">
        {/* Project 1 */}
        <div className="project-box">
          <img src={loonie} alt="Loonie" className="project-image" />
          <h3>Project 1: Personal Financial Tracking App - SRS (Software Requirements Engineering Class, Semester 2)</h3>
          <p>As part of a group of three, I took on a leadership role to develop the SRS for a personal financial tracking application. 
            My responsibilities included coordinating with team members, gathering requirements, and ensuring clear documentation of the project's scope and features. 
            This project helped me strengthen my teamwork and documentation skills.</p>
          <a href={LoonieSRS} target="_blank" rel="noopener noreferrer">View the SRS Document</a>
        </div>

        {/* Project 2 */}
        <div className="project-box">
          <img src={forkAndSpoon} alt="Restaurant Fork and Spoon" className="project-image" />
          <h3>Project 2: Restaurant Website (Web Interface Class, Semester 2)</h3>
          <p>Developed a complete website for a fictional restaurant, including a menu page, contact form, and overall layout. 
            This individual project helped me practice front-end design, user experience, and basic webpage structuring, enhancing my understanding of web interface development. </p>
          <p>You can view the live site on GitHub <a href="https://ririality.github.io/mariannamccue/index2.html" target="_blank" rel="noopener noreferrer">here</a>.</p>
        </div>

        {/* Project 3 */}
        <div className="project-box">
          <img src={database} alt="ERD Diagram" className="project-image" />
          <h3>Project 3: Fish Store Database (Database Concepts Class, Semester 2)</h3>
          <p>In this group project, I took on a leadership role in designing and creating a full database for a fish store e-commerce system.
             This involved requirements gathering, developing an ER diagram, creating tables with proper relationships, and populating them with sample data using SQL Developer. 
             The project strengthened my understanding of database design, SQL commands, and systems development life cycle.</p>
        </div>
      </div>
      
      {/* Add Project Form */}
      <div className="contact-form-box" style={{ marginTop: '3rem' }}>
        <h2 className="contact-header">Add a New Project</h2>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label>Project Name</label>
            <input
              type="text"
              name="title"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Summary</label>
            <input
              type="text"
              name="summary"
              value={formData.summary}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Date</label>
            <input
              type="text"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn">Submit</button>
        </form>
      </div>
    </div>
    )
}