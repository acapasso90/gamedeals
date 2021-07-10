import React, {useEffect} from "react";
import PiggyBank from "./media/piggybank.png";
import { BrowserRouter as Router, Route, NavLink, Switch} from "react-router-dom";


export default function Header(){

  useEffect(() => {
    //Hover effect for Header 
    let header = document.querySelector('.headerContainer');
    let hidden = document.querySelector('.hidden');

    header.addEventListener("mouseover", e => {
      hidden.style.display = 'block';});
      header.addEventListener("mouseout", e => {
        hidden.style.display = 'none';
  }); }, [])



    return(
  <div className="headerContainer">
      <div className="Header">
                    <p className="headerText">GamerPiggy</p>
                <img src={PiggyBank} alt="PiggyBank" className="piggyBank" /> 
        </div>
        <div className="hidden">
                    <NavLink to="/ByPrice">By Price</NavLink>
                    <NavLink to="/ByStore">By Store</NavLink>
                    <NavLink to="/ByGame">By Game</NavLink>
                    <NavLink to="/FreeGames">Free Games</NavLink>
                    </div>  
  </div>

    )
}