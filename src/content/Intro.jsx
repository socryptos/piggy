import photo from "../images_videos/piggysticker2.png"
import photo2 from "../images_videos/animalFarm.jpeg"

import { useState } from "react"

function Intro() {

    const [ active , setActive ] = useState(false)

    return(
        <>
        <div className="screen">
            <div className="sreen__img">
                <div className="">
                    <img src={photo} alt="" />
                </div> 
            </div>
            <div className="screen__text">
                <h1 className="screen_text_title">$PIGGY</h1>
                <div className="screen_text_text">Piggy is for people.</div>
                <div className="screen_text_text">100% of tokens for community.</div>
            </div>
            <div className="screen__text2">
                <h1 className="screen_text_title">All Animals Are Equal.</h1>
                <div className="screen_text_text">But some animals are more equal than others. Who is?</div>
                <div className={`answer ${active ? "" : "hidden"}`}>$PIGGY 🐽</div>
                <div className="guess" onClick={() => setActive(true)}>Get the answer</div>
            </div>
            <div className="sreen__img2">
                <div className="">
                    <img src={photo2} alt="" />
                </div>
            </div>
            
        </div>
        </>
    )
}

export {Intro}