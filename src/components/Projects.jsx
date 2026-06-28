import FadeIn from './FadeIn'
import { PROJECTS } from '../data'
import styles from './Projects.module.css'
import proj1 from '../assets/proj1.jpg'
import proj2 from '../assets/proj2.jpg'
import proj3 from '../assets/proj3.jpg'

const IMAGES = { 1: proj1, 2: proj2, 3: proj3 }

export default function Projects() {
  return (
    <section className={styles.section} id="projects">
      <div className={styles.inner}>
        <FadeIn>
          <div className={styles.sectionTag}>Projects</div>
          <div className={styles.topRow}>
            <h2 className={`${styles.heading} syne`}>
              Real work.<br /><span className={styles.green}>Live today.</span>
            </h2>
            <a href="https://github.com/Tunde-Oduyoye" target="_blank" rel="noreferrer" className={styles.ghBtn}>
              GitHub →
            </a>
          </div>
        </FadeIn>

        <div className={styles.grid}>
          {PROJECTS.map((p, i) => (
            <FadeIn key={p.id} delay={i * 0.1}>
              <div className={styles.card}>
                {/* Preview image */}
                <div className={styles.imgWrap}>
                  <img src={IMAGES[p.id]} alt={p.name} className={styles.img} />
                  <div className={styles.imgOverlay}>
                    <a href={p.live} target="_blank" rel="noreferrer" className={styles.previewBtn}>
                      View Live ↗
                    </a>
                  </div>
                  <span className={styles.typeChip}>{p.type}</span>
                </div>

                <div className={styles.body}>
                  <div className={styles.num}>{p.num}</div>
                  <h3 className={`${styles.title} syne`}>{p.name}</h3>
                  <p className={styles.desc}>{p.desc}</p>
                  <div className={styles.tags}>
                    {p.tags.map(t => <span key={t} className={styles.tag}>{t}</span>)}
                  </div>
                  <div className={styles.links}>
                    <a href={p.live} target="_blank" rel="noreferrer" className={styles.liveLink}>
                      Live Site →
                    </a>
                    <a href={p.github} target="_blank" rel="noreferrer" className={styles.ghLink}>
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
