import { FC, PropsWithChildren } from "react";
import { IContainerProps } from "./types";

import styles from "./styles.module.scss";

export const Container: FC<IContainerProps & PropsWithChildren> = ({
    children,
    height,
}) => {
    return (
        <div style={{ height }} className={styles.container}>
            {children}
        </div>
    );
};
