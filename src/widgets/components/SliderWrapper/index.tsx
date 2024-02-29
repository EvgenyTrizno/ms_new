import { FC, ReactNode } from "react";
import styles from "./styles.module.scss";

type Props = {
    children: ReactNode;
}

export const SliderWrapper: FC<Props> = ({children}) => {
    return(
        <div className={styles.wrapper}>
            {children}
        </div>
    )
}