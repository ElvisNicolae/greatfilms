import './RecommendedSlider.scss';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { getRecommended} from '../../actions/getRecommended';
import { resetAction } from '../../actions/resetAction';
import Slider from '../Slider/Slider';
import { useParams } from 'react-router-dom';

const RecommendedMovies = ({ getRecommended, recommendedMovies, resetAction}) =>{
    const {id} = useParams();
    
    useEffect(()=>{
        getRecommended(id);

        return () => {
            resetAction();
        }
    },[getRecommended, resetAction, id]);  

    const fetchNewPage = (page) => {
        getRecommended(id, page);
    }

    if(recommendedMovies.length === 0){
        return null;
    }
    
    return(
        <div>
            <Slider 
                sliderTitle="Recommended Movies" 
                movies={recommendedMovies} 
                link={""}
                fetchNewPage={fetchNewPage}
                stringId={"recommended_movies"}
            />
        </div>
    );

}

const mapStateToProps = ({recommendedMovies}) => { 
    return {
        recommendedMovies
    }
}

export default connect(
    mapStateToProps,
    {
        getRecommended,
        resetAction
    }
)(RecommendedMovies);