import { useEffect, useRef } from 'react'

export default function CursorGlow() {
  const glowRef = useRef(null)
  const pos = useRef({ x: 0, y: 0 })
  const current = useRef({ x: 0, y: 0 })
  const raf = useRef(null)

  useEffect(() => {
    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY }
    }
    window.addEventListener('mousemove', onMove)

    const animate = () => {
      // smooth lerp follow
      current.current.x += (pos.current.x - current.current.x) * 0.06
      current.current.y += (pos.current.y - current.current.y) * 0.06
      if (glowRef.current) {
        glowRef.current.style.transform =
          `translate(${current.current.x - 300}px, ${current.current.y - 300}px)`
      }
      raf.current = requestAnimationFrame(animate)
    }
    raf.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf.current)
    }
  }, [])

  return (
    <div
      ref={glowRef}
      style={{
        position: 'fixed',
        top: 0, left: 0,
        width: 600, height: 600,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(198,241,53,0.04) 0%, transparent 70%)',
        pointerEvents: 'none',
        zIndex: 0,
        willChange: 'transform',
      }}
    />
  )
}
