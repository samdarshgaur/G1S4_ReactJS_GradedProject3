import React from 'react';

import { useState, useEffect } from "react";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Alert, Badge, Col, Row } from "react-bootstrap";
import { useParams } from 'react-router-dom';
import { LoadingStatus } from "../../models/types";
import IMovies from '../../models/IMovies';

const MoviesDetails = () => {
    // const [status, setStatus] = useState<LoadingStatus>('LOADING');
    // const [movie, setMovie] = useState<IMovies | null>(null);
    // const [error, setError] = useState<Error | null>(null);

    // const { id: idParam } = useParams();

    // useEffect(() => {
    //     const fetchRestaurant = async () => {
    //         try {
    //             const data = await (parseInt(idParam as string));
    //             setMovie(data);
    //             setStatus('LOADED');
    //         } catch (error) {
    //             setError(error as Error);
    //             setStatus('ERROR_LOADING');
    //         }
    //     };

    //     fetchRestaurant();
    // }, [idParam]);

    // let el;

    // switch (status) {
    //     case 'LOADING':
    //         el = (
    //             <LoadingIndicator
    //                 size="large"
    //                 message="We are fetching the details of the restaurant. Please wait..."
    //             />
    //         );
    //         break;
    //     case 'LOADED':
    //         const { id, name, imageUrl, description, cuisines, opens, closes, rating, numRatings, costForTwo } = restaurant as IRestaurant;
    //         el = (
    //             <>
    //                 <Row>
    //                     <Col xs={12}>
    //                         <h1>{name}</h1>
    //                         <hr />
    //                     </Col>
    //                     <Col xs={12} md={4} lg={4} className="my-2">
    //                         <img
    //                             src={`${process.env.REACT_APP_API_BASE_URL}${imageUrl}`}
    //                             alt={name}
    //                             className="w-100"
    //                         />
    //                     </Col>
    //                     <Col xs={12} md={8} lg={8} className="my-2">
    //                         <div>
    //                             {
    //                                 cuisines.map(cuisine => <Badge bg="primary me-2" key={cuisine}>{cuisine}</Badge>)
    //                             }
    //                         </div>
    //                         <div className="fs-5 my-2">
    //                             {description}
    //                         </div>
    //                         <Row xs={1} md={3} lg={3} className="text-sm">
    //                             <Col className="mb-2">
    //                                 <FontAwesomeIcon
    //                                     icon={faClock}
    //                                     className="me-2"
    //                                 />
    //                                 <span>{opens} - {closes}</span>
    //                             </Col>
    //                             <Col className="mb-2">
    //                                 <Rating value={rating} className="me-2" />
    //                                 {rating} ({numRatings} ratings)
    //                             </Col>
    //                             <Col className="mb-2">
    //                                 Cost for two: ₹{costForTwo}
    //                             </Col>
    //                         </Row>
    //                     </Col>
    //                 </Row>

    //                 <Menu id={id} />
    //             </>
    //         );
    //         break;
    //     case 'ERROR_LOADING':
    //         el = (
    //             <Alert variant="danger my-3">
    //                 {error?.message}
    //             </Alert>
    //         );
    //         break;
    // }

    // return el;
}

export default MoviesDetails;