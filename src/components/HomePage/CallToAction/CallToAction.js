import './CallToAction.scss';
import StackedMovies from '../../../images/StackedMovies.png';

const CallToAction = () => {
    return (
        <div className="container">
            <div className="content">
                <img className="stacked-movies-img" src={StackedMovies} alt="Stacked Movie Posters" />
                <div className="text">
                    <h2 className="call-to-action-title">
                        Create your favorite Watchlist
                    </h2>
                    <p className="call-to-action-paragraph">
                        Here using the largest movie database you can browse, 
                        search, and create lists with the movies you’ve watched
                        or you’d love to watch, and share them with your friends!
                    </p>
                    <button className="btn btn-primary call-to-action-btn">CREATE FREE ACCOUNT</button>
                </div>
            </div>
        </div>
    );
}

export default CallToAction;