import { FC } from "react";
import { TProps } from "./types";

import { Header, Menu } from "../../widgets";

import styles from "./Layout.module.scss";

export const Layout: FC<TProps> = ({ children }) => {
    return (
        <div className={styles.layout}>
            <Header />
            <div className={styles.container}>
                <Menu />
                <div className={styles.main}>{children}</div>
            </div>
        </div>
    );
};
