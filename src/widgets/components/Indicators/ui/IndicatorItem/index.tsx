import { ProgressBar } from "@/widgets/components/ProgressBar";
import styles from "./styles.module.scss";
import { FC } from "react";
import { PropsWithClassName } from "@/shared/types";
import cn from "clsx";

export const IndicatorItem: FC<PropsWithClassName> = ({className}) => {
    return(
        <div className={cn(className, styles.wrapper)}>
            <div className={styles.left}>
                <p className={styles.title}>Помощь в лечении</p>
            </div>

            <div className={styles.right}>
                <ProgressBar />

                <p className={styles.value}>88%</p>
            </div>
        </div>
    )
}