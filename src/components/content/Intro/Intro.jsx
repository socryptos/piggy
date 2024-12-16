import photo from "../../../images_videos/piggysticker2.png"
import photo2 from "../../../images_videos/animalFarm.jpeg"
import styles from './Intro.module.css'

import { useState } from "react"

function Intro() {

    const [ active , setActive ] = useState(false)

    return(
        <>
        <div className={styles.wrapper}>
            <div className={styles.wrapper__img}>
                <div className="">
                    <img src={photo} alt="" />
                </div> 
            </div>
            <div className={styles.wrapper__text}>
                <h1 className={styles.wrapper_text_title}>$PIGGY</h1>
                <div className={styles.wrapper_text_text}>Piggy is for people.</div>
                <div className={styles.wrapper_text_text}>100% of tokens for community.</div>
            </div>
            <div className={styles.wrapper__text2}>
                <h1 className={styles.wrapper_text_title}>All Animals Are Equal.</h1>
                <div className={styles.wrapper_text_text}>But one animal is more equal than others. Who is?</div>
                <div className={`${styles.answer} ${active ? "" : "hidden"}`}>$PIGGY 🐽</div>
                <div className={styles.btn} onClick={() => setActive(true)}>Get the answer</div>
            </div>
            <div className={styles.wrapper__img2}>
                <div className="">
                    <img src={photo2} alt="" />
                </div>
            </div>
            
        </div>
        </>
    )
}

export {Intro}