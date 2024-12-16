import { Intro } from "./Intro/Intro"
import { KeyDetails } from "./KeyDetails/KeyDetail";
import { HowToBuy } from "./HowToBuy/HowToBuy"
import { Bucet } from "./Bucket/Bucket";
import { Tokenomics } from "./Tokenomics/Tokenonics";
import { PriceInfo } from "./PriceInfo/PiceInfo";

import styles from './Content.module.css'


function Information() {

    return(
        <div className={styles.content}>
            <PriceInfo/>
            <Intro/>
            <KeyDetails/>
            <HowToBuy/>
            <Bucet/>
            <Tokenomics/>
            <footer>© ® 2024™ $PIGGY™</footer>
        </div>
    )
}

export {Information}