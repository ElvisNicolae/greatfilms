import { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchTrendingMovies } from '../../actions/trending';
import "./TrendingMoviesSlide.scss";
import Slider from '../Slider/Slider';

const TrendingMoviesSlide = ({ fetchTrendingMovies, trendingMovies}) =>{
    useEffect(()=>{
        fetchTrendingMovies();
    },[fetchTrendingMovies]);  

    const fetchNewPage = (page) => {
        fetchTrendingMovies(page);
    }

    return(
        <div>
            <Slider 
                sliderTitle="Trending Movies" 
                movies={trendingMovies} 
                link={"/top/rated"}
                fetchNewPage={fetchNewPage}
            />
        </div>
    );

}

const mapStateToProps = ({trendingMovies}) => { 
    return {
        trendingMovies
    }
}

export default connect(
    mapStateToProps,
    {
        fetchTrendingMovies
    }
)(TrendingMoviesSlide);