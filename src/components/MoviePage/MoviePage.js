import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { getMovie } from '../../actions/getMovie';
import './MoviePage.scss';

const MoviePage = ({getMovie, movie}) => {
    let {id} = useParams();

    useEffect(()=>{
        getMovie(id);
    },[getMovie, id]);

    return (
        <div>
            <div className="movie-container">
                <div className="movie-container__content">
                    <img className="movie-poster" src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt={`${movie.title}'s poster`} />
                    <div className="movie-details">
                        <h1 className="movie-title">
                            {movie.title} <span className="movie-title__span">({movie.release_date})</span>
                        </h1>
                    </div>
                </div>
                <div className="backdrop-img" style={{backgroundImage: `url(${`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`})`}} >
                    <div className="backdrop">
                    </div>
                </div>
            </div>

            

            <div className="cast-container">
                
            </div>
        </div>
    );
}

const mapStateToProps = ({movie}) => {
    console.log(movie);

    return {
        movie
    }
}

export default connect(mapStateToProps, { getMovie })(MoviePage);