import React from "react";
import StoreInfo from "./StoreInfo";

export default function GameInfo(props){
    const title = props.data.title;
    const thumb = props.data.thumb;
    const img = <img src={thumb} alt={title} className="gameImage" />
    const salePrice = props.data.salePrice;
    const fullPrice = props.data.normalPrice;
    const savings = Math.round(10*props.data.savings)/10;
    let steamRatingSummary = props.data.steamRatingText;
    if (steamRatingSummary === null){steamRatingSummary = "no ratings"}
    const steamNumberOfRatings = props.data.steamRatingCount;
    const steamRatingPercent = props.data.steamRatingPercent;
    const metaCriticRating = props.data.metacriticScore;
    const store = props.data.storeID;
    let gameID = props.data.dealID;
    let gameURL = `https://www.cheapshark.com/redirect?dealID=${gameID}`;
   let loaded = props.loading;
   let timestamp = props.data.releaseDate;


    return(
    <div className="GameInfo">
    <h2 className="gameTitle"> {title} </h2>
    {img}
    <ul>
    <li> <StoreInfo data={store} /></li>
    <li> <a href={gameURL} target="_blank"><button>Buy Now</button></a> </li>
    <li className="salePrice">
        <div className="row">
            <div className="columnPrice">
                Sale Price: <br />
                <span className="price">${salePrice}</span>
            </div>
                <div className="columnPrice">
                    <span className="fullPrice"> Full Price: <br />
                   <span className="price">${fullPrice} </span> </span>
                </div>
        </div>
    </li>
        <li>Currently <strong> <span className="underline">{savings}%</span> off </strong> </li>
        <hr />
        <li> Steam Rating: <br /><strong> <span className="underline"> {steamRatingSummary}</span> </strong></li>
        <li> {steamRatingPercent}% out of {steamNumberOfRatings} ratings</li>
        <li> Metacritic Rating: {metaCriticRating}% </li>
    </ul>
</div>)
}
