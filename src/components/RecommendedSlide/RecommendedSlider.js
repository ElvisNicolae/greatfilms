import './RecommendedSlider.scss';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { getRecommended} from '../../actions/getRecommended';
import { resetAction } from '../../actions/resetAction';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const RecommendedMovies = ({ getRecommended, recommendedMovies, resetAction}) =>{
    const {id} = useParams();
    
    useEffect(()=>{
        getRecommended(id);

        return () => {
            resetAction();
        }
    },[getRecommended, resetAction, id]);  

    if(recommendedMovies.length === 0){
        return null;
    }

    const renderMovies = recommendedMovies.map((movie)=>{     
        return(
            <Link 
                className={`movie`}
                key={movie.id} 
                to={`/movie/${movie.id}`}
            >              
                <img className="movie__poster" src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt={`${movie.title}'s poster`} />
                <h4 className="movie__title">{movie.title}</h4>
                <p className="movie__release-date">{movie.release_date}</p>
                <div className="movie__rating-container">
                    <h4 className="movie__rating">{movie.vote_average.toString().substring(0,3)}</h4>
                </div>
            </Link>
        )
    })
    
    return(
        <div className="recommended-movies">
            <h1 className="recommended-movies__title">Recommended Movies</h1>
            <hr className="recommended-movies__hr"/>
            <div className="recommended-movies__movies">
                {renderMovies}
            </div>
        </div>
    );

}

const mapStateToProps = ({recommendedMovies}) => { 
    return {
        recommendedMovies
    }
}

export default connect(
    mapStateToProps,
    {
        getRecommended,
        resetAction
    }
)(RecommendedMovies);