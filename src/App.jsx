import React from 'react';
import Navbar from './components/navbar/navbar';
import Hero from './components/Hero/Hero';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';
import SkillsSection from './components/skills/SkillsSection';
import Aboutme from './components/aboutme/AboutMe';
import Projects from './components/projects/Projects';

const App = () => {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4">
        <Navbar />
        <Hero />
        <Aboutme />
        <SkillsSection />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;