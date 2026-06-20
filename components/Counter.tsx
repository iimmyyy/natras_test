'use client'

import { useInView, useMotionValue, useSpring, animate } from 'framer-motion'
import { useEffect, useRef } from 'react'

interface Props {
  to: number
  suffix?: string
  prefix?: string
  duration?: number
}

export default function Counter({ to, suffix = '', prefix = '', duration = 1.8 }: Props) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })
  const started = useRef(false)

  useEffect(() => {
    if (!inView || started.current || !ref.current) return
    started.current = true
    const el = ref.current
    const controls = animate(0, to, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate(v) {
        el.textContent = prefix + Math.round(v).toLocaleString() + suffix
      },
    })
    return () => controls.stop()
  }, [inView, to, suffix, prefix, duration])

  return <span ref={ref}>{prefix}0{suffix}</span>
}
