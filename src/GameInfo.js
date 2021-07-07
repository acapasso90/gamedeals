import React, {useEffect, useState} from "react";

export default function GameInfo(props){
    const [loaded, setLoaded] = useState(false);
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
    const formattedTitle = title.replace(/ /g, '_');
    const store = props.data.storeID;
    let gameID = props.data.dealID;
    let gameURL = `https://www.cheapshark.com/redirect?dealID=${gameID}`;




    useEffect(() => {
        setLoaded(false);
        const title = props.data.title;
        const thumb = props.data.thumb;
        const img = <img src={thumb} alt={title} />
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
      }, [props]); 

 



   return(
    <div className="GameInfo">
    <h2 className="gameTitle"> {title} </h2>
    {img}
    <ul>
    <li> <a href={gameURL} target="_blank"><button>Buy Now</button></a> </li>
        <li>Price: ${salePrice} / <span className="fullPrice"> Full Price ${fullPrice} </span></li>
        <li>Currently {savings}% off</li>
        <li> Steam Rating: {steamRatingSummary} / {steamRatingPercent}% out of {steamNumberOfRatings} ratings</li>
        <li> Metacritic Rating: {metaCriticRating}% </li>
    </ul>
</div>)
}
