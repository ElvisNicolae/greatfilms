import axios from "axios";

const KEY = "e6ed4845cf8d5e5ce279a43667893d79";

export default axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key: KEY
    }
});
