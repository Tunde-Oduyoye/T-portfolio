import styles from './Marquee.module.css'

const ITEMS = [
  'React', 'Tailwind CSS', 'JavaScript', 'HTML5', 'CSS3',
  'Figma', 'Performance', 'Accessibility', 'Responsive Design',
  'Git & GitHub', 'Vite', 'Vercel', 'UI/UX'
]

export default function Marquee() {
  return (
    <div className={styles.wrap}>
      {/* Two rows scrolling in opposite directions */}
      <div className={styles.row}>
        <div className={styles.track}>
          {[...ITEMS, ...ITEMS].map((item, i) => (
            <span key={i} className={styles.item}>
              {item} <span className={styles.dot}>✦</span>
            </span>
          ))}
        </div>
      </div>
      <div className={styles.row}>
        <div className={`${styles.track} ${styles.reverse}`}>
          {[...ITEMS.slice(6), ...ITEMS.slice(0,6), ...ITEMS.slice(6), ...ITEMS.slice(0,6)].map((item, i) => (
            <span key={i} className={`${styles.item} ${styles.itemDim}`}>
              {item} <span className={styles.dot}>✦</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
