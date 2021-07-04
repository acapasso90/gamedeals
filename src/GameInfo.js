import React, {useEffect, useState} from "react";
import StoreInfo from "./StoreInfo";

export default function GameInfo(props){


    const [loaded, setLoaded] = useState(false);
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
    const page = props.page;
    const steamID = props.data.steamAppID;
    const formattedTitle = title.replace(/ /g, '_');

    const store = props.data.storeID;


    useEffect(() => {
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
        const page = props.page;
        const steamID = props.data.steamAppID;
        const formattedTitle = title.replace(/ /g, '_');
        const steamURL = `https://store.steampowered.com/app/${steamID}/${formattedTitle}`;
        setLoaded(true);
      }, [props]); 

    return(
    <div className="GameInfo">
        <h2> {title} </h2>
        <img src={thumb} alt={title} /> <br/>
        <ul>
        <li>   <StoreInfo data={store} title={formattedTitle} steam={steamID} /></li>
            <li>Price: ${salePrice} / <span className="fullPrice"> Full Price ${fullPrice} </span></li>
            <li>Currently {savings}% off</li>
            <li> Steam Rating: {steamRatingSummary} / {steamRatingPercent}% out of {steamNumberOfRatings} ratings</li>
            <li> Metacritic Rating: {metaCriticRating}% </li>
        </ul>
    </div>)
}