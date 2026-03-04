import { useState, useEffect } from 'react';
import AuroraBackground from '@/components/AuroraBackground';
import Navbar from '@/components/Navbar';
import SectionNavDots from '@/components/SectionNavDots';
import Home from '@/components/Home';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';

const sectionIds = ['home', 'about', 'projects', 'skills', 'contact'];

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { threshold: 0.4 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <>
      <AuroraBackground />
      <Navbar activeSection={activeSection} />
      <SectionNavDots activeSection={activeSection} />
      <main className="snap-container">
        <Home />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </>
  );
};

export default Index;
