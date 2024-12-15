import { useState } from "react";


import { InactiveNav } from "./InactiveNav";
import { ActiveNav } from "./ActiveNav";


function Navigation() {

    const [ isActive, setActive ] = useState(false)

    return(
        <div className={isActive ? "nav" : "nav navClosed"} >
            { isActive ?  <ActiveNav toggler={setActive}/>  : <InactiveNav toggler={setActive}/> }
        </div>
    )
}

export {Navigation}