import { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchTopRatedMovies} from '../../actions/topRated';
import { resetAction } from '../../actions/resetAction';
import "./TopRatedMoviesSlide.scss";
import Slider from '../Slider/Slider';

const TopRatedMovies = ({ fetchTopRatedMovies, topRatedMovies, resetAction}) =>{
    useEffect(()=>{
        fetchTopRatedMovies();

        return () => {
            resetAction();
        }
    },[fetchTopRatedMovies, resetAction]);  

    const fetchNewPage = (page) => {
        fetchTopRatedMovies(page);
    }

    return(
        <div>
            <Slider 
                sliderTitle="Top Rated Movies" 
                movies={topRatedMovies} 
                link={"/movies/top-rated"}
                fetchNewPage={fetchNewPage}
                stringId={"top_rated_movies"}
            />
        </div>
    );

}

const mapStateToProps = ({topRatedMovies}) => { 
    return {
        topRatedMovies
    }
}

export default connect(
    mapStateToProps,
    {
        fetchTopRatedMovies,
        resetAction
    }
)(TopRatedMovies);