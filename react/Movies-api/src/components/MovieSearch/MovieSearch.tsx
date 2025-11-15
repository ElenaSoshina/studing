import { useState } from 'react'
import { useMovies } from '../../hooks/useMovies'
import Input from '../Input/Input'
import MoviesList from '../MoviesList/MoviesList'
import styles from './MovieSearch.module.css'

const MovieSearch = () => {
    const [query, setQuery] = useState('')
    const state = useMovies(query)
    return (
        <div style={{ maxWidth: 640, margin: '0 auto', padding: 16 }}>
            <Input value={query} onChange={setQuery} placeholder='Search movie...' />

            {state.status === 'loading' && <p className={styles.status}>Loading ...</p>}
            {state.status === 'error' && <p className={styles.error}>{state.error}</p>}
            {state.status === 'success' && state.movies.length === 0 && <p>No results</p>}
            {state.status === 'success' && state.movies.length > 0 && <MoviesList movies={state.movies} />}
        </div>
    )
}

export default MovieSearch