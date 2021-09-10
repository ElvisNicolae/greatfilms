import { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchTopRatedMovies} from '../../actions/topRated';
import { resetAction } from '../../actions/resetAction';
import MovieList from '../MovieList/MovieList';
import './TopRatedPage.scss';
import { useLocation } from 'react-router';

const TopRatedPage = ({fetchTopRatedMovies, topRatedMovies, resetAction}) => {
    useEffect(()=>{
        fetchTopRatedMovies();

        return () => {
            resetAction();
        }
    },[fetchTopRatedMovies, resetAction]);  

    const location = useLocation();

    useEffect(()=>{
        window.scrollTo(0, 0);
    },[location]);

    const fetchNewPage = (page) => {
        fetchTopRatedMovies(page);
    }

    return (
        <div>
            <MovieList 
                title={"Top Rated Movies"}
                movies={topRatedMovies}
                fetchNewPage={fetchNewPage}
            />
        </div>
    );
}

const mapStateToProps = ({topRatedMovies}) => { 
    return {
        topRatedMovies
    }
}

export default connect(
    mapStateToProps,
    {
        fetchTopRatedMovies,
        resetAction
    }
)(TopRatedPage);