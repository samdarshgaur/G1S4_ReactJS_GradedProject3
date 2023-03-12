import IMovies from "../models/IMovies"

const searchMovies = (movies: IMovies[], searchKey: string) => {
    const filteredMovies = movies.filter(movie => {
        return movie.title.toLowerCase().includes(searchKey.trim().toLowerCase());
    });
    return filteredMovies;
}

export {
    searchMovies
}