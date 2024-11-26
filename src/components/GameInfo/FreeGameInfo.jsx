import React from "react";

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function FreeGameInfo({data}){
    if (!data){
        return
    }

    const {thumbnail, description, release_date, genre, title, game_url, publisher } = data;

    return(
        <Card bg="dark" className="game-info">
            <Card.Header>{title}</Card.Header>
            <a className="img-link" href={game_url} target="_blank">
                <Card.Img variant="top" src={thumbnail} alt={title} />
            </a>
            <Card.Body>
                {description}
                <div className="">
                    <div>
                        Genre:
                        <div className="underline">
                            {genre}
                        </div>
                    </div>
                    <div className="pt-1 d-flex justify-content-center">
                        Released:
                        <div className="ps-2">
                            {new Date(release_date).toLocaleDateString()}
                        </div>
                    </div>
                </div>
            </Card.Body>
            <Card.Footer>
                <a href={game_url} target="_blank">
                    <Button variant="danger" className="me-2">Download</Button>
                </a> 
                <div>
                    {publisher}
                </div>

            </Card.Footer>
        </Card>
    )
}
