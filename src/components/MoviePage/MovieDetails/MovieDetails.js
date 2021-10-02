import React, {useState} from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { getMovie } from '../../../actions/getMovie';
import './MovieDetails.scss';
import WatchLaterButton from './WatchLaterButton';
import listIcon from '../../../images/listIcon.png';
import RateModal from '../../Modals/RateModal';
import RateStarFill from '../../../images/RateStarFill.png';
import getAccountStates from '../../../actions/getAccountStates';
import ListModal from '../../Modals/ListModal';
import TrailerModal from '../../Modals/TrailerModal';
import { Link } from 'react-router-dom';

const MovieDetails = ({getMovie, movie, getAccountStates, accountStates, accountDetails}) => {
    const [rateModalVisible, setRateModalVisible] = useState(false);
    const [listModalVisible, setListModalVisible] = useState(false);
    const [trailerModalVisible, setTrailerModalVisible] = useState(false);

    const [mustLoginVisible, setMustLoginVisible ] = useState(false);
    const {id} = useParams();

    useEffect(()=>{
        getMovie(id);
    },[getMovie, id]);

    useEffect(()=>{
        getAccountStates(id);
    },[getAccountStates, id]);

    const onRateClick = () => {
        setRateModalVisible(!rateModalVisible);
        document.querySelector("body").style.overflowY = rateModalVisible ? "visible" : "hidden";
    }
    
    const onListClick = () => {
        setListModalVisible(!listModalVisible);
        document.querySelector("body").style.overflowY = listModalVisible ? "visible" : "hidden";
    }

    const onPosterClick = () => {
        setTrailerModalVisible(!trailerModalVisible);
        document.querySelector("body").style.overflowY = trailerModalVisible ? "visible" : "hidden";
    }

    // if data is loading
    if(!movie.title){
        return <div className="movie-loading">Loading...</div>
    }
    else {
        const handleBtnClickedLoggedOut = () => {
            setMustLoginVisible(true);
    
            setTimeout(()=>{
                setMustLoginVisible(false);
            }, 2100) // after 2.1s message disappears
        }

        const movieGenres = movie.genres.map((genre, index) =>{
            if(index === movie.genres.length-1){
                return <span key={genre.id}>{genre.name}</span>
            }
            return <span key={genre.id}> {genre.name}, </span>
        })

        const budget = movie.budget === 0 ? "No data" : `$${new Intl.NumberFormat().format(movie.budget)}`;
        const revenue = movie.revenue === 0 ? "No data" : `$${new Intl.NumberFormat().format(movie.revenue)}`;
        let hours = 0;
        let minutes = movie.runtime;

        while(minutes > 60){
            hours++;
            minutes = minutes - 60;
        }

        return (
            <div>
                <div className="movie-container">
                    <div className="movie-container__content">
                        <div className="movie-poster-container" onClick={onPosterClick}>
                            <img 
                                className="movie-poster" 
                                src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} 
                                alt={`${movie.title}'s poster`}
                            />
                            <h3 className="movie-poster-container__trailer-text">Watch Trailer</h3>
                        </div>
                        
                        <div className="movie-details">
                            <h1 className="movie-title">
                                {movie.title} <span className="movie-title__span">({movie.release_date})</span>
                            </h1>

                            <h3 className="movie-genre-and-duration">
                                {movieGenres} &#9679; {hours === 0 ? null : `${hours}h`} {minutes === 0 ? null : `${minutes}m`}
                            </h3>

                            <div className="movie-actions">
                                <div className="movie-rating">
                                    <div className="user-rating-container">
                                        <div className="user-rating">
                                            <h4 className="user-rating__rating">{movie.vote_average}</h4>
                                        </div>
                                        <div className="user-rating-count">{new Intl.NumberFormat().format(movie.vote_count)} Ratings</div>
                                        <p className="user-rating-user-rating">User Rating</p>
                                    </div>
                                    
                                    <div className="your-rating-container" onClick={onRateClick}>
                                        <div className="your-rating-description">Your Rating</div>
                                        <h2 className="your-rating">{accountStates.rated ? accountStates.rated.value : 0}</h2>
                                        <img className="your-rating--star" src={RateStarFill} alt="star" />
                                    </div>
                                </div>

                                
                                <WatchLaterButton movieId={movie.id}/>
                                

                                <div className="list" onClick={accountDetails.username ? onListClick : handleBtnClickedLoggedOut}>
                                    <img 
                                        src={listIcon} 
                                        alt="list icon" 
                                        className="list__img" 
                                    />  
                                    <h2 className="list__text">LIST</h2>
                                    {accountDetails.username ? null : <Link 
                                        to="/login"
                                        className={"watch-later__logged-in"}
                                        style={{display: mustLoginVisible ? "inline-block" : "none"}}
                                    > You must be logged in.</Link> }
                                </div>
                            </div>

                            <div className="overview">
                                <h2 className="overview__title">Overview</h2>
                                <p className="overview__description">{movie.overview}</p>
                            </div>

                            <div className="money">
                                <div className="budget">
                                    <h2 className="budget__title">Budget</h2>
                                    <p className="">{budget}</p>
                                </div>
                                <div className="revenue">
                                    <h2 className="revenue__title">Revenue</h2>
                                    <p className="">{revenue}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="backdrop-img" style={{backgroundImage: `url(${`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`})`}} >
                        <div className="backdrop"></div>
                    </div>
                </div>
                {rateModalVisible ? <RateModal movieTitle={movie.title} movieId={movie.id} onModalClick={onRateClick}/> : null}
                {listModalVisible ? <ListModal movie={movie} onModalClick={onListClick}/> : null}
                {trailerModalVisible ? <TrailerModal onModalClick={onPosterClick} movie={movie}/> : null}
            </div>
        );
    }
}

const mapStateToProps = ({movie, accountStates, accountDetails}) => {
    return {
        movie,
        accountStates,
        accountDetails
    }
}

export default connect(mapStateToProps, {
    getMovie,
    getAccountStates 
})(MovieDetails);