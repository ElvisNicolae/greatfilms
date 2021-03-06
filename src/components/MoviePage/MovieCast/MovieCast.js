import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from 'react-router-dom';
import './MovieCast.scss';
import { getCast } from '../../../actions/getCast';
import { Link } from "react-router-dom";

const MovieCast = ({getCast, movieCast}) => {
    const {id} = useParams();

    useEffect(()=>{
        getCast(id);
    },[getCast, id])

    // if data is loading
    if(!movieCast.id){
        return <div className="fake-movie-cast"></div>;
    }
    else {

        let castImageHelper = 9;

        const renderMovieCast = movieCast.cast.map( (actor, index) => {
            //render only 10 actors
            if(index > castImageHelper){
                return null;
            }

            // if the current 'actor' does not have a 
            // profile image show the next one
            if(actor.profile_path == null) {
                castImageHelper++;
                return null;
            }

            return (
                <Link 
                    to={`/people/${actor.id}`}
                    key={actor.id}
                >
                    <div key={actor.id} className="cast-profile">  
                        <img 
                            src={`https://image.tmdb.org/t/p/w200/${actor.profile_path}`} 
                            alt={`${actor.name}'s profile`} 
                            className="cast-profile__image" 
                        />
                        <div className="cast-profile__names">
                            <h2 className="cast-profile__actor-name">{actor.name}</h2>
                            <p className="cast-profile__actor-role">{actor.character}</p>
                        </div>
                    </div>
                </Link>
            );
        })

        return (
            <div className="movie-cast">
                <div className="movie-cast__container">
                    <h1 className="top-billed-cast">Top Billed Cast</h1>
                    <div className="cast-profiles">
                        {renderMovieCast}
                    </div>
                </div>
            </div>
        );
    }

    
}

const mapStateToProps = ({movieCast}) => {

    return {
        movieCast
    }
}

export default connect(mapStateToProps, {getCast})(MovieCast);