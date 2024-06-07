import styles from "./styles.module.scss";

export const CountryItem = () => {
    return(
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <p className={styles.value}><span>215</span> of <span>651</span></p>
                <p className={styles.name}>Malachite</p>
            </div>

            <div className={styles.progress}>
                <div className={styles.progressValue}></div>
            </div>
        </div>
    )
}