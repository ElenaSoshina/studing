import type { Movie } from '../../types/movie'
import MovieItem from '../MovieItem/MovieItem'
import styles from './MoviesList.module.css'

type MoviesListProps = {
    movies: Movie[]
}

const MoviesList = ({movies}: MoviesListProps) => {
    return (
       <ul className={styles.list}>
        {movies.map((movie) => (
            <MovieItem key={movie.id} movie={movie} />
        ))}
       </ul>
    )
}

export default MoviesList