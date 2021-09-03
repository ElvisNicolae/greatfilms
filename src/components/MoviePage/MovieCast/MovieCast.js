import { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from 'react-router-dom';
import './MovieCast.scss';
import { getCast } from '../../../actions/getCast';

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

        const renderMovieCast = movieCast.cast.map( (actor, index) => {
            //render only the first 10 actors
            if(index > 9){
                return null;
            }

            return (
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