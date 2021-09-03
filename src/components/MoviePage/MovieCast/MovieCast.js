import { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from 'react-router-dom';
import './MovieCast.scss';

const MovieCast = ({movieId}) => {
    const {id} = useParams();

    return (
        <div className="movie-cast">
            MovieCast
        </div>
    );
}

export default connect()(MovieCast);