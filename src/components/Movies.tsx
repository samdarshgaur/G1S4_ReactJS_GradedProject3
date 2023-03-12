import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Navigation from "./Navigation";
// import Test from "./Test";
import './Home.css';
import MoviesListInTheaters from "./moviesLists/MoviesListInTheaters";
import MoviesListComingSoon from "./moviesLists/MoviesListComingSoon";
import MoviesListTopRatedIndia from "./moviesLists/MoviesListTopRatedIndia";
import MoviesListTopRatedMovies from "./moviesLists/MoviesListTopRatedMovies";
import MoviesListFavorites from "./moviesLists/MoviesListFavorites";

// const tempMovie = {
//     "id": "1",
//     "title": "Game Night",
//     "year": "2018",
//     "genres": [
//         "Action",
//         "Comedy",
//         "Crime"
//     ],
//     "ratings": [
//         2,
//         10,
//         1,
//         10,
//         6,
//         2,
//         5,
//         2,
//         9,
//         7,
//         5,
//         3,
//         7,
//         7,
//         1,
//         4,
//         5,
//         9,
//         2,
//         8,
//         10,
//         8,
//         1,
//         10,
//         7,
//         10,
//         8,
//         6,
//         7,
//         6
//     ],
//     "poster": "MV5BMjQxMDE5NDg0NV5BMl5BanBnXkFtZTgwNTA5MDE2NDM@._V1_SY500_CR0,0,337,500_AL_.jpg",
//     "contentRating": "11",
//     "duration": "PT100M",
//     "releaseDate": "2018-02-28",
//     "averageRating": 0,
//     "originalTitle": "",
//     "storyline": "A group of friends who meet regularly for game nights find themselves trying to solve a murder mystery.",
//     "actors": [
//         "Rachel McAdams",
//         "Jesse Plemons",
//         "Jason Bateman"
//     ],
//     "imdbRating": "",
//     "posterurl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjQxMDE5NDg0NV5BMl5BanBnXkFtZTgwNTA5MDE2NDM@._V1_SY500_CR0,0,337,500_AL_.jpg"
// }

const Home = () => {
    const [inTheaters, setInTheaters] = useState(true);
    const [coming, setComing] = useState(false);
    const [topIndia, setTopIndia] = useState(false);
    const [topMovies, setTopMovies] = useState(false);
    const [favorites, setFavorites] = useState(false);
    const [searchKey, setSearchKey] = useState("");

    const handleSetInTheaters = () => {
        setInTheaters(true);
        setComing(false);
        setTopIndia(false);
        setTopMovies(false);
        setFavorites(false);
    }

    const handleSetComing = () => {
        setInTheaters(false);
        setComing(true);
        setTopIndia(false);
        setTopMovies(false);
        setFavorites(false);
    }

    const handleSetTopIndia = () => {
        setInTheaters(false);
        setComing(false);
        setTopIndia(true);
        setTopMovies(false);
        setFavorites(false);
    }

    const handleSetTopMovies = () => {
        setInTheaters(false);
        setComing(false);
        setTopIndia(false);
        setTopMovies(true);
        setFavorites(false);
    }

    const handleSetFavorites = () => {
        setInTheaters(false);
        setComing(false);
        setTopIndia(false);
        setTopMovies(false);
        setFavorites(true);
    }

    return (
        <>
            <Navigation
                inTheaters={inTheaters}
                coming={coming}
                topIndia={topIndia}
                topMovies={topMovies}
                favorites={favorites}
                setInTheatersHandler={handleSetInTheaters}
                setComingHandler={handleSetComing}
                setTopIndiaHandler={handleSetTopIndia}
                setTopMoviesHandler={handleSetTopMovies}
                setFavoritesHandler={handleSetFavorites}
                setSearchKey={setSearchKey}
            />
            <Container>
                {inTheaters && <MoviesListInTheaters searchKey={searchKey} />}
                {coming && <MoviesListComingSoon searchKey={searchKey} />}
                {topIndia && <MoviesListTopRatedIndia searchKey={searchKey} />}
                {topMovies && <MoviesListTopRatedMovies searchKey={searchKey} />}
                {favorites && <MoviesListFavorites searchKey={searchKey} favorites={favorites} setFavorites={setFavorites} />}
            </Container>
            {/* <Test /> */}
        </>
    )

};

export default Home;