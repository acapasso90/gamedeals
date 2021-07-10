import React from "react";
import { BrowserRouter as Router, Route, NavLink, Switch} from "react-router-dom";

export default function PriceSelect(){
//API Documentation
//https://apidocs.cheapshark.com/#c33f57dd-3bb3-3b1f-c454-08cab413a115


    return(
    <div className="PriceSelect">
      <div className="PriceSelectrow">

            <div className="column">
          <h2>Games by Price </h2>
          <ul>
          <li><NavLink to="/under1"> $1 and under </NavLink> </li>
          <li> <NavLink to="/under5"> $5 and under </NavLink> </li>
          <li> <NavLink to="/under10"> $10 and under</NavLink> </li>
          <li><NavLink to="/under15">  $15 and under </NavLink> </li>
          <li> <NavLink to="/under20"> $20 and under</NavLink> </li>
          </ul>
            </div>

      </div>


    </div>)
}