import {useState, useEffect} from 'react'

export function useDelayedValue<T>(value: T, delay: number | null): T {
  const [delayed, setDelayed] = useState<T>(value)

  useEffect(() => {
    if (delay == null || delay <= 0) {
      console.log('[useDelayedValue] immediate', value)
      setDelayed(value)
      return
    }
    console.log('[useDelayedValue] schedule', delay, 'ms for', value)
    const id = window.setTimeout(() => {
      console.log('[useDelayedValue] fire', delay, 'ms for', value)
      setDelayed(value)
    }, delay)
    return () => {
      console.log('[useDelayedValue] cleanup', delay)
      window.clearTimeout(id)
    }
  }, [value, delay])

  return delayed
}