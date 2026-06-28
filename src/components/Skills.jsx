import FadeIn from './FadeIn'
import { SKILLS } from '../data'
import styles from './Skills.module.css'

export default function Skills() {
  return (
    <section className={styles.section} id="skills">
      <div className={styles.inner}>
        <FadeIn>
          <div className={styles.sectionTag}>Skills</div>
          <h2 className={`${styles.heading} syne`}>
            My <span className={styles.green}>toolkit.</span>
          </h2>
        </FadeIn>

        <div className={styles.grid}>
          {SKILLS.map((group, i) => (
            <FadeIn key={group.label} delay={i * 0.08} className={group.label === 'Performance' ? styles.fullWidth : ''}>
              <div className={`${styles.card} ${group.label === 'Performance' ? styles.wide : ''}`}>
                <div className={styles.label}>{group.label}</div>
                <div className={styles.pills}>
                  {group.items.map(skill => (
                    <span key={skill} className={styles.pill}>{skill}</span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
