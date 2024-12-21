import React, { useEffect } from 'react';
import Navbar from './components/navbar/navbar';
import Hero from './components/Hero/Hero';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';
import SkillsSection from './components/skills/SkillsSection';
import Aboutme from './components/aboutme/AboutMe';
import Projects from './components/projects/Projects';
import './smoothScroll';
import './scrollTransition'; 
import './index.css';

const App = () => {
  return (
    <div className="bg-gray-900 min-h-screen">
      <div className="container mx-auto px-4">
        <Navbar />
        <section><Hero /></section>
        <section><Aboutme /></section>
        <section><SkillsSection /></section>
        <section><Projects /></section>
        <section><Contact /></section>
        <Footer />
      </div>
    </div>
  );
};

export default App;