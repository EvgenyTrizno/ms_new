import { FC } from "react";

import styles from "./styles.module.scss";
import { Number } from "../Number";
import { Email } from "../Email";

export const Protection: FC = () => {
    return (
        <div className={styles.wrapper}>
            <Number />
            <Email />
        </div>
    );
};
