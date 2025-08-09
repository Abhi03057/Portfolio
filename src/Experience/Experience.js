// Experience.js
import React, { useRef } from 'react';


function Experience() {
  const sectionRefs = useRef({});

  return (
    <section
      id="experience"
      className="section"
      ref={(el) => (sectionRefs.current['experience'] = el)}
    >
      <div className="section-heading">&gt; experience.exe <span className="blink">_</span></div>
      
      {/* First Internship */}
      <div className="experience-entry">
        <div className="typed-line job-title">
          <span className="company">Web Dev Intern @ RCOTBA Industries</span> 
          <span className="duration">Jan 2025 – Present</span>
        </div>
        <div className="typed-line">
          <ul>
            <li>Building fully functional websites for clients alongside a collaborative team.</li>
            <li>Utilized <span className="tech-highlight">React.JS</span> to deliver responsive, high-quality web solutions.</li>
          </ul>
        </div>
        <div className="experience-progress"></div>
      </div>

      {/* Second Internship */}
      <div className="experience-entry">
        <div className="typed-line job-title">
          <span className="company">Web Dev Intern @ Fusion Business Solutions Private Limited</span>
          <span className="duration">June 2025 – July 2025</span>
        </div>
        <div className="typed-line">
          <ul>
            <li>Developed and deployed <span className="tech-highlight">Merakli</span>, a responsive web platform, using <span className="tech-highlight">React</span> and <span className="tech-highlight">Firebase</span>, improving performance and user engagement.</li>
            <li>Integrated dynamic UI components and real-time data handling, ensuring seamless functionality and an interactive user experience.</li>
          </ul>
        </div>
        <div className="experience-progress"></div>
      </div>
    </section>
  );
}

export default Experience;