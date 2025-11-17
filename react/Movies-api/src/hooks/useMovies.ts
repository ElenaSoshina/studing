import { useEffect, useRef, useReducer } from "react"
import type { Movie } from "../types/movie"
import useDebounce from "./useDebounce"

type Options = { baseUrl?: string; debounceMs?: number }

type Idle = { status: 'idle' }
type Loading = { status: 'loading' }
type Success = { status: 'success'; movies: Movie[] }
type ErrorState = { status: 'error'; error: string }
type State = Idle | Loading | Success | ErrorState

type Action =
  | { type: 'SEARCH_START' }
  | { type: 'SEARCH_SUCCESS'; payload: Movie[] }
  | { type: 'SEARCH_ERROR'; payload: string }
  | { type: 'SEARCH_ABORTED' }

const initialState: State = { status: 'idle' }

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'SEARCH_START':
      return { status: 'loading' }
    case 'SEARCH_SUCCESS':
      return { status: 'success', movies: action.payload }
    case 'SEARCH_ERROR':
      return { status: 'error', error: action.payload }
    case 'SEARCH_ABORTED':
      return { status: 'idle' }
    default:
      return state
  }
}

export function useMovies(query: string, options: Options = {}) {
  const { baseUrl = 'http://localhost:3030', debounceMs = 300 } = options
  const [state, dispatch] = useReducer(reducer, initialState)

  const controllerRef = useRef<AbortController | null>(null)

  const runSearch = useDebounce(async (q: string) => {
    if (controllerRef.current) controllerRef.current.abort()
    const controller = new AbortController()
    controllerRef.current = controller

    dispatch({ type: 'SEARCH_START' })

    const t = q.trim()
    const url = t ? `${baseUrl}/movies?search=${encodeURIComponent(t)}` : `${baseUrl}/movies`

    try {
      const res = await fetch(url, { signal: controller.signal })
      if (!res.ok) throw new Error('Error fetching movies')
      const data: Movie[] = await res.json()
      dispatch({ type: 'SEARCH_SUCCESS', payload: data })
    } catch (error) {
      if (error instanceof Error && error.name === 'AbortError') {
        dispatch({ type: 'SEARCH_ABORTED' })
        return
      }
      const message = error instanceof Error ? error.message : 'Unknown error'
      dispatch({ type: 'SEARCH_ERROR', payload: message })
    }
  }, debounceMs, [baseUrl])

  useEffect(() => {
    runSearch(query)
    return () => { if (controllerRef.current) controllerRef.current.abort() }
  }, [query, runSearch])

  return state
}