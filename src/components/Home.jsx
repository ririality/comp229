// File: Home.jsx | Student: Marianna McCue | StudentID: 301481506 | Date: May 2025

import { Link } from 'react-router-dom';

export default function Home() {

     // Container for Home content
     
  return (
    <div className="home">
      <h1>Welcome to My Portfolio</h1>
      <p>This is my personal space to showcase my skills, projects, and experience.</p>
      
      
      <h2>My Mission Statement</h2>
      <p>To keep learning, stay motivated, and develop the skills I need to land a fulfilling job in IT. 
        I’m dedicated to building a strong foundation and making the most of this learning experience to achieve my career goals.</p>
      
      
      <Link to="/about" className="btn">Learn More About Me</Link>
    </div>
  );
}