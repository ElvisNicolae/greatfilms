import { Link } from 'react-router-dom';
import './Header.scss';
import logo from '../../images/GreatFilmsLogo.png';

const Header = () => {
    return(
        <div id="header">
            <nav className="first-nav-wrapper">
            <Link className="logo" to="/"><img className="logo" src={logo} alt="Great Films's logo" /></Link>   
                <ul>
                    <li><Link to="#">Latest Movies</Link></li>
                    <li><Link to="#">Top Rated Movies</Link></li>
                    <li><Link to="#"><span className="watchlist">Watchlist</span></Link></li>
                </ul>      
            </nav> 
            <nav className="second-nav-wrapper"> 
                <form>
                    <input placeholder="Search" className="search-bar" type="text" />
                </form>  
                <Link to="#"> <span className="log-in"> Login </span></Link>
            </nav>
        </div>
    );
}

export default Header;