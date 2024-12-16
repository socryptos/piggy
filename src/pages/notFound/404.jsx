
import styles from "./404.module.css"

function NotFound() {

    return(
        <>
            <div className={styles.notFound}>
                <h1>Page not found</h1>
            </div>
        </>
    )
}

export {NotFound}