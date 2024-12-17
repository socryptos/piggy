import styles from './Bucket.module.css'

function Bucet() {

    return(
        <>
            <div id="piggy" className={styles.wrapper}>
                    <div className={styles.wrapper__bucket}>
                            <h2>🐽 The Slop Bucket</h2>
                            <p>Earn more $PIGGY by staking your $PIGGY/$ETH LP token in the Slop Bucket.</p>
                            <p>Deposits open from Nov 25th, 2024  until rewards aredepleted (estimated April-May 2025).</p>
                            <div className={styles.btn}><a href="https://www.superform.xyz/piggy/bucket/" target="_blank" rel="noopener noreferrer">Slop Bucket</a></div>
                    </div>
                    <div className={styles.wrapper__roasting}>
                        <h2>🎄 The Christmas Roast</h2>
                        <p>Any unclaimed $PIGGY will be burned on Dec 25th, 2024. Ownership of the $PIGGY contract will be revoked after this date.</p>
                    </div>
            </div>
        </>
    )
}

export {Bucet}