import {useState,useEffect} from 'react';
import './Slider.scss';
import { Link } from 'react-router-dom';
import { useInView, observe  } from 'react-intersection-observer';

const Slider = ({sliderTitle, movies, link, fetchNewPage}) => {
    const [position, setPosition] = useState(0);
    const [page, setPage] = useState(2);
    const {ref, inView} = useInView();
    const movingDistance = 1430;

    useEffect(()=>{
        if(inView){

            //give some time for the animation
            setTimeout(()=>{
                fetchNewPage(page);
                setPage(page+1);
            },700)

            console.log('fired');
        }
    }, [inView]);

    const renderMovies = movies.map((movie, index)=>{

        // if it is the last movie the element is observed
        if(index==movies.length-1){
            return <div 
                key={movie.id} 
                className="movie"
                style={{
                    right: `${position}px`
                }}
                ref={ref}
            >
                <img className="movie__poster" src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt={`${movie.title}'s poster`} />
                <h4 className="movie__title">{movie.title}</h4>
                <p className="movie__release-date">{movie.release_date}</p>
                <div className="movie__rating-container">
                    <h4 className="movie__rating">{movie.vote_average}</h4>
                </div>
            </div>
        }
        
        return(
            <div 
                key={movie.id} 
                className="movie"
                style={{
                    right: `${position}px`
                }}
            >
                <img className="movie__poster" src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt={`${movie.title}'s poster`} />
                <h4 className="movie__title">{movie.title}</h4>
                <p className="movie__release-date">{movie.release_date}</p>
                <div className="movie__rating-container">
                    <h4 className="movie__rating">{movie.vote_average}</h4>
                </div>
            </div>
        )
    })

    const handleLeft = () => {
        if(position > 0){
            setPosition(position-movingDistance);
        }
    }

    const handleRight = () => {
        setPosition(position+movingDistance);    
    }

    return (
        <div className="slider-container">
            <div className="text-container">
                <Link to={link} className="slider-title">{sliderTitle.toUpperCase()}<i className="arrow right slider-title__arrow"></i> </Link>
                 
                <div className="arrows">
                    <i onClick={handleLeft} className="arrow left"></i>
                    <i onClick={handleRight} className="arrow right"></i>
                </div>
            </div>
            <div className="slider">
                {renderMovies}
            </div>
        </div>
    );
}

export default Slider;