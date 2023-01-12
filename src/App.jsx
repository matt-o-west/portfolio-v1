import { useState } from 'react'
import './App.css'
import Nav from './Nav'
import About from './About'
import Skills from './Skills'
import Projects from './Projects'
import Overlay from './Overlay'
import Contact from './Contact'
import Footer from './Footer'
import 'tailwindcss/tailwind.css'
import { useRef } from 'react'

function App() {
  const ref = useRef(null)

  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className='App'>
      <Nav />
      <About handleClick={handleClick} />
      <Skills />
      <Projects handleClick={handleClick} />
      <Contact ref={ref} text='contact' />
      <Footer />
      <Overlay />
    </div>
  )
}

export default App
