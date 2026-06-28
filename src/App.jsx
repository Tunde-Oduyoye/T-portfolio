import { useState, useEffect } from 'react'
import PageLoader from './components/PageLoader'
import CursorGlow from './components/CursorGlow'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import About from './components/About'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

const SECTIONS = ['home', 'about', 'projects', 'experience', 'skills', 'contact']

export default function App() {
  const [active, setActive] = useState('Home')
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const handler = () => {
      for (const id of [...SECTIONS].reverse()) {
        const el = document.getElementById(id)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 120) {
            setActive(id.charAt(0).toUpperCase() + id.slice(1))
            break
          }
        }
      }
    }
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const handleNav = (link) => {
    const id = link.toLowerCase()
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
      setActive(link)
    }
  }

  return (
    <>
      <PageLoader onDone={() => setReady(true)} />
      <CursorGlow />
      <div style={{
        opacity: ready ? 1 : 0,
        transition: 'opacity 0.5s ease',
        position: 'relative',
        zIndex: 1,
      }}>
        <Navbar active={active} onNav={handleNav} />
        <Marquee />
        <Hero onNav={handleNav} />
        <About />
        <Projects onNav={handleNav} />
        <Experience />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </>
  )
}
