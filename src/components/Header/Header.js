import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import './Header.scss';
import logo from '../../images/GreatFilmsLogo.png';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { setSearchTerm } from '../../actions/setSearchTerm';
import { resetAction } from '../../actions/resetAction';
import HeaderAuthentication from './HeaderAuthentication';

const Header = ({setSearchTerm, resetAction}) => {
    const { register, handleSubmit } = useForm();
    const history = useHistory();

    const handleOnSumbit = ({searchBar}) => {
        resetAction();
        setSearchTerm(searchBar);
        history.push(`/search/${searchBar}`);
    }

    
    return(
        <div id="header">
            <nav className="first-nav-wrapper">
            <Link className="logo" to="/"><img className="logo" src={logo} alt="Great Films's logo" /></Link>   
                <ul>
                    <li className="nav-hover">
                        Movies
                        <ul className="nav-hover__elements">
                            <li><Link className="links" to="/movies/trending">Trending</Link></li>
                            <li><Link className="links" to="/movies/top-rated">Top Rated</Link></li>
                            <li><Link className="links" to="/movies/upcoming">Upcoming</Link></li>
                        </ul>
                    </li>
                    <li><Link className="links" to="#">People</Link></li>
                    <li><Link className="links" to="#"><span className="watchlist">Watchlist</span></Link></li>
                </ul>      
            </nav> 
            <nav className="second-nav-wrapper"> 
                <form onSubmit={handleSubmit(handleOnSumbit)}>
                    <input {...register('searchBar', {required: true})} placeholder="Search" className="search-bar" type="text" />
                </form>  
                <HeaderAuthentication />
            </nav>
        </div>
    );
}

export default connect(null, {
    setSearchTerm,
    resetAction
})(Header);