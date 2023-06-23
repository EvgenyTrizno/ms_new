import { FC } from "react";

import { Login } from "../../../widgets";

import styles from "./LoginPage.module.scss";

export const LoginPage: FC = () => {
    return (
        <div className={styles.loginPage}>
            <Login />
        </div>
    );
};
