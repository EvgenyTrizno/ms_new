import { FC } from "react";
import { TProps } from "./types";

import { Header, Menu } from "@/widgets";
import { MOBILE_SCREEN } from "@/shared/config";

import styles from "./Layout.module.scss";

export const Layout: FC<TProps> = ({ children }) => {
    return (
        <div className={styles.layout}>
            {MOBILE_SCREEN ? (
                <div>
                    <h1>mobile</h1>
                </div>
            ) : (
                <>
                    <Header />
                    <div className={styles.container}>
                        <Menu />
                        <div className={styles.main}>{children}</div>
                    </div>
                </>
            )}
        </div>
    );
};
