import styles from "./NavMobile.module.css"
import piggy_logo from "../../../images_videos/piggy_logo.jpeg"

function NavMobile() {

    return(
        <div className={styles.wrapper}>
            <div><a href="#priceInfo"><img className={styles.logo} src={piggy_logo} alt="logo"/></a></div>
            <div><a href="#key"><img src="https://img.icons8.com/?size=40&id=77&format=png&color=ff13f0" alt="key" /></a></div>
            <div><a href="#howToBuy"><img src="https://img.icons8.com/?size=40&id=7172&format=png&color=ff13f0" width="40px" alt="buy" /></a></div>
            <div><a href="#piggy"><img src="https://img.icons8.com/?size=50&id=wv5Hl1ChDaN5&format=png&color=ff13f0" width="50px" alt="bucket" /></a></div>
            <div><a href="#oinkenomicks"><img src="https://img.icons8.com/?size=40&id=6552&format=png&color=ff13f0" width="40px" alt="token" /></a></div>
        </div>
    )
}

export {NavMobile}