import React from "react";

export default function FreeGameInfo(props){
    console.log(props.data);
    const title = props.data.title;
    const platform = props.data.platform;
    const image = <img src={props.data.thumbnail} alt={title} className="gameImage" />
    const genre = props.data.genre;
    const description = props.data.short_description;
    const link = <a href={props.data.game_url} target="_blank"><button>Play Game</button></a>


    return(
        <div className="GameInfo">
            <h2>{title}</h2>
            <ul>
                <li>{image} </li>
                <li>{link}</li>
                <li> {genre}</li>
                <li> {platform} </li>
                <li> {description} </li>
            </ul>
        </div>
    )
}