import axios from "axios";

const KEY = process.env.REACT_APP_THEMOVIEDB_API_KEY;

export default axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key: KEY
    }
});
