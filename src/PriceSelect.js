import React from "react";
import { BrowserRouter as Router, Route, NavLink, Switch} from "react-router-dom";

export default function PriceSelect(){
//API Documentation
//https://apidocs.cheapshark.com/#c33f57dd-3bb3-3b1f-c454-08cab413a115


    return(
    <div className="PriceSelect">
  <NavLink to="/under5"> Under $5 </NavLink> <br />
  <NavLink to="/under10"> Under $10</NavLink> <br />
  <NavLink to="/under15"> Under $15 </NavLink> <br />
  <NavLink to="/under20"> Under $20 </NavLink> <br />

  <NavLink to="/steam"> Steam Games on Sale </NavLink> <br />
  <NavLink to="/gamersgate"> GamersGate Games on Sale </NavLink> <br />
  <NavLink to="/epicgames"> EpicGames Games on Sale </NavLink> <br />
  <NavLink to="/humblestore"> Humble Store Games on Sale </NavLink> <br />
  <NavLink to="/fanatical"> Fanatical Games on Sale </NavLink> <br />
  <NavLink to="/gog">GOG Games on Sale</NavLink>
  <NavLink to="/indiegala">Indiegala Games on sale </NavLink>
    </div>)
}