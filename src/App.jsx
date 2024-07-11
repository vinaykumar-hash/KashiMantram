import { useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import Aboutus from './components/Aboutus'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
function App() {

  return (
    <div>
      <Hero/>
      <Aboutus/>
      <Services/>
      <Testimonials/>
    </div>
  )
}

export default App
