import React, { useState } from "react"
import photo from "../../../images_videos/piggy.png"
import styles from "./howToBuy.module.css"


function HowToBuy() {

    const [isVisible , setVisible] = useState(false)

    function handleSwith() {
        setVisible(true)
    }


    return(
        <>
            <div id='howToBuy'  className={styles.wrapper}>
                <div className={styles.wrapper__uni}>
                    <div className={styles.forUni}>
                        <iframe className={isVisible ? "" : `${styles.ihidden}`} src="https://app.uniswap.org/swap?chain=base&inputCurrency=NATIVE&outputCurrency=0xe3cf8dbcbdc9b220ddead0bd6342e245daff934d" frameborder="1"></iframe>
                        <img className={isVisible ? `${styles.ihidden}` : ''} src={photo} alt="piggy" />
                    </div>
                    <div onClick={handleSwith} className={`${styles.buyBtn} ${isVisible ? `${styles.hidden}` : ""}`} >Buy Piggy Now</div>
                </div>
                <div className={styles.wrapper__info}>
                    <h2>How To Buy $PIGGY</h2>
                    <ul>
                        <li>
                            <div>
                                <h3>1. Create a wallet</h3>
                                <p>If don't have one yet, download any supported crypto wallet like Rabby, MetaMask, or Coinbase Wallet!</p>
                            </div>
                        </li>
                        <li>
                            <div>
                                <h3>2. Get some ETH on BASE</h3>
                                <p>This part is on you, the wallet you used is great to onboard with, or Coinbase!</p>
                            </div>
                        </li>
                        <li>
                            <div>
                                <h3>3. Go to Uniswap to trade $PIGGY</h3>
                                <p>Click the Uniswap button above, and connect your wallet to BASE!</p>
                            </div>
                        </li>
                        <li>
                            <div>
                                <h3>4. Swap ETH or any other token for $PIGGY</h3>
                                <p>Congratulations you're now a BASED PIGGY 🐷</p>
                            </div>
                        </li>
                    </ul>
    
                </div>
            </div>
        </>
    )
}

export {HowToBuy}