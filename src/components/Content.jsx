import { Intro } from "../content/Intro"
import { KeyDetails } from "../content/KeyDetail";
import { HowToBuy } from "../content/HowToBuy"
import { Bucet } from "../content/Bucket";
import { Tokenomics } from "../content/Tokenonics";
import { PriceInfo } from "../content/PiceInfo";
import { useEffect } from "react";

function Information() {

    useEffect(() => {
        window.addEventListener('load', () => {
            if (window.location.hash === '#howToBuy') {
                // Отключаем автоматический скролл
                document.documentElement.scrollTop = 0; // Прокрутка к началу страницы
            }
        });
    },[])

    return(
        <div className="content">
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