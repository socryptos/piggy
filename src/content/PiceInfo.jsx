import { useEffect, useState } from "react";

async function getLsatTokenInfo() {
    const url = `https://api.dexscreener.com/latest/dex/pairs/base/0xf16eaf2801d9ded435b7fc5f0ec78048c4142c3e`;

    const response = await fetch(url);
    const data = await response.json();

    const priceInNative = data.pairs[0].priceNative;
    const priceInUsd = data.pairs[0].priceUsd;
    const fdv = data.pairs[0].fdv;
    const marketCap = data.pairs[0].marketCap;
    const priceChange = data.pairs[0].priceChange;
    const volume = data.pairs[0].volume;
    const liquidity = data.pairs[0].liquidity.usd;

    return { marketCap, priceChange, volume, liquidity };
}


function PriceInfo() {
    
    const [data, setData] = useState(null); 
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        
        const fetchData = async () => {
            try {
                const tokenInfo = await getLsatTokenInfo();
                setData(tokenInfo); 
            } catch (error) {
                console.error("Ошибка при загрузке данных:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData(); 
    }, []); 

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div id="priceInfo" className="priceInfo">
            <h3>Market Cap : {Math.round(Number(data.marketCap)).toLocaleString("en-US")}</h3>
            <h3>Price Change : {Math.round(Number(data.priceChange["h24"])).toLocaleString("en-US")}%</h3>
            <h3>Volume : {Math.round(Number(data.volume["h24"])).toLocaleString("en-US")}</h3> 
            <h3>Liquidity : {Math.round(Number(data.liquidity)).toLocaleString("en-US")}</h3> 
        </div>
    );
       
}

export {PriceInfo}