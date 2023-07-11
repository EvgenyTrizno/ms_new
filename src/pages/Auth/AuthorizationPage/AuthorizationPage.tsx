import { FC } from "react";

import { Authorization } from "@/widgets";

import styles from "./AuthorizationPage.module.scss";

const AuthorizationPage: FC = () => {
    return (
        <div className={styles.container}>
            <Authorization />
        </div>
    );
};

export default AuthorizationPage;
