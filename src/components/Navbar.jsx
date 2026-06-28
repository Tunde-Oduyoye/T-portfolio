import { useState, useEffect } from 'react'
import { NAV_LINKS } from '../data'
import styles from './Navbar.module.css'

export default function Navbar({ active, onNav }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const handleNav = (link) => {
    onNav(link)
    setMenuOpen(false)
  }

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <span className={`${styles.logo} syne`}>
          T<span className={styles.dot}>.</span>Oduyoye
        </span>

        <div className={styles.links}>
          {NAV_LINKS.map(l => (
            <button
              key={l}
              className={`${styles.link} ${active === l ? styles.active : ''}`}
              onClick={() => handleNav(l)}
            >
              {l}
            </button>
          ))}
        </div>

        <button className={styles.hire} onClick={() => handleNav('Contact')}>
          Hire Me
        </button>

        <button
          className={styles.burger}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <span className={`${styles.bar} ${menuOpen ? styles.barOpen1 : ''}`} />
          <span className={`${styles.bar} ${menuOpen ? styles.barOpen2 : ''}`} />
          <span className={`${styles.bar} ${menuOpen ? styles.barOpen3 : ''}`} />
        </button>
      </div>

      {menuOpen && (
        <div className={styles.mobile} id="mobile-menu">
          {NAV_LINKS.map(l => (
            <button
              key={l}
              className={`${styles.mobileLink} ${active === l ? styles.active : ''}`}
              onClick={() => handleNav(l)}
            >
              {l}
            </button>
          ))}
          <button className={styles.mobileHire} onClick={() => handleNav('Contact')}>
            Hire Me
          </button>
        </div>
      )}
    </nav>
  )
}
