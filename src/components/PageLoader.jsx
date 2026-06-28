import { useEffect, useState } from 'react'
import styles from './PageLoader.module.css'

export default function PageLoader({ onDone }) {
  const [phase, setPhase] = useState('show') // show | shrink | gone

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('shrink'), 1200)
    const t2 = setTimeout(() => { setPhase('gone'); onDone() }, 1900)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [])

  if (phase === 'gone') return null

  return (
    <div className={`${styles.loader} ${phase === 'shrink' ? styles.shrink : ''}`}>
      <div className={`${styles.logo} ${phase === 'shrink' ? styles.logoFade : ''}`}>
        <span className={styles.t}>T</span>
        <span className={styles.dot}>.</span>
      </div>
      <div className={styles.bar}>
        <div className={styles.fill} />
      </div>
    </div>
  )
}
