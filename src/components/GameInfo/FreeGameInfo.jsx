import React from "react";

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function FreeGameInfo({data}){
    if (!data){
        return
    }

    const {thumbnail, description, release_date, genre, title, game_url, publisher } = data;

    return(
        <div className="game-info">
            <a className="img-link" href={game_url} target="_blank">
                <img src={thumbnail} alt={title} className="game-img" />
            </a>
            <div className="info">
                <div className="title-rating">
                    <h2>{title}</h2>
                    {description}
                    <div>
                        Genre: {genre}
                    </div>
                    <div >
                        Released: {new Date(release_date).toLocaleDateString()}
                    </div>     
                </div>
                <div className="price-col">
                    <div>
                        {publisher}
                    </div>
                    <a href={game_url} target="_blank">
                        <Button variant="danger" className="me-2">Download</Button>
                    </a> 
                </div>
            </div>
        </div>
    )
}
