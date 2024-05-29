import { CountItem } from "../CountItem";
import styles from "./styles.module.scss";
import cn from "clsx";

export const DoctorsCount = () => {
    return(
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <h6 className={styles.title}>Количество врачей</h6>

                <p className={styles.count}>7</p>
            </div>

            <div className={cn(styles.list)}>
                <CountItem title="Успех в лечении" count={87} />
                <CountItem title="Точность заключения" count={17} />
                <CountItem title="Эффективность" count={71} />
            </div>
        </div>
    )
}