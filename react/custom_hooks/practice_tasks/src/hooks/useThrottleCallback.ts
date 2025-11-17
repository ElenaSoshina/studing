import { type DependencyList, useRef, useEffect, useCallback } from "react"
type AnyFn = (...args: any[]) => any

function useThrottleCallback<T extends AnyFn>(cb: T, delay: number, deps: DependencyList): T {
    const cbRef = useRef(cb)

    useEffect(() => {cbRef.current = cb}, [cb])

    const lastCallRef = useRef(0)
    const timeoutRef = useRef<number | null>(null)
    const lastArgsRef = useRef<Parameters<T> | null>(null)

    useEffect(() => {
        return () => {
            if (timeoutRef.current != null) {
                clearTimeout(timeoutRef.current)
                timeoutRef.current = null
            }
        }
    }, [delay, ...deps])

    const throttled = useCallback((...args: Parameters<T>) => {
        const now = Date.now()
        const remaining = delay - (now - lastCallRef.current)

        if (remaining <= 0) {
            if (timeoutRef.current != null) {
                clearTimeout(timeoutRef.current)
                timeoutRef.current = null
            }
            lastCallRef.current = now
            cbRef.current(...args)
        } else {
            lastArgsRef.current = args
            if (timeoutRef.current == null) {
                timeoutRef.current = window.setTimeout(() => {
                    timeoutRef.current = null
                    lastCallRef.current = Date.now()
                    const a = lastArgsRef.current
                    lastArgsRef.current = null
                    if (a) cbRef.current(...a)
                }, remaining)
            }
        }
    }, [delay, ...deps])

    return throttled as T
}

export default useThrottleCallback