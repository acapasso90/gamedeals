import React, {useState} from "react";
import axios from "axios";
import GameInfo from "./GameInfo";

export default function Fifteen(){
const [loaded, setLoaded] = useState(false);
const [arrayLength, setArrayLength] = useState();
const [gameData, setGameData] = useState();

function SetPrices(response){
setGameData(response.data);
setArrayLength(response.data.length);
setLoaded(true);

}

function SearchPrices(){
    let apiURL = `https://www.cheapshark.com/api/1.0/deals?upperPrice=15&page=1`;
    axios.get(apiURL).then(SetPrices)

}

//First page of $15 games
//https://www.cheapshark.com/api/1.0/deals?upperPrice=15&page=1

if (loaded){
    return (
        <div clasName="Fifteen">
            {gameData.slice(0, arrayLength).map(function(gameNum, index){
            return(<GameInfo data={gameNum} key={index} />)})}
        </div>
    )
}
   else { SearchPrices();
    return(
    <div className="Fifteen">
        15
    </div>)}
}