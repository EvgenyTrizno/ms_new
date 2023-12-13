import { FC } from "react";

import mark from "/assets/mark-gray.svg";
import trash from "/assets/trash-gray.svg";
import styles from "./styles.module.scss";

export const MailManage: FC = () => {
    return (
        <div className={styles.manage}>
            <img src={mark} alt="" />
            <img src={trash} alt="" />
        </div>
    );
};
