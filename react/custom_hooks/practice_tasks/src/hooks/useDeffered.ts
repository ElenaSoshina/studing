import { useRef, useCallback } from "react"
function useDeferred<T = void> () {
    const resolveRef = useRef<((value: T) => void) | null>(null)
    const promiseRef = useRef<Promise<T> | null>(null)

    if (promiseRef.current === null) {
        promiseRef.current = new Promise<T>((res) => {
            resolveRef.current = res
        })
    }

    const resolveDeferred = useCallback((value: T) => {
        if (resolveRef.current) {
            resolveRef.current(value)
            resolveRef.current = null
        }
    }, [])

    return [promiseRef.current, resolveDeferred] as const
}

export default useDeferred