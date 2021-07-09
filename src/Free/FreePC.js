import React, {useState, useEffect} from "react";
import axios from "axios";
import Loader from "react-loader-spinner";
import FreeGameInfo from "./FreeGameInfo.js";


export default function Free(){
const [sort, setSort] = useState('Savings')
const [loaded, setLoaded] = useState(false);
const [arrayLength, setArrayLength] = useState();
const [gameData, setGameData] = useState("");
const [maxPageLength, setMaxPageLength] = useState();
const [page, setPage] = useState(0);


function SetPrices(response){
setGameData(response.data);
setArrayLength(response.data.length);
setLoaded(true);
}


useEffect(() => {
    let mounted = true;
    const options = {
      method: 'GET',
      url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
      params: {platform: 'pc'},
      headers: {
        'x-rapidapi-key': '93f83ef8b7msh9b38461580245cdp109ee1jsnb46c53b2a45d',
        'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
      }
    };
    const cancelTokenSource = axios.CancelToken.source(); 
    if (mounted) {
      axios.request(options, {
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
            <h1> Currently Free-To-Play PC games</h1>
           <div className="GameInfoContainer">
            {gameData.slice(0, arrayLength).map(function(gameNum, index){
            return(<FreeGameInfo data={gameNum} loading={loaded}  key={index} />)})}
        </div>
        </div>
    )
}
   else {
    return(
        <div className="GamesBelow">
               <h1> Currently Free-To-Play PC games</h1>
    <h2> Loading Games</h2>
    <Loader
        type="MutatingDots"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
    </div>)}
}