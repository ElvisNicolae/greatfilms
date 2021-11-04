import './CallToAction.scss';
import StackedMovies from '../../../images/StackedMovies.png';
import themoviedb from '../../../api/themoviedb';

const CallToAction = () => {
    const handleSignUpClick = async () => {
        const {data} = await themoviedb.get("/authentication/token/new"); 
    
        window.location.href = `https://www.themoviedb.org/authenticate/${data.request_token}?redirect_to=https://elvisnicolae.github.io/greatfilms/#/approved`;
    }

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
                    <button className="btn btn-primary call-to-action-btn" onClick={handleSignUpClick}>CREATE FREE ACCOUNT</button>
                </div>
            </div>
        </div>
    );
}

export default CallToAction;