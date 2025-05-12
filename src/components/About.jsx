// File: About.jsx | Student: Marianna McCue | StudentID: 301481506 | Date: May 2025
import headshot from '../assets/Headshot.jpg';
import resume from '../assets/Resume.pdf';

export default function About() {
  return (
    <div className="about">
      <h1>About Me</h1>
      
      <div className="profile-section">
        <img src={headshot} alt="My Headshot" className="profile-image" />
        <h2>Marianna McCue</h2> 
      </div>
      
      <p>My name is Marianna. 
        I am currently in my third semester of the Software Engineering Technician program, 
        focusing on developing my technical skills and transitioning into the IT industry. 
        Before starting this program, I spent over 15 years working in the finance, insurance 
        and consulting industry, which has provided me with valuable skills 
        such as problem-solving, attention to detail, and a strong work ethic.
        </p>
        <p>As a single mother to two young girls, 
        I made the decision to pursue a new career path to enable me to work remotely 
        and achieve a better work-life balance. While I am still in the early stages 
        of my learning journey and my portfolio reflects limited experience at this point, 
        I am eager to continue growing my skills and gain practical experience. 
        My goal is to secure a technical support position after graduation, 
        where I can apply my passion for technology and dedication to learning.</p>

      <a href={resume} target="_blank" rel="noopener noreferrer" className="btn">
        Download my Resume (PDF)
      </a>
    </div>
  );
}