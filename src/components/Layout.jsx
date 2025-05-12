// File: Layout.jsx | Student: Marianna McCue | StudentID: 301481506 | Date: May 2025
import { Link } from "react-router-dom";
import '../styles/main.css';
import Logo from '../assets/MMlogo.png';

export default function Layout() {
  // Header container for the layout
  return (
    
    <div className="header-container">
      
      <h1 className="site-title">Marianna McCue</h1>
      <h2 className="portfolio-subtitle">Personal Portfolio</h2>

      <div className="navbar">
        <img src={Logo} alt="Logo" className="logo" />
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
    </div>
  );
}