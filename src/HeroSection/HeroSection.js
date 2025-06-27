// HeroSection.js
import React, { useRef } from 'react';
import './HeroSection.css';
import profileImage from '../images/profile.jpg';


function HeroSection() {
  const sectionRefs = useRef({});

  return (
    <>
      <section
        id="home"
        className="section"
        ref={(el) => (sectionRefs.current['home'] = el)}
      >
        <div className="section-heading">&gt; home.exe <span className="blink">_</span></div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', flexWrap: 'wrap' }}>
          <div style={{ minWidth: 120 }}>
            <img
              src={profileImage}
              alt="Profile"
              style={{
                width: 120,
                height: 120,
                borderRadius: '50%',
                border: '2px solid var(--accent-cyan)',
                boxShadow: '0 0 16px #00ffff'
              }}
            />
          </div>
          <div>
            <div
              className="typed-line"
              style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--accent-magenta)' }}
            >
              Abhyuday Singh Panwar
            </div>
            <div
              className="typed-line"
              style={{ fontSize: '1.1rem', color: 'var(--accent-cyan)' }}
            >
              CSE-AIML Student
            </div>
            <div className="typed-line" style={{ marginTop: 10 }}>
              Passionate about building impactful digital experiences and exploring new tech frontiers.
            </div>
          </div>
        </div>
      </section>

      <section
        id="about"
        className="section"
        ref={(el) => (sectionRefs.current['about'] = el)}
      >
        <div className="section-heading">&gt; about.exe <span className="blink">_</span></div>
        <div className="typed-line">
          Driven by curiosity, I explore the intersection of code and creativity.  
          I craft web apps, build intelligent systems, and thrive on solving real-world problems.  
          Currently focused on AI-driven products, futuristic UI design, and full-stack development.  
          Always learning. Always building.
        </div>
      </section>

      <section
        id="education"
        className="section"
        ref={(el) => (sectionRefs.current['education'] = el)}
      >
        <div className="section-heading">&gt; education.exe <span className="blink">_</span></div>
        <div className="typed-line">B.Tech in Computer Science & Engineering (AI & ML)</div>
        <div className="typed-line">[SRM Institute Of Science and Technology], [3rd year]</div>
      </section>
    </>
  );
}

export default HeroSection;
