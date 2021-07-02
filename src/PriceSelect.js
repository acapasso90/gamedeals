import React from "react";
import Fifteen from "./Fifteen";
import { BrowserRouter as Router, Route, NavLink, Switch} from "react-router-dom";

export default function PriceSelect(){
//API Documentation
//https://apidocs.cheapshark.com/#c33f57dd-3bb3-3b1f-c454-08cab413a115


    return(
    <div className="PriceSelect">
  <NavLink to="/under15"> Under $15 </NavLink> <br />
    </div>)
}