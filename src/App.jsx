import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Nav from './Nav'
import About from './About'
import Skills from './Skills'
import Projects from './Projects'
import 'tailwindcss/tailwind.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <Nav />
      <About />
      <Skills />
      <Projects />
    </div>
  )
}

export default App
