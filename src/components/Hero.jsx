import { useState, useEffect } from 'react'
import photo from '../assets/photo.jpg'
import Counter from './Counter'
import SplitText from './SplitText'
import { useParallax } from '../hooks/useParallax'
import styles from './Hero.module.css'

export default function Hero({ onNav }) {
  const [loaded, setLoaded] = useState(false)
  const parallaxRef = useParallax(0.12)

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100)
    return () => clearTimeout(t)
  }, [])

  return (
    <section className={styles.hero} id="home">
      <div className={styles.inner}>
        <div className={styles.left}>

          {/* Eyebrow — slides in from left */}
          <div
            className={styles.eyebrow}
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? 'translateX(0)' : 'translateX(-24px)',
              transition: 'opacity 0.7s ease 0.1s, transform 0.7s cubic-bezier(0.16,1,0.3,1) 0.1s',
            }}
          >
            Frontend Developer · Nigeria · Remote
          </div>

          {/* Headline — word by word */}
          <h1 className={`${styles.h1} syne`}>
            <SplitText text="I build" delay={0.2} />
            <SplitText text="interfaces" className={styles.green} delay={0.35} />
            <SplitText text="that ship." delay={0.52} />
          </h1>

          {/* Sub — fade up */}
          <p
            className={styles.sub}
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.8s ease 0.75s, transform 0.8s cubic-bezier(0.16,1,0.3,1) 0.75s',
            }}
          >
            React developer with 2 years crafting fast, accessible, pixel-perfect web products.
            From landing pages to complex web apps — built to perform.
          </p>

          {/* Buttons */}
          <div
            className={styles.btns}
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.8s ease 0.9s, transform 0.8s cubic-bezier(0.16,1,0.3,1) 0.9s',
            }}
          >
            <button className={styles.btnGreen} onClick={() => onNav('Projects')}>
              See My Work
            </button>
            <a href="/Tunde_Oduyoye_CV.docx" download className={styles.btnDark}>
              Download CV
            </a>
          </div>

          {/* Stats */}
          <div
            className={styles.stats}
            style={{
              opacity: loaded ? 1 : 0,
              transition: 'opacity 0.8s ease 1.1s',
            }}
          >
            {[
              { target: 2, suffix: '+', label: 'Years experience' },
              { target: 3,  suffix: '',  label: 'Projects shipped' },
              { target: 5,  suffix: '',  label: 'Happy clients' },
              { target: 24, suffix: 'h', label: 'Response time' },
            ].map((s, i) => (
              <div key={i} className={styles.stat}>
                <span className={`${styles.statNum} syne`}>
                  <Counter target={s.target} suffix={s.suffix} />
                </span>
                <span className={styles.statLbl}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Photo with parallax */}
        <div className={styles.photoWrap}
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateX(0) scale(1)' : 'translateX(40px) scale(0.97)',
            transition: 'opacity 1s ease 0.3s, transform 1s cubic-bezier(0.16,1,0.3,1) 0.3s',
          }}
        >
          <div className={styles.photoInner} ref={parallaxRef}>
            <img src={photo} alt="Tunde Oduyoye" className={styles.photo} />
            <div className={styles.photoSheen} />
          </div>

          <div className={styles.photoBadge}
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? 'translateY(0)' : 'translateY(16px)',
              transition: 'opacity 0.8s ease 1s, transform 0.8s cubic-bezier(0.16,1,0.3,1) 1s',
            }}
          >
            <span className={styles.badgeIcon}>⚡</span>
            <div>
              <div className={styles.badgeTitle}>React + Tailwind</div>
              <div className={styles.badgeSub}>Primary stack</div>
            </div>
          </div>

          <div className={styles.availPill}
            style={{
              opacity: loaded ? 1 : 0,
              transition: 'opacity 0.8s ease 1.2s',
            }}
          >
            <span className={styles.pulse} />
            Open to work
          </div>
        </div>
      </div>
    </section>
  )
}
