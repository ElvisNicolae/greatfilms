import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import './Header.scss';
import logo from '../../images/GreatFilmsLogo.png';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { setSearchTerm } from '../../actions/setSearchTerm';
import { resetAction } from '../../actions/resetAction';
import HeaderAuthentication from './HeaderAuthentication';
import { getCreatedLists } from '../../actions/getCreatedLists';

const Header = ({setSearchTerm, resetAction, getCreatedLists, accountDetails, createdLists}) => {
    const { register, handleSubmit } = useForm();
    const history = useHistory();

    const handleOnSumbit = ({searchBar}) => {
        resetAction();
        setSearchTerm(searchBar);
        history.push(`/search/${searchBar}`);
    }

    useEffect(()=>{
        getCreatedLists(accountDetails.id);
    },[getCreatedLists, accountDetails.id])

    const renderCreatedLists = createdLists.map(list => {
        return (
            <li key={list.id}><Link className="links" to={`/list/${list.id}`}><span className="list">{list.name}</span></Link></li>
        );
    })

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
                    <li><Link className="links" to="/people">People</Link></li>
                    <li className="nav-hover nav-hover--lists">
                        Lists
                        <ul className="nav-hover__elements nav-hover__elements--lists">
                            <li><Link className="links" to="/movies/watchlist"><span className="watchlist">Watchlist</span></Link></li>
                            {renderCreatedLists}
                        </ul>
                    </li>
                </ul>      
            </nav> 
            <nav className="second-nav-wrapper"> 
                <form onSubmit={handleSubmit(handleOnSumbit)}>
                    <input 
                        {...register('searchBar', {required: true})}
                        placeholder="Search movies" 
                        className="search-bar" 
                        type="text" 
                    />
                </form>  
                <HeaderAuthentication />
            </nav>
        </div>
    );
}

const mapStateToProps = ({accountDetails, createdLists}) => {
    return {
        accountDetails,
        createdLists
    }
}

export default connect(mapStateToProps, {
    setSearchTerm,
    resetAction,
    getCreatedLists
})(Header);