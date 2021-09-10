import { useEffect } from 'react';
import { upcomingMovies } from '../../actions/upcoming';
import { connect } from 'react-redux';
import Slider from '../Slider/Slider';
import './UpcomingMoviesSlider.scss';

const UpcomingMoviesSlider = ( {upcomingMovies, storeUpcomingMovies}) => {
    useEffect(()=>{
        upcomingMovies();
    },[upcomingMovies]);

    const fetchNewPage = (page) => {
        upcomingMovies(page); 
    }

    return(
        <div>
            <Slider 
                sliderTitle = {"Upcoming Movies"}
                movies={storeUpcomingMovies}
                link={"/movies/upcoming"}
                sliderId={"upcoming_movies"}
                fetchNewPage={fetchNewPage}
            />
        </div>
    );
}

const mapStateToProps = ({upcomingMovies}) => {
    return {
        storeUpcomingMovies: upcomingMovies
    }
}

export default connect(mapStateToProps, { upcomingMovies })(UpcomingMoviesSlider);
