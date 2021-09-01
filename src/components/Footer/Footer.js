import { Link } from 'react-router-dom';
import './Footer.scss';
import logo from '../../images/GreatFilmsLogo.png';
import GPS from '../../images/GPS.png';
import Phone from '../../images/Phone.png';
import Mail from '../../images/Mail.png';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-content">
                <div className="footer-content__about">
                    <Link className="footer-logo" to='/'><img src={logo} alt="great films's logo" /></Link>
                    <hr className="footer-logo__hr"/>
                    <p className="about">
                    Here you can user rows and columns
                    to organize your footer content. Lorem
                    ispum dolor sit amet, consecturer
                    adispiscing elit.
                    </p>
                </div>
                <div className="footer-content__movies">
                    <Link to="/"><h1>Movies</h1></Link>
                    <hr />
                    <ul>
                        <Link to="/"><li>Popular</li></Link>
                        <Link to="/"><li>Top Rated</li></Link>
                        <Link to="/"><li>Upcoming</li></Link>
                    </ul>
                </div>
                <div className="footer-content__people">
                    <Link to="/"><h1>People</h1></Link>
                    <hr />
                    <ul>
                        <Link to="/"><li>Popular People</li></Link>
                    </ul>
                </div>
                <div className="footer-content__contact">
                    <Link to="/"><h1>Contact</h1></Link>
                    <hr />
                    <ul>
                        <li className="contact-information">
                            <img src={GPS} alt="location icon" />
                            <p>Clarence Square Vpt 39T Agust</p>
                        </li>
                        <li className="contact-information">
                            <img src={Phone} alt="phone icon" />
                            <p>+435192758765</p>
                        </li>
                        <li className="contact-information">
                            <img src={Mail} alt="mail icon" />                   
                            <p>mail@email.com</p>
                        </li>
                    </ul>
                </div>
                
            </div>
            <div className="attribution">
                <a href="https://www.themoviedb.org/">
                    <img className="attribution__logo" src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" alt="The movie database's logo" />
                </a>
                <h4 className="attribution__text">
                    This product uses the
                    <a href="https://www.themoviedb.org/"> TMDB API </a>
                    but is not endorsed or certified by TMDB.
                </h4>
            </div>
        </div>
    );
}

export default Footer;