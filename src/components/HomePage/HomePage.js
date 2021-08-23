import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import "./HomePage.scss";
import { fetchTopRatedMovies } from '../../actions/topRated';


const HomePage = ({ fetchTopRatedMovies, topRatedMovies}) => {
    useEffect(()=>{
        fetchTopRatedMovies();
    },[fetchTopRatedMovies]);    


    return(
        <div>
            HomePage
        </div>
    );
}

const mapStateToProps = ({topRatedMovies}) => { 
    return {
        topRatedMovies
    }
}

export default connect(mapStateToProps, {
    fetchTopRatedMovies
})(HomePage);