import React, {useState, useEffect} from "react";
import axios from "axios";
import GameInfo from "./GameInfo";

export default function GameSearch(){
const [loaded, setLoaded] = useState(false);
const [arrayLength, setArrayLength] = useState();
const [gameData, setGameData] = useState();
const [maxPageLength, setMaxPageLength] = useState();
const [page, setPage] = useState(0);
const [title, setTitle] = useState("Chicken Police");
const [typedTitle, setTypedTitle] = useState("");


function SetPrices(response){
setMaxPageLength(response.headers["x-total-page-count"])
setGameData(response.data);
setArrayLength(response.data.length);
setLoaded(true);

}

function SearchPrices(){
    let apiURL =  `https://www.cheapshark.com/api/1.0/deals?&pageNumber=${page}&title=${title}`;
    axios.get(apiURL).then(SetPrices)

}

useEffect(() => {
    let apiURL = `https://www.cheapshark.com/api/1.0/deals?&pageNumber=${page}&title=${title}`;
    axios.get(apiURL).then(SetPrices)
  }, [page, title]); 



function nextPage(){
setPage(page+1);
}

function prevPage(){
    setPage(page-1);
    }

function handleSubmit(event){
    event.preventDefault();
    setTitle(typedTitle)

}

function setGameTitle(event){
    setTypedTitle(event.target.value);
    event.preventDefault();

}
//First page of $15 games
//https://www.cheapshark.com/api/1.0/deals?upperPrice=15&pageNumber=1

if (loaded){
    if (maxPageLength > 0){
        return (
            <div className="GameSearch">
                <h1> Search prices by Game</h1> 
               <form onSubmit={handleSubmit} >
                   <input type="text" onChange={setGameTitle} autoComplete="off" placeholder="Search by Game Title" /> 
                   <button type="submit" className="submitButton"> 
                    <i className="fas fa-search"></i>
                </button>
               </form>
                {gameData.slice(0, arrayLength).map(function(gameNum, index){
                return(<GameInfo data={gameNum} page={page} key={index} />)})}
                           <button onClick={nextPage}> Next Page</button>
            </div>
        )
    }

       else if (page > 0 && page < maxPageLength){    return (
            <div className="GameSearch">
                <h1> Search prices by Game</h1> 
               <form onSubmit={handleSubmit} >
                   <input type="text" onChange={setGameTitle} autoComplete="off" placeholder="Search by Game Title" /> 
                   <button type="submit" className="submitButton"> 
                    <i className="fas fa-search"></i>
                </button>
    
               </form>
                {gameData.slice(0, arrayLength).map(function(gameNum, index){
                return(<GameInfo data={gameNum} page={page} key={index} />)})}
                        <button onClick={prevPage}>Previous Page</button> <button onClick={nextPage}> Next Page</button>
            </div>
        ) }

        else {return (
            <div className="GameSearch">
            <h1> Search prices by Game</h1> 
           <form onSubmit={handleSubmit} >
               <input type="text" onChange={setGameTitle} autoComplete="off" placeholder="Search by Game Title" /> 
               <button type="submit" className="submitButton"> 
                <i className="fas fa-search"></i>
            </button>

           </form>
            {gameData.slice(0, arrayLength).map(function(gameNum, index){
            return(<GameInfo data={gameNum} page={page} key={index} />)})}
                    <button onClick={prevPage}>Previous Page</button>
        </div>

        )}
}

   else { SearchPrices();
    return(
    <div className="GameSearch">
        "loading"
    </div>)}
}