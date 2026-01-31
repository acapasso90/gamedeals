import React from "react";
import StoreInfo from "./StoreInfo";

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from 'react-bootstrap/Tooltip';
import { useParams } from "react-router-dom";

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
        <div className="game-info">
            <a className="img-link" href={gameURL} target="_blank">
                <img src={thumb} alt={title} className="game-img" />
            </a>
            <div className="info">
                <div className="title-rating">
                        
                    <h2>{title}</h2>
                    <div>
                    Rated: {steamRatingSummary} 
                    <div className="small-text muted">based on {parseInt(steamRatingCount ?? 0).toLocaleString()} Steam ratings</div>
                    </div>
                </div>
            
                <div className="price-col">
                    <StoreInfo storeId={storeID} />
                    <div className="price-row">
                        {savingsPercent > 0 && 
                            <div className='savings-block'>
                                -{Math.floor(savingsPercent)}%
                            </div>
                        }
                        <div className="price block">
                            <div className={savingsPercent ? 'strike-through' : ''}>${normalPrice}</div>

                            {savingsPercent > 0 && <div>${salePrice} </div>}

                        </div>
                    <div>
                        <a href={gameURL} target="_blank" className="m-1">
                            <Button size="md" variant="danger" aria-label={`Buy ${title}`}>Buy</Button>
                        </a> 
                    </div>
                    </div>
                </div>
            </div>
           
        </div>
    )
}
