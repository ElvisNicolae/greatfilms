import MovieDetails from './MovieDetails/MovieDetails';
import MovieCast from './MovieCast/MovieCast';
import RecommendedSlider from '../RecommendedSlider/RecommendedSlider';
import './MoviePage.scss';
import { useEffect } from 'react';
import { useLocation } from 'react-router';

const MoviePage = () => {
    const location = useLocation();

    useEffect(()=>{
        window.scrollTo(0, 0);
    },[location]);

    return (
        <div>
            <div className="MovieDetails">
                <MovieDetails />
            </div>
            <div className="MovieCast">
                <MovieCast />
            </div>
            <div className="RecommendedSlider">
                <RecommendedSlider />
            </div>
        </div>
    );
}

export default MoviePage;