import React, { useEffect } from 'react';
import themoviedb from '../../api/themoviedb';
import { Link } from 'react-router-dom';
import getCookie from '../Authentication/getCookie';
import AvatarIcon from '../../images/AvatarIcon.png';
import { connect } from 'react-redux';
import { getAccount } from '../../actions/getAccount';

const HeaderAuthentication = ({getAccount, accountDetails}) => {
    const cookie = getCookie("sessionId");

    useEffect(()=>{
        if(cookie){
            getAccount();
        }
    }, [getAccount, cookie]);

    const handleSignUpClick = async () => {
        const {data} = await themoviedb.get("/authentication/token/new"); 
    
        window.location.href = `https://www.themoviedb.org/authenticate/${data.request_token}?redirect_to=https://elvisnicolae.github.io/greatfilms/approved`;
    }

    const handleLogOutClick = () => {
        document.cookie = "sessionId=; expires=Thu, 01 Jan 1971 00:00:00 UTC; path=/";
        window.location.reload();
    }

    if(cookie){
        return (
            <React.Fragment>               
                <img src={AvatarIcon} alt="avatar icon" className="avatar-icon" /> <span className="username">{accountDetails.username}</span>
                <Link className="links" to="#"> <span onClick={handleLogOutClick} className="log-out"> Log Out </span></Link>
            </React.Fragment>
        )
    }

    return (
        <React.Fragment>
            <Link className="links" to="/login"> <span className="login-header"> Login </span></Link>
            <Link className="links" to="#"> <span onClick={handleSignUpClick} className="sign-up"> Sign up </span></Link>
        </React.Fragment>
    );  
};

const mapStateToProps = ({accountDetails}) => {
    return {
        accountDetails
    }  
}

export default connect(mapStateToProps, { 
    getAccount
})(HeaderAuthentication);
