import React, {useEffect} from "react";
import PiggyBank from "./media/piggybank.png";
import { BrowserRouter as Router, Route, NavLink, Switch} from "react-router-dom";
import DropdownButton from 'react-bootstrap/DropdownButton';


export default function Header(){

  const hamburger =  <i className="fas fa-bars" id="hamburgerIcon"></i>;

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
    })}, [])



    return(
  <div className="headerContainer">
      <div className="Header">
          <p className="headerText">GamerPiggy</p>
          <img src={PiggyBank} alt="PiggyBank" className="piggyBank" />
              <DropdownButton id='dropdown-button-drop-down-hamburger' className="hamburgerDropdown" title={hamburger}>
                <div className="dropdownColumnHamburger">
                  <NavLink to="/byfree" style={{ textDecoration: 'none' }} className="dropdownLink" > Free Games </NavLink> <br/>
                  <NavLink to="/byprice" style={{ textDecoration: 'none' }} className="dropdownLink" id="dropdownLinkTwo" > Games By Price </NavLink> <br/>
                  <NavLink to="/bystore" style={{ textDecoration: 'none' }} className="dropdownLink" id="dropdownLinkTwo" > Games By Store </NavLink> <br/>
                  <NavLink to="/game" style={{ textDecoration: 'none' }} className="dropdownLink" id="dropdownLinkTwo" > Deals By Game </NavLink>
                </div>
              </DropdownButton>
        </div>
        <div className="hidden">
          <NavLink to="/byfree" className="headerLink">Free Games</NavLink>
          <NavLink to="/byprice" className="headerLink">Games By Price</NavLink>
          <NavLink to="/bystore" className="headerLink">Games By Store</NavLink>
          <NavLink to="/game" className="headerLink">Deals By Game</NavLink>
        </div>  
  </div>

    )
}