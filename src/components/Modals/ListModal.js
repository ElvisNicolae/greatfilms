import "./ListModal.scss";
import ReactDOM from "react-dom";
import { useState, useEffect, useRef } from 'react';
import { useForm } from "react-hook-form";
import themoviedb from "../../api/themoviedb";
import getCookie from "../Authentication/getCookie";
import { connect } from 'react-redux';
import { getCreatedLists } from "../../actions/getCreatedLists";
import Checked from '../../images/Checked.png';
import NotChecked from '../../images/NotChecked.png';

const ListModal = ({onModalClick, getCreatedLists, accountDetails, createdLists, movie}) => {
    const [formVisible, setForrmVisible] = useState(false);
    const { register, handleSubmit } = useForm();
    const sessionId = getCookie("sessionId");
    const listRef = useRef();
    const [checkList, setCheckList] = useState(false); // use to run the useEffect

    useEffect(()=>{
        getCreatedLists(accountDetails.id);
    }, [formVisible, accountDetails, getCreatedLists]);

    // check whether the movie is in a particular list,
    // and if so, change that list left icon to checked icon
    useEffect(()=>{
        createdLists.forEach(async list => {
            const {data} = await themoviedb.get(`/list/${list.id}/item_status`, {
                params: {
                    movie_id: movie.id
                }
            });

            if(data.item_present) {
                document.getElementsByClassName(list.id)[0].src = Checked;
            }
        })
    },[listRef.current, checkList])

    const handleCreateNewListClick = () => {
        setForrmVisible(!formVisible);
    }

    const handleFormSubmit = async ({listName}) => {
        // create a list
        await themoviedb.post("/list", {
            name: listName,
            description: "",
            language: ""
        }, 
        {
            params: {
                session_id: sessionId
            }
        });

        setForrmVisible(false);
    }

    const onListClick = async list => {
        const {data} = await themoviedb.post(`/list/${list.id}/add_item`, {
            media_id: movie.id
        }, 
        {
            params: {
                session_id: sessionId
            }
        })

        setCheckList(!checkList);
    }

    const renderCreatedLists = createdLists.map((list) => {
        return <div className="modal-list-content__list" key={list.id} onClick={()=>{onListClick(list)}}>
            <img 
                src={NotChecked} 
                alt="square icon" 
                className={`modal-list-content-check ${list.id}`}
            />
            <h5>{list.name}</h5>
        </div>
    })
    

    const renderForm = () => {
        return <form onSubmit={handleSubmit(handleFormSubmit)} className="modal-list-form">
            <label className="modal-list-form__label">
                <h2 className="modal-list-form__input-name">Name</h2>
                <input type="text" {...register("listName", {required: true})} placeholder="Enter list name..."/>
            </label>
            <div className="modal-list-form__submit-btn-container">
                <button type="submit" className="modal-list-form__submit-btn">Create</button>
            </div>
        </form>
    }

    return ReactDOM.createPortal(
        <div className="modal-list">
            <div className="modal-list-content">
                <h2 className="modal-list-content__save-to">
                    Save to...
                </h2>
                
                <hr className="modal-list-content__hr"/>
                <div className="modal-list-content__lists" ref={listRef}>
                    {renderCreatedLists}
                </div>
                <hr className="modal-list-content__hr"/>
                {!formVisible ? <h2 onClick={handleCreateNewListClick} className="modal-list-content__create-list-btn">
                + Create new list
                </h2> : renderForm()}
            </div>
            <div className="modal-list-exit" onClick={onModalClick}></div>
        </div>,
        document.querySelector("#modal-list")
    );
}

const mapStateToProps = ({accountDetails, createdLists}) => {
    return {
        accountDetails,
        createdLists
    }
}

export default connect(mapStateToProps, {getCreatedLists})(ListModal);
