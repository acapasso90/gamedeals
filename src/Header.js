import React, {useEffect} from "react";
import PiggyBank from "./media/piggybank.png";
import { BrowserRouter as Router, Route, NavLink, Switch} from "react-router-dom";


export default function Header(){

  useEffect(() => {
    //Hover effect for Header 
    let header = document.querySelector('.headerContainer');
    let hidden = document.querySelector('.hidden');

    header.addEventListener("mouseover", e => {
      hidden.style.animation = '1.2s slide-in normal';
      hidden.style.display = 'block';
    });
      header.addEventListener("mouseout", e => {
        hidden.style.animation = '1.2s slide-out normal';
        hidden.style.display = 'none';
  }); }, [])



    return(
  <div className="headerContainer">
      <div className="Header">
                    <p className="headerText">GamerPiggy</p>
                <img src={PiggyBank} alt="PiggyBank" className="piggyBank" /> 
        </div>
        <div className="hidden">
                    <NavLink to="/byprice">Games By Price</NavLink>
                    <NavLink to="/bystore">Games By Store</NavLink>
                    <NavLink to="/game">Deals By Game</NavLink>
                    <NavLink to="/byfree">Free Games</NavLink>
                    </div>  
  </div>

    )
}