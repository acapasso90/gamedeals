import React from "react";
import { BrowserRouter as Router, Route, NavLink, Switch} from "react-router-dom";

export default function Home(){
//API Documentation
//https://apidocs.cheapshark.com/#c33f57dd-3bb3-3b1f-c454-08cab413a115


    return(
    <div className="PriceSelect">
      <div className="PriceSelectrow">
        <div className="column">
          <h2>Free Games </h2>
          <ul>
            <li> <NavLink to="/free/pc"> Free PC Games</NavLink> </li>
            <li> <NavLink to="/free/browser"> Free Browser Games</NavLink> </li>
          </ul>
        </div>

            <div className="column">
          <h2>Lowest Price by Game </h2>
          <ul>
            <li><NavLink to="/game"> Find Lowest Price</NavLink> </li>
          </ul>
            </div>

            <div className="column">
          <h2>Games by Price </h2>
          <ul>
          <li><NavLink to="/under1"> $1 and under</NavLink> </li>
          <li> <NavLink to="/under5"> $5 and under </NavLink> </li>
          <li> <NavLink to="/under10"> $10 and under</NavLink> </li>
          <li><NavLink to="/under15">  $15 and under </NavLink> </li>
          <li> <NavLink to="/under20"> $20 and under</NavLink> </li>
          </ul>
            </div>

            <div className="column">
            <h2>Games on Sale by Store</h2>
            <ul>
            <li><NavLink to="/steam"> Steam </NavLink> </li>
            <li><NavLink to="/gamersgate"> GamersGate </NavLink> </li>
            <li><NavLink to="/epicgames"> EpicGames </NavLink> </li>
            <li><NavLink to="/humblestore"> Humble Store </NavLink> </li>
            <li><NavLink to="/fanatical"> Fanatical </NavLink> </li>
            <li><NavLink to="/gog">GOG </NavLink></li>
            <li> <NavLink to="/indiegala">Indiegala </NavLink></li>
            <li><NavLink to="/greenmangaming">Green Man Gaming </NavLink></li>
            <li><NavLink to="/gamebillet">GameBillet </NavLink></li>
            <li> <NavLink to="/voidu">Voidu </NavLink> </li>
            </ul>
          </div>
      </div>


    </div>)
}