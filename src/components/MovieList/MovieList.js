import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './MovieList.scss';
import { useInView } from 'react-intersection-observer';

const MovieList = ({title, movies, fetchNewPage}) => {
    const [page, setPage] = useState(2);
    const {ref, inView} = useInView();

    useEffect(()=>{
        console.log('hello');

        if(inView){
            fetchNewPage(page);
            setPage(page+1);
        }
    }, [inView]);

    const renderList = movies.map((movie, index) => {
        if(index === movies.length-1){
            return (<React.Fragment key={movie.id}>
                <Link 
                    ref={ref}
                    className="movie"
                    to={`/movie/${movie.id}`}
                >              
                    <img className="movie__poster" src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt={`${movie.title}'s poster`} />
                    <div className="movie__content">
                        <h4 className="movie__title">{index+1}. {movie.title} <span className="movie-title__original-title">({movie.original_title})</span></h4>
                        <p className="movie__release-date">{movie.release_date}</p>
                        <p className="movie__overview">{movie.overview}</p>
                    </div>
                    <div className="movie__rating-container">
                        <h4 className="movie__rating">{movie.vote_average.toString().substring(0,3)}</h4>
                    </div>
                </Link>
                <hr className="movie-hr"/>
            </React.Fragment>);
        }

        return (
            <React.Fragment key={movie.id}>
                <Link 
                    className="movie"
                    to={`/movie/${movie.id}`}
                >              
                    <img className="movie__poster" src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt={`${movie.title}'s poster`} />
                    <div className="movie__content">
                        <h4 className="movie__title">{index+1}. {movie.title} <span className="movie-title__original-title">({movie.original_title})</span></h4>
                        <p className="movie__release-date">{movie.release_date}</p>
                        <p className="movie__overview">{movie.overview}</p>
                    </div>
                    <div className="movie__rating-container">
                        <h4 className="movie__rating">{movie.vote_average.toString().substring(0,3)}</h4>
                    </div>
                </Link>
                <hr className="movie-hr"/>
            </React.Fragment>
        );
    });

    return (
        <div className="movie-list">
            <div className="movie-list__content">
                <h1 className="list-title">
                    {title}
                    <hr className="list-title__hr" />
                </h1>
                
                <div className="movies">
                    {renderList}
                </div>
            </div>
        </div>
    );
}

export default MovieList;