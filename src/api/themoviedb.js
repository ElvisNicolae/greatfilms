import axios from "axios";

const KEY = "e6ed4845cf8d5e5ce279a43667893d79"; // process.env.REACT_APP_THEMOVIEDB_API_KEY;

export default axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key: KEY
    }
});
