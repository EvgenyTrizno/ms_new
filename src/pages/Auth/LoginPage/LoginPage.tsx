import { FC } from "react";

import { Login, LoginForPersonal } from "@/widgets";

import styles from "./LoginPage.module.scss";

const LoginPage: FC = () => {
    return (
        <div className={styles.loginPage}>
            {/* <Login /> */}
            <LoginForPersonal />
        </div>
    );
};

export default LoginPage;
