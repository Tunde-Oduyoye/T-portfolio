import FadeIn from './FadeIn'
import { EXPERIENCE } from '../data'
import styles from './Experience.module.css'

export default function Experience() {
  return (
    <section className={styles.section} id="experience">
      <div className={styles.inner}>
        <FadeIn>
          <div className={styles.sectionTag}>Experience</div>
          <h2 className={`${styles.heading} syne`}>
            Where I've put<br />in the <span className={styles.green}>work.</span>
          </h2>
        </FadeIn>

        <div className={styles.timeline}>
          {EXPERIENCE.map((exp, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className={`${styles.item} ${exp.active ? styles.active : styles.past}`}>
                <div className={styles.dot} />
                <div className={styles.content}>
                  <div className={styles.header}>
                    <h3 className={`${styles.title} syne`}>{exp.title}</h3>
                    <span className={`${styles.period} ${exp.active ? styles.periodActive : ''}`}>
                      {exp.period}
                    </span>
                  </div>
                  <div className={styles.company}>{exp.company}</div>
                  <ul className={styles.bullets}>
                    {exp.bullets.map((b, j) => (
                      <li key={j} className={styles.bullet}>
                        <span className={`${styles.arrow} ${exp.active ? styles.arrowActive : ''}`}>→</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
