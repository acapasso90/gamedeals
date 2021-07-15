import React, {useState, useEffect} from "react";
import axios from "axios";
import Loader from "react-loader-spinner";
import FreeGameInfo from "./FreeGameInfo.js";


export default function Free(){
const [genre, setGenre] = useState("mmorpg");
const [loaded, setLoaded] = useState(false);
const [arrayLength, setArrayLength] = useState();
const [gameData, setGameData] = useState("");

const genres= ["mmorpg", "shooter", "strategy", "moba", "racing", "sports", "social", "sandbox", "open-world", "survival", "pvp", "pve", "pixel", "voxel", "zombie", "turn-based", 
  "first-person", "third-Person", "top-down", "tank", "space", "sailing", "side-scroller", "superhero", "permadeath", "card", "battle-royale", "mmo", "mmofps", "mmotps", "3d", "2d", 
  "anime", "fantasy", "sci-fi", "fighting", "action-rpg", "action", "military", "martial-arts", "flight", "low-spec", "tower-defense", "horror", "mmorts"]
let genrelength = genres.length;

function SetPrices(response){
setGameData(response.data);
setArrayLength(response.data.length);
setLoaded(true);
}


useEffect(() => {
    let mounted = true;
    const options = {
      method: 'GET',
      url: `https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=release-date`,
      params: {platform: 'pc', category: genre},
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
  }}, [genre]);




  if (loaded){
    if (gameData.status === undefined){
      return (
        <div className="GamesBelow">
            <h1 className="pageHeader"> Free-To-Play PC games</h1>
            <div className="SortBy">
              <h4> Sort By Genre</h4>
              {genres.slice(0, genrelength).map(function(genre, index){
                function SetThisGenre(){let active = document.querySelector('.activeCat');
                if (active) {
               active.classList.remove('activeCat');}
                  setGenre(genre);
                  let thisButton = document.getElementById(genre);
                  thisButton.classList.add('activeCat');
                }
                if (index === 0) {return (<button className="activeCat" id={genre}  key={index} onClick={SetThisGenre}>{genre}</button>)}
                else {return(<button id={genre} onClick={SetThisGenre} key={index}>{genre}</button>)}
              })}
            </div>
            <p className="showingGenre">Showing free <strong>{genre} </strong>games</p>
           <div className="GameInfoContainer">
           {gameData.slice(0, arrayLength).map(
                function(gameNum, index){
                  return(<FreeGameInfo data={gameNum} loading={loaded}  key={index} />)})}
        </div>
        </div>
    )}
  else return (
    <div className="GamesBelow">
                    <h1 className="pageHeader"> Free-To-Play PC games</h1>
            <div className="SortBy">
              <h4> Sort By Genre</h4>
              {genres.slice(0, genrelength).map(function(genre, index){
                function SetThisGenre(){let active = document.querySelector('.activeCat');
                if (active) {
               active.classList.remove('activeCat');}
                  setGenre(genre);
                  let thisButton = document.getElementById(genre);
                  thisButton.classList.add('activeCat');
                }
                if (index === 0) {return (<button className="active" id={genre}  key={index} onClick={SetThisGenre}>{genre}</button>)}
                else {return(<button id={genre} onClick={SetThisGenre} key={index}>{genre}</button>)}
              })}
               </div>
           <h3> Currently no free {genre} games on PC</h3>
  
        </div> )}
  
     else {
      return(
          <div className="GamesBelow">
                 <h1 className="pageHeader"> Free-To-Play PC games</h1>
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