import React from "react";
import { BrowserRouter as Router, Route, NavLink, Switch} from "react-router-dom";

export default function PriceSelect(){
//API Documentation
//https://apidocs.cheapshark.com/#c33f57dd-3bb3-3b1f-c454-08cab413a115


    return(
    <div className="PriceSelect">
      <div className="row">
        <div className="column">
          <div className="Free">
            <NavLink to="/free/pc"> Free PC Games</NavLink> <br />
            <NavLink to="/free/browser"> Free Browser Games</NavLink>
          </div>
        </div>

        <div className="column">
          <div className="GamesByPrice">
            <NavLink to="/under5"> Under $5 </NavLink> <br />
            <NavLink to="/under10"> Under $10</NavLink> <br />
            <NavLink to="/under15"> Under $15 </NavLink> <br />
            <NavLink to="/under20"> Under $20 </NavLink> <br />
          </div>
        </div>

        <div className="column">
          <div className="GamesByStore">
            <h2>Games on Sale by Store</h2>
            <NavLink to="/steam"> Steam </NavLink> <br />
            <NavLink to="/gamersgate"> GamersGate </NavLink> <br />
            <NavLink to="/epicgames"> EpicGames </NavLink> <br />
            <NavLink to="/humblestore"> Humble Store </NavLink> <br />
            <NavLink to="/fanatical"> Fanatical </NavLink> <br />
            <NavLink to="/gog">GOG </NavLink><br />
            <NavLink to="/indiegala">Indiegala </NavLink><br />
            <NavLink to="/greenmangaming">Green Man Gaming </NavLink> <br />
            <NavLink to="/gamebillet">GameBillet </NavLink> <br />
            <NavLink to="/voidu">Voidu </NavLink> < br />
            <NavLink to="/gamesplanet">Gamesplanet</NavLink>
          </div>
      </div>
    
      </div>


    </div>)
}