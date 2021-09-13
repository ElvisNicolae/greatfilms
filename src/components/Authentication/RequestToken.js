import "./RequestToken.scss";
import { useHistory } from 'react-router-dom';
import themoviedb from "../../api/themoviedb";

const RequestToken = () => { 
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());
    const history = useHistory();

    if(params.denied) {
        return <h1 className="access-denied">To unlock all the features, you need to
            allow <span className="greatfilms">greatfilms</span> to read and write data on your behalf. 
        </h1>
    }
    else {
        const createSession = async () => {
            const {data} = await themoviedb.post("/authentication/session/new",
            {
                request_token: params.request_token
            })
            document.cookie = `sessionId=${data.session_id}; expires=Thu, 30 Dec 2021 12:00:00 UTC;`;           
            history.push('/');
            window.location.reload();
        }
        
        createSession();

        return null;
    }
}

export default RequestToken;