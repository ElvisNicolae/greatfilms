import "./DeleteListModal.scss";
import ReactDOM from "react-dom";
import themoviedb from "../../api/themoviedb";
import getCookie from "../Authentication/getCookie";
import { connect } from 'react-redux';
import { useHistory } from "react-router";
import { getCreatedLists } from '../../actions/getCreatedLists';

const DeleteListModal = ({onExitClick, list, getCreatedLists}) => {
    const sessionId = getCookie("sessionId");
    const history = useHistory();

    const onDeleteButtonClick = () => {
        themoviedb.delete(`list/${list.id}`, {
            params: {
                session_id: sessionId
            }
        })

        setTimeout(()=>{
            onExitClick();
            getCreatedLists();
            history.push('/')
        }, 550);
    }

    return ReactDOM.createPortal(
        <div className="modal-list">
            <div className="modal-list-content">
                <h2 className="modal-list-content__are-you-sure">
                    Are you sure?
                </h2>
                
                <hr className="modal-list-content__hr"/>
                <p className="modal-list-content__text">
                    By clicking yes, this list will be permanently deleted.
                </p>
                <hr className="modal-list-content__hr"/>
                <h2 className="modal-list-content__buttons">
                    <button className="modal-list-content__button yes-button" onClick={onDeleteButtonClick}>Yes</button>
                    <button className="modal-list-content__button no-button" onClick={onExitClick}>No</button>
                </h2>
            </div>
            <div className="modal-list-exit" onClick={onExitClick}></div>
        </div>,
        document.querySelector("#modal-delete-list")
    );
}

export default connect(null, {getCreatedLists})(DeleteListModal);
