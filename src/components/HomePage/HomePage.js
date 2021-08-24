import "./HomePage.scss";
import TopRatedMovies from '../TopRatedMovies/TopRatedMovies';

const HomePage = () => {  
    return(
        <div className="homepage">
            <header className="header">
                <h1 className="header__title">Find the perfect movie to watch</h1>
                <hr className="header__hr"/>
            </header>

            <TopRatedMovies />
        </div>
    );
}

export default HomePage;