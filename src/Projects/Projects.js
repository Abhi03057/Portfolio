// Projects.js
import React, { useRef } from 'react';
import './Projects.css';

const projects = [
  {
    id: 'merakli',
    title: 'Merakli',
    description:
      'An eCommerce React app with Firebase, offering category-wise product listings, dynamic cart, and auth.',
    tech: 'React, Firebase',
    img: '/images/Merakli.png', // place images in public/images
    link: 'https://github.com/Abhi03057/merakli',
  },
  {
    id: 'image-processor',
    title: 'Image Processor',
    description:
      'A desktop app for image editing with filters, crop/resize, and OCR using Tesseract.',
    tech: 'Python, OpenCV',
    img: '/images/image-processor.png',
    link: 'https://github.com/Abhi03057/image-processor',
  },
  {
    id: 'spacewatch',
    title: 'Spacewatch',
    description:
      "React app showing NASA's APOD with detailed daily images using NASA's public API.",
    tech: 'React, NASA API',
    img: '/images/spacewatch.png',
    link: 'https://github.com/Abhi03057/spacewatch',
  },
  {
    id: 'hrms',
    title: 'HR Management System',
    description:
      'Python Tkinter tool for managing employee data with an AI expert system for decisions.',
    tech: 'Python, Tkinter',
    img: '/images/hrms.png',
    link: 'https://github.com/Abhi03057/HR-Management-System',
  },
  {
    id: 'brogrammer',
    title: 'The Brogrammer',
    description:
      'A clean, focused text editor built in React with autosave and syntax highlighting.',
    tech: 'React',
    img: '/images/brogrammer.png',
    link: 'https://github.com/Abhi03057/The-Brogrammer',
  },
  {
    id: 'brotify',
    title: 'Brotify',
    description:
      'Spotify-inspired music player with smooth playback and UI built in plain HTML/CSS/JS.',
    tech: 'HTML, CSS, JS',
    img: '/images/brotify.png',
    link: 'https://github.com/Abhi03057/Brotify',
  },
  {
    id: 'nova-news',
    title: 'Nova News',
    description:
      'A React app with News API integration for real-time headlines across multiple categories.',
    tech: 'React, News API',
    img: '/images/nova-news.png',
    link: 'https://github.com/Abhi03057/nova-news',
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
      <div className="section-heading">$ run projects <span className="blink">_</span></div>
      <div className="project-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <img src={project.img} alt={project.title} className="project-image" />
            <h3 className="project-title">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                {project.title}
              </a>
            </h3>
            <p className="project-description">{project.description}</p>
            <span className="tech-stack">{project.tech}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
