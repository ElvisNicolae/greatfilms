import "./WatchlistPage.scss";
import { useLocation } from 'react-router';
import { useEffect } from 'react';
import {connect} from 'react-redux';
import { getWatchlist } from '../../actions/getWatchlist';
import { resetAction } from '../../actions/resetAction';
import MovieList from "../MovieList/MovieList";

const WatchlistPage = ({getWatchlist, watchlist, resetAction}) => {
    const location = useLocation();

    useEffect(()=>{
        window.scrollTo(0, 0);
    },[location]);

    useEffect(()=>{
        getWatchlist();

        return () => {
            resetAction();
        }
    }, [getWatchlist, resetAction]);

    const fetchNewPage = (page) => {
        getWatchlist(page);
    }

    return (
        <div>
            <MovieList
                title={"Your watchlist:"}   
                movies={watchlist} 
                fetchNewPage={fetchNewPage}
            />
        </div>
    );
}

const mapStateToProps = ({watchlist}) => {
    return {
        watchlist
    }
}

export default connect(mapStateToProps, {
    getWatchlist,
    resetAction
})(WatchlistPage);