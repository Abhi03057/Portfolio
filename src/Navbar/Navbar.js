// Navbar.js
import React from 'react';
import './Navbar.css';

const Navbar = ({ activeSection, scrollToSection }) => {
  const NAV_ITEMS = [
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'certificates', label: 'Certificates' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav className="navbar">
      <span className="navbar-brand">Abhyuday Singh Panwar</span>
      <div className="navbar-links">
        {NAV_ITEMS.map((item) => (
          <a
            key={item.id}
            className={`navbar-link${activeSection === item.id ? ' active' : ''}`}
            onClick={() => scrollToSection(item.id)}
            href={`#${item.id}`}
            tabIndex={0}
          >
            {item.label}
          </a>
        ))}
        <a
          className="resume-btn"
          href="https://drive.google.com/uc?export=download&id=1hjtvTPK0L2gxzdkzHbaHFdAztlGYwzm5"
          download
          target="_blank"
          rel="noopener noreferrer"
        >
          Download Resume
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
