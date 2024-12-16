import React from "react"
import styles from './InactiveNav.module.css'

import arrow from "../../../images_videos/arrow.png"
import piggy_logo from "../../../images_videos/piggy_logo.jpeg"



function InactiveNav(props) {

    function handleSwith() {
        props.toggler(true)
    }

    return(
        <>
            <div className={styles.toggler} onClick={handleSwith}>
                <img className={styles.toggler__img} src={arrow} alt="arrow" height="25px"/>
            </div>
            <div className={styles.info}>
                <div className="info__name"><a href="#priceInfo" ><img className={styles.logo} src={piggy_logo} width="40px" alt="piggy logo" /></a></div>
                <div className="info__key"><a href="#key"><img src="https://img.icons8.com/?size=40&id=77&format=png&color=ff13f0" alt="key" /></a></div>
                <div className="info__buy"><a href="#howToBuy"><img src="https://img.icons8.com/?size=40&id=7172&format=png&color=ff13f0" width="40px" alt="buy" /></a></div>
                <div className="info__bucket"><a href="#piggy"><img src="https://img.icons8.com/?size=50&id=wv5Hl1ChDaN5&format=png&color=ff13f0" width="50px" alt="bucket" /></a></div>
                <div className="info__oinknomicks"><a href="#oinkenomicks"><img src="https://img.icons8.com/?size=40&id=6552&format=png&color=ff13f0" width="40px" alt="token" /></a></div>
            </div>
            <div className={styles.socials}>
                <div className="socials__x"> <a href="https://x.com/based_piggy" target="_blank" rel="noopener noreferrer"><img src="https://img.icons8.com/?size=40&id=9R1sV3QvY18K&format=png&color=ff13f0" alt="" /></a></div>
                <div className="socials__tg"><a href="https://t.me/piggyisforthepeople" target="_blank" rel="noopener noreferrer"><img src="https://img.icons8.com/?size=40&id=YfCbGWCWcuar&format=png&color=ff13f0" alt="" /></a></div>
            </div>
        </>
    )
}

export {InactiveNav}