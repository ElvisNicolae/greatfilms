import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getPopularPeople } from '../../actions/getPopularPeople';
import { resetAction } from '../../actions/resetAction';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import "./PopularPeoplePage.scss";
import { useInView } from 'react-intersection-observer';

const PopularPeoplePage = ({getPopularPeople, popularPeople, resetAction}) => {
    const location = useLocation();
    const {ref, inView} = useInView();
    const [page, setPage] = useState(2);
    
    useEffect(()=>{
        getPopularPeople();

        window.scrollTo(0, 0);

        return ()=>{
            resetAction();
        }
    },[getPopularPeople, location, resetAction]);

    useEffect(()=>{
        if(inView){
            getPopularPeople(page);
            setPage(page+1);
        }
    }, [inView]);

    const renderPeopleCards = popularPeople.map((person, index) => {
        if(index === popularPeople.length-1){
            return (<React.Fragment key={person.id}>
                <Link 
                    ref={ref}
                    className="popular-people-card"
                    to={`/people/${person.id}`}
                >              
                    <img className="popular-people-card__profile-img" src={`https://image.tmdb.org/t/p/w200/${person.profile_path}`} alt={`${person.name}'s profile`} />
                    <div className="popular-people-card__text">
                        <h4 className="popular-people-card__name">{person.name}</h4>
                        <p className="popular-people-card__popularity">Popularity: {person.popularity}</p>
                    </div>
                </Link>
            </React.Fragment>);
        }

        return (
            <React.Fragment key={person.id}>
                <Link 
                    className="popular-people-card"
                    to={`/people/${person.id}`}
                >              
                    <img className="popular-people-card__profile-img" src={`https://image.tmdb.org/t/p/w200/${person.profile_path}`} alt={`${person.name}'s profile`} />
                    <div className="popular-people-card__text">
                        <h4 className="popular-people-card__name">{person.name}</h4>
                        <p className="popular-people-card__popularity">Popularity: {person.popularity.toString().substring(0,5)}</p>
                    </div>
                </Link>
            </React.Fragment>
        );
    });

    return (
        <div className="popular-people-container">
            <div className="popular-people">
                <h1 className="popular-people__title">Popular People</h1>
                <div className="popular-people__cards">
                    {renderPeopleCards}
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = ({popularPeople}) => {

    return {
        popularPeople
    }
}

export default connect(mapStateToProps, {
    getPopularPeople,
    resetAction
})(PopularPeoplePage);