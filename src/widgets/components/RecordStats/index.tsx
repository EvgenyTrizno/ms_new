import { FC } from "react";
import { WidgetWrapper } from "../WidgetWrapper"
import styles from "./styles.module.scss";
import { Table } from "./ui/Table";
import { PropsWithClassName } from "@/shared/types";

export const RecordStats: FC<PropsWithClassName> = ({className}) => {
    return(
        <WidgetWrapper className={className} title="Статистика">
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