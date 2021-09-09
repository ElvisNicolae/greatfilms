import { useEffect } from 'react';
import { connect } from 'react-redux';
import { upcomingMovies } from '../../actions/upcoming';
import { resetAction } from '../../actions/resetAction';
import MovieList from '../MovieList/MovieList';
import './UpcomingPage.scss';
import { useLocation } from 'react-router';

const UpcomingPage = ({upcomingMovies, upcomingMoviesState, resetAction}) => {
    useEffect(()=>{
        upcomingMovies();

        return () => {
            resetAction();
        }
    },[upcomingMovies, resetAction]);  

    const location = useLocation();

    useEffect(()=>{
        window.scrollTo(0, 0);
    },[location]);

    const fetchNewPage = (page) => {
        upcomingMovies(page);
    }

    return (
        <div>
            <MovieList 
                title={"Upcoming Movies"}
                movies={upcomingMoviesState}
                fetchNewPage={fetchNewPage}
            />
        </div>
    );
}

const mapStateToProps = ({upcomingMovies}) => { 
    return {
        upcomingMoviesState: upcomingMovies
    }
}

export default connect(
    mapStateToProps,
    {
        upcomingMovies,
        resetAction
    }
)(UpcomingPage);