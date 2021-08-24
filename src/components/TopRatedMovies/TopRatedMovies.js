import { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchTopRatedMovies } from '../../actions/topRated';
import "./TopRatedMovies.scss";
import Slider from '../Slider/Slider';

const TopRatedMovies = ({ fetchTopRatedMovies, topRatedMovies}) =>{
    useEffect(()=>{
        fetchTopRatedMovies();
    },[fetchTopRatedMovies]);  

    const fetchNewPage = (page) => {
        fetchTopRatedMovies(page);
    }

    return(
        <div>
            <Slider 
                sliderTitle="Top Rated Movies" 
                movies={topRatedMovies} 
                link={"/top/rated"}
                fetchNewPage={fetchNewPage}
            />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
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
        fetchTopRatedMovies
    }
)(TopRatedMovies);