import { useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import Aboutus from './components/Aboutus'
import Services from './components/Services'

function App() {

  return (
    <div>
      <Hero/>
      <Aboutus/>
      <Services/>
    </div>
  )
}

export default App
