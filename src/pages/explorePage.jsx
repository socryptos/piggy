import React from "react";
import { useMediaQuery } from "react-responsive";

import { Navigation } from "../components/Navbar/Navigation/Navigation";
import { NavMobile } from "../components/Navbar/NavMobile/NavMobile";
import { Information } from "../components/content/Content";

function findDevice(desktop , tablet, mobile) {
    if (desktop) {
        return "l"
    } else if (tablet) {
        return "m"
    } else if (mobile) {
        return "s"
    }
}


function ExplorePage() {

    const isDesktop = useMediaQuery({ minWidth: 1299 });
    const isTablet = useMediaQuery({ minWidth: 700, maxWidth: 1298 });
    const isMobile = useMediaQuery({ maxWidth: 699 });

    const size = findDevice(isDesktop, isTablet, isMobile)

    return (
        <div className="home">
            { size === "s" || size === "m" ? <NavMobile/> : <Navigation size={size}/> }
            <Information size={size}/>
        </div>
    )
}

export {ExplorePage}