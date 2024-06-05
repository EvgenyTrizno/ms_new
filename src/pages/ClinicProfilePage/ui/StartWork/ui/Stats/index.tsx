import styles from "./styles.module.scss";
import cn from "clsx";

export const Stats = () => {
    return(
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <div className={styles.badge}>
                    Выбранный диапозон 3 часа
                </div>

                <div className={cn(styles.badge, {
                    [styles.success]: true
                })}>Выполнен рабочий день</div>

                <input className={styles.dateInput} type="date" />
            </div>
        </div>
    )
}