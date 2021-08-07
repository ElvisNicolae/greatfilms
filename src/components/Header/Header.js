import { Link } from 'react-router-dom';
import './Header.scss';
import logo from '../../images/GreatFilmsLogo.png';

const Header = () => {
    return(
        <header id="header">
            <Link className="logo" to="/"><img className="logo" src={logo} alt="Great Films's logo" /></Link>
            <nav className="first-nav-wrapper">
                <ul>
                    <li><Link to="#">Cool Movies</Link></li>
                    <li><Link to="#">Awesome Movies</Link></li>
                    <li><Link to="#">Movies</Link></li>
                </ul>
                
            </nav> 
            <nav className="second-nav-wrapper"> 
                <form>
                        <input placeholder="Search" className="search-bar" type="text" />
                </form>  
                <Link to="#">WatchList</Link>
                <Link to="#"> <span className="log-in"> Log in </span></Link>
            </nav>
        </header>
    );
}

export default Header;