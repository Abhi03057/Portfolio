// App.js
import React, { useRef, useEffect, useState } from 'react';
import './App.css';

import Navbar from './Navbar/Navbar';
import HeroSection from './HeroSection/HeroSection';
import Experience from './Experience/Experience';
import Projects from './Projects/Projects';
import Certifications from './Certifications/Certifications';
import Contact from './Contact/Contact';

function App() {
  const sectionRefs = useRef({});
  const [activeSection, setActiveSection] = useState('home');
  const [hacker, setHacker] = useState(false);

  const scrollToSection = (id) => {
    const section = sectionRefs.current[id];
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sectionIds = Object.keys(sectionRefs.current);
      let current = 'home';

      for (const id of sectionIds) {
        const section = sectionRefs.current[id];
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          current = id;
          break;
        }
      }

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`App ${hacker ? 'hacker-mode' : ''}`}>
      <Navbar
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        hacker={hacker}
        setHacker={setHacker}
      />

      <HeroSection sectionRefs={sectionRefs} />
      <Experience sectionRefs={sectionRefs} />
      <Projects sectionRefs={sectionRefs} />
      <Certifications sectionRefs={sectionRefs} />
      <Contact sectionRefs={sectionRefs} />
    </div>
  );
}

export default App;
