import { useEffect, useRef } from 'react'

export function useParallax(speed = 0.15) {
  const ref = useRef(null)

  useEffect(() => {
    const onScroll = () => {
      if (!ref.current) return
      const rect = ref.current.parentElement.getBoundingClientRect()
      const offset = (window.innerHeight / 2 - rect.top - rect.height / 2) * speed
      ref.current.style.transform = `translateY(${offset}px)`
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [speed])

  return ref
}
