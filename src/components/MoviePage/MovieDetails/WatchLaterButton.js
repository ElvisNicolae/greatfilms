import React, { useState } from "react";
import { connect } from 'react-redux';
import WatchLaterIcon from '../../../images/WatchLaterIcon.png';
import okIcon from '../../../images/okIcon.png';
import themoviedb from "../../../api/themoviedb";
import getCookie from "../../Authentication/getCookie";
import getAccountStates from "../../../actions/getAccountStates";
import { Link } from "react-router-dom";

const WatchLaterButton = ({movieId, accountStates, accountDetails, getAccountStates}) => {
    const sessionId = getCookie("sessionId");
    const [mustLoginVisible, setMustLoginVisible ] = useState(false);

    const handleWatchLaterBtnClicked = async () => {
        let addOrRemove = accountStates.watchlist ? false : true; // true for add and false for remove

        await themoviedb.post(`/account/${accountDetails.id}/watchlist`, {
            media_type: "movie",
            media_id: movieId,
            watchlist: addOrRemove
        }, 
        {
            params: {
                session_id: sessionId
            }
        })

        setTimeout(()=>{
            getAccountStates(movieId);
        },500); // Wait a little while for TMDB to update its database.
    }

    const handleBtnClickedLoggedOut = () => {
        setMustLoginVisible(true);

        setTimeout(()=>{
            setMustLoginVisible(false);
        }, 2100) // after 2.1s message disappears
    }
    
    return (
        <div className="watch-later" onClick={accountDetails.username ? handleWatchLaterBtnClicked : handleBtnClickedLoggedOut}>
            <img 
                className="watch-later__icon" 
                src={accountStates.watchlist ? okIcon : WatchLaterIcon} 
                alt="Watch Later Icon" 
            />
            <h3 className="watch-later__text">Watch Later</h3>
            {accountDetails.username ? null : <Link 
                to="/login"
                className={"watch-later__logged-in"}
                style={{display: mustLoginVisible ? "inline-block" : "none"}}
            > You must be logged in.</Link> }
        </div>
    )
};

const mapStateToProps = ({accountStates, accountDetails}) => {
    return {
        accountStates,
        accountDetails
    }
}

export default connect(mapStateToProps, {getAccountStates})(WatchLaterButton);