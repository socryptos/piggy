import React from "react";

import { Navigation } from "../components/Navbar/Navigation/Navigation";
import { Information } from "../components/content/Content";


function ExplorePage() {

    return (
        <div className="home">
            <Navigation/>
            <Information/>
        </div>
    )
}

export {ExplorePage}