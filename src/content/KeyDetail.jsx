
function KeyDetails() {

    function handleCopy() {
        const textToCopy = document.getElementById("address").innerText;

        try {
            navigator.clipboard.writeText(textToCopy);
        } catch (err) {}
    }
    

    return(
        <div id="key">
            <div className="key__info">
                <div className="key__info_title">Key details:</div>
                <div className="key__info_text">Token address:</div>
                <div id="address" className="key__info_address" onClick={handleCopy}>0xe3CF8dBcBDC9B220ddeaD0bD6342E245DAFF934d</div>
                <div className="key__info_supply">Token Supply: 69,000,000,000</div>
                <div className="key__info_chain">Chain: Base</div>
            </div>
            <div className="key__links">
                <a href="https://basescan.org/token/0xe3CF8dBcBDC9B220ddeaD0bD6342E245DAFF934d" target="_blank" rel="noopener noreferrer">Basescan</a>
                <a href="https://app.uniswap.org/explore/tokens/base/0xe3cf8dbcbdc9b220ddead0bd6342e245daff934d" target="_blank" rel="noopener noreferrer">Uniswap</a>
                <a href="https://dexscreener.com/base/0xf16eaf2801d9ded435b7fc5f0ec78048c4142c3e" target="_blank" rel="noopener noreferrer">DexScreener</a>
                <a href="https://www.dextools.io/app/en/base/pair-explorer/0xf16eaf2801d9ded435b7fc5f0ec78048c4142c3e?t=1732755759886" target="_blank" rel="noopener noreferrer">Dextools</a>
                <a href="https://www.coingecko.com/en/coins/piggy-2" target="_blank" rel="noopener noreferrer">Coingeko</a>
            </div>
        </div>
    )
}

export {KeyDetails}