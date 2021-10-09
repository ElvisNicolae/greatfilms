import {useState,useEffect} from 'react';
import './Slider.scss';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';

const Slider = ({sliderTitle, movies, link, fetchNewPage, stringId}) => {
    // stringId's role is to ensure that each instance
    // of the component does not interact with each other


    const [position, setPosition] = useState(0);
    const [page, setPage] = useState(2);
    const {ref, inView} = useInView();
    const movingDistance = 78; // vw
    
    // useEffect for mobile and tablet
    useEffect(()=>{
        const slider = document.querySelector(`.${stringId}`);
        let moving = false;
        let touchstartPosition;
        let currentPosition = 0;

        const touchStart = e =>{   
            moving = true; 
            touchstartPosition = e.touches[0].clientX; 

            if(currentPosition<0){
                currentPosition=0;
            }         
        }

        const touchMove = e => {
            if(moving){
                let movie = document.querySelectorAll(`.${stringId}`);
                if(currentPosition >= 0){
                    for (let i=0;i<movie.length;i++){

                        // divided by 1.4 so as not to move so many pixels
                        movie[i].style.right = `${currentPosition + (touchstartPosition-e.touches[0].clientX)/1.4}px`; 
                    }

                    currentPosition = currentPosition + (touchstartPosition-e.touches[0].clientX)/20;
                }
            }
        }     

        const touchEnd = e => {
            moving = false;
        }

        slider.addEventListener('touchstart', touchStart);
        slider.addEventListener('touchmove', touchMove);
        slider.addEventListener('touchend', touchEnd);
        
        return () => {
            slider.removeEventListener('touchstart', touchStart);
            slider.removeEventListener('touchmove', touchMove);
            slider.removeEventListener('touchend', touchEnd);
        }

    },[stringId]);
    
    //useEffect for fetching new movies
    useEffect(()=>{
        if(inView && stringId !== "recommended_movies"){
            //give some time for the animation
            setTimeout(()=>{
                fetchNewPage(page);
                setPage(page+1);
            },500)
        }
    }, [inView]);

    const handleLeft = () => {
        if(position > 0){
            setPosition(position-movingDistance);
        }
    }

    const handleRight = () => {
        setPosition(position+movingDistance);    
    }

    const renderMovies = movies.map((movie, index)=>{
        // if it is the last movie the element is observed, so that when it 
        // is visible on the screen, new movies will be fetched

        if(index===movies.length-1){
            return  <Link 
                className={`movie ${stringId}`}
                style={{
                    right: `${position}vw`
                }}
                ref={ref}
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
        }
        
        return(
            <Link 
                className={`movie ${stringId}`}
                style={{
                    right: `${position}vw`
                }} 
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

    return (
        <div className="slider-container">
            <div className="text-container">
                <Link to={link} className="slider-title">{sliderTitle.toUpperCase()}<i className="arrow right slider-title__arrow"></i> </Link>
                 
                <div className="arrows">
                    <i onClick={handleLeft} className="arrow left"></i>
                    <i onClick={handleRight} className="arrow right"></i>
                </div>
            </div>
            <div className={`slider ${stringId}`}>
                {renderMovies}
            </div>
        </div>
    );
}

export default Slider;