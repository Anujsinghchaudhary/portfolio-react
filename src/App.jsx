import React from 'react'
import Navbar from './components/navbar/navbar'
import Hero from './components/Hero/Hero'
import About from './components/about/about'
import Services from './components/services/services'
import Mywork from './components/mywork/mywork'
import Contact from './components/contact/contact'
import Footer from './components/footer/footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero/>
      <About/>
      <Services/>
      <Mywork/>
      <Contact/>
      <Footer/>
    </div>

  )

}

export default App