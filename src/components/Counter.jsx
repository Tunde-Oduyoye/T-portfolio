import { useEffect, useState } from 'react'
import { useInView } from '../hooks/useInView'

export default function Counter({ target, suffix = '' }) {
  const [count, setCount] = useState(0)
  const [ref, inView] = useInView(0.3)

  useEffect(() => {
    if (!inView) return
    let n = 0
    const step = Math.ceil(target / 40)
    const timer = setInterval(() => {
      n += step
      if (n >= target) { setCount(target); clearInterval(timer) }
      else setCount(n)
    }, 35)
    return () => clearInterval(timer)
  }, [inView, target])

  return <span ref={ref}>{count}{suffix}</span>
}
