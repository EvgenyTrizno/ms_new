import { WidgetWrapper } from "../WidgetWrapper"
import styles from "./styles.module.scss";
import { Table } from "./ui/Table";

export const RecordStats = () => {
    return(
        <WidgetWrapper title="Статистика">
            <div className={styles.content}>
                <Table />
                <div className={styles.secondaryInfo}>
                    <div className={styles.infoItem}>
                        <p className={styles.infoItemTitle}>Повторное изучение</p>
                        <p className={styles.infoItemValue}>7 раз</p>
                    </div>

                    <div className={styles.infoItem}>
                        <p className={styles.infoItemTitle}>Повторное изучение</p>
                        <p className={styles.infoItemValue}>7 раз</p>
                    </div>

                    <div className={styles.infoItem}>
                        <p className={styles.infoItemTitle}>Повторное изучение</p>
                        <p className={styles.infoItemValue}>7 раз</p>
                    </div>

                    <div className={styles.infoItem}>
                        <p className={styles.infoItemTitle}>Повторное изучение</p>
                        <p className={styles.infoItemValue}>7 раз</p>
                    </div>
                </div>
            </div>
        </WidgetWrapper>
    )
}