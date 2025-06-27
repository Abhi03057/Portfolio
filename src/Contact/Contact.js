// Contact.js
import React, { useRef } from 'react';
import './Contact.css';

function Contact() {
  const sectionRefs = useRef({});

  return (
    <>
      <section
        id="contact"
        className="section"
        ref={(el) => (sectionRefs.current['contact'] = el)}
      >
        <div className="section-heading">&gt; contact.exe <span className="blink">_</span></div>
        <div className="typed-line">
          Instagram: <a className="glitchy" href="https://www.instagram.com/ab_pan07/" target="_blank" rel="noopener noreferrer">@ab_pan07</a>
        </div>
        <div className="typed-line">
          LinkedIn: <a className="glitchy" href="https://www.linkedin.com/in/abhyuday-panwar-9579b2289/" target="_blank" rel="noopener noreferrer">abhyuday-panwar</a>
        </div>
        <div className="typed-line">
          GitHub: <a className="glitchy" href="https://github.com/Abhi03057" target="_blank" rel="noopener noreferrer">Abhi03057</a>
        </div>
        <div className="typed-line">
          Email: <a className="glitchy" href="mailto:abhyudaypanwar@gmail.com">abhyudaypanwar@gmail.com</a>
        </div>
      </section>

      {/* Scroll to Top */}
      <button
        className="scroll-to-top resume-btn"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Scroll to top"
      >
        ⬆️
      </button>

      {/* Optional: Tech Grid, Particles, Matrix Rain (hidden by default, enable in CSS) */}
      <canvas className="tech-grid-bg" id="tech-grid-canvas"></canvas>
      <canvas className="particles-bg" id="particles-canvas"></canvas>
      <canvas className="matrix-bg" id="matrix-canvas"></canvas>
    </>
  );
}

export default Contact;
