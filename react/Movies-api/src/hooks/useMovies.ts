import { useEffect, useRef, useReducer } from "react"
import type { Movie } from "../types/movie"

type Options = {
    baseUrl?: string
    debounceMs?: number
}

type State = {
    status: 'idle' | 'loading' | 'error' | 'success'
    movies: Movie[]
    error: string | null
}

type Action =
  | { type: 'SEARCH_START' }
  | { type: 'SEARCH_SUCCESS'; payload: Movie[] }
  | { type: 'SEARCH_ERROR'; payload: string }
  | { type: 'SEARCH_ABORTED' }

const initialState: State = {
    status: 'idle',
    movies: [],
    error: null
}

function reducer(state: State, action: Action): State {
    switch (action.type) {
        case 'SEARCH_START': 
            return {...state, status: 'loading', error: null}
        case 'SEARCH_SUCCESS':
            return {status: 'success', movies: action.payload, error: null}
        case 'SEARCH_ERROR':
            return {...state, status: 'error', error: action.payload}
        case 'SEARCH_ABORTED': 
            return {...state, status: 'idle'}
        default:
            return state
    }
}

export function useMovies  (query: string, options: Options = {})  {
    const { baseUrl = 'http://localhost:3030', debounceMs = 300 } = options;

    const [state, dispatch] = useReducer(reducer, initialState)

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

            dispatch({type: 'SEARCH_START'})

            const q = query.trim()
            const url = q ? `${baseUrl}/movies?search=${encodeURIComponent(q)}` : `${baseUrl}/movies`

            const fetchData = async () => {
                try {
                    const res = await fetch(url, {signal: controller.signal})
                    if (!res.ok) {
                        throw new Error('Error fetching movies')
                    }
                    const data: Movie[] = await res.json()
                    dispatch({type: 'SEARCH_SUCCESS', payload: data})
                } catch (error) {
                    if (error instanceof Error && error.name === 'AbortError') {
                        dispatch({ type: 'SEARCH_ABORTED' })
                        return
                    }
                    const message = error instanceof Error ? error.message : 'Unknown error'
                    dispatch({ type: 'SEARCH_ERROR', payload: message })
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

    const { movies, error, status } = state
    const isLoading = status === 'loading'

    return {movies, isLoading, error}
}