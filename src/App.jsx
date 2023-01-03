import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Nav from './Nav'
import About from './About'
import Skills from './Skills'
import Projects from './Projects'
import Overlay from './Overlay'
import Contact from './Contact'
import Footer from './Footer'
import 'tailwindcss/tailwind.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <Nav />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <Overlay />
    </div>
  )
}

export default App
