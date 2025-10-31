import type { Movie } from '../../types/movie'
import styles from './MovieItem.module.css'

type MovieItemProps = {
    movie: Movie
}

const MovieItem = ({movie}: MovieItemProps) => {
    return (
        <li className={styles.item}>
            {movie.title}
        </li>
    )
}

export default MovieItem