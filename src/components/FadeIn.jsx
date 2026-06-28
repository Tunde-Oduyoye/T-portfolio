import { useInView } from '../hooks/useInView'

export default function FadeIn({
  children,
  delay = 0,
  className = '',
  style = {},
  direction = 'up', // up | left | right | none
  distance = 36,
}) {
  const [ref, inView] = useInView(0.12)

  const getInitialTransform = () => {
    if (direction === 'up')    return `translateY(${distance}px)`
    if (direction === 'left')  return `translateX(-${distance}px)`
    if (direction === 'right') return `translateX(${distance}px)`
    return 'none'
  }

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translate(0,0)' : getInitialTransform(),
        transition: `opacity 0.8s cubic-bezier(0.16,1,0.3,1) ${delay}s,
                     transform 0.9s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
        willChange: 'opacity, transform',
        ...style,
      }}
    >
      {children}
    </div>
  )
}
