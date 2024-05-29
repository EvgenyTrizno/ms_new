import { FC } from "react";
import styles from "./styles.module.scss";
import { PropsWithClassName } from "@/shared/types";
import { CountProgress } from "../CountProgress";

type Props = {
    title: string;
    count: number;
}

export const CountItem: FC<PropsWithClassName<Props>>= ({title, count}) => {
    return(
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <p className={styles.title}>{title}</p>

                <p className={styles.count}>{count}</p>
            </div>

            <CountProgress />
        </div>
    )
}