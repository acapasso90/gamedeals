import React from "react";
import StoreInfo from "./StoreInfo";

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from 'react-bootstrap/Tooltip';

export default function GameInfo({data}){
    if (!data){
        return
    }

    const {title, thumb, salePrice, normalPrice, savings, steamRatingText, 
        steamRatingCount, storeID, dealID } = data;
    const savingsPercent = Math.round(10 * savings)/10;
    const steamRatingSummary = steamRatingText ?? "No Ratings";
    const gameURL = `https://www.cheapshark.com/redirect?dealID=${dealID}`;

    return(
        <Card bg="dark" className="game-info">
            <Card.Header>{title}</Card.Header>
            <a className="img-link" href={gameURL} target="_blank">
                <Card.Img variant="top" src={thumb} alt={title} />
            </a>
            <Card.Body>

                        <div className="d-flex justify-content-center" >
                            <div className="pe-1">Current Price:&nbsp;</div>

                            ${salePrice}
                            <OverlayTrigger placement="right" overlay={
                                <Tooltip>
                                    <div className="price-header">Full Price:</div>
                                    <div className="price">${normalPrice}</div>
                                </Tooltip>}
                            >
                                <button aria-label={`Full Price Info for ${title}`} className="price-tooltip">
                                    <i className="bi bi-info-circle"></i>
                                </button>

                            </OverlayTrigger>

                        </div>
    
                        
                <div>
                    Currently <span className="underline">{savingsPercent}%</span> off
                </div>
                <div className="rating-section mt-2 pt-2">
                    Rated:
                    <div className="underline">
                        {steamRatingSummary}
                    </div>
                    <div>
                    
                        based on {parseInt(steamRatingCount ?? 0).toLocaleString()} Steam ratings
                    </div>
                </div>
            </Card.Body>
            <Card.Footer>
                <a href={gameURL} target="_blank" className="m-1">
                    <Button size="md" variant="danger" aria-label={`Buy ${title}`}>Buy</Button>
                </a> 
                <StoreInfo storeId={storeID} />

            </Card.Footer>
        </Card>
    )
}
