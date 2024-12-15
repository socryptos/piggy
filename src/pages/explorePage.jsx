import React from "react";

import { Navigation } from "../components/Navbar/Navigation";
import { Information } from "../components/Content";



function ExplorePage() {

    return (
        <div className="home">
            <Navigation/>
            <Information/>
        </div>
    )
}

export {ExplorePage}