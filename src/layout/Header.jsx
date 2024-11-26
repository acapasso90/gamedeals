import React from "react";
import PiggyBank from "../media/piggybank.png";

export default function Header(){
    return(
        <div className="header-container">
            <div className='header-branding'>    
                <div> GamerPiggy </div>
                <img src={PiggyBank} alt="PiggyBank" className="piggyBank" />
            </div>

        </div>
    
    )
}