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
      <div className="typed-line">- Building fully functional websites for clients using React.JS</div>
      <div className="typed-line">Contributor @ React Open Source (2022 – Present)</div>
      <div className="typed-line">- Contributed to documentation and bug fixes for React core and ecosystem libraries</div>
    </section>
  );
}

export default Experience;
