import { FC } from "react";

import { Authorization } from "@/widgets";

import styles from "./AuthorizationPage.module.scss";

export const AuthorizationPage: FC = () => {
    return (
        <div className={styles.container}>
            <Authorization />
        </div>
    );
};
