// Projects.js
import React, { useRef } from 'react';
import './Projects.css';

function Projects() {
  const sectionRefs = useRef({});

  return (
    <section
      id="projects"
      className="section"
      ref={(el) => (sectionRefs.current['projects'] = el)}
    >
      <div className="section-heading">$ run projects <span className="blink">_</span></div>

      <div className="typed-line">
        - <a href="https://github.com/Abhi03057/merakli" target="_blank" rel="noopener noreferrer">
            Merakli
          </a>: eCommerce website (React, Firebase)
      </div>

      <div className="typed-line">
        - <a href="https://github.com/Abhi03057/image-processor" target="_blank" rel="noopener noreferrer">
            Image Processor
          </a>: Desktop app (Python, OpenCV)
      </div>

      <div className="typed-line">
        - <a href="https://github.com/Abhi03057/spacewatch" target="_blank" rel="noopener noreferrer">
            Spacewatch
          </a>: NASA APOD app (React, NASA API)
      </div>

      <div className="typed-line">
        - <a href="https://github.com/Abhi03057/HR-Management-System" target="_blank" rel="noopener noreferrer">
            HR Management System
          </a>: AI-enhanced HR system (Python, Tkinter)
      </div>

      <div className="typed-line">
        - <a href="https://github.com/Abhi03057/The-Brogrammer" target="_blank" rel="noopener noreferrer">
            The Brogrammer
          </a>: Minimalist text editor (React)
      </div>

      <div className="typed-line">
        - <a href="https://github.com/Abhi03057/Brotify" target="_blank" rel="noopener noreferrer">
            Brotify
          </a>: Spotify UI clone (HTML, CSS, JS)
      </div>

      <div className="typed-line">
        - <a href="https://github.com/Abhi03057/nova-news" target="_blank" rel="noopener noreferrer">
            Nova News
          </a>: News app (React, News API)
      </div>
    </section>
  );
}

export default Projects;
