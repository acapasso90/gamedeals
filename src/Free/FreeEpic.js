import React, {useState, useEffect} from "react";
import axios from "axios";
import DropdownButton from 'react-bootstrap/DropdownButton';
import GameInfo from "../GameInfo";
import Loader from "react-loader-spinner";

export default function FreeEpic(){
const [loaded, setLoaded] = useState(false);
const [arrayLength, setArrayLength] = useState();
const [gameData, setGameData] = useState("");
const [maxPageLength, setMaxPageLength] = useState();
const [formattedMaxPage, setFormattedMaxPage] = useState();

function SetPrices(response){
    setMaxPageLength(response.headers["x-total-page-count"])
    setGameData(response.data);
    setArrayLength(response.data.length);
    setLoaded(true);
    setFormattedMaxPage(parseInt(response.headers["x-total-page-count"], 10) + 1);
    }
    

useEffect(() => {
    let mounted = true;
    let apiURL = `https://www.cheapshark.com/api/1.0/deals?storeID=25&?&upperPrice=0`;
    const cancelTokenSource = axios.CancelToken.source(); 
    if (mounted) {
      axios.get(apiURL, {
        cancelToken: cancelTokenSource.token
      }).then(SetPrices).catch(error => {
        console.log(error);
      });}
    return function cleanup() {
      mounted = false
      cancelTokenSource.cancel();
  }}, [ ]);


if (loaded){
    return (
        <div className="GamesBelow">
            <h1 className="pageHeader"> Games currently Free at EpicGames</h1> 
            <div className="GameInfoContainer">
            {gameData.slice(0, arrayLength).map(function(gameNum, index){
            return(<GameInfo data={gameNum} loading={loaded}  key={index} />)})}
        </div>
        </div>
    )
}
   else {
    return(
        <div className="GamesBelow">
            <h1 className="pageHeader"> Games currently Free at EpicGames</h1> 
    <h2 className="loading"> Loading Games</h2>
    <Loader
        type="MutatingDots"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
    </div>)}
}