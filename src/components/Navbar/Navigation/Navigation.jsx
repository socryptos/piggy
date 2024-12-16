import { useState } from "react";
import styles from './Navigation.module.css'


import { InactiveNav } from "../InactiveNav/InactiveNav";
import { ActiveNav } from "../ActiveNav/ActiveNav";


function Navigation(props) {

    const [ isActive, setActive ] = useState(false)

    return(
        <div className={isActive ? `${styles.nav}` : `${styles.nav} ${styles.navClosed}`} >
            { isActive ?  <ActiveNav toggler={setActive}/>  : <InactiveNav toggler={setActive}/> }
        </div>
    )
}

export {Navigation}