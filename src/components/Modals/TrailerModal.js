import "./TrailerModal.scss";
import ReactDOM from "react-dom";
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import axios from "axios";

const TrailerModal = ({onModalClick, movie}) => {
    const [linkEmbed, setLinkEmbed] = useState("");
    
    useEffect(()=>{
        const asyncFunction = async ()=>{
            const {data} = await axios.get(`https://imdb-api.com/en/API/Trailer/pk_ba141hfuuqg53ge0b/${movie.imdb_id}`);
            setLinkEmbed(data.linkEmbed);
        }

        asyncFunction();
    },[]);

    return ReactDOM.createPortal(
        <div className="modal-list">
            <div className="modal-list-content-trailer">
                {linkEmbed ? <iframe id="frame" src={linkEmbed} frameBorder="0" width="100%" height="100%" allowFullScreen></iframe> 
                    : <h1 onClick={onModalClick}> Trailer unavailable, click here to exit. </h1>}
            </div>
            <div className="modal-list-exit" onClick={onModalClick}></div>
        </div>,
        document.querySelector("#modal-trailer")
    );
}

const mapStateToProps = () => {
    return {
    }
}

export default connect(null)(TrailerModal);
