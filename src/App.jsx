import React from 'react'
import Navbar from './components/navbar/navbar'
import Hero from './components/Hero/Hero'
import Mywork from './components/mywork/mywork'
import Contact from './components/contact/contact'
import Footer from './components/footer/footer'
import SkillsSection  from './components/skills/SkillsSection'
import Aboutme from './components/aboutme/AboutMe'
const App = () => {
  return (
    <div className="bg-gray-900 min-h-screen">
      <div className="container mx-auto px-4">
        <Navbar />
        <Hero />
        <Aboutme />
        <SkillsSection />
        <Mywork />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default App