import MovieDetails from './MovieDetails/MovieDetails';
import './MoviePage.scss';

const MoviePage = ({getMovie, movie}) => {

    return (
        <div>
            <MovieDetails />
        </div>
    );
}

export default MoviePage;