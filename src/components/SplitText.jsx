import { useEffect, useRef, useState } from 'react'

// Splits text into words, each animates in with stagger
export default function SplitText({ text, className = '', delay = 0, tag: Tag = 'span' }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true) },
      { threshold: 0.2 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  const words = text.split(' ')

  return (
    <Tag ref={ref} className={className} style={{ display: 'block' }}>
      {words.map((word, i) => (
        <span
          key={i}
          style={{
            display: 'inline-block',
            overflow: 'hidden',
            marginRight: '0.25em',
            verticalAlign: 'bottom',
          }}
        >
          <span
            style={{
              display: 'inline-block',
              transform: visible ? 'translateY(0)' : 'translateY(110%)',
              opacity: visible ? 1 : 0,
              transition: `transform 0.75s cubic-bezier(0.16,1,0.3,1) ${delay + i * 0.07}s,
                           opacity 0.5s ease ${delay + i * 0.07}s`,
            }}
          >
            {word}
          </span>
        </span>
      ))}
    </Tag>
  )
}
