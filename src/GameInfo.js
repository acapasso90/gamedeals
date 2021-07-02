import React, {useEffect} from "react";

export default function GameInfo(props){
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
    const steamId = props.data.steamAppID;
    const formattedTitle = title.replace(" ", "_");
    const steamLink = `https://store.steampowered.com/app/${steamId}/${formattedTitle}`;
    const page = props.page;

    useEffect(() => {
        const title = props.data.title;
        const thumb = props.data.thumb;
        const img = <img src={thumb} alt={title} />;
        const salePrice = props.data.salePrice;
        const fullPrice = props.data.normalPrice;
        const savings = Math.round(10*props.data.savings)/10;
        const steamRatingSummary = props.data.steamRatingText;
        const steamNumberOfRatings = props.data.steamRatingCount;
        const steamRatingPercent = props.data.steamRatingPercent;
        const metaCriticRating = props.data.metacriticScore;
        const steamId = props.data.steamAppID;
        const formattedTitle = title.replace(" ", "_");
        const steamLink = `https://store.steampowered.com/app/${steamId}/${formattedTitle}`;
      }, [page]); 

return(
    <div className="GameInfo">
        <h3> {title} </h3>
        <img src={thumb} alt={title} />
        <ul>
            <li>        <a href={steamLink} target="_blank"> <button> Buy on Steam </button> </a></li>
            <li>Price: ${salePrice} / <span className="fullPrice"> Full Price ${fullPrice} </span></li>
            <li>Currently {savings}% off</li>
            <li> Steam Rating: {steamRatingSummary} / {steamRatingPercent}% out of {steamNumberOfRatings} ratings</li>
            <li> Metacritic Rating: {metaCriticRating}% </li>
        </ul>
    </div>)
}