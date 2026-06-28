import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <span className={`${styles.logo} syne`}>
          T<span className={styles.dot}>.</span>Oduyoye
        </span>
        <span className={styles.copy}>
          © 2026 Tunde Oduyoye · Built with React & Tailwind CSS
        </span>
        <div className={styles.links}>
          {[
            { label: 'GH', href: 'https://github.com/Tunde-Oduyoye' },
            { label: 'LI', href: 'https://www.linkedin.com/in/babatunde-oduyoye-587548393' },
          ].map(l => (
            <a key={l.label} href={l.href} target="_blank" rel="noreferrer" className={styles.link}>
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
