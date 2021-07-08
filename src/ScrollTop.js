import React from "react";
import ScrollToTop from "react-scroll-to-top";

export default function ScrollTop(){
const Scroll = <h2><i class="fas fa-long-arrow-alt-up"></i> Top</h2>
    return(
    <div className="ScrollTop">
         <ScrollToTop smooth component={Scroll} />
    </div>)

}