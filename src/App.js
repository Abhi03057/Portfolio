import React, { useEffect } from 'react';
import './App.css';
import profileImage from './images/profile.jpg';

function App() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const sections = document.querySelectorAll('.section-animate');
    sections.forEach((el, i) => {
      setTimeout(() => {
        el.classList.add('visible');
      }, 200 + i * 200);
    });
  }, []);

  return (
    <div className="devsite-root">
      {/* Hero Section */}
      <section className="hero section-animate">
        <div className="hero-content">
          <div className="hero-photo">
            <img src={profileImage} alt="Profile" />
          </div>
          <div className="hero-text">
            <h1 className="hero-name">Abhyuday Singh Panwar</h1>
            <h2 className="hero-title">CSE-AIML Student</h2>
            <p className="hero-intro">
              Passionate about building impactful digital experiences and exploring new tech frontiers.
            </p>
            <a className="resume-btn" href="#" download>Download Resume</a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills section-animate">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          <div className="skill-category">
            <h3>Frontend</h3>
            <div className="skill-tags">
              <span className="skill-tag">React</span>
              <span className="skill-tag">HTML</span>
              <span className="skill-tag">CSS</span>
              <span className="skill-tag">JavaScript</span>
            </div>
          </div>
          <div className="skill-category">
            <h3>Backend</h3>
            <div className="skill-tags">
              <span className="skill-tag">Node.js</span>
              <span className="skill-tag">Firebase</span>
            </div>
          </div>
          <div className="skill-category">
            <h3>Tools</h3>
            <div className="skill-tags">
              <span className="skill-tag">Git</span>
              <span className="skill-tag">VS Code</span>
              <span className="skill-tag">Figma</span>
              <span className="skill-tag">OpenCV</span>
            </div>
          </div>
        </div>
      </section>

      

      {/* Experience Section */}
      <section className="experience section-animate">
        <h2 className="section-title">Experience</h2>
        <div className="exp-list">
          <div className="exp-card">
            <div className="exp-logo">
              <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Googleplex-Patio-Aug-2014.JPG" alt="Google Logo" />
            </div>
            <div className="exp-details">
              <h3>RCOTBA Industries</h3>
              <p className="exp-role">Web Dev Intern</p>
              <p className="exp-duration">Jan 2025 – Present</p>
              <p className="exp-desc"> ˆ 
            Building fully functional websites for clients alongside a collaborative team.
             Utilized React.JS to deliver responsive, high-quality web solutions</p>
            </div>
          </div>
          <div className="exp-card">
            <div className="exp-logo">
              <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React Logo" />
            </div>
            <div className="exp-details">
              <h3>React Open Source</h3>
              <p className="exp-role">Contributor</p>
              <p className="exp-duration">2022 – Present</p>
              <p className="exp-desc">Contributed to documentation and bug fixes for React core and ecosystem libraries.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="certifications section-animate">
        <h2 className="section-title">Certifications</h2>
        <div className="certs-grid">
          <div className="cert-card">
            <div className="cert-badge">📜</div>
            <div>
              <h3>Smart India Hackathon</h3>
              <p>Participation Certificate</p>
              <a
                href="https://drive.google.com/your-sih-link"
                target="_blank"
                rel="noopener noreferrer"
              >View Certificate</a>
            </div>
          </div>
          <div className="cert-card">
            <div className="cert-badge">🎓</div>
            <div>
              <h3>The Complete Python Bootcamp</h3>
              <p>Udemy</p>
              <a
                href="https://drive.google.com/your-python-link"
                target="_blank"
                rel="noopener noreferrer"
              >View Certificate</a>
            </div>
          </div>
          <div className="cert-card">
            <div className="cert-badge">🎓</div>
            <div>
              <h3>Introduction to Databases</h3>
              <p>Coursera</p>
              <a
                href="https://drive.google.com/your-database-link"
                target="_blank"
                rel="noopener noreferrer"
              >View Certificate</a>
            </div>
          </div>
          <div className="cert-card">
            <div className="cert-badge">🎓</div>
            <div>
              <h3>Programming in Java</h3>
              <p>NPTEL</p>
              <a
                href="https://drive.google.com/your-java-link"
                target="_blank"
                rel="noopener noreferrer"
              >View Certificate</a>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
<section className="projects section-animate">
  <h2 className="section-title">Projects</h2>
  <div className="projects-grid">

    <div className="project-card">
      <h3>Merakli</h3>
      <p>An eCommerce website with category filters, cart, sign-in, and product browsing using Firebase Auth and React.</p>
      <p className="tech-stack">React • Firebase • CSS</p>
      <a href="https://github.com/Abhi03057/Merakli" className="project-link">View Project</a>
    </div>

    <div className="project-card">
      <h3>Image Processor</h3>
      <p>Desktop app that applies filters (blur, sepia), crop, rotate, and OCR on images using Python + OpenCV.</p>
      <p className="tech-stack">Python • Tkinter • OpenCV • Pytesseract</p>
      <a href="https://github.com/Abhi03057/Image-Processor" className="project-link">View Project</a>
    </div>

    <div className="project-card">
      <h3>Spacewatch</h3>
      <p>React app that shows NASA’s Astronomy Picture of the Day along with title and explanation using NASA’s API.</p>
      <p className="tech-stack">React • NASA API • CSS</p>
      <a href="https://github.com/Abhi03057/SpaceWatch" className="project-link">View Project</a>
    </div>

    <div className="project-card">
      <h3>HR Management System</h3>
      <p>AI-enhanced HR system with recruitment logic and GUI for managing employee information and job roles.</p>
      <p className="tech-stack">Python • Tkinter • AI Logic</p>
      <a href="https://github.com/Abhi03057/HR-Management-System" target="_blank" rel="noopener noreferrer" className="project-link">View Project</a>
    </div>

    <div className="project-card">
      <h3>The Brogrammer</h3>
      <p>A minimalist React-based text editor designed for coders and creators. Fast, clean, and intuitive.</p>
      <p className="tech-stack">React • HTML • CSS</p>
      <a href="https://github.com/Abhi03057/The-Brogrammer" className="project-link">View Project</a>
    </div>

    <div className="project-card">
      <h3>Brotify</h3>
      <p>A responsive clone of Spotify’s interface with custom audio UI elements built using HTML, CSS, and JS.</p>
      <p className="tech-stack">HTML • CSS • JavaScript</p>
      <a href="https://github.com/Abhi03057/Brotify" target="_blank" rel="noopener noreferrer" className="project-link">View Project</a>
    </div>

    <div className="project-card">
      <h3>Nova News</h3>
      <p>React news app fetching top headlines from a public API, categorized and styled for clean readability.</p>
      <p className="tech-stack">React • News API • CSS</p>
      <a href="https://github.com/Abhi03057/nova-news" target="_blank" rel="noopener noreferrer" className="project-link">View Project</a>
    </div>

  </div>
</section>


      {/* Contact Section */}
      <section className="contact section-animate">
        <h2 className="section-title">Contact Me</h2>
        <div className="contact-content">
          <div className="contact-icons">
            <a href="https://www.instagram.com/ab_pan07/" target="_blank" rel="noopener noreferrer" className="contact-icon ig">
            <i class="fa-brands fa-instagram"></i></a>
            <a href="https://www.linkedin.com/in/abhyuday-panwar-9579b2289/" target="_blank" rel="noopener noreferrer" className="contact-icon li">
            <i class="fa-brands fa-linkedin"></i></a>
            <a href="https://github.com/Abhi03057" target="_blank" rel="noopener noreferrer" className="contact-icon gh">
            <i class="fa-brands fa-github"></i></a>
          </div>
          <form className="contact-form">
            <input type="text" placeholder="Name" name="name" required />
            <input type="email" placeholder="Email" name="email" required />
            <textarea placeholder="Message" name="message" required />
            <button type="submit" className="contact-submit">Send Message</button>
          </form>
        </div>
      </section>

      {/* Scroll to Top */}
      <button className="scroll-to-top" onClick={scrollToTop} aria-label="Scroll to top">⬆️</button>
    </div>
  );
}

export default App;
