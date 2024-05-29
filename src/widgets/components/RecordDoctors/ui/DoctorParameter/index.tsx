import styles from "./styles.module.scss";

export const DoctorParameter = () => {
    return(
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <p className={styles.title}>Помощь в лечении</p>

                <div className={styles.percentWrapper}>
                    <p className={styles.percent}>64%</p>
                    <p className={styles.change}>+0,55%</p>
                </div>

                <p className={styles.lastDays}>За последние 30 дней</p>
            </div>
        </div>
    )
}