import React, { ChangeEvent } from "react";
import { Container, Form, Nav, Navbar } from "react-bootstrap";
import './Navigation.css';

type Props = {
    setInTheatersHandler?: any;
    setComingHandler?: any;
    setTopIndiaHandler?: any;
    setTopMoviesHandler?: any;
    setFavoritesHandler?: any;
    inTheaters: any;
    coming: any;
    topIndia: any;
    topMovies: any;
    favorites: any;
    setSearchKey: any;
}

const Navigation = ({ setInTheatersHandler, setComingHandler, setTopIndiaHandler, setTopMoviesHandler, setFavoritesHandler, inTheaters, coming, topIndia, topMovies, favorites, setSearchKey }: Props) => {

    const inputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchKey((event.target as HTMLInputElement).value);
    }

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link className={`nav-link ${inTheaters && 'active'} px-0 me-3`} onClick={() => { setInTheatersHandler() }}>Movies in theaters</Nav.Link>
                        <Nav.Link className={`nav-link ${coming && 'active'} px-0 me-3`} onClick={() => { setComingHandler() }}>Coming soon</Nav.Link>
                        <Nav.Link className={`nav-link ${topIndia && 'active'} px-0 me-3`} onClick={() => { setTopIndiaHandler() }}>Top rated Indian</Nav.Link>
                        <Nav.Link className={`nav-link ${topMovies && 'active'} px-0 me-3`} onClick={() => { setTopMoviesHandler() }}>Top rated movies</Nav.Link>
                        <Nav.Link className={`nav-link ${favorites && 'active'} px-0 me-3`} onClick={() => { setFavoritesHandler() }}>Favorites</Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2 shadow-none"
                            aria-label="Search"
                            onChange={inputChange}
                        />
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;