import MovieDetails from './MovieDetails/MovieDetails';
import MovieCast from './MovieCast/MovieCast';
import './MoviePage.scss';

const MoviePage = () => {

    return (
        <div>
            <MovieDetails />
            <MovieCast />
        </div>
    );
}

export default MoviePage;