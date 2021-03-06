import React, {useState, useEffect} from "react";
import axios from "axios";
import DropdownButton from 'react-bootstrap/DropdownButton';
import GameInfo from "../GameInfo";
import Loader from "react-loader-spinner";

export default function HumbleGames(){
const [sort, setSort] = useState('Savings')
const [loaded, setLoaded] = useState(false);
const [arrayLength, setArrayLength] = useState();
const [gameData, setGameData] = useState("");
const [maxPageLength, setMaxPageLength] = useState();
const [page, setPage] = useState(0);
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
    let apiURL = `https://www.cheapshark.com/api/1.0/deals?storeID=11&?onSale=true?&sortBy=${sort}&pageNumber=${page}`;
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
        if (sort !== "Price"){setSort("Price");
        setLoaded(false);}
    }
    
    function setSavings(){
        if (sort !== "Savings"){setSort("Savings");
        setLoaded(false);}
    }
    
    function setReviews(){
        if (sort !== "Reviews"){setSort("Reviews");
        setLoaded(false);}
    }
    
    
    function setTitle(){
        if (sort !== "Title"){setSort("Title");
        setLoaded(false);}
    }
    



if (loaded){
if (page === 0){
    return (
        <div className="GamesBelow">
            <h1 className="pageHeader"> Humble Store Games Currently on Sale</h1>
            <p className="sortedBy">sorted by {sort} </p>
            <DropdownButton id='dropdown-button-drop-down-sort' className="sortDropdown" title='Sort by'>
            <div className="dropdownColumnSort">
                <a style={{ textDecoration: 'none' }} className="dropdownLink" onClick={setPrice} href="#/price"> Low Price </a> <br/>
                <a style={{ textDecoration: 'none' }} className="dropdownLink" onClick={setSavings} id="dropdownLinkTwo" href="#/sale"> Savings </a> <br/>
                <a style={{ textDecoration: 'none' }} className="dropdownLink" onClick={setReviews} id="dropdownLinkTwo" href="#/reviews"> Reviews </a> <br/>
                <a style={{ textDecoration: 'none' }} className="dropdownLink" onClick={setTitle} id="dropdownLinkTwo" href="#/title"> Title </a> 
            </div>
        </DropdownButton>
        <p className="currentPage"> Showing page {page+1} of {formattedMaxPage} </p>
            <button onClick={nextPage}> Next Page</button>
            <div className="GameInfoContainer">
            {gameData.slice(0, arrayLength).map(function(gameNum, index){
            return(<GameInfo data={gameNum} loading={loaded}  key={index} />)})}
        </div>
        <p className="currentPage"> Showing page {page+1} of {formattedMaxPage} </p>
        <button onClick={nextPage}> Next Page</button>
        </div>
    )}
else if (page > 0 && page < maxPageLength){
    return (
        <div className="GamesBelow">
            <h1 className="pageHeader"> Humble Store Games Currently on Sale</h1> 
            <p className="sortedBy">sorted by {sort} </p>
            <DropdownButton id='dropdown-button-drop-down-sort' className="sortDropdown" title='Sort by'>
            <div className="dropdownColumnSort">
            <a style={{ textDecoration: 'none' }} className="dropdownLink" onClick={setPrice} href="#/price"> Low Price </a> <br/>
                <a style={{ textDecoration: 'none' }} className="dropdownLink" onClick={setSavings} id="dropdownLinkTwo" href="#/sale"> Savings </a> <br/>
                <a style={{ textDecoration: 'none' }} className="dropdownLink" onClick={setReviews} id="dropdownLinkTwo" href="#/reviews"> Reviews </a> <br/>
                <a style={{ textDecoration: 'none' }} className="dropdownLink" onClick={setTitle} id="dropdownLinkTwo" href="#/title"> Title </a> 
            </div>
        </DropdownButton>
        <p className="currentPage"> Showing page {page+1} of {formattedMaxPage} </p>
           <button onClick={prevPage}>Previous Page</button> <button onClick={nextPage}> Next Page</button>
           <div className="GameInfoContainer">
            {gameData.slice(0, arrayLength).map(function(gameNum, index){
            return(<GameInfo data={gameNum} loading={loaded}    key={index} />)})}
        </div>
        <p className="currentPage"> Showing page {page+1} of {formattedMaxPage} </p>
        <button onClick={prevPage}>Previous Page</button> <button onClick={nextPage}> Next Page</button>
        </div>
    )
}
else {
    return (
        <div className="GamesBelow">
            <h1 className="pageHeader"> Humble Store Games Currently on Sale</h1> 
            <p className="sortedBy">sorted by {sort} </p>
            <DropdownButton id='dropdown-button-drop-down-sort' className="sortDropdown" title='Sort by'>
            <div className="dropdownColumnSort">
            <a style={{ textDecoration: 'none' }} className="dropdownLink" onClick={setPrice} href="#/price"> Low Price </a> <br/>
                <a style={{ textDecoration: 'none' }} className="dropdownLink" onClick={setSavings} id="dropdownLinkTwo" href="#/sale"> Savings </a> <br/>
                <a style={{ textDecoration: 'none' }} className="dropdownLink" onClick={setReviews} id="dropdownLinkTwo" href="#/reviews"> Reviews </a> <br/>
                <a style={{ textDecoration: 'none' }} className="dropdownLink" onClick={setTitle} id="dropdownLinkTwo" href="#/title"> Title </a> 
            </div>
        </DropdownButton>
        <p className="currentPage"> Showing page {page+1} of {formattedMaxPage} </p>
            <button onClick={prevPage}>Previous Page</button> 
            <div className="GameInfoContainer">
                {gameData.slice(0, arrayLength).map(function(gameNum, index){
                return(<GameInfo data={gameNum} loading={loaded}    key={index} />)})}
            </div>
            <p className="currentPage"> Showing page {page+1} of {formattedMaxPage} </p>
            <button onClick={prevPage}>Previous Page</button> 
        </div>
    )
}
}
   else {
    return(
        <div className="GamesBelow">
            <h1 className="pageHeader"> Humble Store Games Currently on Sale</h1> 
            <p className="sortedBy">sorted by {sort} </p>
        <DropdownButton id='dropdown-button-drop-down-sort' className="sortDropdown" title='Sort by'>
        <div className="dropdownColumnSort">
        <a style={{ textDecoration: 'none' }} className="dropdownLink" onClick={setPrice} href="#/price"> Low Price </a> <br/>
            <a style={{ textDecoration: 'none' }} className="dropdownLink" onClick={setSavings} id="dropdownLinkTwo" href="#/sale"> Savings </a> <br/>
            <a style={{ textDecoration: 'none' }} className="dropdownLink" onClick={setReviews} id="dropdownLinkTwo" href="#/reviews"> Reviews </a> <br/>
            <a style={{ textDecoration: 'none' }} className="dropdownLink" onClick={setTitle} id="dropdownLinkTwo" href="#/title"> Title </a> 
        </div>
       </DropdownButton>
    <p className="currentPage"> Showing page {page+1} of {formattedMaxPage} </p>
    <button onClick={prevPage}>Previous Page</button> <button onClick={nextPage}> Next Page</button>
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