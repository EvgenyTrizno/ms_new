import { FC } from "react";
import { Link } from "react-router-dom";

import styles from "./styles.module.scss";

export const ForgotPassword: FC = () => {
    return (
        <Link className={styles.link} to="/recovery">
            Забыли пароль?
        </Link>
    );
};
