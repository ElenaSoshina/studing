import { useLayoutEffect, useState, type MutableRefObject } from 'react'

export type Position = { x: number; y: number }

export function usePointerPosition<T extends HTMLElement>(ref: MutableRefObject<T | null>) {
  const [pos, setPos] = useState<Position>({ x: 0, y: 0 })

  useLayoutEffect(() => {
    const el = ref.current
    if (!el) return

    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect()
      setPos({ x: e.clientX - r.left, y: e.clientY - r.top })
    }

    el.addEventListener('pointerenter', onMove)
    el.addEventListener('pointermove', onMove)
    return () => {
      el.removeEventListener('pointerenter', onMove)
      el.removeEventListener('pointermove', onMove)
    }
  }, []) 

  return pos
}