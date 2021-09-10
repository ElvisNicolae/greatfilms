import { useEffect } from 'react';
import { connect } from 'react-redux';
import { searchMovie} from '../../actions/searchMovie';
import { resetAction } from '../../actions/resetAction';
import MovieList from '../MovieList/MovieList';
import './SearchPage.scss';
import { useLocation } from 'react-router';

const SearchPage = ({searchMovie, searchData, searchTerm, resetAction}) => {
    useEffect(()=>{
        searchMovie(1, searchTerm);

        return () => {
            resetAction();
        }
    },[searchMovie, searchTerm, resetAction]);  

    const location = useLocation();

    useEffect(()=>{
        window.scrollTo(0, 0);
    },[location]);

    const fetchNewPage = (page) => {
        searchMovie(page, searchTerm);
    }

    return (
        <div>
            <MovieList 
                title={searchData.length === 0 ? "No movies found!" : `Search results for: ${searchTerm}`}
                movies={searchData}
                fetchNewPage={fetchNewPage}
            />
        </div>
    );
}

const mapStateToProps = ({searchTerm, searchData}) => { 
    return {
        searchTerm,
        searchData
    }
}

export default connect(
    mapStateToProps,
    {
        searchMovie,
        resetAction
    }
)(SearchPage);