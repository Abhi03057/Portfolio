// Projects.js
import React, { useRef } from 'react';
import './Projects.css';
import merakli from '../images/Merakli.png';
import imageProcessor from '../images/image-processor.png';
import spacewatch from '../images/spacewatch.png';
import hrms from '../images/hrms.png';
import brogrammer from '../images/brogrammer.png';
import brotify from '../images/brotify.png';
import novanews from '../images/nova-news.png';
import finley from '../images/finley.png';

const projects = [
  {
    id: 'merakli',
    title: 'Merakli',
    description: 'An eCommerce React app with Firebase, offering category-wise product listings, dynamic cart, and auth.',
    tech: 'React, Firebase',
    img: merakli,
    link: 'https://github.com/Abhi03057/merakli',
  },
  {
    id: 'image-processor',
    title: 'Image Processor',
    description: 'A desktop app for image editing with filters, crop/resize, and OCR using Tesseract.',
    tech: 'Python, OpenCV',
    img: imageProcessor,
    link: 'https://github.com/Abhi03057/image-processor',
  },
  {
    id: 'spacewatch',
    title: 'Spacewatch',
    description: "React app showing NASA's APOD with detailed daily images using NASA's public API.",
    tech: 'React, NASA API',
    img: spacewatch,
    link: 'https://github.com/Abhi03057/spacewatch',
  },
  {
    id: 'hrms',
    title: 'HR Management System',
    description: 'Python Tkinter tool for managing employee data with an AI expert system for decisions.',
    tech: 'Python, Tkinter',
    img: hrms,
    link: 'https://github.com/Abhi03057/HR-Management-System',
  },
  {
    id: 'brogrammer',
    title: 'The Brogrammer',
    description: 'A clean, focused text editor built in React with autosave and syntax highlighting.',
    tech: 'React',
    img: brogrammer,
    link: 'https://github.com/Abhi03057/The-Brogrammer',
  },
  {
    id: 'brotify',
    title: 'Brotify',
    description: 'Spotify-inspired music player with smooth playback and UI built in plain HTML/CSS/JS.',
    tech: 'HTML, CSS, JS',
    img: brotify,
    link: 'https://github.com/Abhi03057/Brotify',
  },
  {
    id: 'nova-news',
    title: 'Nova News',
    description: 'A React app with News API integration for real-time headlines across multiple categories.',
    tech: 'React, News API',
    img: novanews,
    link: 'https://github.com/Abhi03057/nova-news',
  },
  {
  id: 'finley',
  title: 'Finley',
  description: 'A crypto finance dashboard built with React that shows real-time token data using the CoinGecko API, includes authentication via Firebase, and features a news section delivering live crypto news updates.',
  tech: 'React, Firebase, CoinGecko API, News API',
  img: finley,
  link: 'https://github.com/Abhi03057/finley',
},

];

function Projects() {
  const sectionRefs = useRef({});

  return (
    <section
      id="projects"
      className="section"
      ref={(el) => (sectionRefs.current['projects'] = el)}
    >
      <div className="section-heading">
        $ run projects <span className="blink">_</span>
      </div>

      <div className="project-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <img src={project.img} alt={project.title} className="project-image" />
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <span className="tech-stack">{project.tech}</span>
            <div className="project-link">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                To project →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
