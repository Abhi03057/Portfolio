// Certifications.js
import React, { useRef } from 'react';
import './Certifications.css';

function Certifications() {
  const sectionRefs = useRef({});

  return (
    <section
      id="certificates"
      className="section"
      ref={(el) => (sectionRefs.current['certificates'] = el)}
    >
      <div className="section-heading">&gt; certificates.exe <span className="blink">_</span></div>

      <div className="typed-line">
        - <a
            href="https://drive.google.com/file/d/10OmiKVQaoF9Sm_R1UTjM4hJlaZT0pG58/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Smart India Hackathon: Participation Certificate
          </a>
      </div>

      <div className="typed-line">
        - <a
            href="https://drive.google.com/file/d/1zr2lFzTvwKREqEf0amza9eGOdTIW21qy/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            The Complete Python Bootcamp: Udemy
          </a>
      </div>

      <div className="typed-line">
        - <a
            href="https://drive.google.com/file/d/1C3uHlpFGPBtQga0qLhw8V7gw0kT3ZMAI/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Introduction to Databases: Coursera
          </a>
      </div>

      <div className="typed-line">
        - <a
            href="https://drive.google.com/file/d/1EDLeBLZ2kT0DnlPfBrLo-w2AtiMcwAtE/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Programming in Java: NPTEL
          </a>
      </div>
    </section>
  );
}

export default Certifications;
