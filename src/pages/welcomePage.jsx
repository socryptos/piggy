import React from "react";
import { Link } from "react-router-dom";


// eslint-disable-next-line
function WelcomePage() {

    return (
        <div className="welcome">
            <div className="forVideo">
                {/* <video src={video} autoPlay loop></video> */}
            </div>
            <div className="forLink">
                <Link className="toExpole" to="/explore#priceInfo">Explore Piggy</Link> 
            </div>  
        </div>
    )
}

export {WelcomePage}