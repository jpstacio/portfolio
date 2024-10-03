import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Assuming you have a CSS file for the navbar

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/research">Research</Link></li>
        <li><Link to="/education">Education</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
