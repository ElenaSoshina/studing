import { useCallback, useEffect, useRef, type DependencyList } from 'react'

type AnyFn = (...args: any[]) => any

export default function useDebounce<T extends AnyFn>(
  cb: T,
  delay: number,
  deps: DependencyList = []
): T {
  const cbRef = useRef(cb)
  useEffect(() => { cbRef.current = cb }, [cb])

  const timerRef = useRef<number | null>(null)
  useEffect(() => () => {
    if (timerRef.current != null) {
      clearTimeout(timerRef.current)
      timerRef.current = null
    }
  }, [delay, ...deps])

  const debounced = useCallback((...args: Parameters<T>) => {
    if (timerRef.current != null) clearTimeout(timerRef.current)
    timerRef.current = window.setTimeout(() => {
      cbRef.current(...args as any)
    }, delay)
  }, [delay, ...deps]) as T

  return debounced
}