import React, {useState, useEffect} from "react";
import axios from "axios";
import DropdownButton from 'react-bootstrap/DropdownButton';
import GameInfo from "./GameInfo";
import Loader from "react-loader-spinner";

export default function Ten(){
const [sort, setSort] = useState('Savings')
const [loaded, setLoaded] = useState(false);
const [arrayLength, setArrayLength] = useState();
const [gameData, setGameData] = useState();
const [maxPageLength, setMaxPageLength] = useState();
const [page, setPage] = useState(0);



function SetPrices(response){
setMaxPageLength(response.headers["x-total-page-count"])
setGameData(response.data);
setArrayLength(response.data.length);
setLoaded(true);

}

function SearchPrices(){
    let apiURL = `https://www.cheapshark.com/api/1.0/deals?upperPrice=10&sortBy=${sort}&pageSize=35&pageNumber=${page}`;
    axios.get(apiURL).then(SetPrices)

}

useEffect(() => {
    let mounted = true;
    let apiURL = `https://www.cheapshark.com/api/1.0/deals?upperPrice=10&sortBy=${sort}&pageSize=35&pageNumber=${page}`;
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
  }}, [page, sort]);

function nextPage(){
setPage(page+1);
setLoaded(false)
}

function prevPage(){
    setPage(page-1);
    setLoaded(false)
    }

function setPrice(){
    setSort("Price");
    setLoaded(false);
}

function setSavings(){
    setSort("Savings");
    setLoaded(false);
}

function setReviews(){
    setSort("Reviews");
    setLoaded(false);
}

function setStore(){
    setSort("Store");
    setLoaded(false);

}

function setTitle(){
    setSort("Title");
    setLoaded(false);

}

//First page of $15 games
//https://www.cheapshark.com/api/1.0/deals?upperPrice=15&pageNumber=1

if (loaded){
if (page === 0){
    return (
        <div className="GamesBelow">
            <h1> Games currently below $10</h1> 
            <DropdownButton id='dropdown-button-drop-down-sort' className="sortDropdown" title='Sort by'>
            <div className="dropdownColumnSort">
                <a style={{ textDecoration: 'none' }} className="dropdownLink" onClick={setPrice} href="#/price"> Price </a> <br/>
                <a style={{ textDecoration: 'none' }} className="dropdownLink" onClick={setSavings} id="dropdownLinkTwo" href="#/sale"> Sale </a> <br/>
                <a style={{ textDecoration: 'none' }} className="dropdownLink" onClick={setReviews} id="dropdownLinkTwo" href="#/reviews"> Reviews </a> <br/>
                <a style={{ textDecoration: 'none' }} className="dropdownLink" onClick={setStore} id="dropdownLinkTwo" href="#/store"> Store </a> <br/>
                <a style={{ textDecoration: 'none' }} className="dropdownLink" onClick={setTitle} id="dropdownLinkTwo" href="#/title"> Title </a> <br/>
            </div>
        </DropdownButton>
            <button onClick={nextPage}> Next Page</button>
            <div className="GameInfoContainer">
            {gameData.slice(0, arrayLength).map(function(gameNum, index){
            return(<GameInfo data={gameNum} loading={loaded} key={index} />)})}
        </div>
        </div>
    )}
else if (page > 0 && page < maxPageLength){
    return (
        <div className="GamesBelow">
            <h1> Games currently below $15</h1>
            <DropdownButton id='dropdown-button-drop-down-sort' className="sortDropdown" title='Sort by'>
            <div className="dropdownColumnSort">
            <a style={{ textDecoration: 'none' }} className="dropdownLink" onClick={setPrice} href="#/price"> Price </a> <br/>
                <a style={{ textDecoration: 'none' }} className="dropdownLink" onClick={setSavings} id="dropdownLinkTwo" href="#/sale"> Sale </a> <br/>
                <a style={{ textDecoration: 'none' }} className="dropdownLink" onClick={setReviews} id="dropdownLinkTwo" href="#/reviews"> Reviews </a> <br/>
                <a style={{ textDecoration: 'none' }} className="dropdownLink" onClick={setStore} id="dropdownLinkTwo" href="#/store"> Store </a> <br/>
                <a style={{ textDecoration: 'none' }} className="dropdownLink" onClick={setTitle} id="dropdownLinkTwo" href="#/title"> Title </a> <br/>
            </div>
        </DropdownButton>
           <button onClick={prevPage}>Previous Page</button> <button onClick={nextPage}> Next Page</button>
           <div className="GameInfoContainer">
            {gameData.slice(0, arrayLength).map(function(gameNum, index){
            return(<GameInfo data={gameNum} loading={loaded}   key={index} />)})}
        </div>
        </div>
    )
}
else {
    return (
        <div className="GamesBelow">
            <h1> Games currently below $15</h1>
            <DropdownButton id='dropdown-button-drop-down-sort' className="sortDropdown" title='Sort by'>
            <div className="dropdownColumnSort">
            <a style={{ textDecoration: 'none' }} className="dropdownLink" onClick={setPrice} href="#/price"> Price </a> <br/>
                <a style={{ textDecoration: 'none' }} className="dropdownLink" onClick={setSavings} id="dropdownLinkTwo" href="#/sale"> Sale </a> <br/>
                <a style={{ textDecoration: 'none' }} className="dropdownLink" onClick={setReviews} id="dropdownLinkTwo" href="#/reviews"> Reviews </a> <br/>
                <a style={{ textDecoration: 'none' }} className="dropdownLink" onClick={setStore} id="dropdownLinkTwo" href="#/store"> Store </a> <br/>
                <a style={{ textDecoration: 'none' }} className="dropdownLink" onClick={setTitle} id="dropdownLinkTwo" href="#/title"> Title </a> <br/>
            </div>
        </DropdownButton>
            <button onClick={prevPage}>Previous Page</button> 
            <div className="GameInfoContainer">
                {gameData.slice(0, arrayLength).map(function(gameNum, index){
                return(<GameInfo data={gameNum} loading={loaded}   key={index} />)})}
            </div>
        </div>
    )
}
}
   else { SearchPrices();
    return(
        <div className="GamesBelow">
        <h1> Games currently below $10</h1>
        <DropdownButton id='dropdown-button-drop-down-sort' className="sortDropdown" title='Sort by'>
        <div className="dropdownColumnSort">
        <a style={{ textDecoration: 'none' }} className="dropdownLink" onClick={setPrice} href="#/price"> Price </a> <br/>
            <a style={{ textDecoration: 'none' }} className="dropdownLink" onClick={setSavings} id="dropdownLinkTwo" href="#/sale"> Sale </a> <br/>
            <a style={{ textDecoration: 'none' }} className="dropdownLink" onClick={setReviews} id="dropdownLinkTwo" href="#/reviews"> Reviews </a> <br/>
            <a style={{ textDecoration: 'none' }} className="dropdownLink" onClick={setStore} id="dropdownLinkTwo" href="#/store"> Store </a> <br/>
            <a style={{ textDecoration: 'none' }} className="dropdownLink" onClick={setTitle} id="dropdownLinkTwo" href="#/title"> Title </a> <br/>
        </div>
    </DropdownButton>
    <button onClick={prevPage}>Previous Page</button> <button onClick={nextPage}> Next Page</button>
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