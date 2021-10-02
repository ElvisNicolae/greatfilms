import "./ListPage.scss";
import { useLocation } from 'react-router';
import { useEffect, useState } from 'react';
import {connect} from 'react-redux';
import { getListDetails } from '../../actions/getListDetails';
import MovieList from "../MovieList/MovieList";
import { useParams } from 'react-router-dom';
import DeleteListModal from "../Modals/DeleteListModal";

const ListPage = ({getListDetails, listDetails}) => {
    const location = useLocation();
    const {id} = useParams();
    const [deleteListModalVisible, setDeleteListModalVisible] = useState(false);

    useEffect(()=>{
        window.scrollTo(0, 0);
    },[location]);

    useEffect(()=>{
        getListDetails(id);
    }, [getListDetails, id]);

    const reversedArray = () => {
        let newArray = [];

        for(let i=listDetails.items.length;i>0;i--){
            newArray[listDetails.items.length-i] = listDetails.items[i-1];
        }
        
        return newArray;
    }

    const deleteList = () => {
        setDeleteListModalVisible(true);
        document.querySelector("body").style.overflowY = deleteListModalVisible ? "visible" : "hidden";
    }

    const onExitClick = () => {
        setDeleteListModalVisible(false);
        document.querySelector("body").style.overflowY = deleteListModalVisible ? "visible" : "hidden";
    }

    return (
        <div>
            <MovieList
                title={listDetails.name}   
                movies={listDetails.items ? reversedArray() : []} 
                fetchNewPage={()=>{}}
                isCustomList={true}
                deleteList={deleteList}
            />
            {deleteListModalVisible ? <DeleteListModal onExitClick={onExitClick} list={listDetails}/> : null}
        </div>
    );
}

const mapStateToProps = ({listDetails}) => {
    return {
        listDetails
    }
}

export default connect(mapStateToProps, {
    getListDetails
})(ListPage);