import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { connect } from 'react-redux';
import { getPersonDetails } from '../../actions/getPersonDetails';
import { getPersonCredits } from '../../actions/getPersonCredits';
import { resetAction } from '../../actions/resetAction';
import "./PersonPage.scss";
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';

const PersonPage = ({getPersonDetails, person, getPersonCredits, resetAction, credits}) => {
    const {id} = useParams();   
    const location = useLocation();

    useEffect(()=>{
        getPersonDetails(id);
        getPersonCredits(id);
    },[getPersonDetails, id, getPersonCredits]);

    useEffect(()=>{
        window.scrollTo(0, 0);

        return () => {
            resetAction();
        }
    },[location, resetAction]);

    if(!person.name){
        return <h2>Loading...</h2>
    }else {

    const renderDeathDay = () => {
        return (
            <div className="person-info__deathday person-info__detail">
                <h4>Deathday</h4>
                <p>{person.deathday}</p>
            </div>
        );
    }

    const renderBio = () => {
        const textSplit = person.biography.split(". ");

        return textSplit.map((elm, index) =>{
            if(index % 4 === 0 && index !== 0){
                return <React.Fragment key={index}>
                    <br />
                    <br />
                    {elm}.
                </React.Fragment>
            }
            
            if(index === textSplit.length-1){
                return <React.Fragment key={index}>{elm}</React.Fragment>
            }

            return <React.Fragment key={index}>
                {elm}{". "}
            </React.Fragment>
        });
    }

    const renderPersonCredits = credits.map(credit => {
        return (
            <Link to={credit.poster_path === null ? "/" : `/movie/${credit.id}`} key={credit.id} className="credit">
                {credit.poster_path === null ? <div className="credit__poster credit__poster-fake">
                    <h4> No Image </h4>
                </div> : <img className="credit__poster" src={`https://image.tmdb.org/t/p/w200/${credit.poster_path}`} alt={`${credit.title}'s poster`} /> }
                <div className="credit__info">
                    <h4 className="credit__title">{credit.title}</h4>
                    <p className="credit__release-date">{credit.release_date}</p>
                </div>
            </Link>
        );
    })

    return (
        <div className="person-container">
            <div className="person-info">
                <img 
                    src={`https://image.tmdb.org/t/p/w300/${person.profile_path}`} 
                    alt={`${person.name}'s profile'`} 
                    className="person-info__profile-img" 
                />
                <div className="person-info__text">
                    <div className="person-info__titles">
                        <h1 className="person-info__name">{person.name}</h1>
                        <h3 className="person-info__subtitle">Personal Info</h3>
                    </div>

                    <div className="person-info__details">
                        <div className="person-info__known-for person-info__detail">
                            <h4>Known For</h4>
                            <p>{person.known_for_department}</p>
                        </div>

                        <div className="person-info__birthday person-info__detail">
                            <h4>Birthday</h4>
                            <p>{person.birthday ? person.birthday : "-"}</p>
                        </div>

                        <div className="person-info__place-of-birth person-info__detail">
                            <h4>Place of Birth</h4>
                            <p>{person.place_of_birth ? person.place_of_birth : "-"}</p>
                        </div>

                        {person.deathday === null ? null : renderDeathDay()}

                        <div className="person-info__gender person-info__detail">
                            <h4>Gender</h4>
                            <p>{person.gender === 1 ? "Female" : "Male"}</p>
                        </div>

                        <div className="person-info__also-known-as person-info__detail">
                            <h4>Also Known As</h4>
                            <p>{person.also_known_as.length ? person.also_known_as[0] : "-"}</p>
                        </div>

                    </div>
                </div>
            </div>
            <div className="person-bio">
                <h1 className="person-bio__title">Biography</h1>
                <p className="person-bio__text">{person.biography ? renderBio() : "No biography."}</p>
            </div>
            <div className="person-credits">
                <h1 className="person-credits__title">
                    Known for
                </h1>
                <div className="person-credits__credits">
                    {renderPersonCredits}
                </div>
            </div>
        </div>
    );
    }
}

const mapStateToProps = ({personDetails, personCredits}) => {
    return {
        person: personDetails,
        credits: personCredits
    }
}

export default connect(mapStateToProps, {
    getPersonDetails,
    getPersonCredits,
    resetAction
})(PersonPage);