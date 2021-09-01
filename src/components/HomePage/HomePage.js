import "./HomePage.scss";
import TopRatedMovies from '../TopRatedMoviesSlide/TopRatedMoviesSlide';
import TrendingMoviesSlide from '../TrendingMoviesSlide/TrendingMoviesSlide';
import UpcomingMoviesSlider from '../UpcomingMoviesSlider/UpcomingMoviesSlider';
import CallToAction from "./CallToAction/CallToAction";

const HomePage = () => {  
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
            <div className="CallToAction">
                <CallToAction />
            </div>          
        </div>
    );
}

export default HomePage;