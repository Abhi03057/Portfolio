import React, { useRef } from 'react';
import './Contact.css';

function Contact() {
  const sectionRefs = useRef({});

  return (
    <>
      <section
        id="contact-section"
        className="contact-section"
        ref={(el) => (sectionRefs.current['contact'] = el)}
      >
        <div className="contact-heading">&gt; contact.exe <span className="blink">_</span></div>

        <div className="contact-card">
          <div className="contact-item">
            <i className="fa-brands fa-instagram"></i>
            <a href="https://www.instagram.com/ab_pan07/" target="_blank" rel="noopener noreferrer">
              @ab_pan07
            </a>
          </div>

          <div className="contact-item">
            <i className="fa-brands fa-linkedin"></i>
            <a href="https://www.linkedin.com/in/abhyuday-panwar-9579b2289/" target="_blank" rel="noopener noreferrer">
              abhyuday-panwar
            </a>
          </div>

          <div className="contact-item">
            <i className="fa-brands fa-github"></i>
            <a href="https://github.com/Abhi03057" target="_blank" rel="noopener noreferrer">
              Abhi03057
            </a>
          </div>

          <div className="contact-item">
            <i className="fa-solid fa-envelope"></i>
            <a href="mailto:abhyudaypanwar@gmail.com">
              abhyudaypanwar@gmail.com
            </a>
          </div>
        </div>
      </section>

      <button
        className="scroll-to-top resume-btn"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Scroll to top"
      >
        ⬆️
      </button>

      <canvas className="tech-grid-bg" id="tech-grid-canvas"></canvas>
      <canvas className="particles-bg" id="particles-canvas"></canvas>
      <canvas className="matrix-bg" id="matrix-canvas"></canvas>
    </>
  );
}

export default Contact;
