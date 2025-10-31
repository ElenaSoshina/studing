import { useEffect, useState, useRef } from "react"
import type { Movie } from "../types/movie"

type Options = {
    baseUrl?: string
    debounceMs?: number
}

export function useMovies  (query: string, options: Options = {})  {
    const { baseUrl = 'http://localhost:3030', debounceMs = 300 } = options;

    const [movies, setMovies] = useState<Movie[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    const controllerRef = useRef<AbortController | null>(null)
    const timerRef = useRef<number | null>(null)

    useEffect(() => {
        if (timerRef.current) {
            window.clearTimeout(timerRef.current)
        }
        timerRef.current = window.setTimeout(() => {
            if (controllerRef.current) {
                controllerRef.current.abort()
            }
            const controller = new AbortController()
            controllerRef.current = controller

            setIsLoading(true)
            setError(null)

            const q = query.trim()
            const url = q ? `${baseUrl}/movies?search=${encodeURIComponent(q)}` : `${baseUrl}/movies`

            const fetchData = async () => {
                try {
                    const res = await fetch(url, {signal: controller.signal})
                    if (!res.ok) {
                        throw new Error('Error fetching movies')
                    }
                    const data: Movie[] = await res.json()
                    setMovies(data)
                } catch (error) {
                    if (error instanceof Error && error.name !== 'AbortError') {
                        setError(error.message)
                    }
                } finally {
                    setIsLoading(false)
                }
            }
            fetchData()
        }, debounceMs)

        return () => {
            if (timerRef.current) {
                window.clearTimeout(timerRef.current)
            }
            if (controllerRef.current) {
                controllerRef.current.abort()
            }
        }
    }, [query, baseUrl, debounceMs])

    return {movies, isLoading, error}
}