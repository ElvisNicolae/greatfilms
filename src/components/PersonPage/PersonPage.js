import { useParams } from "react-router-dom";

const PersonPage = () => {
    const {id} = useParams();   

    return (
        <div>
            PersonPage
        </div>
    );
}

export default PersonPage;