import MovieDetails from './MovieDetails/MovieDetails';
import MovieCast from './MovieCast/MovieCast';
import './MoviePage.scss';

const MoviePage = () => {

    return (
        <div>
            <div className="MovieDetails">
                <MovieDetails />
            </div>
            <div className="MovieCast">
                <MovieCast />
            </div>
        </div>
    );
}

export default MoviePage;