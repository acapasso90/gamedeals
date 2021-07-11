import React from "react";
import { BrowserRouter as Router, Route, NavLink, Switch} from "react-router-dom";

export default function StoreSelect(){
//API Documentation
//https://apidocs.cheapshark.com/#c33f57dd-3bb3-3b1f-c454-08cab413a115


    return(
    <div className="PriceSelect">
      <div className="PriceSelectrow">

      
      <div className="column">
            <h2 className="pageHeader">Games on Sale by Store</h2>
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