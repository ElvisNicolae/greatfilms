import "./WatchlistPage.scss";
import { useLocation } from 'react-router';
import { useEffect } from 'react';
import {connect} from 'react-redux';
import { getWatchlist } from '../../actions/getWatchlist';
import { resetAction } from '../../actions/resetAction';
import MovieList from "../MovieList/MovieList";

const WatchlistPage = ({getWatchlist, watchlist, resetAction, accountDetails}) => {
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
            {!accountDetails.username 
                ? <h1>You must be signed into your account to view your watchlist</h1> 
                : <MovieList
                title={"Your watchlist:"}   
                movies={watchlist} 
                fetchNewPage={fetchNewPage}
            />}
        </div>
    );
}

const mapStateToProps = ({watchlist, accountDetails}) => {
    return {
        watchlist,
        accountDetails
    }
}

export default connect(mapStateToProps, {
    getWatchlist,
    resetAction
})(WatchlistPage);