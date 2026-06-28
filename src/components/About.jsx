import FadeIn from './FadeIn'
import SplitText from './SplitText'
import styles from './About.module.css'

const CARDS = [
  { icon: '⚡', title: 'Performance-first', desc: '98 Lighthouse scores. Bundle optimisation, Core Web Vitals, fast loads.' },
  { icon: '🎯', title: 'Pixel-perfect', desc: 'Figma to production with zero drift. Every spacing, every hover state.' },
  { icon: '📱', title: 'Responsive', desc: 'Mobile-first architecture. Works flawlessly on every screen size.' },
  { icon: '♿', title: 'Accessible', desc: 'Proper HTML semantics, alt text, keyboard navigation, good contrast.' },
]

export default function About() {
  return (
    <section className={styles.section} id="about">
      <div className={styles.inner}>
        <FadeIn direction="left">
          <div className={styles.sectionTag}>About</div>
        </FadeIn>

        <div className={styles.grid}>
          <div>
            <h2 className={`${styles.heading} syne`}>
              <SplitText text="Not just" delay={0} />
              <SplitText text="a developer." delay={0.1} />
              <SplitText text="A craftsman." className={styles.green} delay={0.2} />
            </h2>
            <FadeIn delay={0.3} direction="up">
              <p className={styles.para}>
                I'm Tunde Oduyoye — a frontend developer based in Ogun State, Nigeria, with 2 years
                turning ideas into fast, accessible, and visually polished web products.
              </p>
              <p className={styles.para}>
                I specialise in React and Tailwind CSS — building everything from sharp landing pages
                to complex multi-page applications. I care deeply about performance, clean code, and
                the details that make a product feel right. Open to remote roles worldwide.
              </p>
              <div className={styles.infoCards}>
                {[
                  { label: 'Location', value: 'Ogun State, Nigeria' },
                  { label: 'Availability', value: 'Open to remote roles' },
                  { label: 'Focus', value: 'Frontend only' },
                ].map((item, i) => (
                  <div key={item.label} className={styles.infoCard}
                    style={{
                      transitionDelay: `${0.4 + i * 0.1}s`
                    }}
                  >
                    <span className={styles.infoLabel}>{item.label}</span>
                    <span className={styles.infoValue}>{item.value}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          <div className={styles.cards}>
            {CARDS.map((card, i) => (
              <FadeIn key={card.title} delay={i * 0.1} direction="right">
                <div className={styles.card}>
                  <div className={styles.cardIcon}>{card.icon}</div>
                  <div>
                    <div className={styles.cardTitle}>{card.title}</div>
                    <div className={styles.cardDesc}>{card.desc}</div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
