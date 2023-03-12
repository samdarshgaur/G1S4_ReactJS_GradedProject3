import { Component } from "react";
import { Alert, Col, Row } from "react-bootstrap";
import LoadingIndicator from "../../common/LoadingIndicator";
import IMovies from "../../models/IMovies";
import { LoadingStatus } from "../../models/types";
import { getMoviesComingSoon } from "../../services/Movies";
import { searchMovies } from "../../services/SearchMovies";
import MoviesListItem from "../moviesListItem/MoviesListItem";

type Props = {
    searchKey: string;
};

type State = {
    status: LoadingStatus,
    movies?: IMovies[],
    error?: Error
};

class MoviesListComingSoon extends Component<Props, State> {
    state: State = {
        status: 'LOADING'
    };

    render() {
        let el;
        const { status, movies, error } = this.state;

        switch (status) {
            case 'LOADING':
                el = (
                    <LoadingIndicator
                        size="large"
                        message="We are fetching the list of movies. Please wait..."
                    />
                );
                break;
            case 'LOADED':
                el = (
                    <Row xs={1} md={2} lg={4}>
                        {
                            searchMovies(movies as IMovies[], this.props.searchKey).map(movie => {
                                return (
                                    <Col key={movie.id} className="d-flex justify-content-center align-items-stretch my-3">
                                        <MoviesListItem
                                            movie={movie}
                                        />
                                    </Col>
                                )
                            })
                            // movies?.map(movie => {
                            //     return (
                            //         <Col key={movie.id} className="d-flex justify-content-center align-items-stretch my-3">
                            //             <MoviesListItem
                            //                 movie={movie}
                            //             />
                            //         </Col>
                            //     )
                            // })
                        }
                    </Row>
                );
                break;
            case 'ERROR_LOADING':
                el = (
                    <Alert variant="danger my-3">
                        {error?.message}
                    </Alert>
                );
                break;
        }
        return el;
    }

    // It is executed right after the first render method
    async componentDidMount() {
        this.setState({
            status: 'LOADING'
        });

        try {
            const data = await getMoviesComingSoon();
            this.setState({
                status: 'LOADED',
                movies: data
            });
        } catch (error) {
            this.setState({
                status: 'ERROR_LOADING',
                error: error as Error
            });
        }
    }
};

export default MoviesListComingSoon;