import React, {useState, useEffect} from "react";
import axios from "axios";
import DropdownButton from 'react-bootstrap/DropdownButton';
import GameInfo from "./GameInfo";

export default function Fifteen(){
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
    let apiURL = `https://www.cheapshark.com/api/1.0/deals?upperPrice=15&sortBy=${sort}&pageSize=35&pageNumber=${page}`;
    axios.get(apiURL).then(SetPrices)

}

useEffect(() => {
    let apiURL = `https://www.cheapshark.com/api/1.0/deals?upperPrice=15&sortBy=${sort}&pageSize=35&pageNumber=${page}`;
    axios.get(apiURL).then(SetPrices)
  }, [page, sort]); 

function nextPage(){
setPage(page+1);
}

function prevPage(){
    setPage(page-1);
    }

//First page of $15 games
//https://www.cheapshark.com/api/1.0/deals?upperPrice=15&pageNumber=1

if (loaded){
if (page === 0){
    return (
        <div className="Fifteen">
            <h1> Games currently below $15</h1> 
            <DropdownButton id='dropdown-button-drop-down-sort' className="sortDropdown" title='Sort by'>
            <div className="dropdownColumnSort">
                <a style={{ textDecoration: 'none' }} className="dropdownLink" onClick={() => setSort("Price")} href="#/price"> Price </a> <br/>
                <a style={{ textDecoration: 'none' }} className="dropdownLink" onClick={() => setSort("Savings")} id="dropdownLinkTwo" href="#/sale"> Sale </a> <br/>
                <a style={{ textDecoration: 'none' }} className="dropdownLink" onClick={() => setSort("Reviews")} id="dropdownLinkTwo" href="#/reviews"> Reviews </a> <br/>
                <a style={{ textDecoration: 'none' }} className="dropdownLink" onClick={() => setSort("Store")} id="dropdownLinkTwo" href="#/store"> Store </a> <br/>
                <a style={{ textDecoration: 'none' }} className="dropdownLink" onClick={() => setSort("Title")} id="dropdownLinkTwo" href="#/title"> Title </a> <br/>
            </div>
        </DropdownButton>
            <button onClick={nextPage}> Next Page</button>
            {gameData.slice(0, arrayLength).map(function(gameNum, index){
            return(<GameInfo data={gameNum} page={page} key={index} />)})}
        </div>
    )}
else if (page > 0 && page < maxPageLength){
    return (
        <div className="Fifteen">
            <h1> Games currently below $15</h1>
            <DropdownButton id='dropdown-button-drop-down-sort' className="sortDropdown" title='Sort by'>
            <div className="dropdownColumnSort">
                <a style={{ textDecoration: 'none' }} className="dropdownLink" onClick={() => setSort("Price")} href="#/price"> Price </a> <br/>
                <a style={{ textDecoration: 'none' }} className="dropdownLink" onClick={() => setSort("Savings")} id="dropdownLinkTwo" href="#/sale"> Sale </a> <br/>
                <a style={{ textDecoration: 'none' }} className="dropdownLink" onClick={() => setSort("Reviews")} id="dropdownLinkTwo" href="#/reviews"> Reviews </a> <br/>
                <a style={{ textDecoration: 'none' }} className="dropdownLink" onClick={() => setSort("Store")} id="dropdownLinkTwo" href="#/store"> Store </a> <br/>
                <a style={{ textDecoration: 'none' }} className="dropdownLink" onClick={() => setSort("Title")} id="dropdownLinkTwo" href="#/title"> Title </a> <br/>
            </div>
        </DropdownButton>
           <button onClick={prevPage}>Previous Page</button> <button onClick={nextPage}> Next Page</button>

            {gameData.slice(0, arrayLength).map(function(gameNum, index){
            return(<GameInfo data={gameNum}  page={page} key={index} />)})}
        </div>
    )
}
else {
    return (
        <div className="Fifteen">
            <h1> Games currently below $15</h1>
            <DropdownButton id='dropdown-button-drop-down-sort' className="sortDropdown" title='Sort by'>
            <div className="dropdownColumnSort">
                <a style={{ textDecoration: 'none' }} className="dropdownLink" onClick={() => setSort("Price")} href="#/price"> Price </a> <br/>
                <a style={{ textDecoration: 'none' }} className="dropdownLink" onClick={() => setSort("Savings")} id="dropdownLinkTwo" href="#/sale"> Sale </a> <br/>
                <a style={{ textDecoration: 'none' }} className="dropdownLink" onClick={() => setSort("Reviews")} id="dropdownLinkTwo" href="#/reviews"> Reviews </a> <br/>
                <a style={{ textDecoration: 'none' }} className="dropdownLink" onClick={() => setSort("Store")} id="dropdownLinkTwo" href="#/store"> Store </a> <br/>
                <a style={{ textDecoration: 'none' }} className="dropdownLink" onClick={() => setSort("Title")} id="dropdownLinkTwo" href="#/title"> Title </a> <br/>
            </div>
        </DropdownButton>
            <button onClick={prevPage}>Previous Page</button> 
            {gameData.slice(0, arrayLength).map(function(gameNum, index){
            return(<GameInfo data={gameNum}  page={page} key={index} />)})}
        </div>
    )
}
}
   else { SearchPrices();
    return(
    <div className="Fifteen">
        15
    </div>)}
}