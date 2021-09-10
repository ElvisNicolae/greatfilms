import { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchTrendingMovies} from '../../actions/trending';
import { resetAction } from '../../actions/resetAction';
import MovieList from '../MovieList/MovieList';
import './TrendingPage.scss';
import { useLocation } from 'react-router';

const TrendingPage = ({fetchTrendingMovies, trendingMovies, resetAction}) => {
    useEffect(()=>{
        fetchTrendingMovies();

        return () => {
            resetAction();
        }
    },[fetchTrendingMovies, resetAction]);  

    const location = useLocation();

    useEffect(()=>{
        window.scrollTo(0, 0);
    },[location]);

    const fetchNewPage = (page) => {
        fetchTrendingMovies(page);
    }

    return (
        <div>
            <MovieList 
                title={"Trending This Week"}
                movies={trendingMovies}
                fetchNewPage={fetchNewPage}
            />
        </div>
    );
}

const mapStateToProps = ({trendingMovies}) => { 
    return {
        trendingMovies
    }
}

export default connect(
    mapStateToProps,
    {
        fetchTrendingMovies,
        resetAction
    }
)(TrendingPage);