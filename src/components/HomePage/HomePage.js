import "./HomePage.scss";
import TopRatedMovies from '../TopRatedMoviesSlide/TopRatedMoviesSlide';
import TrendingMoviesSlide from '../TrendingMoviesSlide/TrendingMoviesSlide';
import UpcomingMoviesSlider from '../UpcomingMoviesSlide/UpcomingMoviesSlider';
import CallToAction from "./CallToAction/CallToAction";
import { useEffect } from 'react';
import { useLocation } from 'react-router';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

const HomePage = ({accountDetails}) => { 
    const location = useLocation();
    const history = useHistory();

    useEffect(()=>{
        window.scrollTo(0, 0);
    },[location]);

    // fix tmdb redirect bug by checking to see if the page has a
    // request token param, and if it has redirect to the right component
    useEffect(()=>{
        const urlSearchParams = new URLSearchParams(window.location.search);
        const params = Object.fromEntries(urlSearchParams.entries());
        
        if(params.request_token){
            history.push('/approved');
        }
    },[]);
    
    return(
        <div className="homepage">
            <header className="header">
                <h1 className="header__title">Find the perfect movie to watch</h1>
                <hr className="header__hr"/>
            </header>

            <div className="TopRatedMovies">
                <TopRatedMovies />
            </div>
            <div className="TrendingMovies">
                <TrendingMoviesSlide />
            </div>
            <div className="UpcomingMovies">
                <UpcomingMoviesSlider />
            </div>

            {accountDetails.username ? null : <div className="CallToAction">
                <CallToAction />
            </div> } 
        </div>
    );
}

const mapStateToProps = ({accountDetails}) => {
    return { 
        accountDetails
    }
}

export default connect(mapStateToProps)(HomePage);