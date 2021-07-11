import React from "react";
import { BrowserRouter as Router, Route, NavLink, Switch} from "react-router-dom";

export default function FreeSelect(){
//API Documentation
//https://apidocs.cheapshark.com/#c33f57dd-3bb3-3b1f-c454-08cab413a115


    return(
    <div className="PriceSelect">
      <div className="PriceSelectrow">

      <div className="column">
          <h2 className="pageHeader">Free Games </h2>
          <ul>
          <li><NavLink to="/free/epic">Free at EpicGames</NavLink></li>
            <li> <NavLink to="/free/pc"> Free PC Games</NavLink> </li>
            <li> <NavLink to="/free/browser"> Free Browser Games</NavLink> </li>
          </ul>
        </div>

      </div>


    </div>)
}