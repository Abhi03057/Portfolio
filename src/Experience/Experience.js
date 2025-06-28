// Experience.js
import React, { useRef } from 'react';
import './Experience.css';

function Experience() {
  const sectionRefs = useRef({});

  return (
    <section
      id="experience"
      className="section"
      ref={(el) => (sectionRefs.current['experience'] = el)}
    >
      <div className="section-heading">&gt; experience.exe <span className="blink">_</span></div>
      <div className="typed-line">Web Dev Intern @ RCOTBA Industries (Jan 2025 – Present)</div>
      <div className="typed-line">
        <ul>
          <li>Building fully functional websites for clients alongside a collaborative team.</li>
          <li>Utilized React.JS to deliver responsive, high-quality web solutions.</li>
        </ul>
      </div>

      
    </section>
  );
}

export default Experience;
