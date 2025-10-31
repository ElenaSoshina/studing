import { useState } from 'react'
import { useMovies } from '../../hooks/useMovies'
import Input from '../Input/Input'
import MoviesList from '../MoviesList/MoviesList'
import styles from './MovieSearch.module.css'

const MovieSearch = () => {
    const [query, setQuery] = useState('')
    const {movies, isLoading, error} = useMovies(query)
    return (
        <div style={{ maxWidth: 640, margin: '0 auto', padding: 16 }}>
            <Input value={query} onChange={setQuery} placeholder='Search movie...' />

            {isLoading && <p className={styles.status}>Loading ...</p>}
            {error && <p className={styles.error}>{error}</p>}
            {!isLoading && !error && movies.length === 0 && <p>No results</p>}
            {!isLoading && !error && movies.length > 0 && <MoviesList movies={movies} />}
        </div>
    )
}

export default MovieSearch