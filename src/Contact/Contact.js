import React, { useRef } from 'react';
import './Contact.css';

function Contact() {
  const sectionRefs = useRef({});

  const contactLinks = [
    {
      id: 'instagram',
      icon: 'fa-brands fa-instagram',
      label: '@ab_pan07',
      url: 'https://www.instagram.com/ab_pan07/'
    },
    {
      id: 'linkedin',
      icon: 'fa-brands fa-linkedin',
      label: 'abhyuday-panwar',
      url: 'https://www.linkedin.com/in/abhyuday-panwar-9579b2289/'
    },
    {
      id: 'github',
      icon: 'fa-brands fa-github',
      label: 'Abhi03057',
      url: 'https://github.com/Abhi03057'
    },
    {
      id: 'email',
      icon: 'fa-solid fa-envelope',
      label: 'abhyudaypanwar@gmail.com',
      url: 'mailto:abhyudaypanwar@gmail.com'
    }
  ];

  return (
    <>
      <section
        id="contact-wrapper"
        className="contact-wrapper"
        ref={(el) => (sectionRefs.current['contact'] = el)}
      >
        <div className="contact-title">
          &gt; contact.exe <span className="terminal-cursor">_</span>
        </div>

        <div className="contact-grid">
          {contactLinks.map((contact, index) => (
            <div 
              key={contact.id} 
              className="contact-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <i className={`${contact.icon} contact-icon`}></i>
              <a 
                href={contact.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="contact-link"
              >
                {contact.label}
              </a>
            </div>
          ))}
        </div>
      </section>

      <button
        className="back-to-top-btn"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Scroll to top"
      >
        ⬆️
      </button>
    </>
  );
}

export default Contact;