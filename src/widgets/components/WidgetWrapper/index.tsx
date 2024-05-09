import { PropsWithClassName } from "@/shared/types";
import { FC, PropsWithChildren } from "react";
import styles from "./styles.module.scss";
import cn from "clsx";

type Props = {
    title: string;
    headerRight?: JSX.Element;
}

export const WidgetWrapper: FC<PropsWithClassName<PropsWithChildren<Props>>> = ({className, children, title, headerRight}) => {
    return(
        <div className={cn(className, styles.wrapper)}>
            <div className={styles.header}>
                <h4 className={styles.title}>{title}</h4>

                {headerRight}
            </div>

            <div className={styles.content}>
                {children}
            </div>
        </div>
    )
}