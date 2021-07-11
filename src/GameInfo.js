import React from "react";
import StoreInfo from "./StoreInfo";

export default function GameInfo(props){

    const title = props.data.title;
    const thumb = props.data.thumb;
    const img = <img src={thumb} alt={title} className="gameImage" />
    const salePrice = props.data.salePrice;
    const fullPrice = props.data.normalPrice;
    const savings = Math.round(10*props.data.savings)/10;
    const steamRatingSummary = props.data.steamRatingText;
    const steamNumberOfRatings = props.data.steamRatingCount;
    const steamRatingPercent = props.data.steamRatingPercent;
    const metaCriticRating = props.data.metacriticScore;
    const store = props.data.storeID;
    let gameID = props.data.dealID;
    let gameURL = `https://www.cheapshark.com/redirect?dealID=${gameID}`;

   return(
    <div className="GameInfo">
    <h2 className="gameTitle"> {title} </h2>
    {img}
    <ul>
    <li> <a href={gameURL} target="_blank"><button>Buy Now</button></a> </li>
    <li> <StoreInfo data={store} /></li>
        <li className="salePrice">
            <div className="row">
                <div className="columnPrice">
                Sale Price: <br />
               ${salePrice}
                </div>
                <div className="columnPrice">
                <span className="fullPrice"> Full Price: <br />
                   ${fullPrice} </span>
                </div>
            </div>
        </li>
        <li>Currently <strong> {savings}% off </strong> </li>
        <li> Steam Rating: <strong> <div id="steamRating"> {steamRatingSummary}  </div></strong></li>
        <li> {steamRatingPercent}% out of {steamNumberOfRatings} ratings</li>
        <li> Metacritic Rating: {metaCriticRating}% </li>
    </ul>
</div>)
}
