import "./RateModal.scss";
import ReactDOM from 'react-dom';
import RateStarNoFill from '../../images/RateStarNoFill.png';
import RateStarFill from '../../images/RateStarFill.png';
import { useState, useEffect } from 'react';
import themoviedb from "../../api/themoviedb";
import getCookie from "../Authentication/getCookie";
import getAccountStates from "../../actions/getAccountStates";
import { connect } from 'react-redux';
 
const RateModal = ({movieTitle, onModalClick, movieId, getAccountStates, accountStates, accountDetails}) => {
    const [fill, setFill] = useState(0); // fill on hover
    const [score, setScore] = useState(0);
    const sessionId = getCookie("sessionId");

    useEffect(()=>{
        if(accountStates.rated){
            setFill(accountStates.rated.value);
            setScore(accountStates.rated.value);
        }
    }, []);

    const onStarHover = (index) => {
        setFill(index);
    }

    const stars = [...Array(10)].map((el, index) => {
        return <img 
            className="modal__star"
            key={index}
            src={index+1 <= fill ? RateStarFill : RateStarNoFill}
            alt="star icon"
            onMouseOver={()=>{onStarHover(index+1)}}
            onClick={()=>{setScore(index+1)}}
        />
    })

    const handleRateButtonClick = async () => {
        const {data} = await themoviedb.post(`/movie/${movieId}/rating`, {
            value: score   
        }, 
        {
            params: {
                session_id: sessionId
            }
        });

        setTimeout(()=>{
            getAccountStates(movieId);
        },600); // Wait a little while for TMDB to update its database.

        onModalClick();
    }

    const handleRemoveRatingButtonClick = async () => {
        const { data } = await themoviedb.delete(`/movie/${movieId}/rating`, {
            params: {
                session_id: sessionId
            }
        })

        setTimeout(()=>{
            getAccountStates(movieId);
        },600); // Wait a little while for TMDB to update its database.

        onModalClick();
    }

    const renderIfLoggedIn = () => { 
        return (<div className="modal-elements">
            <h3 className="modal__title">RATE THIS MOVIE</h3>
            <h2 className="modal__movie-title">{movieTitle}</h2>
            <div className="modal__stars">{stars}</div>
            <div className="modal__score">{score}</div>
            <button className="modal__button" onClick={handleRateButtonClick}>Rate</button>
            {accountStates.rated ? <button 
                onClick={handleRemoveRatingButtonClick}
                className="modal__button modal__button--remove"
            >Remove Rating</button> : null }
        </div>);
    }

    return ReactDOM.createPortal(
    <div className="modal">
        <div className="modal-content">
            {accountDetails.username ? renderIfLoggedIn() : <h1 className="modal__title">To rate a movie you must be logged in.</h1> }
        </div>
        <div 
            className="modal-exit" 
            onClick={onModalClick} 
            onMouseOver={score === 0 ? ()=>{onStarHover(0)} : null}
        ></div>
        
    </div>
    ,document.querySelector("#modal-rate-movie"));
}

const mapStateToProps = ({accountStates, accountDetails}) => {
    return {
        accountStates,
        accountDetails
    }
}

export default connect(mapStateToProps, {
    getAccountStates
})(RateModal);