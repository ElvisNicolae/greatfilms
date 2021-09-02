import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { getMovie } from '../../../actions/getMovie';
import './MovieDetails.scss';
import WatchLaterIcon from '../../../images/WatchLaterIcon.png';

const MovieDetails = ({getMovie, movie}) => {
    let {id} = useParams();

    useEffect(()=>{
        getMovie(id);
    },[getMovie, id]);

    if(!movie.title){
        return <div className="movie-loading">Loading...</div>
    }
    else {
        const movieGenres = movie.genres.map((genre, index) =>{
            if(index === movie.genres.length-1){
                return <span key={genre.id}>{genre.name}</span>
            }
            return <span key={genre.id}> {genre.name}, </span>
        })

        return (
            <div>
                <div className="movie-container">
                    <div className="movie-container__content">
                        <img className="movie-poster" src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt={`${movie.title}'s poster`} />
                        
                        <div className="movie-details">
                            <h1 className="movie-title">
                                {movie.title} <span className="movie-title__span">({movie.release_date})</span>
                            </h1>

                            <h3 className="movie-genre-and-duration">
                                {movieGenres}
                            </h3>

                            <div className="movie-actions">
                                <div className="movie-rating">
                                    <div className="user-rating-container">
                                        <div className="user-rating">
                                            <h4 className="user-rating__rating">{movie.vote_average}</h4>
                                        </div>
                                        <p className="user-rating-user-rating">User Rating</p>
                                    </div>

                                    <div className="your-rating-description">Your Rating</div>
                                    <h2 className="your-rating">0</h2>
                                </div>

                                <div className="watch-later">
                                    <img className="watch-later__icon" src={WatchLaterIcon} alt="Watch Later Icon" />
                                    <h3 className="watch-later__text">Watch Later</h3>
                                </div>

                                <div className="list">
                                    <h2 className="list-text">LIST</h2>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="backdrop-img" style={{backgroundImage: `url(${`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`})`}} >
                        <div className="backdrop"></div>
                    </div>
                </div>

                

                <div className="cast-container">
                    
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({movie}) => {
    return {
        movie
    }
}

export default connect(mapStateToProps, { getMovie })(MovieDetails);