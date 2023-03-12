import React from "react";
import { Button, Card } from "react-bootstrap";
import IMovies from "../../models/IMovies";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faRemove } from "@fortawesome/free-solid-svg-icons";
import { addToFavorites, removeFromFavorites } from "../../services/Movies";

type Props = {
    movie: IMovies;
    favorites?: boolean;
};

const MoviesListItem = ({ movie, favorites }: Props) => {
    const {
        id,
        title,
        posterurl
    } = movie;

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img className="h-100" variant="top" src={posterurl} />
            <Card.Body>
                <Card.Title className="mb-4">{title}</Card.Title>
                {!favorites && (<Button onClick={() => { addToFavorites(movie) }} className="m-auto text-center d-flex justify-content-center align-items-center" variant="primary">
                    Add To Favorites
                    <FontAwesomeIcon
                        icon={faHeart}
                        className="ms-2"
                        color="red"
                    />
                </Button>)}
                {favorites && (<Button onClick={() => { removeFromFavorites(id) }} className="m-auto text-center d-flex justify-content-center align-items-center" variant="danger">
                    Remove From Favorites
                    <FontAwesomeIcon
                        icon={faRemove}
                        className="ms-2"
                        color="white"
                    />
                </Button>
                )}
            </Card.Body>
        </Card>
    );
};

export default MoviesListItem;