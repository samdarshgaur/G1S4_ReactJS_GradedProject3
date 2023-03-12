import axios from "axios";
import IMovies from '../models/IMovies';

const getMoviesInTheaters = async () => {
    return axios.get("http://localhost:3001/movies-in-theaters").then(response => response.data)
};

const getMoviesComingSoon = async () => {
    return axios.get("http://localhost:3001/movies-coming").then(response => response.data)
};

const getMoviesTopRatedIndia = async () => {
    return axios.get("http://localhost:3001/top-rated-india").then(response => response.data)
};

const getMoviesTopRatedMovies = async () => {
    return axios.get("http://localhost:3001/top-rated-movies").then(response => response.data)
};

const getMoviesFavorite = async () => {
    return axios.get("http://localhost:3001/favourite").then(response => response.data)
};

const addToFavorites = async (favMovie: IMovies) => {
    return axios.post(
        "http://localhost:3001/favourite",
        favMovie,
        {
            headers: {
                "Content-Type": "application/json"
            }
        }
    );
};

const removeFromFavorites = async (id: string) => {
    return axios.delete(
        `http://localhost:3001/favourite/${id}`
    )
};

export {
    getMoviesInTheaters,
    getMoviesComingSoon,
    getMoviesTopRatedIndia,
    getMoviesTopRatedMovies,
    getMoviesFavorite,
    addToFavorites,
    removeFromFavorites
}